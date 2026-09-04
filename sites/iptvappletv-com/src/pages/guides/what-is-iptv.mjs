import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV as a technology is simply a method of delivering video over the internet — legality depends on whether the specific content being streamed is properly licensed. Users are responsible for understanding the rules that apply in their own location.' },
  { q: 'Does Apple review or approve IPTV content specifically?', a: 'Apple reviews apps submitted to the App Store for policy compliance, but does not vet the specific content a generic player app might be pointed at once installed — that responsibility sits with the app and its user.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV on Apple TV? A Plain-Language Explanation',
  description: 'What IPTV actually is, how it runs on Apple TV specifically through the App Store or sideloading, and how it differs from cable or satellite.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV?', description: 'What IPTV is and how it runs on Apple TV.', path: '/guides/what-is-iptv/', datePublished: '2026-09-03' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, and what it means for an Apple TV owner</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV, short for Internet Protocol Television, is television delivered as internet data rather than through a satellite dish, a coaxial cable line, or an antenna. On Apple TV, that means a player app — from the App Store or sideloaded — requesting channel data over your home network, the same way any other tvOS streaming app works.</p>')}

    <h2>What is actually different, technically</h2>
    <p>A cable box receives a dedicated broadcast signal wired directly to your address. An Apple TV running a compatible IPTV player instead requests that same kind of content over your regular internet connection — the same network your Apple TV already uses for the App Store, AirPlay, and every other streaming app on it.</p>

    <h2>Why Apple TV specifically raises questions others do not</h2>
    <p>Unlike Fire TV or Android TV, tvOS has historically had a narrower, more tightly reviewed App Store, and Apple periodically removes generic IPTV player apps during review sweeps. That is why "is there an app for this" comes up more with Apple TV than with other boxes — it is a real, recurring App Store dynamic, not a sign anything is broken about the concept.</p>

    <h2>What you actually need on Apple TV</h2>
    <ul>
      <li>An Apple TV HD or any Apple TV 4K model</li>
      <li>An internet connection with enough sustained bandwidth for streaming</li>
      <li>A compatible player app — App Store when one is listed, sideloaded through Xcode when it is not</li>
      <li>Activation details from your IPTV provider (an M3U URL or an Xtream Codes-style login)</li>
    </ul>

    <h2>Live TV and on-demand, in the same app</h2>
    <p>Most IPTV services, this one included, combine live channels running on a fixed schedule with an on-demand library you start whenever you want — both inside the same player app, not sold as separate products.</p>

    <h2>Where 4K resolution actually comes from</h2>
    <p>IPTV describes the delivery method, not the sharpness — 4K availability depends on the original broadcast source, your Apple TV generation, and the player app's decoding. See <a href="/guides/4k-vs-hd-streaming/">4K vs. HD on Apple TV</a> for the specifics on which Apple TV models actually support it.</p>

    <h2>The low-risk way to find out</h2>
    <p>The <a href="/trial/">24-hour trial</a> is a dollar well spent on confirming your specific Apple TV handles this well, before committing to a longer plan. The <a href="/setup-guide/">Setup Guide</a> covers both installation methods in full.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to try IPTV for yourself?', lead: 'Test real streaming quality with our 24-hour trial, or compare subscription plans.' })}
`,
};
