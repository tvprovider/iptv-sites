import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Can Wi-Fi handle 4K, or does it have to be wired?', a: 'A strong, stable Wi-Fi signal can absolutely handle 4K. Ethernet just removes the variables — wall interference, router distance — that make Wi-Fi less predictable, especially for Smart TVs sitting far from the router.' },
  { q: 'Does someone else streaming on the same Wi-Fi hurt my quality?', a: "Yes. Any device pulling bandwidth at the same time — another stream, a big download, a video call — eats into what's actually left for your 4K playback." },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: '4K Streaming: Internet Speed You Actually Need',
  description: 'The real internet speed and connection setup needed for smooth 4K IPTV streaming — not just the marketing minimum.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'Internet Requirements for 4K Streaming', description: 'The internet speed actually needed for smooth 4K streaming.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What your connection actually needs for 4K</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p><strong>25 Mbps sustained, not a one-time speed-test peak, is the practical floor for smooth 4K.</strong> A wired connection makes hitting that number more consistent. Slower connections don\'t necessarily fail — they usually just drop resolution automatically instead.</p>')}

    <h2>Speed by resolution, roughly</h2>
    ${comparisonTable(
      ['Resolution', 'Recommended sustained speed'],
      [
        ['Standard definition', '3+ Mbps'],
        ['HD (1080p)', '5–10 Mbps'],
        ['4K (Ultra HD)', '25+ Mbps'],
      ]
    )}
    <p class="small muted">Treat these as a starting point — actual demands shift with content and how it's compressed.</p>

    <h2>Why wired tends to beat wireless here</h2>
    <p>Ethernet sidesteps everything that makes Wi-Fi inconsistent — walls, distance from the router, other networks nearby. A Smart TV or box sitting in a far corner of the house is exactly where a powerline adapter or a Wi-Fi extender earns its cost.</p>

    <h2>What else eats into your bandwidth</h2>
    <ul>
      <li>Other devices actively streaming, downloading, or on a video call at the same time</li>
      <li>An aging router that can't keep up with modern demands</li>
      <li>The gap between advertised speed and what your ISP actually delivers during peak hours</li>
    </ul>

    <h2>How to actually check your speed</h2>
    <p>Test from the same device, on the same network, at the time you'd normally be watching — peak-hour congestion can drag numbers down from what a midday test shows.</p>

    <h2>What a slow connection actually looks like in practice</h2>
    <p>Compatible player apps typically step down resolution automatically or buffer briefly rather than failing outright when bandwidth can't keep up — that's expected adaptive behavior, not a broken service.</p>

    <h2>Test it on your own network first</h2>
    <p>Nothing beats trying it directly — the <a href="/trial/">24-hour trial</a> shows exactly how your specific setup performs before you commit to a subscription.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Put your connection to the actual test', lead: 'A 24-hour trial shows real performance on your real network.' })}
`,
};
