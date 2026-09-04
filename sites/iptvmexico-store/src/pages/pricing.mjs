import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does a longer plan unlock more Mexican channels?', a: `No — every plan reaches the identical ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, Liga MX and Selección Mexicana coverage included. A longer term only changes the total on the invoice.` },
  { q: 'Can I switch plan lengths partway through a term?', a: 'Once the current term wraps up, yes. Message support ahead of a renewal if the switch needs to land on a specific date, such as before a new torneo starts.' },
  { q: 'Could these prices change later?', a: 'The figures on this page are current as of today. Any future change applies to orders and renewals placed after that point — a term already paid for keeps its original price.' },
  { q: 'Does the trial fee count toward a plan?', a: 'No. The 24-hour trial is a separate $1 charge, meant only for checking the Mexican and international lineup before choosing a term.' },
  { q: 'What happens when a plan expires?', a: 'Access ends at that point unless a renewal was already arranged. Nothing carries over automatically into a new term.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Mexico Pricing — Liga MX Plans From $14.99',
  description: 'IPTV Mexico pricing: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99. Liga MX and novelas on every plan, plus a $1 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Pricing',
  h1: 'Four terms, one Mexican and international lineup on all of them',
  lead: 'Whichever length you pick below reaches the same Liga MX, Selección Mexicana, novela, and international channel lineup. Term length changes the invoice, not what shows up once you log in.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['Nothing owed past your chosen term', 'Same lineup on all four plans', 'Liga MX & Selección on every plan', 'Refund terms posted in advance'],
})}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Subscription plans', title: 'Choose your plan' })}
  ${pricingGrid(plans)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'mejor iptv mexico', title: 'The four terms, side by side', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}
  <p style="margin-top:16px;">Term length is the only column that changes the charge. It has no bearing on the Liga MX or Selección coverage reachable once the login lands.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What every plan actually includes', title: 'Mexican coverage is not a higher-tier add-on', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Liga MX & Selección, every plan</h3><p>League matches and national-team coverage sit in the standard lineup on the shortest term and the longest one alike.</p></div>
    <div class="card"><h3>${catalog.vods} VOD titles, no exceptions</h3><p>Novelas and the wider on-demand library are not trimmed on a shorter plan — same shelf on day one, whichever length you pick.</p></div>
    <div class="card"><h3>Every listed device, on any plan</h3><p>Device compatibility does not scale with price — the full Setup Guide applies no matter which term you choose.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Lining up plan length with the calendar', title: 'What a longer commitment actually buys', left: true })}
  <p>The monthly option runs $14.99 and asks for nothing beyond a month at a time. Stretch that to 3 months and the average drops to around $11.66, roughly matching the length of a single Liga MX torneo. Six months brings it to about $9.17, carrying a subscriber through one torneo and into the start of the next. A full year settles near $6.67 a month — both torneos covered, at under half what the monthly option costs.</p>
  <p>None of that changes what's reachable once the login is active. A subscriber on the shortest plan and one on the longest both watch from the same Mexican and international lineup — the math above only ever affects the invoice.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Undecided?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} buys ${trial.duration} on the same lineup a full subscriber gets — time enough to check a Liga MX match, a novela, and a Mexican news channel before committing to a longer term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What a trial can and can't answer</h3><p>It confirms whether the specific Mexican channels and shows you follow are genuinely on the lineup. It won't fix a home connection that can't keep up — that's a separate thing worth checking on its own.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'After you pay', title: 'How soon Liga MX actually shows up on screen', left: true })}
  <p>Login details typically land in your inbox a few hours after the charge clears. From that point, all that's left is installing a player app on whichever device you'll actually watch on and entering the login — the Setup Guide walks through that per device.</p>
  <p><a class="btn btn-ghost" href="/setup-guide/">Read the Setup Guide →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Payments', title: 'The number on the page is the number on the card', left: true })}
  <p>No surprise fees get added between the plan price shown above and what actually gets charged, in US dollars. A term doesn't quietly renew either — unless you explicitly turn on a recurring option at checkout, it simply ends, and picking up a new one afterward is a decision you make each time.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'The refund conditions, published ahead of time', left: true })}
  <p>Every scenario is spelled out on the <a href="/refund-policy/">Refund Policy</a> page in advance — not something you have to ask support to explain after the fact.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready for the next Liga MX matchday?', lead: 'Pick a plan, or confirm the lineup first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
