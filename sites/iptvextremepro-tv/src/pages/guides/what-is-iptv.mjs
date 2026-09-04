import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is IPTV legal?', a: 'IPTV as a technology is simply a method of delivering video over the internet — legality depends on whether the specific content being streamed is properly licensed. Users are responsible for understanding the rules that apply in their own location.' },
  { q: 'Can I switch from M3U to Xtream Codes later, or vice versa?', a: 'Usually yes — contact support and ask for the login format your player app actually needs. The underlying account and catalog access do not change, only the format of the credentials issued.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? M3U vs. Xtream Codes Explained',
  description: 'What IPTV actually is, and a genuine technical breakdown of the difference between an M3U playlist link and an Xtream Codes login.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV? M3U vs. Xtream Codes', description: 'IPTV explained, plus a technical breakdown of M3U versus Xtream Codes.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, and the two login formats you'll actually run into</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p>IPTV, short for Internet Protocol Television, is television delivered as internet data instead of through a satellite dish, a coaxial cable line, or a broadcast antenna. A compatible player app on your device requests channel and program data from a server, the same way any other streaming app requests its content — the difference is entirely in how that request gets authenticated.</p>')}

    <h2>Where the confusion actually starts</h2>
    <p>Most explanations of IPTV stop at "it streams over the internet" and skip the part that actually trips people up during setup: the credentials format. There are two common ones, and a player app usually only handles one well.</p>

    <h2>M3U: one link, nothing else</h2>
    <p>An M3U file is a plain text playlist — a list of stream URLs, one per channel, sometimes with metadata attached. Your subscription typically wraps this into a single hosted link. Paste that link into a player app's "add playlist" field, and it downloads the whole channel list in one request. Simple, but static: the player only sees whatever the M3U file contained at the moment it was generated.</p>

    <h2>Xtream Codes: a live connection, not a static file</h2>
    <p>An Xtream Codes login is three separate pieces of data — a username, a password, and a server URL — that a compatible player app uses to authenticate against a server directly, on demand, rather than downloading one static file. Because the connection is live, the channel list, program guide, and VOD catalog can update without you ever re-entering anything. This is also exactly why it needs three fields instead of one: the app is holding an active session, not just a downloaded list.</p>

    <h2>Side by side</h2>
    ${comparisonTable(
      ['', 'M3U playlist', 'Xtream Codes login'],
      [
        ['What you enter', 'One URL', 'Username, password, server URL'],
        ['Connection type', 'Static — downloaded once', 'Live — authenticated per session'],
        ['Program guide (EPG)', 'Depends on what the M3U includes', 'Usually pulled live from the server'],
        ['Where mistakes happen', 'A malformed or expired URL', 'A field entered in the wrong box'],
      ]
    )}

    <h2>Why this matters more than it sounds like it should</h2>
    <p>Neither format is objectively "better" — a lot of player apps handle both. But when a login fails, knowing which format you were actually given determines whether the fix is "check the URL" or "check which of the three fields has the typo." That distinction is the single most common source of avoidable support tickets in this industry.</p>

    <h2>What you actually need, either way</h2>
    <ul>
      <li>A device that runs a compatible player app</li>
      <li>An internet connection with enough sustained bandwidth for streaming</li>
      <li>A player app that explicitly lists support for whichever format you were issued</li>
      <li>The credentials themselves — an M3U link, or a username/password/server trio</li>
    </ul>

    <h2>Where resolution fits into all this</h2>
    <p>Neither format determines picture quality — that comes down to the original broadcast source, your device, and your connection. See <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> for the specifics.</p>

    <h2>The low-risk way to find out which format works for you</h2>
    <p>The <a href="/trial/">24-hour trial</a> issues a real Xtream Codes login (the default format here) so you can confirm your player app handles it correctly before committing to a longer plan. The <a href="/setup-guide/">Setup Guide</a> walks through entering it field by field.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Ready to try a real login yourself?', lead: 'Test it with our 24-hour trial, or compare subscription plans.' })}
`,
};
