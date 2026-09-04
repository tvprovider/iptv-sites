import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does a cheaper plan mean a smaller channel list?', a: `No. Every plan reaches the identical catalog through the same Xtream Codes login: ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles. Term length changes only the price.` },
  { q: 'Can I move to a different plan length later?', a: 'Yes, once your current term ends. Reach out through Contact if you want help timing the switch.' },
  { q: 'Could these prices change after I subscribe?', a: 'The rates shown here are current. Any future change applies to new orders and renewals, never retroactively to a term you have already paid for.' },
  { q: 'Does the trial count toward a subscription?', a: 'No — the 24-hour trial is billed separately, a standalone way to test server response before committing to a plan.' },
  { q: 'What happens when a plan ends?', a: 'Access ends at the end of your paid term unless you renew. Nothing auto-enrolls you into a new one without your action.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Xtream Pro Pricing — Plans & 24-Hour Trial',
  description: 'IPTV Xtream Pro plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 USD, plus a $1.00 24-hour trial on the same servers.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'One price per term, the same login format every time',
  lead: 'Four plan lengths, each priced in US dollars, each activated as an Xtream Codes login (M3U on request) — no tiered channel counts, no hidden server-quality upsell.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No contract beyond the term you pick', 'Xtream Codes login on every plan', 'Redundant server infrastructure', 'Refund terms in plain writing'],
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
  ${sectionHead({ eyebrow: 'What actually differs between providers', title: 'Price isn\'t the only variable worth comparing', left: true })}
  ${comparisonTable(
    ['', 'A typical reseller panel', 'IPTV Xtream Pro'],
    [
      ['Login format', 'Often M3U only', 'Xtream Codes as the primary format, M3U too'],
      ['Server setup', 'Frequently a single node', 'Multiple access points by design'],
      ['Setup docs', 'One paragraph, if any', 'Field-by-field entry instructions'],
      ['Trial period', 'Rarely offered honestly', `${trial.label} for $${trial.price.toFixed(2)}`],
      ['Pricing clarity', 'Bundled fees, hidden renewal terms', 'One flat price per plan, listed above'],
    ]
  )}`,
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
  ${sectionHead({ eyebrow: 'Every plan, no exceptions', title: 'What a shorter term does not cost you', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The full catalog, always</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} VOD titles reach the 1-month login exactly as they reach the 12-month one.</p></div>
    <div class="card"><h3>The same server infrastructure</h3><p>No plan length gets routed to a lower-priority node — the redundant setup applies across the board.</p></div>
    <div class="card"><h3>Xtream Codes on every plan</h3><p>The login format is identical regardless of term — nothing simplified on shorter plans.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: 'Picking a length without the guesswork', left: true })}
  <div class="grid grid-2">
    <p>New here? Run the trial first — a dollar is enough to check server response and channel-switching speed on your own connection before committing to anything longer.</p>
    <p>Already confident it holds up? The 6- and 12-month plans carry the real savings: 12 months comes out to roughly $6.67 a month against $14.99 monthly, over a 55 percent drop.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'What a longer term actually saves', left: true })}
  <p>Monthly billing keeps every option open at the highest per-month rate. A longer commitment changes the math meaningfully: about $11.66/month at 3 months, $9.17/month at 6 months, $6.67/month at 12 months.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} for ${trial.duration} on the real infrastructure, with a real Xtream Codes login — not a demo account.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What one day of access actually proves</h3><p>Whether your player app handles the login format correctly and whether the server response holds up on your connection — the two things a sales page can't answer for you.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens between paying and watching', left: true })}
  <p>An Xtream Codes login (username, password, server URL) arrives by email, usually within a few hours. Enter the three fields into a compatible player and the catalog loads — full field-by-field steps are on the Setup Guide.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'How billing works', left: true })}
  <p>Every price above is in US dollars and is the full amount charged — nothing added afterward. Renewal only happens if a recurring option was specifically selected at checkout, so a plan ending is always your call, never an automatic charge to catch after the fact.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'Where refunds stand', left: true })}
  <p>Full conditions are on the <a href="/refund-policy/">Refund Policy</a> page — worth reading before you subscribe.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready for a login that actually holds up?', lead: 'Pick the plan that fits, or test server response first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
