import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';
import { site } from '../data/business.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — IPTV Apple TV Support',
  description: 'Get in touch with IPTV Apple TV for setup help, billing questions, trial support, or general inquiries about our IPTV Apple TV subscription service.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Contact',
  h1: 'Stuck on Apple TV? This is who to tell',
  lead: 'Questions about setup, billing, or the trial? Send a message and expect a reply by email.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'What actually speeds things up', left: true })}
      <p>Mention your Apple TV generation (HD, or which 4K model) and whether you went the App Store route or sideloaded — that alone usually answers half the follow-up questions before they get asked.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What we help with', title: 'What actually comes through this form' })}
  ${featureGrid([
    { title: 'App Store app not showing up', text: 'Confirming whether one is currently listed, and walking through sideloading if not.' },
    { title: 'Trial questions', text: 'Starting it, or figuring out why it is not behaving on your specific Apple TV.' },
    { title: 'Plan changes', text: 'Picking a length, or switching one already in progress.' },
    { title: 'Billing questions', text: 'Anything about a charge that needs a straight answer.' },
    { title: 'Playback problems', text: 'Buffering, a login that will not take, or a channel stuck loading.' },
    { title: 'Everything else', text: 'If it does not fit a category above, send it in anyway.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Before you write in', title: 'The FAQ covers a lot of this', left: true })}
      <p>Apple TV compatibility, billing, and the trial are the three topics that come up most, already answered in detail there.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup right now?', title: 'The Setup Guide might solve it faster', left: true })}
      <p>Both the App Store method and sideloading are covered in full, plus a troubleshooting checklist.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How this actually gets answered', left: true })}
  <p>Messages are handled in order, by email. Your Apple TV generation plus a specific description of what is happening is the difference between a one-line reply and a real back-and-forth.</p>`,
})}

${ctaBanner({ title: 'Not subscribed yet?', lead: 'Compare our plans or test the service first with the 24-hour trial.' })}
`,
};
