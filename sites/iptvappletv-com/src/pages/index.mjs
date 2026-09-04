import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Apple TV — Live TV & VOD Streaming for Apple TV',
  description: 'IPTV built around Apple TV: live channels and on-demand titles in up to 4K, with a real setup guide for App Store and sideloaded player apps.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Apple TV',
  h1: 'IPTV that actually runs well on Apple TV',
  lead: 'Live channels and on-demand titles in up to 4K, set up through a compatible player app on your Apple TV — no jailbreaking, no unofficial firmware, just a normal App Store install or a straightforward sideload.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['Runs on Apple TV HD & 4K', 'No jailbreak required', 'M3U & Xtream Codes supported', 'Real 24-hour trial for $1'],
})}

${marquee(devices.map((d) => d.name))}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The part everyone gets stuck on', title: 'Two ways to get a player app onto your Apple TV', left: true })}
  ${comparisonTable(
    ['', 'App Store', 'Sideloaded'],
    [
      ['Setup effort', 'Search, download, done', 'Needs a Mac and Apple’s developer tools once'],
      ['Availability', 'Comes and goes as Apple reviews apps', 'Not affected by App Store listing changes'],
      ['Updates', 'Automatic through tvOS', 'Manual, reinstalled periodically'],
      ['Best for', 'Most people, most of the time', 'When no compatible app is currently listed'],
    ]
  )}
  <p style="margin-top:20px;">Apple periodically pulls generic IPTV player apps from the App Store during review sweeps, then similar ones reappear later. Neither path is a workaround or a hack — both are normal, Apple-supported ways to get an app onto the device. The <a href="/setup-guide/">Setup Guide</a> covers both step by step.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you get', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<rect x="248" y="250" width="44" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><rect x="253" y="256" width="15" height="12" fill="#ffffff"/><rect x="272" y="256" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="253" y="272" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="272" y="272" width="15" height="12" fill="#ffffff"/>', 'Live channel and VOD library illustration for Apple TV')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>News, sports, and entertainment from around the world, all in the same catalog regardless of plan length.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Films and series added on an ongoing basis, playable on the same Apple TV remote you already know.</p>
      </div>
    </div>
  </div>`,
})}

${marquee(['4K HDR', 'Live Sports', 'Movies & Series', '24/7 News', 'Kids & Family', 'Entertainment', 'International Channels', 'Documentaries'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The basics', title: 'What is IPTV Apple TV?', lead: null, left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M250 254 a10 10 0 0 1 20 -4 a8 8 0 0 1 14 6 h4 a7 7 0 0 1 0 14 h-38 a7 7 0 0 1 0 -14 h0 z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="270" x2="270" y2="286" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><polyline points="262,280 270,288 278,280" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>', 'How IPTV runs on Apple TV illustration')}</div>
    <div>
      ${answerBox(`<p><strong>IPTV Apple TV</strong> is a streaming subscription built with Apple TV as the primary device in mind — live channels and on-demand titles delivered over your internet connection, set up through a compatible player app, in up to 4K where your Apple TV model and the source content support it.</p>`)}
      <ul class="check-list">
        <li>No jailbreak, no unofficial tvOS firmware</li>
        <li>Works on Apple TV HD and every Apple TV 4K generation</li>
        <li>Full pricing and a real trial, not a sales pitch</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'Built around Apple TV specifically' })}
  ${featureGrid([
    { title: 'Apple TV comes first', text: 'Setup instructions, troubleshooting, and support all treat Apple TV as the primary device, not an afterthought bolted onto a generic guide.' },
    { title: 'Both installation paths covered', text: 'App Store when a compatible app is currently listed, sideloading when it is not — either way, you are not stuck.' },
    { title: `Test it for $${trial.price.toFixed(2)}`, text: `The ${trial.label} runs on the real service for ${trial.duration}, enough time to confirm your specific Apple TV generation handles it well.` },
    { title: 'One flat price per plan', text: 'No bundled fees, no surprise renewal — the price on the page is what gets charged.' },
    { title: 'Nothing to ship or return', text: 'This runs entirely through software already on a device you own.' },
    { title: 'Support that understands Apple TV quirks', text: 'Setup on Apple TV has a couple of extra steps compared to Android boxes — the support inbox is used to that.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Streaming quality', title: '4K on Apple TV, realistically', left: true })}
  ${featureGrid([
    { title: 'Apple TV 4K has the hardware', text: 'Every Apple TV 4K generation decodes 4K content without issue — the limiting factor is almost always the source stream or the connection, not the box.' },
    { title: 'Apple TV HD tops out at 1080p', text: 'If you are on the older Apple TV HD (4th generation), content plays back in up to 1080p regardless of the source resolution.' },
    { title: 'Not every channel is native 4K', text: 'Plenty of live channels broadcast in HD at the source — no player app or service can add resolution that was never captured.' },
    { title: 'A practical connection baseline', text: 'Wired Ethernet into the Apple TV, or a strong Wi-Fi signal, at 25 Mbps or better sustained. Check yours with a <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer nofollow">free speed test</a>.' },
  ], 2)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">See the full Setup Guide, Apple TV first →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'From signup to your Apple TV home screen' })}
  ${stepsList([
    { title: 'Pick a plan, or the trial', text: 'A dollar is enough to confirm your Apple TV handles this well.' },
    { title: 'Leave an email address', text: 'That is the only detail needed to move things forward.' },
    { title: 'Get your login or playlist URL', text: 'Usually within a few hours of ordering or starting the trial.' },
    { title: 'Load it into a player app on Apple TV', text: 'The Setup Guide walks through both the App Store route and sideloading.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV Apple TV' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare full plan details on the Pricing page →</a></p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>A full day on your actual Apple TV, at real quality, for $${trial.price.toFixed(2)} — the fastest way to know if your specific model and connection are a good match before paying for a longer plan.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The full live channel lineup, not a limited preview</li>
        <li>Up to 4K on Apple TV 4K where the source supports it</li>
        <li>One device, active for the entire ${trial.duration}</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Who it fits', title: 'Who this is actually built for' })}
  ${featureGrid([
    { title: 'Apple TV owners tired of guessing', text: 'People who have hit "app not available" in the App Store and want a straight answer instead of a dead end.' },
    { title: 'Households already inside the Apple ecosystem', text: 'One subscription that fits naturally alongside an iPhone, iPad, and Apple TV already in daily use.' },
    { title: 'Anyone who wants 4K without new hardware', text: 'If an Apple TV 4K is already under the TV, this puts it to actual use.' },
    { title: 'People who want it working today', text: 'No firmware flashing, no jailbreak forums — the App Store or a single sideload, and it runs.' },
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
  ${sectionHead({ eyebrow: 'Confidence', title: 'Worth checking before you subscribe' })}
  <div class="grid grid-3">
    ${[
      { title: 'Every price, listed now', text: 'No plan cost is hidden behind a signup form.', href: '/pricing/' },
      { title: 'A reply from an actual person', text: 'Support questions go to an inbox someone reads, not a bot.', href: '/contact/' },
      { title: 'Apple TV setup steps, public', text: 'Read exactly what installation involves before paying anything.', href: '/setup-guide/' },
      { title: 'Refund terms in writing', text: 'Conditions are spelled out plainly, not left to interpretation.', href: '/refund-policy/' },
      { title: 'What data actually gets collected', text: 'The Privacy Policy states it directly, nothing vague.', href: '/privacy-policy/' },
      { title: 'Independent, not affiliated with Apple', text: 'This service is not endorsed by or affiliated with Apple Inc. — see the full disclosure.', href: '/disclaimer/' },
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
  ${sectionHead({ eyebrow: 'Learn more', title: 'Background reading, if you want it', left: true })}
  <div class="grid grid-4">
    ${[
      { title: 'Setup Guide', text: 'Apple TV first, every other device after.', href: '/setup-guide/' },
      { title: 'Full FAQ', text: 'Every question we actually get asked.', href: '/faq/' },
      { title: 'What Is IPTV?', text: 'The technology itself, explained plainly.', href: '/guides/what-is-iptv/' },
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
  title: 'Your Apple TV is ready when you are',
  lead: 'Compare plans, or put a dollar down on the trial and see for yourself.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
