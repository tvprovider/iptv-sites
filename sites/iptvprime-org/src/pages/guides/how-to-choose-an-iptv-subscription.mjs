import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, stepsList, iconMedia,
} from '../../lib/render.mjs';
import { catalog, trial } from '../../data/business.mjs';

const faqs = [
  { q: 'Is there one single red flag that matters more than the others?', a: 'Not being able to see the price without submitting a form first. It\'s a small thing on its own, but it\'s usually the first sign that other details — the real catalog, the actual support process — are also being kept vague on purpose.' },
  { q: 'Can this checklist actually be run in one sitting?', a: 'Yes — every item on it is checkable inside a single low-cost trial: send a real support question, compare the catalog against the price you were quoted, and watch how the stream behaves under normal use. None of it requires taking a longer subscription first.' },
  { q: 'Does a lower price automatically mean a lower-quality provider?', a: 'No — price alone doesn\'t tell you anything on this list. A well-run service can be inexpensive, and an expensive one can still fail every item here. The four things below are about behavior, not the number on the invoice.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Choose an IPTV Subscription',
  description: 'A practical, checkable buyer\'s checklist for telling a well-run IPTV service from a poorly-run one — support, catalog consistency, and pricing.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'How to Choose an IPTV Subscription' }]),
    articleSchema({ headline: 'How to Choose an IPTV Subscription', description: 'A practical buyer\'s checklist for telling a well-run IPTV service from a poorly-run one.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'How to Choose an IPTV Subscription' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Four checkable things that actually separate a well-run IPTV service from a poorly-run one</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Choosing an IPTV subscription illustration')}</div>
    <p>Searching "best iptv subscription" or "top rated iptv service" turns up dozens of listings that all use the same handful of words — premium, top rated, best in class — attached to almost nothing you can verify before paying. That\'s not a reason to distrust IPTV as a category; it\'s a reason to stop reading the adjectives and start checking the four things underneath them, all of which can be tested in a single low-cost trial before committing to a longer plan.</p>

    <h2>1. Whether support is a person or a wall</h2>
    <p>The fastest way to tell these apart is also the simplest: send a specific, real question before you\'ve paid for anything beyond a trial, and see what comes back. A well-run operation reads the actual message and replies to what you asked. A poorly-run one sends a templated response that could answer almost any question, or nothing at all for days.</p>
    ${answerBox('<p><strong>How to test it:</strong> during a trial period, message support with something concrete — a specific device, a specific symptom, a specific question about the catalog. Time how long a substantive reply takes, and check whether it actually addresses what you asked or just acknowledges receipt.</p>')}

    <h2>2. Whether the cheapest plan is a smaller product</h2>
    <p>A common way providers quietly cut costs is by trimming the catalog on shorter or cheaper plans without saying so directly — a "starter" tier that turns out to mean fewer channels, a lower resolution cap, or a VOD library missing recent titles. None of that is illegal or even unusual, but it does mean the price comparison you thought you were making wasn\'t really apples to apples.</p>
    ${comparisonTable(
      ['What to check', 'Well-run signal', 'Poorly-run signal'],
      [
        ['Catalog across plan lengths', 'Explicitly stated to be identical on every plan', 'Vague, or only described for the plan being upsold'],
        ['Resolution cap', 'Same "up to 4K" ceiling regardless of term length', 'Higher resolution reserved for pricier plans'],
        ['Trial catalog', 'Runs the actual full catalog', 'A limited sampler that proves little'],
      ]
    )}
    <p>This site\'s own answer to that question: every plan on <a href="/pricing/">Pricing</a> — the 1-month plan included — reaches the identical ${catalog.liveChannels}-channel, ${catalog.vods}-title catalog. That\'s stated directly rather than left to be assumed, and it\'s exactly the kind of claim the checklist above says to verify rather than trust.</p>

    <h2>3. Whether the price you see is the price you pay</h2>
    <p>A price hidden behind a signup form, or one that changes after checkout with an added fee, is one of the more reliable signs of a provider cutting corners somewhere else too. Pricing that\'s posted openly, with plan lengths and totals spelled out before any personal information is requested, tends to correlate with an operation that isn\'t relying on friction or surprise to make the numbers work.</p>
    ${stepsList([
      { title: 'Look for the price before the form', text: 'If a number only appears after an email address is submitted, that\'s worth noting as a flag, not necessarily a dealbreaker on its own.' },
      { title: 'Check what the trial actually costs', text: `A near-free or free trial sounds generous, but a small, deliberate charge like $${trial.price.toFixed(2)} is often a sign the trial runs the real service rather than a throwaway demo built to cost nothing.` },
      { title: 'Confirm nothing renews without being told', text: 'A well-run service states plainly whether a plan auto-renews or simply ends — and doesn\'t bury that detail in fine print.' },
    ])}

    <h2>4. Whether the infrastructure holds up under normal use</h2>
    <p>This is the hardest item to check from a listing alone, which is exactly why it belongs in a hands-on trial rather than in marketing copy. A well-run streaming setup keeps a login stable across a full viewing session, recovers gracefully from a brief connection dip instead of dropping the whole stream, and doesn\'t require re-entering credentials mid-session. A poorly-run one shows its cracks the moment more than a few minutes of continuous playback are asked of it.</p>
    ${answerBox('<p><strong>How to test it:</strong> during a trial, stream continuously for longer than a few minutes — the failure mode this item is checking for tends to show up after sustained use, not in the first thirty seconds. A stream that degrades resolution under a genuine bandwidth squeeze but keeps playing is a good sign; one that freezes and never recovers is not.</p>')}

    <h2>Running the whole checklist in one sitting</h2>
    <p>None of the four items above require a long subscription to test — a single trial period is enough to message support with a real question, compare the stated catalog against what actually shows up, confirm the price matches what was posted, and watch a stream hold up over continuous use. The <a href="/trial/">24-hour trial</a> exists specifically so that checklist doesn\'t have to be taken on faith before a longer plan is on the table.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Run the checklist yourself', lead: 'A dollar and 24 hours is enough to test all four items above on the real thing.' })}
`,
};
