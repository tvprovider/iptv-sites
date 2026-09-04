import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, catalog } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Do I type a card number into this page?', a: 'No card fields live here. This form takes a plan choice and a way to reach you; a secure payment link follows afterward by email, and the charge itself happens there.' },
  { q: 'When does the Liga MX and novela lineup actually turn on?', a: 'Typically within a few hours of the payment link being paid. If a specific delay comes up, an email says so rather than leaving you checking an empty inbox.' },
  { q: 'I picked the wrong plan length on this form — can it be fixed?', a: 'As long as payment hasn\'t gone through yet, yes. Reply to the confirmation email or reach out through Contact and the term gets swapped before anything is charged.' },
  { q: 'Is there a cheaper way to check the lineup first?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)} and hands you the same Mexican and international catalog a full plan reaches, just for a shorter window.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Mexico — Liga MX & Novelas',
  description: 'Order IPTV Mexico. Pick a plan, submit your details, and get a secure payment link by email — Liga MX, Selección Mexicana, and novelas on every plan.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Order',
  h1: 'Lock in a plan ahead of the next matchday',
  lead: 'Fill in the plan and email fields below and the rest happens by email — a secure payment link first, then activation details once that clears. Nothing about your card ever touches this page.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['No card fields on this form', 'A person replies to every order', 'Refund terms published in advance', 'A $1 trial exists if you\'d rather test first'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What actually happens after you submit', title: 'Three emails, in order' })}
  ${stepsList([
    { title: 'Pick a plan length below', text: 'Selecting a term here does not charge anything by itself.' },
    { title: 'A payment link arrives by email', text: 'That link is where the actual charge takes place, on your own schedule.' },
    { title: 'Login details follow once payment clears', text: 'Usually a matter of hours — enough time to have it ready before the next fixture.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'One lineup, four lengths', title: 'The plan you pick changes the invoice, not the channels', left: true })}
  ${answerBox(`<p>Every option on this form reaches the same <strong>Mexican and international lineup</strong> — Liga MX, Selección Mexicana, novelas, and ${catalog.liveChannels} channels plus ${catalog.vods} VOD titles overall — across every <a href="/setup-guide/">device on the supported list</a>. Still comparing terms? The <a href="/pricing/">Pricing page</a> breaks the per-month cost down plan by plan.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Submit the order, handle payment next', left: true })}
      <p>A payment link shows up in your inbox once this form goes through. Rather confirm the channels are actually there first? The <a href="/trial/">24-hour trial</a> costs a small fraction of any plan.</p>
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
  title: 'Not sure which term to lock in yet?',
  lead: 'Line the four plans up on Pricing, or spend a dollar confirming the lineup with the 24-hour trial first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
