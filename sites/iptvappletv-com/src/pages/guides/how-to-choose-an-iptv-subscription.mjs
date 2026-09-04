import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Should I choose a monthly or long-term plan?', a: 'Choose monthly if you want maximum flexibility, or a longer plan (3, 6, or 12 months) if you already know Apple TV handles the service well and you want a lower effective monthly cost.' },
  { q: 'What is the biggest mistake people make choosing an IPTV provider for Apple TV?', a: 'Committing to a long plan before confirming a compatible player app is actually reachable — either through the App Store right now or through sideloading. A short trial run first avoids this entirely.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Provider for Apple TV',
  description: 'A practical checklist for evaluating any IPTV subscription before you pay, with the Apple TV-specific checks most guides skip entirely.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Provider for Apple TV', description: 'A practical checklist for evaluating any IPTV subscription for Apple TV.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>The checks that actually matter for Apple TV users</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Most "how to choose an IPTV provider" advice is written for Fire TV and Android boxes, then applied to Apple TV as an afterthought. On Apple TV specifically, add two checks to the usual list: does the provider explain App Store availability honestly, and do they actually cover sideloading, not just gesture at it.</p>')}

    <h2>Check 1: do they admit App Store apps come and go</h2>
    <p>Any provider claiming a specific IPTV app is "always available" on the App Store is either not paying attention or not being straight with you — Apple periodically removes generic player apps during review sweeps. Honest providers explain this pattern instead of pretending it does not happen.</p>

    <h2>Check 2: is sideloading actually explained, or just mentioned</h2>
    <p>A lot of setup guides say "you can also sideload" in one sentence and move on. Actually useful guides walk through what that requires — a Mac, Xcode, a free Apple ID, and the fact that a free-tier install needs reinstalling roughly weekly.</p>

    <h2>Check 3: pricing you find without asking</h2>
    <p>A price hidden behind "message us for a quote" is a warning sign dressed up as a sales tactic. Compare total cost and effective monthly cost across plan lengths before deciding anything else.</p>

    <h2>Check 4: a trial you can actually run on your Apple TV</h2>
    <p>A short, low-cost trial lets you confirm a compatible app actually runs well on your specific Apple TV generation before a longer commitment. Be wary of anything selling only long terms with no way to test first.</p>

    <h2>Check 5: refund terms you read before, not after</h2>
    <p>Read the refund policy before subscribing. A provider willing to publish clear terms upfront is meaningfully more likely to honour them when it matters.</p>

    <h2>Monthly or longer, once App Store access is confirmed</h2>
    <p>Monthly plans cost more per month but keep you free to walk away anytime. Longer plans (3, 6, or 12 months) meaningfully lower the effective monthly cost. A reasonable path on Apple TV specifically: trial first to confirm installation works, run one full month, then commit longer once it is clearly working.</p>

    <h2>Signs worth walking away from</h2>
    <ul>
      <li>No mention of Apple TV setup at all, or a single vague sentence about it</li>
      <li>No trial at any price</li>
      <li>Pricing revealed only after payment details are handed over</li>
      <li>No published refund policy or terms of use</li>
      <li>Promises of "zero buffering" or "100% uptime" — no honest provider can guarantee that</li>
    </ul>

    <h2>Where this checklist points back to us</h2>
    <p>The <a href="/setup-guide/">Setup Guide</a> covers both the App Store method and sideloading in full, the <a href="/pricing/">Pricing page</a> lists every plan cost, the <a href="/trial/">24-hour trial</a> is a real way to test it, and the <a href="/refund-policy/">Refund Policy</a> is published in full.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to compare for yourself?', lead: 'View our transparent pricing or start the 24-hour trial.' })}
`,
};
