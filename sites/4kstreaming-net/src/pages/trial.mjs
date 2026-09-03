import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial really only $1.00?', a: `Yes. The ${trial.label} costs $${trial.price.toFixed(2)} and gives you ${trial.duration} of access — it exists to let you test the service, not as a marketing gimmick.` },
  { q: 'Can I get a second trial?', a: 'Trials are intended as a one-time evaluation per customer so we can keep the price low and genuine.' },
  { q: 'Does the trial include every channel?', a: 'The trial gives you access to the same live channel lineup as a paid subscription, so what you see is representative of the full service.' },
  { q: 'What if the trial doesn’t work on my device?', a: 'Check our Setup Guide for your device first. If you still have trouble, contact support — we’d rather help you get it working than have you guess.' },
];

export default {
  slug: 'trial',
  title: '24-Hour IPTV Trial — $1.00 | 4K Streaming',
  description: 'Try 4K Streaming IPTV for 24 hours for just $1.00. Test streaming quality, channel availability, and device compatibility before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before you subscribe',
  h1: `${trial.label} — $${trial.price.toFixed(2)}`,
  lead: `Test real streaming quality, channel availability, and device compatibility for ${trial.duration} before committing to a subscription.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No long-term contract', '$1 for 24 hours of access', 'Same channel lineup as paid plans', 'Cancel anytime, no auto-renewal'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: `What the ${trial.duration} trial is`, left: true })}
  ${answerBox(`<p>The ${trial.label} gives you ${trial.duration} of full access to the live channel lineup for a nominal $${trial.price.toFixed(2)} charge. The small fee exists to keep trials genuine and limit abuse, while still making it easy to test the service before paying full subscription price.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: "What's included", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Full access to the live channel lineup for ${trial.duration}</li>
        <li>Up to 4K resolution where your device and content support it</li>
        <li>Access on one device of your choice</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: "What's not included", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Access beyond the ${trial.duration} window</li>
        <li>Simultaneous use on multiple devices</li>
        <li>A refund of the trial fee once the trial period has been used (see our Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'Activation process', left: true })}
  <p>After you submit the form below, we send your trial activation details by email. Enter them into a compatible player app on your device and you can start watching within minutes.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'Requirements', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Internet connection</h3><p>A stable connection with at least 25 Mbps sustained download speed is recommended for consistent 4K playback.</p></div>
    <div class="card"><h3>A compatible device</h3><p>Any of our supported device types with the ability to install a compatible IPTV player app.</p></div>
    <div class="card"><h3>A valid email address</h3><p>Used to send your activation details — the same address you'll use if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Getting connected', title: 'Setup process', left: true })}
  <p>Setup during the trial is identical to setup for a paid subscription: install a compatible player app, enter your credentials or playlist URL, and start watching. See our <a href="/setup-guide/">Setup Guide</a> for device-specific steps.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'Streaming expectations during the trial', left: true })}
  <p>Your trial experience reflects the real service — the same infrastructure, the same channel lineup. Streaming quality still depends on your internet connection, device, and the source content, so use the trial specifically to check these factors for your own setup.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'What happens after the trial', left: true })}
  <p>Your trial access ends automatically after ${trial.duration}. Nothing renews or charges automatically — if you'd like to continue, choose a subscription plan on our <a href="/pricing/">Pricing page</a>.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'Refund information', left: true })}
  <p>Because the trial fee is nominal and the access window is short, trial charges are generally non-refundable once activation details have been sent — full terms are in our <a href="/refund-policy/">Refund Policy</a>.</p>`,
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
      <p>Enter your email below and we'll send your activation details. Need help first? Visit our <a href="/contact/">Contact page</a>.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Prefer to subscribe directly?', lead: 'Compare our four subscription plans and choose the length that fits you.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
