import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing transparency and trust">
  <rect width="560" height="420" rx="8" fill="#f8fafd"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#e5edf5" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#b9b9f9" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#e8e9ff" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#533afd"/>
  <path d="M250 270 L264 285 L294 253" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — 4K Streaming IPTV | 4K Streaming',
  description: 'Learn about 4K Streaming, an IPTV subscription service focused on transparent pricing, real device setup support, and honest streaming expectations.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'A straightforward approach to IPTV',
  lead: 'We built 4K Streaming around three things: transparent pricing, real setup documentation, and honest expectations about streaming quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Who we are', title: 'What 4K Streaming is', left: true })}
  <p>4K Streaming is an IPTV subscription service. We provide access to live channels and on-demand content delivered over the internet, with support for up to 4K resolution where your plan, device, and source content allow it. Our focus is on making the parts of the experience we control — pricing, documentation, and support — as clear as possible.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Our approach', title: 'Mission', left: true })}
  <p>Too many IPTV services bury pricing in confusing tiers, oversell streaming quality they can't guarantee, and make setup unnecessarily difficult. Our approach is the opposite: list prices plainly, describe streaming quality honestly, and write setup instructions that actually match the product.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What you can expect', title: 'The customer experience', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Before you subscribe</h3><p>Clear pricing and a real trial period so you know what you're getting before paying full price.</p></div>
    <div class="card"><h3>Getting set up</h3><p>Device-specific setup instructions instead of a generic guide that doesn't match your device.</p></div>
    <div class="card"><h3>If something goes wrong</h3><p>A support channel that reaches an actual person, plus clear refund terms.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it works', title: 'Technology approach', left: true })}
  <p>The service is delivered using standard IPTV protocols — content is streamed as data over your existing internet connection, accessed through compatible third-party player apps rather than a single proprietary app. This approach keeps the service compatible with a wide range of devices instead of locking you into one ecosystem.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'Our streaming quality philosophy', left: true })}
  <p>We don't promise zero buffering or 100% uptime, because no internet-delivered streaming service can honestly guarantee that — too much depends on your own connection and device. What we do commit to is transparency about what affects quality and support if something isn't working as expected.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Access for everyone', title: 'Device accessibility', left: true })}
  <p>We support Smart TVs, Android TV, Fire TV, Android and iOS mobile devices, Windows, and macOS — because a subscription should work with the device you already own, not force you to buy new hardware.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No unnecessary friction', title: 'Setup simplicity', left: true })}
  <p>Our <a href="/setup-guide/">Setup Guide</a> walks through each supported device step by step, because setup instructions that don't match your actual device waste your time and ours.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When you need help', title: 'Support', left: true })}
  <p>Our <a href="/contact/">Contact page</a> routes directly to a real support inbox for setup, billing, and trial questions.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What we won\'t do', title: 'Transparency', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>We won't advertise features we don't actually provide.</li>
    <li>We won't hide pricing behind a "contact for quote" wall.</li>
    <li>We won't claim guarantees about uptime or buffering that no streaming provider can honestly make.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Your data', title: 'Privacy & security', left: true })}
  <p>We collect only the information needed to run the service and respond to inquiries. See our <a href="/privacy-policy/">Privacy Policy</a> for full details on what we collect and why.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Using the service responsibly', title: 'Responsible use', left: true })}
  <p>You are responsible for using the service in compliance with the laws that apply to you. See our <a href="/disclaimer/">Disclaimer</a> for details.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Keep learning', title: 'Resources', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'Step-by-step instructions for every supported device.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'Answers to the most common questions.', href: '/faq/' },
      { title: 'Pricing', text: 'Full plan and trial pricing details.', href: '/pricing/' },
    ]
      .map(
        (r) => `
    <div class="card">
      <h3><a href="${r.href}">${esc(r.title)}</a></h3>
      <p>${esc(r.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({ title: 'Ready to see it for yourself?', lead: 'Start a 24-hour trial or compare our subscription plans.' })}
`,
};
