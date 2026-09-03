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
  title: 'What Is IPTV? A Plain-Language Explanation | Canada IPTV',
  description: 'A clear, direct explanation of what IPTV is, how it delivers Canadian live channels over the internet, and how it differs from cable or satellite.',
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
    <h1>What "IPTV" means, in plain terms</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV, short for Internet Protocol Television, is television sent to you as internet data rather than through a satellite dish, a coaxial cable line, or an over-the-air antenna signal. You watch it in a player app on a Smart TV, streaming box, phone, tablet, or computer, the same way you would open any other streaming app.</p>')}

    <h2>What is physically different about it</h2>
    <p>A cable box receives a dedicated broadcast signal wired or beamed to your specific address. An IPTV player app instead requests channel data over your regular internet connection, the same connection your Wi-Fi already handles everything else through. There is no separate coaxial run, no dish alignment, and no technician visit required to receive the signal itself.</p>

    <h2>Why the delivery method matters in Canada</h2>
    <p>Cable and satellite packages here are typically built around a provider's own service area and bundle structure — what is available, and at what price, often comes down to which of a handful of providers actually serves your building or region. Because IPTV only needs an internet connection, the same subscription tends to keep working the same way whether you are in a condo, a rural property, or moving between provinces.</p>

    <h2>What you actually need to use it</h2>
    <ul>
      <li>An internet connection with enough sustained bandwidth for streaming</li>
      <li>A device that can run a player app — Smart TV, Fire TV/Firestick, Android TV, phone, tablet, Windows, or macOS</li>
      <li>A player app that accepts an M3U playlist URL or an Xtream Codes-style login</li>
      <li>Activation details from your IPTV provider</li>
    </ul>

    <h2>Live TV and on-demand, in one subscription</h2>
    <p>Most IPTV services, this one included, combine two things that used to be separate: live channels running on a fixed schedule like normal broadcast TV, and an on-demand library you start whenever you want. Both are typically bundled into the same plan rather than sold as add-ons.</p>

    <h2>Where 4K resolution fits in</h2>
    <p>IPTV describes how content reaches you, not how sharp it looks — 4K availability comes down to the original broadcast source, your plan, and your device's decoding power. See <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming</a> for the specifics.</p>

    <h2>The low-risk way to check</h2>
    <p>Reading about it only goes so far — the <a href="/trial/">24-hour trial</a> lets you check real channel availability and streaming quality on your own connection for a dollar before committing to anything longer. The <a href="/setup-guide/">Setup Guide</a> covers activation for every supported device.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to try IPTV for yourself?', lead: 'Test real streaming quality with our 24-hour trial, or compare subscription plans.' })}
`,
};
