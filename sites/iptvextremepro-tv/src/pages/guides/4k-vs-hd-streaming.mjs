import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'If my login is Xtream Codes, do I get better picture quality than M3U?', a: 'No difference at all. Resolution is set by the source footage, your device, and your connection — the authentication method carries zero weight in that equation.' },
  { q: 'Why does a channel labeled "4K" sometimes look soft?', a: 'Labels describe the broadcast tier, not a guarantee. A channel marketed as 4K but sourced from an upscaled HD feed will look like upscaled HD, regardless of what the label claims.' },
];

export default {
  slug: 'guides/4k-vs-hd-streaming',
  title: 'Does 4K Actually Look Different? A Real Test',
  description: 'A practical look at when 4K resolution is actually visible, the bandwidth cost involved, and why login format has nothing to do with picture quality.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }]),
    articleSchema({ headline: 'Does 4K Actually Look Different?', description: 'A practical look at when 4K resolution is actually visible versus when it isn\'t.', path: '/guides/4k-vs-hd-streaming/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: '4K vs HD Streaming' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>A resolution test you can actually run yourself</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 250 h12 M250 250 v12 M290 250 h-12 M290 250 v12 M250 290 h12 M250 290 v-12 M290 290 h-12 M290 290 v-12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>', '4K vs HD resolution illustration')}</div>

    <h2>The quick answer, then the honest caveat</h2>
    ${answerBox('<p>Yes, 4K is a real jump in pixel density over HD — but "the resolution is higher" and "you will notice it from the couch" are two separate claims, and only the first one is guaranteed.</p>')}

    <h2>Run this test on your own setup</h2>
    <p>Sit at your usual viewing distance and pull up something you know was mastered in native 4K. Then switch to a channel you suspect is upscaled. If you can't tell the two apart without squinting, your screen size or distance is the limiting factor — not the stream.</p>

    <h2>The raw pixel math</h2>
    ${comparisonTable(
      ['', 'Pixel dimensions', 'Total pixels'],
      [
        ['HD (1080p)', '1920 x 1080', '~2.07 million'],
        ['4K (Ultra HD)', '3840 x 2160', '~8.3 million'],
      ]
    )}
    <p class="small muted">Four times the pixel count on paper — how much of that reaches your eyes depends on the rest of this guide.</p>

    <h2>Three things stand between "4K exists" and "you see 4K"</h2>
    <p><strong>The source footage itself</strong> — plenty of channels labeled 4K are actually upscaled HD, and no amount of bandwidth fixes that. <strong>Your screen and seating distance</strong> — the extra pixel density is genuinely hard to perceive under about 55 inches at a normal couch distance. <strong>Sustained bandwidth</strong> — 4K needs roughly 25 Mbps held steady, not just available at peak.</p>

    <h2>What this has nothing to do with</h2>
    <p>Whether your login uses Xtream Codes or an M3U link makes zero difference to any of the above. Authentication format and video resolution are entirely separate systems — one gets you into the service, the other determines what you see once you're in.</p>

    <h2>A cheaper way to find out than buying a bigger TV</h2>
    <p>Before assuming a screen upgrade is the fix, rule out the connection and the source first — both cost nothing to check and are far more often the actual culprit.</p>

    <h2>Getting more out of what you already have</h2>
    <p>Ethernet over Wi-Fi for anything approaching 4K, a device released in the last few years, and an honest look at whether your connection sustains 25 Mbps rather than just advertises it. Device-specific notes live on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Run the test yourself before deciding', lead: 'The 24-hour trial puts real channels on your real screen for a dollar.' })}
`,
};
