import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Can I tell the difference between 4K and HD on any screen?', a: 'The difference is most visible on larger screens (55 inches and up) viewed from a normal distance. On smaller screens, the difference is less noticeable.' },
  { q: 'Does 4K always look better than HD?', a: 'Only if the original source content was actually filmed and encoded in 4K. Upscaled HD content will not match true native 4K quality.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD Streaming: What You Actually See | Canada IPTV',
  description: 'What 4K resolution really buys you over HD when streaming IPTV, and the factors that decide the quality you actually get on screen.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD Streaming', description: 'What 4K resolution really buys you over HD.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>4K vs. HD: the difference you can actually see</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>4K resolution holds roughly four times the pixel detail of standard 1080p HD, but that difference is only visible on a reasonably large screen, at a normal viewing distance, and only when the content was actually shot and encoded in native 4K to begin with. On a laptop or a small TV, most viewers cannot reliably pick 4K out from HD.</p>')}

    <h2>The two formats, compared</h2>
    ${comparisonTable(
      ['Format', 'Approximate resolution', 'Best viewed on'],
      [
        ['HD (1080p)', '1920 x 1080 pixels', 'Any screen size'],
        ['4K (Ultra HD)', '3840 x 2160 pixels', '55 inch screens and larger, at a normal viewing distance'],
      ]
    )}

    <h2>What determines the picture you get</h2>
    <p>The number on a spec sheet is only the starting point. In practice, four things determine what actually lands on your screen:</p>
    <ul>
      <li><strong>The source content:</strong> a large share of channels and programs are HD or upscaled rather than native 4K — no streaming service can recover detail that was never captured on camera.</li>
      <li><strong>Sustained internet speed:</strong> 4K needs meaningfully more bandwidth than HD, held consistently, not just as a burst.</li>
      <li><strong>Device decoding power:</strong> older hardware may struggle with 4K or not support it at all.</li>
      <li><strong>The display itself:</strong> a 4K stream sent to a 1080p screen is scaled down, which erases the extra detail anyway.</li>
    </ul>

    <h2>Bandwidth, as a rough guide</h2>
    <p>HD generally holds up on about 5 to 10 Mbps of sustained bandwidth; smooth 4K generally wants 25 Mbps or more. Treat these as a floor rather than a guarantee, since actual usage shifts with content and compression.</p>

    <h2>Why "up to 4K" is the honest phrasing</h2>
    <p>Picture quality depends on all four factors above working together, not on any single provider alone. When a connection or device cannot sustain 4K on a given title, the stream usually still plays, just at a reduced resolution instead of failing outright.</p>

    <h2>Getting closer to the ceiling</h2>
    <p>Use a wired connection where practical, choose a device from the last few years, and confirm your internet plan actually delivers 25 Mbps or more sustained, not just as an advertised peak. The <a href="/setup-guide/">Setup Guide</a> has device-specific tips.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it for yourself', lead: 'Test streaming quality on your own device and connection with our 24-hour trial.' })}
`,
};
