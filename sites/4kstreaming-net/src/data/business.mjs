// Single source of truth for brand facts, pricing, nav, devices, FAQ.
// Only genuinely-offered facts belong here — nothing fabricated.

export const site = {
  brand: '4K Streaming',
  domain: '4kstreaming.net',
  url: 'https://4kstreaming.net',
  tagline: 'Premium 4K IPTV streaming, done right',
  supportEmail: 'support@4kstreaming.net',
  leadCaptureDestination: 'contacts.easymoney@gmail.com', // internal routing only, never shown publicly
  themeColor: '#533afd',
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
  { id: 'm1', label: '1 Month', price: 14.99, period: 'month', highlight: false, blurb: 'Try a full month with no long-term commitment.' },
  { id: 'm3', label: '3 Months', price: 34.99, period: '3 months', highlight: false, blurb: 'A balance of flexibility and savings.', perMonth: 11.66 },
  { id: 'm6', label: '6 Months', price: 54.99, period: '6 months', highlight: true, blurb: 'Our most popular plan for regular viewers.', perMonth: 9.17 },
  { id: 'm12', label: '12 Months', price: 79.99, period: '12 months', highlight: false, blurb: 'The lowest per-month cost for committed viewers.', perMonth: 6.67 },
];

export const trial = {
  price: 1.00,
  duration: '24 hours',
  label: '24-Hour Trial',
};

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
    summary: 'Amazon Fire TV and Fire TV Stick devices, using a sideloaded or Appstore-available compatible player.',
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
    q: 'What is 4K Streaming IPTV?',
    a: '4K Streaming IPTV is a subscription-based streaming service delivered over the internet rather than through satellite or cable infrastructure. It gives you access to live channels and on-demand content through a compatible player app on the device of your choice, with support for up to 4K resolution where your plan, device, and source content allow it.',
  },
  {
    q: 'How does IPTV work?',
    a: 'IPTV (Internet Protocol Television) delivers video as data over your existing internet connection instead of a dedicated broadcast signal. After you subscribe, you receive activation details that you enter into a compatible player app, which then streams channels and content directly to your device.',
  },
  {
    q: 'What devices are supported?',
    a: 'We support Smart TVs, Android TV and Google TV, Amazon Fire TV and Firestick, Android phones and tablets, iPhone and iPad, Windows, and macOS — using a compatible IPTV player app on each platform. See our Setup Guide for step-by-step instructions per device.',
  },
  {
    q: 'How do I set up 4K Streaming IPTV?',
    a: 'Choose a plan or start the 24-hour trial, receive your activation details, install a compatible player app on your device, and enter your credentials or playlist URL. Our Setup Guide walks through each supported device in detail.',
  },
  {
    q: 'What does the 24-hour trial include?',
    a: 'The 24-hour trial costs $1.00 and gives you 24 hours of access so you can test streaming quality, channel availability, and compatibility with your own device and internet connection before committing to a subscription plan.',
  },
  {
    q: 'What subscription plans are available?',
    a: 'We offer four plans: 1 Month ($14.99), 3 Months ($34.99), 6 Months ($54.99), and 12 Months ($79.99). Longer plans lower your effective monthly cost. Full details are on our Pricing page.',
  },
  {
    q: 'How can I contact support?',
    a: 'Use the contact form on our Contact page for setup help, billing questions, or trial and subscription support. We aim to respond promptly to every inquiry.',
  },
];
