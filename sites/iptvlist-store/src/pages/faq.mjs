import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'basics',
    eyebrow: 'The basics',
    title: 'What is IPTV List?',
    items: [coreFaqs[0]],
  },
  {
    id: 'the-list',
    eyebrow: 'The channel list',
    title: 'What is actually on the list',
    items: [
      coreFaqs[1],
      { q: 'Is there a public breakdown of the channel categories?', a: 'Yes — the What Is IPTV guide splits the full iptv channel list into categories (sports, news, entertainment, kids, regional, and the VOD library) instead of leaving the total as one unexplained number.' },
      { q: 'Do you provide an iptv m3u list link directly?', a: 'Activation sends whatever login format your chosen player app needs, playlist address included where that format applies. The Setup Guide covers getting it into a player correctly either way.' },
    ],
  },
  {
    id: 'updated',
    eyebrow: 'Freshness',
    title: 'How current the list stays',
    items: [
      coreFaqs[2],
      { q: 'Is this an updated iptv list, or a static one from launch?', a: 'The list reflects the live catalog and changes as channels and titles change on the provider side — it is not a fixed snapshot that stops getting maintained after signup.' },
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
      { q: 'What is the actual point of a paid trial?', a: 'It filters out the flood of signups that would show up for a free one and never really check anything, leaving the window for people genuinely comparing this against their own list.' },
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
      { q: 'What actually arrives in the activation email?', a: 'Whatever login format your player app expects, sent after ordering or starting the trial. The Setup Guide walks through entering it correctly, device by device.' },
      { q: 'Is there an on-screen program guide?', a: `Yes, and most player apps build it automatically the moment a login goes in. An empty guide is almost always fixed by finding a manual guide-address option buried in that particular app's settings menu.` },
      { q: 'What happens if two devices stream on one login at once?', a: 'Each subscription is scoped to a single active stream, so pushing two devices at the same time tends to degrade both.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'Is there a minimum speed to actually plan around?', a: 'Roughly 25 Mbps sustained supports 4K reliably; lower resolutions need less. The Internet Requirements guide breaks this down by resolution.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Does a plan renew by itself?', a: 'Only if a recurring option got switched on during checkout. Otherwise a term just wraps up naturally with nothing further billed.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where can the full refund wording be read?', a: 'On the Refund Policy page — it spells out the trial and every subscription plan separately, in full.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something stops working',
    items: [
      { q: 'Playback keeps stalling — where should I look first?', a: 'Rule out the connection itself before anything else, then work through the rest of the troubleshooting checklist on the Setup Guide.' },
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
  title: 'IPTV List — Frequently Asked Questions',
  description: 'Answers to common IPTV List questions: what is on the channel list, device support, subscription plans, the 24-hour trial, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'What people ask before they check the list themselves',
  lead: 'Straight answers on what is actually included, what a plan reaches, and what setup and support look like once you are in.',
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
