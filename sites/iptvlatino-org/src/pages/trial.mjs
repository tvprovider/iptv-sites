import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial a Spanish-only preview, or the real bilingual catalog?', a: 'The real thing — fútbol, novelas, Spanish-language channels, and the full English and international lineup all run exactly as they would on a paid plan.' },
  { q: 'Can the trial be repeated a second time?', a: 'It\'s built as a one-time check per customer — that limit is part of why the price can sit this low.' },
  { q: 'What can 24 hours realistically confirm?', a: 'Whether the specific leagues you follow, the novelas your household watches, your device, and your home connection all line up — a firsthand look instead of a page description.' },
  { q: 'The player app won\'t connect — now what?', a: 'Start with the Setup Guide entry for your device. Still no luck? Message support with the device and the exact error shown.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Latino 24-Hour Trial — $1.00',
  description: 'Try IPTV Latino for 24 hours for $1.00. Full access to fútbol, novelas, Spanish-language channels, and the full English catalog before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: 'A full day on the actual lineup, for a dollar',
  lead: `Live matches, novelas, Spanish-language channels, and the entire English and international side of the catalog — running exactly as they would for a paying subscriber, not a limited preview.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['Nothing signed for a full year up front', 'One dollar covers the whole day', 'Same bilingual catalog paid plans reach', 'Shuts off on its own, no cancellation needed'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why charge anything at all', title: 'The dollar keeps this useful', left: true })}
  ${answerBox(`<p>A free trial invites a flood of people who were never going to check whether a specific league or a specific novela is actually part of the lineup. Charging $${trial.price.toFixed(2)} filters that noise out, leaving the ${trial.duration} window open for households genuinely weighing whether both sides of the catalog fit what they watch.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'What runs', title: 'Everything a dollar unlocks', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The full Spanish-language and English catalog, for the entire ${trial.duration} window</li>
        <li>Fútbol coverage and the novela library, unchanged from a paid plan</li>
        <li>One device, fully active the whole time</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'What doesn\'t', title: 'Where the boundary sits', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Access past the ${trial.duration} mark — it stops on its own</li>
        <li>Two devices on the same login running at once</li>
        <li>A refund once the trial has been used (details on the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Claiming it', title: 'From the form below to an actual login', left: true })}
  <p>Fill out the form, and an email with login details typically follows within a few hours. After that it's a matter of installing a compatible player app — the Setup Guide walks through each device.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you sign up', title: 'What to have on hand', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps that actually holds</h3><p>A sustained number matters far more than a one-time speed-test peak, especially the moment a match kicks off.</p></div>
    <div class="card"><h3>Any device from the list below</h3><p>Try more than one if you're deciding between them.</p></div>
    <div class="card"><h3>An inbox you'll check today</h3><p>Login details land there — reuse the same address later if you subscribe.</p></div>
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
  ${sectionHead({ eyebrow: 'No watered-down version', title: 'It runs like a paid subscription because it is one', left: true })}
  <p>The activation process, the player-app compatibility, and the full lineup are identical to a paid plan — the only difference is the price tag and the clock running underneath it. The <a href="/setup-guide/">Setup Guide</a> covers device-specific steps either way.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Setting expectations', title: 'What a single day can and can\'t tell you', left: true })}
  <p>Because it's the live catalog and not a curated demo, a day is genuinely enough to see whether the fútbol schedule and novela shelf match your household's taste. It won't diagnose a shaky internet plan or an old streaming box — but surfacing that before a longer commitment is exactly the point of spending a dollar first.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When the clock runs out', title: 'What comes after', left: true })}
  <p>Access shuts off automatically once the ${trial.duration} window closes — no further charge follows it. Liked what you saw? The <a href="/pricing/">Pricing page</a> lists every term whenever you're ready to move forward.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'One thing to know upfront', title: 'Trial charges and refunds', left: true })}
  <p>Given how little it costs and how short the window is, a trial charge typically isn't reversible once the login has gone out. The <a href="/refund-policy/">Refund Policy</a> page has the complete wording.</p>`,
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
      ${sectionHead({ eyebrow: 'Get started', title: 'Start your 24-hour trial', left: true })}
      <p>Drop an email address in below and a login follows shortly after. Something to ask first? The <a href="/contact/">Contact page</a> reaches an actual person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already convinced by the lineup?', lead: 'Jump straight to the plans and pick a term that fits.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
