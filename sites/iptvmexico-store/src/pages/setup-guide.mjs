import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const activationSteps = [
  { title: 'Install a compatible player app on the device', text: 'Every device on this page has at least one free option that accepts an IPTV login — no paid app is ever required.' },
  { title: 'Copy the login details from the activation email', text: 'One email arrives after ordering or requesting the trial, and it carries whatever your player app is asking for.' },
  { title: 'Save the entry and open something to test it', text: 'A Liga MX channel or a Mexican news station is a good first pick — if picture and sound both show up, the login was accepted.' },
];

const setupFaqs = [
  { q: 'Is there a required, specific app name I need to look for?', a: 'No single app is mandatory. Any player built to accept an IPTV login handles it, and every device below has multiple free choices.' },
  { q: 'The program guide is blank after I log in — is that normal?', a: 'It usually fills in on its own within a few minutes. If it stays empty, most player apps have a manual guide-address field tucked into their settings that fixes it.' },
  { q: 'Can two people in the same household watch on separate screens?', a: 'Each subscription supports one active stream at a time. A second device logged in simultaneously will usually degrade both rather than being blocked outright — worth planning for on a big matchday.' },
  { q: 'Will a Liga MX broadcast always play in 4K?', a: 'Only up to 4K, and only when the plan, the device, and the original broadcast all support it — the 4K vs HD guide covers what actually decides that.' },
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
  title: 'IPTV Mexico Setup Guide — Every Device',
  description: 'A device-by-device activation checklist for IPTV Mexico, plus what to have ready first and how to troubleshoot Liga MX playback issues.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to activate an IPTV Mexico subscription on any supported device', description: 'Install a compatible player app and enter your login to start watching Liga MX and Mexican channels on any listed device.', steps: activationSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Getting from a login to a working screen, device by device',
  lead: 'Smart TVs, streaming boxes, phones, and computers all handle activation the same basic way — a player app, a login, and a channel to test it on. This page covers each of them individually.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Have these ready first', title: 'Four things before you start', left: true })}
  <ul class="check-list">
    <li>A device from the supported list further down the page</li>
    <li>An internet connection that sustains around 25 Mbps for 4K playback, less for lower resolutions</li>
    <li>A free player app already installed on that device</li>
    <li>The activation email sent after an order or a trial signup</li>
  </ul>
  <p style="margin-top:12px;">Nothing else is required — once those four are sorted, activation itself takes a few minutes.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The activation email', title: 'What lands in your inbox', left: true })}
  ${answerBox('<p>A single email carries the login your player app needs, sent once an order or trial request is processed. It works identically no matter which device below you install it on — the choice of hardware is entirely yours, not something dictated by the login itself.</p>')}`,
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
  title: 'Samsung & LG smart TVs',
  steps: [
    { title: 'Head into the TV\'s built-in app store', text: 'Both Samsung and LG keep it accessible right from the home screen.' },
    { title: 'Search for an IPTV player and install one', text: 'Several free options typically appear in the same search results.' },
    { title: 'Locate the playlist or login field inside the app', text: 'This is where the activation email\'s details go.' },
    { title: 'Load a channel to confirm it took', text: 'Clean playback on the first try means the login was entered correctly.' },
  ],
  note: 'A handful of TV models block outside app installs entirely. Where that happens, a small HDMI streaming box sidesteps the restriction without changing anything else about the setup.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV boxes',
  steps: [
    { title: 'Open the Play Store on the box', text: 'The same storefront shows up regardless of manufacturer, whether it runs Android TV or Google TV.' },
    { title: 'Pick a player app that lists IPTV support in its description', text: 'A quick read of the listing before installing confirms this.' },
    { title: 'Type in the login exactly as sent', text: 'Extra spaces or missing characters are the most common cause of a rejected login.' },
    { title: 'Play a channel and check for audio and video together', text: 'Both arriving at once is the sign everything is working.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Amazon Fire TV & Firestick',
  steps: [
    { title: 'Search the Amazon Appstore first', text: 'Look specifically for a listing that mentions IPTV login support.' },
    { title: 'Sideload a trusted app if the Appstore comes up short', text: 'A file-manager app makes installing an APK directly straightforward.' },
    { title: 'Enter the login from the activation email', text: 'Copy it over exactly rather than retyping it by hand.' },
    { title: 'Test one channel before considering it done', text: 'A single successful playback is sufficient confirmation.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android phones, iPhone & iPad',
  steps: [
    { title: 'Install a player app suited to the platform', text: 'Play Store for Android, App Store for iPhone and iPad.' },
    { title: 'Find the login or "add playlist" option', text: 'The exact wording varies slightly by app, but it\'s usually easy to spot.' },
    { title: 'Tune playback settings if the app allows it', text: 'Many mobile players let you cap resolution manually, handy for watching on mobile data.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS',
  steps: [
    { title: 'Pick a desktop player that supports IPTV logins', text: 'Free choices are available on both platforms.' },
    { title: 'Add the login inside the app', text: 'Some apps use a network-stream field, others a dedicated login screen — either works the same way.' },
    { title: 'Run a test before closing the window', text: 'Confirming playback now avoids a second trip back into settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If the program guide stays empty', title: 'A quick fix worth trying', left: true })}
  <p>The on-screen guide usually populates on its own shortly after the login is entered. If it doesn\'t, look inside the player app\'s settings for a manual guide-address option and paste in the corresponding value from the activation email, when one was included.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Two habits that noticeably help', title: 'Before a big matchday' })}
  <div class="grid grid-2">
    <div class="card"><h3>Use a cable instead of Wi-Fi where you can</h3><p>Ethernet holds up more consistently than wireless, especially on a box that stays in one spot.</p></div>
    <div class="card"><h3>Shut down anything running in the background</h3><p>Freeing up bandwidth ahead of kickoff means fewer surprises once the match starts.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Common issues', title: 'What\'s usually behind them', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Frequent buffering</h3><p>Nearly always the connection — a wired link or sitting closer to the router typically resolves it.</p></div>
    <div class="card"><h3>Login rejected on the first attempt</h3><p>Look for a stray space or a mistyped character before assuming anything else is wrong.</p></div>
    <div class="card"><h3>App won\'t launch or keeps crashing</h3><p>Reinstalling clears this most of the time; a recent update to the app occasionally causes a temporary issue.</p></div>
    <div class="card"><h3>Sound plays with no picture</h3><p>Usually specific to that app\'s decoder — a different compatible player generally solves it.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before reaching out to support', title: 'Try these in order', left: true })}
  ${stepsList([
    { title: 'Confirm the connection itself is working', text: 'Open a separate streaming app on the same device to rule out the network.' },
    { title: 'Delete and carefully retype the login', text: 'This alone resolves the majority of activation problems.' },
    { title: 'Close and reopen the app, then restart the device', text: 'A surprising number of glitches clear up this way.' },
    { title: 'Switch to a different compatible player', text: 'If one app is misbehaving, that doesn\'t mean every app will.' },
    { title: 'Reach out to support with specifics', text: 'Name the device and describe exactly what\'s happening on screen.' },
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
  ${sectionHead({ eyebrow: 'Still not working?', title: 'Get direct help', left: true })}
  <p>Send the device model and a precise description of the problem — that\'s enough for support to actually dig into it.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Try the checklist before your next matchday', lead: 'Start a 24-hour trial and run through activation on your own device.' })}
`,
};
