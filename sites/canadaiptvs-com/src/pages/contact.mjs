import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — Canada IPTV Support',
  description: 'Get in touch with Canada IPTV for setup help, billing questions, trial support, or general inquiries about our Canadian IPTV subscription service.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'A message that actually reaches someone',
  lead: 'Questions about setup, billing, or the trial? Send us a message and we\'ll follow up by email.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'What to include', left: true })}
      <p>A reply comes by email, not through this page — so mention your device and what you were trying to do when it comes up. It cuts the back-and-forth down to one message instead of three.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we help with', title: 'The kinds of messages that land here' })}
  ${featureGrid([
    { title: 'Getting the trial working', text: 'Starting it, or figuring out why it is not behaving on a specific device.' },
    { title: 'Choosing or changing a plan', text: 'Deciding between lengths, or switching one already in progress.' },
    { title: 'Getting a device connected', text: 'Walking through activation when the Setup Guide alone was not quite enough.' },
    { title: 'Anything about a charge', text: 'Pricing, payment, or a billing question that needs a straight answer.' },
    { title: 'Something is not playing right', text: 'Buffering, a login that will not take, or a channel that will not load.' },
    { title: 'Anything else', text: 'If it does not fit the categories above, send it anyway.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before you write in', title: 'The FAQ might already have it', left: true })}
      <p>Devices, billing, and the trial are the three topics people ask about most, and they are already covered there in detail.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Setting up right now?', title: 'The Setup Guide covers this too', left: true })}
      <p>Every supported device gets its own steps, plus a troubleshooting checklist for the common snags.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How replies actually go out', left: true })}
  <p>Messages get answered in the order they arrive, by email. A device type and a specific description of what is happening turns a slow back-and-forth into one reply that actually solves it.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'Compare our plans or test the service first with the 24-hour trial.' })}
`,
};
