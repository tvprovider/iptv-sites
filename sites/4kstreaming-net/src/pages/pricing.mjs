import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does the channel count or VOD library shrink on the cheaper plans?', a: `No — every plan carries the identical catalog: ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles. Term length changes the price, not what you can watch.` },
  { q: 'Am I locked into the plan length I pick today?', a: 'Not permanently. Once your current term wraps up, switching to a longer or shorter plan is straightforward — reach out to support if you want a hand timing it.' },
  { q: 'Could the listed prices change on me mid-term?', a: 'The rates shown here are current as of today. Any future adjustment applies only to new orders and renewals — an active paid term is never touched retroactively.' },
  { q: 'Does paying for the trial count toward a subscription afterward?', a: 'No, the two are billed separately. The 24-hour trial is just a cheap way to kick the tires before deciding on a plan.' },
  { q: 'What happens the day my subscription runs out?', a: 'Access simply ends unless you renew — nothing auto-charges or auto-enrolls you into a fresh term without you taking action.' },
];

export default {
  slug: 'pricing',
  title: '4K Streaming IPTV Pricing — Plans & 24-Hour Trial',
  description: '4K Streaming IPTV plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99, or test everything first with a $1.00 24-hour trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'IPTV subscription plans',
  h1: 'Four plan lengths, one honest price on each',
  lead: 'Pick a term, see exactly what it costs, done. No renewal traps buried in fine print, no surprise device-count upsell once you\'re already checking out.',
  primaryCta: { label: 'Subscribe Now', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['Nothing past 12 months', 'Both M3U and Xtream Codes logins', 'Every plan works on every device we list', 'Refund terms posted in full'],
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
  ${sectionHead({ eyebrow: 'Cord-cutting', title: 'Cable\'s fine print vs. what you actually get here', left: true })}
  ${comparisonTable(
    ['', 'Traditional cable/satellite', '4K Streaming IPTV'],
    [
      ['Contract', 'A 12–24 month lock-in is typical', 'Nothing longer than 12 months, ever'],
      ['Getting started', 'Wait for a technician, rent a box', 'Ten minutes on a device you already own'],
      ['Where it plays', 'One fixed set-top box', 'Smart TV, phone, or computer — your call'],
      ['Testing it first', 'Basically never offered', `${trial.label} for just $${trial.price.toFixed(2)}`],
      ["What you're billed", 'Line-item fees stacked on top', 'The single number listed per plan above'],
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
  ${sectionHead({ eyebrow: 'Every plan, no exceptions', title: 'What paying less per month does NOT cost you', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The full catalog, always</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} VOD titles ship with the 1-month plan exactly as they do with the 12-month one.</p></div>
    <div class="card"><h3>4K where it's supported</h3><p>Resolution tops out based on your device and the source, not which term you picked.</p></div>
    <div class="card"><h3>Every device we cover</h3><p>One subscription, usable across whichever supported device you're on that day.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Decision guide', title: "If you're not sure which term to pick", left: true })}
  <div class="grid grid-2">
    <p>First time here? Run the $1 trial before anything else — it settles the compatibility question in a day instead of a month. The 1-month plan is the next step up once you know it works.</p>
    <p>Already sold on sticking around? That's where the 6- and 12-month plans earn their keep — 12 months lands around $6.67 a month, well under the $14.99 monthly rate.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Value over time', title: 'What committing longer actually saves you', left: true })}
  <p>Monthly billing keeps every door open — cancel whenever, pay the highest rate for that freedom. Committing further out changes the math: roughly $11.66/month on the 3-month term, $9.17/month on 6 months, and $6.67/month on the full year. Worth it once you're confident you'll actually keep watching.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test first', title: trial.label, left: true })}
      <p>Skip the guesswork — $${trial.price.toFixed(2)} buys ${trial.duration} to check quality and device compatibility before you spend on a full term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>Why bother with a trial at all</h3><p>One day tells you whether your connection and device actually get along with this before real money is on the line.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After you order', title: 'What happens right after checkout', left: true })}
  <p>An email lands with your activation details shortly after ordering. Load them into a compatible player app on whatever device you're using, and that's the whole process — the Setup Guide covers each device individually if you want the exact steps.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: "How you're actually charged", left: true })}
  <p>Every price above is in US dollars and is the complete charge for that plan — no bolt-on setup fee shows up later. Nothing renews on its own unless a recurring option was specifically chosen at checkout, so the decision to pay again always stays yours.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'Where refunds stand', left: true })}
  <p>Subscribing shouldn't feel like a gamble. The <a href="/refund-policy/">Refund Policy</a> page spells out exactly what applies to both the trial and each subscription length.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Pick a plan and get watching today', lead: "Or ease in with the 24-hour trial if you'd rather test it first.", primaryCta: { label: 'Subscribe Now', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
