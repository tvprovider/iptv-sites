import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, stepsList, featureGrid,
} from '../lib/render.mjs';
import { catalog } from '../data/business.mjs';

const aboutMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration of an itemized checklist">
  <rect width="560" height="420" rx="8" fill="#f0fdf4"/>
  <rect x="120" y="90" width="320" height="240" rx="10" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
  <rect x="150" y="130" width="180" height="14" rx="4" fill="#dcfce7"/>
  <rect x="150" y="160" width="220" height="14" rx="4" fill="#dcfce7"/>
  <rect x="150" y="190" width="140" height="14" rx="4" fill="#dcfce7"/>
  <circle cx="270" cy="260" r="46" fill="#16a34a"/>
  <path d="M252 260 L266 274 L292 244" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — IPTV List',
  description: 'Why IPTV List publishes the itemized channel count, device list, and per-plan price instead of a vague sales pitch — and what that promise actually covers.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'We built the page around the list, not the pitch',
  lead: 'Most IPTV landing pages open with a big round channel number and close with a contact form, so the real answers only show up after you have already handed over an email address. This one runs the other way — the list comes first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: aboutMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where this started', title: 'Too many listings, not enough answers', left: true })}
  <p>Shopping for an IPTV subscription usually means opening five tabs that all say roughly the same thing: a big channel total, a device list that just says "most devices," and a price that only appears once you have already filled out a form. Comparing any of them honestly meant messaging support and waiting for a straight answer that often never came. IPTV List exists because that back-and-forth shouldn't be a prerequisite for knowing what you're buying.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we hold ourselves to', title: 'Three rules that shape every page on this site', left: true })}
  ${featureGrid([
    { title: 'The number on the page has to hold up', text: `${catalog.liveChannels} channels and ${catalog.vods} VOD titles are stated plainly, and the <a href="/guides/what-is-iptv/">What Is IPTV guide</a> breaks that total into categories anyone can check against.` },
    { title: 'The price never hides behind a form', text: 'All four plan lengths and their exact totals sit on the Pricing page with nothing to submit first.' },
    { title: 'The device list means compatibility, not marketing', text: 'The Setup Guide names each supported device individually instead of leaning on a phrase like "works everywhere."' },
  ], 3)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Worth checking yourself', title: 'Three things we would rather you verify than trust', left: true })}
  ${stepsList([
    { title: 'Open the channel breakdown', text: 'The What Is IPTV guide shows what the total is actually built from, category by category.' },
    { title: 'Run the $1 trial against your own list', text: 'Search for the specific channels and titles you currently pay for elsewhere and see if they show up.' },
    { title: 'Read the refund terms before you pay', text: 'They sit on their own page, in full, whether or not you ever need them.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it actually works', title: 'A login, a player app you pick, your own connection', left: true })}
  <p>There is no secret sauce underneath the marketing language: paying for a plan gets you a login, that login goes into whichever player app you decide to install, and that app streams over the internet connection already running in your home. We supply the login and everything sitting behind it on the list — the player app is somebody else's software, chosen by you, which is precisely why the Setup Guide covers several apps per device rather than assuming a single one fits everyone.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being direct about limits', title: 'What we are not going to overstate', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>A precise uptime percentage — anything delivered over the open internet is subject to conditions no one can pin to a decimal point.</li>
    <li>Picture quality that ignores your own setup — resolution is shaped by your device and connection just as much as by the original source.</li>
    <li>A promise that every title stays fresh to the minute — a catalog of this size is kept current on a rolling schedule, not instantly.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Where the numbers live', title: 'Kept just as plain on the pricing side', left: true })}
  <p>The <a href="/pricing/">Pricing page</a> lists all four terms and their exact cost with no form required to see either. Pick any length and the underlying list stays whole — the only figure that shifts between them is the monthly average.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If something is off', title: 'Tell us and it gets looked at directly', left: true })}
  <p>A channel that dropped out, a device that won't cooperate, a billing question — it all goes to the same place through the <a href="/contact/">Contact page</a>, and whoever reads it looks at the actual details before replying.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next', title: 'Three pages worth a look before you decide', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Guides', text: 'What a channel count is actually made of, explained without the marketing gloss.', href: '/guides/' },
      { title: 'FAQ', text: 'Everything else that tends to come up before someone orders.', href: '/faq/' },
      { title: 'Pricing', text: 'All four terms, side by side, with nothing hidden.', href: '/pricing/' },
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

${ctaBanner({ title: 'See the list for yourself', lead: 'A dollar and 24 hours is enough to check it against what you already watch.' })}
`,
};
