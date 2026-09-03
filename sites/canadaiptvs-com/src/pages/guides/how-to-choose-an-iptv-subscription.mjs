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
  title: 'How to Pick an IPTV Provider You Can Trust | Canada IPTV',
  description: 'A practical checklist for evaluating any IPTV subscription before you pay, plus the warning signs that predict a bad experience later.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'A practical checklist for evaluating any IPTV subscription before you pay.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Five checks before you pay for any IPTV service</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Run any IPTV provider through five checks before paying: is the price actually published, is your specific device named as supported, can you test it for real money before committing longer, is the refund policy readable in advance, and do setup instructions exist before purchase. A provider confident in what it sells makes all five easy to find.</p>')}

    <h2>Check 1: pricing you find without asking</h2>
    <p>A price hidden behind "message us for a quote" is a warning sign dressed up as a sales tactic. Compare total cost and effective monthly cost across plan lengths before you decide anything else.</p>

    <h2>Check 2: your device, named specifically</h2>
    <p>A provider should say plainly whether your exact device is supported — Smart TV, Fire TV, Android TV, phone, or computer — rather than a blanket "works on everything" claim that tells you nothing useful.</p>

    <h2>Check 3: a trial you can actually run</h2>
    <p>A short, low-cost trial lets you confirm streaming quality and device compatibility on your own connection before a longer commitment. Be cautious of anything selling only long terms with no way to test first.</p>

    <h2>Check 4: refund terms you read before, not after</h2>
    <p>Read the refund policy before subscribing. A provider willing to publish clear terms upfront is meaningfully more likely to honour them when it matters.</p>

    <h2>Check 5: setup steps that exist pre-purchase</h2>
    <p>Look for real, device-specific setup instructions published publicly. Vague or missing steps before you buy tend to predict what support looks like after you buy.</p>

    <h2>Monthly or longer: a simple way to decide</h2>
    <p>Monthly plans cost more per month but keep you free to walk away anytime. Longer plans (3, 6, or 12 months) meaningfully lower the effective monthly cost in exchange for more upfront commitment. A reasonable path: trial first, run one full month, then move to a longer plan once you know it fits how you actually watch.</p>

    <h2>Signs worth walking away from</h2>
    <ul>
      <li>No trial at any price, at all</li>
      <li>Pricing revealed only after you hand over payment details</li>
      <li>No published refund policy or terms of use</li>
      <li>Setup instructions that do not match the devices actually being sold</li>
      <li>Promises of "zero buffering" or "100% uptime" — no honest provider can guarantee that</li>
    </ul>

    <h2>Where Canada IPTV lands on this checklist</h2>
    <p>The <a href="/pricing/">Pricing page</a> lists the exact cost of every plan, the <a href="/trial/">24-hour trial</a> is a real way to test the service, the <a href="/refund-policy/">Refund Policy</a> is published in full, and the <a href="/setup-guide/">Setup Guide</a> covers every device actually supported.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to compare for yourself?', lead: 'View our transparent pricing or start the 24-hour trial.' })}
`,
};
