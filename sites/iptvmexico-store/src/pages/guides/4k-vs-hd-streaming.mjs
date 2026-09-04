import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'If a Liga MX broadcast is tagged 4K, is it always genuinely native 4K?', a: 'The tag just marks which category a channel was filed under. If the production itself was captured in HD and stretched afterward, it keeps the visual signature of upscaled HD no matter what the listing calls it.' },
  { q: 'Should a provider be able to guarantee 4K on every channel?', a: 'No, and treat one that claims it can as overreaching. "Up to 4K, depending on source and setup" is the only version of that claim that\'s actually honest, since too much sits outside any provider\'s control.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs HD: What a Resolution Label Really Means',
  description: 'What a "4K" label on a Mexican channel listing actually tells you, the real gap between 4K and HD, and a two-minute test to check which one you get.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: '4K vs HD: What a Resolution Label Really Means', description: 'What a 4K label on a channel listing actually tells you.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>A "4K" label describes a category, not what you'll actually see</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    ${answerBox('<p>A 4K frame packs roughly four times the pixel count of a 1080p HD one — a real, measurable difference, but one that only shows up on screen if the broadcast was actually produced at that resolution, the TV is large enough to reveal the extra detail, and you\'re sitting close enough to notice. A label on a channel listing speaks to none of those three conditions.</p>')}

    <h2>The pixel counts, side by side</h2>
    ${comparisonTable(
      ['Format', 'Pixel dimensions', 'Total pixel count'],
      [
        ['HD (1080p)', '1920 × 1080', 'About 2.1 million'],
        ['4K (Ultra HD)', '3840 × 2160', 'About 8.3 million'],
      ]
    )}

    <h2>A side-by-side test you can run yourself</h2>
    <p>Queue up a movie or series known to be shot natively in 4K and watch a few minutes from your usual seat. Then switch to a Liga MX match or a news broadcast also tagged 4K and watch a similarly-lit scene. A clear jump in detail between the two confirms genuine 4K source footage; if the two look nearly identical, the second was most likely upscaled from an HD original.</p>

    <h2>Three factors that decide what you actually see</h2>
    <ul>
      <li><strong>How the original was shot</strong> — a lot of live sports and news production still originates in HD, and no amount of relabeling changes that afterward.</li>
      <li><strong>How big your screen is and how far you sit from it</strong> — under about 55 inches at a typical living-room distance, the extra detail in 4K is hard for most eyes to pick out.</li>
      <li><strong>Whether the hardware can decode it</strong> — some older streaming boxes and smart TVs simply top out at HD regardless of the incoming signal.</li>
    </ul>

    <h2>Why "up to 4K" is the phrase to look for</h2>
    <p>All three of those have to line up simultaneously for a stream to genuinely deliver 4K, and a provider only really controls the first one — the source. When the connection or the hardware can't keep up, a competent player app steps resolution down instead of freezing, so the actual outcome shifts from match to match and device to device. A listing that says "up to 4K" rather than a flat guarantee is describing that reality accurately.</p>

    <h2>Getting the clearest picture from what you already own</h2>
    <p>A wired connection wherever it's practical, hardware from the last few years rather than something aging out, and an honest test of whether 25 Mbps genuinely holds up while a match is actually playing, not just on a speed-test app. Device-specific notes are on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Judge it on your own TV', lead: 'The 24-hour trial puts the real Mexican lineup in front of you for a dollar.' })}
`,
};
