import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Monthly first, or lock in a longer term right away?', a: 'Monthly makes sense if you want proof the fútbol schedule and novela shelf hold up over a real month of watching before committing further. Once that checks out, 3, 6, or 12 months brings the average cost down meaningfully.' },
  { q: 'What single question exposes a lopsided, one-language provider fastest?', a: '"Can I follow a specific league and flip to a specific English channel on the exact same login?" A provider leaning hard on one language usually has a real hole on the other side, whatever the marketing copy claims.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Subscription for Latino Households',
  description: 'A practical checklist for judging whether an IPTV subscription genuinely covers Spanish-language content and English content together, not just one.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription for Latino Households', description: 'A practical checklist for judging whether an IPTV subscription genuinely covers both languages.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Choosing an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Judging a "best IPTV for Latino families" claim on more than a channel count</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    ${answerBox('<p>A lot of listings aimed at Latino households lean almost entirely on a channel total and a price tag. Whether the catalog treats fútbol, novelas, and the English side of the house as equally important — rather than doing one well and bolting the other on — is much harder to fake, and a far better signal for how the service holds up six months in.</p>')}

    <h2>Get specific about the Spanish-language side</h2>
    <p>Skip "do you carry Spanish channels" and ask which leagues, by name, and whether the novela catalog is a real on-demand shelf or two flagship titles propped up for a screenshot. A provider with real answers has actually built that part out; one that pivots back to the total channel count usually hasn't.</p>

    <h2>Ask the mirror question about English</h2>
    <p>A page ranking for "Spanish IPTV" can just as easily describe a Spanish-only service running a thin, barely-there English catalog underneath. Confirm the English and international side is the full, standard lineup — not a scaled-down bonus tacked on to justify the label.</p>

    <h2>Match the sports schedule against reality</h2>
    <p>A fútbol channel is only worth what its fixture list actually reflects. Load one up and compare what's airing against this week's real schedule for the league in question — a stale fixture list is one of the quickest ways to catch a catalog nobody's maintaining anymore.</p>

    <h2>Watch for content gated by plan length</h2>
    <p>Some providers quietly hold newer novelas, particular leagues, or premium English channels behind a pricier or longer plan while the homepage advertises the full catalog upfront. Check that the cheapest, shortest plan reaches exactly what the longest one does — a mismatch there means the marketing and the actual product have drifted apart.</p>

    <h2>Separate the sticker price from the real value</h2>
    <p>Divide the total by the term length to get an honest monthly figure, then weigh that against what the two checks above turned up. A cheaper plan that's thin on either language isn't the better deal for a household watching both.</p>

    <h2>Insist the trial runs on the real thing</h2>
    <p>Some providers show a "demo" built from a curated, deliberately polished subset, then hand paying customers something noticeably thinner. A trial worth anything runs on the exact bilingual catalog a subscriber gets — confirm that directly if the page doesn't say so plainly.</p>

    <h2>Read the refund terms before you need them</h2>
    <p>A refund policy posted openly, before any money changes hands, tells you a provider is confident enough to stand behind it. One that only surfaces after you file a support ticket is a weaker signal.</p>

    <h2>Once it checks out, choosing a term</h2>
    <p>Start short specifically to confirm both sides of the catalog hold up over real, ordinary use — not just a single trial day. Once that's settled, stepping up to 6 or 12 months is where the real savings kick in.</p>

    <h2>Red flags worth walking away from</h2>
    <ul>
      <li>Can't name specific leagues, novelas, or English channels when asked directly</li>
      <li>A fútbol schedule that visibly doesn't line up with current fixtures</li>
      <li>One language gated behind a pricier plan while the marketing implies otherwise</li>
      <li>A trial that clearly runs a different, curated catalog than paid accounts</li>
      <li>Refund terms that only appear once you ask directly</li>
    </ul>

    <h2>Where this lands on this site</h2>
    <p>The <a href="/pricing/">Pricing page</a> lays out every term's real cost against the same bilingual catalog, the <a href="/trial/">24-hour trial</a> runs on that identical lineup, and the <a href="/refund-policy/">Refund Policy</a> is public before a card ever gets entered.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check both sides of the catalog before deciding', lead: 'Compare plan pricing, or put the current lineup to the test for a dollar.' })}
`,
};
