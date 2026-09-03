import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — America IPTV Support',
  description: 'Get in touch with America IPTV for setup help, billing questions, trial support, or general inquiries about our American IPTV subscription service.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'Talk to a real person, not a bot',
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
      ${sectionHead({ eyebrow: 'Send a message', title: 'Contact form', left: true })}
      <p>Fill out the form and we'll respond by email. For fastest help, include your device type and a short description of what you're trying to do.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we help with', title: 'Support topics' })}
  ${featureGrid([
    { title: 'Trial support', text: 'Help starting or troubleshooting your 24-hour trial.' },
    { title: 'Subscription support', text: 'Questions about choosing, changing, or renewing a plan.' },
    { title: 'Setup support', text: 'Help getting your device connected and streaming.' },
    { title: 'Billing questions', text: 'Anything related to charges, plan pricing, or payment.' },
    { title: 'Troubleshooting', text: 'Buffering, login errors, or channel loading issues.' },
    { title: 'General inquiries', text: 'Anything else about the service not covered above.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before you write in', title: 'Check the FAQ first', left: true })}
      <p>Many common questions about devices, billing, and the trial are already answered in detail.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Setting up?', title: 'Check the Setup Guide first', left: true })}
      <p>Step-by-step instructions for every supported device, including a troubleshooting checklist.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'Response information', left: true })}
  <p>We respond to messages by email in the order they're received. Including your device type and a clear description of the issue helps us help you faster.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'Compare our plans or test the service first with the 24-hour trial.' })}
`,
};
