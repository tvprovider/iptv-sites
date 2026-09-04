import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — IPTV List Support',
  description: 'Reach IPTV List for setup help, billing questions, trial support, or questions about what is actually on the channel and VOD list.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'Tell us what happened, not just that something did',
  lead: 'A specific device and a specific symptom gets you a specific answer — the form below is built to collect exactly that.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Before you hit send', title: 'Two things worth including', left: true })}
      <p>Which device you're on, and the exact wording of any error on screen. Those two details alone usually skip a whole round of back-and-forth.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What lands in this inbox', title: 'The requests that show up most' })}
  ${featureGrid([
    { title: 'A device that refuses to connect', text: 'Name the device and paste the error — that\'s enough to start diagnosing it properly.' },
    { title: 'Is a specific title actually on the list?', text: 'Ask before spending a dollar on the trial just to check.' },
    { title: 'Changing to a shorter or longer term', text: 'Works whether you\'re mid-subscription or right at a renewal point.' },
    { title: 'A charge that doesn\'t add up', text: 'We\'ll walk through exactly where it came from.' },
    { title: 'Something that used to be on the list, isn\'t', text: 'Name the channel or title and roughly when you noticed.' },
    { title: 'Anything else', text: 'This isn\'t an exhaustive list — write in regardless.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Quicker than waiting on a reply', title: 'Check the FAQ first', left: true })}
      <p>Billing, trial mechanics, and setup all get more detailed answers there than a single message thread usually allows.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Stuck partway through setup?', title: 'The Setup Guide might already cover it', left: true })}
      <p>Steps are broken out device by device, with a troubleshooting checklist at the end.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Response order', title: 'How messages get handled', left: true })}
  <p>First in, first answered — no priority queue to game. A message that names the exact device and describes the exact symptom moves faster through that queue than a vague "it's not working," simply because there's less back-and-forth needed to figure out what's actually wrong.</p>`,
})}

${ctaBanner({ title: 'Not a subscriber yet?', lead: 'Compare the four terms, or test the list itself with the 24-hour trial.' })}
`,
};
