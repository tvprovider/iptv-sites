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
  ${sectionHead({ eyebrow: 'Included with every plan', title: "What's included", left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Full channel &amp; VOD access</h3><p>Every plan includes the same ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles — longer plans only change the price and commitment length, not the content available.</p></div>
    <div class="card"><h3>Up to 4K resolution</h3><p>Stream in up to 4K where your device and the source content support it.</p></div>
    <div class="card"><h3>Multi-device compatibility</h3><p>Use your subscription across any of our supported device types.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: 'Choosing the right plan', left: true })}
  <div class="grid grid-2">
    <p>If you are new to the service, start with the 24-hour trial to confirm compatibility with your device and internet connection. From there, the 1-month plan is a low-commitment way to try a full billing cycle.</p>
    <p>If you already know you want to stick around, the 6- or 12-month plans lower your effective monthly cost meaningfully — the 12-month plan works out to roughly $6.67 per month compared to $14.99 on the monthly plan.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'Monthly vs. longer-term value', left: true })}
  <p>Paying monthly gives you maximum flexibility to stop at any time, but it costs more per month than committing to a longer term. The 3-month plan brings the effective cost down to about $11.66/month, the 6-month plan to about $9.17/month, and the 12-month plan to about $6.67/month — a meaningful saving if you already know you'll use the service consistently.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>Not ready to commit? Test streaming quality and device compatibility for ${trial.duration} for $${trial.price.toFixed(2)}.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>Why start with a trial</h3><p>It confirms your internet connection and device work well with the service before you commit to a full billing cycle.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'Activation process', left: true })}
  <p>After completing your order, you'll receive activation details by email. Enter these into a compatible player app on your device, and you're ready to start watching. Full device-specific steps are in our Setup Guide.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'Billing & payment information', left: true })}
  <p>Prices on this page are shown in US dollars and reflect the full amount charged for each plan — there are no separate setup fees. Renewal is not automatic unless you explicitly choose a recurring option at checkout; you control if and when you pay again.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'Refund information', left: true })}
  <p>We want you to feel confident subscribing. Read our full <a href="/refund-policy/">Refund Policy</a> for the specific terms and conditions that apply to trials and subscription plans.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to watch Canadian TV in 4K?', lead: 'Pick the plan that fits, or test the service first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
