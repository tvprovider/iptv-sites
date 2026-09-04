import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is streaming TV over the internet actually legal?', a: 'The delivery method itself is just a technology — legality comes down to whether the specific content being sent through it is properly licensed. It is on each viewer to understand the rules where they live.' },
  { q: 'Does it need special equipment?', a: 'No specialized box is required. Anything that can install and run a compatible player app — a Smart TV, a streaming stick, a phone, or a computer — already has what it needs.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Plain Explanation',
  description: 'What IPTV actually is, how Canadian live channels reach you over the internet instead of cable or satellite, and what you need to get started.',
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
    <h1>IPTV, without the jargon</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV stands for Internet Protocol Television — channels delivered to you as ordinary internet data instead of arriving through a satellite dish, a coaxial line, or an antenna. A player app on your Smart TV, streaming box, phone, or computer displays it, the same way any other streaming app on that device works.</p>')}

    <h2>The mechanical difference from cable</h2>
    <p>A cable box pulls a dedicated signal wired directly to your address. IPTV skips that entirely — the player app requests channel data over whatever internet connection your household is already using for everything else. No dish to point, no separate cable run, no scheduled install appointment for the signal itself.</p>

    <h2>Why that matters more in a country this size</h2>
    <p>Traditional TV providers in Canada build their footprint around specific service areas — what you can get, and what it costs, often hinges on which company happens to serve your particular building or region. An internet-delivered service does not carry that same geography problem: the subscription behaves the same in a downtown condo, a small town, or after a move to a different province.</p>

    <h2>The short list of requirements</h2>
    <ul>
      <li>An internet connection with steady bandwidth for streaming</li>
      <li>A device capable of running a player app — Smart TV, Fire TV/Firestick, Android TV, phone, tablet, Windows, or macOS</li>
      <li>A player app built to accept an M3U playlist link or an Xtream Codes-style login</li>
      <li>The activation details your provider sends after signup</li>
    </ul>

    <h2>Both live and on-demand under one roof</h2>
    <p>Most services in this category, including this one, fold two formerly separate things into a single subscription: scheduled live channels running like conventional broadcast TV, and an on-demand library available whenever you want it — usually with no extra tier required for either.</p>

    <h2>Where resolution fits into the picture</h2>
    <p>IPTV describes the delivery method, not the sharpness of what arrives — 4K depends on the original broadcast source, your plan, and how capable your device is at decoding it. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming</a> breaks that down in more detail.</p>

    <h2>Confirming it works before you commit</h2>
    <p>Explanations only go so far — the <a href="/trial/">24-hour trial</a> puts real channels on your own connection for a dollar, before a longer plan enters the picture. Every supported device gets its own walkthrough on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it running on your own setup', lead: 'The 24-hour trial tests real streaming quality, or jump straight to comparing plans.' })}
`,
};
