import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV as a technology is simply a method of delivering video over the internet — legality depends on whether the specific content being streamed is properly licensed. Users are responsible for understanding the rules that apply in their own location.' },
  { q: 'Do I need special hardware for IPTV?', a: 'No. Any device that can run a compatible player app — a Smart TV, streaming box, phone, tablet, or computer with an internet connection — is enough.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Plain-Language Explanation | America IPTV',
  description: 'A clear, direct explanation of what IPTV is, how it delivers American live channels over the internet, and how it differs from cable or satellite.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV?', description: 'A plain-language explanation of IPTV.', path: '/guides/what-is-iptv/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, explained without the jargon</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p><strong>IPTV stands for Internet Protocol Television</strong> — television delivered as internet data instead of through a satellite dish, coaxial cable line, or antenna signal. You watch it through a player app on a Smart TV, streaming box, phone, tablet, or computer, the same way you would open any other streaming app.</p>')}

    <h2>The short version</h2>
    <p>A cable box receives a dedicated broadcast signal wired or beamed directly to your address. An IPTV player app instead requests channel data over your regular internet connection, the same pipe your Wi-Fi already uses for everything else. There is no separate coaxial line, no dish alignment, and no technician visit involved in receiving the signal itself.</p>

    <h2>Why this matters for American viewers</h2>
    <p>Cable and satellite providers in the US are built around fixed service areas — what you can get, and at what price, often depends on your ZIP code and which provider serves your building. Because IPTV only needs an internet connection, the same subscription generally works the same way whether you're in an apartment, a rental, or moving across the country.</p>

    <h2>What you actually need</h2>
    <ul>
      <li>An internet connection with enough sustained bandwidth for streaming</li>
      <li>A device that can run a player app — Smart TV, Fire TV/Firestick, Android TV, phone, tablet, Windows, or macOS</li>
      <li>A player app that accepts an M3U playlist URL or an Xtream Codes-style login</li>
      <li>Activation details from your IPTV provider</li>
    </ul>

    <h2>Live channels vs. on-demand</h2>
    <p>Most IPTV services, this one included, bundle two different things: live channels that run on a fixed schedule like normal broadcast TV, and an on-demand library you start whenever you want, closer to a movie/series streaming app. Both are typically included in the same subscription rather than sold separately.</p>

    <h2>Where "4K" fits into this</h2>
    <p>IPTV is a delivery method, not a resolution — 4K availability depends on the original broadcast source, your plan, and your device's decoding power, not on IPTV as a technology. See <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming</a> for the specifics.</p>

    <h2>Trying it yourself</h2>
    <p>The cheapest way to see whether this actually fits how you watch TV is our <a href="/trial/">24-hour trial</a> — a low-cost way to check real channel availability and streaming quality on your own connection before committing. The <a href="/setup-guide/">Setup Guide</a> covers activation for every supported device.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to try IPTV for yourself?', lead: 'Test real streaming quality with our 24-hour trial, or compare subscription plans.' })}
`,
};
