import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Where do I actually enter payment details?', a: 'Not here. This form only collects your plan choice and contact info — a secure payment link follows by email, and that link is where payment actually happens.' },
  { q: 'How soon can I start watching after paying?', a: 'Most accounts are activated within a few hours of payment clearing. If something is running slower than that, you will hear about it by email rather than being left wondering.' },
  { q: 'Can I still change plan length after submitting this?', a: 'Yes, as long as it is before payment — reply to any email from us or use the Contact page and the order gets updated to whatever length actually fits.' },
  { q: 'Can I try it before committing to a plan?', a: `Yes — the ${trial.label} costs $${trial.price.toFixed(2)} and is a lower-risk way to check the service before ordering a full plan.` },
];

export default {
  slug: 'order',
  title: 'Order Canada IPTV — Subscribe Now',
  description: 'Order your Canada IPTV subscription. Choose a plan, submit your details, and we\'ll email you a secure payment link to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'A few details, then a payment link by email',
  lead: 'Choose your plan below and submit your details. We\'ll email you a secure payment link within a few hours — once payment is confirmed, your activation details go out right away.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No payment collected on this page', 'Reply-back support', 'Clear refund policy', 'Real 24-hour trial available'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How ordering works', title: 'Four steps between here and streaming' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Use the form below — nothing is charged yet.' },
    { title: 'Leave your contact details', text: 'Your email and the device you plan to watch on, so activation matches your setup.' },
    { title: 'Get a secure payment link', text: 'It arrives by email, typically within a few hours of ordering.' },
    { title: 'Receive your credentials', text: 'The moment payment clears, activation details go out and you can start watching.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'What every plan actually includes', left: true })}
  ${answerBox(`<p>There is no reduced version behind this form — every plan carries the <strong>same full channel lineup</strong>, <strong>up to 4K</strong> where your device and the source support it, and works across all <a href="/setup-guide/">supported devices</a>. Still weighing plan lengths? The <a href="/pricing/">Pricing page</a> lays out the full comparison.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Fill this out to lock in your plan', left: true })}
      <p>A payment link follows by email shortly after. Not ready to pay yet? The <a href="/trial/">24-hour trial</a> is a cheaper way to check the service first.</p>
      <div class="card" style="margin-top:20px;">
        <h3>The four plan lengths</h3>
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
  title: 'Not quite ready to order?',
  lead: 'The Pricing page has the full breakdown, or test things out first with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
