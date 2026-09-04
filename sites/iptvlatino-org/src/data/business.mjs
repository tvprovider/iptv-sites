// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Latino',
  domain: 'iptvlatino.org',
  url: 'https://iptvlatino.org',
  tagline: 'Spanish-language channels, fútbol, and novelas, all in one login',
  supportEmail: 'support@iptvlatino.org',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#d97706',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month to check the Spanish-language lineup for yourself.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'Long enough to follow a full league season without renewing monthly.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most Latino households settle on.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'A full year at the lowest effective monthly rate.', perMonth: 6.67 },
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
  'Puerto Rico', 'United Kingdom', 'Canada', 'Australia', 'Ireland', 'New Zealand',
  'Germany', 'France', 'Italy', 'Portugal', 'Netherlands', 'Belgium',
  'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Poland', 'Romania', 'Turkey', 'Israel',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar',
  'South Africa',
  'India', 'Philippines',
  'China', 'Japan', 'South Korea', 'Indonesia', 'Malaysia', 'Singapore',
  'Brazil',
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
    summary: 'A native app store on Samsung and LG sets, ready for any compatible player carrying the bilingual channel and VOD lineup.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'On a Google TV or Android TV box, the Play Store already carries several compatible players — no separate hardware purchase needed.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Amazon\'s Fire TV lineup takes a player app from the Appstore, or a sideloaded one where the Appstore listing is thin.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Follow a fixture or pick up a novela mid-episode from a handheld screen without losing anything the TV app shows.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'One App Store player serves both, useful for keeping up with a match while away from the living room.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'An App Store listing or a sideload gets it running, reaching the identical catalog every other device does.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'Either platform runs a desktop player pointed straight at the live and on-demand feed, no TV box required.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: '¿Qué es IPTV Latino?',
    a: 'IPTV Latino is a streaming subscription built around Spanish-language and Latin American content — live fútbol, novelas, news, and entertainment channels from across Latin America and Spain — delivered over your internet connection through a compatible player app, in up to 4K where your plan, device, and the source content allow it.',
  },
  {
    q: 'Does it include fútbol and Latin American sports coverage?',
    a: 'Yes. Live sports coverage, including fútbol from major Latin American and Spanish leagues, is part of the standard channel lineup — there is no separate "sports package" charged on top.',
  },
  {
    q: 'Is this only Spanish-language content, or English too?',
    a: 'Both. The full catalog includes Spanish-language channels and on-demand titles alongside the same English-language and international channels every plan includes — nothing is removed to make room for the other.',
  },
  {
    q: 'What devices does IPTV Latino work on?',
    a: 'Smart TVs (Samsung, LG), Android TV and Google TV boxes, Fire TV and Firestick, Android and iOS phones and tablets, Apple TV, and Windows or Mac computers — a compatible player app is the only thing each one needs installed. Device-by-device instructions live on the Setup Guide.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'One dollar buys a full 24 hours on the identical Spanish-language and international catalog a paying subscriber gets — plenty of time to gauge channel availability and streaming quality before spending more.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four lengths in US dollars: 1 Month at $14.99, 3 Months at $34.99, 6 Months at $54.99, and 12 Months at $79.99. Every one of them carries the same channel and VOD catalog — a longer term just brings the monthly average down.',
  },
  {
    q: 'How do I reach support?',
    a: 'The Contact page covers setup problems, billing, and trial questions alike, and lands directly with a person rather than a queue.',
  },
];
