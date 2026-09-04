import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, comparisonTable, iconMedia,
} from '../../lib/render.mjs';
import { catalog } from '../../data/business.mjs';

const faqs = [
{ q: 'Is IPTV legal?', a: 'IPTV is just a delivery method — it describes video arriving over an internet connection instead of a dish or a cable box, and that alone says nothing about legality one way or the other. Whether a given stream is properly licensed is a separate matter, and checking that for your own region is on the subscriber, not something a single blanket answer can settle.' },
  { q: 'Does "Mexican channels included" mean just Televisa and TV Azteca, or more than that?', a: 'A genuine Mexican lineup covers more than the two biggest broadcasters — regional stations, dedicated news channels, and sports coverage specifically, not just the general-entertainment networks most people think of first.' },
  { q: 'Why do some listings say "Latin American sports" instead of naming Liga MX directly?', a: 'Naming a specific league is a commitment a provider has to actually stand behind. A vaguer phrase like "Latin American sports" covers a provider whether or not any particular league\'s coverage is genuinely solid — which is exactly why this page names Liga MX and Selección Mexicana directly instead of a broader category.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV Mexico? What\'s Actually Included',
  description: 'What IPTV is, and what a real Mexican-channel IPTV lineup actually includes: Liga MX, Selección Mexicana, regional channels, and novelas, category by category.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV Mexico?' }]),
    articleSchema({ headline: 'What Is IPTV Mexico? What\'s Actually Included', description: 'What a real Mexican-channel IPTV lineup includes, category by category.', path: '/guides/what-is-iptv/', datePublished: '2026-09-04' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV Mexico?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, and what a genuinely Mexican channel lineup is built from</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV Mexico illustration')}</div>
    ${answerBox('<p>IPTV — Internet Protocol Television — simply means the picture reaches your screen as ordinary internet data rather than through a dish or a coaxial line. Under the hood, a player app asks a server for a stream and plays back whatever it gets, and that part barely differs from one IPTV provider to the next. The real difference between a Mexico-focused listing and a generic one is what actually sits behind the words "Mexican channels" — not the delivery mechanism.</p>')}

    <h2>The vague version most listings settle for</h2>
    <p>Search "iptv mexico" or "canales mexicanos iptv" and a large share of results describe the same three things: a big channel total, "Latin American sports" as a category, and a price hidden behind a signup form. None of that confirms whether Liga MX is actually covered, whether the Selección plays in full, or whether the Mexican side of the catalog is more than Televisa and TV Azteca reruns.</p>

    <h2>What a real Mexican lineup is actually made of</h2>
    <p>Past the headline number, a genuine Mexican-channel offering breaks into distinct pieces: Liga MX league coverage across the Apertura and Clausura torneos, Selección Mexicana matches and qualifiers, national and regional news channels, general-entertainment networks, and a novela and Mexican series library kept separate from the live count. Naming each of those directly — rather than bundling them into "Latin American content" — is what separates a provider that actually built for Mexico from one that added a Mexico-flavored line item to an existing catalog.</p>

    <h2>The breakdown behind this site's Mexican lineup</h2>
    ${comparisonTable(
      ['Category', 'What it actually covers'],
      [
        ['Liga MX', 'League matches across both torneos, part of the standard channel lineup'],
        ['Selección Mexicana', 'National team coverage, not billed as a separate sports add-on'],
        ['News & regional channels', 'National Mexican news alongside regional and local feeds'],
        ['Entertainment & novelas', `General-entertainment networks plus a Mexican novela and series library, drawn from the ${catalog.vods} VOD titles overall`],
        ['English & international', `The full remaining catalog across ${catalog.liveChannels} live channels, unchanged and included on every plan`],
      ]
    )}

    <h2>Why "40,000+ channels" alone still isn\'t the useful number</h2>
    <p>A large total says nothing about whether the specific category you care about — Liga MX, say, or a particular regional news channel — is actually part of it. Swap "how many channels" for "does the Mexican side break down into categories I can check," and you get something that's actually verifiable in a few minutes instead of a figure you either trust or don\'t.</p>

    <h2>How the login turns into a picture</h2>
    <p>After ordering or requesting the trial, the activation email hands you a login, and whichever player app you've installed uses it to pull in the lineup above. The exact steps for doing that differ slightly by hardware, which is why the <a href="/setup-guide/">Setup Guide</a> covers each supported device on its own.</p>

    <h2>A different question entirely: how sharp it looks</h2>
    <p>Catalog size and picture sharpness aren't related — a Liga MX broadcast's clarity depends on how it was originally produced, what's displaying it, and the connection feeding it, none of which has anything to do with how many channels sit behind the login. <a href="/guides/4k-vs-hd-streaming/">4K vs. HD Streaming</a> goes into that separately.</p>

    <h2>Confirming all of this costs a dollar</h2>
    <p>Rather than take the category breakdown above on faith, the <a href="/trial/">24-hour trial</a> puts the actual lineup in front of you for a full day, for one dollar — enough time to look up a Liga MX fixture, a Selección broadcast, or a particular novela and see for yourself whether it's really there.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'Don\'t take the breakdown on faith', lead: 'Confirm it yourself — a dollar buys 24 hours on the real lineup.' })}
`,
};
