import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices, catalog } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial a stripped-down preview, or the real Ekstraklasa lineup?', a: 'The real thing — the same channels and catalog a paying subscriber logs into, Ekstraklasa included. There\'s no separate, thinner version built just to hand out for a dollar.' },
  { q: 'Can I run the trial twice under a different email?', a: 'It\'s capped at one attempt per customer. That limit is part of what keeps the dollar price sustainable.' },
  { q: 'What can a single day of testing actually prove?', a: 'Whether the specific Polish channels you\'re after are genuinely there, whether your device plays nicely with the login, and whether your home connection survives a full match — three things no amount of reading a page like this one can confirm on its own.' },
  { q: 'The app won\'t connect during my trial window — now what?', a: 'Check the matching device section on the Setup Guide first. Still stuck? Message support with the device model and the exact error text.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Poland 24-Hour Trial — $1.00',
  description: 'Test the full IPTV Poland lineup for 24 hours for $1.00 — Ekstraklasa and Polish TV on the same catalog a paying subscriber gets.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before you commit',
  h1: 'One dollar buys a full day on the real thing',
  lead: `Rather than take this page's word for it, spend $${trial.price.toFixed(2)} and put Ekstraklasa and the rest of the ${catalog.liveChannels}-channel lineup on your own screen for a full day before any longer plan is on the table.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No subscription needed to try it', 'A full day for one dollar', 'Identical catalog to a paid plan', 'Shuts off on its own, nothing to cancel'],
})}

${section({
  id: 'trial-signup',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Kick off your 24 hours now', left: true })}
      <p>An email address below is all it takes — the login lands shortly after. Anything you want to ask first goes through the <a href="/contact/">Contact page</a>, where a person actually reads it.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why not just make it free', title: 'The dollar does real work', left: true })}
  ${answerBox(`<p>A free trial mostly draws people clicking out of idle curiosity, most of whom never actually check whether Ekstraklasa or a specific Polish channel is really there. Putting even a small $${trial.price.toFixed(2)} charge in front of it filters that traffic out and leaves the ${trial.duration} for people genuinely comparing this against a Polish cable subscription or a competing provider. The amount is small enough that skipping it mostly signals not caring whether the claims on this site hold up.</p>`)}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'In the box', title: 'What the day actually covers', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Ekstraklasa, Polish news and entertainment, plus the entire international catalog — all reachable, nothing gated off</li>
        <li>The same 4K ceiling a paying plan has, source and setup permitting</li>
        <li>One device, streaming without interruption for the full window</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Left out on purpose', title: 'Where the trial stops', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything past the ${trial.duration} mark — access cuts off automatically, on schedule</li>
        <li>A second device streaming alongside the first</li>
        <li>A refund once the login has already been sent (see the Refund Policy for the full terms)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Make the day count', title: 'Four things worth trying while the clock is running', left: true })}
  <ol style="padding-left:20px;color:var(--text-soft);">
    <li>Pull up whatever Ekstraklasa fixture is live, or the nearest replay, and watch a full half through.</li>
    <li>Search the on-demand library for something your household already follows.</li>
    <li>Look up the specific Polish news or regional station you'd genuinely tune into at home.</li>
    <li>Test it on the device you'd actually use day to day, not a spare one gathering dust.</li>
  </ol>
  <p>None of that takes long, and it settles more than another hour of reading this site would.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before the clock starts', title: 'Three things worth having ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Roughly 25 Mbps, held steady</h3><p>A one-off speed-test number matters less than whether it survives an actual live match without dipping.</p></div>
    <div class="card"><h3>A device from the supported list</h3><p>If you haven't settled on one yet, this is a good excuse to try more than one.</p></div>
    <div class="card"><h3>An inbox you'll check soon</h3><p>The login usually shows up within a few hours, and that same address carries over if you subscribe afterward.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What actually differs', title: 'Trial vs. subscription, in one line', left: true })}
  <p>Activation works the same, device support is the same, and the Polish and international lineup is the same — only the price tag and the clock differ. The <a href="/setup-guide/">Setup Guide</a> doesn't distinguish between the two at all.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When 24 hours is up', title: 'What happens next', left: true })}
  <p>Access ends on its own, no further charge involved. If what you saw matched what this page claims, every subscription length is sitting on the <a href="/pricing/">Pricing page</a> whenever you're ready.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'One more thing before paying', title: 'How the dollar charge is treated', left: true })}
  <p>Given how small the fee is and how short the window runs, a trial charge is considered final once the login has gone out. The full terms live on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Trial FAQ', left: true })}
  ${faqAccordion(trialFaqs)}`,
})}

${ctaBanner({ title: 'Already sure? Skip straight to a plan', lead: 'Pick a term on the Pricing page that fits your Ekstraklasa season.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
