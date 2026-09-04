import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, stepsList, featureGrid,
} from '../lib/render.mjs';
import { catalog } from '../data/business.mjs';

const aboutMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing Mexican channel coverage">
  <rect width="560" height="420" rx="8" fill="#ecfeff"/>
  <rect x="120" y="90" width="320" height="240" rx="10" fill="#ffffff" stroke="#a5f3fc" stroke-width="2"/>
  <rect x="150" y="130" width="180" height="14" rx="4" fill="#cffafe"/>
  <rect x="150" y="160" width="220" height="14" rx="4" fill="#cffafe"/>
  <rect x="150" y="190" width="140" height="14" rx="4" fill="#cffafe"/>
  <circle cx="270" cy="260" r="46" fill="#0891b2"/>
  <path d="M252 260 L266 274 L292 244" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About IPTV Mexico',
  description: 'Why IPTV Mexico is built specifically around Liga MX, Selección Mexicana, and Mexican TV — not a generic Latin American catalog with Mexico buried inside it.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'We picked one country and built the whole page around it',
  lead: 'It would have been easier to build one more generic "Latin American IPTV" listing and let Mexico sit somewhere inside a long league list. We did the opposite: Liga MX, Selección Mexicana, and Mexican television are the actual point of this site, not a category tucked inside a bigger one.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: aboutMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where this started', title: 'A gap between "Latino" listings and what Mexican households actually wanted', left: true })}
  <p>Search for an IPTV subscription with Mexican channels and most results are built around Latin America broadly — a football section covering half a dozen leagues at once, Mexico mentioned once in passing. That works fine for someone who wants a bit of everything, and poorly for someone specifically trying to follow Liga MX standings, catch every Selección qualifier, or keep a household's novela habit going after a move abroad. IPTV Mexico exists for that second group.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we actually built around', title: 'Three commitments that shape every page here', left: true })}
  ${featureGrid([
    { title: 'Liga MX and Selección get named directly', text: 'Not folded into a generic sports category — both are called out specifically because that specificity is the entire reason someone lands on this site.' },
    { title: 'The English and international catalog stays intact', text: `${catalog.liveChannels} channels and ${catalog.vods} VOD titles overall — going deep on Mexico never means going thin everywhere else.` },
    { title: 'Watching from outside Mexico is treated as normal, not niche', text: 'A household in the US following Liga MX or keeping up with novelas is a stated, expected use case, addressed directly rather than assumed away.' },
  ], 3)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Worth checking yourself', title: 'Three things we\'d rather you verify than take our word for', left: true })}
  ${stepsList([
    { title: 'Look up the Mexican channel breakdown', text: 'The What Is IPTV guide covers what actually sits behind the Mexican lineup — regional channels, news, novelas, and sport — category by category.' },
    { title: 'Run the $1 trial against a real matchday', text: 'Pull up a Liga MX fixture or a Selección broadcast and see whether it plays the way this page describes.' },
    { title: 'Read the refund terms before paying anything', text: 'They sit on their own page, in full, whether or not you ever need them.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it actually works', title: 'Nothing complicated sits behind the pitch', left: true })}
  <p>A subscription boils down to three pieces: we hand you a login, you drop it into a player app on the device of your choice, and that app pulls the Mexican and international lineup over whatever internet connection you already have — doesn't matter if that's a house in Monterrey or an apartment in Chicago. Our part ends at the login and the catalog behind it; picking the player app itself is up to you, which is exactly why the Setup Guide lists more than one working option for each device rather than pushing a single pick.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being direct about limits', title: 'What we won\'t pretend is guaranteed', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>An exact uptime figure — streaming over the open internet always carries some variability that no provider fully controls.</li>
    <li>Picture quality independent of your own setup — the device and connection on your end shape the result just as much as the original broadcast does.</li>
    <li>An identical feel to a Mexican cable box — internet streaming and a coaxial signal are different technologies, and we'd rather say that plainly than imply otherwise.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Where the numbers live', title: 'The pricing side gets the same treatment', left: true })}
  <p>Head to <a href="/pricing/">Pricing</a> and every term's exact cost is right there, nothing hidden behind a submission form. Whichever length you pick, the Mexican and international lineup is the same — only the monthly average changes.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'When something\'s not right', title: 'Say so and someone actually looks into it', left: true })}
  <p>A missing channel, a device giving you trouble, a billing question that doesn\'t add up — all of it comes through the same <a href="/contact/">Contact page</a>, read by someone who checks the specifics before writing back.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Where to go next', title: 'Three pages that fill in the rest', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Guides', text: 'A closer look at what actually makes up the Mexican side of the catalog.', href: '/guides/' },
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

${ctaBanner({ title: 'Judge the Liga MX lineup on your own screen', lead: 'A dollar buys 24 hours to check it against what you already watch.' })}
`,
};
