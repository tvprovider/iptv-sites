import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, catalog } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Is a card number part of what I submit here?', a: 'No. This form collects a plan choice and an email address only. A secure payment link comes afterward, separately, and that link is where the charge itself happens.' },
  { q: 'How long is the wait between paying and getting a working login?', a: 'Usually a handful of hours after the payment clears. Should it stretch longer than that, an email goes out saying so rather than leaving the question open.' },
  { q: 'What if I submit one term but decide I want a different one?', a: 'Fine, as long as it is caught before payment happens — reply to whichever email you received, or reach out through Contact, and the length gets swapped.' },
  { q: 'Is there a lower-cost way to look at the catalog before committing to a term?', a: `Yes — the ${trial.label} is $${trial.price.toFixed(2)} and hands you the same list a full plan reaches, just for a shorter window.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV List — Subscribe Now',
  description: 'Order your IPTV List subscription. Choose a plan, submit your details, and get a secure payment link by email to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Pick a term, then let a payment link do the rest',
  lead: 'This page only needs a plan choice and a way to reach you. Everything about actually paying happens on a separate, secure step afterward.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No card fields on this page', 'Real replies, not a bot', 'Refund terms already published', 'A smaller trial option exists'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How it actually plays out', title: 'From this form to a working login, in order' })}
  ${stepsList([
    { title: 'Choose a term length', text: 'This step alone doesn\'t charge anything.' },
    { title: 'Give an email that reaches you', text: 'It\'s the only contact detail this form needs.' },
    { title: 'A payment link, then a login, both by email', text: 'The link lands first; the login follows once that payment clears.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One list, four terms', title: 'The length you pick changes the price, not the list', left: true })}
  ${answerBox(`<p>Whichever term ends up on this form, it reaches the identical <strong>itemized catalog</strong> — ${catalog.liveChannels} channels, ${catalog.vods} on-demand titles — across every <a href="/setup-guide/">device on the supported list</a>. Still weighing the options? The <a href="/pricing/">Pricing page</a> breaks the per-month math down plan by plan.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Submit this, sort payment out next', left: true })}
      <p>A payment link follows by email once this goes through. Want to check the actual list first instead? The <a href="/trial/">24-hour trial</a> costs far less than any full term.</p>
      <div class="card" style="margin-top:20px;">
        <h3>The four terms, listed</h3>
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
  ${sectionHead({ eyebrow: 'Questions', title: 'Order FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Want the numbers laid out before you commit?',
  lead: 'See every term on the Pricing page, or check the actual list first with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
