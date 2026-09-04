import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';
import { catalog } from '../../data/business.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV describes a delivery method, not a legal category — video sent as internet data rather than through a satellite dish or a cable line. Whether any specific stream is properly licensed is a separate question, and confirming that for your own location falls to the subscriber.' },
  { q: `Does "${catalog.liveChannels} channels" mean that many things worth watching?`, a: 'No provider can honestly claim that of any total. A meaningful share of any large count is niche, regional, or duplicated feeds. What actually matters is a breakdown of the categories, not the headline figure alone.' },
  { q: 'Why do totals vary so much between providers advertising the same content?', a: 'Counting methods differ — some list every regional variant of a channel separately, some fold VOD titles into the same number as live channels. A category breakdown side-steps the discrepancy; a bare total does not.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Channel List, Explained',
  description: 'What IPTV actually is, and what an itemized iptv channel list looks like once a big total gets broken into real categories instead of one number.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV? A Channel List, Explained', description: 'IPTV explained, plus what an itemized channel list actually breaks down into.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>What a bare channel total leaves out of an iptv channel list</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>The letters stand for Internet Protocol Television — a fancy way of saying the picture travels to your screen as regular internet data rather than through a satellite dish or a coaxial cable line. A player app you install requests something from a server and displays whatever comes back, and that basic mechanism barely changes from one provider to the next. What genuinely separates one provider from another sits behind the headline number, not in how the video technically arrives.</p>')}

    <h2>Why the headline number tells you so little on its own</h2>
    <p>Type "iptv channel list" or "updated iptv list" into a search bar and page after page opens with a five-digit figure and stops there. A number by itself does not say whether it is current this month, whether it groups anything sensibly, or whether a single feed got counted three times under three regional names to inflate the total.</p>

    <h2>What actually makes up a number that large</h2>
    <p>Get past the headline figure and a catalog this size is really several separate pieces stacked together: broadcast networks, sports coverage, round-the-clock news, general entertainment, programming for younger viewers, local and regional feeds, and a film-and-series library kept apart from the live count. IPTV List publishes that breakdown rather than asking you to assume it — a checklist works only if each line item is something you can actually go check for yourself.</p>

    <h2>What the breakdown looks like here</h2>
    ${comparisonTable(
      ['Category', 'What it typically covers'],
      [
        ['Live sports', 'Major leagues and recurring fixtures across a range of sports'],
        ['News & entertainment', 'Round-the-clock news channels alongside general entertainment programming'],
        ['Kids & family', 'Programming blocks aimed at younger viewers'],
        ['Regional & local feeds', 'Channels grouped by country or region'],
        ['VOD library', `${catalog.vods} film and series titles, separate from the live channel count`],
      ]
    )}

    <h2>A question worth asking instead of the total</h2>
    <p>Swap "how many channels" for "which categories make up that number, and is the one I actually care about in there." That version has an answer someone can verify in a couple of minutes, unlike a raw figure typed into a search box for "best iptv providers list" or "iptv comparison list" results, where every page tends to quote a bigger number than the last one without saying what it covers.</p>

    <h2>Getting from a login to a picture on screen</h2>
    <p>Once the activation email arrives, a player app installed on your device takes that login and pulls the list through it. Every supported device has its own walkthrough on the <a href="/setup-guide/">Setup Guide</a> for that exact step.</p>

    <h2>A separate question: picture quality</h2>
    <p>How sharp something looks has nothing to do with how large the catalog is — that comes down to the original recording, the device displaying it, and the connection carrying it there. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> unpacks that separately.</p>

    <h2>The one-dollar way to settle it</h2>
    <p>Instead of trusting whatever a listing claims, the <a href="/trial/">24-hour trial</a> hands you the actual catalog for a day, for one dollar — plenty of time to look for the exact channels and titles your household cares about and see whether they are really there.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Check the list yourself', lead: 'A dollar and 24 hours beats trusting a number on a landing page.' })}
`,
};
