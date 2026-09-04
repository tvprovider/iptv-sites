import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Does entering card details happen on this page?', a: 'No — this form only records your plan choice and how to reach you. A secure payment link arrives afterward by email, and that\'s where the actual charge takes place.' },
  { q: 'How soon after paying can I start watching?', a: 'Most subscribers get login details within a few hours of payment clearing. If it ends up taking noticeably longer, an update goes out by email instead of leaving you guessing.' },
  { q: 'Can the plan length still change after I\'ve submitted this?', a: 'Yes, provided payment hasn\'t gone through yet — reply to any email from us, or use the Contact page, and the order gets adjusted.' },
  { q: 'Is there a lower-cost way to check the fútbol and novela lineup before ordering?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)} and puts the current catalog in front of you before a full plan gets purchased.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Latino — Subscribe Now',
  description: 'Order your IPTV Latino subscription. Choose a plan, submit your details, and get a secure payment link by email to complete your order.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Reserve your term now, watch once payment goes through',
  lead: 'Pick a length below and send over your details. A payment link shows up by email not long after — logins follow right behind it once that\'s settled.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Card details stay off this form', 'A person replies, not a script', 'Refund terms posted in advance', 'A cheaper trial option exists too'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What happens next', title: 'Three short steps stand between this and an actual login' })}
  ${stepsList([
    { title: 'Pick which term fits', text: 'Nothing gets charged simply by making a selection here.' },
    { title: 'Drop in a way to reach you', text: 'An email address covers everything needed at this stage.' },
    { title: 'Watch for a payment link, then the login', text: 'The first shows up by email fairly quickly; the second follows once payment clears.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Same catalog, any term', title: 'Length changes the price, not what\'s reachable', left: true })}
  ${answerBox(`<p>Short plan or long one, the login lands on the identical <strong>bilingual live and on-demand catalog</strong> — fútbol, novelas, and the English side included — and works across every <a href="/setup-guide/">listed device</a>. Undecided on which term makes sense? The <a href="/pricing/">Pricing page</a> lays out the actual math.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Hold a plan now, handle payment right after', left: true })}
      <p>Submitting below sets a payment link in motion by email. Rather test the lineup first? The <a href="/trial/">24-hour trial</a> costs a fraction of any plan.</p>
      <div class="card" style="margin-top:20px;">
        <h3>What each term runs</h3>
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
  title: 'Want more context before submitting an order?',
  lead: 'Line up every plan on the Pricing page, or try the service first through the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
