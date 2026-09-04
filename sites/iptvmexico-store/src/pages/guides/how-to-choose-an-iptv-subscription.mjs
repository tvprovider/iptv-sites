import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Do I need a VPN to watch Liga MX from the US?', a: 'No. The channels stream directly to your login over your own internet connection — there is no geographic switch to work around, so a VPN adds nothing here.' },
  { q: 'What time does a Liga MX match actually kick off on the US East Coast?', a: 'Most Liga MX fixtures kick off in the early-to-mid evening in Mexico City time (Central Time), which typically lands one hour later on the US East Coast and stays the same on US Central — worth double-checking match by match, since exact kickoff times shift week to week.' },
  { q: 'Is "mejor iptv mexico" mostly about price, or something else?', a: 'Price is one factor, but the more useful comparison is whether Liga MX, Selección Mexicana, and the specific regional or news channel you want are named directly rather than folded into a vague "Latin American" category — see the checklist below.' },
];

export default {
  slug: 'guides/how-to-choose-an-iptv-subscription',
  title: 'Watching Liga MX & Mexican TV From Outside Mexico',
  description: 'A practical guide to watching Liga MX and Mexican TV from the US: what changes vs. cable, kickoff-time planning, and how to pick a real provider.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Watching From Outside Mexico' }]),
    articleSchema({ headline: 'Watching Liga MX & Mexican TV From Outside Mexico', description: 'What changes when watching Mexican TV from the US, and how to choose a real Mexican-channel IPTV provider.', path: '/guides/how-to-choose-an-iptv-subscription/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'Watching From Outside Mexico' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What actually changes when you watch Mexican TV from outside Mexico</h1>
    <div class="guide-illustration">${iconMedia('<rect x="250" y="250" width="40" height="40" rx="4" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M257 270 l8 8 l16 -16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Watching Liga MX from outside Mexico illustration')}</div>
    ${answerBox('<p>A large number of people searching "iptv mexico" or "iptv para mexicanos en usa" already know exactly what they want — Liga MX, Selección Mexicana, novelas — and just want to know what actually changes once they\'re watching from a US address instead of a Mexican one. The honest answer: less than most people expect, and the differences that do exist are worth knowing in advance rather than discovering mid-match.</p>')}

    <h2>What stays exactly the same</h2>
    <p>The channels themselves don\'t change based on where you\'re sitting. A login built around Liga MX, Selección Mexicana, and Mexican news and entertainment channels streams identically whether the device receiving it is in Monterrey or in Chicago — there\'s no separate "export" version of the catalog with anything quietly stripped out.</p>

    <h2>What actually does change</h2>
    ${comparisonTable(
      ['', 'A Mexican cable subscription', 'IPTV, watched from the US'],
      [
        ['Physical box or dish required', 'Yes, tied to a Mexican address', 'No — any device with an internet connection works'],
        ['Kickoff time shown on-screen', 'Mexico City / Central Time', 'Same broadcast time, converted to your own local clock'],
        ['Available while traveling within the US', 'No', 'Yes, on the same login'],
        ['Requires a Mexican billing address', 'Yes', 'No'],
      ]
    )}

    <h2>The one real adjustment: kickoff times</h2>
    <p>Liga MX fixtures are scheduled on Mexico City time. Most of the US East Coast runs an hour ahead of that, while US Central lines up with it directly, and US Mountain and Pacific sit one and two hours behind respectively. A match that kicks off at 7:00 PM in Mexico City lands around 8:00 PM Eastern, 7:00 PM Central, 6:00 PM Mountain, or 5:00 PM Pacific — worth a quick mental note before a weekend matchday, since exact kickoff times still shift week to week with the actual broadcast schedule.</p>

    <h2>A practical checklist for choosing a real Mexican-channel provider</h2>
    <p>Not every listing that mentions Mexico actually built for it. A few concrete things to check before paying for one:</p>
    <ul>
      <li><strong>Does it name Liga MX directly</strong>, or only a vague "Latin American football" category?</li>
      <li><strong>Is Selección Mexicana called out specifically</strong>, separate from league coverage?</li>
      <li><strong>Does the on-demand library include novelas</strong>, or is that assumed rather than confirmed?</li>
      <li><strong>Does the trial run the actual Mexican lineup</strong>, or a generic demo that doesn\'t confirm any of the above?</li>
      <li><strong>Is the price and refund policy visible without a signup wall</strong> — a provider confident in its own Mexican coverage usually doesn\'t hide the numbers either.</li>
    </ul>

    <h2>Households that split their week between two languages</h2>
    <p>A household following Liga MX on Saturday and an English-language series on Tuesday shouldn\'t need two separate logins to do it. The point of pairing a genuine Mexican lineup with the full English and international catalog on the same subscription is exactly that — one login, whichever language ends up on the screen.</p>

    <h2>Checking it yourself before committing</h2>
    <p>The fastest way to confirm any of the above is to actually watch a fixture. The <a href="/trial/">24-hour trial</a> runs the identical lineup a paying subscriber gets, for one dollar — enough time to pull up a Liga MX match at its converted local kickoff and see whether everything above holds up in practice.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it on your own schedule', lead: 'The 24-hour trial puts the real Mexican lineup in front of you for a dollar.' })}
`,
};
