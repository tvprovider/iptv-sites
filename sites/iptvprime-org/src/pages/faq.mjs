import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'basics',
    eyebrow: 'The basics',
    title: 'What is IPTV Prime?',
    items: [coreFaqs[0]],
  },
  {
    id: 'catalog',
    eyebrow: 'The catalog',
    title: 'Channels & VOD library',
    items: [
      coreFaqs[1],
      { q: 'Is 40,000+ channels a real count, or padded with dead or duplicate feeds?', a: 'The number describes the live channel lineup as delivered — the fastest way to confirm it for yourself is the $1 trial, which runs the actual catalog rather than a sample of it.' },
      { q: 'Does the on-demand library get refreshed, or is it a static snapshot?', a: 'It\'s actively maintained rather than left static. If a specific title you\'re after isn\'t turning up, that\'s exactly the kind of thing worth asking support directly.' },
    ],
  },
  {
    id: 'plans',
    eyebrow: 'Plan lengths',
    title: 'Why four lengths if the catalog never changes',
    items: [
      coreFaqs[2],
      { q: 'If every plan reaches the same catalog, why do longer terms cost less per month?', a: 'The discount rewards paying further ahead, the same way most subscription services price a longer commitment — it isn\'t a signal that the shorter plan is missing something.' },
      { q: 'Is there an unlisted "basic" tier below the 1-month plan?', a: 'No. The four lengths on the Pricing page are the complete list — nothing sits below or above them.' },
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
      { q: 'Why isn\'t the trial simply free?', a: 'A free trial mostly draws people clicking out of curiosity who never actually check the catalog or message support. A small charge filters that out and keeps the day meaningful for people genuinely comparing providers.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Pricing & billing',
    title: 'What the price actually includes',
    items: [
      coreFaqs[5],
      { q: 'Are there fees added after checkout that don\'t show up on Pricing?', a: 'No — the price posted next to a plan is the full price. Nothing gets added once you\'re past the order form.' },
      { q: 'Does a plan renew automatically?', a: 'Only if a recurring option was explicitly chosen at checkout. Otherwise a term simply ends, and starting a new one is a decision you make each time.' },
    ],
  },
  {
    id: 'support',
    eyebrow: 'Support',
    title: 'How support actually works',
    items: [
      coreFaqs[6],
      { q: 'Is there a faster tier of support for a longer or more expensive plan?', a: 'No — every message is worked in the order it arrives, regardless of which plan sent it. Being specific about the device and the issue is what actually speeds up a reply, not the plan length.' },
      { q: 'What hours does support actually operate?', a: 'Messages are read and answered throughout the day rather than during a narrow fixed window — the Contact page is the way in at any time.' },
    ],
  },
  {
    id: 'activation',
    eyebrow: 'Login & activation',
    title: 'Getting the login working',
    items: [
      { q: 'What does the activation email actually contain?', a: 'Just the login your player app needs, sent once an order or trial request clears. The Setup Guide covers plugging it in correctly on whichever device you\'re using.' },
      { q: 'No program guide is showing right after I log in — worth worrying about?', a: 'Rarely. It tends to populate itself within a few minutes, and if it doesn\'t, most apps have a manual guide-address field tucked into settings that resolves it.' },
      { q: 'Can a household run two streams off one subscription?', a: 'Each login supports a single active stream. A second device joining at the same time tends to drag both down rather than getting refused — something to plan around before a night the whole household wants to watch on separate screens.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'How fast does my connection actually need to be for 4K?', a: 'Roughly 25 Mbps held steady covers 4K; lower resolutions need noticeably less. The Internet Requirements guide breaks each resolution down individually.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something stops working',
    items: [
      { q: 'Playback keeps buffering — where do I start?', a: 'Start with the network, since that\'s the cause more often than not, then step through the rest of the checklist on the Setup Guide.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Is there a longer version of the refund terms than what\'s summarized here?', a: 'Yes — a dedicated page spells out the trial and each subscription length individually, in more detail than fits into a short answer.' },
    ],
  },
];

export default {
  slug: 'faq',
  title: 'IPTV Prime FAQ — Plans, Catalog & Support',
  description: 'Answers to common IPTV Prime questions: catalog consistency across plans, device support, the trial, billing, and how support actually responds.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The questions that come up right before people subscribe',
  lead: 'Whether the cheap plan is actually worse, whether the channel count is real, how fast support genuinely replies, device support, and how billing actually works — answered directly, not hedged around.',
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
${ctaBanner({ title: 'Still have a question?', lead: 'Send it through Contact — it gets read by a person, worked in the order it arrives.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
