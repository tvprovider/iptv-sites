// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Prime',
  domain: 'iptvprime.org',
  url: 'https://iptvprime.org',
  tagline: 'The premium tier of IPTV — priority support, no waiting around',
  supportEmail: 'support@iptvprime.org',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#3730a3',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'A single billing cycle, no commitment past it.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'Skips two renewal cycles at a lower rate per month.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The length that shows up most in our own order data.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'One payment, a full year handled.', perMonth: 6.67 },
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
  'South Africa', 'Nigeria', 'India', 'Pakistan', 'Philippines',
  'China', 'Japan', 'South Korea', 'Indonesia', 'Malaysia', 'Singapore',
  'Mexico', 'Brazil', 'Argentina', 'Chile', 'Colombia',
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
    summary: 'Samsung and LG models both carry a compatible player in their own store, so the whole setup stays on the one remote you already use.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'The Play Store on an Android TV or Google TV box lists several players built for this kind of login — pick one and you\'re watching within minutes.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Works through Amazon\'s own Appstore first, with a sideloaded alternative on standby if nothing suitable is listed there at the time.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'A second screen that carries the exact same access as the television — nothing gets scaled back for a smaller display.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A single compatible app from the App Store handles both, so switching between the two never means switching logins.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'Reachable through the App Store or a sideloaded build, landing on the identical catalog every other device on this list gets.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'A desktop player on either system takes the login directly — no set-top box sitting between you and the screen.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What actually makes this "Prime" instead of a standard IPTV service?',
    a: 'The support experience mostly. Messages here get answered by someone who actually reads them, not a ticket queue that takes days — and the infrastructure behind the login is treated the same way regardless of which plan length you picked.',
  },
  {
    q: 'Is the channel selection curated, or is it the same generic list everywhere?',
    a: 'It\'s the full breadth — 40,000+ live channels and 180,000+ on-demand titles — but organized so the channels people actually watch aren\'t buried behind ones nobody opens twice.',
  },
  {
    q: 'Do the cheaper plans get a worse version of the service?',
    a: 'No. A one-month subscriber and a twelve-month subscriber land on the identical catalog and the identical support line — the only thing term length changes is the price per month.',
  },
  {
    q: 'What can I actually watch this on?',
    a: 'Whatever\'s already in the house, in most cases — Samsung or LG Smart TVs, an Android TV or Google TV box, Fire TV, a phone or tablet on either iOS or Android, Apple TV, or a Windows/Mac computer. Same login, same catalog, no matter which one you pick. Full steps for each live on the Setup Guide.',
  },
  {
    q: 'What does a dollar actually buy in the trial?',
    a: 'A full day on the real service, not a scaled-down demo — the same channels and titles a paying plan reaches, running for 24 hours so you can judge it on your own connection before spending more.',
  },
  {
    q: 'What\'s the actual price, all four lengths?',
    a: '$14.99 for a month, $34.99 for three, $54.99 for six, $79.99 for a full year, all in US dollars. Every length reaches the same catalog — the number only changes what you pay per month.',
  },
  {
    q: 'Something went wrong — how fast does support actually respond?',
    a: 'Messages go through the Contact page to a real inbox, worked in the order they arrive. A specific device and a specific symptom gets a specific answer faster than a vague description ever will.',
  },
];
