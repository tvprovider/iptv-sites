import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const smartTvSteps = [
  { title: 'Head into the TV\'s own app store', text: 'Both Samsung and LG models put one right on the home screen.' },
  { title: 'Grab a player app built for IPTV', text: 'Look specifically for one advertising M3U or Xtream Codes-style support before installing anything.' },
  { title: 'Locate the "add playlist" or "login" option inside it', text: 'That\'s where the M3U link, or the username/password/server trio, from your activation email goes.' },
  { title: 'Save the entry and load a channel', text: 'Once the login is accepted, the whole lineup shows up on its own.' },
];

const setupFaqs = [
  { q: 'Is there one particular app that has to be used?', a: 'Not at all — anything advertising M3U or Xtream Codes support will do the job, and there are several free ones per device listed below.' },
  { q: 'What handles the on-screen guide, and is manual setup needed?', a: 'That\'s the EPG, and it covers fútbol kickoff times along with everything else. Most apps populate it on their own from the login; a blank guide usually just means hunting down a manual "EPG URL" field in that app\'s settings.' },
  { q: 'An app is asking for a "portal" instead of an M3U address — is something wrong?', a: 'Nothing\'s wrong — that\'s just the app\'s term for an Xtream Codes-style login (username, password, server). Use whichever format the activation email actually sent.' },
  { q: 'Can two people in the same house stream at the same time?', a: 'Each subscription is scoped to a single active stream. Pushing two devices on one login at once usually degrades playback on both ends.' },
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
  title: 'IPTV Latino Setup Guide — Every Device',
  description: 'How to set up IPTV Latino on Smart TV, Android TV, Fire TV, mobile, Windows, and macOS — device-by-device login steps and troubleshooting.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to set up IPTV Latino on a Smart TV', description: 'Install a compatible player app and enter your login to start watching on a Smart TV.', steps: smartTvSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Getting the login onto whichever screen the household actually uses',
  lead: 'Same handful of steps regardless of the hardware — install a player, drop in the login, and both the Spanish-language and English sides of the catalog show up together.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'First, the email', title: 'Reading what activation actually sends over', left: true })}
  ${answerBox('<p>Ordering or starting the trial triggers one email carrying either a single M3U playlist address, or three separate pieces — username, password, server (the Xtream Codes shape). Both routes land on the same catalog underneath; which one shows up in your inbox just depends on how the account got provisioned. Both are covered device by device below.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Two shapes, one catalog', title: 'M3U link or Xtream Codes login — the practical difference', left: true })}
  ${comparisonTable(
    ['', 'M3U playlist', 'Xtream Codes-style login'],
    [
      ['What lands in the inbox', 'One URL', 'Username, password, server address'],
      ['How the player treats it', 'Reads a fixed playlist file', 'Connects live and fetches the list'],
      ['On-screen guide', 'App-dependent', 'Typically automatic'],
      ['Time to set up', 'One field, quickest', 'A few fields, no slower in practice'],
    ]
  )}
  <p style="margin-top:20px;">Neither one wins outright — it comes down to what the chosen player app expects. Whichever login arrived in the email drops into that same app's "add playlist" or "login" screen.</p>`,
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
  note: 'A TV that blocks outside app installs is still covered indirectly — a Fire TV Stick or Android TV box plugged into an HDMI port sidesteps the restriction entirely.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Launch the Play Store', text: 'True for any Android TV or Google TV box, whichever brand made it.' },
    { title: 'Pull down a player with the right support', text: 'Double-check the listing mentions M3U or Xtream Codes before installing.' },
    { title: 'Type in the login', text: 'Whatever shape the activation email sent over.' },
    { title: 'Open something and watch for both video and audio', text: 'Both loading cleanly means the setup is finished.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Start with the Amazon Appstore', text: 'Search for a listing that supports the login format on hand.' },
    { title: 'Sideload if nothing suitable turns up', text: 'A file-manager app can push a trusted APK on directly when the Appstore comes up short.' },
    { title: 'Drop in the login', text: 'M3U address or username/password/server, straight from the activation email.' },
    { title: 'Play something through to confirm it', text: 'That single check is all that\'s needed here.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Get a suitable app installed', text: 'Play Store on Android, App Store on iPhone or iPad.' },
    { title: 'Enter the login where the app asks for it', text: 'Usually labeled "add playlist" or simply "login."' },
    { title: 'Tweak playback settings if it matters to you', text: 'Plenty of mobile apps expose resolution and buffering preferences.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Pick a desktop player that reads either login shape', text: 'Free options exist for both Windows and Mac.' },
    { title: 'Point it at the login', text: 'Either through a network-stream field or a dedicated login screen, depending on the app.' },
    { title: 'Play something before closing the setup window', text: 'One quick test now beats a return trip to settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Getting the program guide showing', left: true })}
  <p>Most apps assemble the on-screen guide by themselves once a login is entered, fútbol kickoff times and all. If the guide comes up empty, look in that app's settings for a manual "EPG URL" slot and paste in the guide link from the activation email, assuming one was sent.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'For a steadier stream', title: 'Two habits that actually help', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Plug in instead of relying on Wi-Fi</h3><p>A cable noticeably outperforms wireless for consistency, particularly on TV boxes and during a live match.</p></div>
    <div class="card"><h3>Shut down whatever else is running</h3><p>Fewer apps pulling bandwidth and memory at once translates to fewer stutters.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When something breaks', title: 'The usual suspects', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Constant buffering</h3><p>Nine times out of ten it's the connection — switch to Ethernet or sit closer to the router.</p></div>
    <div class="card"><h3>"Invalid login" the first time through</h3><p>Look for a stray space hiding in the username, password, or server field.</p></div>
    <div class="card"><h3>The app vanishes or refuses to open</h3><p>A reinstall usually clears it — an update sometimes breaks compatibility for a short while.</p></div>
    <div class="card"><h3>Sound plays, picture doesn't</h3><p>Typically a decoding quirk tied to that specific app — a different compatible player usually resolves it.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Working through it', title: 'A troubleshooting order worth following', left: true })}
  ${stepsList([
    { title: 'Rule out the internet connection first', text: 'Load a different streaming app on the same device to separate the two possibilities.' },
    { title: 'Delete the login and type it back in', text: 'A typo accounts for most playback failures.' },
    { title: 'Restart the app, then the whole device', text: 'A surprising number of glitches disappear this way alone.' },
    { title: 'Switch to a different compatible player', text: 'One app behaving badly doesn\'t mean they all will.' },
    { title: 'Reach out to support', text: 'Mention the device and describe exactly what\'s happening.' },
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
  ${sectionHead({ eyebrow: 'Nothing above fixed it?', title: 'Get hands-on setup help', left: true })}
  <p>Send over the device type and a description of exactly what's going wrong — that's enough for support to actually dig in.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Put this guide to work on the real lineup', lead: 'Start a 24-hour trial and run through it on your own device.' })}
`,
};
