import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV is just a delivery method — video sent as internet data instead of over a satellite dish or cable line. Whether a specific stream is legal depends on whether the content is properly licensed, and that responsibility sits with the subscriber to understand for their own location.' },
  { q: 'Does "40,000 channels" mean 40,000 things worth watching?', a: 'No, and no honest provider would claim that. A large share of any big channel count is niche, regional, or duplicate-language feeds. What actually matters is whether the channels you personally watch are in there and current — not the raw total.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? And What a Channel Count Actually Means',
  description: 'What IPTV actually is, and a plain-language breakdown of what a "40,000+ channels" number really tells you — and doesn\'t.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV? And What a Channel Count Actually Means', description: 'IPTV explained, plus what a large channel-count claim actually tells you.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, and why the channel count on the landing page barely matters</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV — Internet Protocol Television — is television and on-demand video delivered as internet data rather than through a satellite dish, a cable line, or a broadcast antenna. A compatible player app on your device connects to a server, requests the channel and program data, and plays it back. That part is simple. The part worth actually understanding is what happens after "here\'s a big number of channels."</p>')}

    <h2>The number on every landing page</h2>
    <p>Every IPTV provider leads with a channel count and a VOD count. It is the single easiest thing to advertise and the hardest thing for a shopper to verify before paying. A number by itself says nothing about whether those channels are current, whether the on-demand titles get refreshed, or whether the count even changed since the site was built.</p>

    <h2>What a big total actually contains</h2>
    <p>A count in the tens of thousands typically spans several genuinely different things bundled together: major international networks, regional and language-specific feeds, niche interest channels, and often the same channel counted multiple times across different server regions. None of that is dishonest on its own — it is just not the same as "40,000 things you'd actually watch."</p>

    <h2>The question worth asking instead</h2>
    ${comparisonTable(
      ['Question', 'Why it matters more than the total'],
      [
        ['Does new content actually get added?', 'A catalog frozen at launch stops matching what\'s currently popular within weeks.'],
        ['Is live sports coverage tied to current fixtures?', 'A sports channel with last season\'s schedule is functionally useless.'],
        ['Do all plan lengths reach the same catalog?', 'Some providers quietly gate newer content behind a pricier tier.'],
        ['Can you check before paying?', 'A real trial on the real catalog answers this in a day.'],
      ]
    )}

    <h2>How this service handles it</h2>
    <p>The live channel and VOD catalog described on the homepage is not assembled once and left — new releases and current sports fixtures are added continually, and every plan length reaches the identical version of it. That is a narrower, more checkable claim than a channel count, and it is one you can verify directly through the <a href="/trial/">24-hour trial</a> rather than take on faith.</p>

    <h2>Getting a login working</h2>
    <p>A compatible player app connects using either a single M3U playlist link, or a username/password/server trio (an Xtream Codes-style login). Both formats reach the same catalog — which one you're issued depends on activation details, and the <a href="/setup-guide/">Setup Guide</a> covers entering either one correctly.</p>

    <h2>Where picture quality fits in</h2>
    <p>Resolution is a separate question entirely from catalog size or freshness — it comes down to the original source, your device, and your connection. See <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> for the specifics.</p>

    <h2>The low-risk way to check for yourself</h2>
    <p>Rather than trust a number on a page, the <a href="/trial/">24-hour trial</a> puts the actual current catalog in front of you for $1 — enough time to see whether recent releases and this week's sports fixtures are genuinely there.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the current catalog yourself', lead: 'A dollar and 24 hours beats trusting a number on a landing page.' })}
`,
};
