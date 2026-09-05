import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, stepsList, featureGrid,
} from '../lib/render.mjs';
import { catalog } from '../data/business.mjs';

const aboutMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing Polish channel coverage">
  <rect width="560" height="420" rx="8" fill="#fff1f2"/>
  <rect x="120" y="90" width="320" height="240" rx="10" fill="#ffffff" stroke="#fecdd3" stroke-width="2"/>
  <rect x="150" y="130" width="180" height="14" rx="4" fill="#ffe4e6"/>
  <rect x="150" y="160" width="220" height="14" rx="4" fill="#ffe4e6"/>
  <rect x="150" y="190" width="140" height="14" rx="4" fill="#ffe4e6"/>
  <circle cx="270" cy="260" r="46" fill="#9f1239"/>
  <path d="M252 260 L266 274 L292 244" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About IPTV Poland',
  description: 'Why IPTV Poland is built specifically around Ekstraklasa and Polish TV — not a generic Eastern European catalog with Poland buried inside it.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'Poland is the point of this site, not a footnote in a bigger one',
  lead: 'A "Central and Eastern European IPTV" listing would have been the easier thing to build — Poland as one entry in a long league table, mentioned and moved past. Instead, this whole site is built around Ekstraklasa and Polish television specifically, first and on purpose.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: aboutMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The gap this fills', title: 'Where a regional listing usually stops short', left: true })}
  <p>Search around for Polish IPTV and most of what turns up treats Poland as one line inside a much wider region — a sports section spanning half the continent, a channel count with nothing broken out by country. Fine if you want a bit of everything and don't mind digging. Less fine if what you actually want is Ekstraklasa standings you can follow round by round, or Polish news left running in the background the way it would be back home. This site was built for that second person specifically.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The three things this site won\'t compromise on', title: 'What actually shapes every page here', left: true })}
  ${featureGrid([
    { title: 'Ekstraklasa is named, not implied', text: 'It shows up by name rather than folded into "European football" — because that specificity is the whole reason anyone searching for it ends up here.' },
    { title: 'The English and international side stays full-size', text: `${catalog.liveChannels} channels, ${catalog.vods} VOD titles — building out the Polish side never came at the cost of shrinking everything else.` },
    { title: 'Watching from abroad is the default assumption, not an edge case', text: 'A subscriber in Manchester or Munich following Ekstraklasa is exactly who this was built for, addressed head-on rather than as an afterthought.' },
  ], 3)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The mechanics, plainly', title: 'There\'s no trick behind any of this', left: true })}
  <p>Three moving parts, no more: you get a login, that login goes into a player app on whatever device you already own, and the app pulls the Polish and international catalog through your existing internet connection — same result whether that connection sits in Kraków or in Dublin. Picking the actual player app is left to you rather than forced, which is exactly why the Setup Guide lists several working options per device instead of pushing one.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Don\'t take this on faith', title: 'Three things worth confirming yourself', left: true })}
  ${stepsList([
    { title: 'Read the category breakdown, not just the headline number', text: 'The What Is IPTV guide splits the Polish lineup into Ekstraklasa, news, regional stations, and entertainment individually.' },
    { title: 'Point the $1 trial at an actual live fixture', text: 'Twenty-four hours is enough to see whether match day plays out the way this site describes it.' },
    { title: 'Read the refund terms before money changes hands', text: 'They\'re published in full on their own page, whether or not you ever end up needing them.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The limits we won\'t paper over', title: 'What we\'re not going to oversell', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>A flat uptime number — anything running over the open internet carries some variability no provider can fully engineer away.</li>
    <li>Picture quality that ignores your own setup — the device and the connection on your end matter just as much as the original broadcast.</li>
    <li>A one-to-one match with Polish cable — streaming and a coaxial signal are genuinely different technologies, and pretending otherwise wouldn't help anyone.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'On pricing', title: 'The same directness applies to the numbers', left: true })}
  <p><a href="/pricing/">Pricing</a> lists every term's exact cost up front, with nothing gated behind a form. Pick any length and the Polish and international lineup stays constant — only the monthly average moves.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If something\'s wrong', title: 'Tell us and it actually gets looked at', left: true })}
  <p>A channel that vanished, a device refusing to cooperate, a charge that doesn't line up — all of it goes through the <a href="/contact/">Contact page</a>, where someone reads the specifics before writing back rather than sending a form reply.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Keep reading', title: 'Three pages that round out the picture', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Guides', text: 'A closer look at what actually makes up the Polish side of the catalog.', href: '/guides/' },
      { title: 'FAQ', text: 'The other questions that tend to come up before someone subscribes.', href: '/faq/' },
      { title: 'Pricing', text: 'Every term laid out with its exact cost, nothing tucked away.', href: '/pricing/' },
    ]
      .map(
        (r) => `
    <div class="card">
      <h3><a href="${r.href}">${esc(r.title)}</a></h3>
      <p>${esc(r.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({ title: 'Judge the Ekstraklasa lineup on your own screen', lead: 'A dollar buys 24 hours to check it against what you already watch.' })}
`,
};
