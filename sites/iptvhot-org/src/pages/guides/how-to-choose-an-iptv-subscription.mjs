import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly, or commit to a longer term right away?', a: 'Start monthly if you want to see whether the catalog actually stays current over real, sustained use. Once a full cycle passes without the lineup going stale, a 3-, 6-, or 12-month term drops the effective monthly rate meaningfully.' },
  { q: 'What one question exposes a weak provider fastest?', a: '"Show me something that was added in the last two weeks." A provider that can\'t answer that directly, or dodges into channel-count marketing instead, usually has a catalog that stopped moving a while ago.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Vet an IPTV Provider\'s Catalog Claims',
  description: 'A practical checklist for judging an IPTV subscription on whether the catalog is genuinely active, not just on channel count and price.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Vet an IPTV Provider\'s Catalog Claims', description: 'A practical checklist for judging whether an IPTV catalog is genuinely active.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Judging a provider on something harder to fake than a channel count</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>Channel count and price are the two numbers every provider leads with — and the two easiest to overstate without consequence. A catalog\'s freshness is harder to fake, easier to verify, and a much better predictor of whether the service will still feel worth it in six months.</p>')}

    <h2>Ask to see something recent, specifically</h2>
    <p>Not "do you have new releases" — ask what was added in the last two weeks. A provider with an actively maintained catalog can point to something concrete. One that can't, or redirects to the total channel count instead, is telling you the catalog was assembled once and left alone.</p>

    <h2>Check whether sports coverage matches the current schedule</h2>
    <p>A sports channel is only as useful as its fixture list is current. Pull up a live sports channel and compare what's actually airing against what should be happening this week — a stale schedule is one of the fastest ways to catch a catalog that isn't really moving.</p>

    <h2>Look for a plan-length gate on newer content</h2>
    <p>Some providers quietly hold newer titles or premium channels behind a longer or pricier plan while advertising the full catalog upfront. Check whether the shortest, cheapest plan reaches the identical lineup as the longest one — if it doesn't, the marketing and the product don't match.</p>

    <h2>Separate price from what you're actually getting</h2>
    <p>Divide total cost by term length to get a real monthly number, then weigh it against what the freshness checks above turned up. A cheaper plan on a catalog that stopped updating months ago isn't actually the better deal.</p>

    <h2>Test with a trial that runs on the real thing</h2>
    <p>Some providers run a "demo" on a curated, deliberately impressive subset, then hand paying customers something different. A trial worth anything activates on the exact same catalog a subscriber gets — worth confirming directly if it isn't stated clearly.</p>

    <h2>Read refund terms while you're still deciding</h2>
    <p>A refund policy published openly before you've paid anything signals a provider confident enough to stand behind it. One that only surfaces after a support request is a weaker signal.</p>

    <h2>Once the basics check out, picking a term</h2>
    <p>Start on the shortest option specifically to watch whether the catalog keeps moving over real use, not just a single trial day. Once a full cycle passes without it going stale, stepping up to 6 or 12 months is where the real savings show up.</p>

    <h2>Signs worth walking away from</h2>
    <ul>
      <li>Can't point to anything specific added recently</li>
      <li>A live sports schedule that clearly doesn't match current fixtures</li>
      <li>Newer content gated behind a pricier plan while marketing claims otherwise</li>
      <li>A trial that visibly runs on a different, curated catalog than paid accounts</li>
      <li>Refund terms nowhere to be found until you ask directly</li>
    </ul>

    <h2>Where this points on this site</h2>
    <p>The <a href="/pricing/">Pricing page</a> lists every term's real cost against the identical catalog, the <a href="/trial/">24-hour trial</a> runs on the same lineup a paying subscriber gets, and the <a href="/refund-policy/">Refund Policy</a> is public before you ever reach for a card.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the catalog yourself before deciding', lead: 'Compare plan pricing, or put the current lineup to the test for a dollar.' })}
`,
};
