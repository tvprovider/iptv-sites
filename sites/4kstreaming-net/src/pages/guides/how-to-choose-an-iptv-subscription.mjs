import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly billing or a longer plan — which makes more sense?', a: "Monthly if flexibility matters more to you than price. A 3-, 6-, or 12-month term if you're already sure you'll keep watching and want the lower effective monthly rate." },
  { q: "What's the single most common mistake people make here?", a: 'Locking into a long-term plan before confirming their device and connection actually handle it well. A cheap trial run first sidesteps that entirely.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Subscription',
  description: 'What to actually check before subscribing to any IPTV service, plus the honest trade-off between monthly and long-term plans.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'What to check before subscribing to any IPTV service.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What actually separates a good IPTV provider from a shaky one</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Five things separate a trustworthy IPTV provider from a risky one: <strong>prices posted openly, explicit device support, an actual trial, refund terms you can read in advance, and real setup documentation.</strong> Missing more than one of these is worth pausing over.</p>')}

    <h2>1. Prices you can see without talking to anyone</h2>
    <p>A provider hiding behind "contact us for pricing" is a provider that wants to negotiate case by case. Look for exact numbers, then compare the effective monthly cost across plan lengths yourself.</p>

    <h2>2. Your actual device, named specifically</h2>
    <p>"Works on everything" is not a device list. A provider worth trusting will say, in plain terms, whether it supports your Smart TV, your streaming box, or whatever you're actually planning to watch on.</p>

    <h2>3. A trial that costs something small, not nothing</h2>
    <p>A short trial for a dollar or two lets you confirm quality and compatibility before a real commitment. Be wary of any provider that only sells multi-month plans with zero way to test first.</p>

    <h2>4. Refund terms you read before subscribing, not after</h2>
    <p>Pull up the refund policy before you pay, not after something's already gone wrong. Providers confident in their service tend to publish these terms plainly rather than burying them.</p>

    <h2>5. Setup instructions that actually exist publicly</h2>
    <p>Real, device-specific setup steps posted before you ever pay are a good sign. Vague or missing instructions often mean support gets thin once you're already a paying customer.</p>

    <h2>The monthly-vs-longer math, honestly</h2>
    <p>Monthly costs more per month but keeps every option open. Locking into 3, 6, or 12 months brings the effective rate down noticeably in exchange for commitment. A reasonable path: trial first, ride out one monthly cycle to be sure, then switch to a longer term once you're confident.</p>

    <h2>Warning signs worth taking seriously</h2>
    <ul>
      <li>No trial offered at any price point</li>
      <li>Pricing revealed only after you've handed over payment details</li>
      <li>No visible refund policy or terms of use anywhere on the site</li>
      <li>Setup steps that don't match the devices actually being advertised</li>
      <li>Promises of "zero buffering" or "100% uptime" — no honest provider claims either</li>
    </ul>

    <h2>Where this provider lands on that checklist</h2>
    <p>The <a href="/pricing/">Pricing page</a> lists every plan's exact cost, the <a href="/trial/">24-hour trial</a> is a genuine way to test first, the <a href="/refund-policy/">Refund Policy</a> is published in full, and the <a href="/setup-guide/">Setup Guide</a> covers every supported device in detail.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See how this measures up yourself', lead: 'Check the transparent pricing, or start the 24-hour trial.' })}
`,
};
