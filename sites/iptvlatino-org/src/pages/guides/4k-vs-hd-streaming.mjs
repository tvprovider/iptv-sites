import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Does a Spanish-language channel stream in lower quality than an English one?', a: 'Language has nothing to do with it. Resolution comes down to how the individual channel or title was sourced, the same rule that applies to every piece of content on the platform.' },
  { q: 'A fútbol broadcast is labeled 4K but looks soft — what gives?', a: 'That label describes the tier the broadcast was sold as, not a guarantee. A match feed marketed as 4K but pulled from an upscaled HD signal is still going to look like upscaled HD.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs. HD Streaming: What Actually Determines It',
  description: 'What genuinely separates 4K from HD when streaming fútbol, novelas, or English channels, the bandwidth it costs, and how to test it on your own screen.',
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
    <h1>Why the same "4K" label can mean two different pictures</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>A 4K frame packs in roughly four times the pixels a standard 1080p HD frame does — 3840×2160 next to 1920×1080. Whether your eyes actually register that gap comes down to screen size, how far back you\'re sitting, and whether the fútbol match, novela, or English channel in question was captured in native 4K to start with rather than just marketed that way.</p>')}

    <h2>Counting the pixels</h2>
    ${comparisonTable(
      ['Format', 'Resolution', 'Total pixels'],
      [
        ['HD (1080p)', '1920 x 1080', 'Roughly 2.07 million'],
        ['4K (Ultra HD)', '3840 x 2160', 'Roughly 8.3 million'],
      ]
    )}

    <h2>A side-by-side test anyone can run</h2>
    <p>Sit in your usual spot and pull up something known to be native 4K — a recent film release works well. Then switch to a news channel or novela you suspect is upscaled HD wearing a 4K label. Look nearly the same without leaning in? Distance and screen size are the bottleneck there, not the stream feeding it.</p>

    <h2>Four conditions, all required at once</h2>
    <ul>
      <li><strong>The original capture</strong> — a lot of live sports and news feeds are shot in HD and never leave it, no matter the delivery method.</li>
      <li><strong>How big the screen is, and how far away you sit</strong> — under about 55 inches at a typical couch distance, the extra detail is genuinely tough to notice.</li>
      <li><strong>Bandwidth that holds, not just peaks</strong> — figure on 25 Mbps sustained for 4K, not a number your speed test hits once.</li>
      <li><strong>What the device can decode</strong> — an older box sometimes tops out at HD regardless of what's being sent its way.</li>
    </ul>

    <h2>What resolution never tracks</h2>
    <p>Whether something is Spanish-language or English, live or on-demand, tells you nothing about its resolution — that's purely a production decision made long before it reaches a player app. A fútbol broadcast and a Hollywood release can land at completely different resolutions with zero relationship between them.</p>

    <h2>Why "up to 4K" is the accurate way to say it</h2>
    <p>Every condition above has to hold at once, and no provider can force that from their end alone. When a setup can't keep pace, most streams quietly drop to a lower resolution instead of stopping outright.</p>

    <h2>Getting more out of the setup already in the house</h2>
    <p>A wired connection wherever it's practical, hardware from the last few years rather than something aging out, and an honest test of whether 25 Mbps actually holds rather than just appears on paper. Device notes specific to your hardware live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Judge it on your own screen', lead: 'The 24-hour trial puts real fútbol, novela, and English channels in front of you for a dollar.' })}
`,
};
