import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does paying for a longer term unlock anything extra?', a: `Nothing beyond the calendar itself — the 1-month plan and the 12-month plan both reach the same ${catalog.liveChannels} channels and ${catalog.vods} titles, Ekstraklasa included either way.` },
  { q: 'Can I move to a different plan length mid-subscription?', a: 'Once your current term finishes, sure. If the switch needs to land before a specific Ekstraklasa round, flag it with support ahead of the renewal date.' },
  { q: 'Are these the final prices, or could they shift?', a: 'They\'re accurate as of today. If pricing ever changes, it only applies going forward — anything already paid keeps the rate it was purchased at.' },
  { q: 'Does the dollar I pay for the trial get credited toward a plan?', a: 'No, it\'s a separate charge entirely, there purely so you can check the Polish and international lineup before choosing a term.' },
  { q: 'What happens the moment a plan runs out?', a: 'Access simply stops unless a renewal was arranged beforehand — nothing rolls over or continues automatically.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Poland Pricing — Ekstraklasa Plans From $14.99',
  description: 'IPTV Poland pricing: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99. Ekstraklasa on every plan, plus a $1 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Pricing',
  h1: 'Four lengths. One Polish and international catalog, no matter which.',
  lead: 'The number you pick below only decides how many months you\'re paying for at once — every option unlocks the identical Ekstraklasa and Polish channel lineup the moment the login arrives.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['Pay for the term, nothing beyond it', 'Identical catalog across all four lengths', 'Ekstraklasa included, every single plan', 'Refund conditions posted before you pay'],
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
  ${sectionHead({ eyebrow: 'najlepsze iptv polska', title: 'All four terms, one table', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}
  <p style="margin-top:16px;">The only thing this table changes is your invoice. Ekstraklasa and the rest of the Polish channel lineup show up the same way regardless of which row you pick.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No hidden tiers', title: 'Polish coverage isn\'t something you upgrade into', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Ekstraklasa, on every plan</h3><p>League coverage sits in the base lineup on the 1-month plan exactly as it does on the 12-month one — there's no separate sports package to buy on top.</p></div>
    <div class="card"><h3>The full ${catalog.vods}-title library, day one</h3><p>Nothing about the on-demand catalog gets thinned out on a shorter commitment.</p></div>
    <div class="card"><h3>Every device, regardless of term</h3><p>The full Setup Guide applies whether you signed up for a month or a year.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Doing the actual math', title: 'What paying further ahead saves you', left: true })}
  <p>Paying month to month keeps the price at $14.99 with zero further commitment. Stretch that out to three months and the average slides down to roughly $11.66; six months brings it closer to $9.17; committing for the full year pushes it all the way to about $6.67 monthly — less than half of what paying month to month adds up to. Whichever of the four gets picked, the catalog on the other end of the login doesn't move an inch — Ekstraklasa and every Polish channel included, identical on the shortest term and the longest.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Not ready to commit?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} gets you ${trial.duration} inside the exact same catalog a paying subscriber uses — plenty of time to pull up an Ekstraklasa fixture, a Polish news channel, and the on-demand library before locking in a longer term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What the trial can't tell you</h3><p>It'll confirm the Polish channels you care about are genuinely there. It won't diagnose a home connection that can't sustain a live match — that's worth ruling out on its own.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Once payment clears', title: 'The gap between paying and watching', left: true })}
  <p>Most logins reach your inbox within a few hours of the charge going through. From there it's a matter of picking a player app for whichever device you'll actually watch on — check the Setup Guide for the specific steps on that device.</p>
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
  ${sectionHead({ eyebrow: 'On the billing side', title: 'What you see is what gets charged', left: true })}
  <p>Whatever price sits next to a plan above is what lands on the card, in US dollars — nothing extra tacked on afterward. Terms don't silently roll into a new billing cycle either; without explicitly opting into a recurring option at checkout, a plan simply ends, and renewing is a choice you make each time.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If it doesn\'t work out', title: 'Refund conditions, written down in advance', left: true })}
  <p>Every scenario is spelled out ahead of time on the <a href="/refund-policy/">Refund Policy</a> page — nothing you'd only learn about by asking support after a problem comes up.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Got a term in mind already?', lead: 'Grab it below, or spend a dollar on the trial to be sure first.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
