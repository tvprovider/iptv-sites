import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, comparisonTable, featureGrid,
} from '../lib/render.mjs';
import { catalog } from '../data/business.mjs';

const aboutMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing a consistently run premium IPTV service">
  <rect width="560" height="420" rx="8" fill="#eef2ff"/>
  <rect x="120" y="90" width="320" height="240" rx="10" fill="#ffffff" stroke="#c7d2fe" stroke-width="2"/>
  <rect x="150" y="130" width="180" height="14" rx="4" fill="#e0e7ff"/>
  <rect x="150" y="160" width="220" height="14" rx="4" fill="#e0e7ff"/>
  <rect x="150" y="190" width="140" height="14" rx="4" fill="#e0e7ff"/>
  <circle cx="270" cy="260" r="46" fill="#3730a3"/>
  <path d="M252 260 L266 274 L292 244" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About IPTV Prime',
  description: 'Why IPTV Prime treats "premium" as a set of checkable operating habits — consistent catalog, real support, honest pricing — not a marketing word.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'We built this around three habits, not a slogan',
  lead: 'Anyone can print the word "premium." What actually costs something to maintain is a support inbox that gets read by a person, a catalog that never quietly shrinks on the cheaper plan, and a price that\'s posted before anyone asks for an email address. Those three habits are what this page is actually about.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: aboutMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why this page exists', title: 'A word that costs nothing versus a claim that can be checked', left: true })}
  <p>"Premium," "top rated," "best" — none of it means much until it\'s attached to something a visitor can actually verify before paying. So instead of leaning on the adjective, this page names the three specific things it\'s standing on, and every one of them can be tested inside a single $1 trial rather than taken on faith.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The three habits', title: 'What actually backs the word "premium" here', left: true })}
  ${featureGrid([
    { title: 'A person reads support messages', text: 'Not a script, not a decision tree — someone on the team reads what was actually written and replies to it.' },
    { title: 'Every plan reaches the same catalog', text: `The 1-month plan and the 12-month plan both open ${catalog.liveChannels} channels and ${catalog.vods} VOD titles — no version of either is quietly smaller.` },
    { title: 'The price is visible before you\'re asked for anything', text: 'All four totals sit on Pricing without a signup form standing between you and the number.' },
  ], 3)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How it actually works', title: 'Three steps, nothing hidden between them', left: true })}
  ${comparisonTable(
    ['Step', 'What happens'],
    [
      ['You order or start a trial', 'A plan is chosen and a way to reach you is recorded'],
      ['An activation email arrives', 'It contains one login — nothing more is required'],
      ['That login goes into a player app', 'Any compatible app works — the Setup Guide lists several per device'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Test it, don\'t take our word for it', title: 'Three ways to check the claims above yourself', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Read the buyer\'s checklist</h3><p>The guide on choosing an IPTV subscription lists exactly what separates a well-run service from one just borrowing the word.</p></div>
    <div class="card"><h3>Message support during the trial</h3><p>Ask something specific and time how long a real answer takes.</p></div>
    <div class="card"><h3>Read the refund terms first</h3><p>They\'re posted in full, whether or not you ever end up needing them.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What we won\'t claim', title: 'The limits worth being upfront about', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>No flat uptime figure — anything streaming over the open internet has some variability built in, and pretending otherwise would just be a different kind of overselling.</li>
    <li>No promise that picture quality is only about the source — your own device and connection carry equal weight in what ends up on screen.</li>
    <li>No claim that every support reply lands in minutes — fast and specific is the actual goal, and specificity from your side helps get there quicker.</li>
  </ul>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If something goes wrong', title: 'A real inbox, not a form that vanishes into a queue', left: true })}
  <p>A missing title, a login that won\'t take, a charge that looks off — all of it lands with a person through <a href="/contact/">Contact</a>, and gets a specific reply rather than a template.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'More to read', title: 'Three pages worth a look next', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Guides', text: 'Deeper background on streaming quality and how to size up a provider.', href: '/guides/' },
      { title: 'FAQ', text: 'Answers to the questions that come up right before people subscribe.', href: '/faq/' },
      { title: 'Pricing', text: 'All four terms with their exact totals, nothing hidden.', href: '/pricing/' },
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

${ctaBanner({ title: 'Test the three habits yourself', lead: 'A dollar and 24 hours is enough to check the catalog and the support line firsthand.' })}
`,
};
