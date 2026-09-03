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
    summary: 'Samsung, LG, and other Smart TVs that support a compatible IPTV player app or M3U playlist import.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Any Android TV or Google TV device with access to a compatible player app from the Play Store.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Amazon Fire TV and Fire TV Stick — the most common streaming box in American living rooms — using a sideloaded or Appstore-available compatible player.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Any Android smartphone or tablet, using a compatible IPTV player app.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'iOS and iPadOS devices, using a compatible player app from the App Store.',
  },
  {
    id: 'windows',
    name: 'Windows',
    summary: 'Any Windows 10/11 PC or laptop, using a desktop-compatible player application.',
  },
  {
    id: 'macos',
    name: 'macOS',
    summary: 'Any Mac running a recent version of macOS, using a desktop-compatible player application.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is America IPTV?',
    a: 'America IPTV is a subscription streaming service built around American live TV and on-demand content, delivered over the internet instead of cable or satellite. You get a compatible player app on the device of your choice, with live channels and on-demand titles in up to 4K where your plan, device, and source content allow it.',
  },
  {
    q: 'Does America IPTV cover local US channels and sports?',
    a: 'Yes. The channel lineup spans major US networks, 24/7 news, and sports coverage alongside international and entertainment channels, all included in every plan — there is no separate "sports package" upsell.',
  },
  {
    q: 'What devices does it work on?',
    a: 'Smart TVs, Android TV and Google TV, Amazon Fire TV and Firestick (the most common streaming box in US households), Android phones and tablets, iPhone and iPad, Windows, and macOS — using a compatible IPTV player app on each platform. The Setup Guide walks through each device.',
  },
  {
    q: 'How do I get started?',
    a: 'Choose a plan or start the 24-hour trial, receive your activation details, install a compatible player app, and enter your credentials or playlist URL. Most people are watching within a few minutes of receiving their details.',
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
