import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Where does the actual payment happen?', a: 'Not on this form. Submitting it triggers a review, then a secure payment link by email — that link is the only place payment is collected. Card details never go through this form or by email directly.' },
  { q: 'How long between paying and being able to watch?', a: 'Typically a few hours after payment clears. Anything slower than that gets an email update from us rather than leaving you wondering.' },
  { q: 'I picked the wrong plan length — can it be changed?', a: 'As long as payment hasn\'t gone through yet, yes — reply to any email from us or use the Contact page and we\'ll adjust the order.' },
  { q: 'Is there a lower-commitment option before I order a full plan?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)} and is exactly built for that. Check the Trial page for details.` },
];

export default {
  slug: 'order',
  title: '4K Streaming IPTV — Order Your Subscription',
  description: 'Order 4K Streaming IPTV: pick a plan, submit your details, and get a secure payment link by email to finish your subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Submit an order, get a payment link, start watching',
  lead: `Pick a plan below and leave your details. A secure payment link follows by email — once that clears, your activation details go out right away.`,
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['This form doesn\'t touch your card', 'Real replies from a real inbox', 'Refund terms posted in full', '$1 trial if you want proof first'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How ordering works', title: 'Four steps between here and watching' })}
  ${stepsList([
    { title: 'Pick your plan length', text: 'Whatever term fits, selected right on this form.' },
    { title: 'Leave your contact info', text: 'Just enough for us to set things up correctly on our end.' },
    { title: 'A payment link lands in your inbox', text: 'Usually within a few hours, always through a secure link.' },
    { title: 'Activation details follow payment', text: 'Credentials or a playlist URL, sent the moment payment is confirmed.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'Nothing held back at this price point', left: true })}
  ${answerBox(`<p>Every plan carries the identical <strong>full channel lineup</strong>, <strong>up to 4K</strong> where your device and the source allow it, and works across all <a href="/setup-guide/">supported devices</a>. Still weighing plan lengths? The <a href="/pricing/">Pricing page</a> breaks the math down.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Lock in your order', left: true })}
      <p>Send the form and a payment link follows by email shortly after. Rather test the waters first? The <a href="/trial/">24-hour trial</a> is the lower-stakes option.</p>
      <div class="card" style="margin-top:20px;">
        <h3>What each plan runs</h3>
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
  title: 'Want the numbers laid out first?',
  lead: 'Full plan comparison lives on the Pricing page, or test everything via the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
