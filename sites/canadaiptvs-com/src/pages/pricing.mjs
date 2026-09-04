import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Is the channel lineup smaller on the shorter plans?', a: `Not even slightly — ${catalog.liveChannels} live channels and ${catalog.vods} on-demand titles come standard on every plan length. Term length only changes what you pay, never what you can watch.` },
  { q: 'What if I want a different plan length partway through?', a: 'That is fine once your current term finishes. Get in touch beforehand and we will line up the switch for whenever your renewal date lands.' },
  { q: 'Will my price jump mid-subscription?', a: 'The figures on this page hold for the length of your current term. A future rate change only touches new signups and renewals, never a term you already paid for.' },
  { q: 'Does the dollar trial roll into a real subscription?', a: 'No — they are billed independently. The trial exists purely so you can check the service works for you before spending on a full term.' },
  { q: 'What happens on the day my term expires?', a: 'Access simply stops unless you renew it yourself. There is no automatic re-billing waiting to catch you off guard.' },
];

export default {
  slug: 'pricing',
  title: 'Canada IPTV Pricing — Plans & 24-Hour Trial',
  description: 'Canada IPTV plans: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 USD. Start with a $1.00 24-hour trial before committing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'What it costs',
  h1: 'One number per plan, nothing hidden underneath it',
  lead: 'Four term lengths, each with a flat US-dollar price and the same full lineup behind every one of them — built to replace a cable or satellite bill without a single surprise line item.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No 12-month lock-in', 'M3U playlists and Xtream Codes both work', 'Compatible across every device we cover', 'Refund terms published, not buried'],
})}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Subscription plans', title: 'Pick a length' })}
  ${pricingGrid(plans)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Versus a cable bill', title: 'What a Bell, Rogers, or Telus package usually adds on', left: true })}
  ${comparisonTable(
    ['', 'Traditional Canadian cable/satellite', 'Canada IPTV'],
    [
      ['Contract length', 'Frequently locked in for 1-2 years', 'Nothing beyond 12 months, and no auto-renew trap'],
      ['Getting connected', 'A booked technician visit, rented receiver', 'Self-install in minutes, on hardware you already own'],
      ['Where it plays', 'Wherever the rented box happens to be', 'Smart TV, phone, tablet, or computer — your pick'],
      ['Trying before buying', 'Almost never an option', `${trial.label} for just $${trial.price.toFixed(2)}`],
      ['The bill itself', 'Regional fees and equipment rental stacked on', 'The single number shown per plan, full stop'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Side by side', title: 'All four terms at a glance', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'True across every plan', title: 'What a shorter term does not take away from you', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The catalog stays whole</h3><p>${catalog.liveChannels} live channels and ${catalog.vods} on-demand titles — identical whether you picked 1 month or 12.</p></div>
    <div class="card"><h3>4K when the pieces line up</h3><p>Resolution depends on your device and the source material, never on which term you're paying for.</p></div>
    <div class="card"><h3>One login, every device</h3><p>Switch between the living room TV and a laptop without a second account.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Not sure which term', title: 'A simple way to decide', left: true })}
  <div class="grid grid-2">
    <p>First time trying this? The $1 trial answers the compatibility question in a day, before you've committed anything larger. The 1-month plan is the natural next step from there.</p>
    <p>Already know you're sticking around for hockey season and beyond? That's exactly where the 6- and 12-month terms pay off — 12 months works out near $6.67 a month, well under the $14.99 monthly rate.</p>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The math on longer terms', title: 'What locking in actually saves', left: true })}
  <p>Paying monthly keeps things flexible at the highest per-month rate. Stretch the commitment out and the number drops fast: about $11.66/month across 3 months, $9.17/month across 6, and $6.67/month across a full year — worth it once you're confident this is staying on past the first few weeks.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Test drive it', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} gets you the actual service for ${trial.duration}, not a limited preview version of it.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>The one thing a trial settles</h3><p>Whether your specific connection and device get along with this — something no amount of reading up front can tell you.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Right after paying', title: 'What lands in your inbox', left: true })}
  <p>Activation details arrive by email, typically inside a few hours. Enter them into a compatible player app and that's the entire process — no scheduled technician, no separate install charge. The Setup Guide walks through each device individually if you want exact steps.</p>
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
  ${sectionHead({ eyebrow: 'On billing', title: 'How the charge actually works', left: true })}
  <p>Every figure above is in US dollars and represents the full charge for that term — nothing extra tacked on afterward. Renewal only happens if you specifically select a recurring option at checkout, so ending a plan is always a decision you make, not something that sneaks past you.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If it does not work out', title: 'Refund terms, up front', left: true })}
  <p>Read the full conditions on the <a href="/refund-policy/">Refund Policy</a> page before subscribing — better to know where you stand before paying than after.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready for Canadian TV without the cable contract?', lead: 'Choose a plan below, or test it first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
