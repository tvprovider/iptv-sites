import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'iptv-basics',
    eyebrow: 'IPTV basics',
    title: 'The fundamentals',
    items: [coreFaqs[0], coreFaqs[1]],
  },
  {
    id: '4k-streaming',
    eyebrow: '4K streaming',
    title: 'On picture quality',
    items: [
      { q: 'Does 4K apply across the whole lineup?', a: 'Only where the source itself was produced in 4K. A program shot and broadcast in HD stays HD no matter which streaming service delivers it.' },
      { q: 'What kind of connection actually holds up for 4K?', a: 'Look for a sustained 25 Mbps or more, and lean on Ethernet over Wi-Fi if your setup allows it — that combination is what keeps 4K stable.' },
    ],
  },
  {
    id: 'subscriptions',
    eyebrow: 'Subscriptions',
    title: 'Plan questions',
    items: [coreFaqs[5]],
  },
  {
    id: 'trial',
    eyebrow: 'Trial',
    title: 'Before you subscribe',
    items: [coreFaqs[4]],
  },
  {
    id: 'devices',
    eyebrow: 'Devices',
    title: 'What it runs on',
    items: [coreFaqs[2]],
  },
  {
    id: 'formats',
    eyebrow: 'Compatibility',
    title: 'Logins, guides, and multiple devices',
    items: [
      { q: 'M3U or Xtream Codes — do I need to pick one in advance?', a: 'No, both work. Whichever your chosen player app expects is the one it will accept — a playlist link for M3U, or a username/password/server trio for Xtream Codes.' },
      { q: 'Will the channel guide show up on its own?', a: 'Most compatible apps assemble it automatically from your login details. When one does not, a manual "EPG URL" field in its settings is the fallback — covered further in the Setup Guide.' },
      { q: 'Two devices, one login — possible?', a: 'Each subscription covers one device actively streaming at a time. Reach out before you subscribe if simultaneous multi-device access is something you specifically need.' },
    ],
  },
  {
    id: 'setup',
    eyebrow: 'Setup',
    title: 'Getting connected',
    items: [coreFaqs[3]],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Bandwidth and data use',
    items: [
      { q: 'Is this heavy on a data cap?', a: 'Yes, noticeably — video streaming eats far more data than browsing, and 4K multiplies that further. Worth checking your data allowance first if you are on a metered connection.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'How charges work',
    items: [
      { q: 'Does a plan quietly renew itself?', a: 'Only if a recurring option was specifically selected at checkout. Otherwise your access simply ends when the paid term is up.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'If you need a refund',
    items: [
      { q: 'Where are the refund terms spelled out?', a: 'The Refund Policy page covers exactly what applies to both the trial and each subscription length.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something is not working',
    items: [
      { q: 'Streaming keeps buffering — where do I start?', a: 'Check the connection itself first, then run through the full troubleshooting checklist on the Setup Guide.' },
    ],
  },
  {
    id: 'support',
    eyebrow: 'Support',
    title: 'Reaching a real person',
    items: [coreFaqs[6]],
  },
];

export default {
  slug: 'faq',
  title: 'Canada IPTV — Frequently Asked Questions',
  description: 'Canada IPTV frequently asked questions: how the service works, device support, setup, the 24-hour trial, subscription plans, billing, and refunds.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The questions we hear most, answered plainly',
  lead: 'Straight answers about how the service works, what devices are supported, and what to expect.',
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
${ctaBanner({ title: 'Still have questions?', lead: 'Our support team is ready to help with setup, billing, or trial questions.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
