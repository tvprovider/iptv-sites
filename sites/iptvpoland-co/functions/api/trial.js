// Cloudflare Pages Function: POST /api/trial
// Forwards a 24-hour trial request to the team inbox via Resend. This
// endpoint does NOT generate or send login credentials itself — there is no
// automated provisioning system, so a person fulfills the trial manually
// after receiving this lead and emails the customer their activation details.

import { emailLayout, htmlToText, dataRows } from '../_email.js';

const LEAD_DESTINATION = 'premiumtv1service@gmail.com';
const MAX_LEN = { email: 200, device: 100, country: 100, phone: 40 };
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
  const country = clean(body.country, MAX_LEN.country);
  const phone = clean(body.phone, MAX_LEN.phone);

  if (!isValidEmail(email) || !country || !phone) {
    return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500 });
  }

  const ownerHtml = emailLayout({
    preheader: `New 24-hour trial request from ${email}`,
    heading: 'New 24-hour trial request',
    bodyHtml: dataRows([
      ['Email', email],
      ['Country', country],
      ['WhatsApp / Phone', phone],
      ['Primary device', device || 'Not specified'],
    ]) + '<p style="margin:18px 0 0; font-size:13px; color:#6b615d;">Fulfill manually and email the customer their activation details.</p>',
    ctaLabel: 'Reply to customer',
    ctaHref: `mailto:${email}`,
  });

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Poland <trials@iptvpoland.co>',
      to: LEAD_DESTINATION,
      reply_to: email,
      subject: '24-hour trial request',
      html: ownerHtml,
      text: htmlToText(ownerHtml),
    }),
  });

  if (!resendRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
  }

  // Best-effort customer confirmation — the request still counts as received
  // even if this second email fails, since the owner notification above succeeded.
  const customerHtml = emailLayout({
    preheader: 'Your 24-hour trial request has been received.',
    heading: "You're almost in — trial request received!",
    bodyHtml: `
      <p style="margin:0 0 14px;">Thanks for requesting the 24-hour trial. A member of our team will activate it and send your login/activation details to this email address shortly.</p>
      <p style="margin:0;">Once you receive your details, check out the Setup Guide for step-by-step instructions for your device.</p>
    `,
    ctaLabel: 'View Setup Guide',
    ctaHref: 'https://iptvpoland.co/setup-guide/',
  });

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Poland <trials@iptvpoland.co>',
      to: email,
      reply_to: LEAD_DESTINATION,
      subject: 'Your 24-hour trial request — IPTV Poland',
      html: customerHtml,
      text: htmlToText(customerHtml),
    }),
  }).catch(() => {});

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
