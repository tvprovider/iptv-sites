import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'What do I actually get for the price?', a: `Every one of the four plans unlocks the same catalog — ${catalog.liveChannels} live channels and ${catalog.vods} on-demand titles. Term length changes the price tag, never what's included.` },
  { q: 'Am I locked into the length I pick?', a: 'No. Switching to a longer or shorter term is fine once your current one runs out — reach out to support and they will help time the change.' },
  { q: 'Could the price go up after I sign up?', a: 'Whatever price you are quoted at checkout is locked for that paid term. A future rate change only touches new orders and renewals from that point forward.' },
  { q: 'Does paying $1 for the trial count toward a plan?', a: 'It is billed on its own, separate from any subscription — the trial exists purely to test things out cheaply, not as a down payment.' },
  { q: 'What happens the day my subscription runs out?', a: 'Access simply stops unless you renew it yourself. There is no automatic re-enrollment charging your card without you choosing it.' },
];

export default {
  slug: 'pricing',
  title: 'America IPTV Pricing — Plans & 24-Hour Trial',
  description: 'America IPTV plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 USD. Try it first with a $1.00, 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Plans',
  h1: 'Four plans, one number each — that is the whole pricing page',
  lead: 'American live TV and on-demand, priced with a single flat number per term. No regional blackout upsell, no rented receiver, nothing tacked on after checkout.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No yearly lock-in', 'M3U or Xtream Codes, your choice', 'Runs on whatever device you already own', 'Refund policy spelled out upfront'],
})}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Subscription plans', title: 'Choose your plan' })}
  ${pricingGrid(plans)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'Why the per-month price drops as the term grows', left: true })}
  <p>The 1-month plan is priced for people who just want in the door with zero commitment. Stretch that same subscription across a longer term and the effective monthly cost drops fast — roughly $11.66 at 3 months, $9.17 at 6 months, and down to $6.67 at 12 months, better than half off the monthly rate.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Side by side', title: 'Every plan length, one table', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Cord-cutting math', title: 'Stacked against a typical cable bill', left: true })}
  ${comparisonTable(
    ['', 'Cable or satellite', 'America IPTV'],
    [
      ['Contract length', 'Usually locked in for a year or two', 'Nothing beyond the term you pick'],
      ['Getting started', 'A scheduled technician visit', 'Done yourself, same day, on a device you already own'],
      ['Hardware', 'A rented set-top box per TV', 'One login across Smart TV, phone, and computer'],
      ['Testing before you commit', 'Not typically offered', `${trial.label} for $${trial.price.toFixed(2)}`],
      ['Reading the bill', 'Line items for equipment and fees', 'One number, shown right here'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'No tiers, no upsells', title: "What every plan carries, regardless of length", left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The full ${catalog.liveChannels}-channel lineup</h3><p>American networks, news, sports, and everything else — present from the 1-month plan onward, not gated behind a longer term.</p></div>
    <div class="card"><h3>${catalog.vods} on-demand titles</h3><p>The same on-demand catalog whether you're paying monthly or for a full year.</p></div>
    <div class="card"><h3>4K where the source allows it</h3><p>Resolution depends on the content and your connection — never on which plan you picked.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Not ready to commit?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} for ${trial.duration} on the actual live service — the same one every paying subscriber uses.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>What a single dollar answers</h3><p>Whether your specific TV, box, or phone gets along with your home connection — the one variable no amount of research settles in advance.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Which length to pick', title: 'A quick way to decide', left: true })}
  <div class="grid grid-2">
    <p>First time signing up for anything like this? The trial is built for exactly that — a day tells you more than any comparison chart can.</p>
    <p>Already know it works for you? Longer terms are where the discount actually shows up — 12 months prices out at under $7 a month, a meaningful gap from paying monthly.</p>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What happens after checkout', title: 'Paying is not the last step — watching is', left: true })}
  <p>An email with your activation details typically shows up within a few hours of ordering. Load it into a compatible player app on whichever device you're using and the channel list appears — no scheduled install, no separate setup charge. The Setup Guide has exact steps per device.</p>
  <p><a class="btn btn-ghost" href="/setup-guide/">View the Setup Guide →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Billing, plainly', title: 'The number on the page is the number you pay', left: true })}
  <p>All prices are in US dollars and represent the full charge — nothing gets added after the fact. Auto-renewal only happens if you specifically opt into it at checkout, meaning a plan lapsing is the default, not something you have to remember to prevent.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you subscribe', title: 'Know the refund terms up front', left: true })}
  <p>The exact conditions covering both the trial and full subscriptions are laid out on the <a href="/refund-policy/">Refund Policy</a> page — a short read that's better done before paying than after.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Pick a plan and start watching today', lead: 'Or test the waters first with the 24-hour, $1 trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
