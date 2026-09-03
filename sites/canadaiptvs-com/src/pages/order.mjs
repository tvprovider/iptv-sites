import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'How do I actually pay?', a: 'After you submit this form, we review your order and email you a secure payment link. You complete payment through that link — we never ask you to send card details by email or through this form.' },
  { q: 'How fast will I get access after paying?', a: 'Most orders are activated within a few hours of payment being confirmed. If there is ever a delay, we will update you by email.' },
  { q: 'Can I switch plans after ordering?', a: 'Yes — reply to any of our emails or use the Contact page before you pay, and we will update your order to a different plan length.' },
  { q: 'What if I want to test it first?', a: `You can start the ${trial.label} for $${trial.price.toFixed(2)} instead of ordering a full plan — see our Trial page.` },
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
  ${sectionHead({ eyebrow: 'How ordering works', title: 'A simple, four-step process' })}
  ${stepsList([
    { title: 'Choose your plan', text: 'Pick the subscription length that fits you on the form below.' },
    { title: 'Submit your details', text: 'Tell us your email and primary device so we can set you up correctly.' },
    { title: 'Receive your payment link', text: 'We email you a secure link to complete payment — usually within a few hours.' },
    { title: 'Get your activation details', text: 'As soon as payment is confirmed, we send the credentials or playlist URL to start streaming.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'What you get', left: true })}
  ${answerBox(`<p>Every plan includes the <strong>full live channel lineup</strong>, <strong>up to 4K resolution</strong> where your device and source content support it, and compatibility with all our <a href="/setup-guide/">supported devices</a>. Not sure which length to pick? See the full <a href="/pricing/">Pricing &amp; comparison page</a>.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Submit your order', left: true })}
      <p>Fill out the form and we'll follow up by email with your secure payment link. Prefer to test first? Start our <a href="/trial/">24-hour trial</a> instead.</p>
      <div class="card" style="margin-top:20px;">
        <h3>Plans at a glance</h3>
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
  title: 'Still deciding?',
  lead: 'Compare full plan details on the Pricing page, or test the service first with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
