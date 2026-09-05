import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'If an Ekstraklasa channel is tagged 4K, is the match itself always shot in native 4K?', a: 'Not necessarily — the tag describes which category the channel was filed under on the platform, not how the broadcast was actually produced. A match captured in HD and upscaled afterward keeps HD\'s visual signature no matter what label sits on top of it.' },
  { q: 'Is it reasonable to expect a provider to guarantee 4K on every single channel?', a: 'No — treat any provider that promises that outright with some skepticism. Too many variables sit outside anyone\'s control for a flat guarantee to be honest; "up to 4K, depending on source and setup" is the accurate version of that claim.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs HD: What a Resolution Label Really Means',
  description: 'What a "4K" label on a Polish channel listing actually tells you, the real gap between 4K and HD, and a two-minute test to check which one you get.',
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
    <h1>A channel labeled "4K" and one that actually looks like it aren't the same promise</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    <p>Resolution is the one spec on a channel listing that sounds objective and precise, which is exactly why it gets stretched the furthest. The pixel-count difference between 4K and HD is real and measurable — but whether it ever reaches your eyes depends on three things a label can't tell you anything about.</p>

    <h2>What the numbers actually are</h2>
    ${comparisonTable(
      ['Format', 'Pixel dimensions', 'Total pixel count'],
      [
        ['HD (1080p)', '1920 × 1080', 'About 2.1 million'],
        ['4K (Ultra HD)', '3840 × 2160', 'About 8.3 million'],
      ]
    )}
    ${answerBox('<p>Roughly four times the pixels sit inside a 4K frame compared to HD — a genuine jump on paper. Whether that jump is visible on a specific night, on a specific channel, on your specific TV, is a separate question the number above can\'t answer by itself.</p>')}

    <h2>Three things that decide what actually shows up on screen</h2>
    <ul>
      <li><strong>How the broadcast was originally captured</strong> — plenty of live sport and news production still originates in HD, and no amount of relabeling afterward changes that.</li>
      <li><strong>Screen size and viewing distance</strong> — under roughly 55 inches at a normal living-room distance, most eyes struggle to tell 4K from HD at all.</li>
      <li><strong>Whether the hardware decodes it</strong> — a streaming box or smart TV a few years old may simply cap out at HD regardless of what's being sent to it.</li>
    </ul>

    <h2>A two-minute test that settles it</h2>
    <p>Play something known to be shot natively in 4K — a recent film or series — for a couple of minutes from your usual seat. Then switch to an Ekstraklasa broadcast or a news channel also tagged 4K and find a similarly-lit scene. A visible jump in fine detail between the two means the second one is genuinely 4K; if they look almost identical, the broadcast was most likely upscaled from an HD source.</p>

    <h2>Why "up to 4K" is the only honest phrasing</h2>
    <p>All three factors above have to line up at once for a stream to genuinely deliver 4K, and a provider only ever controls one of them — the source footage. When the connection or the device can't keep pace, a well-built player app quietly steps resolution down rather than freezing, which means the real outcome shifts by match, by device, and by night. A listing that says "up to 4K" instead of a flat promise is simply describing that honestly.</p>

    <h2>Getting the most out of the hardware you already have</h2>
    <p>Three things move the needle in practice: a cable instead of Wi-Fi wherever that's realistic, hardware that isn't several generations behind, and testing the connection while a match is actually live rather than trusting a quiet-afternoon speed check. Device-specific notes sit on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See the actual resolution for yourself', lead: 'A dollar and 24 hours on the real Polish lineup settles it faster than any label.' })}
`,
};
