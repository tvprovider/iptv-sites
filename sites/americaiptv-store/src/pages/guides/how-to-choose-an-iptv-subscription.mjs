import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly, or should I just commit to a longer term right away?', a: 'Start monthly if flexibility matters more to you right now. Jump to a 3-, 6-, or 12-month plan once you already know the service fits how you actually watch and want the lower per-month rate.' },
  { q: 'What trips up most first-time IPTV subscribers?', a: 'Paying for a long commitment before confirming their own device and connection actually cooperate. A cheap trial run first sidesteps that mistake entirely.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Subscription',
  description: 'The questions worth asking before subscribing to any IPTV provider, and the warning signs that separate a real service from a bad bet.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'The questions worth asking before subscribing to any IPTV provider.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>The questions worth asking before you hand over payment details</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>A provider worth subscribing to makes five things easy to find before you pay: what it actually costs, whether your exact device is covered, a trial you can genuinely pay for and use, a refund policy in writing, and setup instructions posted before purchase, not after. Anywhere one of those is missing or vague is worth a second look.</p>')}

    <h2>Start with whether the price is even visible</h2>
    <p>"Message us for pricing" instead of a number on the page is a pattern worth being suspicious of, not a normal sales technique. Line up total cost against effective monthly cost across every plan length before deciding anything.</p>

    <h2>Ask whether your device is named, not implied</h2>
    <p>Look for your specific hardware called out by name — Smart TV, Fire TV, Android TV, phone, computer — rather than a vague "compatible with everything" claim that tells you nothing useful.</p>

    <h2>Find out if the trial is a real trial</h2>
    <p>A short, cheap trial that runs on the actual service lets you confirm streaming quality and device compatibility before any longer commitment. Treat "no trial, long-term only" offers with real caution.</p>

    <h2>Read the refund terms before you need them, not after</h2>
    <p>Refund terms posted clearly and in advance are a decent signal the provider intends to actually honor them. Terms that only surface after a problem already exists are a much weaker signal.</p>

    <h2>Check for setup instructions before you've paid for anything</h2>
    <p>Device-specific setup steps that are publicly readable before purchase tend to predict what support looks like after purchase. Vague or missing instructions rarely improve once you're already a paying customer.</p>

    <h2>Deciding between monthly and a longer term</h2>
    <p>Monthly costs more per month in exchange for the freedom to stop anytime. A 3-, 6-, or 12-month plan trades that flexibility for a meaningfully lower monthly rate. A reasonable sequence: trial first, run a full month, then step up to a longer term once you're confident it actually fits your routine.</p>

    <h2>Red flags that should end the conversation</h2>
    <ul>
      <li>No trial offered at any price</li>
      <li>Pricing that only appears after you've handed over payment information</li>
      <li>No refund policy or terms of use published anywhere</li>
      <li>Setup instructions that don't match what's actually being sold</li>
      <li>Any claim of "zero buffering" or "100% uptime" — no honest provider promises that</li>
    </ul>

    <h2>Where America IPTV lands against this list</h2>
    <p>Full costs are on the <a href="/pricing/">Pricing page</a>, the <a href="/trial/">24-hour trial</a> is a genuinely usable test, the <a href="/refund-policy/">Refund Policy</a> is published in full, and the <a href="/setup-guide/">Setup Guide</a> covers every device actually sold.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See how we measure up', lead: 'Check the transparent pricing or start the 24-hour trial yourself.' })}
`,
};
