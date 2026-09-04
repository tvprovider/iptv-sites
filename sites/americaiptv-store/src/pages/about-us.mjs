import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing transparency and trust">
  <rect width="560" height="420" rx="8" fill="#f5f8ff"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#e2e9f7" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#a9c6ff" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#eaf1ff" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#155eef"/>
  <path d="M250 270 L264 285 L294 253" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — America IPTV',
  description: 'Learn about America IPTV, a streaming subscription built around the American channel lineup, with transparent pricing and real setup support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'Built around the American channel lineup',
  lead: 'We built America IPTV around three things: a channel lineup that matches what US households actually watch, transparent pricing, and honest expectations about streaming quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Who we are', title: 'The short version of what this is', left: true })}
  <p>A streaming subscription, plain and simple — live channels and on-demand titles delivered over your internet connection, weighted toward American networks, news, and sports. Resolution tops out at 4K when the plan, the device, and the source all cooperate. We put the most effort into the parts we actually control directly: pricing, documentation, and how fast a real question gets answered.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Our approach', title: 'The pattern we deliberately avoided', left: true })}
  <p>A common playbook in this space: vague pricing tiers, quality claims nobody can back up, and setup guides written for devices the provider does not actually support. We went the other direction on purpose — prices are on the page, quality gets described honestly instead of oversold, and setup steps are written against real devices.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What you can expect', title: 'Three moments that matter most', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Deciding whether to subscribe</h3><p>A real trial and full pricing, so the decision is informed rather than a leap of faith.</p></div>
    <div class="card"><h3>Getting it running</h3><p>Instructions written for your actual device, not a catch-all guide that mostly applies.</p></div>
    <div class="card"><h3>When something breaks</h3><p>A person answering the inbox, and refund terms you can read in advance.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it works', title: 'No single app controlling everything', left: true })}
  <p>This runs on standard IPTV delivery — data streamed over your existing connection, watched through third-party player apps instead of one proprietary app we could change or discontinue on our own schedule. It is a deliberate trade: broader device compatibility over a tightly controlled single-app experience.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'The limits we will actually state out loud', left: true })}
  <p>No internet-delivered service can honestly promise zero buffering or perfect uptime — your own connection and device are half of that equation. What we commit to instead is explaining what actually affects quality, and being reachable when something genuinely is not working.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Access for everyone', title: 'Whatever device you already own', left: true })}
  <p>Smart TVs, Android TV, Fire TV, Android and iOS, Windows, and macOS are all covered — a subscription should adapt to hardware you already have, not require buying something new.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No unnecessary friction', title: 'Why setup gets device-specific pages', left: true })}
  <p>The <a href="/setup-guide/">Setup Guide</a> breaks activation out per device, because instructions that only sort of apply to your hardware cost everyone time figuring out which parts are relevant.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When you need help', title: 'One inbox, one person', left: true })}
  <p>The <a href="/contact/">Contact page</a> reaches a real support inbox covering setup, billing, and trial questions directly — no automated routing layer in between.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where we draw the line', title: 'Three things we will not do', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>Advertise a capability that is not actually part of the service.</li>
    <li>Hide pricing behind a sales conversation you did not ask for.</li>
    <li>Promise uptime or buffering numbers no streaming provider can honestly guarantee.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Your data', title: 'Collected only where it is needed', left: true })}
  <p>What gets collected is limited to running the service and answering inquiries — the <a href="/privacy-policy/">Privacy Policy</a> lays out the specifics.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Using this responsibly', title: 'The responsibility that sits with you', left: true })}
  <p>Compliance with the laws that apply to you is on you as the subscriber — see the <a href="/disclaimer/">Disclaimer</a> for the full statement.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Keep reading', title: 'A few more pages worth a look', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'Steps broken down by device.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'The most common questions, answered.', href: '/faq/' },
      { title: 'Pricing', text: 'Every plan and the trial, in full.', href: '/pricing/' },
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
