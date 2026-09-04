import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does a longer plan get a bigger or fresher catalog?', a: `No — every plan reaches the identical ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, trending additions included. A longer term only lowers the effective monthly price.` },
  { q: 'Can I switch to a different plan length later?', a: 'Yes, once your current term ends. Contact support if you want help timing the switch.' },
  { q: 'Will prices change without warning?', a: 'The prices on this page are current. If they change, it applies to new orders and renewals going forward — not retroactively to a term you\'ve already paid for.' },
  { q: 'Does the trial count toward a subscription?', a: 'No. The 24-hour trial is billed separately as a low-cost way to check the current lineup before committing to a plan.' },
  { q: 'What happens when a plan ends?', a: 'Access ends at the end of your paid term unless you renew — nothing auto-enrolls you into a new one.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Hot Pricing — Plans & 24-Hour Trial',
  description: 'IPTV Hot plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 — same trending catalog on every plan, plus a $1.00 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'One price per term, same catalog on every one of them',
  lead: 'Four lengths, four flat numbers — nothing about the trending lineup or live sports coverage changes based on which one you pick.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No contract past the term you pick', 'Identical catalog on every plan', 'Works on every listed device', 'Refund terms in writing'],
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
  ${sectionHead({ eyebrow: 'Term length, decided', title: 'How the four options actually differ', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No hidden tier', title: 'What every plan reaches, without exception', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The whole catalog, day one</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, identical whether you paid for one month or twelve.</p></div>
    <div class="card"><h3>Live sports as they happen</h3><p>Current fixtures, not a channel list that stopped being accurate months ago.</p></div>
    <div class="card"><h3>Every listed device</h3><p>One login works the same way across phone, TV box, and computer.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Deciding a length', title: 'A quick way to pick without overthinking it', left: true })}
  <div class="grid grid-2">
    <p>Not sure this fits your setup yet? The $1 trial answers that in a day, before locking into anything.</p>
    <p>Already confident? The 6- and 12-month plans are where the real savings show up — 12 months averages about $6.67/month against the $14.99 monthly rate, over a 55% drop.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The math', title: 'What committing longer actually saves', left: true })}
  <p>Paying month to month keeps every option open at the highest rate. Locking in further out lowers it meaningfully: about $11.66/month at 3 months, $9.17/month at 6 months, $6.67/month at 12 months.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Lower commitment first', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} buys ${trial.duration} on the exact same catalog as a paid plan — check what's actually trending before spending more.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What a single day settles</h3><p>Whether the current lineup, your device, and your connection all cooperate — the one thing no landing page can answer for you.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'Between paying and watching something', left: true })}
  <p>Login details land by email, usually within a few hours. From there, it's installing a compatible player app and entering them — the Setup Guide covers the exact steps per device.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'How the charge actually works', left: true })}
  <p>Every listed price is the full amount in US dollars — nothing added at checkout. Nothing renews automatically unless a recurring option is specifically selected, so a plan ending is always something you chose, not something that catches you off guard.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If it doesn\'t work out', title: 'Refunds, before you need them', left: true })}
  <p>Full terms live on the <a href="/refund-policy/">Refund Policy</a> page — worth reading before subscribing, not after something's gone wrong.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to see the current lineup?', lead: 'Pick a plan, or test it first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
