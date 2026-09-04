import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, iconMedia,
} from '../lib/render.mjs';
import { coreFaqs } from '../data/business.mjs';

const topics = [
  {
    id: 'app-store',
    eyebrow: 'App Store availability',
    title: 'Getting an app onto Apple TV',
    items: [coreFaqs[0], coreFaqs[3]],
  },
  {
    id: 'sideloading',
    eyebrow: 'Sideloading',
    title: 'The Xcode / sideload method',
    items: [
      { q: 'Do I really need a Mac to sideload?', a: 'Yes, at least briefly — Xcode only runs on macOS. If you do not own one, borrowing a friend\'s Mac for the initial setup is enough; nothing about the process needs ongoing Mac access afterward.' },
      { q: 'Why does the sideloaded app disappear after about a week?', a: 'Apps installed through a free Apple ID in Xcode carry a 7-day certificate. A paid Apple Developer account removes that limit, but is not required — reinstalling periodically through Xcode takes a few minutes.' },
      { q: 'Is sideloading against Apple\'s rules?', a: 'No — sideloading through Xcode\'s own developer tools is an Apple-supported way to install apps on your own device, not a workaround or jailbreak.' },
    ],
  },
  {
    id: 'iptv-basics',
    eyebrow: 'IPTV basics',
    title: 'What IPTV Apple TV actually is',
    items: [coreFaqs[2]],
  },
  {
    id: '4k-streaming',
    eyebrow: '4K on Apple TV',
    title: 'Resolution and streaming quality',
    items: [
      coreFaqs[1],
      { q: 'Does Apple TV HD support 4K content?', a: 'No — the 4th-generation Apple TV HD tops out at 1080p regardless of the source resolution. 4K needs an Apple TV 4K model.' },
      { q: 'What internet speed does 4K need on Apple TV?', a: 'At least 25 Mbps of sustained download speed is recommended, ideally over Ethernet into the Apple TV rather than Wi-Fi.' },
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
    eyebrow: 'Other devices',
    title: 'Beyond Apple TV',
    items: [
      { q: 'Does this work on iPhone and iPad too?', a: 'Yes, through a compatible player app from the App Store — useful as a companion screen or a backup if the Apple TV is busy.' },
      { q: 'What about Smart TVs, Fire TV, or Android boxes?', a: 'All supported. Apple TV is the primary focus of this site, but the same subscription works across every device we list in the Setup Guide.' },
    ],
  },
  {
    id: 'formats',
    eyebrow: 'Compatibility',
    title: 'Playlist formats & multi-device use',
    items: [
      { q: 'What playlist formats do you support?', a: 'Both M3U playlist URLs and Xtream Codes-style logins (username, password, server URL), covering nearly any compatible player app on any supported device.' },
      { q: 'Do you support an EPG (program guide)?', a: 'Most compatible player apps load a program guide automatically from your playlist or login details. If yours does not, check its settings for a manual EPG URL field — see the Setup Guide.' },
      { q: 'Can I use my subscription on my Apple TV and my phone at once?', a: 'Each plan covers one device at a time. Running the same credentials on two devices simultaneously can cause playback issues on both.' },
    ],
  },
  {
    id: 'internet-requirements',
    eyebrow: 'Internet',
    title: 'Internet requirements',
    items: [
      { q: 'Does IPTV use a lot of data?', a: 'Yes — streaming video, especially in 4K, uses significantly more data than browsing or SD video. Worth keeping in mind if you have a data cap.' },
    ],
  },
  {
    id: 'billing',
    eyebrow: 'Billing',
    title: 'Billing questions',
    items: [
      { q: 'Do plans renew automatically?', a: 'Only if you explicitly choose a recurring option at checkout. Otherwise access ends at the end of your paid term.' },
      { q: 'Is this billed through my Apple ID?', a: 'No. This is billed directly by us, separately from any App Store purchases or subscriptions on your Apple ID.' },
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'Refunds',
    items: [
      { q: 'How do refunds work?', a: 'See the full Refund Policy for the specific terms covering trials and subscription plans.' },
    ],
  },
  {
    id: 'troubleshooting',
    eyebrow: 'Troubleshooting',
    title: 'When something is not working',
    items: [
      { q: 'What do I do if streaming keeps buffering on Apple TV?', a: 'Check the internet connection first — ideally test with Ethernet — then see the full troubleshooting checklist on the Setup Guide.' },
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
  title: 'Frequently Asked Questions — IPTV Apple TV',
  description: 'Answers to common IPTV Apple TV questions: App Store availability, sideloading, 4K resolution, setup, the 24-hour trial, subscription plans, and support.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'FAQ' }]), faqSchema(coreFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'FAQ' }])}
${hero({
  eyebrow: 'FAQ',
  h1: 'The Apple TV questions we actually get asked',
  lead: 'Straight answers on App Store availability, sideloading, resolution, and what to expect.',
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
${ctaBanner({ title: 'Still have questions?', lead: 'Support is ready to help with setup, billing, or trial questions.', primaryCta: { label: 'Contact Support', href: '/contact/' }, secondaryCta: { label: 'View Plans', href: '/pricing/' } })}
`,
};
