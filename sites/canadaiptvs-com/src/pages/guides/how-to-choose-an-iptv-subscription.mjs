import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly, or should I lock in a longer term right away?', a: 'Monthly if flexibility matters most to you. Once you already know the service fits how you actually watch, 3, 6, or 12 months brings the effective monthly cost down noticeably.' },
  { q: 'What trips people up most often?', a: 'Committing to a long-term plan before confirming their device and connection actually work well with it. A short trial run first sidesteps that entirely.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Vet an IPTV Provider Properly',
  description: 'A short checklist for sizing up any IPTV subscription before paying, and the warning signs that tend to predict a bad experience afterward.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'A checklist for sizing up any IPTV subscription before paying.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What to check before handing over a card number</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Before paying anyone for IPTV, look for five things: a price you can find without messaging a salesperson, your exact device listed by name as supported, a real way to test it before a longer commitment, a refund policy you can read in advance, and setup instructions that already exist publicly. A provider that makes all five easy to find usually has nothing to hide about the other four.</p>')}

    <h2>Look for a price you don't have to ask for</h2>
    <p>"Message us for pricing" is rarely a sales tactic and more often a sign the number changes depending on who is asking. Line up total cost and effective monthly cost across every term length before anything else.</p>

    <h2>Confirm your exact device, not a vague list</h2>
    <p>A provider worth trusting names your specific hardware — Smart TV, Fire TV, Android TV, phone, computer — rather than hiding behind a catch-all "compatible with everything" claim that commits to nothing.</p>

    <h2>Make sure a real trial exists</h2>
    <p>A short, cheap trial period is how you confirm streaming quality and device compatibility on your own connection before spending on anything longer. Treat "long-term plans only, no trial" as a genuine red flag.</p>

    <h2>Read the refund terms before you need them</h2>
    <p>Pull up the refund policy before subscribing, not after something goes wrong. Providers willing to publish clear terms in advance tend to actually stand behind them later.</p>

    <h2>Verify setup instructions exist before you buy</h2>
    <p>Real, device-specific setup steps should already be public. Vague or missing instructions pre-purchase are a decent predictor of what support looks like once you're a paying customer.</p>

    <h2>Deciding between monthly and a longer term</h2>
    <p>Monthly costs more per billing cycle but keeps every option open. A 3-, 6-, or 12-month plan trades some of that flexibility for a meaningfully lower monthly rate. A sensible order: trial first, run a full month, then step up to a longer term once you're sure it fits how you actually watch.</p>

    <h2>Red flags worth taking seriously</h2>
    <ul>
      <li>No trial offered at any price</li>
      <li>Pricing only revealed after payment details are already on the table</li>
      <li>No published refund policy or terms of use anywhere</li>
      <li>Setup guides that don't match the devices actually being sold</li>
      <li>Guarantees of "zero buffering" or "100% uptime" — no honest provider promises that</li>
    </ul>

    <h2>Where this checklist points on Canada IPTV</h2>
    <p>The <a href="/pricing/">Pricing page</a> lists every plan's exact cost, the <a href="/trial/">24-hour trial</a> is a genuine way to test it, the <a href="/refund-policy/">Refund Policy</a> is fully published, and the <a href="/setup-guide/">Setup Guide</a> covers each supported device by name.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Put this checklist to use right now', lead: 'Check our published pricing, or start the 24-hour trial and judge it yourself.' })}
`,
};
