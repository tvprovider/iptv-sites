import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'iptv-basics',
    eyebrow: 'IPTV basics',
    title: 'What is IPTV, exactly?',
    items: [coreFaqs[0], coreFaqs[1]],
  },
  {
    id: '4k-streaming',
    eyebrow: '4K streaming',
    title: '4K streaming quality',
    items: [
      { q: 'Is 4K available on absolutely everything?', a: 'Only where the original source was actually shot and broadcast in 4K. Older programs or channels that never had a 4K master stay at their native resolution no matter what streams them.' },
      { q: 'How fast does my connection need to be?', a: 'A sustained 25 Mbps download is the working minimum for stable 4K, and a wired Ethernet connection holds up better than Wi-Fi once 4K is involved.' },
    ],
  },
  {
    id: 'subscriptions',
    eyebrow: 'Subscriptions',
    title: 'Subscription plans',
    items: [coreFaqs[5]],
  },
  {
    id: 'trial',
    eyebrow: 'Trial',
    title: '24-hour trial',
    items: [coreFaqs[4]],
  },
  {
    id: 'devices',
    eyebrow: 'Devices',
    title: 'Device compatibility',
    items: [coreFaqs[2]],
  },
  {
    id: 'formats',
    eyebrow: 'Compatibility',
    title: 'Playlist formats & multi-device use',
    items: [
      { q: 'Which login formats work with your service?', a: 'Both an M3U playlist link and an Xtream Codes-style login (username, password, server URL) are supported, which covers nearly any compatible IPTV player app on any device we list.' },
      { q: 'Does the channel guide (EPG) set itself up?', a: 'In most player apps, yes — the guide builds itself from your playlist automatically. When it does not, look in that app\'s settings for a manual EPG URL field; the Setup Guide walks through it.' },
      { q: 'Can two people share one subscription across devices?', a: 'Each plan covers a single active device at a time. Reach out before subscribing if simultaneous multi-device access is what you actually need — it is worth discussing up front.' },
    ],
  },
  {
    id: 'setup',
    eyebrow: 'Setup',
    title: 'Setup & activation',
    items: [coreFaqs[3]],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'How much data does streaming actually use?', a: 'More than you might expect, especially in 4K — noticeably heavier than browsing or SD video. Worth factoring in if your home internet plan has a data cap.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Will I get billed again without asking for it?', a: 'Not unless you specifically opted into a recurring charge at checkout. Otherwise your access simply ends when the paid term is up.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where are the actual refund terms?', a: 'The Refund Policy page has the full breakdown for both the trial and every subscription length — worth reading before, not after, a purchase.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'Troubleshooting',
    items: [
      { q: 'Streaming keeps stalling out — where do I start?', a: 'Start with your internet connection itself, then work through the full troubleshooting checklist on the Setup Guide if that is not the culprit.' },
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
  title: 'Frequently Asked Questions — America IPTV',
  description: 'Answers to common questions about America IPTV: how it works, supported devices, setup, the 24-hour trial, subscription plans, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The questions we hear most before someone signs up',
  lead: 'Real answers on how everything works, which devices are covered, and what to expect after you order.',
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
${ctaBanner({ title: 'Didn\'t see your question here?', lead: 'Reach out directly — setup, billing, and trial questions all go to a real person.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
