import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'basics',
    eyebrow: 'The basics',
    title: 'What is IPTV Poland?',
    items: [coreFaqs[0]],
  },
  {
    id: 'ekstraklasa',
    eyebrow: 'Ekstraklasa & sport',
    title: 'Polish football coverage',
    items: [
      coreFaqs[1],
      { q: 'Is it every Ekstraklasa round, or just a handful of headline fixtures?', a: 'The entire season, round by round — this isn\'t a highlights package or a shortlist of marquee matches with the rest quietly dropped.' },
      { q: 'Where do the national team and other Polish competitions fit in?', a: 'Right inside the same base lineup as Ekstraklasa — nothing Poland-related sits behind a separate sports tier here.' },
    ],
  },
  {
    id: 'polish-channels',
    eyebrow: 'Polish channels',
    title: 'What is actually on the Polish lineup',
    items: [
      { q: 'Can you actually name what falls under "Polish channels"?', a: 'The What Is IPTV guide does exactly that — Ekstraklasa and sport, national plus regional news, and entertainment, laid out as separate categories instead of one number you\'re expected to take on faith.' },
      { q: 'Does adding Polish channels mean losing any of the English catalog?', a: 'No — the Polish side rides alongside the full English and international catalog on every plan, not in place of it.' },
    ],
  },
  {
    id: 'outside-poland',
    eyebrow: 'Watching from outside Poland',
    title: 'For households and fans abroad',
    items: [
      coreFaqs[2],
      { q: 'Does a Polish address or Polish bank card factor into signing up?', a: 'Not at all — ordering, paying, and activating all happen without one. The login runs over whatever internet connection you have, wherever that happens to be.' },
      { q: 'Is a VPN part of watching Ekstraklasa from abroad?', a: 'It isn\'t needed here. A VPN matters for getting around a broadcaster app that blocks non-Polish IPs — this login streams directly with no such wall to route around, so a VPN has nothing to do.' },
      { q: 'What happens to kickoff times once you\'re outside Poland?', a: 'It varies more by country than most people expect — the guide on watching from outside Poland breaks down the UK, Ireland, Germany, the Netherlands, and North America specifically.' },
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
      { q: 'Why isn\'t the trial simply free?', a: 'Free tends to pull in people just browsing, most of whom never actually pull up Ekstraklasa or check a specific Polish channel against the real lineup. A dollar is small enough not to matter to anyone seriously weighing this against Polish cable or a rival provider, but it filters out the traffic that was never going to convert either way.' },
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
      { q: 'What does the post-order email actually contain?', a: 'Just the login your player app needs to reach the Polish and international lineup, sent once an order or trial request clears. The Setup Guide covers plugging it in correctly on whichever device you\'re using.' },
      { q: 'No program data is showing for the Polish channels — worth worrying about?', a: 'Rarely. It tends to populate itself within a few minutes, and if it doesn\'t, most apps have a manual guide-address field tucked into settings that resolves it.' },
      { q: 'Can a household run two streams off one subscription?', a: 'Each login supports a single active stream. A second device joining at the same time tends to drag both down rather than getting refused — something to plan around before a big Ekstraklasa fixture the whole house wants to watch on separate screens.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'How fast does my connection actually need to be for live matches?', a: 'Around 25 Mbps sustained is enough for 4K, considerably less for lower resolutions. The Internet Requirements guide has the complete breakdown by resolution.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Does a plan quietly renew on its own?', a: 'Only if a recurring option was switched on at checkout. Otherwise a term just ends, no further charge involved.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'Where\'s the full refund policy, rather than a summary?', a: 'It has its own page, covering the trial and every subscription length in complete detail rather than condensed down here.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something stops working',
    items: [
      { q: 'Playback keeps freezing mid-match — where do I start?', a: 'Rule out the connection first, then work through the rest of the troubleshooting sequence on the Setup Guide in order.' },
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
  title: 'IPTV Poland FAQ — Ekstraklasa, Channels & Setup',
  description: 'Answers to common IPTV Poland questions: Ekstraklasa coverage, watching abroad, VPN, device support, plans, the trial, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The questions that come up right before people subscribe',
  lead: 'Ekstraklasa coverage, what changes once you\'re watching from outside Poland, the VPN question specifically, device support, and how billing actually works — answered directly, not hedged around.',
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
${ctaBanner({ title: 'Question not covered above?', lead: 'The Contact page reaches a real person on the team, not a queue.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
