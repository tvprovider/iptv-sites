import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV as a technology is simply a method of delivering video over the internet — legality depends on whether the specific content being streamed is properly licensed. Users are responsible for understanding the rules that apply in their own location.' },
  { q: 'Do I need special hardware for IPTV?', a: 'No special hardware is required beyond a device that can run a compatible player app — a Smart TV, streaming box, phone, tablet, or computer with an internet connection is enough.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Plain-Language Explanation | 4K Streaming',
  description: 'A clear, direct explanation of what IPTV is, how it works, and how it differs from traditional cable or satellite TV.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV?', description: 'A plain-language explanation of IPTV.', path: '/guides/what-is-iptv/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What is IPTV?</h1>
    ${answerBox('<p><strong>IPTV (Internet Protocol Television)</strong> is a method of delivering television content — live channels and on-demand video — as data over an internet connection, instead of through traditional satellite, cable, or terrestrial broadcast signals. You watch it through a compatible player app on a Smart TV, streaming box, phone, tablet, or computer.</p>')}

    <h2>How IPTV works</h2>
    <p>Traditional TV broadcasts a signal over the air, satellite, or a dedicated cable line. IPTV instead breaks video into data packets and sends them over the same internet infrastructure used for browsing, streaming video services, or downloading files. Your device runs a player app that requests this data and decodes it into a picture, similar to how a video streaming app works.</p>

    <h2>IPTV vs. traditional TV</h2>
    <p>The core difference is the delivery method. Traditional TV requires a dedicated line or antenna and, in many cases, a fixed set-top box tied to your address. IPTV only requires an internet connection, which makes it inherently more flexible — the same subscription can often move between devices and locations as long as you have internet access.</p>

    <h2>What you need to use IPTV</h2>
    <ul>
      <li>A stable internet connection</li>
      <li>A compatible device (Smart TV, streaming box, phone, tablet, or computer)</li>
      <li>A compatible player app that supports M3U playlists or Xtream Codes-style logins</li>
      <li>Activation details from your IPTV provider</li>
    </ul>

    <h2>Live channels vs. on-demand content</h2>
    <p>IPTV services can offer both live channels, which stream on a fixed schedule like traditional TV, and on-demand content, which you can start whenever you like. The exact mix depends on the provider and plan.</p>

    <h2>Where 4K fits in</h2>
    <p>Because IPTV is just a delivery method, the resolution you can stream — including up to 4K — depends on the source content, your plan, and your device's decoding capability, not on IPTV itself. See our guide on <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming</a> for more detail.</p>

    <h2>Getting started</h2>
    <p>If you want to try IPTV yourself, our <a href="/trial/">24-hour trial</a> is a low-cost way to test real streaming quality on your own device before committing to a subscription. Our <a href="/setup-guide/">Setup Guide</a> covers activation step by step.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to try IPTV for yourself?', lead: 'Test real streaming quality with our 24-hour trial, or compare subscription plans.' })}
`,
};
