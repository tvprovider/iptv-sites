import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial catalog smaller than the paid version?', a: 'No — same live channels, same on-demand titles, same trending additions. What runs during the trial is exactly what a paid plan gives you.' },
  { q: 'Can I take the trial more than once?', a: 'It\'s meant as a one-time check per customer, which is part of why it can be priced this low.' },
  { q: 'What does a single day actually tell me?', a: 'Whether the current lineup, your device, and your connection all work together — plus a real look at whether "trending" content here is actually current.' },
  { q: 'What if I can\'t get a player app working at all?', a: 'Check the Setup Guide for your device first. Still stuck? Contact support with your device type and exactly what\'s happening.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Hot 24-Hour Trial — $1.00',
  description: 'Try IPTV Hot for 24 hours for $1.00. Full access to the same live and on-demand catalog as a paid plan — check what\'s actually trending before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: 'See the current lineup before spending more than a dollar on it',
  lead: `A full day on the same catalog a paid subscriber gets — trending titles, live sports, and whatever's actually current right now, not a demo mode.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No contract to start', 'A full day for $1', 'The identical catalog as paid plans', 'Expires on its own, nothing to cancel'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why not free', title: `Why there's a small charge at all`, left: true })}
  ${answerBox(`<p>Free trials tend to attract a flood of curiosity signups who were never going to check anything specific. A small $${trial.price.toFixed(2)} charge filters that out, so the ${trial.duration} window stays fast and available for people actually weighing whether the current lineup is worth subscribing to.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: "What one dollar actually gets you", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The complete live and on-demand catalog for the full ${trial.duration}</li>
        <li>Up to 4K where the source content and your device support it</li>
        <li>One device, fully active</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: "Where the line sits", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything past the ${trial.duration} mark — access stops on its own</li>
        <li>Two devices running the same login simultaneously</li>
        <li>A refund once the trial has actually been used (see the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'From this form to a working login', left: true })}
  <p>Submit the form below and login details arrive by email shortly after. From there it's installing a compatible player app — the Setup Guide covers device-by-device steps.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'What to have ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps, held steady</h3><p>A sustained number, not a one-time speed-test peak — that's what actually matters for smooth playback.</p></div>
    <div class="card"><h3>A device from the supported list</h3><p>Or several, if you want to check more than one.</p></div>
    <div class="card"><h3>An email you'll actually check</h3><p>Login details land there — use the same one if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Same setup, no shortcuts', title: 'Nothing simplified for the trial version', left: true })}
  <p>The trial uses the exact same login process as a paid subscription — same fields, same player app compatibility. The <a href="/setup-guide/">Setup Guide</a> has the exact steps for your device.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What one day can and can\'t settle', left: true })}
  <p>This runs on the actual live catalog, not a curated preview, so it genuinely tells you what a paid plan looks like day to day. It won't fix a slow connection or an aging device, but catching that before committing to a longer term is exactly the reason to spend a dollar first.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'After the day is up', left: true })}
  <p>Access ends on its own after ${trial.duration} — nothing charges automatically past that. If the lineup held up, plans are on the <a href="/pricing/">Pricing page</a> whenever you're ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'The trial refund boundary', left: true })}
  <p>Given the low cost and short window, trial charges generally aren't refundable once login details have gone out — full terms are on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Enter your email below and login details follow shortly. Have a question first? The <a href="/contact/">Contact page</a> reaches a real person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already sold on the current lineup?', lead: 'Skip straight to the plans and pick a term that fits.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
