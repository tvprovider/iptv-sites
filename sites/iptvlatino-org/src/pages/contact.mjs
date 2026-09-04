import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — IPTV Latino Support',
  description: 'Get in touch with IPTV Latino for setup help, billing questions, trial support, or general questions about fútbol, novelas, and the channel lineup.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'Every message gets read by an actual person',
  lead: 'A stuck installation, a billing question, a trial that didn\'t behave, or something about a specific league or novela — send it in and someone on the other end reads it before replying.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'A couple of details that speed things up', left: true })}
      <p>Naming the device involved and pasting in whatever error message actually shows up on screen usually answers the follow-up questions before anyone has to ask them.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What comes through this form', title: 'The most common reasons people write in' })}
  ${featureGrid([
    { title: 'A login that won\'t take', text: 'Send the device and the exact error and it gets diagnosed properly, not guessed at.' },
    { title: 'Not sure the trial is worth it yet', text: 'Ask what it actually includes before spending the dollar.' },
    { title: 'Switching to a longer or shorter term', text: 'Mid-subscription or right at renewal, both are fine.' },
    { title: 'A charge you don\'t recognize', text: 'It gets explained clearly, not brushed off.' },
    { title: 'Fútbol match or a channel dropping out', text: 'Tell us which channel and when it happened.' },
    { title: 'Something not listed here', text: 'Write in anyway — this isn\'t the full list.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Worth a look first', title: 'The FAQ covers a lot of this already', left: true })}
      <p>Billing, the trial, and setup questions come up constantly, and the answers there go deeper than most single replies would.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'In the middle of setup?', title: 'The Setup Guide may solve it faster', left: true })}
      <p>Steps broken out per device, along with a checklist for when playback misbehaves.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'How replies get prioritized', left: true })}
  <p>Everything gets worked through in the order it arrives. Including the device involved and a concrete description of what's going wrong is usually what separates a quick one-line reply from an answer that actually fixes it.</p>`,
})}

${ctaBanner({ title: 'Haven\'t subscribed yet?', lead: 'Line up the plans, or take the 24-hour trial for a spin first.' })}
`,
};
