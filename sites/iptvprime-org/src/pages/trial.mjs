import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, comparisonTable, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { trial, devices, catalog } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is the trial catalog smaller than what a subscriber gets?', a: 'No — it\'s the same catalog, not a scaled-back preview built just to hand out for a dollar. If a channel or title is missing during the trial, it\'s missing for subscribers too.' },
  { q: 'Can the same person run the trial a second time on a different email?', a: 'It\'s capped at one attempt per customer. That limit is what keeps offering the full catalog for $1 sustainable in the first place.' },
  { q: 'What does one day actually settle that reading this site doesn\'t?', a: 'Three things specifically: whether the titles you care about are really there, how fast a real support reply actually comes back, and whether your own connection holds up. None of those show up in a page of marketing copy.' },
  { q: 'A device won\'t connect partway through the trial window — what now?', a: 'Check that device\'s section on the Setup Guide first. Still nothing? Message support with the device model and the exact error — that\'s precisely the kind of question the trial exists to let you test.' },
];

export default {
  slug: 'trial',
  title: 'IPTV Prime 24-Hour Trial — $1.00',
  description: 'Try IPTV Prime for 24 hours for $1.00 — the same channels, VOD library, and support line a paying subscriber gets, no scaled-down version.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Try before you commit',
  h1: 'A dollar, a day, the actual catalog — not a demo of it',
  lead: `$${trial.price.toFixed(2)} puts the full ${catalog.liveChannels}-channel, ${catalog.vods}-title catalog on your own screen for ${trial.duration}, running exactly the way it would for a paying subscriber.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No subscription needed to start', 'A full day for one dollar', 'The identical catalog a paid plan gets', 'Shuts off automatically — nothing to cancel'],
})}

${section({
  id: 'trial-signup',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Fill this in, the login follows shortly', left: true })}
      <p>An email address is the only thing this form requires. Want to ask something before starting the clock? The <a href="/contact/">Contact page</a> reaches a person, not an automated reply.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why charge anything at all', title: `What the $${trial.price.toFixed(2)} is actually for`, left: true })}
  ${answerBox(`<p>A free offer pulls in a lot of people who never intend to look closely at anything — they click, glance, and leave, without ever checking whether a specific title is really there or sending support an actual question. A small, deliberate charge changes who shows up: it\'s cheap enough that anyone seriously comparing providers pays it without a second thought, and that filtering is what keeps a full-catalog, ${trial.duration} trial worth running at all.</p>`)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What\'s in, what\'s not', title: 'The trial in one table', left: true })}
  ${comparisonTable(
    ['', 'During the trial'],
    [
      ['Live channel catalog', `Full ${catalog.liveChannels}-channel lineup, nothing gated off`],
      ['VOD library', `Full ${catalog.vods}-title library`],
      ['Resolution ceiling', 'Up to 4K, same as a paying plan, source and setup permitting'],
      ['Simultaneous devices', 'One at a time'],
      ['Duration', `${trial.duration}, then access ends automatically`],
      ['Refund after activation', 'Not applicable once the login has been sent — see the Refund Policy'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Make the day count', title: 'Four things worth doing before the clock runs out' })}
  ${featureGrid([
    { title: 'Look up something specific', text: 'A channel or title you already watch elsewhere — confirm it\'s genuinely on the catalog, not just implied by a big number.' },
    { title: 'Send support a real question', text: 'Through Contact, and time how long a useful reply actually takes to arrive.' },
    { title: 'Switch between two devices', text: 'Confirm the catalog looks identical on each — nothing should be trimmed depending on the screen.' },
    { title: 'Use the device you\'d actually keep using', text: 'Not a spare one gathering dust — the trial should reflect how this would really get watched.' },
  ], 4)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you start the clock', title: 'Three things worth having ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Roughly 25 Mbps, sustained</h3><p>A single speed-test snapshot matters less than whether the connection holds up under an actual stream.</p></div>
    <div class="card"><h3>A device from the supported list</h3><p>Undecided which one you\'ll end up using? This is a reasonable excuse to test more than one.</p></div>
    <div class="card"><h3>An inbox you\'ll check soon</h3><p>The login usually arrives within a few hours, and the same address carries over if you subscribe afterward.</p></div>
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
  ${sectionHead({ eyebrow: 'Trial vs. subscription', title: 'The only two things that actually differ', left: true })}
  <p>Price and duration. Activation, device support, the catalog, and the support line behind it are identical either way — the <a href="/setup-guide/">Setup Guide</a> doesn\'t even distinguish between the two.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'After the 24 hours', title: 'What happens next', left: true })}
  <p>Access stops on its own — no further charge, nothing to cancel. If it held up against what this page claimed, every plan length is sitting on <a href="/pricing/">Pricing</a> whenever you\'re ready to move on it.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'On the dollar itself', title: 'How that charge is treated once the login goes out', left: true })}
  <p>Given the size of the fee and the length of the window, a trial charge is treated as final once activation details have been sent. Full terms live on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Trial FAQ', left: true })}
  ${faqAccordion(trialFaqs)}`,
})}

${ctaBanner({ title: 'Already decided? Go straight to a plan', lead: 'Every length on Pricing reaches the same catalog you\'d see in the trial.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
