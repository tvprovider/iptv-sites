import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'basics',
    eyebrow: 'The basics',
    title: '¿Qué es IPTV Latino?',
    items: [coreFaqs[0]],
  },
  {
    id: 'futbol',
    eyebrow: 'Fútbol',
    title: 'Live sports & fútbol coverage',
    items: [
      coreFaqs[1],
      { q: 'Which leagues are actually covered?', a: 'Liga MX, La Liga, and continental club competitions such as Copa Libertadores are part of the standard lineup, alongside other major Latin American and Spanish fixtures. What\'s reachable at any given time follows the real match calendar.' },
      { q: 'Is fútbol coverage a separate add-on?', a: 'No. It sits inside the same subscription as the novela and English catalogs — there is no separate sports package to purchase on top.' },
    ],
  },
  {
    id: 'novelas',
    eyebrow: 'Novelas',
    title: 'Novelas & Spanish series',
    items: [
      { q: 'Is the novela catalog deep enough to follow a full season?', a: 'Yes — it\'s built as a working library rather than a handful of flagship titles, and it\'s refreshed the way any active on-demand catalog is.' },
      { q: 'Are novelas available on-demand, or only at broadcast time?', a: 'Both — many titles are reachable through the on-demand library in addition to any live channel airing them, so a missed episode isn\'t necessarily a lost one.' },
    ],
  },
  {
    id: 'bilingual',
    eyebrow: 'Bilingual access',
    title: 'Spanish and English, together',
    items: [
      coreFaqs[2],
      { q: 'Do I need a second login for the English channels?', a: 'No — the same login reaches both the Spanish-language and English/international sides of the catalog. There\'s nothing to switch between.' },
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
    eyebrow: 'Login & setup',
    title: 'Login formats & multi-device use',
    items: [
      { q: 'M3U, Xtream Codes, or does it depend?', a: 'Either works. The activation email matches whatever format your chosen player app expects, and the catalog behind it doesn\'t change based on which one you get.' },
      { q: 'Is there an on-screen program guide?', a: 'Nearly every player app fills in the schedule — fútbol kickoff times included — the moment a login is added. A blank guide usually just means checking that app\'s settings for a manual EPG address.' },
      { q: 'What happens if two people stream on the same login simultaneously?', a: 'Each subscription is built around one active stream at a time, so pushing two devices at once tends to cause both to stumble.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'Does switching between Spanish and English channels use more data?', a: 'Not really — bandwidth tracks resolution, full stop. Which language or which specific channel is on screen doesn\'t factor in.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Is there an automatic renewal I should watch for?', a: 'Not unless a recurring option was actively selected at checkout — left alone, a term simply concludes on its own.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where are the actual refund conditions written out?', a: 'The Refund Policy page carries the complete wording covering both the trial and the subscription plans.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something stops working',
    items: [
      { q: 'A fútbol match keeps stalling mid-stream — where to look first?', a: 'Rule out the connection itself before anything else, then work through the rest of the troubleshooting checklist over on the Setup Guide.' },
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
  title: 'IPTV Latino — Frequently Asked Questions',
  description: 'Answers to common IPTV Latino questions: fútbol coverage, novelas, device support, subscription plans, the 24-hour trial, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'What people ask before subscribing to a bilingual lineup',
  lead: 'Straight answers on league and novela coverage, what a plan actually reaches, and what setup and support look like once you\'re in.',
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
${ctaBanner({ title: 'Still have a question?', lead: 'The Contact page reaches an actual inbox, not a bot script.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
