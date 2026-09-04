import {
  hero, section, sectionHead, pricingGrid, comparisonTable, faqAccordion,
  ctaBanner, breadcrumbs, breadcrumbSchema, faqSchema, deviceGrid, productOfferSchema, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, catalog } from '../data/business.mjs';

const pricingFaqs = [
  { q: 'Does paying for a longer term unlock a bigger list?', a: `It does not — all four plans pull from the same ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles. The only thing a longer term changes is the total on the invoice.` },
  { q: 'Can a plan length be swapped for a different one partway through?', a: 'Once the active term wraps up, yes. Message support ahead of time if the switch needs to line up with a specific date.' },
  { q: 'Might these prices change later on?', a: `The figures on this page are current as of today. Any future adjustment would apply to orders and renewals placed after that point — a term already paid for keeps its original price.` },
  { q: 'Does paying the trial fee count as a down payment on a plan?', a: 'It does not. The 24-hour trial is its own separate $1 charge, meant only for confirming the list before deciding on a term.' },
  { q: 'What happens the moment a plan expires?', a: 'Access ends right there unless a renewal was already arranged — nothing carries over into a new term automatically.' },
];

export default {
  slug: 'pricing',
  title: 'IPTV List Pricing — Four Plans, One Price Each',
  description: 'IPTV List pricing, itemized: 1 Month $14.99, 3 Months $34.99, 6 Months $54.99, 12 Months $79.99 — one channel list on every plan, plus a $1.00 trial.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing' }]), faqSchema(pricingFaqs), ...productOfferSchema(plans)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing' }])}
${hero({
  eyebrow: 'Pricing',
  h1: 'Four terms, four flat numbers — nothing to request a quote for',
  lead: 'Every plan length below reaches the same itemized channel and VOD list. Term length changes what you pay, not what shows up once you log in.',
  primaryCta: { label: 'Choose a Plan', href: '#plans' },
  secondaryCta: { label: 'Try it for $1 first', href: '/trial/' },
  media: iconMedia('<text x="270" y="288" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="50" font-weight="600">$</text>', 'Transparent pricing illustration'),
  dark: true,
  trustItems: ['Nothing owed past your chosen term', 'Same list on all four plans', 'Runs on every device listed below', 'Refund terms posted in advance'],
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
  ${sectionHead({ eyebrow: 'iptv comparison list', title: 'The four terms, side by side', left: true })}
  ${comparisonTable(
    ['Plan', 'Total price', 'Effective monthly cost', 'Best for'],
    plans.map((p) => [p.label, `$${p.price.toFixed(2)}`, p.perMonth ? `$${p.perMonth.toFixed(2)}/mo` : `$${p.price.toFixed(2)}/mo`, p.blurb])
  )}
  <p style="margin-top:16px;">Term length is the only column that changes what you get charged. It has no effect on what's reachable once the login lands.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What every row above actually includes', title: 'Nothing is gated behind a specific term', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>${catalog.liveChannels} live channels, every plan</h3><p>The full itemized list is standard on the shortest plan and the longest one alike — nothing extra unlocks with a longer commitment.</p></div>
    <div class="card"><h3>${catalog.vods} VOD titles, no exceptions</h3><p>The on-demand library isn't trimmed on a shorter term. Same shelf, day one, whichever plan gets picked.</p></div>
    <div class="card"><h3>Every listed device, on any plan</h3><p>Device compatibility doesn't scale with price — the full Setup Guide applies no matter which term you choose.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The actual arithmetic', title: 'How much each extra month of commitment is worth', left: true })}
  <p>Paying monthly tops out at $14.99, the price of flexibility. Committing further pulls that average down in steps — about $11.66 for each of the three months in that plan, $9.17 across the six-month term, and $6.67 across all twelve months, over half off the monthly rate by that point.</p>
  <p>The catalog itself does not care which box you tick. Someone on a single month and someone on a full year pull from the identical channel and VOD list — the arithmetic above only ever touches the invoice.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Undecided?', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} buys ${trial.duration} on the same catalog a full subscriber gets — time enough to look for the exact channels and titles on your own list before picking a longer term.</p>
      <a class="btn btn-primary" href="/trial/">Start the trial</a>
    </div>
    <div class="card"><h3>Where a trial helps, and where it can't</h3><p>It settles whether your specific channels and titles are actually here. A home connection that struggles is a separate issue no trial fixes on its own.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The stretch between paying and watching', title: 'What follows a completed order', left: true })}
  <p>Expect an email with login details within a handful of hours of the charge going through. From there, one step remains: put a compatible player app on the device you want and enter that login. The Setup Guide has a dedicated walkthrough for every device on the list.</p>
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
  ${sectionHead({ eyebrow: 'Payments', title: 'What you see is the actual charge', left: true })}
  <p>Whatever figure sits next to a plan above is precisely what lands on the card, in US dollars. Nothing repeats automatically unless a recurring option was deliberately turned on at checkout — left alone, a term simply concludes, and picking up a fresh one afterward is entirely your call.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If things go sideways', title: 'The refund terms, available now rather than later', left: true })}
  <p>Every real condition sits on the <a href="/refund-policy/">Refund Policy</a> page, written out in advance rather than assembled after a complaint comes in.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Pricing FAQ', left: true })}
  ${faqAccordion(pricingFaqs)}`,
})}

${ctaBanner({ title: 'Ready to check the list against your own?', lead: 'Pick a plan, or confirm it first with the 24-hour trial.', primaryCta: { label: 'Choose a Plan', href: '#plans' }, secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' } })}
`,
};
