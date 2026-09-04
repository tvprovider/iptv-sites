import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial login a stripped-down version of the real thing?', a: `No — same three fields, same server infrastructure, same catalog a paying subscriber gets. The only difference is the ${trial.duration} clock.` },
  { q: 'Is there a limit on how many times someone can run this?', a: 'One per customer — it exists to answer a specific question, not to be a recurring free sample.' },
  { q: 'What does this actually prove that a review can\'t?', a: 'How fast the servers respond to your specific player app, on your specific connection — the exact variable that makes or breaks day-to-day use, and the one thing nobody else can test for you.' },
  { q: 'The player app won\'t accept the login — is the trial broken?', a: 'Usually not — it\'s almost always the server URL landing in the wrong field. The Setup Guide shows the correct order; if it still won\'t take, send support your username (skip the password) plus the exact error text.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Xtream Pro 24-Hour Trial — $1.00',
  description: 'A real Xtream Codes login for 24 hours, $1.00, running on the same servers as a paid subscription — enough time to judge speed before committing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: `One dollar, one day, one real login`,
  lead: `Judge server response and channel-switching speed on your own player app for ${trial.duration}, before a longer plan is even on the table.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No sign-up commitment', 'A full 24 hours for $1', 'Same login format as a paid plan', 'Shuts off by itself, nothing to cancel'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: `The reason for the small charge`, left: true })}
  ${answerBox(`<p>Zero-cost trials attract a lot of people who were never going to seriously test anything, which bogs down response times for everyone who is. Charging $${trial.price.toFixed(2)} filters for people actually deciding whether the login format and the servers behind it suit their setup.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'What is active', title: "For the full window", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>A genuine Xtream Codes login, live for ${trial.duration}</li>
        <li>Every channel in the catalog, not a curated sample</li>
        <li>One device, running the whole time</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Where it ends', title: "Set expectations", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The clock cuts access automatically — no manual step needed</li>
        <li>One login, one device — not shared across two at once</li>
        <li>Once it's been used, it falls outside the Refund Policy</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'What happens after you submit the form', left: true })}
  <p>An Xtream Codes login — username, password, server URL — arrives by email not long after. Drop those three pieces into a compatible player app; the Setup Guide points to exactly which field each one belongs in.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'Worth having on hand', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps that holds steady</h3><p>A number that survives a full evening beats a lucky one-off speed test.</p></div>
    <div class="card"><h3>An app built for the format</h3><p>Check for separate username, password, and server URL fields before installing anything new.</p></div>
    <div class="card"><h3>An inbox you'll actually check</h3><p>The login lands there — reuse that same address later if you decide to subscribe.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One infrastructure, no separate tier', title: 'There is no "lite" server for trial accounts', left: true })}
  <p>Trial logins route through the same redundant server setup as every paid plan — nothing throttled, nothing sandboxed. The <a href="/setup-guide/">Setup Guide</a> covers entering the login field by field.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What a day can and can\'t tell you', left: true })}
  <p>A day is plenty to judge whether the servers and your player app get along — that part is a fair test, since it's the same infrastructure a subscriber pays for. It won't fix a slow home connection or a player app that mishandles the login fields badly, but knowing that up front beats discovering it after a 12-month commitment.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When the clock hits zero', title: 'What comes after', left: true })}
  <p>The login deactivates on its own once ${trial.duration} is up — no charge follows unless you separately choose to subscribe. Went well? The <a href="/pricing/">Pricing page</a> is the next stop.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'The refund boundary here', left: true })}
  <p>Because the fee is small and the window is short, a used trial login generally falls outside refund eligibility — the full conditions sit on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Trial FAQ', left: true })}
  ${faqAccordion(trialFaqs)}`,
})}

${section({
  id: 'trial-signup',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Claim your 24-hour login', left: true })}
      <p>Drop your email in below — the login isn't far behind. Something to ask first? <a href="/contact/">Contact</a> goes to a real person, not a queue.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already sure this is what you want?', lead: 'Skip the trial and pick straight from the four subscription lengths.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
