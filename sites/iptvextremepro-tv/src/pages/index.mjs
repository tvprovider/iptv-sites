import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Xtream Pro — Xtream Codes IPTV, Built for Uptime',
  description: 'IPTV built around the Xtream Codes login format: live channels and on-demand titles, redundant server infrastructure, and setup steps that explain it fully.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Xtream Pro',
  h1: 'The Xtream Codes login, explained properly and backed by real infrastructure',
  lead: 'A username, password, and server URL — that\'s an Xtream Codes login, and it\'s the format this whole service is built around. Live channels and on-demand titles, running on multiple access points instead of one fragile server.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['Xtream Codes login format', 'M3U also supported', 'Multiple access points, not one', 'Real 24-hour trial for $1'],
})}

${marquee(devices.map((d) => d.name))}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The part most guides skip', title: 'Username, password, server URL — not a mystery once explained', left: true })}
  ${comparisonTable(
    ['', 'M3U playlist', 'Xtream Codes login'],
    [
      ['What you get', 'One URL', 'Three fields: username, password, server'],
      ['How the player reads it', 'Static — the file itself lists channels', 'Dynamic — the player asks the server directly'],
      ['Program guide', 'Depends on the playlist provider', 'Usually pulled live from the panel'],
      ['Best for', 'Simple one-tap setup', 'Players built to use the format fully'],
    ]
  )}
  <p style="margin-top:20px;">Both formats reach the same channel and VOD catalog. Xtream Codes is just the one this site is built to walk through properly — most competitors mention it in one sentence and move on. The <a href="/setup-guide/">Setup Guide</a> covers the full entry process field by field.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you get', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<rect x="248" y="250" width="44" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><rect x="253" y="256" width="15" height="12" fill="#ffffff"/><rect x="272" y="256" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="253" y="272" width="15" height="12" fill="#ffffff" opacity="0.5"/><rect x="272" y="272" width="15" height="12" fill="#ffffff"/>', 'Live channel and VOD library illustration')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>News, sports, and entertainment, pulled through your Xtream Codes login the same way regardless of which plan length you pick.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Films and series, added continually, reachable through the same server credentials.</p>
      </div>
    </div>
  </div>`,
})}

${marquee(['Live Sports', 'News Channels', '4K & HDR', 'Movies & Series', 'International', 'Kids Content', 'Documentaries', 'Entertainment'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The basics', title: 'What is IPTV Xtream Pro?', lead: null, left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M250 254 a10 10 0 0 1 20 -4 a8 8 0 0 1 14 6 h4 a7 7 0 0 1 0 14 h-38 a7 7 0 0 1 0 -14 h0 z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="270" x2="270" y2="286" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><polyline points="262,280 270,288 278,280" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>', 'How Xtream Codes IPTV works illustration')}</div>
    <div>
      ${answerBox(`<p><strong>IPTV Xtream Pro</strong> is a streaming subscription centered on the Xtream Codes login format — username, password, server URL — feeding a compatible player app over your internet connection, with live channels and on-demand titles in up to 4K where your plan and the source content support it.</p>`)}
      <ul class="check-list">
        <li>Xtream Codes login as the primary format, M3U as a fallback</li>
        <li>Built on multiple access points, not a single server</li>
        <li>Full pricing and a real trial, not a sales pitch</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'Built for people who already know what Xtream Codes is' })}
  ${featureGrid([
    { title: 'The login format explained fully', text: 'Where the username goes, where the server URL goes, and what happens when a field is entered wrong — not glossed over.' },
    { title: 'Redundant access points', text: 'The infrastructure runs on more than one node, so a single server issue does not take the whole service down with it.' },
    { title: `Test it for $${trial.price.toFixed(2)}`, text: `The ${trial.label} runs on the same servers as a paid plan for ${trial.duration} — enough time to judge response speed for yourself.` },
    { title: 'The number on the page is the number charged', text: 'Nothing tacked on at checkout, nothing that renews without you choosing it.' },
    { title: 'Works with the player you already use', text: 'Any app that lists Xtream Codes or M3U support reads a login from here without modification.' },
    { title: 'Support that knows the login format', text: 'A wrong field order or a typo in the server URL is diagnosed fast when the person answering actually understands the format.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Reliability', title: 'What "built for stability" actually means here', left: true })}
  ${featureGrid([
    { title: 'No single point of failure by design', text: 'Access routes through multiple points rather than one server carrying the entire load.' },
    { title: 'Uptime is actively monitored', text: 'Problems get flagged and addressed rather than discovered only when a customer reports one.' },
    { title: 'No provider promises perfection', text: 'Streaming over the open internet always depends partly on your own connection — anyone claiming otherwise is not being straight with you.' },
    { title: 'A practical connection baseline', text: 'Wired Ethernet where possible, or a strong Wi-Fi signal, at 25 Mbps or better sustained. Check yours with a <a href="https://www.speedtest.net" target="_blank" rel="noopener noreferrer nofollow">free speed test</a>.' },
  ], 2)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">See the full Setup Guide, Xtream Codes entry field by field →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'From signup to a working login' })}
  ${stepsList([
    { title: 'Pick a plan, or the trial', text: 'A dollar is enough to test server response on your own connection.' },
    { title: 'Give us an inbox to reach', text: 'Nothing else is required to get the process started.' },
    { title: 'Receive your Xtream Codes login', text: 'Username, password, and server URL, usually within a few hours.' },
    { title: 'Enter it into a compatible player app', text: 'The Setup Guide walks through exactly which field each piece goes in.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV Xtream Pro' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare full plan details on the Pricing page →</a></p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>A working Xtream Codes login, active for a full day, for $${trial.price.toFixed(2)} — enough time to judge channel-switching speed and stability before paying for a longer term.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Every channel a paid plan gets — nothing held back for the trial</li>
        <li>Up to 4K resolution where the source supports it</li>
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
    { title: 'People who already know Xtream Codes by name', text: 'If "username, password, server" already means something to you, this site skips the beginner explainer and gets straight to it.' },
    { title: 'Anyone burned by an unreliable provider before', text: 'The infrastructure and monitoring approach here exist specifically to avoid a repeat of that.' },
    { title: 'Multi-device households', text: 'The same login format works identically whether it lands on a TV box, a phone, or a computer.' },
    { title: 'People who want a straight technical answer', text: 'Support here understands the login format well enough to diagnose an actual connection problem, not just suggest a reinstall.' },
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
      { title: 'Check the pricing before you\'re asked for an email', text: 'The Pricing page lists every number — nothing sits behind a form gate.', href: '/pricing/' },
      { title: 'Message support and see if it\'s actually a person', text: 'Test it before you buy — reply times and answer quality tell you what to expect after.', href: '/contact/' },
      { title: 'Read the exact login field order first', text: 'Username, password, server URL — see precisely where each one goes before committing to anything.', href: '/setup-guide/' },
      { title: 'The Refund Policy, in full', text: 'No summary, no "contact us for details" — the actual terms, as written.', href: '/refund-policy/' },
      { title: 'The Privacy Policy, unabridged', text: 'What gets collected and why, stated directly rather than buried in legal filler.', href: '/privacy-policy/' },
      { title: 'The Xtream Codes vs. M3U breakdown', text: 'A real technical comparison, not a one-line footnote like most competitors give it.', href: '/guides/what-is-iptv/' },
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
      { title: 'Setup Guide', text: 'The Xtream Codes fields, one by one.', href: '/setup-guide/' },
      { title: 'Full FAQ', text: 'Every question we actually get asked.', href: '/faq/' },
      { title: 'What Is IPTV?', text: 'M3U vs. Xtream Codes, explained in depth.', href: '/guides/what-is-iptv/' },
      { title: '4K vs HD Streaming', text: 'When the extra resolution is real, and when it is not.', href: '/guides/4k-vs-hd-streaming/' },
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
  title: 'Ready to put a real login to the test?',
  lead: 'Compare plans, or put a dollar down on the trial and check the server response yourself.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
