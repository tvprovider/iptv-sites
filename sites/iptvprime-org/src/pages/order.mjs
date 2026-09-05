import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, comparisonTable, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, catalog } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Will this page ask for a card number?', a: 'No card fields exist on this form at all. It only collects a plan choice and a way to reach you — payment happens afterward, on a separate secure link that arrives by email.' },
  { q: 'I picked the wrong plan length by mistake — can that be corrected?', a: 'Yes, as long as the payment link hasn\'t been used yet. Reply to the confirmation email or reach Contact directly and the term gets swapped before any charge happens.' },
  { q: 'How much of a gap should I expect between paying and actually watching?', a: 'Typically a few hours. If anything pushes it further out, an email explaining why follows — you won\'t be left guessing at an empty inbox.' },
  { q: 'Is there a cheaper way to check things before ordering a full plan?', a: `The ${trial.label} exists for exactly that — $${trial.price.toFixed(2)} for the identical catalog and support line a full subscription reaches, over a shorter window.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Prime — Premium IPTV Subscription',
  description: 'Order IPTV Prime: choose a plan, submit your details, and receive a secure payment link by email. No card details collected on this page.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Order',
  h1: 'Two fields, then everything else happens by email',
  lead: 'This form takes a plan and an email address — nothing about your card. What follows is a payment link first, then activation details once it clears. No charge occurs on this page itself.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No card fields on this page', 'A human reads every order', 'Refund terms posted before you pay', 'Unsure yet? The $1 trial is one click away'],
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Before you submit', title: 'What this form does and doesn\'t do', left: true })}
      <p>Submitting it doesn\'t charge anything — it queues a payment link to your inbox. Rather see the catalog and message support first? The <a href="/trial/">trial</a> costs a fraction of any plan below.</p>
      <div class="card" style="margin-top:20px;">
        <h3>The four lengths, side by side</h3>
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
  ${sectionHead({ eyebrow: 'From submission to first login', title: 'What happens on each side of this form' })}
  ${comparisonTable(
    ['Stage', 'What actually happens'],
    [
      ['You submit this form', 'A plan and contact details are recorded — no charge yet'],
      ['A payment link arrives', 'This is the only step where a card is ever entered'],
      ['Payment clears', 'Confirmed within minutes, typically'],
      ['Activation email arrives', 'Usually a few hours later, with the login ready to use'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'One catalog, four invoices', title: 'The plan changes what you\'re billed, nothing else', left: true })}
  ${answerBox(`<p>Every length here reaches the same <strong>${catalog.liveChannels} channels and ${catalog.vods} VOD titles</strong>, works across the same <a href="/setup-guide/">supported devices</a>, and gets read by the same support inbox regardless of term. Comparing the four side by side first? <a href="/pricing/">Pricing</a> lays out the per-month math for each.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Order FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Not sure which length fits yet?',
  lead: 'Compare all four on Pricing, or spend a dollar on the trial and decide with the catalog in front of you.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
