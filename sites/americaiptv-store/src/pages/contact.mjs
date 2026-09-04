import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — America IPTV Support',
  description: 'Reach America IPTV support for billing, setup, or trial questions. Messages are answered by email, in order, by an actual person.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'One message, one actual reply',
  lead: 'Setup snag, billing question, or something about the trial — write it below and hear back by email, not from a canned response.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Quick detour', title: 'This might already be answered', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Check the FAQ first</h3><p>Devices, billing, and trial questions are already covered there in detail — often faster than waiting on a reply.</p><a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a></div>
    <div class="card"><h3>Stuck on setup right now?</h3><p>Every supported device has its own walkthrough, plus a troubleshooting checklist for the usual snags.</p><a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a></div>
  </div>`,
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'The details that get you a fast answer', left: true })}
      <p>Everything comes back by email, so include your device type and describe exactly what is happening. That one detail usually collapses a three-message back-and-forth into a single reply.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What lands in this inbox', title: 'The messages we deal with most', left: true })}
  ${featureGrid([
    { title: 'Trial not behaving', text: 'It will not start, or it started but something looks off on a specific device.' },
    { title: 'Plan changes', text: 'Moving to a longer or shorter length, or a question before you commit either way.' },
    { title: 'A device that will not cooperate', text: 'When the Setup Guide steps did not quite get you across the finish line.' },
    { title: 'Charges and payment', text: 'Anything about what you were billed or how payment actually works.' },
    { title: 'Playback problems', text: 'Buffering, a rejected login, or a channel stuck on a loading screen.' },
    { title: 'Anything not listed here', text: 'Send it anyway — it still reaches a real person either way.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'Response times, honestly', left: true })}
  <p>Messages are worked through in the order they arrive, entirely by email — no live chat window to wait on. A device type plus a specific description of the problem is usually the difference between a single reply that solves it and several rounds of back-and-forth.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'See every plan on the Pricing page, or try it first for $1.' })}
`,
};
