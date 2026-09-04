import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does a longer plan reach more Spanish-language content, or more English content?', a: `Neither — every plan draws from the same ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, fútbol, novelas, and English channels included. Term length only moves the effective monthly price.` },
  { q: 'Can I move to a different plan length down the road?', a: 'Yes, once the current one runs its course. Reach out to support beforehand if the timing needs coordinating.' },
  { q: 'Could these prices go up without notice?', a: 'What\'s listed here is current. A future price change would apply to new orders and renewals from that point forward — never retroactively to a term already paid for.' },
  { q: 'Does starting the trial count against a later subscription?', a: 'No. The 24-hour trial is its own $1 charge, separate from any plan, meant purely for checking the fútbol schedule and novela lineup beforehand.' },
  { q: 'What actually happens the day a plan expires?', a: 'Access simply stops unless a renewal was set up — there\'s no automatic rollover into a new term.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Latino Pricing — Plans & 24-Hour Trial',
  description: 'IPTV Latino plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 — fútbol, novelas, and English channels on every plan, plus a $1.00 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'Pick a term length — the bilingual catalog doesn\'t change',
  lead: 'Four options, four flat totals. Fútbol coverage, the novela library, and the English side of the lineup stay identical no matter which one gets picked.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['Nothing owed past your chosen term', 'The same bilingual lineup on all four', 'Runs on every device below', 'Refund terms posted in advance'],
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
  ${sectionHead({ eyebrow: 'Side by side', title: 'What separates the four terms', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}
  <p style="margin-top:16px;">Term length is the only variable in that table. Nothing about picking the shortest option trims what's actually reachable once you're logged in.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No plan-length gate', title: 'What every plan reaches, without exception', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Fútbol, every plan</h3><p>Live coverage of major Latin American and Spanish leagues is standard on the shortest plan and the longest one alike.</p></div>
    <div class="card"><h3>Novelas, the full catalog</h3><p>The Spanish-series library isn't trimmed down on a shorter term — the same titles, day one.</p></div>
    <div class="card"><h3>English & international, untouched</h3><p>Nothing about picking a Spanish-language-heavy service reduces the English side of the lineup.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Working out the math', title: 'What the monthly rate actually looks like at each length', left: true })}
  <p>Monthly billing keeps things flexible but sits at the top rate, $14.99. Stretching the term out drops that number steadily: roughly $11.66 a month across a 3-month term, $9.17 across 6 months, and $6.67 across a full year — better than a 55% reduction from the monthly price by the time you reach the 12-month plan.</p>
  <p>None of that math changes what's included. A subscriber on the shortest plan and one on the longest are both drawing from the same fútbol schedule, the same novela shelf, and the same English channels — the only number that moves is the bill.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Not ready to commit?', title: trial.label, left: true })}
      <p>Put down $${trial.price.toFixed(2)} for ${trial.duration} on the same catalog a paying subscriber uses — enough time to pull up a match, start a novela, and check the English lineup before locking in a longer term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What the trial can't tell you</h3><p>Whether your specific league or your household's favorite novela is in the lineup is exactly what it answers — a slow home connection is a separate matter it won't fix.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens once payment clears', left: true })}
  <p>An activation email usually shows up within a few hours of paying. Getting from that email to an actual channel is one more short step — installing a compatible player app and dropping the login into it. Every device gets its own walkthrough on the Setup Guide.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'No surprise line items at checkout', left: true })}
  <p>The number shown for each term is the number charged, in US dollars, full stop. Renewal only happens if a recurring option was actively chosen — otherwise a term simply runs out, and picking up a new one afterward is a decision you make, not something that happens to you.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If it doesn\'t work out', title: 'Where to find the refund terms first', left: true })}
  <p>The <a href="/refund-policy/">Refund Policy</a> page spells out the actual conditions in full. It's meant to be read on the way in, not dug up after a problem has already come up.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to see the fútbol and novela lineup?', lead: 'Pick a plan, or test it first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
