import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV List — The Real Channel List, Before You Pay',
  description: 'IPTV List posts the real iptv channel list, device list, and per-plan price up front — 40,000+ channels, 180,000+ VOD titles, no vague claims.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV List',
  h1: 'The actual iptv channel list, and the actual price — before you ask',
  lead: 'Most listings sell "thousands of channels" and make you dig or message sales for a straight price. IPTV List posts the itemized channel list, the device list, and the per-plan price up front, so there is nothing left to ask.',
  primaryCta: { label: 'See the Plans', href: '/pricing/' },
  secondaryCta: { label: 'Check It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['40,000+ live channels, itemized', '180,000+ VOD titles, itemized', 'Every plan price shown, no signup wall', 'A real $1 trial on the same list'],
})}

${marquee(['40,000+ Live Channels', '180,000+ VOD Titles', '4 Flat-Rate Plans', '$1.00 24-Hour Trial', 'Every Device Named', 'Refund Terms Public', 'Real Human Support'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where the number comes from', title: `What "${catalog.liveChannels} channels" is actually made of`, left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<rect x="252" y="252" width="14" height="14" fill="#ffffff"/><rect x="274" y="252" width="14" height="14" fill="#ffffff" opacity="0.55"/><rect x="252" y="274" width="14" height="14" fill="#ffffff" opacity="0.55"/><rect x="274" y="274" width="14" height="14" fill="#ffffff"/>', 'Itemized channel list illustration')}</div>
    <div>
      <p>A round number by itself tells you nothing about what is actually reachable once you log in. The <a href="/guides/what-is-iptv/">What Is IPTV guide</a> breaks the full iptv channel list down by category — sports, news, entertainment, kids, regional feeds, and the on-demand library — so the total is something you can check against your own list of must-haves, not something you have to take on faith.</p>
      <ul class="check-list">
        <li>${catalog.liveChannels} live channels, category by category</li>
        <li>${catalog.vods} VOD titles across film and series</li>
        <li>The same count on every plan length, short or long</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'iptv comparison list', title: 'What a typical listing shows you, next to what this one shows you', left: true })}
  ${comparisonTable(
    ['', 'A typical iptv listing', 'IPTV List'],
    [
      ['Channel count', 'A round number, no breakdown offered', 'Exact count, broken into categories'],
      ['Device compatibility', '"Works on everything," left vague', 'Every supported device named on the Setup Guide'],
      ['Price', 'Hidden until checkout, or "contact for a quote"', 'Four flat prices, visible with no signup'],
      ['Trial', 'Rare, or a stripped-down demo catalog', 'A real $1.00 trial on the same live list'],
      ['Refund terms', 'Buried, or only shared after you ask support', 'Posted in full before any payment is made'],
    ]
  )}
  <p style="margin-top:16px;">None of that requires taking our word for it either — every row above links to a page where the actual detail lives.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What gets posted, not just claimed', title: 'Four things you can check before entering a card number' })}
  ${featureGrid([
    { title: 'The exact channel count', text: 'Not a vague "thousands" — a specific number, broken into categories on the <a href="/guides/what-is-iptv/">What Is IPTV guide</a>, so the total means something before you commit to it.' },
    { title: 'Every device, named individually', text: 'No "compatible with most devices." The <a href="/setup-guide/">Setup Guide</a> lists exactly which hardware is supported, with its own steps.' },
    { title: 'Four prices, not one quote', text: 'Every plan length and its exact total sit on the <a href="/pricing/">Pricing page</a> with no contact form standing between you and the figure.' },
    { title: 'A trial on the real catalog', text: 'The $1.00 trial runs the identical list a paying subscriber gets, not a curated preview built to look better than the real product.' },
  ], 4)}`,
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
  ${sectionHead({ eyebrow: 'Getting in', title: 'From reading the list to watching something' })}
  ${stepsList([
    { title: 'Check the list against what you actually watch', text: 'Cross-reference the categories on the What Is IPTV guide against what your household is currently paying for elsewhere.' },
    { title: 'Pick a plan length', text: 'Four terms, one price each, all visible on the Pricing page without a form in front of them.' },
    { title: 'Send over an email address', text: 'That is the only detail needed to get an order moving.' },
    { title: 'Watch for the activation email, then load it up', text: 'Login details typically arrive within a few hours; the Setup Guide covers the rest device by device.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV List' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">See the full plan breakdown →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Verify it yourself', title: trial.label, left: true })}
      <p>For $${trial.price.toFixed(2)}, ${trial.duration} against the exact list a paying subscriber gets — enough time to check off the specific channels and titles you actually care about instead of trusting the page you're reading right now.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The full live and on-demand list, held back on nothing</li>
        <li>Up to 4K resolution wherever the original source allows it</li>
        <li>One device running for the whole trial window</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'A good fit if', title: 'Who actually reads a page like this one' })}
  ${featureGrid([
    { title: 'A vague pitch burned you before', text: 'A previous provider promised the world and delivered a login with half of it missing. This time the list comes first.' },
    { title: 'You keep your own comparison list', text: 'Lining up several providers side by side gets a lot easier when one of them actually publishes numbers to compare against.' },
    { title: 'You want proof before a card number', text: 'The $1 trial exists specifically so the claim gets checked before the commitment does.' },
    { title: 'Your current list stopped matching reality', text: 'Channels that quietly went dark, a catalog that never got refreshed — a stale list is the exact problem this is built to avoid.' },
  ], 4)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">Read the rest of the FAQ →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you decide', title: 'A few more pages worth a look' })}
  <div class="grid grid-3">
    ${[
      { title: 'Nothing on Pricing needs a signup first', text: 'All four terms and their exact cost are visible right away.', href: '/pricing/' },
      { title: 'A dollar is cheaper than trusting a page', text: 'Check the actual list against your own before committing to months of it.', href: '/trial/' },
      { title: 'Installation steps, posted in the open', text: 'Every supported device gets its own walkthrough before you order anything.', href: '/setup-guide/' },
      { title: 'A refund policy with no fine print', text: 'Every condition is written out, not hinted at.', href: '/refund-policy/' },
      { title: 'A plain answer on data collection', text: 'What gets kept and why, stated directly on the Privacy Policy.', href: '/privacy-policy/' },
      { title: 'What a channel count actually hides', text: 'How to read a big total without taking it at face value, in the Guides section.', href: '/guides/what-is-iptv/' },
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
  title: 'Check the list against your own before you commit',
  lead: 'Line up the plans side by side, or put a dollar toward the trial and see the actual lineup on your own screen first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
