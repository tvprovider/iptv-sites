import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Prime — Premium IPTV Service From $14.99',
  description: 'IPTV Prime: 40,000+ live channels, 180,000+ VOD titles, live sports, up to 4K, on every device. Plans from $14.99/month, plus a $1 trial.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Prime',
  h1: `${catalog.liveChannels} live channels. ${catalog.vods} movies & series. One login.`,
  lead: `Live sports, news, and entertainment from around the world, plus a full on-demand library, streamed straight to your TV, phone, or computer in up to 4K. No satellite dish, no technician visit, no 24-month contract — just a login that works the same on day one and day one thousand.`,
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: [`${catalog.liveChannels} live channels`, `${catalog.vods} movies & series`, 'Up to 4K resolution', 'Works on any device'],
})}

${marquee(['Live Sports', 'News', 'Movies', 'TV Series', 'Kids', 'Documentaries', 'International Channels', '4K Ultra HD'])}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Pricing', title: 'Pick a plan and start watching today' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare every plan in detail →</a> &nbsp;·&nbsp; <a href="/trial/">Or test it first for $1 →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why cut the cord', title: 'Everything cable charges extra for, already included', left: true })}
  ${comparisonTable(
    ['', 'Cable / satellite', 'IPTV Prime'],
    [
      ['Setup', 'Technician visit, rented box, install fee', 'A player app and a login — running in minutes'],
      ['Contract', 'Often locked in for 12-24 months', 'Nothing longer than 12 months, ever'],
      ['Channel count', 'A fixed regional bundle', `${catalog.liveChannels} live channels`],
      ['On-demand library', 'Limited, often a paid add-on', `${catalog.vods} movies and series, included`],
      ['Try before you commit', 'Rarely offered', `${trial.label} for just $${trial.price.toFixed(2)}`],
      ['Devices', 'One box, one room', 'Every screen you own, same login'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What\'s in the catalog', title: 'Sports, movies, news, and everything in between', left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M270 246 a24 24 0 1 0 0 48 a24 24 0 1 0 0 -48 z" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 246 v48 M246 270 h48 M253 253 l34 34 M253 287 l34 -34" stroke="#ffffff" stroke-width="2.5"/>', 'Global channel coverage illustration')}</div>
    <div>
      <p>Live sports leagues, 24/7 news channels, blockbuster movies, full TV series, kids\' programming, and international channels spanning dozens of countries and languages — all inside the same subscription, on every plan length. Nothing here is a paid add-on or a separate package.</p>
      <ul class="check-list">
        <li>Live sports coverage across major leagues and events</li>
        <li>${catalog.liveChannels} channels covering news, entertainment, and international programming</li>
        <li>${catalog.vods} on-demand movies and series, updated continually</li>
        <li>Up to 4K resolution where your device and the source content support it</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Watch on whatever you already own', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">Full setup steps for every device →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'From signup to your first channel' })}
  ${stepsList([
    { title: 'Choose a plan, or start the $1 trial', text: 'Every length reaches the full channel and VOD catalog — the trial just lets you confirm that on your own connection first.' },
    { title: 'Enter your email', text: 'That\'s the only detail either form actually needs to move forward.' },
    { title: 'Check your inbox for activation details', text: 'Usually within a few hours of payment or trial signup clearing.' },
    { title: 'Load the login into a compatible player app', text: 'Device-specific instructions are on the Setup Guide — most people are watching within minutes.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} unlocks the full catalog for ${trial.duration} — the same channels and titles a paying subscriber gets, not a limited preview. See the picture quality and channel lineup on your own screen before committing to a longer term.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The complete live and on-demand catalog, nothing held back</li>
        <li>Up to 4K resolution where supported</li>
        <li>One device, active for the full 24 hours</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What you\'re actually getting', title: 'The details that matter, upfront' })}
  ${featureGrid([
    { title: 'One catalog, every plan', text: 'A one-month subscriber and a twelve-month subscriber watch the identical channel and VOD lineup.' },
    { title: 'Real support, not a bot loop', text: 'Messages go to a person who reads them and replies — no automated ticket queue.' },
    { title: 'Prices posted in the open', text: 'All four plan lengths are listed on the Pricing page, no signup wall in front of the numbers.' },
    { title: 'A trial that proves it', text: `$${trial.price.toFixed(2)} gets you ${trial.duration} on the real service, not a stripped-down demo.` },
  ], 4)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">Read the full FAQ →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Keep reading', title: 'A few more pages worth a look' })}
  <div class="grid grid-3">
    ${[
      { title: 'Full pricing breakdown', text: 'Every plan length and what it actually costs per month.', href: '/pricing/' },
      { title: 'Start the $1 trial', text: 'The fastest way to judge the catalog for yourself.', href: '/trial/' },
      { title: 'Setup Guide', text: 'Step-by-step instructions for every supported device.', href: '/setup-guide/' },
      { title: 'How to choose an IPTV subscription', text: 'A real checklist for spotting a well-run provider.', href: '/guides/how-to-choose-an-iptv-subscription/' },
      { title: 'Refund Policy', text: 'The exact terms, published before you need them.', href: '/refund-policy/' },
      { title: 'Privacy Policy', text: 'What gets collected and why, stated plainly.', href: '/privacy-policy/' },
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
  title: 'Ready to start watching?',
  lead: 'Compare the four plans, or put a dollar toward the 24-hour trial and see the catalog for yourself.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
