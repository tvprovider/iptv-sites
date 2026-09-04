// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV List',
  domain: 'iptvlist.store',
  url: 'https://iptvlist.store',
  tagline: 'The actual channel list and the actual price, before you ask',
  supportEmail: 'support@iptvlist.store',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#16a34a',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month to check every item on the list against reality.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A lower monthly rate once the list has already checked out.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most subscribers land on after month one.', perMonth: 9.17 },
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
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Ireland', 'New Zealand',
  'Germany', 'France', 'Italy', 'Spain', 'Portugal', 'Netherlands', 'Belgium',
  'Switzerland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Iceland',
  'Poland', 'Czech Republic', 'Greece', 'Romania', 'Hungary', 'Bulgaria', 'Croatia',
  'Slovakia', 'Slovenia', 'Serbia', 'Ukraine', 'Turkey', 'Israel',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Jordan', 'Lebanon', 'Egypt', 'Morocco', 'Algeria', 'Tunisia',
  'South Africa', 'Nigeria', 'Kenya', 'Ghana',
  'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal',
  'China', 'Japan', 'South Korea', 'Philippines', 'Indonesia', 'Malaysia', 'Singapore',
  'Thailand', 'Vietnam',
  'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela',
  'Ecuador', 'Uruguay', 'Paraguay', 'Bolivia', 'Costa Rica', 'Panama',
  'Dominican Republic', 'Puerto Rico', 'Jamaica', 'Trinidad and Tobago',
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
    summary: 'Samsung and LG models handle the full list through any player app already sitting on their own built-in store — no extra hardware needed.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'An Android TV or Google TV box installs a suitable player from the Play Store in a couple of taps and lands on the identical catalog.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: `Amazon's Fire TV hardware reaches the same list through the Appstore, or through a trusted sideloaded app where that route makes more sense.`,
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'A phone or tablet pulls up precisely what shows on the living room TV — nothing about the list gets cut down for a smaller screen.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'One App Store player app covers both devices and lands on the same list every other supported device reaches.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'An App Store or sideloaded player app on Apple TV reaches the identical catalog carried across the rest of the lineup.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'A desktop player on either platform opens the same live and on-demand list directly on a monitor, no separate device required.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is IPTV List?',
    a: 'IPTV List is a streaming subscription built around actually showing you what you are buying — the real channel count, the real device list, and the real price per plan — before you hand over any payment details, delivered through a compatible player app in up to 4K where your plan, device, and the source content allow it.',
  },
  {
    q: 'Is the channel list the same across every plan?',
    a: 'Yes. Every plan length reaches the identical 40,000+ live channels and 180,000+ VOD titles — a longer term only changes the price, never what is on the list.',
  },
  {
    q: 'How current is the list — does it match what actually plays?',
    a: 'The list reflects the live catalog, which updates continually as channels and titles change on the provider side. A dead or renamed channel is the exception, not the rule, and support can flag one you find.',
  },
  {
    q: 'What devices are on the supported list?',
    a: 'Any Smart TV, Android TV or Google TV box, Fire TV or Firestick, Android phone or tablet, iPhone, iPad, Apple TV, Windows PC, or Mac — each needs a compatible player app installed. Device-by-device steps are on the Setup Guide.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours against the exact same list a paying subscriber gets — enough time to check the catalog against your own expectations before committing.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths, all in US dollars: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99). Every plan reaches the same channel and VOD list — a longer term only lowers the effective monthly price.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the Contact page for setup help, billing questions, or anything trial-related. Every message reaches an actual person, not an automated queue.',
  },
];
