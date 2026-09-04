import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, trialForm, answerBox, iconMedia,
} from '../lib/render.mjs';
import { trial, devices, catalog } from '../data/business.mjs';

const trialFaqs = [
  { q: 'Is this a stripped-down demo, or the actual list?', a: 'The actual list — every category of channel and every VOD title a paying subscriber reaches, with nothing swapped out to look better in a preview.' },
  { q: 'Can one person run the trial more than once?', a: `It is scoped to a single attempt per customer. That restriction is part of how the price stays this low.` },
  { q: 'What does a single day realistically prove?', a: 'Whether the specific channels and titles on your own list are genuinely present, whether the device you use daily plays them cleanly, and whether your connection holds — three things a page of text cannot answer for you.' },
  { q: 'A player app refuses to connect. What now?', a: 'Check the Setup Guide entry for that device first. If it still will not cooperate, message support with the device model and the exact error text shown.' },
];

export default {
  slug: 'trial',
  title: 'IPTV List 24-Hour Trial — $1.00',
  description: 'Check IPTV List against your own list for 24 hours, for $1.00 — the real channel and VOD catalog, not a preview, before you subscribe to a plan.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Free Trial' }]), faqSchema(trialFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Free Trial' }])}
${hero({
  eyebrow: 'Verify it yourself',
  h1: 'One day, the real list, a single dollar',
  lead: `${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, reachable exactly as a paying subscriber reaches them — not a curated slice built to demo well.`,
  primaryCta: { label: 'Start the trial below', href: '#trial-signup' },
  secondaryCta: { label: 'Compare subscription plans', href: '/pricing/' },
  media: iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration'),
  dark: true,
  trustItems: ['No months-long commitment required first', 'A single dollar covers the entire day', 'Identical catalog to every paid plan', 'Access ends on its own automatically'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why a dollar, and not zero', title: 'A small fee, doing real work', left: true })}
  ${answerBox(`<p>A completely free offer draws a crowd of people who click through out of curiosity and never actually compare anything against their own list. Attaching a $${trial.price.toFixed(2)} charge weeds that traffic out on its own, leaving the ${trial.duration} window for people seriously deciding whether this replaces what they currently pay for. It is the same logic behind trusting a paid inspection over a free one.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Included', title: 'What actually turns on', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The entire live and on-demand catalog for the full ${trial.duration} period</li>
        <li>Resolution up to 4K, identical to a paying account</li>
        <li>One device, active continuously through the window</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Not included', title: 'Where the line gets drawn', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Anything past the ${trial.duration} cutoff — access ends automatically</li>
        <li>Simultaneous streams from a second device on the same login</li>
        <li>A refund after the login has already been sent out (see the Refund Policy)</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Make the day count', title: 'A short list of what to actually check', left: true })}
  <ol style="padding-left:20px;color:var(--text-soft);">
    <li>Name two or three channels you currently pay someone else for and confirm they show up here too.</li>
    <li>Search the on-demand section for a title or two your household has been meaning to watch.</li>
    <li>Load everything on the device you would genuinely use night to night, not a spare one lying around.</li>
    <li>Leave a stream running for a stretch and watch whether it holds steady.</li>
  </ol>
  <p>That produces a far more useful answer than reading this page a second time.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you sign up', title: 'Three things to have ready', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>A connection that holds 25 Mbps</h3><p>What matters is whether that number survives an actual evening, not whether it appears once on a speed test.</p></div>
    <div class="card"><h3>One of the devices below</h3><p>Test it on more than one if you are still deciding between them.</p></div>
    <div class="card"><h3>An inbox open right now</h3><p>The login lands there within a few hours — the same address works again later if you subscribe.</p></div>
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
  ${sectionHead({ eyebrow: 'Not a scaled-back version', title: 'The trial and a paid plan run on identical rails', left: true })}
  <p>Activation, device support, and the catalog itself do not change between a trial and a subscription — only the price and the clock differ. The <a href="/setup-guide/">Setup Guide</a> covers device steps that apply either way.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'After the clock stops', title: 'What happens next', left: true })}
  <p>The window closes on its own once ${trial.duration} has passed, with nothing further billed. If the list held up against your own, the <a href="/pricing/">Pricing page</a> has every term ready when you are.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One note before you pay', title: 'How the trial charge is handled', left: true })}
  <p>Given the size of the fee and the length of the window, a trial charge is treated as final once the login has gone out. Full wording sits on the <a href="/refund-policy/">Refund Policy</a> page.</p>`,
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
      <p>Enter an email below and a login follows not long after. Anything to ask beforehand goes through the <a href="/contact/">Contact page</a>, where an actual person picks it up.</p>
    </div>
    ${trialForm()}
  </div>`,
})}

${ctaBanner({ title: 'Already satisfied with what you found?', lead: 'Jump straight to the plans and pick a term that fits.', primaryCta: { label: 'View Plans', href: '/pricing/' }, secondaryCta: { label: 'Read the Setup Guide', href: '/setup-guide/' } })}
`,
};
