import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Am I paying on this page?', a: 'No — this page only collects which plan you want and how to reach you. A separate secure payment link follows by email, and that is where the actual charge happens.' },
  { q: 'How long between paying and getting my login?', a: 'Typically a few hours once payment clears. If it is taking noticeably longer than that, you will get an email update rather than being left waiting.' },
  { q: 'Can I change my mind on plan length after sending this in?', a: 'Yes, right up until payment goes through. Reply to any email in the thread, or use the Contact page, and the order gets updated to whichever length works.' },
  { q: 'Is there a way to test it before ordering a plan?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)} and is the lower-commitment way to check things out before ordering a full term.` },
];

export default {
  slug: 'order',
  title: 'Order Canada IPTV — Subscribe Now',
  description: 'Order Canada IPTV: pick a plan, leave your details, and a secure payment link follows by email so you can complete the order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Lock in your plan, pay through a link we send after',
  lead: 'Fill in the form below and a secure payment link arrives by email — nothing is charged before you see and confirm it yourself.',
  primaryCta: { label: 'Go to the form', href: '#order-form-section' },
  secondaryCta: { label: 'See plan pricing first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Nothing charged on this page itself', 'A person replies, not a bot', 'Refund terms published upfront', 'The $1 trial is still available'],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What every plan includes', title: 'No stripped-down tier hiding behind this form', left: true })}
  ${answerBox(`<p>Every plan you can pick below carries the exact same <strong>full channel lineup</strong> and <strong>up to 4K</strong> where your setup allows it, across all <a href="/setup-guide/">supported devices</a>. Still weighing which length makes sense? The <a href="/pricing/">Pricing page</a> breaks down the numbers.</p>`)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The process', title: 'What happens after you hit submit', left: true })}
  ${stepsList([
    { title: 'Pick how long you want the plan for', text: 'Nothing gets charged at this stage.' },
    { title: 'Leave an email address that reaches you', text: 'That is the only contact detail actually required to move forward.' },
    { title: 'A payment link shows up in your inbox', text: 'Usually within a few hours of submitting.' },
    { title: 'Your login follows once payment clears', text: 'Install a compatible player app and enter what you were sent.' },
  ])}`,
})}

${section({
  id: 'order-form-section',
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Reserve your plan below', left: true })}
      <p>A payment link follows by email not long after you submit this. Would rather test things first? The <a href="/trial/">24-hour trial</a> costs a fraction of any plan below.</p>
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
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Order FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Want more detail before ordering?',
  lead: 'Compare every plan length on the Pricing page, or try the service first for a dollar.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
