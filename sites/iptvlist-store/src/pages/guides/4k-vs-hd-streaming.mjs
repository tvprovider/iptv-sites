import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'If a channel is tagged 4K on the list, is it always genuinely 4K?', a: 'The tag describes the category a channel was filed under, not a per-second guarantee. A feed built from an upscaled HD source keeps looking like upscaled HD regardless of the label attached to it.' },
  { q: 'Can any provider promise flat 4K on every single title?', a: `No, and a listing that claims otherwise is overreaching. The honest phrasing is "up to 4K, source and setup allowing" — never a flat guarantee, because too many variables outside a provider's control decide the outcome.` },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs HD: Reading a Resolution Claim Correctly',
  description: 'What a "4K" tag on a channel listing actually promises, the bandwidth gap between 4K and HD, and a quick test to see which one you are really getting.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs HD: Reading a Resolution Claim Correctly', description: 'What a 4K tag on a channel listing actually promises.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>A resolution label on a listing is a category, not a promise</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>Four times more pixels sit inside a 4K frame than a 1080p HD one, but that gap only matters if the original footage was actually shot at that resolution, your screen is large enough to reveal the difference, and you are close enough to notice it. A label on a listing confirms none of those three conditions by itself.</p>')}

    <h2>The raw pixel math</h2>
    ${comparisonTable(
      ['Format', 'Pixel dimensions', 'Approximate total'],
      [
        ['HD (1080p)', '1920 by 1080', '2.1 million pixels'],
        ['4K (Ultra HD)', '3840 by 2160', '8.3 million pixels'],
      ]
    )}

    <h2>A test that settles it in two minutes</h2>
    <p>Pick a title known to be shot in native 4K and watch a scene from your usual seat. Then load a news broadcast or older recording tagged 4K on the same listing and watch a comparable scene. A visible gap confirms real 4K source footage; near-identical results usually mean the second one was upscaled from HD before it was ever labeled.</p>

    <h2>Three things that decide the outcome, none of them the label</h2>
    <ul>
      <li><strong>The source recording</strong> — plenty of live broadcasts are captured in HD and stay there no matter what a catalog calls them later.</li>
      <li><strong>Screen size and seating distance</strong> — below roughly 55 inches at a normal couch distance, extra pixels are genuinely difficult to perceive.</li>
      <li><strong>A device capable of decoding it</strong> — older streaming hardware sometimes caps out at HD regardless of what is being sent.</li>
    </ul>

    <h2>Why the honest phrasing always includes "up to"</h2>
    <p>All three conditions above have to align at once for a stream to actually deliver visible 4K, and a provider only controls one of them — the source. When bandwidth or hardware cannot keep pace, a well-built player app quietly drops resolution rather than freezing, so a real result varies title to title and device to device. That is why a serious listing qualifies the claim instead of stating it flatly.</p>

    <h2>Getting the most from what is already in the house</h2>
    <p>A wired connection where one is possible, hardware bought within the last few years rather than something aging out, and an honest check of whether 25 Mbps genuinely holds during actual use rather than just on paper. Hardware-specific notes live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it on your own screen', lead: 'The 24-hour trial puts the real list in front of you for a dollar.' })}
`,
};
