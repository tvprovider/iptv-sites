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
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'Why American households are dropping cable', left: true })}
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
        <p>Local US networks, 24/7 news, sports, and international channels — the same lineup on every plan, no add-on sports package required.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Films and series updated continuously, alongside a deep catalog of classics, included with every plan.</p>
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
      ${answerBox(`<p><strong>America IPTV</strong> delivers live channels and on-demand content over your internet connection instead of a satellite dish or cable box, built around the American channel lineup — subscribe, get your activation details, and watch on any compatible device in up to 4K.</p>`)}
      <ul class="check-list">
        <li>No dish, no cable box — just your existing internet connection</li>
        <li>Works on Smart TVs, phones, tablets, and computers</li>
        <li>Clear pricing and a real trial, not a sales call</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'Why choose America IPTV' })}
  ${featureGrid([
    { title: 'Built for US viewers', text: 'A channel lineup centered on the American networks, news, and sports coverage households actually watch, not a generic international bundle.' },
    { title: 'Transparent pricing', text: 'Four plan lengths with the exact price shown up front — no bundled fees, no surprise renewal price.' },
    { title: 'A real trial', text: `Test the service for ${trial.duration} for $${trial.price.toFixed(2)} before committing to a longer subscription.` },
    { title: 'Setup documentation', text: 'Step-by-step instructions for every supported device, not a generic one-size-fits-all PDF.' },
    { title: 'Multi-device support', text: 'One subscription, usable across Smart TVs, streaming boxes, phones, tablets, and computers.' },
    { title: 'Direct support', text: 'A contact form routed to a real support inbox for setup, billing, and trial questions.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Streaming quality', title: 'What "4K" actually means here', left: true })}
  ${featureGrid([
    { title: '4K vs. HD', text: '4K (Ultra HD) delivers roughly four times the pixel detail of standard 1080p HD, most noticeable on larger screens with high-quality source content. Not every channel is available in 4K — availability depends on the original broadcast source.' },
    { title: 'What affects streaming quality', text: "Picture quality depends on several factors together: your internet speed and stability, your device's decoding capability, the quality of the original content source, and general network conditions." },
    { title: 'Realistic expectations', text: "We don't promise zero buffering or 100% uptime — no internet-delivered streaming service honestly can. What we do provide is a stable service built on transparent pricing and real support." },
    { title: 'Recommended setup', text: 'For the best experience, use a wired or strong Wi-Fi connection with at least 25 Mbps of sustained download speed — you can check yours with a <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer nofollow">free speed test</a> — and a device released within the last few years for smoother 4K decoding.' },
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
  ${sectionHead({ eyebrow: 'Getting started', title: 'How it works' })}
  ${stepsList([
    { title: 'Choose a plan', text: 'Pick a subscription length on the Pricing page, or start with the 24-hour trial if you want to test first.' },
    { title: 'Submit your information', text: 'Provide your email so we can send your activation details once your order is processed.' },
    { title: 'Receive activation details', text: 'You will receive the credentials or playlist information needed to start streaming.' },
    { title: 'Configure your device', text: 'Follow our Setup Guide to install a compatible player app and enter your details.' },
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
      <p>Test streaming quality, channel availability, and device compatibility for ${trial.duration} before committing to a longer plan — for a nominal $${trial.price.toFixed(2)}.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Full access to the live channel lineup for ${trial.duration}</li>
        <li>Up to 4K resolution where available</li>
        <li>Access on one device of your choice</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Who it fits', title: 'Who is America IPTV for?' })}
  ${featureGrid([
    { title: 'Cord-cutters', text: 'Households ready to drop cable or satellite without losing the channels they actually watch.' },
    { title: 'Sports viewers', text: 'Anyone tired of chasing games across regional blackouts and separate sports add-on packages.' },
    { title: 'Multi-device households', text: 'People who want one subscription usable across several devices and rooms.' },
    { title: 'Renters and movers', text: 'Anyone who wants a TV solution that isn’t tied to a fixed cable installation at one address.' },
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
  ${sectionHead({ eyebrow: 'Confidence', title: 'Trust & transparency' })}
  <div class="grid grid-3">
    ${[
      { title: 'Full pricing details', text: 'Every plan price is listed in full on our Pricing page — nothing hidden until checkout.', href: '/pricing/' },
      { title: 'Real support', text: 'A contact form that reaches an actual person, not an automated dead end.', href: '/contact/' },
      { title: 'Public setup instructions', text: 'Detailed, device-by-device setup instructions you can read before you subscribe.', href: '/setup-guide/' },
      { title: 'Refund Policy', text: 'Clear terms for when and how refunds apply. Read the full policy anytime.', href: '/refund-policy/' },
      { title: 'Privacy Policy', text: 'A plain-language explanation of what information we collect and why.', href: '/privacy-policy/' },
      { title: 'Terms of Use', text: 'The rules of using the service, written to be understood, not just legally defensible.', href: '/terms-of-use/' },
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
  ${sectionHead({ eyebrow: 'Learn more', title: 'Helpful resources', left: true })}
  <div class="grid grid-4">
    ${[
      { title: 'Setup Guide', text: 'Device-by-device instructions for getting connected.', href: '/setup-guide/' },
      { title: 'Full FAQ', text: 'Answers to the most common questions about the service.', href: '/faq/' },
      { title: 'What Is IPTV?', text: 'A plain-language introduction to how IPTV works.', href: '/guides/what-is-iptv/' },
      { title: '4K vs HD Streaming', text: 'Understand the real differences in resolution and quality.', href: '/guides/4k-vs-hd-streaming/' },
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
