import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact Us — IPTV Xtream Pro Support',
  description: 'Reach IPTV Xtream Pro support for login issues, billing questions, or anything else about the Xtream Codes-based subscription — a real inbox, not a bot.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'A username and an error message get you further than a bug report',
  lead: 'Skip the password — the specific symptom and which app you\'re running is what actually moves a ticket forward.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Before you type', title: 'Skip the password field entirely', left: true })}
      <p>Username, player app name, and the exact wording of whatever error is showing — that combination usually gets a working answer on the first reply instead of a round of "can you clarify."</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Login help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Common reasons people write in', title: 'A rough breakdown of what shows up here' })}
  ${featureGrid([
    { title: 'Login rejected on setup', text: 'Nine times out of ten it\'s a field in the wrong box or a stray space — a quick fix once we see the specifics.' },
    { title: 'Trial never arrived', text: 'Could be a delivery delay or a typo on the form — either way, worth a follow-up rather than assuming it\'s lost.' },
    { title: 'Changing a plan mid-cycle', text: 'Straightforward on either side of a renewal date.' },
    { title: 'A charge you don\'t recognize', text: 'We pull up the record and explain it plainly.' },
    { title: 'Choppy playback or dropped streams', text: 'Tell us the device and app; that narrows down the cause fast.' },
    { title: 'Something outside all of this', text: 'Not everything fits a category — send it regardless.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Might save you a wait', title: 'The FAQ covers a lot of this already', left: true })}
      <p>Login format, billing patterns, and trial mechanics all have longer, more detailed answers there than a single reply typically gives.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Stuck on the fields right now?', title: 'The Setup Guide is faster than waiting', left: true })}
      <p>Every field, in the order a compatible player app expects them, with a troubleshooting section if something still won\'t take.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What to expect', title: 'Replies go out in the order tickets land', left: true })}
  <p>Specificity is what separates a fast resolution from a slow one. "It's broken" leaves us guessing; a username plus an exact error string usually gets solved in one exchange.</p>`,
})}

${ctaBanner({ title: 'Haven\'t subscribed yet?', lead: 'Compare plan lengths, or put the servers to the test for a dollar first.' })}
`,
};
