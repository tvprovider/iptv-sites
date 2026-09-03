import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Why charge a dollar instead of making it free?', a: `A token charge keeps the ${trial.label} honest — it filters out throwaway signups so the trial stays available and fast for people who actually want to evaluate the service.` },
  { q: 'Can I run the trial more than once?', a: 'It is meant as a one-time evaluation per customer. That keeps the price low and the trial genuine rather than something people cycle through repeatedly.' },
  { q: 'Is the trial a cut-down version of the real service?', a: 'No — it runs on the same channel lineup and the same infrastructure as a paid subscription. What you see during the trial is what you would get after subscribing.' },
  { q: 'What if it does not work on my device?', a: 'Check the Setup Guide for your specific device first. If it still is not working, contact support — the goal is to get it running, not leave you guessing.' },
];

export default {
  slug: 'trial',
  title: 'Canada IPTV 24-Hour Trial — $1.00',
  description: 'Try Canada IPTV for 24 hours for just $1.00. Test the Canadian live channel lineup, streaming quality, and device compatibility before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: `A full day of access for a dollar — ${trial.label} for $${trial.price.toFixed(2)}`,
  lead: `Test real streaming quality, channel availability, and device compatibility for ${trial.duration} before committing to a subscription.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No annual contract', '$1 for 24 hours of access', 'Same channel lineup as paid plans', 'Cancel anytime, no auto-renewal'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: `The reasoning behind the dollar`, left: true })}
  ${answerBox(`<p>A free trial with no barrier attracts far more throwaway signups than genuine evaluators, which slows things down for everyone. Charging $${trial.price.toFixed(2)} for ${trial.duration} keeps the trial fast, available, and honest, while still costing less than a coffee.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: "What the dollar actually buys", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The complete live channel lineup for the full ${trial.duration}</li>
        <li>Up to 4K where your content and device support it</li>
        <li>One device of your choice, fully active</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: "What it is not", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Access past the ${trial.duration} mark — it stops automatically</li>
        <li>Running on more than one device at the same time</li>
        <li>A refund once the trial has actually been used (details in the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'From form to first channel', left: true })}
  <p>Submit the form below and activation details arrive by email shortly after. Drop them into a compatible player app and streaming starts within minutes, not hours.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'What you need on hand', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>A connection that can hold 25 Mbps</h3><p>Sustained, not just peak — that is what smooth 4K playback actually depends on.</p></div>
    <div class="card"><h3>Any supported device</h3><p>Whatever you already own that can run a compatible IPTV player app.</p></div>
    <div class="card"><h3>An email address you check</h3><p>Your activation details land there — use the same one if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Getting connected', title: 'Same steps as a paid subscription', left: true })}
  <p>There is no separate "trial mode" to figure out — install a compatible player app, enter your credentials or playlist URL, and you're watching. The <a href="/setup-guide/">Setup Guide</a> has the exact steps per device.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What the trial can and cannot tell you', left: true })}
  <p>You are on the real infrastructure with the real channel lineup, so this is a genuine test, not a demo. What you still cannot control is your own internet and device — which is exactly the point of running the trial before paying for a longer plan.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'When the clock runs out', left: true })}
  <p>Access ends on its own after ${trial.duration} — no charge follows it automatically. If it worked for you, pick a plan on the <a href="/pricing/">Pricing page</a> whenever you're ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'Where refunds stop applying', left: true })}
  <p>Given the low fee and short window, trial charges are generally not refundable once your activation details have gone out — the full policy is on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Enter your email below and activation details follow shortly. Have a question first? The <a href="/contact/">Contact page</a> reaches a real person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Ready to skip the trial and subscribe?', lead: 'Compare our four subscription plans and choose the length that fits you.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
