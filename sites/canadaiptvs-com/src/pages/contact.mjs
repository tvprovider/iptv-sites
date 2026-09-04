import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Canada IPTV Support',
  description: 'Reach Canada IPTV support for setup questions, billing, trial help, or anything else about the subscription — every message gets a real reply.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'Send a message, get an actual reply',
  lead: 'Stuck on activation, unsure about a charge, or just have a question before subscribing — the form below reaches a real person.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What tends to land here', title: 'The messages we get most' })}
  ${featureGrid([
    { title: 'Trial not cooperating', text: 'Something specific stuck during setup, or the trial signup itself.' },
    { title: 'Picking or switching a plan', text: 'Not sure which length fits, or need to change one already underway.' },
    { title: 'Stuck partway through activation', text: 'The Setup Guide got you most of the way, but one step is not landing.' },
    { title: 'A charge that needs explaining', text: 'Anything about pricing, payment methods, or a specific line item.' },
    { title: 'Playback acting up', text: 'Buffering, a rejected login, or a channel refusing to load.' },
    { title: 'None of the above', text: 'Does not fit a category cleanly? Send it in anyway — someone will read it.' },
  ])}`,
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Before you hit send', title: 'What speeds up a reply', left: true })}
      <p>Since the answer comes by email rather than live on this page, include your device and exactly what was happening — that single detail usually turns a three-message back-and-forth into one reply that actually fixes it.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Quicker option', title: 'Check the FAQ first', left: true })}
      <p>Billing, devices, and trial questions are the three topics covered there in the most depth already.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup right now?', title: 'The Setup Guide has device steps', left: true })}
      <p>Each supported device gets its own walkthrough, plus a checklist for the problems people hit most.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Response times', title: 'How messages actually get handled', left: true })}
  <p>Everything is answered in the order it comes in, over email. Mentioning your device type and a precise description of the issue up front is what keeps a reply from turning into a longer thread than it needs to be.</p>`,
})}

${ctaBanner({ title: 'Have not subscribed yet?', lead: 'Compare plan lengths, or try the service first for a dollar with the 24-hour trial.' })}
`,
};
