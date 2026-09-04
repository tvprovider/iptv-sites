import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const smartTvSteps = [
  { title: 'Open the app store on your TV', text: 'Samsung and LG Smart TVs each ship with their own built-in store — find it from the home screen.' },
  { title: 'Search for and install a player app', text: 'Pick one that lists support for M3U playlists or Xtream Codes-style logins.' },
  { title: 'Load your activation details', text: 'Inside the app, find "add playlist" or "login" and enter the M3U URL or username/password/server you were emailed.' },
  { title: 'Save it and open a channel', text: 'The full lineup populates automatically the moment the playlist saves.' },
];

const setupFaqs = [
  { q: 'Which app do I actually need?', a: 'Any player that lists M3U or Xtream Codes-style login support works — there are several free options on every platform we cover, so it is rarely a paid-app requirement.' },
  { q: 'Do I have to configure the program guide myself?', a: 'Usually not. Most player apps pull the schedule (EPG) straight from your playlist automatically. If yours shows a blank guide, look for a manual "EPG URL" field in its settings.' },
  { q: 'My app is asking for a "portal" URL instead of M3U — is that a problem?', a: 'No, that just means the app expects an Xtream Codes-style login (username, password, server) rather than a single playlist link. Use whichever format matches what you were sent.' },
  { q: 'Can two people in the house use the same login on separate devices?', a: 'Each plan is built for one active device at a time. Two devices streaming on the same credentials simultaneously tends to cause buffering on both.' },
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
  title: 'America IPTV Setup Guide — Every Device',
  description: 'How to set up America IPTV on Smart TV, Android TV, Fire TV, mobile, Windows, and macOS — plus EPG setup and a troubleshooting checklist.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to set up America IPTV on a Smart TV', description: 'Install a compatible player app and load your activation details to start watching on a Smart TV.', steps: smartTvSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'From sign-up to your first channel in minutes',
  lead: 'Pick your device below for the exact steps — no generic instructions that skip the part that actually trips people up.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you begin', title: 'What you actually get after signing up', left: true })}
  ${answerBox('<p>Activation details arrive by email — either a single M3U playlist link, or a username/password/server trio for an Xtream Codes-style login. Either one goes into whatever player app you choose; the app varies by device, but entering the details works the same way everywhere.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Have these ready', title: 'Three things before you start', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Your emailed login</h3><p>The M3U URL or username/password/server sent right after you subscribed or started the trial.</p></div>
    <div class="card"><h3>25 Mbps or better</h3><p>Sustained, not just a speed-test peak — that's what actually keeps 4K playback smooth.</p></div>
    <div class="card"><h3>Any app on the list below</h3><p>Free options exist for every device we support — no specific paid app is required.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The short version', title: 'Same pattern, every device', left: true })}
  <p>Install a player that reads M3U or Xtream Codes logins, open its "add playlist" screen, paste in what you were emailed, and save. The channel list populates on its own — no manual channel-by-channel entry, no separate installer.</p>`,
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
  steps: smartTvSteps,
  note: 'Older TV without an app store? Pairing a Fire TV Stick or a cheap Android TV box solves that in one purchase.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Launch the Play Store on the device', text: 'Any Android TV or Google TV box, from any manufacturer.' },
    { title: 'Grab a compatible player app', text: 'Same M3U/Xtream Codes support requirement as everywhere else.' },
    { title: 'Sign in with your emailed credentials', text: 'Whichever format your activation email used.' },
    { title: 'Open any channel to verify audio and video', text: 'Confirms the setup actually took before you settle in to watch.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Search the Amazon Appstore first', text: 'Find a listed player that supports M3U or Xtream Codes-style logins.' },
    { title: 'Sideload if nothing suitable is listed', text: 'A file-manager app can install a trusted APK directly — only from a source you trust.' },
    { title: 'Enter your playlist or login details', text: 'Same details from your activation email, entered into the app you installed.' },
    { title: 'Confirm a channel plays cleanly', text: 'Video and audio both loading is your green light.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Install a compatible app from your device\'s store', text: 'Google Play for Android, the App Store for iPhone and iPad.' },
    { title: 'Paste in your M3U URL or Xtream Codes login', text: 'The app\'s "add playlist" screen is usually where this goes.' },
    { title: 'Tune resolution and buffering to taste', text: 'Most mobile apps expose these under a settings gear icon.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Pick a desktop player that reads M3U directly', text: 'Several free ones exist for both Windows and macOS.' },
    { title: 'Open the network-stream option', text: 'Paste your M3U link there, or use a player built for Xtream Codes login if that\'s what you were given.' },
    { title: 'Play a channel before closing the setup window', text: 'One quick check saves a second trip back into settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Two login styles', title: 'M3U vs. Xtream Codes, plainly', left: true })}
  ${comparisonTable(
    ['Login style', 'What you were sent', 'Where it goes'],
    [
      ['M3U playlist', 'One playlist link', 'The "M3U URL" or "add playlist" field'],
      ['Xtream Codes-style', 'Username, password, server URL', 'The "Xtream Codes" or "portal login" screen'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Setting up the program guide', left: true })}
  <p>Most apps build the on-screen guide from your playlist without any extra step. If yours comes up blank, check the settings for a manual "EPG URL" field and paste in the guide link from your activation email, when one was included.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'For smoother playback', title: 'Two habits that actually help', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Wire it in if you can</h3><p>Ethernet beats Wi-Fi for 4K stability on Smart TVs and streaming boxes specifically.</p></div>
    <div class="card"><h3>Quit whatever else is running</h3><p>Background apps compete for the same bandwidth and memory your stream needs.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'When it misbehaves', title: 'The problems people actually hit', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Buffering that won't quit</h3><p>Almost always the connection — move closer to the router or switch to Ethernet.</p></div>
    <div class="card"><h3>"Invalid login" on first try</h3><p>Recheck for a stray space in the username, password, or server field — the most common cause.</p></div>
    <div class="card"><h3>Picture missing, sound fine</h3><p>Usually a decoding quirk in that specific app — try a different compatible player.</p></div>
    <div class="card"><h3>Channel list stuck empty</h3><p>Confirm you're online, then remove and re-add the playlist from scratch.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'In order', title: 'The troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Test the connection outside the app', text: 'If other sites and apps are slow too, the issue isn\'t IPTV-specific.' },
    { title: 'Delete and re-enter your login', text: 'A typo is the single most common cause of playback failures.' },
    { title: 'Restart both the app and the device', text: 'Clears a surprising share of one-off glitches on its own.' },
    { title: 'Swap in a different compatible app', text: 'If one app is misbehaving, a second app often just works.' },
    { title: 'Reach out to support', text: 'Include your device type and exactly what you are seeing.' },
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
  ${sectionHead({ eyebrow: 'Still not working?', title: 'Get real setup support', left: true })}
  <p>If none of the above resolves it, contact support with your device type and exactly what's happening — that's specific enough for us to actually help.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'See it running on your own setup', lead: 'Start the 24-hour trial and follow this guide start to finish.' })}
`,
};
