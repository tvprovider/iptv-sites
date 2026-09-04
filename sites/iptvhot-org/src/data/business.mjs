// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Hot',
  domain: 'iptvhot.org',
  url: 'https://iptvhot.org',
  tagline: 'Whatever\'s trending right now, already in the lineup',
  supportEmail: 'support@iptvhot.org',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#db2777',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month to see what\'s actually in the lineup right now.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'Long enough to catch a full season of trending releases.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most subscribers settle on after the first month.', perMonth: 9.17 },
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
    summary: 'Samsung and LG Smart TVs pull the same live lineup and trending catalog through any compatible player app already on their store.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV boxes grab a compatible player from the Play Store in a couple of taps.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Runs the same lineup on Amazon\'s hardware, through the Appstore or a trusted sideload.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Check what\'s trending from a phone or tablet the same way you would on the big screen.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A compatible App Store player covers both, useful for catching something live away from the TV.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'Fully supported through an App Store or sideloaded player, same catalog as every other device.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'Desktop players on both handle the same live and on-demand lineup without a separate account.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is IPTV Hot?',
    a: 'IPTV Hot is a streaming subscription built around what\'s currently popular — trending live sports, new releases, and in-demand channels — delivered over your internet connection through a compatible player app, in up to 4K where your plan, device, and the source content allow it.',
  },
  {
    q: 'How often does the "trending" content actually change?',
    a: 'The underlying catalog updates continually as new releases land and live sports schedules shift — there is no fixed monthly refresh date, and nothing here is a static, once-a-year library.',
  },
  {
    q: 'Is the trending content behind a higher-priced plan?',
    a: 'No. Every plan length reaches the identical live channel and VOD catalog, trending titles included — a longer term only lowers the effective monthly price, it does not unlock extra content.',
  },
  {
    q: 'What devices does IPTV Hot work on?',
    a: 'Any Smart TV, Android TV or Google TV box, Fire TV or Firestick, Android phone or tablet, iPhone, iPad, Apple TV, Windows PC, or Mac — each needs a compatible player app installed. The Setup Guide has device-by-device steps.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of full access to the same live and on-demand catalog as a paid plan — enough time to check the current lineup and your own streaming quality before committing.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'A month runs $14.99, three months $34.99, six months $54.99, and a full year $79.99 — all in US dollars, and all reaching the identical catalog. The only thing a longer commitment buys is a lower price per month.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the Contact page for setup help, billing questions, or anything trial-related. Every message reaches an actual person, not an automated queue.',
  },
];
