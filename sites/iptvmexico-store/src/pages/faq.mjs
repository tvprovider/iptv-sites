import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'basics',
    eyebrow: 'The basics',
    title: '¿Qué es IPTV Mexico?',
    items: [coreFaqs[0]],
  },
  {
    id: 'liga-mx',
    eyebrow: 'Liga MX & Selección',
    title: 'Mexican sports coverage',
    items: [
      coreFaqs[1],
      { q: 'Does the lineup cover both the Apertura and Clausura torneos?', a: 'Yes — league coverage runs across the season as a whole, not one torneo with the other left out.' },
      { q: 'Are Selección Mexicana friendlies included, or just competitive matches?', a: 'Selección Mexicana coverage isn\'t split by match type on a separate tier — it\'s part of the same standard lineup as everything else.' },
    ],
  },
  {
    id: 'mexican-channels',
    eyebrow: 'Mexican channels',
    title: 'What is actually on the Mexican lineup',
    items: [
      { q: 'Is there a breakdown of what "Mexican channels" actually means here?', a: 'Yes — the What Is IPTV guide splits the Mexican side of the catalog into categories: Liga MX and Selección coverage, regional and national news, novelas, and general entertainment, instead of leaving it as one unexplained total.' },
      { q: 'Does subscribing here mean giving up the English-language catalog?', a: `No. The Mexican lineup sits alongside the full English-language and international catalog on every plan — nothing gets removed to make room for it.` },
    ],
  },
  {
    id: 'outside-mexico',
    eyebrow: 'Watching from outside Mexico',
    title: 'For households and fans in the US and elsewhere',
    items: [
      coreFaqs[2],
      { q: 'Do I need a Mexican address, phone number, or bank card to subscribe?', a: 'No. Nothing about ordering or activation requires a Mexican billing address — the login works over any internet connection, wherever you actually are.' },
      { q: 'How do I plan around Liga MX kickoff times from the US?', a: 'The guide on watching from outside Mexico covers converting Mexico City kickoff times to common US time zones so a matchday doesn\'t sneak up on you.' },
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
    items: [
      coreFaqs[4],
      { q: 'Why charge $1 instead of just offering a free trial?', a: 'A free offer mostly attracts idle browsing rather than people actually planning to check Liga MX or a specific novela against the real lineup. The small charge keeps the trial meaningful for people seriously deciding between this and a Mexican cable subscription or another provider.' },
    ],
  },
  {
    id: 'subscriptions',
    eyebrow: 'Subscriptions',
    title: 'Subscription plans',
    items: [coreFaqs[5]],
  },
  {
    id: 'activation',
    eyebrow: 'Login & activation',
    title: 'Getting the login working',
    items: [
      { q: 'What\'s inside the email that shows up after ordering?', a: 'The login credentials your player app needs to pull in the Mexican and international lineup, sent shortly after an order or trial request is processed. Entering them correctly, device by device, is covered on the Setup Guide.' },
      { q: 'The program guide isn\'t showing anything for the Mexican channels — is that fixable?', a: 'Usually, yes. Most player apps populate it on their own shortly after login, and a guide that stays blank generally just needs a manual guide-address field filled in somewhere in that app\'s settings.' },
      { q: 'Can two people in the household stream on separate devices at once?', a: 'Not on the same login — each subscription is built around one active stream, so a second device running at the same time will typically slow both down rather than getting blocked outright. Worth factoring in before a Selección match everyone wants to watch separately.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'What connection speed should I plan around for a live match?', a: 'About 25 Mbps held steady covers 4K comfortably, with lower resolutions needing noticeably less. See the Internet Requirements guide for the full breakdown by resolution.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Will I be billed automatically once a plan ends?', a: 'Not unless a recurring option was turned on at checkout. Left alone, a term simply ends on its own and nothing further gets charged.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where is the complete refund policy written out?', a: 'On its own Refund Policy page, covering the trial and each subscription plan in full detail rather than summarizing them here.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something stops working',
    items: [
      { q: 'A match keeps freezing partway through — what should I check first?', a: 'Start by ruling out the connection itself, then step through the rest of the troubleshooting order laid out on the Setup Guide.' },
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
  title: 'IPTV Mexico FAQ — Liga MX, Novelas & Setup',
  description: 'Answers to common IPTV Mexico questions: Liga MX and Selección coverage, watching from the US, device support, plans, the trial, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'Questions people ask before they subscribe',
  lead: 'Straight answers on Liga MX and Selección Mexicana coverage, what watching from outside Mexico actually involves, device support, and billing.',
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
${ctaBanner({ title: 'Didn\'t find it here?', lead: 'Send it through Contact and an actual person on the team picks it up.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
