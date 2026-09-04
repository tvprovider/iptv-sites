import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'iptv-basics',
    eyebrow: 'IPTV basics',
    title: 'What IPTV Xtream Pro actually is',
    items: [coreFaqs[0]],
  },
  {
    id: 'login-format',
    eyebrow: 'Login format',
    title: 'Xtream Codes vs. M3U',
    items: [
      coreFaqs[1],
      { q: 'Which field does the server URL go in?', a: 'Look for a field explicitly labeled "server," "server URL," or "portal URL" in your player app\'s login screen — it is separate from the username and password fields, and typing it into the wrong one is the single most common setup mistake.' },
      { q: 'Does an Xtream Codes login expire differently than an M3U link?', a: 'No — both formats run on the same subscription term. Neither format is more or less "permanent" than the other; they are just two ways of authenticating against the same account.' },
    ],
  },
  {
    id: 'reliability',
    eyebrow: 'Reliability',
    title: 'Uptime and server infrastructure',
    items: [
      coreFaqs[2],
      { q: 'What happens to my login if one server goes down?', a: 'The infrastructure is built to route around a failed access point rather than depend on a single one, so a login generally keeps working without needing to be reissued.' },
    ],
  },
  {
    id: 'devices',
    eyebrow: 'Devices',
    title: 'Device compatibility',
    items: [coreFaqs[3]],
  },
  {
    id: 'trial',
    eyebrow: 'Trial',
    title: '24-hour trial',
    items: [coreFaqs[4]],
  },
  {
    id: 'subscriptions',
    eyebrow: 'Subscriptions',
    title: 'Subscription plans',
    items: [coreFaqs[5]],
  },
  {
    id: 'formats',
    eyebrow: 'Compatibility',
    title: 'Program guide & multi-device use',
    items: [
      { q: 'Do you provide an EPG (program guide)?', a: 'Yes — most player apps pull the program guide automatically once an Xtream Codes login or M3U link is entered. If yours shows a blank guide, check its settings for a manual EPG URL field.' },
      { q: 'Can the same login run on two devices at the same time?', a: 'Each plan is scoped to one active device. Running the same Xtream Codes login on two devices simultaneously tends to interrupt playback on both rather than working on either.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'Does an Xtream Codes login use more data than an M3U link?', a: 'No — the login format does not change the amount of data streamed. Data usage depends on resolution and how much you watch, same as any streaming source.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Do plans renew automatically?', a: 'Only if you explicitly choose a recurring option at checkout. Otherwise, access ends at the end of your paid term.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'How do refunds work?', a: 'See the full Refund Policy for the specific terms covering the trial and subscription plans.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When a login stops working',
    items: [
      { q: 'What is the first thing to check if streaming keeps buffering?', a: 'Confirm the internet connection itself is stable first, then see the full troubleshooting checklist on the Setup Guide — a login problem and a connection problem look identical from the player app\'s side.' },
    ],
  },
  {
    id: 'support',
    eyebrow: 'Support',
    title: 'Contacting support',
    items: [coreFaqs[6]],
  },
];

export default {
  slug: 'faq',
  title: 'Frequently Asked Questions — IPTV Xtream Pro',
  description: 'Answers to common IPTV Xtream Pro questions: the Xtream Codes login format, server reliability, device support, the 24-hour trial, plans, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The login and reliability questions we actually get asked',
  lead: 'Straight answers on the Xtream Codes format, server uptime, and what to expect.',
  media: iconMedia('<text x="270" y="290" text-anchor="middle" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="600">?</text>', 'FAQ illustration'),
})}
${topics
  .map((t, i) =>
    section({
      id: t.id,
      bg: i % 2 === 1 ? 'quiet' : undefined,
      html: `${sectionHead({ eyebrow: t.eyebrow, title: t.title, left: true })}${faqAccordion(t.items)}`,
    })
  )
  .join('\n')}
${ctaBanner({ title: 'Something not covered above?', lead: 'Login errors, billing, or trial questions — send it in and a person reads it.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
