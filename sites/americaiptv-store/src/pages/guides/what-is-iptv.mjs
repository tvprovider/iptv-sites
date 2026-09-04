import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is streaming IPTV legal to use?', a: 'IPTV is just a delivery method — internet data instead of a dish or cable line. Whether any specific stream is legal comes down to whether the content itself is properly licensed, and that responsibility sits with the viewer and the provider, not the technology.' },
  { q: 'Do I need to buy any special equipment?', a: 'No dedicated hardware is required. If a device can run apps and connect to the internet — a Smart TV, streaming box, phone, tablet, or computer — it can run a compatible IPTV player.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Plain-Language Explanation',
  description: 'IPTV explained simply: how it streams American live channels over the internet instead of cable or satellite, and what you actually need to use it.',
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
    <h1>IPTV, stripped of the acronym soup</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>Strip away the acronym and IPTV just means television that arrives as ordinary internet data, instead of a signal pulled from a satellite dish, a coaxial line, or an over-the-air antenna. You open it the same way you would any other streaming app — through a player app running on a Smart TV, streaming box, phone, tablet, or computer.</p>')}

    <h2>What's actually different under the hood</h2>
    <p>A satellite or cable box is built to receive one specific signal, wired or beamed straight to your address. An IPTV player instead pulls channel data over whatever internet connection is already running your Wi-Fi. No dish to point, no coax line to run through the wall, no technician scheduling a visit to get the signal itself flowing.</p>

    <h2>Why that matters if you move around a lot</h2>
    <p>Cable and satellite in the US are built around fixed footprints — what's on offer, and what it costs, is largely dictated by your ZIP code and whichever provider happens to serve that address. An internet-only setup sidesteps that entirely: the same subscription keeps behaving the same way whether you're in an apartment downtown, a rental across town, or halfway through a cross-country move.</p>

    <h2>The short checklist to actually use it</h2>
    <ul>
      <li>Internet fast enough to sustain streaming, not just handle it in short bursts</li>
      <li>A device capable of running apps — Smart TV, Fire TV/Firestick, Android TV box, phone, tablet, Windows, or macOS</li>
      <li>A player app that reads either an M3U playlist link or an Xtream Codes-style login</li>
      <li>The activation details your provider sends after signup</li>
    </ul>

    <h2>Two catalogs in one subscription</h2>
    <p>Nearly every IPTV service — this one included — folds two separate things into one plan: a live lineup running on a fixed broadcast schedule, and a separate on-demand library you start on your own timeline. Neither is usually sold separately from the other.</p>

    <h2>Does IPTV mean 4K?</h2>
    <p>Not automatically — IPTV describes the delivery pipe, not the picture quality riding through it. Whether something actually looks 4K depends on the original broadcast master, your plan, and what your device can decode. The <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming guide</a> breaks that down further.</p>

    <h2>The cheapest way to find out if it fits you</h2>
    <p>Reading only settles so much — the <a href="/trial/">24-hour trial</a> is a dollar toward finding out whether channel availability and streaming quality actually hold up on your own connection. Device activation steps are on the <a href="/setup-guide/">Setup Guide</a>.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it running for yourself', lead: 'The 24-hour trial tests real streaming quality, or jump straight to comparing plans.' })}
`,
};
