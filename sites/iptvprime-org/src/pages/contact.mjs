import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, comparisonTable, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact IPTV Prime Support',
  description: 'Message IPTV Prime support directly — a person reads and answers, worked in the order messages arrive, regardless of which plan you\'re on.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'No phone tree. No chatbot loop. Just a message and a reply.',
  lead: 'Whatever\'s wrong — a rejected login, a channel you can\'t find, a charge that looks off — write down exactly what\'s happening below. It goes to a person, not a script.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Make it specific', title: 'Two details that cut the back-and-forth in half', left: true })}
      <p>Name the device, and quote the exact error text or describe exactly what showed up. A message like that usually gets solved on the first reply — a plain "it\'s broken" almost never does, because it leaves out the one thing support needs to actually look into it.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What actually shows up in this inbox', title: 'The messages that come through most' })}
  ${comparisonTable(
    ['Situation', 'What to include for the fastest answer'],
    [
      ['A player app won\'t accept the login', 'Device model and the exact error text shown on screen'],
      ['Wondering if a title or channel is on the catalog', 'Just ask — quicker than spending a dollar on the trial to check'],
      ['Switching to a different plan length', 'Whether it\'s mid-term or timed to renewal, this gets handled routinely'],
      ['A charge that doesn\'t match what was ordered', 'The amount and roughly when it hit your statement'],
      ['A title or channel that seems to have vanished', 'Roughly when it was last seen working'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How the queue actually works', title: 'First in, first answered — no exceptions for plan size', left: true })}
  <p>Writing "urgent" in a message doesn\'t move it ahead of anyone else\'s — being specific does. A twelve-month subscriber and a trial user land in the exact same queue, worked in the order messages arrive. That\'s a deliberate choice, not an oversight: it\'s what keeps the support line honest about what "premium" actually means here.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Already answered somewhere else', title: 'Two pages worth a look first', left: true })}
      <p>Plan switches, how the trial works, and the setup issues people run into most are all covered in more depth than a quick reply usually allows.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-setup right now?', title: 'The Setup Guide might solve it faster', left: true })}
      <p>Every supported device has its own section there, plus an ordered troubleshooting checklist if playback still isn\'t cooperating.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${ctaBanner({ title: 'Haven\'t picked a plan yet?', lead: 'Compare the four lengths on Pricing, or test this exact support line with the $1 trial first.' })}
`,
};
