import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, stepsList, featureGrid,
} from '../lib/render.mjs';

const aboutMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing two combined catalogs">
  <rect width="560" height="420" rx="8" fill="#fffbeb"/>
  <circle cx="200" cy="160" r="72" fill="#ffffff" stroke="#fcd34d" stroke-width="2"/>
  <circle cx="340" cy="160" r="72" fill="#ffffff" stroke="#fcd34d" stroke-width="2"/>
  <circle cx="270" cy="240" r="46" fill="#d97706"/>
  <path d="M252 240 L266 254 L292 224" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — IPTV Latino',
  description: 'Why IPTV Latino was built around fútbol, novelas, and Spanish-language channels sitting next to a full English catalog, not in place of one.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'A household that watches in two languages shouldn\'t need two subscriptions',
  lead: 'Most "Spanish IPTV" listings mean a thin Spanish add-on bolted to an English base, or a Spanish-only service that quietly drops the English catalog. We built this so neither side is the afterthought.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: aboutMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where this started', title: 'Two remotes, two logins, and one household', left: true })}
  <p>Watching a fútbol match with one side of the family and a novela with the other, on the same evening, usually meant juggling two separate services — one carrying the Spanish-language side well and the English side barely, or the reverse. IPTV Latino exists because that split shouldn't be the default.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The both/and rule', title: 'Three things we hold to on every plan', left: true })}
  ${featureGrid([
    { title: 'Fútbol stays current', text: 'Major Latin American and Spanish league fixtures track the actual schedule, not a channel that quietly stopped updating.' },
    { title: 'Novelas get a real catalog', text: 'Enough titles to actually follow a season, not two or three flagship shows for show.' },
    { title: 'English content is never the trade-off', text: 'Nothing about building a Spanish-language-strong lineup came at the cost of trimming the English and international side.' },
  ], 3)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Worth checking yourself', title: 'Three things not asking you to take our word for', left: true })}
  ${stepsList([
    { title: 'Pull up a live fútbol fixture', text: 'Compare it against this week\'s actual schedule for the league you follow.' },
    { title: 'Check a novela mid-season', text: 'A thin catalog runs out of episodes fast — a real one doesn\'t.' },
    { title: 'Switch to an English channel right after', text: 'The same login, no separate app or account required.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'How it actually runs', title: 'A login, a player app, and your own internet connection', left: true })}
  <p>Nothing exotic underneath: a subscription reaches you as a login, which goes into a player app you pick and install on your own device, which then pulls live and on-demand video over your existing internet connection. Our end of the deal is the login and the catalog sitting behind it — the player app itself is separate third-party software we don't write or own.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being direct about limits', title: 'Things we\'re not going to overstate', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>Same-day novela episodes across the board — additions land on a rolling basis, not the instant something airs elsewhere.</li>
    <li>An exact uptime figure — nobody streaming over the open internet can responsibly quote one that precise.</li>
    <li>Replacing every other screen habit in the house — this is one subscription built to do two languages well, not a monopoly on your evening.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Where the plans land', title: 'The cost side, kept just as plain', left: true })}
  <p>Four terms, each with one number attached, sitting on the <a href="/pricing/">Pricing page</a> without a form standing in front of them. Whichever length gets picked, the bilingual catalog underneath doesn't shrink — it's purely the monthly average that moves.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'If something stops working', title: 'A message that a person actually opens', left: true })}
  <p>Whatever the category — a setup snag, a billing mix-up, a trial that didn't go as expected — it goes to the same place through the <a href="/contact/">Contact page</a>, and whoever picks it up reads the actual details before replying.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next', title: 'Three more pages before you decide', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Guides', text: 'What a channel count actually breaks down into, explained.', href: '/guides/' },
      { title: 'FAQ', text: 'Everything else that tends to come up beforehand.', href: '/faq/' },
      { title: 'Pricing', text: 'All four terms, side by side, with nothing hidden.', href: '/pricing/' },
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

${ctaBanner({ title: 'See both sides of the catalog for yourself', lead: 'A dollar and 24 hours is enough to check the fútbol schedule and the novela lineup at once.' })}
`,
};
