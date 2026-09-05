import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';
import { catalog } from '../../data/business.mjs';

const faqs = [
  { q: 'Is streaming IPTV legal?', a: 'IPTV just names the delivery method — a stream over an internet connection instead of a dish or a cable box. Whether any given stream is properly licensed is a separate question, and it\'s on the subscriber to satisfy themselves of that for their own region.' },
  { q: 'Does a bigger channel-count number automatically mean a better service?', a: 'Not on its own. It says nothing about whether the specific channels or titles you care about are actually there, whether the library gets kept up to date, or whether a message to support gets answered. Those need checking separately.' },
  { q: 'Why do so many listings lean on the word "premium" instead of listing what\'s inside?', a: 'Because an adjective is free to print and hard to fact-check, while a category breakdown against a real trial isn\'t. That gap is exactly why this page describes the catalog in categories rather than a slogan.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? What "Premium" Actually Includes',
  description: 'What IPTV is, and what a genuinely premium catalog actually includes: live channels, VOD, and how to tell a maintained library from a stale one.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV? What "Premium" Actually Includes', description: 'What a genuinely premium IPTV catalog actually includes, category by category.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV is a delivery method. It has nothing to say about whether a service is any good.</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    <p>Strip the acronym down and it\'s simple: a player app asks a server for a stream, and plays back whatever arrives, over a regular internet connection instead of a satellite dish or a coaxial line. Every provider does roughly that same thing under the hood, which is exactly why the mechanism itself tells you nothing useful. Searches for "premium iptv service" or "top rated iptv service" are really asking a different question — what\'s actually behind the adjective.</p>

    <h2>Two different ways to answer that</h2>
    <p>Plenty of listings answer with a large round number and a vague label — "40,000+ channels," "premium," "top rated" — and a price you only find after handing over an email address. None of that confirms the catalog is maintained, that a cheaper plan isn\'t quietly thinner, or that a support message gets a real reply. The alternative is to name the pieces individually and let a trial verify them before any money changes hands for a longer term.</p>

    ${answerBox(`<p>Here\'s that second version: the catalog broken into what it\'s actually built from, alongside the operating habits — support, pricing — that this site is trying to hold itself to rather than just claim.</p>`)}

    <h2>The catalog, broken down</h2>
    ${comparisonTable(
      ['Part of the catalog', 'What it covers'],
      [
        ['Live channels', `${catalog.liveChannels} channels spanning entertainment, news, sport, and international programming`],
        ['On-demand library', `${catalog.vods} film and series titles, kept current rather than left to go stale`],
        ['Resolution ceiling', 'Up to 4K, contingent on plan, device, and the original broadcast'],
        ['Consistency across plans', 'Identical on the shortest and longest term — nothing reserved for a pricier plan'],
      ]
    )}
    <p>Every term listed on <a href="/pricing/">Pricing</a> reaches the exact catalog above — none of it is exclusive to a particular plan length.</p>

    <h2>What a single number can\'t answer</h2>
    <p>A headline count doesn\'t say whether the one channel or title you\'re actually after made the cut — that\'s only settled by checking it directly, which a real trial makes possible. It also says nothing about sharpness on screen: that\'s governed by how a broadcast was produced and what\'s playing it back, independent of how large the catalog behind it is. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> goes into that second part specifically.</p>

    <h2>From an inbox to a working screen</h2>
    <p>Once an order or trial clears, an email arrives with one login. Whatever player app gets installed uses that login to pull up the catalog above — the specific steps vary by hardware, which is why the <a href="/setup-guide/">Setup Guide</a> covers each supported device on its own rather than one instruction set for everything.</p>

    <h2>None of this has to be trusted blind</h2>
    <p>A dollar and a day of the <a href="/trial/">24-hour trial</a> is enough to check it directly — the real catalog, not a sample of it, and enough time to send support an actual question and see how the answer holds up.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the catalog yourself', lead: 'A dollar and 24 hours settles it faster than another page of copy.' })}
`,
};
