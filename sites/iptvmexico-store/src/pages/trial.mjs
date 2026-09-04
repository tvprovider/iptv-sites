import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices, catalog } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Does the trial include Liga MX and Selección Mexicana, or a smaller preview?', a: 'It runs the same lineup a paying subscriber gets, Liga MX and Selección Mexicana included — there is no separate, thinner demo version built just for the trial.' },
  { q: 'Can the same person start more than one trial?', a: 'No — it\'s limited to one attempt per customer, which is part of what keeps the price this low.' },
  { q: 'What can 24 hours realistically tell me?', a: 'Whether the specific Mexican channels and shows you want are actually there, whether your usual device handles them cleanly, and whether your home connection holds up through a full match — none of which a page like this one can settle on its own.' },
  { q: 'My player app won\'t connect during the trial — what should I do?', a: 'Start with the matching device entry on the Setup Guide. If it still won\'t cooperate, contact support with the device model and the exact error message.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Mexico 24-Hour Trial — $1.00',
  description: 'Test the full IPTV Mexico lineup for 24 hours for $1.00 — Liga MX, Selección Mexicana, and novelas, on the same catalog a paying subscriber gets.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before you commit',
  h1: 'A full day on the real lineup, for a dollar',
  lead: `Before paying for a month or a year, spend $${trial.price.toFixed(2)} confirming Liga MX, Selección Mexicana, and the rest of the ${catalog.liveChannels}-channel lineup actually shows up the way this site describes it.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No monthly plan required to start', 'One dollar for the full 24 hours', 'The exact catalog every subscriber gets', 'Ends automatically, nothing to cancel'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why charge a dollar at all', title: 'A tiny fee that filters out the wrong crowd', left: true })}
  ${answerBox(`<p>Make a trial free and most signups come from people browsing out of idle curiosity who never actually check whether Liga MX or a specific novela is really on the lineup. Charging $${trial.price.toFixed(2)} keeps that traffic away and leaves the ${trial.duration} for people seriously weighing this against a Mexican cable subscription or something they're already paying for. It's a small enough amount that the only real reason to skip it is not caring whether the claims hold up.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: 'What you get for the day', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Liga MX, Selección Mexicana, novelas, and the full international catalog, all reachable</li>
        <li>Resolution up to 4K, the same ceiling a paid plan has</li>
        <li>One device, streaming continuously for the whole window</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: 'What the trial doesn\'t cover', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Access beyond the ${trial.duration} mark — it shuts off on schedule</li>
        <li>A second device streaming at the same time as the first</li>
        <li>A refund once the login has already gone out (details on the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Get the most out of the window', title: 'Four things worth doing during the trial', left: true })}
  <ol style="padding-left:20px;color:var(--text-soft);">
    <li>Find a live Liga MX fixture or a Selección rebroadcast and let it run through a full half.</li>
    <li>Search the on-demand library for a novela or series your household already follows.</li>
    <li>Look for the specific Mexican news or regional channel you'd actually tune into.</li>
    <li>Install it on the device you'd use most, not a backup one sitting in a drawer.</li>
  </ol>
  <p>That tells you more in a day than any amount of reading this page would.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'Three things to line up first', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>An internet connection near 25 Mbps</h3><p>What matters is whether it holds steady through an actual match, not just a single speed-test reading.</p></div>
    <div class="card"><h3>A device from the supported list</h3><p>Worth trying on more than one if you haven't settled on which to use going forward.</p></div>
    <div class="card"><h3>An inbox you can check soon</h3><p>The login typically arrives within a few hours, and the same address works again if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Same rails, different clock', title: 'What actually separates the trial from a subscription', left: true })}
  <p>Nothing about activation, device support, or the Mexican and international lineup changes between the two — only the price and how long it lasts. The <a href="/setup-guide/">Setup Guide</a> applies equally to either one.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'When the day ends', title: 'What happens after', left: true })}
  <p>Access switches off on its own once ${trial.duration} is up, with no further charge. If the lineup lived up to what this page claims, every term is waiting on the <a href="/pricing/">Pricing page</a>.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you pay the dollar', title: 'How the charge is handled', left: true })}
  <p>Because the fee is small and the window brief, a trial charge is treated as final once activation details have been sent. Full details are on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Add an email below and a login follows shortly after. Questions before then go through the <a href="/contact/">Contact page</a>, answered by an actual person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Ready to skip straight to a plan?', lead: 'Pick a term on the Pricing page that fits your next torneo.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
