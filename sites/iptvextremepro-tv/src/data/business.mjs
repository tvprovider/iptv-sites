// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Xtream Pro',
  domain: 'iptvextremepro.tv',
  url: 'https://iptvextremepro.tv',
  tagline: 'Xtream Codes-ready IPTV built for stability, not just a channel count',
  supportEmail: 'support@iptvextremepro.tv',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#ea580c',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One billing cycle to stress-test the servers yourself.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A season\'s worth of access once the first month held up.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'Where most Xtream Codes regulars land.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'The lowest effective monthly rate we offer.', perMonth: 6.67 },
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
    summary: 'Samsung and LG Smart TVs take an Xtream Codes-style login (or an M3U link, if that\'s what you\'d rather use) through any player app built for either format.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV boxes handle Xtream Codes logins natively in most Play Store player apps — no workaround needed.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Runs the same way on Amazon\'s hardware, whether the player comes from the Appstore or gets sideloaded from a source you trust.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Any Android device manages an Xtream Codes login the same way a streaming box does, once a compatible player is installed.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A player from the App Store that lists Xtream Codes or M3U support is all an iPhone or iPad needs.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'Supported too, through an App Store player or a sideloaded one — just not the device this particular site is built around.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'Desktop players on both platforms read Xtream Codes logins directly, no different from a mobile setup.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is IPTV Xtream Pro?',
    a: 'IPTV Xtream Pro is a streaming subscription built around the Xtream Codes login format — a username, password, and server URL entered into a compatible player app, rather than a single playlist link. It delivers the same live channels and on-demand catalog as any subscription here, over your existing internet connection.',
  },
  {
    q: 'What\'s actually different between an Xtream Codes login and an M3U link?',
    a: 'An M3U link is one URL that points to a static playlist. An Xtream Codes login is three separate pieces — username, password, and a server URL — that a compatible player uses to pull your channel list and program guide dynamically. Both work here; Xtream Codes is just the format this site is built to explain in depth.',
  },
  {
    q: 'How do you handle a server going down?',
    a: 'The underlying infrastructure runs on multiple access points rather than a single point of failure, and uptime is actively monitored. No provider — including this one — can honestly promise zero interruptions ever, but the setup is built to route around a single failed node rather than take the whole service down with it.',
  },
  {
    q: 'What devices does an Xtream Codes login work on?',
    a: 'Any Smart TV, Android TV or Google TV box, Fire TV or Firestick, Android phone or tablet, iPhone, iPad, Apple TV, Windows PC, or Mac — provided the player app you install explicitly lists Xtream Codes support. Setup steps for each are on the Setup Guide.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and includes a full Xtream Codes login active for 24 hours — enough time to test server response, channel switching speed, and stability on your own connection before paying for a longer term.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99) in US dollars. Every plan includes the identical channel and VOD catalog — longer terms just lower the effective monthly price.',
  },
  {
    q: 'My Xtream Codes login isn\'t connecting — who do I ask?',
    a: 'Contact support with your username (never your password) and the exact error your player app is showing. Xtream Codes connection issues are almost always a typo in the server URL field or a player app that needs the fields entered in a specific order — both fast to diagnose with the right details.',
  },
];
