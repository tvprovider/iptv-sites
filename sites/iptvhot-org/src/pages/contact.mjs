import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — IPTV Hot Support',
  description: 'Get in touch with IPTV Hot for setup help, billing questions, trial support, or general inquiries about the subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'A real person reads what you send',
  lead: 'Whatever the issue — installation, a charge, the trial — write in and someone reads it, no ticket-bot in between.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'What helps get a faster answer', left: true })}
      <p>Mention your device type and whatever error or message you're actually seeing — that alone answers most of the follow-up questions before they get asked.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What comes through this form', title: 'The most common reasons people write in' })}
  ${featureGrid([
    { title: 'Player app not connecting', text: 'Working through login errors device by device.' },
    { title: 'Trial questions', text: 'Starting one, or figuring out why it\'s not behaving.' },
    { title: 'Changing a plan length', text: 'Before or between renewals, either works.' },
    { title: 'Billing questions', text: 'A charge that needs a clear explanation.' },
    { title: 'Playback issues', text: 'Buffering, a rejected login, or a channel that won\'t load.' },
    { title: 'Anything else', text: 'If it doesn\'t fit a category above, send it anyway.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before writing in', title: 'The FAQ might already have it', left: true })}
      <p>Billing, the trial, and setup are the topics that come up most — already covered there in more depth than a single reply usually gives.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup right now?', title: 'The Setup Guide might be faster', left: true })}
      <p>Device-by-device installation steps, plus a troubleshooting checklist.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How a reply actually gets shaped', left: true })}
  <p>Messages are handled in the order they arrive, by email. A specific description of what's happening, plus your device type, is the difference between a one-line reply and something that actually resolves it.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'Compare plans or test the service first with the 24-hour trial.' })}
`,
};
