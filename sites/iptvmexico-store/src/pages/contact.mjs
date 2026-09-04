import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact IPTV Mexico Support',
  description: 'Reach IPTV Mexico for setup help, billing questions, or anything about Liga MX, Selección Mexicana, novelas, or your subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'A real person reads every message that comes through here',
  lead: 'A channel that dropped out mid-match, a device that won\'t take the login, a billing question — write in with the specifics and someone actually looks into it, rather than routing you through a script.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Send a message', title: 'What actually speeds up a reply', left: true })}
      <p>Name the device, and if a specific channel or match is involved, name that too — a Liga MX fixture that froze mid-game gets diagnosed a lot faster than a general "it's not working."</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What shows up in this inbox', title: 'The messages that come in most often' })}
  ${featureGrid([
    { title: 'A player app that keeps rejecting the login', text: 'Include the device model and paste the exact error wording you\'re seeing — that combination is what actually lets support pin it down.' },
    { title: 'Confirming whether a specific channel is in the lineup', text: 'A quick message settles it faster than spending a dollar on the trial just to look.' },
    { title: 'Moving to a different plan length', text: 'Mid-term or right at renewal — either is fine, and it\'s a common enough request that it\'s handled routinely.' },
    { title: 'A charge on your statement you don\'t recognize', text: 'Send the amount and the date and it gets traced back to its source.' },
    { title: 'A novela or channel that used to be there and now isn\'t', text: 'Mention roughly when you noticed it go missing and it gets looked into.' },
    { title: 'Something not covered above', text: 'Write in anyway — the list above isn\'t exhaustive.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Might save you a wait', title: 'A lot of this is already answered on the FAQ', left: true })}
      <p>Plan changes, how the trial actually works, and common setup snags are all written up there in more depth than a quick reply usually gives.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Halfway through activation?', title: 'Check the Setup Guide next', left: true })}
      <p>It walks through each supported device individually and ends with a troubleshooting order to follow if playback still isn\'t right.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'No priority lane', title: 'Messages get handled in the order they arrive', left: true })}
  <p>What actually speeds things up isn\'t urgency in the wording — it\'s specificity. A message that names the device and spells out exactly what\'s happening on screen needs far less back-and-forth before support can act on it than one that just says something\'s broken.</p>`,
})}

${ctaBanner({ title: 'Still deciding on a plan?', lead: 'The four plans sit side by side on Pricing, or check the Liga MX and novela lineup first with the 24-hour trial.' })}
`,
};
