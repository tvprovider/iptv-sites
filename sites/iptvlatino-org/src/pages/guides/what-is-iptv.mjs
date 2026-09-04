import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV even legal?', a: 'IPTV describes a delivery method, not a legal category — video sent as internet data rather than through a satellite dish or a cable line. Whether any particular stream is properly licensed is a separate question, and understanding that for your own location falls to the subscriber.' },
  { q: 'Does "40,000 channels" mean 40,000 things a Spanish-speaking household would actually watch?', a: 'No provider honestly claims that of any total. A meaningful chunk of any large count is niche, regional, or duplicated across language variants. What actually matters is whether the specific Latin American and Spanish channels you care about are present and current.' },
  { q: 'Does going heavy on Spanish-language content thin out the English side?', a: 'No. The English and international portion of the catalog stays the same full set on every plan, independent of how deep the Spanish-language side runs.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV Latino? Channel Count, Explained',
  description: 'What IPTV actually is, and what a "40,000+ channels" number concretely means for Spanish-language and Latin American channel breadth.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV Latino? Channel Count, Explained', description: 'IPTV explained, plus what a large channel-count claim actually means for Spanish-language coverage.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What a channel count is hiding, especially for a bilingual household</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV stands for Internet Protocol Television: programming and on-demand video sent as ordinary internet data instead of arriving through a satellite dish, a cable box, or a broadcast antenna. A player app on your device requests a channel or a title from a server and plays back what comes through — the mechanics are the same for every provider out there. What actually varies, and matters more for a household splitting time between two languages, is what sits behind the number on the landing page.</p>')}

    <h2>The one figure everyone leads with</h2>
    <p>Every listing opens with a channel total and a VOD total, and searches like "iptv en español" or "canales latinos en vivo" tend to surface the same style of big round figure with almost no context underneath it. A total alone doesn't say how much of it is genuinely Spanish-language, how much is Latin American specifically, or whether the English side got quietly trimmed to pad the count elsewhere.</p>

    <h2>Pulling a big total apart</h2>
    <p>A catalog running into the tens of thousands is usually stitched together from several distinct pieces: major English-language and international networks, Spanish-language news and entertainment channels, Latin American feeds split out by country, and separate novela and film libraries on the VOD side. On IPTV Latino, the Spanish-language and Latin American slice is a deliberately built-out, substantial piece of that total — not a handful of channels bolted onto an English-first base, and not the entirety of the count either, since the full English and international lineup sits alongside it, untouched.</p>

    <h2>What that split looks like in practice</h2>
    ${comparisonTable(
      ['Category', 'What it typically covers'],
      [
        ['Fútbol & Latin American sports', 'Liga MX, La Liga, Copa Libertadores, and other major league and continental fixtures'],
        ['Spanish-language entertainment & news', 'General entertainment, novelas, and round-the-clock news channels'],
        ['Latin American regional feeds', 'Channels grouped by country and region across the region'],
        ['English & international', 'The identical full set every plan carries, regardless of how deep the Spanish side runs'],
      ]
    )}

    <h2>A sharper question than the total</h2>
    <p>"How many of these are genuinely Spanish-language or Latin American, and does the English catalog still show up intact?" is narrower and easier to check than a bare channel count. Anyone landing here after searching "spanish iptv channels" or "best iptv for latino families" deserves an answer in those terms, not just a bigger headline number than the last listing they saw.</p>

    <h2>Turning that login into something watchable</h2>
    <p>A compatible player app connects through either a single M3U playlist address or a username/password/server trio — the Xtream Codes shape. Both reach the same underlying catalog; which one shows up depends on how the account was activated, and the <a href="/setup-guide/">Setup Guide</a> covers entering either correctly.</p>

    <h2>Where picture quality comes into it</h2>
    <p>Resolution is an entirely separate matter from catalog breadth — it's set by the original source, the device playing it back, and the connection carrying it, whether that's a fútbol broadcast or an English-language channel. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> covers the specifics.</p>

    <h2>The cheapest way to verify all of this</h2>
    <p>Rather than take a landing page's total at face value, the <a href="/trial/">24-hour trial</a> puts the actual catalog in front of you for a dollar — enough time to confirm the specific leagues, novelas, and English channels your household actually watches are genuinely there.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the bilingual catalog yourself', lead: 'A dollar and 24 hours beats trusting a number on a landing page.' })}
`,
};
