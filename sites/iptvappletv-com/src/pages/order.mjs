import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Is my card number going into this form?', a: 'No — this form is just plan choice and an email address. The actual charge happens on a separate secure link that arrives afterward.' },
  { q: 'How long between paying and streaming?', a: 'Typically a few hours after payment clears. If it is taking noticeably longer, an email update goes out rather than leaving you guessing.' },
  { q: 'What if I want a different term than what I picked here?', a: 'As long as payment has not gone through yet, reply to the confirmation email or use Contact and the order gets adjusted.' },
  { q: 'Is there a cheaper way to test this first?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)}, a much smaller commitment than ordering a full plan outright.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Apple TV — Subscribe Now',
  description: 'Order your IPTV Apple TV subscription. Choose a plan, submit your details, and we\'ll email you a secure payment link to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Submit this, pay next, watch after that',
  lead: 'This form only locks in a plan length and a way to reach you — the actual charge happens on a separate secure link sent afterward.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Nothing billed through this form', 'A person reads every message', 'Refund terms are public, not hidden', 'A dollar buys you proof first'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The three-step version', title: 'What actually happens after you hit submit' })}
  ${stepsList([
    { title: 'Choose a term', text: 'This step alone charges nothing.' },
    { title: 'Give us an email that reaches you', text: 'That\'s the only contact info the form actually needs.' },
    { title: 'A payment link shows up', text: 'Usually within a few hours, never longer than that without a reason.' },
    { title: 'Login details follow the payment', text: 'Drop them into a player app on Apple TV and you\'re watching.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One tier, not several', title: 'Nothing gets held back on this form', left: true })}
  ${answerBox(`<p>Whatever length you choose here comes with the same <strong>complete channel lineup</strong>, the same <strong>up to 4K</strong> ceiling on Apple TV 4K hardware, and works on every <a href="/setup-guide/">device we support</a> — not just Apple TV. Not sure which term yet? The <a href="/pricing/">Pricing page</a> lays out the math.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Reserve a term, sort out payment next', left: true })}
      <p>Submitting this gets a payment link into your inbox. Want to test the waters first instead? The <a href="/trial/">24-hour trial</a> costs a fraction as much.</p>
      <div class="card" style="margin-top:20px;">
        <h3>The four options and what they run</h3>
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
  ${sectionHead({ eyebrow: 'Before you submit', title: 'Order form FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Not ready to commit to a term?',
  lead: 'The Pricing page breaks down all four lengths, or spend a dollar on the trial first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
