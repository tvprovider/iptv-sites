import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'What is the single fastest way to catch an inflated channel count?', a: 'Ask for three or four specific channel names in a category you care about and see whether the answer is immediate and specific, or vague and redirected back to the total number.' },
  { q: 'Is a low price itself a red flag?', a: 'Not on its own — but a price that will not stay on the page without a signup, paired with a total that will not break into categories, is a combination worth walking away from regardless of how cheap it looks.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'How to Verify an IPTV Channel List Before Paying',
  description: 'A practical checklist for confirming a claimed iptv channel list is real before you subscribe — what to ask, what to test, and the red flags to avoid.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Verify a Channel List' }]),
    articleSchema({ headline: 'How to Verify an IPTV Channel List Before Paying', description: 'A practical checklist for confirming a claimed channel list is real before subscribing.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Verify a Channel List' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>How to actually check a claimed channel list before you pay for it</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Verifying a channel list illustration')}</div>
    ${answerBox('<p>Almost every search for "best iptv providers list" turns up pages that open with a big channel number and close with a signup form. That number is easy to type and hard to verify after the fact, which is exactly why it is worth putting a few concrete checks between reading it and paying for it. None of these take longer than a few minutes, and together they separate a real, maintained list from a padded one.</p>')}

    <h2>1. Ask for named channels, not just a total</h2>
    <p>"How many channels do you have" is the wrong question — anyone can answer it with a round number. The better version is "does this specific channel exist, and what is it listed under," repeated for two or three channels you actually watch. A provider with a real, current list answers immediately. One that redirects back to the total, or takes days to confirm something that specific, is telling you something about how well that list is actually maintained.</p>

    <h2>2. Get the category breakdown, not the headline figure</h2>
    <p>A trustworthy iptv channel list breaks 40,000-style totals into categories — sports, news, entertainment, kids, regional feeds, and a separate VOD count — because a category breakdown is much harder to inflate quietly than one combined number. If a provider cannot or will not show that breakdown, treat the headline total as unverified until you can check it another way.</p>

    <h2>3. Check whether VOD titles get folded into the live count</h2>
    <p>One common way a total gets padded is combining live channels and on-demand titles into a single figure, or counting regional duplicates of the same channel as separate entries. Ask directly whether the advertised number is live channels only, and whether the VOD library is counted separately. A provider with nothing to hide answers this in one line.</p>

    <h2>4. Insist the trial runs the same catalog as a paid plan</h2>
    <p>Some providers show a demo built from a curated, deliberately polished subset, then hand paying customers something noticeably thinner once the card is charged. A trial worth anything runs on the exact list a subscriber gets — confirm that plainly before paying for it, and treat a "sample" trial that will not confirm this as a warning sign on its own.</p>

    <h2>5. Look for a genuine EPG, not a placeholder</h2>
    <p>A live channel that actually exists shows up with a real, current program guide once a login is added to a player app. A guide full of generic placeholder listings or dead time slots on a channel that is supposedly live is a strong sign that channel is not actually being maintained, whatever the landing page claims.</p>

    <h2>6. Cross-check the price against what actually gets billed</h2>
    <p>A quick sanity check: does the number on the page match what a payment confirmation actually shows, with nothing added at checkout? A provider confident in its own numbers publishes them without a signup wall in front of the figure — if the price only appears after a form, that same instinct to obscure a number tends to show up around the channel list too.</p>

    ${comparisonTable(
      ['What you ask', 'A vague answer', 'A verifiable answer'],
      [
        ['"Is [specific channel] included?"', 'Redirects to the total channel count', 'Names the exact category and confirms it directly'],
        ['"Is that number live channels, or live plus VOD combined?"', 'Avoids the distinction entirely', 'States each figure separately, unprompted'],
        ['"Does the trial run the same list as a paid plan?"', 'Calls it a "preview" or "sample" without detail', 'Confirms it plainly, in writing'],
        ['"What is the exact price for each plan length?"', 'Only available after a signup form', 'Posted on the page, no submission required'],
      ]
    )}

    <h2>Red flags worth walking away from</h2>
    <ul>
      <li>Cannot name specific channels in a category you ask about, only restates the total</li>
      <li>Will not separate live channel count from VOD title count</li>
      <li>Calls the trial a "demo" or "sample" and avoids confirming it matches the paid catalog</li>
      <li>Price only appears after a signup form or a message to sales</li>
      <li>No refund terms visible until after you have already paid</li>
    </ul>

    <h2>Where this lands on this site</h2>
    <p>The <a href="/guides/what-is-iptv/">What Is IPTV guide</a> shows the category breakdown behind the number here, the <a href="/pricing/">Pricing page</a> lists every term's real cost with no signup wall, and the <a href="/trial/">24-hour trial</a> runs the identical list a paying subscriber gets — so every check above is one you can actually run against this page, not just read about.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Run the checklist against this list', lead: 'A dollar and 24 hours is enough to confirm what is actually here.' })}
`,
};
