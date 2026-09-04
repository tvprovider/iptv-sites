import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'iptv-basics',
    eyebrow: 'The basics',
    title: 'What IPTV Hot actually is',
    items: [coreFaqs[0]],
  },
  {
    id: 'freshness',
    eyebrow: 'Catalog freshness',
    title: 'How "trending" actually works here',
    items: [
      coreFaqs[1],
      { q: 'Is there a published schedule for when new titles land?', a: 'No fixed calendar — additions happen on an ongoing basis rather than a set monthly date. That is intentional: a hard release schedule would mean waiting on a specific day instead of finding new content whenever it actually becomes available.' },
      { q: 'How is live sports coverage kept current?', a: 'Fixtures are tied to what is actually being played, not a static list built once. A channel showing last season\'s schedule would defeat the entire point of this service.' },
    ],
  },
  {
    id: 'access',
    eyebrow: 'Access by plan',
    title: 'Does a longer plan unlock more',
    items: [coreFaqs[2]],
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
      { q: 'Do you support M3U links, Xtream Codes logins, or both?', a: 'Both. Whichever your chosen player app expects, the login details you receive will match it — neither format changes what catalog you can reach.' },
      { q: 'Do you provide a program guide (EPG)?', a: 'Most player apps pull the schedule automatically once your login is entered. If yours shows a blank guide, check its settings for a manual EPG URL field.' },
      { q: 'Can the same login run on two devices at once?', a: 'Each plan is scoped to one active device at a time. Running the same login on two devices simultaneously tends to interrupt playback on both.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'Does a bigger, more frequently updated catalog need faster internet?', a: 'No — catalog size and update frequency don\'t affect bandwidth. What matters is the resolution you\'re streaming at, same as any video service.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Do plans renew automatically?', a: 'Only if a recurring option is explicitly chosen at checkout. Otherwise access ends at the end of your paid term.' },
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
    title: 'When something stops working',
    items: [
      { q: 'What\'s the first thing to check if streaming keeps buffering?', a: 'Confirm the internet connection itself is stable first, then see the full troubleshooting checklist on the Setup Guide.' },
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
  title: 'IPTV Hot — Frequently Asked Questions',
  description: 'Answers to common IPTV Hot questions: how the trending catalog updates, device support, subscription plans, the 24-hour trial, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The catalog, plan, and setup questions people actually ask',
  lead: 'Direct answers on how the trending lineup updates, what each plan reaches, and what to expect.',
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
${ctaBanner({ title: 'Didn\'t find it here?', lead: 'Send it through the Contact page and an actual person will answer.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
