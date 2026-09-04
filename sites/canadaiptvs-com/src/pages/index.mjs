import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'Canada IPTV — Canadian Live TV & Sports Streaming',
  description: 'Stream Canadian live TV, news, and sports in up to 4K, anywhere in Canada. Transparent pricing, a $1 24-hour trial, and setup help for every device.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'Canada IPTV',
  h1: 'Canadian TV, on your terms',
  lead: 'Canada IPTV puts live TV, news, and sports on your existing internet connection, in up to 4K, so there is nothing to install, no technician to schedule, and no multi-year contract locking you to a provider you never actually chose.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['No annual contract', 'Works from coast to coast', 'M3U & Xtream Codes supported', 'Real 24-hour trial for $1'],
})}

${marquee(devices.map((d) => d.name))}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'Why Canadians are moving off cable and satellite', left: true })}
  ${comparisonTable(
    ['', 'Cable or satellite', 'Canada IPTV'],
    [
      ['Contract', 'Often a 1–2 year lock-in', 'No annual contract required'],
      ['Installation', 'Technician visit, rented hardware', 'Self-setup in minutes on your own device'],
      ['Coverage', 'Depends on provider footprint in your area', 'Works anywhere you have internet in Canada'],
      ['Trial period', 'Rarely offered without a sales call', `${trial.label} for $${trial.price.toFixed(2)}`],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you get', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<rect x="248" y="250" width="44" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><rect x="253" y="256" width="15" height="12" fill="#ffffff"/><rect x="272" y="256" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="253" y="272" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="272" y="272" width="15" height="12" fill="#ffffff"/>', 'Canadian live channel and VOD library illustration')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>Canadian news, sports, and entertainment channels alongside international feeds — the same lineup on every plan, no separate sports add-on.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Films and series updated continuously, alongside a deep catalog of classics, included with every plan.</p>
      </div>
    </div>
  </div>`,
})}

${marquee(['Entertainment', 'Canadian News', 'Live Sports', 'International Channels', 'Movies & Series', 'Documentaries', 'Kids & Family', '24/7 News'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The basics', title: 'What is Canada IPTV?', lead: null, left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M250 254 a10 10 0 0 1 20 -4 a8 8 0 0 1 14 6 h4 a7 7 0 0 1 0 14 h-38 a7 7 0 0 1 0 -14 h0 z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="270" x2="270" y2="286" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><polyline points="262,280 270,288 278,280" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>', 'How IPTV delivers Canadian channels over the internet illustration')}</div>
    <div>
      ${answerBox(`<p><strong>Canada IPTV</strong> delivers live channels and on-demand content over your internet connection instead of a satellite dish or cable box, with a channel lineup built around what Canadian households actually watch — subscribe, get your activation details, and watch on any compatible device in up to 4K.</p>`)}
      <ul class="check-list">
        <li>No technician visit — activation happens over email, not a scheduled appointment</li>
        <li>Same subscription follows you between a condo, a cottage, or a new city</li>
        <li>Priced the same regardless of postal code or provider territory</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'What makes this worth switching to' })}
  ${featureGrid([
    { title: 'A Canadian-first lineup', text: 'News, sports, and entertainment channels chosen for what Canadian households actually watch, not an international bundle with a token local tier.' },
    { title: 'One price, no add-on tiers', text: 'Every plan carries the full channel and VOD catalog — there is no separate sports package or premium-channel upsell waiting at checkout.' },
    { title: 'Test it for the price of a coffee', text: `The ${trial.label} costs $${trial.price.toFixed(2)} and runs for ${trial.duration}, long enough to judge real streaming quality on your own connection.` },
    { title: 'Instructions that match the product', text: 'Setup steps written per device, not a single generic PDF that assumes you already know what you are doing.' },
    { title: 'No hardware to return', text: 'Nothing is shipped, rented, or needs to be mailed back if you cancel — the subscription lives entirely in a player app you already have.' },
    { title: 'A support inbox with a person behind it', text: 'Questions about setup, billing, or the trial go to a real inbox, not a chatbot loop.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Streaming quality', title: 'Being straight about what "4K" means', left: true })}
  ${featureGrid([
    { title: 'Not everything is native 4K', text: 'Plenty of channels broadcast in HD at the source — no streaming service, including this one, can add detail that was never captured. 4K plays where the original feed actually supports it.' },
    { title: 'Your connection sets the ceiling', text: 'Picture quality is a function of several things at once: sustained internet speed, your device\'s decoder, and general network load in your area at the time you are watching.' },
    { title: 'No inflated promises', text: 'We will not tell you buffering never happens or that uptime is guaranteed at 100 percent — nobody delivering video over the open internet can honestly say that.' },
    { title: 'A practical baseline', text: 'A wired connection or strong Wi-Fi at 25 Mbps or better, on a device from the last few years, is enough for smooth playback most of the time. Check yours with a <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer nofollow">free speed test</a> first.' },
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
  ${sectionHead({ eyebrow: 'Getting started', title: 'From signup to your first channel' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Or start with the 24-hour trial if you would rather test first and decide after.' },
    { title: 'Tell us where to send details', text: 'Just an email address — nothing else is required to get your order moving.' },
    { title: 'Get your login or playlist URL', text: 'Sent as soon as your order or trial is processed, usually within a few hours.' },
    { title: 'Add it to a player app', text: 'The Setup Guide shows exactly where those details go for your specific device.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to Canada IPTV' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare full plan details on the Pricing page →</a></p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>A full day of real access — same channels, same servers, same quality as a paid plan — for a nominal $${trial.price.toFixed(2)}, so you decide with actual information instead of marketing copy.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The complete live channel lineup, not a limited preview</li>
        <li>Up to 4K where the content and your connection support it</li>
        <li>One device of your choice for the full ${trial.duration}</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Who it fits', title: 'Who actually switches to this' })}
  ${featureGrid([
    { title: 'People done negotiating with their provider', text: 'No retention call, no "loyalty discount" that expires in six months — the price you see is the price you pay.' },
    { title: 'Households following a full season', text: 'One subscription instead of stacking multiple sports add-ons just to keep up with a schedule.' },
    { title: 'More than one screen, one bill', text: 'A single plan that covers the living room TV, a bedroom streaming box, and a laptop without separate accounts.' },
    { title: 'Anyone who moves', text: 'Students, renters, and anyone between addresses — the subscription is not tied to a wall jack.' },
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
  ${sectionHead({ eyebrow: 'Confidence', title: 'Nothing here needs a login to check' })}
  <div class="grid grid-3">
    ${[
      { title: 'Prices, in full, right now', text: 'Every plan and its exact cost is on the Pricing page before you enter a single detail.', href: '/pricing/' },
      { title: 'A real reply, not a ticket number', text: 'Messages go to an inbox someone actually reads.', href: '/contact/' },
      { title: 'Setup steps you can read first', text: 'Device instructions are public — check them before you subscribe, not after.', href: '/setup-guide/' },
      { title: 'Refunds explained plainly', text: 'The conditions are written out in full, not buried in a support ticket macro.', href: '/refund-policy/' },
      { title: 'What we collect, and why', text: 'The Privacy Policy says exactly what data is kept and what it is used for.', href: '/privacy-policy/' },
      { title: 'Terms without the fine-print maze', text: 'Written to actually be read, not just to survive a legal review.', href: '/terms-of-use/' },
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
  ${sectionHead({ eyebrow: 'Learn more', title: 'If you want to read before you commit', left: true })}
  <div class="grid grid-4">
    ${[
      { title: 'Setup Guide', text: 'Every supported device, one at a time.', href: '/setup-guide/' },
      { title: 'Full FAQ', text: 'The complete list of questions we get asked.', href: '/faq/' },
      { title: 'What Is IPTV?', text: 'The technology, explained without jargon.', href: '/guides/what-is-iptv/' },
      { title: '4K vs HD Streaming', text: 'What the resolution difference actually looks like.', href: '/guides/4k-vs-hd-streaming/' },
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
  title: 'The channels are waiting — are you?',
  lead: 'Pick a plan, or put a dollar down on the trial and decide after.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
