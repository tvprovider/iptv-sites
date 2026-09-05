// Cloudflare Pages Function: POST /api/order
// Forwards a subscription order request to the team inbox via Resend, and
// sends the customer a confirmation. There is no automated checkout or
// payment processing here — a person reviews the order, then manually emails
// the customer a payment link and, after payment, their activation details.

import { emailLayout, htmlToText, dataRows } from '../_email.js';

const LEAD_DESTINATION = 'premiumtv1service@gmail.com';
const MAX_LEN = { name: 200, email: 200, plan: 100, device: 100, phone: 40, country: 100 };
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

  const name = clean(body.name, MAX_LEN.name);
  const email = clean(body.email, MAX_LEN.email);
  const plan = clean(body.plan, MAX_LEN.plan);
  const device = clean(body.device, MAX_LEN.device);
  const phone = clean(body.phone, MAX_LEN.phone);
  const country = clean(body.country, MAX_LEN.country);

  if (!name || !isValidEmail(email) || !plan || !country || !phone) {
    return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), { status: 500 });
  }

  const ownerHtml = emailLayout({
    preheader: `New order — ${plan} — ${email}`,
    heading: 'New order request',
    bodyHtml: dataRows([
      ['Plan', plan],
      ['Name', name],
      ['Email', email],
      ['Country', country],
      ['WhatsApp / Phone', phone],
      ['Device', device || 'Not specified'],
    ]) + '<p style="margin:18px 0 0; font-size:13px; color:#6b615d;">Reply to this email (goes to the customer) or contact them directly to send the payment link. Send activation details once payment is confirmed.</p>',
    ctaLabel: 'Reply to customer',
    ctaHref: `mailto:${email}`,
  });

  const ownerRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Prime <orders@iptvprime.org>',
      to: LEAD_DESTINATION,
      reply_to: email,
      subject: `New order request — ${plan} — ${email}`,
      html: ownerHtml,
      text: htmlToText(ownerHtml),
    }),
  });

  if (!ownerRes.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 502 });
  }

  // Best-effort customer confirmation — an order still counts as received even
  // if this second email fails, since the owner notification above succeeded.
  const customerHtml = emailLayout({
    preheader: `We've received your order for the ${plan} plan.`,
    heading: `Thanks for your order, ${name}!`,
    bodyHtml: `
      <p style="margin:0 0 14px;">We've received your request for the <strong>${plan}</strong> plan.</p>
      <p style="margin:0 0 14px;">We'll email you a secure payment link shortly to complete your order. Once payment is confirmed, your activation details will follow right away.</p>
      <p style="margin:0;">Questions in the meantime? Just reply to this email.</p>
    `,
    ctaLabel: 'View plan details',
    ctaHref: 'https://iptvprime.org/pricing/',
  });

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IPTV Prime <orders@iptvprime.org>',
      to: email,
      reply_to: LEAD_DESTINATION,
      subject: 'We received your IPTV Prime order',
      html: customerHtml,
      text: htmlToText(customerHtml),
    }),
  }).catch(() => {});

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
