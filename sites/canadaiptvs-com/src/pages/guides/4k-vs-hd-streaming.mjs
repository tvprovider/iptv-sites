import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is the jump from HD to 4K obvious on a laptop screen?', a: 'Not really. The gap becomes clear on a large TV viewed from a normal couch distance, but it mostly flattens out on small displays like a laptop or a phone.' },
  { q: 'Does labeling something 4K guarantee it looks better?', a: 'Only if it was genuinely captured and encoded at native 4K. Content that has just been upscaled from HD carries the 4K label without the actual detail behind it.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD Streaming Quality Explained',
  description: 'How 4K resolution compares to HD in real streaming conditions, and the four factors that actually decide what shows up on your screen.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD Streaming', description: 'How 4K resolution compares to HD in real streaming conditions.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Is 4K actually worth chasing over HD?</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>On paper, 4K carries about four times the pixel count of 1080p HD. In practice, that gap only shows up under three conditions at once: a large enough screen, a normal seating distance, and source content that was actually captured in native 4K rather than upscaled afterward. Miss any one of those and the two formats start looking nearly identical.</p>')}

    <h2>Resolution numbers, side by side</h2>
    ${comparisonTable(
      ['Format', 'Approximate resolution', 'Where it shows'],
      [
        ['HD (1080p)', '1920 x 1080 pixels', 'Reads fine on nearly any screen'],
        ['4K (Ultra HD)', '3840 x 2160 pixels', 'A 55-inch-plus screen at a typical couch distance'],
      ]
    )}

    <h2>Four variables, not one</h2>
    <p>A spec sheet resolution is only the starting point — what actually reaches your eyes depends on:</p>
    <ul>
      <li><strong>How the content was originally shot:</strong> plenty of channels and shows are HD at the source, or upscaled — no service can add detail that was never recorded.</li>
      <li><strong>How steady your connection stays:</strong> 4K demands noticeably more bandwidth than HD, held continuously rather than just at a peak.</li>
      <li><strong>How current your device is:</strong> older hardware sometimes cannot decode 4K at all, or struggles to keep pace.</li>
      <li><strong>What screen it plays on:</strong> a 4K stream gets downscaled on a 1080p display, which erases most of the benefit anyway.</li>
    </ul>

    <h2>Bandwidth, roughly speaking</h2>
    <p>HD tends to run fine around 5-10 Mbps sustained. Reliable 4K wants closer to 25 Mbps or more, and that number needs to hold steady, not just spike briefly on a speed test.</p>

    <h2>Why services say "up to 4K" instead of promising it outright</h2>
    <p>All four factors above have to line up together for true 4K playback — no single piece guarantees it alone. If your connection or device cannot sustain it on a given title, the stream typically drops to a lower resolution rather than stopping entirely.</p>

    <h2>Getting the most out of it when it is available</h2>
    <p>An Ethernet connection beats Wi-Fi where you can manage it, a device from the past few years helps considerably, and it is worth confirming your internet plan actually holds 25 Mbps sustained rather than just advertising it as a peak number. Device-specific notes live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See the resolution question settled for yourself', lead: 'A day on the real service, on your own TV, answers this faster than any spec sheet.' })}
`,
};
