import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing transparency and trust">
  <rect width="560" height="420" rx="8" fill="#faf7ff"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#ece2fb" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#c9a8f5" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#f3ecfe" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#7c3aed"/>
  <path d="M250 270 L264 285 L294 253" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — Canada IPTV',
  description: 'Learn about Canada IPTV, a streaming subscription built around the Canadian channel lineup, with transparent pricing and real setup support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'Built around what Canadians actually watch',
  lead: 'We built Canada IPTV around three things: a channel lineup that reflects Canadian viewing habits, transparent pricing, and honest expectations about streaming quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Who we are', title: 'What Canada IPTV actually is', left: true })}
  <p>A streaming subscription, not a cable replacement gimmick — live channels and on-demand content arrive over your internet connection, with a lineup weighted toward Canadian news, sports, and entertainment, in up to 4K where your plan, device, and the source content allow it. The parts of this we can actually control — pricing, documentation, support — are the parts we try hardest to get right.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Our approach', title: 'The problem with most IPTV marketing', left: true })}
  <p>A lot of providers in this space bury pricing behind vague tiers, promise streaming quality nobody can actually guarantee, and ship setup guides that do not match the devices they sell. We built this the other way: prices are on the page, streaming quality gets described honestly instead of oversold, and setup instructions are written against the devices people actually use.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What you can expect', title: 'Where the experience actually holds up', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Before you pay anything</h3><p>A real trial and prices you can read in full, so the decision is made with information, not a sales pitch.</p></div>
    <div class="card"><h3>Once you're set up</h3><p>Instructions written for your specific device, not a generic PDF that half-applies.</p></div>
    <div class="card"><h3>If it goes wrong</h3><p>An inbox with a person on the other end, and refund terms you can read before you need them.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it works', title: 'No proprietary app to get locked into', left: true })}
  <p>This runs on standard IPTV delivery — content streamed as data over your existing connection, watched through third-party player apps rather than one app we control. That keeps it compatible across a wide range of devices instead of tying you to a single ecosystem we could change the terms of later.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'What we will not promise', left: true })}
  <p>Zero buffering and 100 percent uptime are not honest claims for anything delivered over the open internet — too much rides on your own connection and device for any provider to guarantee that. What we will commit to is being clear about what actually affects quality, and being reachable when something is not working as expected.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Access for everyone', title: 'Built for the device you already have', left: true })}
  <p>Smart TVs, Android TV, Fire TV, Android and iOS, Windows, and macOS are all supported, on the logic that a subscription should adapt to your existing hardware rather than requiring a purchase to use it.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No unnecessary friction', title: 'Why setup gets its own guide', left: true })}
  <p>The <a href="/setup-guide/">Setup Guide</a> covers each supported device individually, because instructions that only loosely apply to your actual hardware waste time on both ends.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When you need help', title: 'One inbox, not a ticket queue', left: true })}
  <p>The <a href="/contact/">Contact page</a> goes to a real support inbox handling setup, billing, and trial questions — not an automated router.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What we will not do', title: 'A short list of limits', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>Advertise a feature that is not actually part of the service.</li>
    <li>Hide pricing behind a "contact us for a quote" form.</li>
    <li>Promise uptime or buffering guarantees no honest streaming provider can back up.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Your data', title: 'Kept to what is actually needed', left: true })}
  <p>Only the information required to run the service and answer questions gets collected — the <a href="/privacy-policy/">Privacy Policy</a> spells out exactly what and why.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Using this responsibly', title: 'Where the responsibility sits', left: true })}
  <p>Using the service within the laws that apply to you is on you as the subscriber — the <a href="/disclaimer/">Disclaimer</a> covers the specifics.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Keep reading', title: 'Where to go next', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'Instructions broken out by device.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'The questions that come up most.', href: '/faq/' },
      { title: 'Pricing', text: 'Every plan and the trial, laid out in full.', href: '/pricing/' },
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
