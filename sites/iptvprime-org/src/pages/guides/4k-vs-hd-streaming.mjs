import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'A channel says 4K — was it actually filmed that way?', a: 'Not necessarily. The label reflects a category the channel is filed under, not the camera that shot it. Plenty of live production still originates in HD and gets upscaled afterward, and upscaling doesn\'t manufacture detail that was never captured.' },
  { q: 'Shouldn\'t a provider just guarantee 4K everywhere, all the time?', a: 'Be skeptical of any that do. Too many factors sit outside a provider\'s control for that to be an honest promise — "up to 4K, depending on source and setup" is the version worth trusting, and it\'s the one used here.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: '4K vs HD: What a Resolution Label Really Means',
  description: 'What a "4K" tag on a channel listing actually promises, the real difference versus HD, and a simple way to check which one you\'re actually getting.',
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
    <h1>Three things decide what actually reaches your screen — a label decides none of them</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>
    <p>Resolution reads like the one objective fact on a channel listing, and that\'s precisely what makes it easy to oversell. There\'s a genuine, measurable jump between 4K and HD footage — but whether that jump ever shows up on your particular screen, on a particular night, comes down to three variables no label mentions.</p>

    <h2>Variable one: what the camera actually recorded</h2>
    <p>A lot of live production is still shot in HD, full stop. Applying a "4K" tag to the channel afterward doesn\'t retroactively add detail the original footage never had — it just gets upscaled, which looks smoother than raw HD but isn\'t the same thing as native 4K.</p>

    <h2>Variable two: your screen and how far you\'re sitting from it</h2>
    <p>Under roughly 55 inches, at a typical living-room viewing distance, most people can\'t reliably tell 4K and HD apart even when both are genuinely available. The gap that matters on paper can be functionally invisible in practice.</p>

    <h2>Variable three: whether the hardware can even decode it</h2>
    <p>Older streaming boxes and smart TVs sometimes cap out at HD no matter what\'s being sent to them — a device limitation, not a fault of the source or the connection.</p>

    <h2>The numbers behind the two formats</h2>
    ${comparisonTable(
      ['Format', 'Pixel dimensions', 'Total pixel count'],
      [
        ['HD (1080p)', '1920 × 1080', 'About 2.1 million'],
        ['4K (Ultra HD)', '3840 × 2160', 'About 8.3 million'],
      ]
    )}
    ${answerBox('<p>4K carries roughly four times the raw pixel count of HD. That\'s a real gap — but it only becomes a visible one once the three variables above all line up in your favor at the same time.</p>')}

    <h2>A test that takes about two minutes</h2>
    <p>Pick something known to be shot in native 4K — a recent film works well — and watch a couple of minutes from your normal seat. Then switch to a live channel also tagged 4K and find a comparably-lit moment. If fine detail visibly jumps between the two, the channel is genuinely delivering 4K. If they look close to identical, it was most likely upscaled from HD.</p>

    <h2>Why "up to 4K" is the phrase worth trusting</h2>
    <p>All three variables have to cooperate at once for 4K to actually land on screen, and a provider only ever controls the first one — what the source footage was shot in. When a connection or device can\'t keep up, a properly built player quietly drops resolution rather than freezing, so the real result shifts night to night and device to device. A listing that says "up to 4K" rather than promising it outright is being accurate about that, which is the same standard applied to the pricing and support claims made elsewhere on this site.</p>

    <h2>Getting more out of what you already own</h2>
    <p>Wire the connection instead of relying on Wi-Fi wherever that\'s practical, avoid hardware that\'s several generations old, and test your connection while actually streaming rather than trusting an idle speed-test number. Device-specific notes live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the real resolution yourself', lead: 'A dollar and 24 hours on the actual catalog settles it faster than any label.' })}
`,
};
