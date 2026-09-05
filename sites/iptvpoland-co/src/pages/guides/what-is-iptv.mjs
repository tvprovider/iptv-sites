import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';
import { catalog } from '../../data/business.mjs';

const faqs = [
  { q: 'Is IPTV legal to use?', a: 'The term itself only describes the transport — a stream arriving over an internet connection rather than a dish or a set-top box — so it carries no answer on legality either way. Whether any specific stream is properly licensed is a separate matter, and confirming that for your own region falls on you as the subscriber rather than on any single answer here.' },
  { q: 'Is "Polish channels" code for just two or three big-name networks?', a: 'Not on a lineup that\'s actually built for it — regional stations, dedicated news, and Ekstraklasa specifically are meant to sit alongside the well-known entertainment networks, not stand in for the whole category.' },
  { q: 'Why do some sites write "Eastern European sport" instead of just saying Ekstraklasa?', a: 'A named league is a claim that can be checked and held to. A vaguer label like "Eastern European sport" works whether or not the Polish football coverage behind it is any good — which is exactly the ambiguity this page avoids by naming Ekstraklasa outright.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV Poland? What\'s Actually Included',
  description: 'What IPTV is, and what a real Polish-channel IPTV lineup actually includes: Ekstraklasa, regional stations, news, and entertainment, category by category.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV Poland?' }]),
    articleSchema({ headline: 'What Is IPTV Poland? What\'s Actually Included', description: 'What a real Polish-channel IPTV lineup includes, category by category.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV Poland?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>"IPTV" describes how the picture arrives, not what's actually on it</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV Poland illustration')}</div>
    <p>Internet Protocol Television is just a transport mechanism: a player app requests a stream from a server and plays back whatever comes through, over an ordinary internet connection instead of a satellite dish or a coaxial cable. That mechanism is close to identical from one IPTV provider to the next, which is exactly why it's the wrong thing to evaluate a listing on. The real question for anyone searching "iptv poland" or "kanały polskie iptv" is what sits behind the words "Polish channels" once you get past the transport layer.</p>

    <h2>Two ways a listing can answer that question</h2>
    <p>One path is a single large number and a vague category — "40,000+ channels," "Central and Eastern European sport" — with a price hidden behind a signup form. It says nothing about whether Ekstraklasa is covered round by round, whether regional Polish stations made the cut, or whether the Polish side amounts to more than two or three flagship networks. The other path names the pieces individually, which is the only version that's actually checkable before you pay anything.</p>

    ${answerBox(`<p>This site takes the second path. Here's the Polish side of the catalog broken into what it's actually made of, separate from the ${catalog.liveChannels}-channel and ${catalog.vods}-title totals for the site as a whole.</p>`)}

    <h2>The Polish lineup, category by category</h2>
    ${comparisonTable(
      ['Category', 'What it actually covers'],
      [
        ['Ekstraklasa', 'Full-season league coverage, part of the standard channel lineup'],
        ['News & regional channels', 'National Polish news alongside regional and local stations'],
        ['Entertainment', 'General-entertainment networks carrying Polish-language programming'],
        ['On-demand', `Polish and international titles drawn from the ${catalog.vods} VOD library overall`],
      ]
    )}
    <p>None of that comes at the expense of what every plan already includes on top of it — the full ${catalog.liveChannels}-channel English and international catalog, unchanged, on the same login.</p>

    <h2>Two things a big total can't tell you</h2>
    <p>Whether the one category you actually want is in there is invisible in a single channel count — the question worth asking instead is whether the Polish side has names attached that you can verify yourself in a few minutes. Separately, a large total also says nothing about sharpness: picture quality tracks with how a broadcast was produced and what's playing it back, not with how many channels sit behind the login. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> unpacks that second part on its own.</p>

    <h2>Getting from an inbox to a working screen</h2>
    <p>Once an order or a trial goes through, an activation email hands over a login, and whatever player app is installed pulls the categories above onto the screen. Hardware changes the exact button-pressing involved, which is the reason the <a href="/setup-guide/">Setup Guide</a> treats each supported device separately instead of writing one instruction set and hoping it applies everywhere.</p>

    <h2>None of this needs to be taken on trust</h2>
    <p>A dollar and a day is enough to check it in person — the <a href="/trial/">24-hour trial</a> hands over the actual lineup, not a demo of it, so an Ekstraklasa fixture, a Polish news channel, or a specific series can simply be looked up and watched rather than read about.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See the categories for yourself', lead: 'A dollar and 24 hours settles it faster than reading another page.' })}
`,
};
