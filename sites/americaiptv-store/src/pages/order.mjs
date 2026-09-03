import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Does this form charge my card?', a: 'No — this only collects your plan and contact details. A secure payment link follows by email, and that separate link is where payment actually happens.' },
  { q: 'How long until I can actually watch?', a: 'Most accounts go live within a few hours of payment confirming. Any delay beyond that gets communicated by email rather than leaving you guessing.' },
  { q: 'Can I change my mind on plan length after submitting?', a: 'As long as it is before payment, yes — reply to any email from us or use the Contact page and the order gets adjusted.' },
  { q: 'What if I am not ready to commit to a full plan?', a: `The ${trial.label} for $${trial.price.toFixed(2)} exists for exactly that — see the Trial page instead of ordering here.` },
];

export default {
  slug: 'order',
  title: 'Order America IPTV — Subscribe Now',
  description: 'Order your America IPTV subscription. Choose a plan, submit your details, and we\'ll email you a secure payment link to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Lock in your plan and get streaming',
  lead: 'Choose your plan below and submit your details. We\'ll email you a secure payment link within a few hours — once payment is confirmed, your activation details go out right away.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No payment collected on this page', 'Reply-back support', 'Clear refund policy', 'Real 24-hour trial available'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How ordering works', title: 'What happens between clicking and watching' })}
  ${stepsList([
    { title: 'Pick your plan length', text: 'Right on the form below — no payment yet at this step.' },
    { title: 'Leave your details', text: 'Email and the device you plan to use, so activation lines up correctly.' },
    { title: 'A payment link lands in your inbox', text: 'Generally within a few hours of submitting.' },
    { title: 'Credentials follow payment', text: 'The moment it clears, your login or playlist URL goes out.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'No downgraded version behind this form', left: true })}
  ${answerBox(`<p>Every plan carries the identical <strong>full channel lineup</strong>, <strong>up to 4K</strong> where the device and source support it, and works across every <a href="/setup-guide/">supported device</a>. Still deciding on length? The full <a href="/pricing/">Pricing page</a> breaks it down.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Get this order moving', left: true })}
      <p>A secure payment link follows by email once this is submitted. Would rather test first? The <a href="/trial/">24-hour trial</a> is the lower-commitment option.</p>
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
  title: 'Need a moment before ordering?',
  lead: 'The Pricing page has every detail, or test things out first with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
