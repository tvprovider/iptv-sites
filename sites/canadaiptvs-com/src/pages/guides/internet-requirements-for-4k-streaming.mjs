import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Can Wi-Fi handle 4K, or does it need to be wired?', a: 'A strong, stable Wi-Fi signal can manage 4K fine, but Ethernet removes the variability entirely — worth the extra cable run for a Smart TV or streaming box specifically.' },
  { q: 'Does someone else on the network slow my stream down?', a: 'It can. Downloads, video calls, or another stream running at the same time all draw from the same shared bandwidth your connection has available.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'Internet Speed Needed for 4K IPTV',
  description: 'The internet speed 4K IPTV actually needs, what quietly eats into your bandwidth at home, and how to test your own connection before subscribing.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'Internet Requirements for 4K Streaming', description: 'The internet speed 4K IPTV actually needs.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What your connection actually needs to handle for 4K</h1>
    <div class="guide-illustration">${iconMedia('<path d="M250 278 a28 28 0 0 1 40 0 M256 268 a18 18 0 0 1 28 0 M262 258 a8 8 0 0 1 16 0" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="286" r="3" fill="#ffffff"/>', 'Internet requirements illustration')}</div>
    ${answerBox('<p>Budget for a sustained 25 Mbps download speed on whatever device is doing the streaming, and use a wired connection where the setup allows it. Falling short of that number rarely kills the stream outright — a compatible player usually just steps down to a lower resolution automatically instead.</p>')}

    <h2>What each resolution tier realistically needs</h2>
    ${comparisonTable(
      ['Resolution', 'Sustained speed to aim for'],
      [
        ['Standard definition', '3+ Mbps'],
        ['HD (1080p)', '5-10 Mbps'],
        ['4K (Ultra HD)', '25+ Mbps'],
      ]
    )}
    <p class="small muted">Treat these as a floor, not an exact figure — actual bandwidth use shifts with content and compression.</p>

    <h2>The case for a physical cable</h2>
    <p>Ethernet sidesteps everything Wi-Fi struggles with: walls, distance from the router, and a neighboring network fighting for the same channel. A streaming box sitting far from the router usually benefits more from a powerline adapter or a mesh extender than from upgrading to a faster internet plan.</p>

    <h2>What's silently competing for your bandwidth</h2>
    <ul>
      <li>Other devices on the same Wi-Fi mid-download, on a video call, or streaming something else</li>
      <li>Router hardware old enough to bottleneck modern streaming loads on its own</li>
      <li>The real-world gap between an advertised plan speed and what shows up during peak evening hours</li>
    </ul>

    <h2>Testing it the right way</h2>
    <p>Run the speed test from the actual device and network you intend to watch on, at your normal viewing time — an evening result is often noticeably lower than whatever a midday test shows.</p>

    <h2>When the number falls short</h2>
    <p>Most compatible player apps handle this gracefully — a brief buffer or a resolution drop rather than the stream failing entirely. That's expected adaptive behavior, not a malfunction.</p>

    <h2>Faster than guessing</h2>
    <p>The <a href="/trial/">24-hour trial</a> settles this definitively for a dollar — it puts real performance on your own network in front of you before any longer commitment.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Put your own network to the test', lead: 'Start the 24-hour trial and see exactly how it performs on your connection.' })}
`,
};
