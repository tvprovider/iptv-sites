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
  title: 'Canada IPTV Pricing — Plans & 24-Hour Trial',
  description: 'Compare Canada IPTV subscription plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 USD, plus a $1.00 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'Every price listed here is exactly what you pay',
  lead: 'Four plan lengths, each with a single listed price in US dollars. No equipment rental, no regional package upsells at checkout — just a Canada IPTV subscription built to replace your cable or satellite bill.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No annual contract', 'M3U & Xtream Codes supported', 'Works on all major devices', 'Clear refund policy'],
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
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'What a cable bill actually costs vs. this', left: true })}
  ${comparisonTable(
    ['', 'Cable or satellite', 'Canada IPTV'],
    [
      ['Contract', 'Often a 12–24 month lock-in', 'No annual contract required'],
      ['Setup', 'Technician install, rented hardware', 'Self-setup in minutes on your own device'],
      ['Devices', 'Tied to a fixed set-top box', 'Works across Smart TV, mobile, and computer'],
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
  ${sectionHead({ eyebrow: 'Included with every plan', title: "Nothing held back for a higher tier", left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The whole catalog, every plan</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} VOD titles come with the 1-month plan just as much as the 12-month one — length only changes price and commitment, never content.</p></div>
    <div class="card"><h3>4K where it is available</h3><p>Resolution follows the source and your own setup, not which plan length you picked.</p></div>
    <div class="card"><h3>Every device, one login</h3><p>Move between a Smart TV, a phone, and a laptop without juggling separate subscriptions.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: 'If you are not sure which length to pick', left: true })}
  <div class="grid grid-2">
    <p>New here? Run the 24-hour trial first — it settles whether your device and connection actually handle the service well before you spend more than a dollar finding out.</p>
    <p>Already sold on it? The 6- and 12-month plans are where the real savings live: 12 months works out to roughly $6.67 a month against $14.99 on the monthly plan, more than a 55 percent drop.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'What commitment actually buys you', left: true })}
  <p>Paying month to month keeps you free to stop whenever, at the highest per-month cost. Locking in longer changes that math meaningfully: roughly $11.66/month on the 3-month plan, $9.17/month at 6 months, and $6.67/month at 12 months. The savings scale with how confident you already are that you'll stick with it.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} buys ${trial.duration} of the real thing, not a stripped-down preview.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What one day actually proves</h3><p>Whether your internet and your device play nicely with the service — the two variables no amount of reading reviews can answer for you.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens right after you pay', left: true })}
  <p>Activation details land by email, generally within a few hours. Drop them into a compatible player app and you're watching — no separate install fee, no callback scheduled, no waiting on a technician. Device-specific steps live in the Setup Guide.</p>
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

${ctaBanner({ title: 'Ready to watch Canadian TV in 4K?', lead: 'Pick the plan that fits, or test the service first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
