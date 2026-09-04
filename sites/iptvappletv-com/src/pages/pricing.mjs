import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'How many channels and VOD titles are included?', a: `Every plan includes the same catalog: ${catalog.liveChannels} live channels, including premium channels, and ${catalog.vods} VOD titles covering the latest films and series.` },
  { q: 'Can I switch plans later?', a: 'Yes. You can move to a longer or shorter plan when your current term ends. Contact support if you would like help timing the switch.' },
  { q: 'Do prices ever change without notice?', a: 'The prices listed on this page are our current rates. If pricing changes, it will apply to new orders and renewals going forward, not retroactively to an active paid term.' },
  { q: 'Is the trial applied toward a subscription?', a: 'The 24-hour trial is a standalone, low-cost way to test the service and is billed separately from any subscription plan you choose afterward.' },
  { q: 'What happens when my plan ends?', a: 'Your access ends at the end of your paid term unless you renew. We do not auto-enroll you into a new term without your action.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Apple TV Pricing — Plans & 24-Hour Trial',
  description: 'Compare IPTV Apple TV subscription plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 USD, plus a $1.00 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'The subscription price, not an App Store price',
  lead: 'This is billed directly, not through Apple\'s in-app purchase system — four plan lengths, each with one listed price in US dollars, no equipment to rent and no regional package upsells at checkout.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No annual contract', 'M3U & Xtream Codes supported', 'Runs on Apple TV HD & 4K', 'Clear refund policy'],
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
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'What this replaces, cost-wise', left: true })}
  ${comparisonTable(
    ['', 'Cable or satellite', 'IPTV Apple TV'],
    [
      ['Contract', 'Often a 12–24 month lock-in', 'No annual contract required'],
      ['Setup', 'Technician install, rented hardware', 'App Store install or a one-time sideload'],
      ['Extra hardware', 'A separate set-top box', 'Runs on the Apple TV already under your TV'],
      ['Trial period', 'Rarely offered without a sales call', `${trial.label} for $${trial.price.toFixed(2)}`],
      ['Pricing clarity', 'Bundled fees, equipment charges', 'One flat price per plan, listed above'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compare', title: 'Plan comparison', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Included with every plan', title: "The same catalog whether you pay once or commit longer", left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Nothing gated by plan length</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} VOD titles come with the 1-month plan just as much as the 12-month one.</p></div>
    <div class="card"><h3>4K on Apple TV 4K</h3><p>Resolution follows the source content and your Apple TV generation, not which plan you picked.</p></div>
    <div class="card"><h3>Apple TV plus every other device</h3><p>The same login works across your Apple TV, phone, and computer without separate accounts.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: 'Picking a length without overthinking it', left: true })}
  <div class="grid grid-2">
    <p>New to this on Apple TV specifically? Run the trial first — a dollar answers whether your Apple TV generation and connection actually handle it well, before committing to anything longer.</p>
    <p>Already confident it works? The 6- and 12-month plans are where the real savings show up: 12 months comes out to roughly $6.67 a month against $14.99 monthly, over a 55 percent drop.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'What a longer commitment actually saves', left: true })}
  <p>Month to month keeps every option open at the highest per-month rate. Locking in longer changes the math meaningfully: about $11.66/month at 3 months, $9.17/month at 6 months, $6.67/month at 12 months.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} for ${trial.duration} on your actual Apple TV, not a description of what it should do.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What a day on Apple TV actually proves</h3><p>Whether your specific Apple TV generation and internet connection play nicely with a compatible player app — the one thing no review can answer for you.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens between paying and watching', left: true })}
  <p>Activation details arrive by email, usually within a few hours. From there it is the App Store install or the sideload method — no separate installation fee, no technician, nothing shipped. Full steps are in the Setup Guide.</p>
  <p><a class="btn btn-ghost" href="/setup-guide/">View the Setup Guide →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Payments', title: 'How billing actually works', left: true })}
  <p>Every price on this page is in US dollars and is the complete amount charged — no setup fee tacked on afterward. Nothing renews automatically unless you specifically choose a recurring option at checkout, so a plan ending is always your decision, not an auto-charge you have to catch.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'Refunds, spelled out before you need them', left: true })}
  <p>The full conditions live on the <a href="/refund-policy/">Refund Policy</a> page — worth a read before you subscribe, not after something has already gone sideways.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to get this running on Apple TV?', lead: 'Pick the plan that fits, or test the service first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
