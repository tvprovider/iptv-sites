import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const activationSteps = [
  { title: 'Put a compatible player on the device you\'ll actually use', text: 'Every entry below lists at least one free option built to accept an IPTV login — nothing paid is ever required to get started.' },
  { title: 'Grab the login from the activation email', text: 'It lands after an order or a trial request goes through, and it has whatever field your chosen app is asking to fill in.' },
  { title: 'Pull up one channel to prove it worked', text: 'An Ekstraklasa fixture or a Polish news station is as good a test as any — sound and picture together mean the login took.' },
];

const setupFaqs = [
  { q: 'Do I have to use one specific app?', a: 'No. There\'s no mandatory app name to hunt down — any player designed around IPTV logins will take this one, and each device section below points to more than one free option.' },
  { q: 'The guide/EPG is empty right after I log in — normal?', a: 'Usually, and it clears up within a few minutes on its own. If it doesn\'t, most apps hide a manual guide-address field somewhere in their settings that fixes it.' },
  { q: 'Can two devices in one household stream at the same time?', a: 'One login means one active stream. A second device joining at the same moment tends to drag both down rather than getting refused outright — plan around that before a big Ekstraklasa kickoff everyone wants on separately.' },
  { q: 'Is a 4K tag on an Ekstraklasa channel a guarantee?', a: 'It\'s a ceiling, not a promise — reachable only when the plan, the device, and the original broadcast all cooperate. The 4K vs HD guide unpacks exactly why.' },
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
  title: 'IPTV Poland Setup Guide — Every Device',
  description: 'A device-by-device activation checklist for IPTV Poland, plus what to have ready first and how to troubleshoot Ekstraklasa playback issues.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to activate an IPTV Poland subscription on any supported device', description: 'Install a compatible player app and enter your login to start watching Ekstraklasa and Polish channels on any listed device.', steps: activationSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'One login, seven kinds of hardware — pick yours below',
  lead: 'Every device here activates the same three-part way: a player app, a pasted-in login, and one channel to prove it worked. What differs is where that app actually lives on each platform, which is what the rest of this page walks through.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  id: 'devices',
  html: `
  ${sectionHead({ eyebrow: 'Jump to your device', title: 'Supported devices' })}
  ${deviceGrid(devices)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before diving in', title: 'What to have next to you', left: true })}
  <ul class="check-list">
    <li>One of the devices listed above</li>
    <li>A connection that can hold roughly 25 Mbps if 4K matters to you, noticeably less otherwise</li>
    <li>A free player app already sitting on that device</li>
    <li>The activation email, whether it followed an order or a trial signup</li>
  </ul>
  <p style="margin-top:12px;">That's genuinely the whole list. With those four sorted, actually getting live is a matter of minutes.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The activation email', title: 'What actually lands in your inbox', left: true })}
  ${answerBox('<p>One email, one login, sent as soon as an order or trial request clears. That single credential works the same on every device below — which device you pick is entirely a matter of taste, not something the login itself cares about.</p>')}`,
})}

${deviceSection({
  id: 'smart-tv',
  eyebrow: 'Smart TV',
  title: 'Samsung & LG smart TVs',
  steps: [
    { title: 'Open the built-in app store from the home screen', text: 'Both brands keep this front and center rather than buried in a menu.' },
    { title: 'Search "IPTV player" and install whichever result looks solid', text: 'Several free apps designed for exactly this tend to surface immediately.' },
    { title: 'Find where the app wants a playlist or login URL', text: 'That\'s where the activation email\'s details get pasted in.' },
    { title: 'Open any channel and watch for a few seconds', text: 'A clean start means the login was accepted correctly the first time.' },
  ],
  note: 'A few TV models refuse outside app installs entirely. In that case, a cheap HDMI streaming box plugged into the same TV sidesteps the restriction without changing anything else here.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV boxes',
  steps: [
    { title: 'Open the Play Store, same as on a phone', text: 'It\'s identical across brands, whether the box runs Android TV or Google TV underneath.' },
    { title: 'Read the app description before installing', text: 'Confirm it explicitly mentions IPTV or M3U playlist support before committing to it.' },
    { title: 'Paste the login carefully, character for character', text: 'A stray space is the single most common reason a correct login still gets rejected.' },
    { title: 'Confirm both audio and video arrive together', text: 'One without the other usually points at the app, not the login itself.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Amazon Fire TV & Firestick',
  steps: [
    { title: 'Check the Amazon Appstore first', text: 'Look for a listing that specifically calls out IPTV login support in its own description.' },
    { title: 'Sideload instead, if nothing there fits', text: 'A file-manager app makes installing an APK from outside the Appstore straightforward enough.' },
    { title: 'Copy the login over rather than retyping it', text: 'Fewer keystrokes means fewer chances to mistype a character.' },
    { title: 'Confirm with a single channel before moving on', text: 'One clean playback is all the confirmation this step needs.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android phones, iPhone & iPad',
  steps: [
    { title: 'Grab a player from the matching store', text: 'Play Store on Android, App Store on iPhone and iPad — same idea either way.' },
    { title: 'Look for "add playlist" or a login screen', text: 'The wording shifts slightly app to app, but it\'s rarely hidden.' },
    { title: 'Cap the resolution manually if you\'re on mobile data', text: 'Plenty of mobile players expose this setting specifically for that situation.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS',
  steps: [
    { title: 'Pick any desktop player built for IPTV', text: 'Free, capable options exist for both operating systems.' },
    { title: 'Enter the login wherever the app expects it', text: 'Some use a network-stream URL field, others a dedicated login screen — functionally the same either way.' },
    { title: 'Test playback before closing anything', text: 'Confirming it now saves a second trip back into the settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Ahead of a big matchday', title: 'Two small habits worth building', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Wire it if the setup allows</h3><p>A cable beats Wi-Fi for consistency, especially on a box that never moves from its spot.</p></div>
    <div class="card"><h3>Close whatever else is running</h3><p>Freeing up bandwidth before kickoff heads off a lot of surprises once the match actually starts.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Blank program guide?', title: 'The usual fix', left: true })}
  <p>Give it a few minutes — most apps populate the on-screen guide on their own shortly after login. If it\'s still empty after that, check the app\'s settings for a manual EPG or guide-address field and drop in the value from the activation email, when one was sent.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Common issues', title: 'What\'s usually actually behind them', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Constant buffering</h3><p>Almost always the network — moving to a cable or closer to the router clears up most cases.</p></div>
    <div class="card"><h3>Login rejected first try</h3><p>Check for an extra space or a mistyped character before assuming anything else has gone wrong.</p></div>
    <div class="card"><h3>App crashes or won\'t open</h3><p>A reinstall fixes this more often than not; sometimes a recent app update is briefly the culprit.</p></div>
    <div class="card"><h3>Audio plays, no picture</h3><p>Usually a decoder quirk in that specific app — switching to a different compatible player generally resolves it.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before messaging support', title: 'Work through these first', left: true })}
  ${stepsList([
    { title: 'Rule out the network', text: 'Open any other streaming app on the same device to see if the connection itself is the issue.' },
    { title: 'Retype the login from scratch', text: 'Deleting and carefully re-entering it clears the majority of activation problems on its own.' },
    { title: 'Restart the app, then the whole device', text: 'A surprising share of odd glitches disappear after this alone.' },
    { title: 'Try a different player entirely', text: 'One misbehaving app doesn\'t mean every app on that platform will.' },
    { title: 'Contact support with the specifics', text: 'Device model plus exactly what\'s happening on screen — that combination is what actually gets it solved.' },
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
  ${sectionHead({ eyebrow: 'Still stuck?', title: 'Get a real answer', left: true })}
  <p>Tell support the device and describe exactly what\'s on screen — that\'s all it takes to actually dig into it.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Run through this before your next matchday', lead: 'Start a 24-hour trial and test activation on your own device first.' })}
`,
};
