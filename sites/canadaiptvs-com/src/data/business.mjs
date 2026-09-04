// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'Canada IPTV',
  domain: 'canadaiptvs.com',
  url: 'https://canadaiptvs.com',
  tagline: 'Canadian live TV and sports, streamed in 4K',
  supportEmail: 'support@canadaiptvs.com',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#7c3aed',
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
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A full season of hockey covered, at a lower monthly rate.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most Canadian households land on.', perMonth: 9.17 },
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
  'Canada', 'United States', 'United Kingdom', 'Australia', 'Ireland', 'New Zealand',
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
    summary: 'A Samsung or LG Smart TV handles this through a compatible player app, without pairing an external box.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV devices load a compatible player straight off the Play Store in under a minute.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Amazon’s Fire TV Stick works too, whether the player comes from the Appstore or gets sideloaded from a trusted source.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Any Android phone or tablet manages this exactly like any other streaming app, once a compatible player is on it.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'One compatible player from the App Store covers both iPhone and iPad.',
  },
  {
    id: 'windows',
    name: 'Windows',
    summary: 'A Windows 10 or 11 machine runs this through a standard desktop player app.',
  },
  {
    id: 'macos',
    name: 'macOS',
    summary: 'macOS needs nothing beyond a compatible desktop player to get streaming.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is Canada IPTV?',
    a: 'Canada IPTV sends Canadian live TV, news, and sports over your internet connection instead of through a satellite dish or cable box. Install a compatible player app on whichever device you already own, and you can stream up to 4K when your plan, that device, and the original content all line up to support it.',
  },
  {
    q: 'Does it include Canadian sports coverage, like hockey?',
    a: 'Yes. The channel lineup includes sports coverage alongside Canadian news and entertainment channels, all included in every plan — there is no separate sports add-on package.',
  },
  {
    q: 'What devices does it work on?',
    a: 'Smart TV, Android TV, Google TV, Fire TV and Firestick, Android and iOS mobile, Windows, and Mac are all covered, provided a compatible player app is installed first. The Setup Guide has the specifics per device.',
  },
  {
    q: 'How do I get started?',
    a: 'Start with either a plan or the trial — activation details follow by email either way. Drop those into a compatible player app on your device and you are set, usually within the hour.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of full access, so you can test channel availability, streaming quality, and device compatibility on your own internet connection before committing to a longer plan.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99), all in US dollars. Every plan includes the same full channel and VOD catalog — longer terms just lower the effective monthly price.',
  },
  {
    q: 'How do I reach support?',
    a: 'Use the contact form for setup help, billing questions, or anything trial or subscription related. Every message reaches an actual person, not an automated queue.',
  },
];
