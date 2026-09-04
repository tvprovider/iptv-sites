import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Where does payment actually happen?', a: 'Not on this form. It only collects your plan choice and contact details — a secure payment link follows by email, and that\'s where the charge actually goes through.' },
  { q: 'How long until I can start watching?', a: 'Most logins go out within a few hours of payment clearing. If it\'s taking longer than that, an email update goes out rather than leaving you wondering.' },
  { q: 'Can I change the plan length after submitting?', a: 'Yes, as long as it\'s before payment — reply to any email from us or use the Contact page and the order gets updated.' },
  { q: 'Is there a cheaper way to check this out first?', a: `Yes — the ${trial.label} costs $${trial.price.toFixed(2)} and shows the current catalog before committing to a full plan.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Hot — Subscribe Now',
  description: 'Order your IPTV Hot subscription. Choose a plan, submit your details, and get a secure payment link by email to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Lock in a plan now, get watching after payment clears',
  lead: 'Choose your term below and submit your details. A secure payment link follows by email within a few hours — login details go out right after it clears.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No card details on this page', 'Real replies from support', 'Written refund terms', 'A cheap trial exists too'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How this works', title: 'Between submitting and actually watching something' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Nothing charges at this step.' },
    { title: 'Leave contact details', text: 'An email address is the only thing required.' },
    { title: 'Get a secure payment link', text: 'Arrives by email, typically within a few hours.' },
    { title: 'Receive your login', text: 'Install a player app and enter it the moment payment clears.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One catalog, all four plans', title: 'Nothing gets held back based on term length', left: true })}
  ${answerBox(`<p>Whichever length you pick, it reaches the same <strong>full live and on-demand catalog</strong>, the same <strong>current trending additions</strong>, and works across every <a href="/setup-guide/">supported device</a>. Still weighing which term fits? The <a href="/pricing/">Pricing page</a> breaks the math down.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Reserve a plan, sort payment after', left: true })}
      <p>Submitting this triggers a payment link by email. Want to see the lineup first instead? The <a href="/trial/">24-hour trial</a> costs a fraction as much.</p>
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
  title: 'Want the full picture before ordering?',
  lead: 'Compare every plan on the Pricing page, or test the service first with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
