import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is Wi-Fi good enough for 4K streaming?', a: 'Wi-Fi can work well for 4K streaming if your signal is strong and stable, but a wired Ethernet connection is more reliable, especially for Smart TVs and streaming boxes.' },
  { q: 'Does using multiple devices at once affect streaming quality?', a: 'Yes — other devices on your network using bandwidth simultaneously (downloads, video calls, other streaming) can affect your available speed for 4K streaming.' },
];

export default {
  slug: 'guides/internet-requirements-for-4k-streaming',
  title: 'Internet Requirements for 4K Streaming | 4K Streaming',
  description: 'The internet speed and connection quality you need for smooth 4K IPTV streaming, explained clearly.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }]),
    articleSchema({ headline: 'Internet Requirements for 4K Streaming', description: 'The internet speed you need for smooth 4K streaming.', path: '/guides/internet-requirements-for-4k-streaming/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Internet Requirements' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>Internet requirements for 4K streaming</h1>
    ${answerBox('<p><strong>For smooth 4K streaming, we recommend at least 25 Mbps of sustained download speed</strong> on the device you\'re streaming to, ideally over a wired connection. Lower speeds can still work but may result in the stream automatically dropping to a lower resolution.</p>')}

    <h2>Recommended speeds by resolution</h2>
    ${comparisonTable(
      ['Resolution', 'Recommended sustained speed'],
      [
        ['Standard definition', '3+ Mbps'],
        ['HD (1080p)', '5–10 Mbps'],
        ['4K (Ultra HD)', '25+ Mbps'],
      ]
    )}
    <p class="small muted">These are general guidelines — actual requirements vary based on the specific content and compression used.</p>

    <h2>Wired vs. Wi-Fi</h2>
    <p>A wired Ethernet connection is generally more stable than Wi-Fi because it isn't affected by wall interference, distance from your router, or competing wireless networks. If your Smart TV or streaming box is far from your router, consider a powerline adapter or Wi-Fi extender to improve signal strength.</p>

    <h2>Other factors that affect your available bandwidth</h2>
    <ul>
      <li>Other devices streaming, downloading, or video-calling on the same network at the same time</li>
      <li>Your router's age and capability</li>
      <li>Your internet provider's actual delivered speed versus advertised speed, especially during peak hours</li>
    </ul>

    <h2>How to check your actual speed</h2>
    <p>Run a speed test on the same device and network you plan to stream on, ideally at the time of day you usually watch, since speeds can vary during peak usage hours.</p>

    <h2>What happens if your connection isn't fast enough</h2>
    <p>Most compatible player apps will automatically adjust to a lower resolution or show buffering if your connection can't sustain 4K. This is a normal adaptive behavior, not a sign that the service itself is broken.</p>

    <h2>Test your own setup</h2>
    <p>The best way to know if your connection and device are ready for 4K is to test them directly — our <a href="/trial/">24-hour trial</a> lets you do exactly that before subscribing.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to test your connection?', lead: 'Start a 24-hour trial and see real streaming performance on your own network.' })}
`,
};
