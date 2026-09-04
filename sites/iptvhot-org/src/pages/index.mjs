import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Hot — Trending Channels & New Releases',
  description: 'IPTV Hot streams what\'s popular right now: trending live sports and new releases across a catalog that updates continually, not a frozen once-a-year library.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Hot',
  h1: 'What\'s trending right now is already streaming',
  lead: 'New releases land on the catalog continually, live sports schedules update as they happen, and none of it sits behind a higher-priced tier. This is the opposite of a library that gets refreshed once and forgotten.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['Catalog updates continually', 'Every plan, same lineup', 'Live sports included', 'Real 24-hour trial for $1'],
})}

${marquee(['Trending Now', 'Live Sports', 'New Releases', 'Popular This Week', 'International', 'On-Demand Movies', 'Series', '24/7 News'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The problem this solves', title: 'Most IPTV catalogs get built once, then left alone', left: true })}
  ${answerBox(`<p><strong>IPTV Hot</strong> is a streaming subscription that treats the catalog as something that keeps moving — new titles, current sports fixtures, and whatever's actually being watched right now, reachable through a compatible player app over your own internet connection, in up to 4K where your plan and the source content support it.</p>`)}
  <p style="margin-top:16px;">A channel count on a landing page tells you nothing about whether that count is still accurate six months later. This site exists because that gap is common enough to be worth calling out directly.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The numbers', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M270 246 l10 20 22 3 -16 16 4 22 -20 -10 -20 10 4 -22 -16 -16 22 -3 z" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linejoin="round"/>', 'Trending content illustration')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>News, sports, and entertainment — the same full set regardless of which plan length you pick.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Movies and series, with new titles landing on an ongoing basis rather than a fixed schedule.</p>
      </div>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fair comparison', title: 'Static library vs. an active one', left: true })}
  ${comparisonTable(
    ['', 'A "big number" IPTV service', 'IPTV Hot'],
    [
      ['How the catalog was built', 'Assembled once, rarely revisited', 'Continually added to'],
      ['New releases', 'Show up whenever someone gets around to it', 'Landing on an ongoing basis'],
      ['Live sports coverage', 'Often an afterthought', 'Part of the core lineup, current fixtures included'],
      ['Access by plan length', 'Sometimes gated behind a higher tier', 'Identical across every plan'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">Full device-by-device Setup Guide →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting in', title: 'From choosing a plan to watching something' })}
  ${stepsList([
    { title: 'Pick a plan length, or the trial', text: 'A dollar is enough to see the current lineup for yourself.' },
    { title: 'Provide contact details', text: 'An email address is all that\'s required to move forward.' },
    { title: 'Get your login', text: 'Delivered by email, usually within a few hours.' },
    { title: 'Load it into a compatible player app', text: 'The Setup Guide walks through the exact steps for your device.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV Hot' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">See the full plan breakdown →</a></p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'See it before paying for it', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} unlocks the exact same catalog as a paid plan for a full ${trial.duration} — enough time to see what's actually trending right now rather than take a landing page's word for it.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Nothing held back from the full lineup</li>
        <li>Up to 4K where the source supports it</li>
        <li>One device, active the entire trial period</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'A good fit if', title: 'Who actually gets the most out of this' })}
  ${featureGrid([
    { title: 'People tired of "coming soon" catalogs', text: 'If a service\'s new-release page hasn\'t moved in months, that\'s the exact gap this fills.' },
    { title: 'Live sports watchers', text: 'Current fixtures matter more than a channel list that was accurate a year ago.' },
    { title: 'Households sharing one login across devices', text: 'The same lineup, whichever screen it\'s watched on.' },
    { title: 'Anyone burned by a bait-and-switch channel count', text: 'What\'s advertised is what\'s actually reachable — no asterisk, no premium tier for the good stuff.' },
  ], 4)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">See the full FAQ →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Quick facts', title: 'Before you scroll away' })}
  <div class="grid grid-3">
    ${[
      { title: 'Every price is on the Pricing page', text: 'No plan detail waits behind a signup form.', href: '/pricing/' },
      { title: 'A dollar answers most doubts', text: 'The trial runs on the real catalog, not a preview mode.', href: '/trial/' },
      { title: 'Setup steps are public', text: 'Read exactly what installing a player app involves before ordering.', href: '/setup-guide/' },
      { title: 'Refunds, spelled out', text: 'The conditions are written in full, not summarized.', href: '/refund-policy/' },
      { title: 'What gets collected, and why', text: 'The Privacy Policy says it plainly.', href: '/privacy-policy/' },
      { title: 'What "IPTV" actually means', text: 'A real explanation, not a one-line glossary entry.', href: '/guides/what-is-iptv/' },
    ]
      .map(
        (t) => `
    <div class="card">
      <h3><a href="${t.href}">${esc(t.title)}</a></h3>
      <p>${esc(t.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({
  title: 'See what\'s actually live right now',
  lead: 'Compare plans, or spend a dollar on the trial and check the current lineup yourself.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
