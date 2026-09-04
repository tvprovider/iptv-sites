import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: '4K Streaming IPTV — Contact Support',
  description: 'Reach 4K Streaming for setup help, billing questions, trial support, or anything else about the IPTV subscription service.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'Talk to a real person',
  lead: 'Setup trouble, a billing question, something about the trial — send a message and expect a reply by email.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'Reach out', left: true })}
      <p>The more specific the message, the faster the reply — mention your device type and exactly what's happening if it's a technical question.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we help with', title: 'Common reasons people write in' })}
  ${featureGrid([
    { title: 'Trial support', text: 'Getting the 24-hour trial running, or figuring out why it isn\'t.' },
    { title: 'Subscription support', text: 'Picking a plan, switching lengths, or timing a renewal.' },
    { title: 'Setup support', text: 'Getting a specific device connected and actually playing channels.' },
    { title: 'Billing questions', text: 'Anything to do with a charge, a price, or how payment works.' },
    { title: 'Troubleshooting', text: 'Buffering, rejected logins, or a channel list that won\'t load.' },
    { title: 'General inquiries', text: 'Anything about the service that doesn\'t fit the categories above.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before you write in', title: 'The FAQ might already answer it', left: true })}
      <p>Devices, billing, the trial — a lot of ground is already covered there in detail.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup?', title: 'The Setup Guide covers most snags', left: true })}
      <p>Device-by-device steps plus a full troubleshooting checklist, in case that's faster than waiting on a reply.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How replies work', left: true })}
  <p>Messages get answered by email in the order they arrive. A clear description of the device and the issue up front tends to cut the back-and-forth down significantly.</p>`,
})}

${ctaBanner({ title: 'Haven\'t subscribed yet?', lead: 'Check the plans, or try the service first for a dollar via the 24-hour trial.' })}
`,
};
