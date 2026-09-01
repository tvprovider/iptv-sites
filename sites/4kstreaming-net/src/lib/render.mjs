import { site, nav as navLinks, footerLinks } from '../data/business.mjs';

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

// ---------------------------------------------------------------------------
// Layout: header / footer / page shell
// ---------------------------------------------------------------------------

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
      <a href="/" class="brand-mark">${esc(site.brand)}<span class="dot">.</span></a>
      <nav class="main-nav" id="main-nav" aria-label="Primary">
        ${links}
      </nav>
      <div class="header-cta">
        <a href="/trial/" class="btn btn-ghost">Start 24-Hour Trial</a>
        <a href="/pricing/" class="btn btn-primary">View Plans</a>
        <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Toggle menu">☰</button>
      </div>
    </div>
  </header>`;
}

function footer() {
  const col = (title, items) => `
    <div>
      <h4>${esc(title)}</h4>
      <ul>${items.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join('')}</ul>
    </div>`;
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>${esc(site.brand)}</h4>
          <p style="max-width:32ch;">Premium 4K IPTV streaming with transparent pricing and real setup support.</p>
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
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
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

export function hero({ eyebrow, h1, lead, primaryCta = { label: 'View Plans', href: '/pricing/' }, secondaryCta = { label: 'Start 24-Hour Trial', href: '/trial/' }, media }) {
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
        <h1>${h1}</h1>
        <p class="lead">${lead}</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="${primaryCta.href}">${esc(primaryCta.label)}</a>
          <a class="btn btn-ghost btn-lg" href="${secondaryCta.href}">${esc(secondaryCta.label)}</a>
        </div>
      </div>
      <div class="hero-media">${media || ''}</div>
    </div>
  </section>`;
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
        <h3>${esc(d.name)}</h3>
        <p>${esc(d.summary)}</p>
      </div>`
      )
      .join('')}
  </div>`;
}

export function pricingGrid(plans) {
  return `
  <div class="pricing-grid">
    ${plans
      .map(
        (p) => `
      <div class="plan-card${p.highlight ? ' highlight' : ''}">
        ${p.highlight ? '<span class="badge badge-brand tag">Most Popular</span>' : ''}
        <h3>${esc(p.label)}</h3>
        <div class="plan-price">$${p.price.toFixed(2)}</div>
        <div class="plan-permonth">${p.perMonth ? `~$${p.perMonth.toFixed(2)} / month` : 'billed monthly'}</div>
        <p class="small">${esc(p.blurb)}</p>
        <ul>
          <li>Access to the full live channel lineup</li>
          <li>Up to 4K resolution where available</li>
          <li>Compatible with all supported devices</li>
        </ul>
        <a class="btn btn-primary btn-block" href="/trial/">Get Started</a>
      </div>`
      )
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
        <h2>${title}</h2>
        <p style="max-width:48ch;margin:0 auto;">${lead}</p>
        <div class="hero-actions">
          <a class="btn btn-primary btn-lg" href="${primaryCta.href}">${esc(primaryCta.label)}</a>
          <a class="btn btn-ghost btn-lg" style="border-color:rgba(255,255,255,0.3);color:#fff;" href="${secondaryCta.href}">${esc(secondaryCta.label)}</a>
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

export function trustGrid(items) {
  return featureGrid(items, 3);
}

export function section({ id, bg, tight, html }) {
  return `<section${id ? ` id="${id}"` : ''} class="${bg ? `bg-${bg}` : ''}${tight ? ' tight' : ''}"><div class="container">${html}</div></section>`;
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
  return `
  <form id="trial-form" class="card" novalidate>
    <div class="form-alert success" id="trial-success" role="status">Thank you! Check your email for your 24-hour trial activation details.</div>
    <div class="form-alert error" id="trial-error" role="alert">Something went wrong starting your trial. Please try again or contact support.</div>
    <div class="form-field">
      <label for="trial-email">Email</label>
      <input type="email" id="trial-email" name="email" required autocomplete="email">
    </div>
    <div class="form-field">
      <label for="trial-device">Primary device</label>
      <select id="trial-device" name="device">
        <option>Smart TV</option>
        <option>Android TV</option>
        <option>Fire TV / Firestick</option>
        <option>Android Phone or Tablet</option>
        <option>iPhone or iPad</option>
        <option>Windows</option>
        <option>macOS</option>
      </select>
    </div>
    <input type="text" name="company" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button type="submit" class="btn btn-primary btn-block">Start 24-Hour Trial — $1.00</button>
    <p class="form-hint">By starting a trial you agree to our <a href="/terms-of-use/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.</p>
  </form>`;
}
