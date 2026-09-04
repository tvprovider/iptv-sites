import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly or a longer commitment right out of the gate?', a: 'Monthly buys flexibility while still deciding. Once the servers and login format have proven themselves over a full billing cycle, a 3-, 6-, or 12-month term drops the effective monthly rate meaningfully.' },
  { q: 'What single question exposes a weak provider fastest?', a: '"What happens if a server goes down?" A provider with a real answer — redundancy, monitoring, a fallback — is worth more than one boasting only about channel count.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'Vetting an IPTV Provider Before You Pay',
  description: 'A practical vetting checklist for any IPTV subscription, weighted toward server reliability and login-format transparency over channel-count marketing.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'Vetting an IPTV Provider Before You Pay', description: 'A practical vetting checklist weighted toward server reliability.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Vetting a provider on things that actually predict problems</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Channel count and price are the two numbers every provider leads with, and the two least useful for predicting whether the service will still work smoothly six months in. Infrastructure and support quality matter more — they\'re just harder to market.</p>')}

    <h2>Ask about server architecture directly</h2>
    <p>A provider running everything through one node has nowhere to fall back to when that node has an outage. Ask plainly whether the infrastructure has redundancy built in, or read closely for language that implies it — vague marketing copy about "premium servers" without specifics is often covering for a single-point-of-failure setup.</p>

    <h2>Judge the setup documentation before subscribing</h2>
    <p>Pull up the setup instructions before paying anything. If the login-format section is one throwaway sentence, that's a preview of what support will look like the day something breaks — the same team that wrote the docs is usually the one answering tickets.</p>

    <h2>Separate the price from the value</h2>
    <p>A number on a page is the easy part to compare. Divide total cost by the term length to get a real monthly figure, then weigh that against what the previous two checks turned up — a cheaper plan on unreliable infrastructure is not actually the better deal.</p>

    <h2>Insist on a trial that runs on real infrastructure</h2>
    <p>Some providers offer a "demo" that runs on separate, deliberately reliable servers, then hand paying customers a different, less-maintained pool. A trial worth anything activates on the exact same infrastructure a subscriber gets — ask directly if that's not stated clearly.</p>

    <h2>Read refund terms while you're still a prospect, not a customer</h2>
    <p>A refund policy published openly, before you've handed over payment, signals a provider confident enough to stand behind it. One that only appears after a support request is a much weaker signal.</p>

    <h2>Picking a term once the basics check out</h2>
    <p>Start on the shortest option available specifically to test server behavior over real, sustained use — not just a single trial day. Once a full cycle passes without incident, stepping up to 6 or 12 months is where the actual savings show up.</p>

    <h2>Walk away triggers</h2>
    <ul>
      <li>No willingness to discuss server setup beyond "we have great servers"</li>
      <li>Setup docs that read like an afterthought</li>
      <li>A trial that clearly runs on separate infrastructure from paid accounts</li>
      <li>Refund terms nowhere to be found until you ask</li>
      <li>"100% uptime" or "zero buffering" claimed outright — nobody streaming over the open internet can back that up</li>
    </ul>

    <h2>Where this points on this site</h2>
    <p>The <a href="/setup-guide/">Setup Guide</a> spells out the login process field by field, <a href="/pricing/">Pricing</a> lists every term's real cost, the <a href="/trial/">24-hour trial</a> runs on the same servers as a paid account, and the <a href="/refund-policy/">Refund Policy</a> is public before you ever reach for a card.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to check the infrastructure yourself?', lead: 'Compare plan pricing or put the servers to the test for a dollar.' })}
`,
};
