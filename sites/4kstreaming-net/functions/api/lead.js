// Cloudflare Pages Function: POST /api/lead
// Requires the RESEND_API_KEY environment variable to be set in the hosting
// dashboard (never committed to the repo, never sent to the client).
// Deploy target: any host that runs Cloudflare Pages Functions (or an
// equivalent edge-function runtime) alongside the static build in dist/.

const LEAD_DESTINATION = 'contacts.easymoney@gmail.com';
const MAX_LEN = { name: 200, email: 200, topic: 100, message: 4000 };
const rateLimitStore = new Map(); // best-effort, per-isolate only — see README

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= MAX_LEN.email;
}

function clean(value, max) {
  if (typeof value !== 'string') return '';
  return value.slice(0, max).replace(/[<>]/g, '');
}

function tooManyRequests(ip) {
  const now = Date.now();
  const windowMs = 60_000;
  const limit = 5;
  const entry = rateLimitStore.get(ip) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return entry.count > limit;
}

export async function onRequestPost({ request, env }) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (tooManyRequests(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests' }), { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  // Honeypot: real users never populate this hidden field.
  if (body.company) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const name = clean(body.name, MAX_LEN.name);
  const email = clean(body.email, MAX_LEN.email);
  const topic = clean(body.topic, MAX_LEN.topic);
  const message = clean(body.message, MAX_LEN.message);

  if (!name || !isValidEmail(email) || !message) {
    return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500 });
  }

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'leads@4kstreaming.net',
      to: LEAD_DESTINATION,
      reply_to: email,
      subject: `New contact form message${topic ? ` — ${topic}` : ''}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${topic ? `<p><strong>Topic:</strong> ${topic}</p>` : ''}
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
