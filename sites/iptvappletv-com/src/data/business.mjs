// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.
//
// Independent, third-party service. Not affiliated with, endorsed by, or
// sponsored by Apple Inc. "Apple TV" is a trademark of Apple Inc., used
// here only to describe device compatibility.

export const site = {
  brand: 'Apple TV IPTV',
  domain: 'iptvappletv.com',
  url: 'https://iptvappletv.com',
  tagline: 'IPTV built to run properly on Apple TV',
  supportEmail: 'support@iptvappletv.com',
  leadCaptureDestination: 'premiumtv1service@gmail.com', // internal routing only, never shown publicly
  themeColor: '#0d9488',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'One month, no commitment — enough to know if it fits your setup.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A lower monthly rate once you know Apple TV is handling it well.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'The plan most Apple TV households settle on.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'The lowest effective monthly price for the long haul.', perMonth: 6.67 },
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
  'Apple TV',
  'iPhone or iPad',
  'Smart TV',
  'Android TV',
  'Fire TV / Firestick',
  'Android Phone or Tablet',
  'Windows',
  'macOS',
];

// Apple TV leads the list on purpose — it is the device this entire site
// is built around. The rest are genuinely supported too, just secondary.
export const devices = [
  {
    id: 'apple-tv',
    name: 'Apple TV',
    summary: 'The 4th-generation Apple TV HD and every Apple TV 4K model run a compatible player app from the App Store, or a sideloaded one if you prefer that route.',
  },
  {
    id: 'ios',
    name: 'iPhone & iPad',
    summary: 'A compatible player from the App Store is all an iPhone or iPad needs — useful as a backup screen or for casting to the Apple TV.',
  },
  {
    id: 'smart-tv',
    name: 'Smart TV',
    summary: 'Samsung and LG Smart TVs work too, through their own compatible player apps, if the Apple TV is not always hooked up to that particular screen.',
  },
  {
    id: 'android-tv',
    name: 'Android TV',
    summary: 'Google TV and Android TV boxes are fully supported as an alternative or a second-room setup.',
  },
  {
    id: 'fire-tv',
    name: 'Fire TV & Firestick',
    summary: 'Works on Amazon Fire TV and Firestick as well, for anyone running more than one type of streaming box.',
  },
  {
    id: 'android',
    name: 'Android Phone & Tablet',
    summary: 'Any Android phone or tablet handles this through a compatible player app, same as on iOS.',
  },
  {
    id: 'windows',
    name: 'Windows',
    summary: 'A desktop player app covers Windows 10 and 11 machines for anyone who wants it on a computer too.',
  },
  {
    id: 'macos',
    name: 'macOS',
    summary: 'macOS runs the same kind of desktop player, useful for a quick check without touching the Apple TV at all.',
  },
];

// The 7 required primary FAQ questions, plus the answer content used across
// the homepage preview and the full FAQ page.
export const coreFaqs = [
  {
    q: 'Is there an official IPTV app in the Apple TV App Store?',
    a: 'Apple periodically removes and re-adds generic IPTV player apps from the App Store, so availability shifts. When a compatible player is not listed, sideloading one through Xcode or a third-party installer is the common workaround — the Setup Guide covers both routes.',
  },
  {
    q: 'Does this actually run well on Apple TV hardware?',
    a: 'Yes — both the Apple TV HD and every Apple TV 4K generation have enough processing power to decode compatible streams smoothly, including up to 4K where the source content and your connection support it.',
  },
  {
    q: 'What is Apple TV IPTV?',
    a: 'Apple TV IPTV is a streaming subscription built with Apple TV as the primary target device — live channels and on-demand content delivered over your internet connection, set up through a compatible player app on your Apple TV, in up to 4K where your plan, device, and the source allow it.',
  },
  {
    q: 'Do I need to jailbreak my Apple TV?',
    a: 'No. Nothing here requires jailbreaking. A compatible player app installed normally through the App Store, or sideloaded through Apple\'s own developer tools, is all that is needed.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of full access, enough time to confirm the player app you picked actually runs well on your specific Apple TV model and internet connection.',
  },
  {
    q: 'What do the subscription plans cost?',
    a: 'Four plan lengths: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99) in US dollars. Every plan includes the same full channel and VOD catalog — longer terms just lower the effective monthly price.',
  },
  {
    q: 'What if I get stuck installing a player app on Apple TV?',
    a: 'Contact support with your Apple TV model and generation, and what step you are stuck on — Apple TV setup has a few extra steps compared to other devices, and that is specifically what the support inbox is there to help with.',
  },
];
