// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Mexico',
  domain: 'iptvmexico.store',
  url: 'https://iptvmexico.store',
  tagline: 'Liga MX, novelas, and Mexican TV, wherever you actually live',
  supportEmail: 'support@iptvmexico.store',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#0891b2',
};

export const nav = [
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Free Trial', href: '/trial/' },
  { label: 'Setup Guide', href: '/setup-guide/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about-us/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerLinks = {
  product: [
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Order Now', href: '/order/' },
    { label: '24-Hour Trial', href: '/trial/' },
    { label: 'Setup Guide', href: '/setup-guide/' },
    { label: 'Supported Devices', href: '/setup-guide/#devices' },
  ],
  company: [
    { label: 'About Us', href: '/about-us/' },
    { label: 'FAQ', href: '/faq/' },
    { label: 'Contact', href: '/contact/' },
  ],
  guides: [
    { label: 'What Is IPTV?', href: '/guides/what-is-iptv/' },
    { label: '4K vs HD Streaming', href: '/guides/4k-vs-hd-streaming/' },
    { label: 'Internet Requirements', href: '/guides/internet-requirements-for-4k-streaming/' },
    { label: 'Choosing an IPTV Subscription', href: '/guides/how-to-choose-an-iptv-subscription/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Refund Policy', href: '/refund-policy/' },
    { label: 'Terms of Use', href: '/terms-of-use/' },
  ],
};

export const plans = [
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month to check the Mexican lineup against what you actually watch.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'Covers most of a Liga MX torneo without renewing monthly.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most subscribers settle on after the first month.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'A full year, both torneos included, at the lowest monthly rate.', perMonth: 6.67 },
];

export const catalog = {
  liveChannels: '40,000+',
  vods: '180,000+',
};

export const trial = {
  price: 1.00,
  duration: '24 hours',
  label: '24-Hour Trial',
};

export const countryOptions = [
  'United States', 'Mexico', 'Spain', 'Colombia', 'Argentina', 'Peru', 'Venezuela',
  'Chile', 'Ecuador', 'Guatemala', 'Cuba', 'Bolivia', 'Dominican Republic', 'Honduras',
  'Paraguay', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Uruguay',
  'Puerto Rico', 'Canada', 'United Kingdom', 'Australia', 'Ireland', 'New Zealand',
  'Germany', 'France', 'Italy', 'Portugal', 'Netherlands', 'Belgium',
  'Switzerland', 'Sweden', 'Norway', 'Denmark',
  'Poland', 'Turkey', 'Israel',
  'United Arab Emirates', 'Saudi Arabia',
  'South Africa',
  'India', 'Philippines',
  'China', 'Japan', 'South Korea', 'Brazil',
  'Other',
];

export const deviceOptions = [
  'Smart TV',
  'Android TV',
  'Fire TV / Firestick',
  'Android Phone or Tablet',
  'iPhone or iPad',
  'Apple TV',
  'Windows',
  'macOS',
];

export const devices = [
  {
    id: 'smart-tv',
    name: 'Smart TV',
    summary: 'Samsung and LG sets pick up Liga MX matches and the full Mexican and international catalog through any compatible player already on their store.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV boxes grab a compatible player from the Play Store — a common pick for a living room set up around game day.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: `Amazon's stick and box lineup picks up Liga MX and Mexican channels the same way, whether the player comes from the Appstore or a sideload you trust.`,
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Follow a match or catch up on a novela from a phone or tablet without missing anything the TV app shows.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A single App Store player covers both, useful for keeping up with the Selección while away from home.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'A player app from the App Store, or a sideloaded one, reaches the same Liga MX and Mexican lineup as any other supported device.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'Desktop players on both platforms load the same live and on-demand lineup directly, no TV box required.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: '¿Qué es IPTV Mexico?',
    a: 'IPTV Mexico is a streaming subscription built around Mexican television — Liga MX and Selección Mexicana coverage, Mexican novelas, news, and entertainment channels — delivered over your internet connection through a compatible player app, alongside the same English-language and international catalog every plan includes, in up to 4K where your plan, device, and the source content allow it.',
  },
  {
    q: 'Does it cover Liga MX and the Mexican national team?',
    a: 'Yes. Live Liga MX matches and Selección Mexicana coverage are part of the standard channel lineup, not a separate sports add-on billed on top.',
  },
  {
    q: 'Is this useful for someone living outside Mexico?',
    a: 'Yes — the Mexican channel and sports lineup streams over your internet connection wherever you actually are, which is the point for Mexican households and fans living in the US or elsewhere who still want Liga MX and Mexican TV without a Mexican cable subscription.',
  },
  {
    q: 'What devices does IPTV Mexico work on?',
    a: 'Any Smart TV, Android TV or Google TV box, Fire TV or Firestick, Android phone or tablet, iPhone, iPad, Apple TV, Windows PC, or Mac — each needs a compatible player app installed. Device-by-device steps are on the Setup Guide.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of full access to the same Mexican and international catalog as a paid plan — enough time to check a live match or a channel before committing.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99) in US dollars. Every plan includes the same full channel and VOD catalog — longer terms just lower the effective monthly price.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the Contact page for setup help, billing questions, or anything trial-related. Every message reaches an actual person, not an automated queue.',
  },
];
