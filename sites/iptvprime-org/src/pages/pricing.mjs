import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does paying more per month get a bigger catalog?', a: `Never — the four plans differ only in total price and term length. Every one reaches ${catalog.liveChannels} channels and ${catalog.vods} VOD titles.` },
  { q: 'Can a plan be swapped for a different length partway through?', a: 'Once the current term finishes, yes. Need it sooner — ahead of a renewal date, say? Message support and it gets sorted directly.' },
  { q: 'Could the prices below change after I\'ve already paid?', a: 'A rate you\'ve already locked in stays yours. Any future pricing change only applies to orders placed after that change.' },
  { q: 'Does the trial dollar get subtracted from a plan price later?', a: 'No — it\'s billed on its own. Its whole purpose is letting the catalog and the support line get checked before a longer plan is chosen.' },
  { q: 'What happens the day a plan expires?', a: 'Access ends, full stop, unless a renewal was set up beforehand. Nothing continues charging on its own.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV Prime Pricing — Plans From $14.99',
  description: 'IPTV Prime pricing: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99. The identical catalog on every plan, plus a $1 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Pricing',
  h1: 'Pick a number. The catalog underneath it never changes.',
  lead: 'Four totals, one catalog. The length you choose sets what lands on the invoice — support, devices, channels, and titles stay identical no matter which box gets checked below.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['No cost beyond the listed term', 'One catalog, all four lengths', 'Support included, every plan', 'Refund terms posted up front'],
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
  ${sectionHead({ eyebrow: 'best iptv subscription', title: 'Every length, side by side', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}
  <p style="margin-top:16px;">Read across any row and the invoice is the only thing that changes. What\'s reachable through the login is set by none of it.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'iptv prime channels', title: 'Picking the short plan isn\'t picking the small plan', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>${catalog.liveChannels} channels, every length</h3><p>Nothing gets trimmed for a shorter commitment — the channel count on the 1-month plan matches the 12-month plan exactly.</p></div>
    <div class="card"><h3>${catalog.vods} titles from day one</h3><p>The on-demand library isn\'t staged in behind a longer subscription — it\'s all there immediately.</p></div>
    <div class="card"><h3>Support that doesn\'t check your term length</h3><p>A message from a one-month customer gets the same attention as one from a twelve-month customer.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The trade-off, plainly', title: 'What committing further ahead is actually buying', left: true })}
  <p>Nothing about the catalog improves by paying for a longer stretch up front — what improves is the rate. A month costs $${plans[0].price.toFixed(2)} with zero commitment past it; three months averages down to about $${plans[1].perMonth.toFixed(2)} a month; six brings that to roughly $${plans[2].perMonth.toFixed(2)}; a full year lands near $${plans[3].perMonth.toFixed(2)} a month. That\'s the entire trade being offered — a lower rate in exchange for committing sooner, nothing else.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Undecided?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} runs the same catalog a subscriber gets, for ${trial.duration}. Long enough to send support something real and judge the reply before spending on a full term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>Where the trial stops helping</h3><p>It confirms the catalog and the support line. It can\'t confirm your own connection holds up under a sustained 4K stream — that\'s worth testing separately.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Right after paying', title: 'What the wait actually looks like', left: true })}
  <p>Activation typically lands within a few hours. After that, it\'s picking a player app for your device — the Setup Guide walks through each one by name.</p>
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
  ${sectionHead({ eyebrow: 'On billing', title: 'No surprise line items', left: true })}
  <p>The number attached to a plan above is the number charged — in US dollars, nothing tacked on. And renewal isn\'t automatic by default: a term ends on its own unless a recurring option was deliberately switched on at checkout.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If it isn\'t right for you', title: 'Refund conditions live on their own page', left: true })}
  <p>Every scenario is covered on the <a href="/refund-policy/">Refund Policy</a> — worked out ahead of time rather than negotiated after the fact.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to lock a length in?', lead: 'Pick one below, or spend a dollar confirming it first with the trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
