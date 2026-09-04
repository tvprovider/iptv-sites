import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Would I even notice 4K on a small TV?', a: 'Barely, if at all. The jump is obvious on a 55-inch-plus screen at a normal couch distance — on a 32-inch bedroom TV, it mostly disappears.' },
  { q: 'Is 4K automatically better-looking than HD?', a: 'Only when the content was actually shot and encoded at native 4K in the first place. Upscaled HD dressed up as "4K" never quite matches the real thing.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD Streaming: The Real Difference',
  description: 'What actually separates 4K from HD streaming quality, what determines it in practice, and realistic expectations for IPTV.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD Streaming', description: 'What actually separates 4K from HD streaming quality.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What separates 4K from HD when you're actually watching</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p><strong>4K packs roughly four times the pixel count of standard 1080p HD</strong> — 3840×2160 against 1920×1080. Whether that translates into a visibly sharper picture depends on your screen size, viewing distance, and whether the source was ever actually filmed in native 4K to begin with.</p>')}

    <h2>The numbers, side by side</h2>
    ${comparisonTable(
      ['Format', 'Approximate resolution', 'Best viewed on'],
      [
        ['HD (1080p)', '1920 × 1080 pixels', 'Works fine on any screen size'],
        ['4K (Ultra HD)', '3840 × 2160 pixels', '55 inches or larger, from a normal couch distance'],
      ]
    )}

    <h2>Four things that decide what you actually see</h2>
    <ul>
      <li><strong>What the content was shot in:</strong> A lot of programming is HD at its core, upscaled or simply unavailable in true 4K — no streaming service changes that.</li>
      <li><strong>Your connection's sustained speed:</strong> 4K eats considerably more bandwidth than HD does, continuously, not just in bursts.</li>
      <li><strong>How old your device is:</strong> Some older hardware can't decode 4K at all, or chokes trying to keep up with it.</li>
      <li><strong>The screen you're watching on:</strong> A 4K stream gets scaled down on a 1080p display, erasing most of the detail advantage.</li>
    </ul>

    <h2>Bandwidth, in practical terms</h2>
    <p>HD generally holds up fine around 5–10 Mbps sustained. Smooth 4K wants 25 Mbps or more, sustained rather than just as a peak number. Compression and content type shift these numbers somewhat, but that's the ballpark.</p>

    <h2>Why "up to 4K" is the honest framing</h2>
    <p>Every one of the four factors above has to line up for true 4K playback — no provider can guarantee it in isolation. If your connection or device can't sustain it, the stream typically still plays, just at a lower resolution rather than failing outright.</p>

    <h2>Getting the most out of 4K when it's available</h2>
    <p>Wire in with Ethernet where you can, use a device from the last few years rather than an old one, and confirm your internet plan actually sustains 25 Mbps. Device-specific tips live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Judge the quality on your own screen', lead: 'The 24-hour trial runs on your actual connection and device — not a demo reel.' })}
`,
};
