import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Why charge $1 instead of making it free?', a: `A nominal fee — $${trial.price.toFixed(2)} for ${trial.duration} — keeps the trial a genuine test rather than something people grab and forget, which is the entire reason it works.` },
  { q: 'Can I run the trial a second time on a new email?', a: 'It is scoped to one evaluation per customer. That limit is part of what keeps the $1 price sustainable in the first place.' },
  { q: 'Is the trial a stripped-down version of the channel lineup?', a: 'No — you get the exact same live lineup a paying subscriber sees. Nothing is held back to make the paid plans look better by comparison.' },
  { q: 'My device won\'t play anything during the trial — now what?', a: 'Start with the Setup Guide entry for your specific device. Still stuck? Contact support directly — a quick back-and-forth usually clears it up.' },
];

export default {
  slug: 'trial',
  title: '4K Streaming IPTV — 24-Hour Trial for $1.00',
  description: 'Test 4K Streaming IPTV for 24 hours for $1.00 before subscribing — same channel lineup, same servers, real streaming quality on your own setup.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before you subscribe',
  h1: `A full day of access for $${trial.price.toFixed(2)}`,
  lead: `See how the real service performs on your own connection and device for ${trial.duration} before spending anything on a longer plan.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['Nothing longer than 12 months, ever', 'A full day of access for $1', 'The identical lineup paying customers get', 'Ends on its own, nothing to cancel'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: 'The reasoning behind the small fee', left: true })}
  ${answerBox(`<p>A dollar buys ${trial.duration} of the full live lineup — the same one paying subscribers get. Charging something small, rather than nothing, keeps trial signups honest and means the system stays fast for people who are actually deciding whether to subscribe.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: 'What a dollar actually buys', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The complete live channel lineup for ${trial.duration}</li>
        <li>Up to 4K resolution, hardware and source permitting</li>
        <li>One device, fully active for the whole window</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: 'What it does not cover', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything once the ${trial.duration} mark passes</li>
        <li>Two devices logged in on the same trial at once</li>
        <li>A refund after the trial window has actually been used — see the Refund Policy</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'From form submission to first channel', left: true })}
  <p>Submitting the form below triggers an email with your trial login within minutes. Drop those details into a compatible player app and you're watching — no extra approval step in between.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'Three things worth checking first', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>A connection that holds 25 Mbps</h3><p>Sustained speed matters more than a one-off speed-test number for steady 4K playback.</p></div>
    <div class="card"><h3>Any device from our list</h3><p>As long as it can run a compatible IPTV player app, it qualifies.</p></div>
    <div class="card"><h3>An email you'll actually check</h3><p>That's where activation details land — and where a subscription confirmation would go too.</p></div>
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
  ${sectionHead({ eyebrow: 'Getting connected', title: 'No separate "trial mode" to learn', left: true })}
  <p>The install process during the trial matches a paid subscription exactly — same player app, same login fields. The <a href="/setup-guide/">Setup Guide</a> walks through the specifics for whatever device you're testing on.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What a single day can and can\'t tell you', left: true })}
  <p>You're on the actual infrastructure with the actual channel lineup, so this is a real test, not a demo. What it won't fix is a slow home connection or an aging device — but knowing that up front, before paying for months, is exactly the point of running it first.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'Once the clock hits zero', left: true })}
  <p>Access shuts off on its own after ${trial.duration} — no automatic charge follows. Ready to keep going? A subscription plan is one click away on the <a href="/pricing/">Pricing page</a>.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'Where refunds stand on a $1 trial', left: true })}
  <p>Given how small the charge is and how short the window runs, trial fees generally aren't refunded once the login has gone out — the exact terms live on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Drop your email in below to get activation details sent over. Have a question before you commit even a dollar? The <a href="/contact/">Contact page</a> reaches a real person.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already sure this is for you?', lead: 'Skip straight to the four subscription lengths and pick what fits.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
