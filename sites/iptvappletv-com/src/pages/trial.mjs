import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Will the trial tell me if my Apple TV generation is good enough?', a: `Yes — that is exactly what ${trial.duration} on the real service is for. Older Apple TV HD units cap at 1080p; Apple TV 4K models can push higher where the source allows it.` },
  { q: 'Can I run the trial more than once?', a: 'It is meant as a one-time evaluation per customer, which is part of what keeps the price this low.' },
  { q: 'Is the trial a cut-down version of the app?', a: 'No — same channel lineup, same servers as a paid subscription. What runs during the trial is what you would get afterward.' },
  { q: 'What if I cannot get a player app installed at all?', a: 'Check the Apple TV section of the Setup Guide — it covers both the App Store route and sideloading. If it is still not working, contact support with your Apple TV generation.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Apple TV 24-Hour Trial — $1.00',
  description: 'Try IPTV on your Apple TV for 24 hours for just $1.00. Test real streaming quality and confirm your Apple TV generation handles it before subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: `Find out if your Apple TV handles this before paying more than a dollar`,
  lead: `Test real streaming quality, channel availability, and Apple TV compatibility for ${trial.duration} before committing to a subscription.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No contract to sign first', 'A full day on your Apple TV for $1', 'The same lineup as a paid plan', 'Auto-expires — nothing to cancel'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: `Why there is a small charge at all`, left: true })}
  ${answerBox(`<p>A completely free trial pulls in a lot of signups that were never going to evaluate anything, which slows the whole system down. $${trial.price.toFixed(2)} for ${trial.duration} keeps it fast and available for people actually deciding whether their Apple TV setup works well with this.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: "What one dollar covers", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The full live channel lineup for the entire ${trial.duration}</li>
        <li>Up to 4K on Apple TV 4K where the source supports it</li>
        <li>One device, fully active</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: "The boundaries", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything past the ${trial.duration} mark — it stops on its own</li>
        <li>Two devices running the same login at once</li>
        <li>A refund once the trial has actually been used (see the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'From this form to your Apple TV home screen', left: true })}
  <p>Submit the form below and activation details land by email shortly after. From there it is either the App Store install or a quick sideload — the Setup Guide covers both.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'What to have ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>25 Mbps, sustained</h3><p>Not just a peak number — held steady is what actually matters for smooth 4K.</p></div>
    <div class="card"><h3>Your Apple TV, powered on</h3><p>Or any other supported device, if you want to test somewhere else too.</p></div>
    <div class="card"><h3>An email you actually check</h3><p>Activation details land there — use the same one if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Getting connected', title: 'No separate "trial version" to figure out', left: true })}
  <p>The trial uses the exact same App Store or sideload process as a paid subscription — nothing simplified, nothing different. The <a href="/setup-guide/">Setup Guide</a> has the exact steps for your Apple TV.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What one day actually settles', left: true })}
  <p>You are on the real infrastructure with the real channel lineup, so this genuinely tests the thing you would be paying for. What it cannot fix is your own connection or an Apple TV generation that struggles with 4K — but knowing that before paying for months is the entire point.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'After the clock runs out', left: true })}
  <p>Access stops on its own after ${trial.duration} — nothing charges automatically beyond that. If your Apple TV handled it well, plans are on the <a href="/pricing/">Pricing page</a> whenever you are ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'Where the refund line sits', left: true })}
  <p>Given the small fee and short window, trial charges generally are not refundable once activation details have been sent — full terms are on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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

${ctaBanner({ title: 'Confident enough to skip straight to a plan?', lead: 'Compare the four subscription lengths and pick the one that fits.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
