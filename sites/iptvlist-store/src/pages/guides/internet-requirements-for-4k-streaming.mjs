import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'A speed test comes back fine but a channel still stutters. What is going on?', a: 'A single reading taken at a quiet moment does not capture a brief dip that happens later, or a second device on the network competing for the same bandwidth right when it matters. Test again at the moment the stutter actually occurs.' },
  { q: 'Does browsing a bigger channel list use more bandwidth than a smaller one?', a: 'No. Bandwidth is set entirely by the resolution of whatever is currently playing, never by how large the catalog behind it is.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'Internet Speed IPTV Actually Requires, by Resolution',
  description: 'A plain speed floor for streaming IPTV at each resolution, how to test your connection honestly, and what in your own home quietly eats the same bandwidth.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'Internet Speed IPTV Actually Requires, by Resolution', description: 'A plain speed floor for streaming IPTV at each resolution.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>The number on your internet plan is not the number a stream actually gets</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p>Marketing loves the word "unlimited" and skips the part where a live channel needs a steady, unbroken flow of data for the entire time it plays, not a single fast burst. This page lists the honest floor for each resolution and a way to test your own connection that actually reflects what streaming will feel like.</p>')}

    <h2>The floor, plainly, by resolution</h2>
    ${comparisonTable(
      ['Resolution', 'What it needs, sustained'],
      [
        ['Standard definition', '3 Mbps or better'],
        ['HD (1080p)', 'Roughly 5 to 10 Mbps'],
        ['4K (Ultra HD)', '25 Mbps or better'],
      ]
    )}
    <p class="small muted">These are starting points, not guarantees — actual usage shifts with compression and the specific content playing.</p>

    <h2>Why a plan's advertised speed is a ceiling, not a reality</h2>
    <p>An internet provider sells the maximum your line can theoretically carry. What a device is actually pulling in a given second, while three other devices are also on the network and it is peak evening hours, is a smaller and more variable figure. That gap between advertised and actual is exactly where buffering comes from.</p>

    <h2>A test worth trusting</h2>
    <p>Skip running the speed test from a phone sitting next to the router at noon. Instead, run it from the exact device that will be streaming, at the hour you would normally watch, with whatever else usually runs in the background left on. That single change turns a speed test from a marketing number into something that actually predicts your evening.</p>

    <h2>What else is pulling from the same line</h2>
    <ul>
      <li>A second device mid-download or on a video call at that exact moment</li>
      <li>A router built for fewer simultaneous connections than your household now runs</li>
      <li>A signal that has to pass through several interior walls before reaching the TV</li>
      <li>A cloud backup or software update running unattended somewhere else in the house</li>
    </ul>

    <h2>Reading the symptoms correctly</h2>
    <p>A connection that cannot keep pace rarely just stops outright — a decent player app steps the resolution down or pauses briefly to refill its buffer instead. That behavior is the app coping with bandwidth, not evidence of a broken login. A login problem looks different: nothing loads from the very first attempt, on every channel, not just one struggling under load.</p>

    <h2>Sorting a bandwidth issue from an activation issue</h2>
    <p>If something loads and then struggles partway through, that points at the connection. If nothing loads at all from the start, that points at the login itself, and the <a href="/setup-guide/">Setup Guide</a> covers fixing that case specifically.</p>

    <h2>The cheapest way to find out for certain</h2>
    <p>Rather than guess from a speed-test number, the <a href="/trial/">24-hour trial</a> puts the actual list on your actual home network for a dollar — a direct answer instead of an estimate.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Test your own connection, not a guess', lead: 'Run the 24-hour trial and see how it actually holds up on your hardware.' })}
`,
};
