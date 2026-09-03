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
  title: 'America IPTV Pricing — Plans & 24-Hour Trial',
  description: 'Compare America IPTV subscription plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99, plus a $1.00 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'One flat price per plan — no bundled fees, no surprise renewal',
  lead: 'Four plan lengths, each with a single listed price. No equipment rental, no regional package upsells at checkout — just an America IPTV subscription built to replace your cable or satellite bill.',
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
    ['', 'Cable or satellite', 'America IPTV'],
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
  ${sectionHead({ eyebrow: 'Included with every plan', title: "The same catalog regardless of plan length", left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Nothing held back</h3><p>The full ${catalog.liveChannels}-channel lineup and ${catalog.vods} VOD titles are in the 1-month plan just as much as the 12-month one.</p></div>
    <div class="card"><h3>4K based on the source</h3><p>Resolution follows the content and your own connection, not which plan you're on.</p></div>
    <div class="card"><h3>Every supported device</h3><p>One login moves freely between whatever hardware you're using that day.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: 'Picking a length without overthinking it', left: true })}
  <div class="grid grid-2">
    <p>First time trying this kind of service? Run the trial before anything else — it tells you in a day whether your device and connection actually cooperate.</p>
    <p>Confident already? The 6- and 12-month plans are where the math changes: 12 months lands around $6.67 a month against $14.99 monthly, a real difference over a year.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'What each term length actually saves', left: true })}
  <p>Month-to-month keeps every option open but costs the most per month. Committing longer moves the needle: about $11.66/month at 3 months, $9.17/month at 6 months, $6.67/month at 12 months. The longer the term, the more the savings compound.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} gets you ${trial.duration} on the actual service before any longer commitment.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>The one thing a trial settles</h3><p>Whether your specific internet and device combination works well — something no amount of reading can tell you in advance.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'The gap between paying and watching', left: true })}
  <p>Activation details arrive by email, usually within a few hours of your order. Enter them into a compatible player app and that's it — no install appointment, no separate setup charge. Device-specific steps are in the Setup Guide.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'What you are actually charged', left: true })}
  <p>Every listed price is the full amount, in US dollars — no add-on setup fee shows up afterward. Renewal only happens if you explicitly choose a recurring option at checkout, so canceling is always your call rather than something you need to remember to stop.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'Read the refund terms before you need them', left: true })}
  <p>The specific conditions covering trials and subscriptions are all on the <a href="/refund-policy/">Refund Policy</a> page — worth five minutes before you subscribe.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to watch American TV in 4K?', lead: 'Pick the plan that fits, or test the service first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
