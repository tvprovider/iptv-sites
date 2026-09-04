import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const smartTvSteps = [
  { title: 'Find your TV\'s app store', text: 'Built right into Samsung and LG Smart TVs — no separate box needed to reach it.' },
  { title: 'Install a player that supports your login type', text: 'Look for explicit mention of M3U playlists or Xtream Codes-style logins in the app description.' },
  { title: 'Type in what your activation email gave you', text: 'The "add playlist" or "login" screen inside the app is where the M3U URL or username/password/server goes.' },
  { title: 'Save, then pick a channel', text: 'The full guide populates on its own once the playlist is saved.' },
];

const setupFaqs = [
  { q: 'Is there one specific app I have to use?', a: 'No — any player app that mentions M3U or Xtream Codes-style login support will do, and free ones cover every device on this page.' },
  { q: 'Do I need to build the channel guide by hand?', a: 'Almost never. Player apps typically generate the schedule from your playlist automatically. A manual "EPG URL" option in the app\'s settings is the fallback if yours doesn\'t.' },
  { q: 'The app is asking for a "portal" login, not an M3U link — did something go wrong?', a: 'Nothing wrong — that\'s just the Xtream Codes-style format (username, password, server URL) instead of a single playlist link. Use whichever one matches your activation email.' },
  { q: 'Can my whole household stream on one login at the same time?', a: 'Each subscription is scoped to one active device. Running the same login on two devices at once tends to interrupt playback on both.' },
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
  title: 'Canada IPTV Setup Guide — Every Device',
  description: 'Set up Canada IPTV on Smart TV, Android TV, Fire TV, mobile, Windows, and macOS — device-by-device steps, EPG setup, and a fix-it checklist.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to set up Canada IPTV on a Smart TV', description: 'Install a compatible player app and load your activation details to start watching on a Smart TV.', steps: smartTvSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Set up once, watch on any of your devices',
  lead: 'Choose your device below — real steps for what you actually have, not a generic checklist that skips the part everyone gets stuck on.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you dive in', title: 'What activation actually hands you', left: true })}
  ${answerBox('<p>Right after subscribing or starting the trial, an email arrives with either an M3U playlist link, or an Xtream Codes-style trio of username, password, and server. That detail goes into a compatible player app — which app varies by device, but loading the login itself works the same way across all of them.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Line these up first', title: 'What you need on hand', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>The email with your login</h3><p>Sent the moment your subscription or trial goes active.</p></div>
    <div class="card"><h3>A connection that holds 25 Mbps</h3><p>Sustained matters more than a one-time speed-test number for stable 4K.</p></div>
    <div class="card"><h3>Any app from the sections below</h3><p>No single paid app is required — free compatible options exist for every device here.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The pattern', title: 'One process, repeated across devices', left: true })}
  <p>Every setup follows the same shape: install an app built to read M3U or Xtream Codes logins, find its "add playlist" screen, drop in the details from your email, and save. Channels appear on their own — nothing gets typed in one at a time.</p>`,
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
  note: 'No app store on your TV? A Fire TV Stick or an Android TV box plugged into the HDMI port sidesteps that entirely.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Open the Play Store on the box', text: 'Applies the same way across Android TV and Google TV hardware.' },
    { title: 'Choose a compatible player', text: 'Confirm it lists M3U or Xtream Codes-style login support first.' },
    { title: 'Log in with your emailed details', text: 'Type in exactly what the activation email provided.' },
    { title: 'Play something to double-check', text: 'A working channel confirms both video and audio are behaving.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Check the Amazon Appstore', text: 'Search there first for a player supporting your login type.' },
    { title: 'Sideload as a backup option', text: 'A file-manager app installs an APK directly if nothing suitable turns up in the store — stick to sources you trust.' },
    { title: 'Add your playlist or login', text: 'Same M3U or Xtream Codes details from your activation email.' },
    { title: 'Confirm it streams properly', text: 'One working channel is all the confirmation you need.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Grab a compatible app for your phone', text: 'Play Store for Android, App Store for iPhone and iPad.' },
    { title: 'Enter your M3U or Xtream Codes login', text: 'Usually filed under an "add playlist" or "login" option in the app.' },
    { title: 'Adjust quality settings if you want', text: 'Many mobile apps let you cap resolution or buffering manually.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Install a desktop player that reads M3U', text: 'Free options cover both Windows and macOS.' },
    { title: 'Load your playlist or portal login', text: 'Through the app\'s network-stream option, or a player set up for Xtream Codes logins.' },
    { title: 'Test a channel before moving on', text: 'Confirms everything is wired up correctly before you settle in.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Two formats', title: 'M3U and Xtream Codes, side by side', left: true })}
  ${comparisonTable(
    ['Login style', 'What arrives by email', 'Where it goes in the app'],
    [
      ['M3U playlist', 'A single playlist link', 'The "M3U URL" or "add playlist" field'],
      ['Xtream Codes-style', 'Username, password, and server URL', 'The "Xtream Codes" or "portal login" screen'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Getting the program guide working', left: true })}
  <p>Most apps assemble the schedule directly from your playlist without any extra step. If the guide comes up empty, look in the app's settings for a manual "EPG URL" field and paste in the guide link, if your activation email included one.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'For steadier playback', title: 'Two small changes that help', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Ethernet over Wi-Fi</h3><p>A wired connection holds up noticeably better for 4K on Smart TVs and streaming boxes.</p></div>
    <div class="card"><h3>Shut down other running apps</h3><p>Fewer apps competing for bandwidth and memory means smoother streaming.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Common snags', title: 'What tends to go wrong', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Constant buffering</h3><p>Nearly always the network — try Ethernet or sit closer to the router.</p></div>
    <div class="card"><h3>Login rejected the first time</h3><p>Look for an accidental space in the username, password, or server field.</p></div>
    <div class="card"><h3>Sound but no picture</h3><p>Usually specific to that app's decoder — switch to a different compatible player.</p></div>
    <div class="card"><h3>Channels won't populate</h3><p>Verify you're online, then delete and re-add the playlist fresh.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Work through it in order', title: 'The troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Rule out the connection first', text: 'If other apps or sites are also lagging, it is not specific to IPTV.' },
    { title: 'Remove and retype your login', text: 'A typo is behind the majority of playback failures.' },
    { title: 'Restart the app, then the device', text: 'Fixes more one-off glitches than people expect.' },
    { title: 'Try a second compatible app', text: 'Occasionally the issue is app-specific, not device-specific.' },
    { title: 'Contact support with the details', text: 'Mention your device type and precisely what is happening.' },
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
  ${sectionHead({ eyebrow: 'Still stuck?', title: 'Get help from a real person', left: true })}
  <p>If nothing above fixes it, contact support with your device type and what exactly is happening — enough detail to actually diagnose it.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Try it on your own devices first', lead: 'Start the 24-hour trial and work through this guide start to finish.' })}
`,
};
