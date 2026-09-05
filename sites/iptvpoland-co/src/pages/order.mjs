import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, catalog } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Does this form ask for card details?', a: 'It doesn\'t collect any. Submitting it only passes along your plan choice and a way to reach you — the actual charge happens later, through a separate secure payment link sent by email.' },
  { q: 'How long after paying until Ekstraklasa is actually watchable?', a: 'Usually a matter of hours after the payment link is settled. If something delays it further, you\'ll get an email saying so rather than being left checking an empty inbox.' },
  { q: 'I submitted the wrong plan length — is that fixable?', a: 'Easily, as long as the payment hasn\'t cleared yet. Reply to the confirmation email, or reach out through Contact, and the term gets corrected before any charge goes through.' },
  { q: 'Is there a lower-commitment way to check the lineup before ordering?', a: `Yes — the ${trial.label} runs $${trial.price.toFixed(2)} and gives you the identical Polish and international catalog a full plan reaches, just over a shorter window.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Poland — Ekstraklasa & Polish TV',
  description: 'Order IPTV Poland. Pick a plan, submit your details, and get a secure payment link by email — Ekstraklasa and Polish TV on every plan.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Order',
  h1: 'Get a plan locked in before the next round kicks off',
  lead: 'Two fields below — a plan and an email — start the process; everything after that arrives in your inbox: first a secure payment link, then your activation details once it clears. Your card information never touches this page at all.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Your card details stay off this page', 'Every order gets a human reply', 'Refund conditions posted before you pay', 'Want to look first? The $1 trial is right there'],
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Step one', title: 'Submit this, pay on the next screen', left: true })}
      <p>Once this goes through, a payment link follows to your inbox. Would you rather see the channels for yourself before committing to a term? The <a href="/trial/">24-hour trial</a> is a small fraction of any plan's price.</p>
      <div class="card" style="margin-top:20px;">
        <h3>All four lengths, at a glance</h3>
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
  ${sectionHead({ eyebrow: 'After you hit submit', title: 'What actually happens, step by step' })}
  ${stepsList([
    { title: 'Choose a term on the form', text: 'Nothing gets charged from this step alone — it just sets which plan the next email refers to.' },
    { title: 'Open the payment link that follows', text: 'That\'s the only place the actual charge happens, whenever you\'re ready to complete it.' },
    { title: 'Watch for the login once payment clears', text: 'Typically a few hours later — plenty of time to be set up before the next fixture airs.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Same channels, different invoice', title: 'The plan you pick only changes what you\'re billed', left: true })}
  ${answerBox(`<p>Whichever length you choose here lands on the identical <strong>Polish and international lineup</strong> — Ekstraklasa, Polish news and entertainment, and ${catalog.liveChannels} channels alongside ${catalog.vods} VOD titles overall — across every <a href="/setup-guide/">device this site supports</a>. Still weighing the four terms against each other? The <a href="/pricing/">Pricing page</a> lays out the per-month math for each one.</p>`)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Order FAQ', left: true })}
  ${faqAccordion(orderFaqs)}`,
})}

${ctaBanner({
  title: 'Still weighing which term makes sense?',
  lead: 'Line them up on Pricing, or put a dollar toward the trial and see the lineup before you decide.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
