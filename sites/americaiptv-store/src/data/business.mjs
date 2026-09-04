// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'America IPTV',
  domain: 'americaiptv.store',
  url: 'https://americaiptv.store',
  tagline: 'Every American channel, streamed in 4K',
  supportEmail: 'support@americaiptv.store',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#155eef',
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
    { label: 'Disclaimer', href: '/disclaimer/' },
  ],
};

export const plans = [
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month, no commitment — a low-risk way to start.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A full season covered, with a lower per-month rate.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most American households land on.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'A full year at the lowest effective monthly price.', perMonth: 6.67 },
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
  'Windows',
  'macOS',
];

export const devices = [
  {
    id: 'smart-tv',
    name: 'Smart TV',
    summary: 'Works on Samsung and LG Smart TVs through a compatible player app, no external box needed if your TV already runs one.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV boxes pull a compatible player straight from the Play Store — a few taps and it is running.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'The stick sitting behind most American TVs already — grab a compatible player from the Appstore or sideload one you trust.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Any Android handset or tablet runs this the same way it runs any other streaming app, once a compatible player is installed.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A compatible player from the App Store is all an iPhone or iPad needs to get going.',
  },
  {
    id: 'windows',
    name: 'Windows',
    summary: 'Desktop player apps built for Windows 10 and 11 handle this fine on a PC or laptop.',
  },
  {
    id: 'macos',
    name: 'macOS',
    summary: 'A desktop-compatible player app is the only extra piece a current-ish Mac needs.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is America IPTV?',
    a: 'America IPTV is a streaming subscription centered on American live TV and on-demand titles, sent over the internet rather than through cable or satellite hardware. Pick a compatible player app for whatever device you already have, and resolution scales up to 4K depending on your plan, that device, and what the original content actually supports.',
  },
  {
    q: 'Does America IPTV cover local US channels and sports?',
    a: 'Yes. The channel lineup spans major US networks, 24/7 news, and sports coverage alongside international and entertainment channels, all included in every plan — there is no separate "sports package" upsell.',
  },
  {
    q: 'What devices does it work on?',
    a: 'Any Smart TV, Android TV or Google TV box, Amazon Fire TV or Firestick, Android phone or tablet, iPhone, iPad, Windows PC, or Mac — each one just needs a compatible player app installed. Device-by-device instructions are on the Setup Guide.',
  },
  {
    q: 'How do I get started?',
    a: 'Pick a plan, or the 24-hour trial if you would rather test first. Activation details land in your inbox shortly after, and a compatible player app is all you need to load them into and start watching.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of full access, so you can test channel availability, streaming quality, and device compatibility on your own internet connection before committing to a longer plan.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99). Every plan includes the same full channel and VOD catalog — longer terms just lower the effective monthly price.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the contact form for setup help, billing questions, or anything trial or subscription related. Every message reaches an actual person, not an automated queue.',
  },
];
