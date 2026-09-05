import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Do the cheaper plans get fewer channels?', a: `No. Every plan — 1 month or 12 — reaches the same ${catalog.liveChannels} live channels and ${catalog.vods} on-demand titles. Term length changes the price, not the catalog.` },
  { q: 'Can I switch to a different plan length later?', a: 'Yes, once your current term ends. Need to switch sooner — before a renewal date? Message support and it gets handled directly.' },
  { q: 'Will my price change after I\'ve paid?', a: 'No — a rate you\'ve locked in stays yours for that term. Future pricing changes only apply to new orders placed after the change.' },
  { q: 'Does the trial dollar count toward a subscription?', a: 'No, it\'s billed separately. The trial exists purely to let you check the channels and picture quality before committing to a longer plan.' },
  { q: 'What happens when a plan runs out?', a: 'Access ends automatically unless you\'ve set up a renewal. Nothing charges you again without your action.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Prime Pricing — Plans From $14.99',
  description: 'IPTV Prime pricing: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99. Same full channel and VOD catalog on every plan, plus a $1 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Pricing',
  h1: `${catalog.liveChannels} channels. ${catalog.vods} titles. Every plan, no exceptions.`,
  lead: `Four plan lengths, one price each, no hidden fees. Whichever you pick reaches the exact same live channels, sports, and on-demand library — a shorter term never means a smaller catalog.`,
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: [`${catalog.liveChannels} channels on every plan`, 'No hidden fees', 'Cancel anytime, no auto-renewal', `$${trial.price.toFixed(2)} trial available`],
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
  ${sectionHead({ eyebrow: 'Compare', title: 'All four plans, side by side', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Included with every plan', title: 'The short plan isn\'t the small plan', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>${catalog.liveChannels} live channels</h3><p>Sports, news, entertainment, and international channels — the full lineup, from the 1-month plan to the 12-month plan.</p></div>
    <div class="card"><h3>${catalog.vods} movies & series</h3><p>The entire on-demand library, available from day one, not staged in behind a longer commitment.</p></div>
    <div class="card"><h3>Up to 4K resolution</h3><p>Resolution follows your device and the source content — not which plan length you picked.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Save more, longer term', title: 'Lower your monthly cost by committing longer', left: true })}
  <p>1 month runs $${plans[0].price.toFixed(2)} with zero commitment beyond it. 3 months brings the effective rate to about $${plans[1].perMonth.toFixed(2)}/month. 6 months drops it further to roughly $${plans[2].perMonth.toFixed(2)}/month. A full year lands near $${plans[3].perMonth.toFixed(2)}/month — the lowest rate on offer. The catalog never changes; only the price per month does.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Not sure yet?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} for ${trial.duration} on the exact same channels and titles a subscriber gets — long enough to check picture quality and channel availability before paying for a full term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What the trial can and can\'t tell you</h3><p>It confirms the catalog and how support responds. It can\'t confirm your own internet connection holds up under sustained 4K — that's worth checking on your end too.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens right after payment', left: true })}
  <p>Activation details usually arrive within a few hours. From there, it's picking a compatible player app for your device — the Setup Guide covers each one step by step.</p>
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
  ${sectionHead({ eyebrow: 'Billing', title: 'No surprise charges', left: true })}
  <p>The price listed for each plan is the complete price, in US dollars — nothing added at checkout. Renewal isn't automatic by default: a term simply ends unless you specifically set up a recurring option.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If it\'s not right for you', title: 'Refund terms, spelled out in advance', left: true })}
  <p>Full conditions are on the <a href="/refund-policy/">Refund Policy</a> page — worth reading before you subscribe, not after something's gone wrong.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to pick a plan?', lead: 'Choose a length below, or test the catalog first with the $1 trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
