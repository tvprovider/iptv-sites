import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, stepsList,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing an actively updated catalog">
  <rect width="560" height="420" rx="8" fill="#fdf2f8"/>
  <circle cx="180" cy="150" r="70" fill="#ffffff" stroke="#f9a8d4" stroke-width="2"/>
  <circle cx="290" cy="230" r="90" fill="none" stroke="#f9a8d4" stroke-width="2" stroke-dasharray="6 6"/>
  <circle cx="400" cy="150" r="50" fill="#ffffff" stroke="#f9a8d4" stroke-width="2"/>
  <circle cx="290" cy="230" r="42" fill="#db2777"/>
  <path d="M272 230 L285 244 L312 214" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — IPTV Hot',
  description: 'IPTV Hot exists because most IPTV catalogs are built once and left alone — here\'s why we built it around content that keeps moving instead.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'A catalog is either moving or it\'s already stale',
  lead: 'A "40,000 channels" claim on a landing page tells you nothing about whether that number still holds up. We built this around the part everyone else treats as a one-time setup task.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'The observation that started this', title: 'Big numbers, no follow-through', left: true })}
      <p>Search "IPTV" and every result leads with a channel count. Almost none of them say anything about whether that count is still accurate, whether new releases actually show up, or whether live sports coverage matches what's happening this week rather than last season.</p>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'What we actually built', title: 'A service, not a static list', left: true })}
      <p>Live channels and on-demand content, delivered over your own internet connection through a compatible player app you install yourself — same as any subscription like this. The difference we're actually claiming is narrower and more checkable: does the catalog move, or does it sit still after launch.</p>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Three things worth verifying yourself', title: 'Not asking you to take our word for it', left: true })}
  ${stepsList([
    { title: 'Check a current sports fixture', text: 'Something happening this week, not a channel that existed once.' },
    { title: 'Look for a title that released recently', text: 'A catalog that hasn\'t moved won\'t have it yet.' },
    { title: 'Compare the trial to the paid plans', text: 'Same catalog, same access — nothing extra unlocked by paying more upfront.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What this is not', title: 'A rebrand of a static list', left: true })}
  <p>Every device works through a compatible third-party player app that reads either an M3U playlist link or an Xtream Codes-style login (username, password, server URL) — we don't build or control that app. What we're responsible for is the login and the infrastructure behind it, kept current rather than frozen at launch.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Being straight about limits', title: 'What we won\'t claim', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>That every single title updates in real time — the catalog moves continually, not instantly.</li>
    <li>A specific uptime percentage — no honest provider backs a number that precise.</li>
    <li>That this replaces every other streaming option you have — it's one subscription, not a monopoly on your time.</li>
  </ul>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where the plans land', title: 'Pricing that matches what you actually get', left: true })}
  <p>Four lengths, one flat number each, listed on the <a href="/pricing/">Pricing page</a> before you're asked for anything. Longer terms lower the effective monthly cost — they don't unlock content the shorter plans can't reach.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If it stops working', title: 'Support that reads the message', left: true })}
  <p>The <a href="/contact/">Contact page</a> reaches an actual inbox — setup problems, billing questions, and trial issues all land there, and get answered by someone reading the specifics, not a script.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Your data', title: 'Only what running this requires', left: true })}
  <p>The <a href="/privacy-policy/">Privacy Policy</a> lists exactly what gets collected and why — nothing padded out with vague categories.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'On your end', title: 'Where responsibility sits', left: true })}
  <p>We provide the subscription and the infrastructure behind it. Following the laws that apply where you live is on you as the subscriber — the full arrangement is in the <a href="/terms-of-use/">Terms of Use</a>.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Next', title: 'A few pages worth a look before deciding', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'What installing a player app actually involves.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'The questions people ask before subscribing.', href: '/faq/' },
      { title: 'Pricing', text: 'Every plan length, laid out plainly.', href: '/pricing/' },
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

${ctaBanner({ title: 'Check the current lineup yourself', lead: 'A dollar and 24 hours is enough to see whether the catalog actually moves.' })}
`,
};
