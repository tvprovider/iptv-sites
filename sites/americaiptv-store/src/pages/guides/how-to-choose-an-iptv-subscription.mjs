import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Should I choose a monthly or long-term plan?', a: 'Choose monthly if you want maximum flexibility, or a longer plan (3, 6, or 12 months) if you already know you will use the service consistently and want a lower effective monthly cost.' },
  { q: 'What is the biggest mistake people make when choosing IPTV?', a: 'Subscribing to a long-term plan before testing device and connection compatibility. A short trial period first avoids this.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Subscription (Without Getting Burned) | America IPTV',
  description: 'What to actually check before subscribing to any IPTV service, plus the warning signs of a provider that will not deliver.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'What to check before subscribing to any IPTV service.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What separates a real IPTV provider from a bad bet</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Before handing over payment details to any IPTV service, check five things: published pricing, explicit device compatibility, a real trial you can actually pay for and use, a written refund policy, and setup instructions you can read before you buy. Providers confident in what they sell make all five easy to find.</p>')}

    <h2>1. Pricing you can see without asking</h2>
    <p>If the price is not listed and instead hidden behind "message us for a quote," treat that as a warning sign, not a sales tactic. Compare total cost and effective monthly cost across plan lengths before deciding anything.</p>

    <h2>2. Your actual device, named explicitly</h2>
    <p>A provider should say plainly whether your specific device is supported — Smart TV, Fire TV, Android TV, phone, or computer — instead of a blanket "works on everything" claim that tells you nothing.</p>

    <h2>3. A trial you can actually use</h2>
    <p>A short, low-cost trial lets you confirm streaming quality and device compatibility on your own connection before committing to a longer term. Be wary of any service that only sells long commitments with no way to test first.</p>

    <h2>4. A refund policy you can read now, not after a problem</h2>
    <p>Read the refund terms before you subscribe. A provider willing to publish clear terms upfront is far more likely to actually honor them later.</p>

    <h2>5. Setup instructions that exist before you pay</h2>
    <p>Check whether real, device-specific setup steps are publicly available. Vague or missing instructions before purchase is a decent predictor of what support looks like after purchase.</p>

    <h2>Monthly or long-term: how to decide</h2>
    <p>Monthly plans cost more per month but keep you free to stop anytime. Longer plans (3, 6, or 12 months) lower the effective monthly cost meaningfully in exchange for more upfront commitment. A practical path: trial first, run one full month, then move to a longer plan once you are confident it fits how you actually watch.</p>

    <h2>Warning signs worth walking away from</h2>
    <ul>
      <li>No trial at any price, at all</li>
      <li>Pricing revealed only after you provide payment information</li>
      <li>No published refund policy or terms of use</li>
      <li>Setup instructions that do not match the devices actually being sold</li>
      <li>Promises of "zero buffering" or "100% uptime" — no honest streaming provider can guarantee that</li>
    </ul>

    <h2>How America IPTV holds up against this list</h2>
    <p>The <a href="/pricing/">Pricing page</a> lists exact costs for every plan, the <a href="/trial/">24-hour trial</a> is a real way to test the service, the <a href="/refund-policy/">Refund Policy</a> is published in full, and the <a href="/setup-guide/">Setup Guide</a> covers every device actually supported.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to compare for yourself?', lead: 'View our transparent pricing or start the 24-hour trial.' })}
`,
};
