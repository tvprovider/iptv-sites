import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, orderForm, answerBox, stepsList, esc, iconMedia,
} from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const orderFaqs = [
  { q: 'Where does my card number actually go?', a: 'Not into this form — it only takes a plan choice and a way to reach you. The card details go on a separate secure payment page that follows.' },
  { q: 'How fast does the login show up once payment clears?', a: 'A few hours is typical. Anything slower and support flags it proactively — you shouldn\'t have to chase it down yourself.' },
  { q: 'Picked the wrong term — can it still be fixed?', a: 'Before payment clears, yes. A quick message through Contact swaps it to whatever length actually fits.' },
  { q: 'Is there something smaller than a full plan to test with first?', a: `The ${trial.label} exists for exactly that — $${trial.price.toFixed(2)} for a real login, well short of a full-plan commitment.` },
];

export default {
  slug: 'order',
  title: 'Order IPTV Xtream Pro — Subscribe Now',
  description: 'Order your IPTV Xtream Pro subscription. Choose a plan, submit your details, and receive a secure payment link followed by your Xtream Codes login.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }]), faqSchema(orderFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing/' }, { label: 'Order' }])}
${hero({
  eyebrow: 'Subscribe',
  h1: 'Pick a term now, sort out payment on the next screen',
  lead: 'Nothing charges here — just a plan choice and your contact info. A secure payment page comes next, and the Xtream Codes login lands the moment it clears.',
  primaryCta: { label: 'Jump to the order form', href: '#order-form-section' },
  secondaryCta: { label: 'Compare plans first', href: '/pricing/' },
  media: iconMedia('<rect x="246" y="256" width="48" height="32" rx="4" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M246 260 L270 278 L294 260" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', 'Order confirmation illustration'),
  dark: true,
  trustItems: ['Nothing billed through this form', 'Support that understands the login format', 'Refund terms are public', 'A dollar buys you proof first'],
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How ordering works', title: 'Between this form and a working login' })}
  ${stepsList([
    { title: 'Pick a plan length', text: 'Nothing is charged at this step.' },
    { title: 'Leave your contact details', text: 'Just an email address is required to move things forward.' },
    { title: 'Get a secure payment link', text: 'Arrives by email, typically within a few hours.' },
    { title: 'Receive your Xtream Codes login', text: 'Username, password, and server URL, the moment payment clears.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why order directly', title: 'No reduced tier behind this form', left: true })}
  ${answerBox(`<p>Pick any length here and you land on the same <strong>server infrastructure</strong>, the same full channel lineup, and the same <strong>Xtream Codes login format</strong> — nothing gets routed to a lower-priority node because of a shorter term. Still weighing which length fits? The <a href="/pricing/">Pricing page</a> lays out the per-month math.</p>`)}`,
})}

${section({
  id: 'order-form-section',
  html: `
  <div class="grid grid-2" style="align-items:flex-start;">
    <div>
      ${sectionHead({ eyebrow: 'Get started', title: 'Lock in a plan, get the login after', left: true })}
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
  lead: 'Compare every plan on the Pricing page, or test server response with the 24-hour trial.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
