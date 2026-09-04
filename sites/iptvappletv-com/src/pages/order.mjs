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
  title: 'Order IPTV Apple TV — Subscribe Now',
  description: 'Order your IPTV Apple TV subscription. Choose a plan, submit your details, and we\'ll email you a secure payment link to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Order here, activate on your Apple TV after',
  lead: 'Choose your plan below and submit your details. A secure payment link follows by email within a few hours — once it clears, your Apple TV activation details go out right away.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No payment collected on this page', 'Reply-back support', 'Clear refund policy', 'Real 24-hour trial available'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How ordering works', title: 'Between this form and your Apple TV home screen' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Nothing is charged at this step.' },
    { title: 'Leave your contact details', text: 'Just an email address is required to move things forward.' },
    { title: 'Get a secure payment link', text: 'Arrives by email, typically within a few hours.' },
    { title: 'Receive your credentials', text: 'The moment payment clears, install the player app on Apple TV and enter them.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'No reduced tier behind this form', left: true })}
  ${answerBox(`<p>Every plan carries the identical <strong>full channel lineup</strong>, <strong>up to 4K</strong> on Apple TV 4K where the source supports it, and works across every <a href="/setup-guide/">supported device</a>. Still deciding on length? The <a href="/pricing/">Pricing page</a> breaks it down fully.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Lock in a plan, activate after', left: true })}
      <p>A payment link follows by email once this is in. Rather test first? The <a href="/trial/">24-hour trial</a> is the lower-commitment option.</p>
      <div class="card" style="margin-top:20px;">
        <h3>What each length costs</h3>
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
  title: 'Want the full pricing picture first?',
  lead: 'Compare every plan on the Pricing page, or test it on your Apple TV with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
