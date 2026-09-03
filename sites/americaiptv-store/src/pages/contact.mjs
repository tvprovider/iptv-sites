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
      ${sectionHead({ eyebrow: 'Send a message', title: 'What speeds up a reply', left: true })}
      <p>Replies go out by email, so mention your device type and what exactly was happening — that alone usually turns two emails into one.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we help with', title: 'What actually comes through this form' })}
  ${featureGrid([
    { title: 'Starting or fixing a trial', text: 'From "how do I begin" to "this is not loading on my TV."' },
    { title: 'Plan decisions', text: 'Picking a length, switching one already in progress, or renewal questions.' },
    { title: 'Getting a device online', text: 'When the Setup Guide alone did not quite cover it.' },
    { title: 'Anything about a charge', text: 'Pricing, payment, or a billing question needing a direct answer.' },
    { title: 'Something is misbehaving', text: 'Buffering, a login that will not accept, a channel stuck loading.' },
    { title: 'Everything else', text: 'If it does not fit a category above, send it in anyway.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before you write in', title: 'Worth a quick check first', left: true })}
      <p>Device questions, billing, and trial details are already answered at length elsewhere.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup right now?', title: 'This might solve it faster', left: true })}
      <p>Device-by-device instructions plus a troubleshooting checklist live here already.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How this actually gets answered', left: true })}
  <p>Messages are handled in the order they arrive, by email. A device type and a specific description of what went wrong is the difference between a one-line reply and a real back-and-forth.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'Compare our plans or test the service first with the 24-hour trial.' })}
`,
};
