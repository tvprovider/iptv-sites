import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const setupFaqs = [
  { q: 'Do I need a specific app?', a: 'You need any IPTV player app that supports M3U playlists or Xtream Codes-style login (username, password, and server URL). Several free and paid options exist on every platform we support.' },
  { q: 'What is EPG and do I need to configure it?', a: 'EPG (Electronic Program Guide) shows a channel schedule inside your player app. Most compatible apps can load an EPG automatically from your provided playlist or URL — if yours doesn’t, check the app’s settings for a manual EPG URL field.' },
  { q: 'Why is the app asking for a "portal" or "M3U" URL?', a: 'Different player apps support different login styles. If you were given an M3U URL, look for an "M3U URL" or "playlist" option in your app; if you were given a username/password/server, look for an "Xtream Codes" or "portal login" option.' },
  { q: 'Can I use the same login on more than one device at once?', a: 'Each plan is intended for use on one device at a time. Using the same credentials simultaneously on multiple devices may cause playback issues.' },
];

function deviceSection({ id, eyebrow, title, steps, note }) {
  return section({
    id,
    html: `
    ${sectionHead({ eyebrow, title, left: true })}
    ${stepsList(steps)}
    ${note ? `<p class="small muted" style="margin-top:16px;">${note}</p>` : ''}`,
  });
}

export default {
  slug: 'setup-guide',
  title: 'IPTV Setup Guide — Smart TV, Fire TV, Android, iOS & More | 4K Streaming',
  description: 'Step-by-step IPTV setup for Smart TV, Android TV, Fire TV, mobile, Windows, and macOS, plus troubleshooting and EPG configuration.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]), faqSchema(setupFaqs)],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Get 4K Streaming IPTV set up on any device',
  lead: 'Clear, device-specific steps for getting connected — from Smart TVs to phones and computers.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you begin', title: 'Setup introduction', left: true })}
  ${answerBox('<p>Setting up IPTV means installing a compatible player app on your device and entering the login details (either an M3U playlist URL, or a username, password, and server URL) that you receive after subscribing or starting a trial. The exact app differs by device, but the underlying steps are consistent — this guide walks through each supported device individually.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you need', title: 'Requirements', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Your activation details</h3><p>The M3U URL, or username/password/server details, sent to your email after signup.</p></div>
    <div class="card"><h3>A stable connection</h3><p>At least 25 Mbps sustained download speed is recommended for smooth 4K playback.</p></div>
    <div class="card"><h3>A compatible player app</h3><p>Available free or paid on every platform we support — see the device sections below.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The concept', title: 'How IPTV setup works', left: true })}
  <p>Every device follows the same basic pattern: install a player app that supports M3U or Xtream Codes-style logins, open its "add playlist" or "login" screen, enter the details you were sent, and save. The app then downloads the channel list and you can start watching immediately.</p>`,
})}

${section({
  id: 'devices',
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Jump to your device', title: 'Supported devices' })}
  ${deviceGrid(devices)}`,
})}

${deviceSection({
  id: 'smart-tv',
  eyebrow: 'Smart TV',
  title: 'Smart TV setup',
  steps: [
    { title: 'Open your TV\'s app store', text: 'Go to the built-in app store on your Samsung, LG, or other Smart TV.' },
    { title: 'Install a compatible IPTV player', text: 'Search for and install a player app that supports M3U or Xtream Codes-style logins.' },
    { title: 'Enter your activation details', text: 'Open the app, choose "add playlist" or "login," and enter your M3U URL or username/password/server details.' },
    { title: 'Save and start watching', text: 'Save the playlist. Your channel list will load automatically.' },
  ],
  note: 'If your TV doesn’t support third-party app installs, consider pairing a Fire TV Stick or Android TV box instead.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Open the Play Store', text: 'On your Android TV or Google TV device, open the Play Store app.' },
    { title: 'Install a compatible player app', text: 'Search for and install a player app that supports M3U or Xtream Codes logins.' },
    { title: 'Log in with your details', text: 'Enter the activation details sent to your email.' },
    { title: 'Confirm playback', text: 'Open a channel to confirm video and audio are working correctly.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Search the Amazon Appstore', text: 'From your Fire TV home screen, search for a compatible IPTV player app.' },
    { title: 'Install the app', text: 'If it isn’t available in the Appstore, you can sideload a compatible APK using a file manager app — only from sources you trust.' },
    { title: 'Enter your login details', text: 'Open the app and enter your M3U URL or username/password/server details.' },
    { title: 'Start streaming', text: 'Browse to a live channel to confirm everything is working.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Install a compatible player app', text: 'Download a compatible IPTV player from the Google Play Store or Apple App Store.' },
    { title: 'Add your playlist', text: 'Open the app and enter your M3U URL or username/password/server details.' },
    { title: 'Adjust playback settings if needed', text: 'Some apps let you set preferred resolution and buffering behavior in their settings menu.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Install a compatible desktop player', text: 'Several free media players support M3U playlists directly on Windows and macOS.' },
    { title: 'Open your playlist URL', text: 'Use the "open network stream" or equivalent option and paste your M3U URL, or use a dedicated IPTV player app that supports Xtream Codes login.' },
    { title: 'Confirm playback', text: 'Select a channel to confirm streaming works before closing the setup.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Getting in', title: 'Login & activation details explained', left: true })}
  ${comparisonTable(
    ['Login style', 'What you\'ll be given', 'Where to enter it'],
    [
      ['M3U playlist', 'A single playlist URL', 'The "M3U URL" or "add playlist" field in your player app'],
      ['Xtream Codes-style', 'Username, password, and server URL', 'The "Xtream Codes" or "portal login" screen in your player app'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Playlist & EPG configuration', left: true })}
  <p>If your player app didn’t load a channel guide automatically, look for a manual "EPG URL" field in its settings and enter the guide URL included with your activation details, if one was provided. Not every plan includes a separate EPG URL — many player apps build the guide directly from the playlist itself.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Best results', title: 'Streaming optimization tips', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Use a wired connection where possible</h3><p>Ethernet is more stable than Wi-Fi, especially for 4K content on Smart TVs and streaming boxes.</p></div>
    <div class="card"><h3>Close background apps</h3><p>Free up device memory and bandwidth by closing other streaming or download apps while watching.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'When things go wrong', title: 'Common problems', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Buffering or freezing</h3><p>Usually caused by an unstable or slow internet connection. Try a wired connection or move closer to your Wi-Fi router.</p></div>
    <div class="card"><h3>"Invalid login" errors</h3><p>Double-check you copied your username, password, and server URL exactly, with no extra spaces.</p></div>
    <div class="card"><h3>No picture, audio only</h3><p>Often a device decoding issue — try a different compatible player app or update your current app.</p></div>
    <div class="card"><h3>Channel list won’t load</h3><p>Confirm your internet connection is active, then remove and re-add your playlist in the app.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Step by step', title: 'Troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Check your internet connection', text: 'Confirm other apps and websites load normally on the same network.' },
    { title: 'Re-enter your activation details', text: 'Remove and re-add your playlist or login in case of a typo.' },
    { title: 'Restart the app and device', text: 'Many playback issues clear after a full restart.' },
    { title: 'Try a different compatible player app', text: 'If one app misbehaves, a different compatible app may resolve device-specific bugs.' },
    { title: 'Contact support', text: 'If the issue persists, reach out through our Contact page with your device type and a description of the problem.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Setup FAQ', left: true })}
  ${faqAccordion(setupFaqs)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Still stuck?', title: 'Get setup support', left: true })}
  <p>If these steps don’t resolve your issue, contact our support team with your device type and a description of what’s happening — we’ll help you get it working.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Ready to try it yourself?', lead: 'Start a 24-hour trial and follow this guide to get set up in minutes.' })}
`,
};
