import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Is my card charged the moment I submit this?', a: 'Nothing is charged here. This form only captures which plan you want and how to reach you — the actual payment happens on a separate secure link sent afterward.' },
  { q: 'What is the gap between ordering and watching?', a: 'Typically a few hours from payment clearing to your login landing in your inbox. Anything slower than usual gets flagged to you directly by email.' },
  { q: 'I picked the wrong plan length — can that change?', a: 'Yes, right up until payment goes through. Reply to any email you got from us, or message through Contact, and the order gets updated.' },
  { q: 'Not ready to pick a full plan yet?', a: `That is exactly what the ${trial.label} is for — $${trial.price.toFixed(2)} on the Trial page instead of committing here.` },
];

export default {
  slug: 'order',
  title: 'Order America IPTV — Subscribe Now',
  description: 'Order America IPTV in a few steps: pick a plan, leave your details, and get a secure payment link by email to finish subscribing.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Pick a length, we handle the rest by email',
  lead: 'Fill in the form below — no card details go here. A secure payment link shows up in your inbox shortly after, and activation follows the moment it clears.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Card details never go on this form', 'Support that actually replies', 'Refund policy posted, not hidden', 'Test it first for $1'],
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Fill this in to lock a plan', left: true })}
      <p>A payment link arrives by email once this is submitted — nothing is charged on this page itself. Want to test first instead? The <a href="/trial/">24-hour trial</a> is the lighter-commitment route.</p>
      <div class="card" style="margin-top:20px;">
        <h3>What each length runs</h3>
        <ul style="padding-left:20px;color:var(--text-soft);">
          ${plans.map((p) => `<li>${esc(p.label)} — $${p.price.toFixed(2)}${p.perMonth ? ` (~$${p.perMonth.toFixed(2)}/mo)` : ''}</li>`).join('')}
        </ul>
      </div>
    </div>
    ${orderForm(plans)}
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'From click to channel', title: 'Four steps, start to finish' })}
  ${stepsList([
    { title: 'Choose a plan length above', text: 'Nothing gets charged by making this choice.' },
    { title: 'Add your email and preferred device', text: 'So the activation details that follow line up with what you actually use.' },
    { title: 'Open the payment link when it arrives', text: 'Sent to that same email, usually inside a few hours.' },
    { title: 'Your login shows up right after', text: 'Load it into a compatible player app and start watching.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'One catalog for everyone', title: 'Nothing here is a lesser version', left: true })}
  ${answerBox(`<p>Whichever length you pick, you get the same <strong>full channel lineup</strong>, the same <strong>up to 4K</strong> ceiling where your device and the source allow it, and the same list of <a href="/setup-guide/">supported devices</a>. If length is still the open question, the <a href="/pricing/">Pricing page</a> lays it all out.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Order FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Still weighing your options?',
  lead: 'Compare every plan on the Pricing page, or try the service first for $1.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
