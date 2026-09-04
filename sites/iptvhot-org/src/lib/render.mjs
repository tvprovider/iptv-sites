import { site, nav as navLinks, footerLinks, deviceOptions, countryOptions, catalog } from '../data/business.mjs';

export function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---------------------------------------------------------------------------
// Head / meta / structured data
// ---------------------------------------------------------------------------

export function headMeta({ title, description, path, ogImage, noindex, type = 'website' }) {
  const url = site.url + path;
  const image = ogImage || `${site.url}/assets/images/og-default.svg`;
  return `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${url}">
    ${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow">'}
    <meta property="og:type" content="${type}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${image}">
    <meta name="theme-color" content="${site.themeColor}">
    <meta name="author" content="${esc(site.brand)}">
  `;
}

export function jsonLdScript(objects) {
  const list = Array.isArray(objects) ? objects : [objects];
  return list
    .map((obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join('\n');
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.brand,
    url: site.url,
    logo: `${site.url}/assets/images/favicon.svg`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.brand,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? site.url + item.href : undefined,
    })),
  };
}

export function articleSchema({ headline, description, path, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: site.url + path,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function howToSchema({ name, description, steps, totalTime }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

export function productOfferSchema(plans) {
  return plans.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${site.brand} — ${p.label} Plan`,
    description: p.blurb,
    brand: { '@type': 'Brand', name: site.brand },
    offers: {
      '@type': 'Offer',
      url: `${site.url}/order/?plan=${p.id}`,
      price: p.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }));
}

// ---------------------------------------------------------------------------
// Layout: header / footer / page shell
// ---------------------------------------------------------------------------

function logoMark({ height = 32, onDark = false } = {}) {
  const width = Math.round(height * (170 / 32));
  const textFill = onDark ? '#ffffff' : '#14100f';
  return `<svg width="${width}" height="${height}" viewBox="0 0 170 32" role="img" aria-label="IPTV Hot — IPTV subscription logo"><rect width="32" height="32" rx="7" fill="#1a0713"/><rect x="6" y="7" width="20" height="15" rx="3" fill="#db2777"/><rect x="8.2" y="9.2" width="15.6" height="10" rx="1.8" fill="#1a0713"/><path d="M13.5 11 L13.5 17.4 L19 14.2 Z" fill="#ffffff"/><rect x="14" y="22" width="4" height="3" fill="#db2777"/><rect x="10" y="25" width="12" height="2" rx="1" fill="#db2777"/><text x="42" y="23" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="600" fill="${textFill}">IPTV Hot</text></svg>`;
}

function header(currentPath) {
  const links = navLinks
    .map(
      (l) =>
        `<a href="${l.href}"${l.href === currentPath ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`
    )
    .join('\n');
  return `
  <header class="site-header">
    <div class="container bar">
      <a href="/" class="brand-mark">${logoMark({ height: 32 })}</a>
      <nav class="main-nav" id="main-nav" aria-label="Primary">
        ${links}
        <div class="main-nav-cta">
          <a href="/pricing/" class="btn btn-primary btn-block">Subscribe Now</a>
          <a href="/trial/" class="btn btn-ghost btn-block">Try It for $1</a>
        </div>
      </nav>
      <div class="header-cta">
        <a href="/trial/" class="btn btn-ghost">Try It for $1</a>
        <a href="/pricing/" class="btn btn-primary">Subscribe Now</a>
        <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle menu">☰</button>
      </div>
    </div>
  </header>`;
}

function footer() {
  const col = (title, items) => `
    <div>
      <p class="footer-col-title">${esc(title)}</p>
      <ul>${items.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join('')}</ul>
    </div>`;
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">${logoMark({ height: 28, onDark: true })}</div>
          <p style="max-width:32ch;">Xtream Codes-ready IPTV built for stability, transparent pricing, and real support.</p>
        </div>
        ${col('Product', footerLinks.product)}
        ${col('Company', footerLinks.company)}
        ${col('Guides', footerLinks.guides)}
        ${col('Legal', footerLinks.legal)}
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${esc(site.brand)}. All rights reserved.</span>
        <span>Streaming quality depends on your internet connection and device.</span>
      </div>
    </div>
  </footer>
  <script src="/assets/js/main.js" defer></script>`;
}

export function page({ title, description, path, bodyHtml, jsonld = [], ogImage, noindex = false, type = 'website' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${headMeta({ title, description, path, ogImage, noindex, type })}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
${jsonLdScript([organizationSchema(), websiteSchema(), ...jsonld])}
</head>
<body>
<a href="#main" class="skip-link">Skip to content</a>
${header(path)}
<main id="main">
${bodyHtml}
</main>
${footer()}
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Reusable content components
// ---------------------------------------------------------------------------

export function breadcrumbs(items) {
  const inner = items
    .map((item, i) => {
      const isLast = i === items.length - 1;
      return isLast
        ? `<span aria-current="page">${esc(item.label)}</span>`
        : `<a href="${item.href}">${esc(item.label)}</a><span class="sep">/</span>`;
    })
    .join('');
  return `<nav class="breadcrumbs container" aria-label="Breadcrumb">${inner}</nav>`;
}

export function sectionHead({ eyebrow, title, lead, left = false }) {
  return `
  <div class="section-head${left ? ' left' : ''}">
    ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
    <h2>${title}</h2>
    ${lead ? `<p>${lead}</p>` : ''}
  </div>`;
}

export function hero({ eyebrow, h1, lead, primaryCta = { label: 'View Plans', href: '/pricing/' }, secondaryCta = { label: 'Start 24-Hour Trial', href: '/trial/' }, media, dark = false, trustItems }) {
  const solo = !media;
  return `
  <section class="hero${dark ? ' hero-dark' : ''}${solo ? ' hero-solo' : ''}">
    ${dark ? '<div class="hero-aurora" aria-hidden="true"></div>' : ''}
    <div class="container hero-grid">
      <div class="hero-copy">
        ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
        <h1>${h1}</h1>
        <p class="lead">${lead}</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="${primaryCta.href}">${esc(primaryCta.label)}</a>
          <a class="btn btn-ghost btn-lg${dark ? ' btn-ghost-on-dark' : ''}" href="${secondaryCta.href}">${esc(secondaryCta.label)}</a>
        </div>
      </div>
      ${solo ? '' : `<div class="hero-media">${media}</div>`}
    </div>
    ${
      trustItems
        ? `<div class="container hero-trust-inner">
      ${trustItems.map((t) => `<span class="trust-item"><span class="trust-check" aria-hidden="true">✓</span>${esc(t)}</span>`).join('')}
    </div>`
        : ''
    }
  </section>`;
}

// Consistent layered-card illustration used as hero art on secondary pages —
// same visual language as the homepage/about-us hero graphics, just swapping
// the center icon per page topic. Zero external image dependency.
export function iconMedia(iconInner, label) {
  return `
<svg viewBox="0 0 560 420" role="img" aria-label="${esc(label)}">
  <rect width="560" height="420" rx="8" fill="#fdf2f8"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#fbcfe8" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#f9a8d4" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#fce7f3" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#db2777"/>
  ${iconInner}
</svg>`;
}

export function statsStrip(items) {
  return `
  <div class="stats-strip">
    <div class="container stats-strip-inner">
      ${items.map((s) => `<div class="stat-item"><span class="stat-number">${esc(s.number)}</span><span class="stat-label">${esc(s.label)}</span></div>`).join('')}
    </div>
  </div>`;
}

export function featureGrid(items, cols = 3) {
  return `
  <div class="grid grid-${cols}">
    ${items
      .map(
        (f) => `
      <div class="card">
        ${f.icon ? `<div class="feature-icon" aria-hidden="true">${f.icon}</div>` : ''}
        <h3>${esc(f.title)}</h3>
        <p>${f.text}</p>
      </div>`
      )
      .join('')}
  </div>`;
}

export function deviceGrid(devices) {
  return `
  <div class="grid grid-3" id="devices">
    ${devices
      .map(
        (d) => `
      <div class="card">
        <p class="card-title">${esc(d.name)}</p>
        <p>${esc(d.summary)}</p>
      </div>`
      )
      .join('')}
  </div>`;
}

export function pricingGrid(plans) {
  const basePrice = plans[0].price;
  return `
  <div class="pricing-grid">
    ${plans
      .map((p) => {
        const savePct = p.perMonth ? Math.round((1 - p.perMonth / basePrice) * 100) : 0;
        return `
      <div class="plan-card${p.highlight ? ' highlight' : ''}">
        ${p.highlight ? '<span class="badge badge-brand tag">Most Popular</span>' : ''}
        <h3>${esc(p.label)}</h3>
        <div class="plan-price">$${p.price.toFixed(2)}</div>
        <div class="plan-permonth">${p.perMonth ? `~$${p.perMonth.toFixed(2)} / month` : 'billed monthly'}${savePct > 0 ? ` <span class="badge badge-success">Save ${savePct}%</span>` : ''}</div>
        <p class="small">${esc(p.blurb)}</p>
        <ul>
          <li>${catalog.liveChannels} live channels, including premium</li>
          <li>${catalog.vods} VOD titles — films &amp; series</li>
          <li>Up to 4K resolution where available</li>
          <li>Compatible with all supported devices</li>
        </ul>
        <a class="btn btn-primary btn-block" href="/order/?plan=${p.id}" rel="nofollow">Subscribe Now</a>
        <a class="plan-secondary-link" href="/trial/">or try 24 hours for $1 first →</a>
      </div>`;
      })
      .join('')}
  </div>`;
}

export function faqAccordion(items) {
  return `
  <div class="faq-list">
    ${items
      .map(
        (item, i) => `
    <details class="faq-item"${i === 0 ? ' open' : ''}>
      <summary>${esc(item.q)}</summary>
      <div class="faq-answer"><p>${item.a}</p></div>
    </details>`
      )
      .join('')}
  </div>`;
}

export function ctaBanner({ title, lead, primaryCta = { label: 'View Plans', href: '/pricing/' }, secondaryCta = { label: 'Start 24-Hour Trial', href: '/trial/' } }) {
  return `
  <section>
    <div class="container">
      <div class="cta-banner">
        <div class="cta-banner-glow" aria-hidden="true"></div>
        <span class="eyebrow">Ready when you are</span>
        <h2>${title}</h2>
        <p>${lead}</p>
        <div class="cta-banner-actions">
          <a class="btn btn-primary btn-lg" href="${primaryCta.href}">${esc(primaryCta.label)}</a>
          <a class="cta-banner-link" href="${secondaryCta.href}">${esc(secondaryCta.label)} →</a>
        </div>
      </div>
    </div>
  </section>`;
}

export function comparisonTable(headers, rows) {
  return `
  <div class="table-wrap">
    <table>
      <thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

export function stepsList(items) {
  return `
  <div class="steps">
    ${items
      .map(
        (s) => `
      <div class="step">
        <div class="num" aria-hidden="true"></div>
        <div><h3>${esc(s.title)}</h3><p>${s.text}</p></div>
      </div>`
      )
      .join('')}
  </div>`;
}

export function alertBox(html, variant = '') {
  return `<div class="alert ${variant ? `alert-${variant}` : ''}">${html}</div>`;
}

export function answerBox(html) {
  return `<div class="answer-box">${html}</div>`;
}

export function marquee(items) {
  const row = items.map((i) => `<span class="marquee-item">${esc(i)}</span>`).join('');
  return `
  <div class="marquee" role="list" aria-label="${esc(items.join(', '))}">
    <div class="marquee-track">${row}${row}</div>
  </div>`;
}

export function trustGrid(items) {
  return featureGrid(items, 3);
}

export function section({ id, bg, tight, html }) {
  return `<section${id ? ` id="${id}"` : ''} class="${bg ? `bg-${bg}` : ''}${tight ? ' tight' : ''}"><div class="container">${html}</div></section>`;
}

function countryField(id) {
  const options = countryOptions.map((c) => `<option>${esc(c)}</option>`).join('');
  return `
    <div class="form-field">
      <label for="${id}">Country</label>
      <select id="${id}" name="country" required>
        <option value="" disabled selected>Select your country</option>
        ${options}
      </select>
    </div>`;
}

function whatsappField(id) {
  return `
    <div class="form-field">
      <label for="${id}">WhatsApp Number <span class="muted">(or regular phone number if you don't have WhatsApp)</span></label>
      <input type="tel" id="${id}" name="phone" required autocomplete="tel" placeholder="+1 555 123 4567">
    </div>`;
}

export function contactForm({ topics = [] } = {}) {
  const options = topics.map((t) => `<option value="${esc(t)}">${esc(t)}</option>`).join('');
  return `
  <form id="contact-form" class="card" novalidate>
    <div class="form-alert success" id="form-success" role="status">Thank you! We've received your message and will follow up by email shortly.</div>
    <div class="form-alert error" id="form-error" role="alert">Something went wrong sending your message. Please try again or email us directly.</div>
    <div class="form-field">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required autocomplete="name">
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required autocomplete="email">
    </div>
    ${countryField('country')}
    ${whatsappField('phone')}
    ${
      topics.length
        ? `<div class="form-field">
      <label for="topic">Topic</label>
      <select id="topic" name="topic">${options}</select>
    </div>`
        : ''
    }
    <div class="form-field">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <input type="text" name="company" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" class="btn btn-primary btn-block">Send Message</button>
    <p class="form-hint">We'll only use your details to respond to this inquiry.</p>
  </form>`;
}

export function trialForm() {
  const options = deviceOptions.map((d) => `<option>${esc(d)}</option>`).join('');
  return `
  <form id="trial-form" class="card" novalidate>
    <div class="form-alert success" id="trial-success" role="status">Thank you! Check your email for your 24-hour trial activation details.</div>
    <div class="form-alert error" id="trial-error" role="alert">Something went wrong starting your trial. Please try again or contact support.</div>
    <div class="form-field">
      <label for="trial-email">Email</label>
      <input type="email" id="trial-email" name="email" required autocomplete="email">
    </div>
    ${countryField('trial-country')}
    ${whatsappField('trial-phone')}
    <div class="form-field">
      <label for="trial-device">Primary device</label>
      <select id="trial-device" name="device">${options}</select>
    </div>
    <input type="text" name="company" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" class="btn btn-primary btn-block">Start 24-Hour Trial — $1.00</button>
    <p class="form-hint">By starting a trial you agree to our <a href="/terms-of-use/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.</p>
  </form>`;
}

export function orderForm(plans) {
  const planOptions = plans
    .map((p) => `<option value="${esc(p.id)}" data-label="${esc(p.label)} — $${p.price.toFixed(2)}"${p.highlight ? ' selected' : ''}>${esc(p.label)} — $${p.price.toFixed(2)}${p.highlight ? ' (Most Popular)' : ''}</option>`)
    .join('');
  const deviceOpts = deviceOptions.map((d) => `<option>${esc(d)}</option>`).join('');
  return `
  <form id="order-form" class="card" novalidate>
    <div class="form-alert success" id="order-success" role="status">Thank you! Your order request is in. We'll email you a secure payment link shortly — once paid, your activation details go out right away.</div>
    <div class="form-alert error" id="order-error" role="alert">Something went wrong submitting your order. Please try again or contact support.</div>
    <div class="form-field">
      <label for="order-plan">Plan</label>
      <select id="order-plan" name="plan">${planOptions}</select>
    </div>
    <div class="form-field">
      <label for="order-name">Name</label>
      <input type="text" id="order-name" name="name" required autocomplete="name">
    </div>
    <div class="form-field">
      <label for="order-email">Email</label>
      <input type="email" id="order-email" name="email" required autocomplete="email">
      <p class="form-hint">Your payment link and activation details will be sent here.</p>
    </div>
    ${countryField('order-country')}
    ${whatsappField('order-phone')}
    <div class="form-field">
      <label for="order-device">Primary device</label>
      <select id="order-device" name="device">${deviceOpts}</select>
    </div>
    <input type="text" name="company" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" class="btn btn-primary btn-block btn-lg">Submit Order Request</button>
    <p class="form-hint">By submitting, you agree to our <a href="/terms-of-use/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>. No payment is collected on this page — you'll receive a secure payment link by email.</p>
  </form>`;
}
