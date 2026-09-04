import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing transparency and trust">
  <rect width="560" height="420" rx="8" fill="#f0fbf9"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#d9f0ec" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#7dd8cc" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#e6fbf8" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#0d9488"/>
  <path d="M250 270 L264 285 L294 253" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — Apple TV IPTV',
  description: 'Learn about Apple TV IPTV, an independent streaming subscription built with Apple TV as the primary device, with transparent pricing and real setup support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'Why we built this around Apple TV first',
  lead: 'Most IPTV marketing treats Apple TV as an afterthought behind Fire TV and Android boxes. We built this the other way around — Apple TV first, everything else supported too.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Who we are', title: 'An independent service, not an Apple product', left: true })}
  <p>This is a streaming subscription, run independently of Apple Inc. — live channels and on-demand content delivered over your internet connection, set up through a compatible player app you install yourself, in up to 4K where your Apple TV generation and the source content allow it. We are not Apple, we do not speak for Apple, and nothing here is reviewed or endorsed by Apple. See the full <a href="/disclaimer/">Disclaimer</a> for the specifics.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The gap we noticed', title: 'Apple TV gets treated as an afterthought', left: true })}
  <p>Most IPTV setup guides mention Apple TV in a single paragraph, if at all, then move on to Fire TV and Android boxes where installation is simpler. That gap is exactly why App Store availability and sideloading confuse people — nobody explains both properly. We wrote the setup process for Apple TV as the primary case, not a footnote.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What you can expect', title: 'The three moments that matter', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Deciding whether to subscribe</h3><p>Full pricing and a real trial, so you are not guessing.</p></div>
    <div class="card"><h3>Getting it onto your Apple TV</h3><p>Both the App Store method and sideloading, explained properly, not glossed over.</p></div>
    <div class="card"><h3>If something is not working</h3><p>Support that already knows Apple TV has extra steps other devices do not.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it works', title: 'A player app you install, not a proprietary system', left: true })}
  <p>This runs on standard IPTV delivery — data streamed over your existing connection, watched through a compatible third-party player app rather than one single app we control end to end. On Apple TV specifically, that means either an App Store listing or a sideload, and we treat both as equally legitimate.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'What we will not promise', left: true })}
  <p>No provider streaming over the open internet can honestly guarantee zero buffering or perfect uptime — your own connection and Apple TV generation are half of that equation. What we do commit to is explaining what actually affects quality, and being reachable when something is not working.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Beyond Apple TV', title: 'Every other device is genuinely supported too', left: true })}
  <p>iPhone, iPad, Smart TVs, Android TV, Fire TV, Windows, and macOS all work as well — useful as a backup screen, a second room, or for anyone who is not exclusively on Apple TV.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No unnecessary friction', title: 'Why the setup guide leads with two methods', left: true })}
  <p>The <a href="/setup-guide/">Setup Guide</a> covers the App Store route and the sideload route as equally valid starting points, because whichever one applies to you right now depends entirely on what Apple currently has listed.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When you need help', title: 'Support that has seen Apple TV problems before', left: true })}
  <p>The <a href="/contact/">Contact page</a> reaches a real inbox — setup, billing, and trial questions, including the Apple TV-specific ones other support teams have not usually dealt with.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What we will not do', title: 'Where the limits are', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>Claim any affiliation with Apple Inc. that does not exist.</li>
    <li>Advertise a feature that is not actually part of the service.</li>
    <li>Promise uptime or buffering guarantees no honest provider can back up.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Your data', title: 'Kept to what running this actually needs', left: true })}
  <p>Only the information required to deliver the service and answer questions gets collected — the <a href="/privacy-policy/">Privacy Policy</a> spells out exactly what and why.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Using this responsibly', title: 'Where responsibility sits', left: true })}
  <p>Compliance with the laws that apply to you is on you as the subscriber — full details are in the <a href="/disclaimer/">Disclaimer</a>, including our independence from Apple Inc.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Keep reading', title: 'A few more pages worth checking', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'App Store and sideload, step by step.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'The Apple TV questions we get most.', href: '/faq/' },
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

${ctaBanner({ title: 'Ready to see it running on your Apple TV?', lead: 'Start a 24-hour trial or compare our subscription plans.' })}
`,
};
