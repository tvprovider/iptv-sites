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
      { q: 'Is 4K guaranteed on every channel?', a: 'No — it comes down to the source. A channel or program that was never produced or broadcast in 4K stays at whatever resolution it was actually filmed in, no matter which service streams it.' },
      { q: 'What connection speed does smooth 4K actually need?', a: 'Aim for 25 Mbps sustained, not just a burst — and a wired connection holds up noticeably better than Wi-Fi when 4K is involved.' },
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
      { q: 'M3U or Xtream Codes — which one do you use?', a: 'Both are supported, so whichever format your chosen player app expects, it will work — an M3U playlist URL or an Xtream Codes-style username/password/server login.' },
      { q: 'Is there a program guide, or just a bare channel list?', a: 'Most compatible apps build the on-screen guide (EPG) automatically from whatever you loaded in. If yours shows nothing, look for a manual EPG URL field in its settings — the Setup Guide covers this in more depth.' },
      { q: 'Can two devices stream on the same account simultaneously?', a: 'Each plan is scoped to one active device. Need it on two at once? Reach out before subscribing and we can talk through the options.' },
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
      { q: 'How much data does this actually chew through?', a: "More than you'd expect if you're used to browsing or SD video — 4K streaming is data-hungry. Worth checking your plan's data cap before binging on a metered connection." },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Will I get auto-billed once my term ends?', a: 'Not unless a recurring option was specifically selected at checkout. Otherwise your access simply stops at the end of the paid term.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where do I check what qualifies for a refund?', a: 'The full Refund Policy page lays out exactly what applies to the trial and to each subscription length.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'Troubleshooting',
    items: [
      { q: 'Playback keeps stalling — where do I start?', a: 'Rule out your connection first, then run through the full troubleshooting checklist on the Setup Guide page.' },
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
  title: '4K Streaming IPTV — Frequently Asked Questions',
  description: 'Answers to common questions about 4K Streaming IPTV: how it works, supported devices, setup, the 24-hour trial, subscription plans, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'Answers before you have to ask',
  lead: 'Everything from how streaming works to device support and billing, organized by topic so you can jump straight to what matters.',
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
${ctaBanner({ title: 'Didn\'t find it here?', lead: 'Support can help directly with setup, billing, or anything trial-related.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
