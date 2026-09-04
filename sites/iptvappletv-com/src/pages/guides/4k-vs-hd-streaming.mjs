import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Which Apple TV models actually support 4K?', a: 'Every generation sold as "Apple TV 4K" does. The older Apple TV HD (4th generation) does not, regardless of the content being streamed.' },
  { q: 'Does 4K always look better than HD on Apple TV 4K?', a: 'Only if the original source content was actually filmed and encoded in 4K. Upscaled HD content will not match true native 4K quality, even on the newest Apple TV 4K.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD on Apple TV: What You Actually See',
  description: 'What 4K resolution really looks like on Apple TV 4K versus Apple TV HD, and the factors that decide the picture quality you actually get.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD on Apple TV', description: 'What 4K resolution really looks like on Apple TV.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>4K on Apple TV: what actually changes</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>Whether 4K matters on your setup depends first on which Apple TV you own. Apple TV 4K models decode up to 3840x2160; the older Apple TV HD tops out at 1080p no matter what is streamed to it. Even on Apple TV 4K, the gain is only visible on a reasonably large screen with content that was genuinely produced in native 4K.</p>')}

    <h2>Apple TV HD vs. Apple TV 4K, concretely</h2>
    ${comparisonTable(
      ['Model', 'Maximum output', 'Best viewed on'],
      [
        ['Apple TV HD (4th gen)', '1920 x 1080 (1080p)', 'Any screen size'],
        ['Apple TV 4K (any generation)', '3840 x 2160 (4K)', '55 inch screens and larger, normal viewing distance'],
      ]
    )}

    <h2>Four things decide what actually shows up</h2>
    <ul>
      <li><strong>Your Apple TV model:</strong> Apple TV HD physically cannot output above 1080p, regardless of source resolution.</li>
      <li><strong>The source content:</strong> a large share of channels broadcast in HD or upscaled, not native 4K — no player app can recover detail never captured.</li>
      <li><strong>Sustained bandwidth:</strong> 4K needs meaningfully more than HD, held steady, not just at peak speed.</li>
      <li><strong>The TV on the other end:</strong> a 4K stream sent to a 1080p television gets scaled down regardless of what the Apple TV outputs.</li>
    </ul>

    <h2>Bandwidth, roughly</h2>
    <p>HD generally holds up around 5-10 Mbps sustained; smooth 4K on Apple TV 4K generally wants 25 Mbps or more. Treat this as a floor, since actual demand shifts with content and compression.</p>

    <h2>Why "up to 4K" is the accurate phrase</h2>
    <p>Picture quality depends on all four factors above lining up, not on the Apple TV alone. When a connection or the source cannot sustain 4K, playback usually just drops to a lower resolution rather than failing outright.</p>

    <h2>Getting the most out of an Apple TV 4K</h2>
    <p>Ethernet into the Apple TV beats Wi-Fi consistently for 4K stability, and confirming your internet plan actually delivers 25 Mbps sustained (not just an advertised peak) matters more than almost anything else. The <a href="/setup-guide/">Setup Guide</a> has more specifics.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it for yourself', lead: 'Test streaming quality on your own Apple TV with our 24-hour trial.' })}
`,
};
