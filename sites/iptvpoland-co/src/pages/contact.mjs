import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema,
  contactForm, featureGrid, iconMedia,
} from '../lib/render.mjs';

export default {
  slug: 'contact',
  title: 'Contact IPTV Poland Support',
  description: 'Reach IPTV Poland for setup help, billing questions, or anything about Ekstraklasa, Polish channels, or your subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Contact' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
${hero({
  eyebrow: 'Support',
  h1: 'Send it in — an actual person reads it, not a bot',
  lead: 'A frozen stream mid-fixture, a login your app won\'t accept, a charge you don\'t recognize — describe what\'s actually happening and someone on the team looks into the specifics, rather than routing you through a canned decision tree.',
  primaryCta: { label: 'Jump to the form', href: '#contact-form-section' },
  secondaryCta: { label: 'View Plans', href: '/pricing/' },
  media: iconMedia('<path d="M246 256 h48 a6 6 0 0 1 6 6 v20 a6 6 0 0 1 -6 6 h-30 l-12 10 v-10 h-6 a6 6 0 0 1 -6 -6 v-20 a6 6 0 0 1 6 -6 z" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Contact support illustration'),
})}

${section({
  id: 'contact-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Before you write', title: 'The detail that gets you answered faster', left: true })}
      <p>Mention the device, and if it's tied to a specific channel or an Ekstraklasa fixture, mention that too. "The Saturday match froze at halftime on my Fire Stick" gets solved in one reply; "it's not working" usually needs a second message just to figure out what "it" even is.</p>
    </div>
    ${contactForm({ topics: ['General question', 'Trial support', 'Subscription support', 'Setup help', 'Billing question', 'Something else'] })}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What lands here most', title: 'The usual reasons people write in' })}
  ${featureGrid([
    { title: 'A player app rejecting a correct login', text: 'Send the device model and the exact wording of the error — that pair is what actually lets support diagnose it quickly.' },
    { title: '"Is this channel actually on the lineup?"', text: 'Faster to just ask than to spend a dollar on the trial purely to look.' },
    { title: 'Switching to a different plan length', text: 'Whether it\'s mid-term or timed to a renewal, this comes up constantly and gets handled without fuss.' },
    { title: 'A charge you don\'t recognize on your statement', text: 'Pass along the amount and roughly when it hit, and support digs up exactly where it came from.' },
    { title: 'A Polish channel that seems to have disappeared', text: 'Roughly when you noticed it go missing is enough to start looking into it.' },
    { title: 'Anything not listed above', text: 'Write in regardless — this list is a sample, not the full range of what comes through.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'No skip-the-line option', title: 'Messages are worked in the order they arrive', left: true })}
  <p>Marking a message "urgent" doesn't move it up the queue — being specific does. A message naming the device and describing exactly what showed up on screen gets resolved in far fewer back-and-forths than one that just flags something as broken.</p>`,
})}

${section({
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'Might already be answered', title: 'Check the FAQ before writing in', left: true })}
      <p>Plan switches, how the trial actually functions, and the setup snags people hit most often are all covered there in more depth than a quick reply usually allows.</p>
      <a class="btn btn-ghost" href="/faq/">Visit the FAQ →</a>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'Mid-activation right now?', title: 'The Setup Guide covers this', left: true })}
      <p>Every supported device gets its own walkthrough there, plus an ordered troubleshooting list if playback still isn\'t behaving.</p>
      <a class="btn btn-ghost" href="/setup-guide/">Visit the Setup Guide →</a>
    </div>
  </div>`,
})}

${ctaBanner({ title: 'Haven\'t picked a plan yet?', lead: 'Compare all four lengths on Pricing, or spend a dollar checking the Ekstraklasa lineup first with the trial.' })}
`,
};
