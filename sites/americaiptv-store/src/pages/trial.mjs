import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Why does the trial cost anything at all?', a: `A small charge keeps the ${trial.label} genuine — free trials attract volume that has nothing to do with actually evaluating the service. $${trial.price.toFixed(2)} filters that out.` },
  { q: 'Can I run it a second time?', a: 'It is designed as a one-time check per customer, which is part of what keeps the price this low in the first place.' },
  { q: 'Is the trial a scaled-down preview?', a: 'No. It runs on the identical infrastructure and channel lineup as a paid subscription — what you see is exactly what you would be paying for.' },
  { q: 'What if my device will not connect?', a: 'Start with the Setup Guide for that specific device. If it is still not working, reach out to support directly rather than troubleshooting blind.' },
];

export default {
  slug: 'trial',
  title: 'America IPTV 24-Hour Trial — $1.00',
  description: 'Try America IPTV for 24 hours for just $1.00. Test the American live channel lineup, streaming quality, and device compatibility before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: `See the channel lineup before you pay full price — ${trial.label} for $${trial.price.toFixed(2)}`,
  lead: `Test real streaming quality, channel availability, and device compatibility for ${trial.duration} before committing to a subscription.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No annual contract', '$1 for 24 hours of access', 'Same channel lineup as paid plans', 'Cancel anytime, no auto-renewal'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: 'Why the trial is not just given away', left: true })}
  ${answerBox(`<p>A completely free trial gets flooded with people who have no intention of subscribing, which slows the whole thing down. $${trial.price.toFixed(2)} for ${trial.duration} keeps it fast and available for people actually deciding whether to subscribe.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: "What a dollar gets you", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The full live channel lineup for all of ${trial.duration}</li>
        <li>Up to 4K wherever your content and device support it</li>
        <li>One device, fully active</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: "The boundaries", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything past the ${trial.duration} mark — access ends on its own</li>
        <li>Two devices running at once</li>
        <li>A refund once the trial has actually been used (see the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'From submitting the form to watching', left: true })}
  <p>The form below triggers an email with your activation details shortly after. Load them into a compatible player app and you are watching in minutes, not waiting on a callback.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'What to have ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps, held steady</h3><p>Sustained speed matters more than a headline peak number for consistent 4K.</p></div>
    <div class="card"><h3>Whatever you already own</h3><p>Any of the supported device types, as long as it can run a compatible player app.</p></div>
    <div class="card"><h3>An email you check regularly</h3><p>That is where activation details go — use the one you would keep using afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Getting connected', title: 'No separate trial setup to learn', left: true })}
  <p>The steps are exactly the same as for a paid plan: install a compatible player app, drop in your credentials or playlist URL, and start watching. The <a href="/setup-guide/">Setup Guide</a> has device-specific instructions.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What one day can and cannot prove', left: true })}
  <p>You are on the real service — same servers, same channels — so this is not a stripped-down demo. What you cannot control through the trial is your own network and hardware, which is the exact thing worth checking before paying for a longer plan.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'What happens when the day ends', left: true })}
  <p>Access shuts off automatically after ${trial.duration} — nothing charges on its own after that. If it went well, plans are on the <a href="/pricing/">Pricing page</a> whenever you are ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'Where the refund line sits', left: true })}
  <p>Given the small fee and short window, trial charges generally are not refundable once your activation details have gone out — full terms are on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Drop your email in below and activation details follow shortly after. Questions first? The <a href="/contact/">Contact page</a> reaches an actual person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Ready to skip the trial and subscribe?', lead: 'Compare our four subscription plans and choose the length that fits you.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
