import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'On a 40-inch bedroom TV, does 4K even register?', a: 'Barely. The gap between HD and 4K becomes obvious mainly on larger screens viewed from a typical couch distance — shrink the screen and the human eye stops reliably telling them apart.' },
  { q: 'If something is labeled 4K, is it guaranteed to look that sharp?', a: 'Only if it was actually captured and mastered at native 4K to begin with. Content upscaled from a lower-resolution source gets relabeled but never gains real detail it never had.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: 'Is 4K IPTV Worth It? HD vs. 4K Explained',
  description: 'What 4K resolution genuinely adds over HD when streaming, the four factors that decide it, and realistic bandwidth numbers to plan around.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD Streaming', description: 'What 4K resolution genuinely adds over HD when streaming.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Chasing 4K: worth the fuss, or just a spec-sheet number?</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>4K squeezes in roughly four times the pixels of standard 1080p HD, but that extra detail only registers under specific conditions: a big enough screen, a sensible viewing distance, and — the part people forget — footage that was genuinely captured in native 4K rather than stretched to look like it. Miss any one of those and the gap between the two shrinks fast.</p>')}

    <h2>Resolution head to head</h2>
    ${comparisonTable(
      ['Format', 'Approximate resolution', 'Best viewed on'],
      [
        ['HD (1080p)', '1920 x 1080 pixels', 'Fine on any screen size'],
        ['4K (Ultra HD)', '3840 x 2160 pixels', 'A 55-inch-plus display at a normal couch distance'],
      ]
    )}

    <h2>What quietly decides what shows up on your screen</h2>
    <p>A resolution number on paper is only the starting point. Four separate things have to line up before it actually shows up in what you see:</p>
    <ul>
      <li><strong>What the source was actually shot in:</strong> a large share of programming was produced in HD and stays that way regardless of how it's delivered — no service invents detail that was never recorded.</li>
      <li><strong>How your connection holds up over time:</strong> 4K needs bandwidth held steady, not just a fast burst at the start of a stream.</li>
      <li><strong>What your hardware can decode:</strong> aging boxes and TVs sometimes cap out at HD regardless of what's being sent to them.</li>
      <li><strong>The screen doing the displaying:</strong> feed a 4K stream to a 1080p panel and it gets compressed back down, quietly erasing the advantage.</li>
    </ul>

    <h2>How much bandwidth this really takes</h2>
    <p>As a rough baseline, HD streams comfortably somewhere around 5-10 Mbps sustained. 4K wants meaningfully more — 25 Mbps or better, held steady rather than just hit briefly. Compression efficiency and content type nudge these figures around, so treat them as a floor rather than an exact science.</p>

    <h2>Why "up to 4K" beats promising 4K outright</h2>
    <p>All four factors above have to cooperate simultaneously — no single piece of the chain can force it on its own. When your setup can't sustain it for a given title, the stream generally keeps playing anyway, just dropped to a lower resolution instead of stopping outright.</p>

    <h2>Squeezing out the best picture you can</h2>
    <p>Ethernet over Wi-Fi when it's an option, a device from the last handful of years rather than something aging, and an internet plan that actually sustains 25 Mbps rather than only advertising it as a ceiling. The <a href="/setup-guide/">Setup Guide</a> has more device-specific pointers.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Judge it on your own screen', lead: 'The 24-hour trial runs on your actual device and connection, not a demo reel.' })}
`,
};
