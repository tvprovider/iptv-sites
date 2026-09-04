// Cloudflare Pages Function: POST /api/lead
// Requires the RESEND_API_KEY environment variable to be set in the hosting
// dashboard (never committed to the repo, never sent to the client).
// Deploy target: any host that runs Cloudflare Pages Functions (or an
// equivalent edge-function runtime) alongside the static build in dist/.

import { emailLayout, htmlToText, dataRows } from '../_email.js';

const LEAD_DESTINATION = 'premiumtv1service@gmail.com';
const MAX_LEN = { name: 200, email: 200, topic: 100, message: 4000, country: 100, phone: 40 };
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
  const country = clean(body.country, MAX_LEN.country);
  const phone = clean(body.phone, MAX_LEN.phone);

  if (!name || !isValidEmail(email) || !message || !country || !phone) {
    return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500 });
  }

  const ownerHtml = emailLayout({
    preheader: `New contact message from ${name}`,
    heading: 'New contact form submission',
    bodyHtml: dataRows([
      ['Name', name],
      ['Email', email],
      ['Country', country],
      ['WhatsApp / Phone', phone],
      ...(topic ? [['Topic', topic]] : []),
      ['Message', message.replace(/\n/g, '<br>')],
    ]),
    ctaLabel: `Reply to ${name}`,
    ctaHref: `mailto:${email}`,
  });

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Hot <leads@iptvhot.org>',
      to: LEAD_DESTINATION,
      reply_to: email,
      subject: `New contact form message${topic ? ` — ${topic}` : ''}`,
      html: ownerHtml,
      text: htmlToText(ownerHtml),
    }),
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
  }

  // Best-effort customer confirmation — the message still counts as received
  // even if this second email fails, since the owner notification above succeeded.
  const customerHtml = emailLayout({
    preheader: "We've received your message and will reply soon.",
    heading: `Thanks for reaching out, ${name}!`,
    bodyHtml: `
      <p style="margin:0 0 14px;">We've received your message and a member of our team will get back to you shortly, usually within one business day.</p>
      <p style="margin:0;">For reference, here's what you sent us:</p>
      <blockquote style="margin:14px 0 0; padding:14px 16px; background:#faf8f8; border-left:3px solid #ed3508; border-radius:4px; font-size:14px; color:#6b615d;">${message.replace(/\n/g, '<br>')}</blockquote>
    `,
    ctaLabel: 'Visit iptvhot.org',
    ctaHref: 'https://iptvhot.org',
  });

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Hot <leads@iptvhot.org>',
      to: email,
      reply_to: LEAD_DESTINATION,
      subject: "We've received your message — IPTV Hot",
      html: customerHtml,
      text: htmlToText(customerHtml),
    }),
  }).catch(() => {});

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
