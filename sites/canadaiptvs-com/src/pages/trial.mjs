import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Why not just make it free?', a: `A small charge keeps the ${trial.label} filled with people actually evaluating the service, instead of every free-signup opportunist on the internet — which is what keeps it fast and available in the first place.` },
  { q: 'Am I allowed to run it a second time?', a: 'It is built as a one-time check per customer. That restriction is part of why the price can stay this low.' },
  { q: 'Is what I get during the trial a scaled-down version?', a: 'No — same servers, same full channel lineup as a paying customer gets. Whatever you see during the trial is exactly what continues afterward.' },
  { q: 'My device will not connect during the trial — now what?', a: 'Start with the device-specific section of the Setup Guide. Still stuck after that? Contact support with your device type and what is happening.' },
];

export default {
  slug: 'trial',
  title: 'Canada IPTV 24-Hour Trial — $1.00',
  description: 'Test Canada IPTV for a full day for $1.00 before subscribing — real channels, real servers, and a check on whether your device and connection hold up.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before committing',
  h1: `Answer the "will this actually work for me" question first`,
  lead: `${trial.duration} of full access for $${trial.price.toFixed(2)} — enough time to confirm channel availability, streaming quality, and whether your device cooperates, before spending anything more.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No 12-month commitment upfront', 'A full 24 hours for a single dollar', 'Same catalog as every paid plan', 'Shuts off on its own — no cancellation step'],
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'What is inside', title: 'Everything a dollar unlocks', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Every live channel, for the entire ${trial.duration}</li>
        <li>Resolution up to 4K wherever the content and device allow it</li>
        <li>Full activity on one device of your choice</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Where the line sits', title: 'What a dollar does not cover', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything after the ${trial.duration} window — access ends automatically</li>
        <li>Two devices logged in at the same time</li>
        <li>A refund once activation details have gone out (see the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Reasoning', title: 'Why there is a charge at all', left: true })}
  ${answerBox(`<p>Free trials with zero barrier tend to fill up with people who were never going to seriously test anything, which bogs the whole system down. $${trial.price.toFixed(2)} keeps things moving for people who actually want to check whether this fits their setup — and it still costs less than a cup of coffee.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Get ready first', title: 'Three things to have on hand', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps that actually holds</h3><p>A sustained connection matters more than whatever number a one-time speed test gives you.</p></div>
    <div class="card"><h3>Whatever device you plan to test on</h3><p>Anything from the supported list below works for the trial.</p></div>
    <div class="card"><h3>An inbox you will actually check</h3><p>Activation details show up there — reuse that same address if you subscribe afterward.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How it reaches you', title: 'From the form below to a working channel', left: true })}
  <p>Fill out the signup form and your login lands in your inbox not long after. Load it into a compatible player app and you're already watching — no separate "trial mode" to figure out.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Set expectations', title: 'What one day genuinely tells you', left: true })}
  <p>Because it runs on the same infrastructure a paying subscriber uses, the trial is a real test, not a watered-down demo. It will not fix a shaky home connection or an older device struggling with 4K — but finding that out for a dollar beats finding it out after paying for months.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'After the clock stops', title: 'What happens once the day is up', left: true })}
  <p>Access cuts off on its own once ${trial.duration} is up — there is no follow-up charge waiting in the background. Happy with what you saw? The <a href="/pricing/">Pricing page</a> lists every subscription length whenever you are ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Being upfront', title: 'The refund boundary on trials', left: true })}
  <p>Given the low cost and short window, a used trial generally is not eligible for a refund once activation details have been sent out — full detail is on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      ${sectionHead({ eyebrow: 'Get started', title: 'Begin the 24-hour trial', left: true })}
      <p>Drop your email in below and your activation details follow shortly. Something to ask first? The <a href="/contact/">Contact page</a> puts you in touch with an actual person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already sure this is what you want?', lead: 'Skip ahead and compare the four subscription lengths directly.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
