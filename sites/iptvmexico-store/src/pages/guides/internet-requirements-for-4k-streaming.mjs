import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'My speed test looks fine, but the stream still stutters partway through a match. Why?', a: 'A single test run at a quiet moment misses a dip that happens twenty minutes later, or another device suddenly competing for bandwidth right as the second half kicks off. Re-run the test at the exact moment the stutter shows up.' },
  { q: 'Does a bigger Mexican channel lineup need more bandwidth than a smaller one?', a: 'No — bandwidth use is driven entirely by the resolution of whatever is currently playing, not by how large the overall catalog happens to be.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'How Much Internet Speed IPTV Actually Needs',
  description: 'The real internet speed floor for streaming Liga MX and Mexican channels at each resolution, an honest way to test it, and what quietly competes for bandwidth.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'How Much Internet Speed IPTV Actually Needs', description: 'The real internet speed floor for streaming IPTV by resolution.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Your internet plan's advertised speed and your actual match-day speed are two different numbers</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p>A live Liga MX broadcast doesn\'t need one fast burst of data at kickoff — it needs a steady, continuous flow for the entire ninety minutes, and that\'s exactly the part most internet marketing skips over with a word like "unlimited." Below is a plain speed floor by resolution, plus a way to test your own line that actually predicts how a real matchday will go.</p>')}

    <h2>The minimums, by resolution</h2>
    ${comparisonTable(
      ['Resolution', 'Sustained speed needed'],
      [
        ['Standard definition', 'From about 3 Mbps'],
        ['HD (1080p)', 'Around 5–10 Mbps'],
        ['4K (Ultra HD)', 'At least 25 Mbps'],
      ]
    )}
    <p class="small muted">Treat these as a starting point rather than a hard guarantee — actual bandwidth use shifts with compression and the specific broadcast.</p>

    <h2>Why the number on your bill isn't the number you get</h2>
    <p>An internet provider advertises the theoretical ceiling of your line. What a single device actually receives at 7 PM on a Saturday, with two other devices also active and everyone streaming the same fixture, is a smaller and much less stable figure. That difference between advertised and real is where most buffering complaints actually come from.</p>

    <h2>Testing it in a way that means something</h2>
    <p>Don't test from a phone next to the router at midday. Run the test from the device that will actually be streaming, around your usual kickoff time, with whatever normally runs in the background left running. That one change turns a speed test from a marketing figure into something that genuinely reflects match night.</p>

    <h2>What's quietly sharing your bandwidth</h2>
    <ul>
      <li>A second household device mid-download, or on a video call, at that exact moment</li>
      <li>A router that's simply older than the number of devices now connected to it</li>
      <li>Walls and distance between the router and the TV weakening a Wi-Fi signal</li>
      <li>A background backup or automatic update running unnoticed elsewhere in the house</li>
    </ul>

    <h2>Reading what the symptoms are actually telling you</h2>
    <p>A connection running out of headroom rarely just cuts out entirely — a well-built player app instead drops resolution or pauses briefly to refill its buffer. That's the app adapting to bandwidth, not a sign of a broken login. A genuine login problem behaves differently: every channel fails from the first attempt, not just one struggling mid-stream.</p>

    <h2>Telling a bandwidth problem apart from an activation problem</h2>
    <p>Something that starts fine and struggles later points at the connection. Something that never loads at all points at the login itself — and the <a href="/setup-guide/">Setup Guide</a> covers fixing that specific case.</p>

    <h2>The most direct way to find out</h2>
    <p>Rather than estimate from a speed-test number, the <a href="/trial/">24-hour trial</a> puts the actual Mexican and international lineup on your real home network for a dollar — ideally tested during an actual live match rather than a quiet afternoon.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Test your own line, not a guess', lead: 'Run the 24-hour trial and see how it holds up on your actual hardware.' })}
`,
};
