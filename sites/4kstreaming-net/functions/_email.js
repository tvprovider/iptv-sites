// Shared HTML email layout + plain-text fallback for every transactional
// email the site sends (via Resend). Not a routed function — files
// prefixed with "_" are excluded from Pages Functions routing, so this is
// just a plain importable module.
//
// Table-based layout with inline styles on purpose: this has to render
// correctly in Gmail/Outlook/Apple Mail, which strip or mangle modern CSS.
// Sending both html + text (see htmlToText below) is also a real
// deliverability factor — HTML-only mail scores worse with spam filters.

const BRAND_RED = '#ed3508';
const TEXT_DARK = '#14100f';
const TEXT_SOFT = '#6b615d';
const BORDER = '#f0e5e1';
const BG = '#f4f1f0';

export function emailLayout({ preheader = '', heading, bodyHtml, ctaLabel, ctaHref }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>4K Streaming</title>
</head>
<body style="margin:0; padding:0; background:${BG}; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG}; padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid ${BORDER};">
        <tr>
          <td style="background:${BRAND_RED}; padding:22px 32px;">
            <span style="color:#ffffff; font-size:19px; font-weight:600; letter-spacing:-0.01em; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">4K Streaming</span>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 32px 8px;">
            <h1 style="margin:0 0 16px; font-size:21px; font-weight:600; color:${TEXT_DARK}; line-height:1.3;">${heading}</h1>
            <div style="font-size:15px; color:${TEXT_DARK}; line-height:1.65;">${bodyHtml}</div>
            ${
              ctaHref
                ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 8px;"><tr><td style="border-radius:8px; background:${BRAND_RED};"><a href="${ctaHref}" style="display:inline-block; padding:14px 28px; color:#ffffff; text-decoration:none; font-weight:600; font-size:15px; border-radius:8px; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">${ctaLabel}</a></td></tr></table>`
                : ''
            }
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px 32px; border-top:1px solid ${BORDER};">
            <p style="margin:0; font-size:12.5px; color:${TEXT_SOFT}; line-height:1.6;">
              4K Streaming IPTV &middot; <a href="https://4kstreaming.net" style="color:${TEXT_SOFT};">4kstreaming.net</a><br>
              You're receiving this because you submitted a request on our website.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function htmlToText(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li>/gi, '- ')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&middot;/g, '-')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Label/value rows for the internal owner-notification emails.
export function dataRows(pairs) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; margin:4px 0 0;">
    ${pairs
      .map(
        ([label, value]) => `
    <tr>
      <td style="padding:9px 0; border-bottom:1px solid ${BORDER}; font-size:13px; color:${TEXT_SOFT}; width:150px; vertical-align:top;">${label}</td>
      <td style="padding:9px 0; border-bottom:1px solid ${BORDER}; font-size:14px; color:${TEXT_DARK}; vertical-align:top;">${value}</td>
    </tr>`
      )
      .join('')}
  </table>`;
}
