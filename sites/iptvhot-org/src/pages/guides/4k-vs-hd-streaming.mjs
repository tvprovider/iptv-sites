import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Does a newer or "trending" title automatically stream in better quality?', a: 'No — how recently something was added to the catalog has nothing to do with its resolution. A brand-new release can still be sourced in HD if that\'s how it was originally mastered.' },
  { q: 'Why does a channel labeled 4K sometimes look soft?', a: 'The label describes the broadcast tier, not a guarantee. A channel marketed as 4K but sourced from an upscaled HD feed looks like upscaled HD no matter what the label says.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD Streaming: What Actually Determines It',
  description: 'What genuinely separates 4K from HD when streaming, the bandwidth it actually costs, and a quick way to test it on your own screen.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs. HD Streaming: What Actually Determines It', description: 'What genuinely separates 4K from HD when streaming.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>4K vs. HD: the difference is real, but it's conditional</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p><strong>4K holds roughly four times the pixel count of standard HD</strong> — 3840×2160 against 1920×1080. Whether that translates into a visibly sharper picture on your setup depends on screen size, viewing distance, and whether what you\'re watching was actually captured in native 4K to begin with, not just labeled that way.</p>')}

    <h2>The pixel math, side by side</h2>
    ${comparisonTable(
      ['Format', 'Resolution', 'Total pixels'],
      [
        ['HD (1080p)', '1920 x 1080', 'About 2.07 million'],
        ['4K (Ultra HD)', '3840 x 2160', 'About 8.3 million'],
      ]
    )}

    <h2>A test you can run on your own TV</h2>
    <p>Sit where you normally would and pull up something you know was mastered in native 4K. Then switch to something you suspect is upscaled HD relabeled as 4K. If the two look nearly identical without squinting, your screen size or seating distance is the limiting factor — not the stream itself.</p>

    <h2>Four things have to line up before you actually see it</h2>
    <ul>
      <li><strong>What it was originally shot in</strong> — a large share of content is native HD and stays that way no matter how it's delivered.</li>
      <li><strong>Screen size and distance</strong> — the extra detail is genuinely hard to perceive under roughly 55 inches at a normal couch distance.</li>
      <li><strong>Sustained bandwidth</strong> — 4K wants about 25 Mbps held steady, not just available at peak.</li>
      <li><strong>Your device's decoder</strong> — older hardware sometimes caps out at HD regardless of what's being sent to it.</li>
    </ul>

    <h2>What resolution has nothing to do with</h2>
    <p>How new or "trending" a title is doesn't affect its resolution — a catalog can update continually while individual titles still stream at whatever resolution they were actually produced in. Those are two entirely separate things, and a service can be genuinely honest about one while being conservative about the other.</p>

    <h2>Why "up to 4K" is the honest framing</h2>
    <p>Every factor above has to cooperate simultaneously — no provider can guarantee it in isolation. When a setup can't sustain it, a stream generally keeps playing anyway, just at a lower resolution instead of failing outright.</p>

    <h2>Getting the most out of what you already have</h2>
    <p>Ethernet over Wi-Fi wherever it's an option, a device from the last few years rather than an aging one, and an honest check of whether your connection actually sustains 25 Mbps rather than just advertises it as a ceiling. Device-specific notes are on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Test it on your own screen first', lead: 'The 24-hour trial puts real channels in front of you for a dollar.' })}
`,
};
