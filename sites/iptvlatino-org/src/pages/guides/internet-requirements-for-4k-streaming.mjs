import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Does flipping between Spanish and English channels use more data than sticking to one?', a: 'No — bandwidth tracks resolution, not language or channel choice. Nothing about switching sides of the catalog changes what your connection has to deliver.' },
  { q: 'The speed test says everything is fine but a match still stutters — why?', a: 'One clean reading can easily miss brief drops that only show up intermittently, or a neighbor crowding the same wireless channel — and kickoff time tends to load a home network harder than a quiet weekday afternoon. Re-test right as the stutter happens, not after the fact.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'How Much Internet Speed IPTV Actually Needs',
  description: 'The real internet speed IPTV needs by resolution, how to test it properly, and the everyday things at home that quietly slow a live match down.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'How Much Internet Speed IPTV Actually Needs', description: 'The real internet speed IPTV needs by resolution.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Holding steady through 90 minutes matters more than the number on the plan</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p>What an ISP prints on the invoice and what a stream actually receives in the moment are two different numbers more often than not. Smooth playback — whether it\'s a fútbol match, a novela, or an English channel — depends on throughput that holds steady across the whole runtime, not a number a speed test happens to hit once.</p>')}

    <h2>Rough speed floor, by resolution</h2>
    ${comparisonTable(
      ['Resolution', 'Sustained speed needed'],
      [
        ['Standard definition', '3 Mbps or more'],
        ['HD (1080p)', 'Around 5–10 Mbps'],
        ['4K (Ultra HD)', '25 Mbps or more'],
      ]
    )}
    <p class="small muted">Treat these as a starting point — actual demand shifts with compression and the kind of content playing.</p>

    <h2>Testing at the moment it counts</h2>
    <p>A speed test run at noon with nobody else online says almost nothing about kickoff time with the whole house connected. Run it from the actual device doing the streaming, at the hour a match would normally air — a reading taken from a phone sitting next to the router doesn't reflect what the TV two rooms over is getting.</p>

    <h2>What's promised vs. what shows up</h2>
    <p>An ISP sells a ceiling, not a floor. Evening traffic, an aging router, and physical distance from the access point can each chip away at that number — and a big match night is precisely when that gap tends to surface.</p>

    <h2>Everyday things quietly eating the same connection</h2>
    <ul>
      <li>Another device streaming, downloading, or on a video call at the same moment</li>
      <li>A router straining to juggle more connections than it was designed for</li>
      <li>Wi-Fi signal thinned out by walls, distance, or an overlapping neighbor's network</li>
      <li>Background updates or cloud syncs running quietly somewhere else in the house</li>
    </ul>

    <h2>How a struggling connection actually presents itself</h2>
    <p>A decent player app rarely just freezes — it steps down to a lower resolution or pauses briefly to refill the buffer. That's the app adjusting to a connection that can't keep pace, not a sign of a broken login or a server problem.</p>

    <h2>Telling bandwidth apart from a login problem</h2>
    <p>From the couch, both look identical: "it's not working." The real distinction is whether something loads and then struggles (bandwidth) versus nothing loading at all from the start (login). The <a href="/setup-guide/">Setup Guide</a> walks through fixing the second case.</p>

    <h2>Confirming it before committing to months</h2>
    <p>The <a href="/trial/">24-hour trial</a> runs on your actual home network for a dollar, answering the bandwidth question directly instead of leaving it to a speed-test guess.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Test your own connection first', lead: 'Run the 24-hour trial and see how it holds up on your actual hardware.' })}
`,
};
