import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'America IPTV — American Live TV & Sports Streaming',
  description: 'Stream American live TV, local networks, and sports in up to 4K. Transparent pricing, a $1 24-hour trial, and setup help for every device.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'America IPTV',
  h1: 'American live TV, without the cable bill',
  lead: 'America IPTV is a streaming subscription built around the channels US households actually watch — live TV, 24/7 news, and sports — delivered over the internet in up to 4K. No satellite dish, no technician visit, no multi-year contract.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['No annual contract', 'Works anywhere in the US', 'M3U & Xtream Codes supported', 'Real 24-hour trial for $1'],
})}

${marquee(devices.map((d) => d.name))}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'What a cable bill buys you that this does not require', left: true })}
  ${comparisonTable(
    ['', 'Cable or satellite', 'America IPTV'],
    [
      ['Contract', 'Often a 12–24 month lock-in', 'No annual contract required'],
      ['Installation', 'Technician visit, rented hardware', 'Self-setup in minutes on your own device'],
      ['Coverage', 'Limited by ZIP code and provider footprint', 'Works anywhere you have internet in the US'],
      ['Trial period', 'Rarely offered without a sales call', `${trial.label} for $${trial.price.toFixed(2)}`],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you get', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<rect x="248" y="250" width="44" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><rect x="253" y="256" width="15" height="12" fill="#ffffff"/><rect x="272" y="256" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="253" y="272" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="272" y="272" width="15" height="12" fill="#ffffff"/>', 'American live channel and VOD library illustration')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>Network affiliates, 24/7 news, and sports coverage, bundled with international channels at no extra cost — the exact same list regardless of which plan you pick.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>New releases added on an ongoing basis, backed by a deep catalog of older films and series, at no separate cost.</p>
      </div>
    </div>
  </div>`,
})}

${marquee(['Live Sports', 'Local News', 'Movies & Series', '24/7 News', 'Kids & Family', 'Entertainment', 'International Channels', 'Documentaries'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The basics', title: 'What is America IPTV?', lead: null, left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M250 254 a10 10 0 0 1 20 -4 a8 8 0 0 1 14 6 h4 a7 7 0 0 1 0 14 h-38 a7 7 0 0 1 0 -14 h0 z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="270" x2="270" y2="286" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><polyline points="262,280 270,288 278,280" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>', 'How IPTV delivers American channels over the internet illustration')}</div>
    <div>
      ${answerBox(`<p><strong>America IPTV</strong> is a subscription that sends live channels and on-demand titles over your internet connection rather than through a dish or a coax line, with a lineup weighted toward American networks and sports. Sign up, receive activation details, and start watching on whichever device you already own, in up to 4K.</p>`)}
      <ul class="check-list">
        <li>Nothing to install outdoors, nothing rented from a provider</li>
        <li>The same account works across TVs, phones, and computers</li>
        <li>Real pricing on the page, a real trial before you commit</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'What actually separates this from the alternatives' })}
  ${featureGrid([
    { title: 'A US-first channel lineup', text: 'Networks and sports coverage chosen for American viewing habits, not a generic worldwide package with a couple of US channels tacked on.' },
    { title: 'No sports tier to upsell', text: 'Coverage is part of the base subscription — there is no separate "sports package" waiting at checkout.' },
    { title: `Real testing for $${trial.price.toFixed(2)}`, text: `The ${trial.label} runs for ${trial.duration} on the actual service, not a limited demo version.` },
    { title: 'Setup written per device', text: 'Steps are specific to your hardware, not a one-size-fits-all document that half-applies.' },
    { title: 'Nothing to ship back', text: 'No box, no remote, no rented equipment to return if you decide to cancel.' },
    { title: 'An inbox that replies', text: 'Setup, billing, and trial questions go to a person, not an automated form response.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Streaming quality', title: 'The honest version of "up to 4K"', left: true })}
  ${featureGrid([
    { title: 'Source content sets the ceiling', text: 'A meaningful share of channels broadcast in HD at the source — no service can add resolution that was never captured to begin with.' },
    { title: 'Your setup is half the equation', text: 'Sustained internet speed, your device\'s decoding power, and general network conditions at the time all factor into what you actually see.' },
    { title: 'We will not oversell it', text: 'Zero buffering and guaranteed uptime are not honest claims for anything streamed over the open internet — nobody can back that up truthfully.' },
    { title: 'A workable baseline', text: 'A wired or strong Wi-Fi connection at 25 Mbps or better, on a device from the last few years, covers most situations. Check your own with a <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer nofollow">free speed test</a>.' },
  ], 2)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">See the full Setup Guide for device-by-device instructions →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'What actually happens after signup' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Or start with the 24-hour trial and decide afterward.' },
    { title: 'Give us an email address', text: 'That is the only detail needed to move an order forward.' },
    { title: 'Get your login details', text: 'Sent once the order or trial is processed, usually inside a few hours.' },
    { title: 'Load it into a player app', text: 'The Setup Guide shows exactly where those details go for your device.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to America IPTV' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare full plan details on the Pricing page →</a></p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>One day, full access, for the price of a coffee — enough time to judge streaming quality and device compatibility on your own connection before spending more.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The complete channel lineup, not a trimmed-down preview</li>
        <li>Up to 4K wherever the content and connection allow it</li>
        <li>One device, active for the entire ${trial.duration}</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Who it fits', title: 'Who this actually replaces cable for' })}
  ${featureGrid([
    { title: 'Anyone done with retention calls', text: 'No "loyalty rate" that quietly expires after a promotional period.' },
    { title: 'Sports fans tired of blackout rules', text: 'One lineup instead of chasing games across regional restrictions and add-on packages.' },
    { title: 'Households with more than one screen', text: 'A single account covering a TV, a streaming box, and a laptop at once.' },
    { title: 'People who move often', text: 'Nothing here is tied to a specific address or a wall jack.' },
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
  ${sectionHead({ eyebrow: 'Confidence', title: 'You can verify all of this yourself' })}
  <div class="grid grid-3">
    ${[
      { title: 'Prices you do not have to ask for', text: 'The full cost of every plan is on the Pricing page already.', href: '/pricing/' },
      { title: 'A message that gets a reply', text: 'Not a bot, not a ticket number — an actual response.', href: '/contact/' },
      { title: 'Setup steps before you subscribe', text: 'Read exactly what activation involves before paying anything.', href: '/setup-guide/' },
      { title: 'Refund terms in writing', text: 'Conditions are spelled out, not left to a support agent\'s discretion.', href: '/refund-policy/' },
      { title: 'A privacy policy that says something', text: 'What is collected and why, in plain language.', href: '/privacy-policy/' },
      { title: 'Terms worth actually reading', text: 'Written to be understood, not just to survive a legal review.', href: '/terms-of-use/' },
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

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Learn more', title: 'Worth reading before you subscribe', left: true })}
  <div class="grid grid-4">
    ${[
      { title: 'Setup Guide', text: 'One section per supported device.', href: '/setup-guide/' },
      { title: 'Full FAQ', text: 'Every question we get asked regularly.', href: '/faq/' },
      { title: 'What Is IPTV?', text: 'The technology itself, in plain terms.', href: '/guides/what-is-iptv/' },
      { title: '4K vs HD Streaming', text: 'What the resolution gap really looks like.', href: '/guides/4k-vs-hd-streaming/' },
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

${ctaBanner({
  title: 'Ready to watch American TV in 4K?',
  lead: 'Compare plans or test the service first with a low-cost 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
