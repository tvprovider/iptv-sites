import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Does a more frequently updated catalog need more bandwidth?', a: 'No — how often the catalog changes has nothing to do with bandwidth. What matters is the resolution of whatever you\'re actively watching, same as any streaming source.' },
  { q: 'My speed test looks fine but playback still stutters — why?', a: 'A single clean result can hide short drops that only happen intermittently, or a neighbor\'s router crowding the same wireless channel. Re-run the test right when the stutter is actually happening, not hours later.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'How Much Internet Speed IPTV Actually Needs',
  description: 'The real internet speed IPTV needs by resolution, how to test it properly, and the everyday things at home that quietly slow a stream down.',
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
    <h1>What your connection actually needs to hold, not just reach</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p>The number your ISP advertises and the number a stream actually gets in practice are frequently different things. What matters for smooth playback is sustained throughput — held steady for the length of what you\'re watching — not a one-time speed-test peak.</p>')}

    <h2>Speed needed, by resolution</h2>
    ${comparisonTable(
      ['Resolution', 'Sustained speed needed'],
      [
        ['Standard definition', '3 Mbps or more'],
        ['HD (1080p)', 'Roughly 5–10 Mbps'],
        ['4K (Ultra HD)', '25 Mbps or more'],
      ]
    )}
    <p class="small muted">Treat these as a floor — exact demand shifts with compression and content type.</p>

    <h2>Testing it in a way that actually means something</h2>
    <p>Running a speed test at noon on a quiet network tells you almost nothing about 8pm with the whole household online. Test it on the actual device you stream on, at the actual hour you watch — a number pulled from a phone next to the router doesn't reflect what the TV in the other room is getting.</p>

    <h2>Advertised vs. actual</h2>
    <p>An ISP sells a ceiling, not a guarantee. Evening congestion, a router several years old, and distance from the access point can each cut a meaningful chunk off whatever the plan technically promises.</p>

    <h2>What quietly competes for the same connection</h2>
    <ul>
      <li>A second device streaming, downloading, or on a video call at the same time</li>
      <li>An aging router straining under more simultaneous connections than it was built for</li>
      <li>Wi-Fi signal loss from walls, distance, or a neighbor's overlapping network</li>
      <li>Background app updates or cloud backups quietly running elsewhere in the house</li>
    </ul>

    <h2>What a struggling connection actually looks like</h2>
    <p>Most decent player apps don't just freeze outright — they quietly step down to a lower resolution or pause for a few seconds to rebuild the buffer. That's the app compensating for a connection that can't keep up, not evidence of a broken login or a server-side problem.</p>

    <h2>Telling a bandwidth issue apart from a login issue</h2>
    <p>Both look the same from the couch: "it's just not working." The distinction that actually matters is whether a channel loads at all and then struggles (bandwidth) versus nothing loading from the start (login). The <a href="/setup-guide/">Setup Guide</a> covers fixing the second kind.</p>

    <h2>Confirming it before paying for months</h2>
    <p>The <a href="/trial/">24-hour trial</a> runs on your own network for a dollar, which settles the bandwidth question directly instead of guessing from a speed-test number alone.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See how your connection actually performs', lead: 'Run the 24-hour trial and find out on your own hardware.' })}
`,
};
