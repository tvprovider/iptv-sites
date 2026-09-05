// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: 'IPTV Poland',
  domain: 'iptvpoland.co',
  url: 'https://iptvpoland.co',
  tagline: 'Polish channels and Ekstraklasa, wherever you actually live',
  supportEmail: 'support@iptvpoland.co',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#9f1239',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month to check the Polish lineup against what you actually watch.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'Covers most of an Ekstraklasa half-season without renewing monthly.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'Where most people land once the trial month has already proven itself.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'A full season calendar covered at the lowest monthly rate.', perMonth: 6.67 },
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
  'United States', 'Poland', 'United Kingdom', 'Germany', 'Ireland', 'Netherlands',
  'Canada', 'Australia', 'New Zealand', 'France', 'Italy', 'Spain', 'Sweden',
  'Norway', 'Denmark', 'Belgium', 'Switzerland', 'Austria', 'Czech Republic',
  'Slovakia', 'Hungary', 'Lithuania', 'Ukraine', 'Turkey', 'Israel',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar',
  'South Africa', 'India', 'Philippines',
  'China', 'Japan', 'South Korea', 'Brazil', 'Mexico',
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
    summary: 'A Samsung or LG set reaches the full Ekstraklasa and Polish lineup the moment a compatible player app goes on from its own built-in store.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Whether it\'s a dedicated Android TV box or a Google TV unit, the Play Store carries a handful of players built for exactly this kind of login.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Amazon\'s stick reaches the same channels either through its own Appstore or a sideloaded player, whichever route ends up simpler on your setup.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'A match, a news bulletin, or an episode — none of it needs the living room TV when a phone or tablet already has the same login loaded.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A single App Store download serves both iPhone and iPad, useful for anyone who wants Polish TV on hand without touching the main screen.',
  },
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'An App Store listing or a sideload gets a compatible player running here too, reaching the exact same catalog as anywhere else on the list.',
  },
  {
    id: 'computer',
    name: 'Windows & macOS',
    summary: 'Neither operating system needs anything beyond a desktop player pointed at the login details — no set-top box, no extra hardware purchase.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'What is IPTV Poland?',
    a: 'A subscription that puts Polish television — Ekstraklasa, Polish news and entertainment channels, and Polish-language on-demand titles — on whatever screen you already own, streamed over your own internet connection rather than a satellite dish or cable box. The same English-language and international catalog rides alongside it on every plan, with resolution scaling up to 4K where your device and the source allow it.',
  },
  {
    q: 'Is Ekstraklasa actually part of this, or is it just mentioned?',
    a: 'It\'s in the standard lineup every plan reaches — no separate sports tier, no extra charge to unlock matches.',
  },
  {
    q: 'I don\'t live in Poland anymore — will this still work for me?',
    a: 'That\'s exactly who this is built for. The lineup runs over your internet connection, not a Polish satellite signal, so it plays the same in London, Chicago, or Berlin as it would in Warsaw — no VPN, no workaround, just an ordinary internet connection.',
  },
  {
    q: 'Which devices can actually run this?',
    a: 'Smart TVs from Samsung and LG, Android TV and Google TV boxes, Fire TV and Firestick, Android and iOS phones and tablets, Apple TV, and both Windows and Mac computers. Each one just needs a compatible player app — the Setup Guide walks through every device individually.',
  },
  {
    q: 'What exactly do I get for the trial dollar?',
    a: 'A full 24 hours on the real service — the identical Polish and international lineup a paying subscriber gets, not a stripped-down preview. Long enough to check a match, a channel, or the whole setup before spending more.',
  },
  {
    q: 'How much does a subscription actually cost?',
    a: 'In US dollars: $14.99 for one month, $34.99 for three, $54.99 for six, $79.99 for a full year. The catalog is identical across all four — a longer term only changes what you pay per month, never what you can watch.',
  },
  {
    q: 'Something\'s not working — who do I tell?',
    a: 'The Contact page reaches a real inbox, not a bot — setup problems, billing questions, and trial issues all land there and get a real answer.',
  },
];
