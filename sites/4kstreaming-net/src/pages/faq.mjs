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
      { q: 'Will everything I watch be in 4K?', a: 'No — 4K availability depends on the original source content. Some channels and programs are only available in HD or lower, regardless of the streaming service.' },
      { q: 'What internet speed do I need for 4K?', a: 'We recommend at least 25 Mbps of sustained download speed for smooth 4K playback, ideally over a wired connection.' },
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
      { q: 'What playlist formats do you support?', a: 'We support both M3U playlist URLs and Xtream Codes-style logins (username, password, and server URL), so you can use nearly any compatible IPTV player app on any supported device.' },
      { q: 'Do you support an EPG (program guide)?', a: 'Most compatible player apps load an electronic program guide automatically from your playlist or login details. If yours doesn\'t, check the app\'s settings for a manual EPG URL field — see our Setup Guide for details.' },
      { q: 'Can I use my subscription on more than one device at once?', a: 'Each plan is intended for use on one device at a time. If you need simultaneous multi-device access, contact us before subscribing to discuss options.' },
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
      { q: 'Does IPTV use a lot of data?', a: 'Yes — streaming video, especially in 4K, uses significantly more data than browsing or standard-definition video. If you have a data cap, keep this in mind.' },
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
      { q: 'How do refunds work?', a: 'See our full Refund Policy for the specific terms that apply to trials and subscription plans.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'Troubleshooting',
    items: [
      { q: 'What do I do if streaming keeps buffering?', a: 'Check your internet connection first, then see the full troubleshooting checklist on our Setup Guide.' },
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
  title: 'Frequently Asked Questions — 4K Streaming IPTV | 4K Streaming',
  description: 'Answers to common questions about 4K Streaming IPTV: how it works, supported devices, setup, the 24-hour trial, subscription plans, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'Frequently asked questions',
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
