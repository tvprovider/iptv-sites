import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const appleTvAppStoreSteps = [
  { title: 'Open the App Store on your Apple TV', text: 'From the Apple TV home screen, using the Siri Remote or an old Apple TV Remote.' },
  { title: 'Search for a compatible IPTV player', text: 'Look for one that explicitly supports M3U playlists or Xtream Codes-style logins.' },
  { title: 'Install and open it', text: 'Standard tvOS install — no special permissions needed.' },
  { title: 'Enter your activation details', text: 'Find the "add playlist" or "login" screen and enter your M3U URL or username/password/server.' },
  { title: 'Save and confirm playback', text: 'The channel list loads automatically once saved — open a channel to confirm video and audio work.' },
];

const setupFaqs = [
  { q: 'My Apple TV shows no compatible IPTV apps in the App Store — now what?', a: 'That happens periodically as Apple reviews and removes generic player apps in waves. Sideloading through Xcode is the reliable fallback — it does not depend on what is currently listed.' },
  { q: 'Do I need a developer account to sideload an app?', a: 'A free Apple ID works for sideloading through Xcode. A paid developer account is not required for personal use, though the app needs reinstalling roughly every seven days without one.' },
  { q: 'What is EPG and do I need to set it up?', a: 'EPG (Electronic Program Guide) is the on-screen channel schedule inside your player app. Most apps load it automatically from your playlist — check the app settings for a manual EPG URL field if yours does not.' },
  { q: 'Can I use the same login on my Apple TV and my phone at the same time?', a: 'Each plan is intended for one device at a time. Running the same credentials simultaneously on two devices can cause playback problems on both.' },
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
  title: 'IPTV Apple TV Setup Guide — App Store & Sideload Methods',
  description: 'How to set up IPTV on Apple TV: the App Store method, the sideload method when no app is listed, plus setup for every other supported device.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to set up IPTV on Apple TV via the App Store', description: 'Install a compatible player app from the Apple TV App Store and enter your activation details to start watching.', steps: appleTvAppStoreSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Getting a player app running on Apple TV',
  lead: 'Two real paths, covered in full — the App Store when a compatible app is listed, and sideloading when it is not. Other supported devices are covered further down.',
  primaryCta: { label: 'Jump to Apple TV setup', href: '#apple-tv-appstore' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Apple TV setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you begin', title: 'What activation actually gives you', left: true })}
  ${answerBox('<p>After ordering or starting the trial, you receive either an M3U playlist URL, or a username, password, and server URL (Xtream Codes-style). Either one goes into a compatible player app — which app, and how you install it, depends on whether one is currently listed in the App Store.</p>')}`,
})}

${deviceSection({
  id: 'apple-tv-appstore',
  eyebrow: 'Apple TV — Method 1',
  title: 'If a compatible app is in the App Store',
  steps: appleTvAppStoreSteps,
  note: 'App Store availability shifts as Apple reviews listed apps. If nothing suitable is showing up right now, the sideload method below works regardless.',
})}

${deviceSection({
  id: 'apple-tv-sideload',
  eyebrow: 'Apple TV — Method 2',
  title: 'If nothing compatible is listed right now',
  steps: [
    { title: 'Get a Mac running Xcode', text: 'Xcode is free from the Mac App Store. This is the one point in the process that needs a Mac, even briefly.' },
    { title: 'Sign in with a free Apple ID', text: 'A paid developer account is not required for this — a standard Apple ID works.' },
    { title: 'Connect your Apple TV to Xcode over the network', text: 'Both the Mac and Apple TV need to be on the same Wi-Fi network, then pair them from Xcode\'s Devices window.' },
    { title: 'Build and install a compatible open-source player', text: 'Xcode compiles and pushes the app directly to your Apple TV.' },
    { title: 'Enter your activation details and confirm playback', text: 'Same as the App Store method from here — add your playlist or login and open a channel.' },
  ],
  note: 'Apps installed this way through a free Apple ID need reinstalling roughly every 7 days. It sounds like more friction than it is in practice — a few minutes, periodically.',
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Which one to pick', title: 'App Store vs. sideloading, honestly', left: true })}
  ${comparisonTable(
    ['', 'App Store method', 'Sideload method'],
    [
      ['Setup time', 'A few minutes', '15-20 minutes the first time'],
      ['Needs a Mac', 'No', 'Yes, briefly'],
      ['Ongoing maintenance', 'None — updates automatically', 'Reinstall roughly weekly on a free Apple ID'],
      ['Reliability', 'Depends on current App Store listings', 'Unaffected by what Apple has listed at any given moment'],
    ]
  )}`,
})}

${section({
  id: 'devices',
  html: `
  ${sectionHead({ eyebrow: 'Also supported', title: 'Setup for other devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;color:var(--text-subdued);">Steps for each are below — shorter, since none need the same App Store/sideload distinction Apple TV does.</p>`,
})}

${deviceSection({
  id: 'ios',
  eyebrow: 'iPhone & iPad',
  title: 'iPhone & iPad setup',
  steps: [
    { title: 'Install a compatible player from the App Store', text: 'iOS apps are not subject to the same review gaps as tvOS apps in this category.' },
    { title: 'Enter your activation details', text: 'M3U URL or username/password/server, same as any other device.' },
    { title: 'Use it standalone, or as a companion to Apple TV', text: 'Handy for checking a channel quickly without turning on the TV.' },
  ],
})}

${deviceSection({
  id: 'smart-tv',
  eyebrow: 'Smart TV',
  title: 'Smart TV setup',
  steps: [
    { title: 'Open your TV\'s built-in app store', text: 'Samsung, LG, and similar Smart TVs each have their own store.' },
    { title: 'Install a compatible player app', text: 'Look for M3U or Xtream Codes support explicitly.' },
    { title: 'Enter your login details and save', text: 'The channel list loads automatically once saved.' },
  ],
  note: 'If the TV does not support third-party app installs, pairing an Apple TV or Fire TV Stick to it is the simpler route.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV & Fire TV',
  title: 'Android TV, Google TV, Fire TV & Firestick setup',
  steps: [
    { title: 'Open the Play Store or Amazon Appstore', text: 'Whichever matches your box.' },
    { title: 'Install a compatible player app', text: 'Sideloading an APK is also an option on these platforms if nothing suitable is in the store.' },
    { title: 'Log in and confirm playback', text: 'Enter your details, then open a channel to check video and audio.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Windows & macOS',
  title: 'Computer setup',
  steps: [
    { title: 'Install a compatible desktop player', text: 'Several free options handle M3U playlists directly on both platforms.' },
    { title: 'Load your playlist URL or Xtream Codes login', text: 'Through the app\'s network stream or login option.' },
    { title: 'Confirm playback before closing setup', text: 'Select a channel to make sure it is actually working.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Getting in', title: 'M3U vs. Xtream Codes, explained', left: true })}
  ${comparisonTable(
    ['Login style', 'What you get', 'Where it goes'],
    [
      ['M3U playlist', 'A single URL', 'The "M3U URL" or "add playlist" field'],
      ['Xtream Codes-style', 'Username, password, server URL', 'The "Xtream Codes" or "portal login" screen'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Setting up the program guide (EPG)', left: true })}
  <p>Most player apps build the on-screen guide directly from your playlist automatically. If yours does not, look for a manual "EPG URL" field in the app settings and enter the guide URL from your activation details, if one was included.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Best results', title: 'Getting smooth playback on Apple TV specifically', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Ethernet over Wi-Fi where possible</h3><p>An Ethernet adapter for Apple TV is a genuine upgrade for 4K stability, not just a nice-to-have.</p></div>
    <div class="card"><h3>Close other tvOS apps first</h3><p>Fully quit background apps before starting a stream — tvOS keeps more running in the background than people expect.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'When things go wrong', title: 'Common Apple TV problems', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Buffering or freezing</h3><p>Usually the connection, not the app — try wired Ethernet or move closer to the router.</p></div>
    <div class="card"><h3>"Invalid login" on first setup</h3><p>Recheck the username, password, and server URL for extra spaces — easy to introduce when typing on the Siri Remote.</p></div>
    <div class="card"><h3>App disappeared after a week</h3><p>Expected behavior on a free Apple ID sideload — reinstall through Xcode and it is back.</p></div>
    <div class="card"><h3>No picture, audio only</h3><p>Usually a decoding issue — try a different compatible player app.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Step by step', title: 'Troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Confirm the internet connection itself works', text: 'Open a different streaming app on the same Apple TV to isolate the issue.' },
    { title: 'Remove and re-enter your activation details', text: 'A typo is the most common cause of login failures.' },
    { title: 'Restart the Apple TV', text: 'Settings > System > Restart clears a surprising number of playback glitches.' },
    { title: 'Try the other installation method', text: 'If the App Store app is misbehaving, sideloading a different player often resolves device-specific bugs.' },
    { title: 'Contact support', text: 'Include your Apple TV generation and exactly what step you are stuck on.' },
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
  <p>If none of this resolves it, contact support with your Apple TV generation, which method you tried, and exactly what is happening — that is specific enough to actually help.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Ready to see it running on your own Apple TV?', lead: 'Start a 24-hour trial and follow this guide end to end.' })}
`,
};
