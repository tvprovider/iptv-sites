import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const smartTvSteps = [
  { title: 'Open your TV\'s built-in app store', text: 'Samsung and LG Smart TVs both ship with one accessible from the home screen.' },
  { title: 'Install a compatible IPTV player', text: 'Look for one that lists support for M3U playlists or Xtream Codes-style logins.' },
  { title: 'Open the app and find "add playlist" or "login"', text: 'Enter the M3U URL, or the username/password/server details, from your activation email.' },
  { title: 'Save and open a channel', text: 'The lineup populates automatically once the login is saved.' },
];

const setupFaqs = [
  { q: 'Do I need one specific player app?', a: 'No — any app that lists M3U or Xtream Codes-style login support works. Several free options exist for every device below.' },
  { q: 'What is EPG and do I need to set it up manually?', a: 'EPG is the on-screen program guide. Most apps build it automatically from your login. If yours doesn\'t, check its settings for a manual "EPG URL" field.' },
  { q: 'My app is asking for a "portal" login instead of an M3U link — is that normal?', a: 'Yes, that just means it expects an Xtream Codes-style login (username, password, server). Use whichever format matches what your activation email sent.' },
  { q: 'Can two people in the house watch on separate devices at once?', a: 'Each plan is scoped to one active device. Two devices streaming on the same login simultaneously tends to cause playback issues on both.' },
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
  title: 'IPTV Hot Setup Guide — Every Device',
  description: 'How to set up IPTV Hot on Smart TV, Android TV, Fire TV, mobile, Windows, and macOS — device-by-device login steps and troubleshooting.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to set up IPTV Hot on a Smart TV', description: 'Install a compatible player app and enter your login to start watching on a Smart TV.', steps: smartTvSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'From login details to a working stream',
  lead: 'One consistent process across every supported device — install a player app, enter your login, start watching.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you start', title: 'What your login actually looks like', left: true })}
  ${answerBox('<p>After ordering or starting the trial, an email arrives with either a single M3U playlist link, or a username/password/server trio (Xtream Codes-style). Either format unlocks the same catalog — which one you get depends on how activation was set up, and both are covered below.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Two formats, same catalog', title: 'M3U vs. Xtream Codes-style login', left: true })}
  ${comparisonTable(
    ['', 'M3U playlist', 'Xtream Codes-style login'],
    [
      ['What you get', 'A single URL', 'Username, password, and server address'],
      ['How a player reads it', 'Loads a static playlist file', 'Connects and pulls the list live'],
      ['Program guide', 'Depends on the app', 'Usually pulled automatically'],
      ['Setup speed', 'Fastest, one field', 'A few extra fields, same result'],
    ]
  )}
  <p style="margin-top:20px;">Neither format is "better" — they just fit different player apps. The steps below cover the general pattern; whichever login you received slots into the same "add playlist" or "login" screen.</p>`,
})}

${section({
  id: 'devices',
  html: `
  ${sectionHead({ eyebrow: 'Jump to your device', title: 'Supported devices' })}
  ${deviceGrid(devices)}`,
})}

${deviceSection({
  id: 'smart-tv',
  eyebrow: 'Smart TV',
  title: 'Smart TV setup',
  steps: smartTvSteps,
  note: 'If your TV doesn\'t support third-party app installs, pairing a Fire TV Stick or Android TV box is the simpler workaround.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Open the Play Store', text: 'On any Android TV or Google TV box, regardless of manufacturer.' },
    { title: 'Install a compatible player app', text: 'Confirm it lists M3U or Xtream Codes support.' },
    { title: 'Enter your login', text: 'Whichever format your activation email provided.' },
    { title: 'Open a channel to confirm playback', text: 'Video and audio both loading means it\'s set up correctly.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Search the Amazon Appstore first', text: 'Look for a player app that supports your login format.' },
    { title: 'Sideload as a fallback', text: 'A file-manager app can install a trusted APK directly if nothing suitable is listed.' },
    { title: 'Add your login details', text: 'M3U URL or username/password/server, from your activation email.' },
    { title: 'Confirm a channel streams cleanly', text: 'That\'s the full check.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Install a compatible app', text: 'Play Store for Android, App Store for iPhone and iPad.' },
    { title: 'Enter your login', text: 'The app\'s "add playlist" or "login" screen is where this goes.' },
    { title: 'Adjust playback settings if you want', text: 'Many mobile apps let you set preferred resolution or buffering behavior.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Install a desktop player that reads M3U or Xtream Codes logins', text: 'Several free options exist on both platforms.' },
    { title: 'Load your login', text: 'Through the app\'s network-stream option, or its dedicated login screen.' },
    { title: 'Confirm playback before closing setup', text: 'One quick check saves a return trip to settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Setting up the program guide', left: true })}
  <p>Most player apps build the on-screen guide directly from your login without any extra step. If yours shows a blank guide, check its settings for a manual "EPG URL" field and enter the guide link from your activation email, if one was included.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'For smoother playback', title: 'Two habits worth adopting', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Ethernet over Wi-Fi where possible</h3><p>A wired connection holds up noticeably better for consistent streaming, especially on TV boxes.</p></div>
    <div class="card"><h3>Close other apps before starting a stream</h3><p>Fewer apps competing for bandwidth and memory means fewer stutters.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When things go wrong', title: 'Common problems', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Buffering or freezing</h3><p>Usually the connection — try wired Ethernet or move closer to the router.</p></div>
    <div class="card"><h3>"Invalid login" on first setup</h3><p>Recheck for a stray space in the username, password, or server field.</p></div>
    <div class="card"><h3>App disappears or won\'t launch</h3><p>Reinstall it — occasionally an app update breaks compatibility temporarily.</p></div>
    <div class="card"><h3>No picture, audio only</h3><p>Usually a decoding issue specific to that app — try a different compatible player.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Step by step', title: 'Troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Confirm the internet connection itself works', text: 'Open a different streaming app on the same device to isolate the issue.' },
    { title: 'Remove and re-enter your login', text: 'A typo is the most common cause of playback failures.' },
    { title: 'Restart the app, then the device', text: 'Clears a surprising number of glitches on its own.' },
    { title: 'Try a different compatible player app', text: 'If one app misbehaves, a different one often resolves it.' },
    { title: 'Contact support', text: 'Include your device type and exactly what\'s happening.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Setup FAQ', left: true })}
  ${faqAccordion(setupFaqs)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Still stuck?', title: 'Get setup support', left: true })}
  <p>If none of this resolves it, contact support with your device type and exactly what's happening — that's enough detail to actually help.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'See the current lineup running on your own device', lead: 'Start a 24-hour trial and follow this guide end to end.' })}
`,
};
