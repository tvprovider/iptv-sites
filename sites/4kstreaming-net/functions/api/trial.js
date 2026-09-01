// Cloudflare Pages Function: POST /api/trial
// Forwards a 24-hour trial request to the team inbox via Resend. This
// endpoint does NOT generate or send login credentials itself — there is no
// automated provisioning system, so a person fulfills the trial manually
// after receiving this lead and emails the customer their activation details.

const LEAD_DESTINATION = 'contacts.storfix@gmail.com';
const MAX_LEN = { email: 200, device: 100 };
const rateLimitStore = new Map();

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

  if (body.company) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  const email = clean(body.email, MAX_LEN.email);
  const device = clean(body.device, MAX_LEN.device);

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Missing or invalid email' }), { status: 400 });
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
      from: 'trials@4kstreaming.net',
      to: LEAD_DESTINATION,
      reply_to: email,
      subject: '24-hour trial request',
      html: `
        <h2>New 24-hour trial request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Primary device:</strong> ${device || 'Not specified'}</p>
        <p>Fulfill manually and email the customer their activation details.</p>
      `,
    }),
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
