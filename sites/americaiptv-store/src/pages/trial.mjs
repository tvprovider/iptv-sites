import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Why is there any charge on a "trial"?', a: `A zero-cost trial pulls in far more curiosity clicks than actual evaluators, which bogs the whole system down for everyone waiting on activation. The $${trial.price.toFixed(2)} price tag keeps ${trial.label} fast for people who genuinely intend to check the service out.` },
  { q: 'Can the same person run it twice?', a: 'It is built as a single evaluation per household — part of the reason the price stays this low instead of climbing.' },
  { q: 'Is there a "lite" version running during the trial?', a: 'No separate build exists. You are on the identical servers and channel lineup a paying subscriber uses — nothing about it is scaled down.' },
  { q: 'My device won\'t connect during the trial — now what?', a: 'Pull up the Setup Guide entry for that exact device first. Still stuck after that? Message support directly instead of guessing further on your own.' },
];

export default {
  slug: 'trial',
  title: 'America IPTV 24-Hour Trial — $1.00',
  description: 'A $1.00, 24-hour America IPTV trial. Confirm channel availability, streaming quality, and device compatibility before committing to a plan.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Test it first',
  h1: `A dollar buys a full day of the real thing`,
  lead: `${trial.duration} of live American TV on the actual paid infrastructure — enough time to judge streaming quality and device compatibility before spending on a longer plan.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No yearly lock-in required', 'One dollar buys a full 24 hours', 'The exact catalog subscribers get', 'Stops itself — no cancellation needed'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why $1, not free', title: 'The dollar has one job: keeping the trial useful', left: true })}
  ${answerBox(`<p>Drop the price to zero and the trial fills up with people who were never going to subscribe anyway, slowing activation for everyone else. Charging $${trial.price.toFixed(2)} for ${trial.duration} keeps it moving fast for the people actually deciding.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'What is live', title: "On the table for a dollar", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The complete American channel lineup, running for the entire ${trial.duration}</li>
        <li>Up to 4K, wherever the source content and your device support it</li>
        <li>One device, fully active the whole time</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Off the table', title: "What a dollar does not cover", left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything after the ${trial.duration} window — it cuts off on its own</li>
        <li>Two simultaneous logins on separate devices</li>
        <li>A refund once the trial has been activated and used (Refund Policy has the specifics)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting access', title: 'What happens right after you submit the form', left: true })}
  <p>An email with your activation details typically lands within minutes. Enter them into a compatible player app on whatever device you picked, and the channel list loads on its own — no waiting for a callback or install slot.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Line these up beforehand', title: 'Three things worth checking first', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>A connection near 25 Mbps</h3><p>The sustained number matters far more than whatever a one-off speed test shows.</p></div>
    <div class="card"><h3>Whatever device is already in the room</h3><p>Any of the supported device types work, provided it can run a compatible player app.</p></div>
    <div class="card"><h3>An inbox you'll actually open</h3><p>Activation lands there — pick the address you'd keep using if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'One setup process, not two', title: 'Nothing about this is a stripped-down version', left: true })}
  <p>Trial setup and paid setup are the same steps: install a compatible player, load in your credentials or playlist link, watch. The <a href="/setup-guide/">Setup Guide</a> breaks each device down individually if you want the exact walkthrough.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Be realistic', title: 'What a single day actually settles', left: true })}
  <p>You're on the same servers and the same channel catalog every paying customer uses — this genuinely tests what you'd be buying. What it can't fix is a weak connection or an underpowered device, but finding that out for a dollar beats finding it out after paying for months.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Next steps', title: 'After the clock hits zero', left: true })}
  <p>Access ends automatically once the ${trial.duration} window closes — no charge follows on its own. Liked what you saw? The <a href="/pricing/">Pricing page</a> lists every plan length whenever you're ready to commit.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Fairness', title: 'How refunds work for a trial specifically', left: true })}
  <p>Given how little it costs and how short the window is, a used trial generally isn't eligible for a refund — the full breakdown lives on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      ${sectionHead({ eyebrow: 'Get started', title: 'Kick off your 24-hour trial', left: true })}
      <p>Leave your email below and the activation details follow shortly. Something to ask first? The <a href="/contact/">Contact page</a> reaches an actual person, not a bot.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already sure this is for you?', lead: 'Skip ahead and compare the four subscription lengths directly.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
