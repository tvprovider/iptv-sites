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
  eyebrow: 'Support',
  h1: 'Tell us your Apple TV model and what is happening',
  lead: 'That combination alone resolves most tickets on the first reply — the form below takes both.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Reach a real person', title: 'Two details worth including', left: true })}
      <p>Which Apple TV you're on (HD, or a specific 4K generation) and whether you went through the App Store or sideloaded — those two facts alone cut out most of the usual back-and-forth.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What lands in this inbox', title: 'The tickets we see most' })}
  ${featureGrid([
    { title: 'Nothing compatible listed in the App Store', text: 'We check current availability and walk through the Xcode sideload path if that\'s where you\'re stuck.' },
    { title: 'Trial not activating', text: 'Usually a typo in the login field or a delay on the email — quick to check either way.' },
    { title: 'Switching plan length', text: 'Mid-term or between renewals, either works.' },
    { title: 'A charge that needs explaining', text: 'We\'ll pull it up and walk through exactly what it was for.' },
    { title: 'Stuttering, freezing, or a rejected login', text: 'Tell us the symptom and we narrow it down from there.' },
    { title: 'Anything not listed here', text: 'Send it anyway — this list isn\'t exhaustive.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Faster than waiting on a reply', title: 'Check the FAQ first', left: true })}
      <p>App Store churn, sideloading, billing, and the trial are already answered there in more depth than a single email reply usually covers.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-installation right now?', title: 'The Setup Guide walks both paths', left: true })}
      <p>App Store and Xcode sideloading, side by side, with a troubleshooting checklist at the end.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Response time', title: 'How a reply actually gets shaped', left: true })}
  <p>Tickets go out in the order they arrive, by email. A vague "it's not working" gets a vague first reply; naming the Apple TV generation and the exact symptom gets a useful one on the first try.</p>`,
})}

${ctaBanner({ title: 'Haven\'t subscribed yet?', lead: 'Compare plan lengths, or test it on your own Apple TV first for a dollar.' })}
`,
};
