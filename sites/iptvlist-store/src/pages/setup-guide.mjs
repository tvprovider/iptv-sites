import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const activationSteps = [
  { title: 'Find the app store built into the device', text: 'A TV, a streaming box, a phone, and a desktop each keep one in a slightly different spot, but every one of them has it.' },
  { title: 'Pick a player app that accepts an IPTV login', text: 'Free options cover this on every device below — there is no need to pay for a second app.' },
  { title: 'Type in the details from the activation email', text: 'One email, sent right after ordering or starting the trial, has everything that field is asking for.' },
  { title: 'Open a channel and confirm sound and picture both arrive', text: 'Getting both at once is the only signal that the setup actually worked.' },
];

const setupFaqs = [
  { q: 'Do I need a specific, named app for this to work?', a: 'No specific app is required — anything built to accept an IPTV login will do, and each device below has more than one free option.' },
  { q: 'What fills in the on-screen guide, and does someone have to build it manually?', a: `That component is called the EPG, and most player apps populate it by themselves the moment a login is entered. An empty guide usually traces back to a manual guide-address field buried in that app's settings.` },
  { q: 'What happens if the same login streams on two devices simultaneously?', a: 'Each account supports one active stream. Running two at the same moment typically drags playback down on both rather than blocking either outright.' },
  { q: 'Does every channel actually reach 4K?', a: 'Up to 4K, and only where the plan, the device, and the original source all line up — the 4K vs HD guide walks through what decides that in practice.' },
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
  title: 'IPTV List Setup Guide — Every Supported Device',
  description: 'What to have ready before activating IPTV List, plus a step-by-step checklist for every supported device and a troubleshooting order to follow.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to activate an IPTV List subscription on any supported device', description: 'Install a compatible player app and enter your login to start watching on any listed device.', steps: activationSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'One checklist, every device on the supported list',
  lead: 'The steps barely change from one device to the next: confirm what you need, put a player app on it, enter the login, and the full catalog appears.',
  primaryCta: { label: 'Jump to your device', href: '#devices' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Device setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before anything else', title: 'The short list of requirements', left: true })}
  <ul class="check-list">
    <li>One device pulled from the supported list further down this page</li>
    <li>A connection that sustains roughly 25 Mbps for 4K, less for lower resolutions</li>
    <li>Any free player app installed and ready on that device</li>
    <li>The activation email that follows an order or a trial signup</li>
  </ul>
  <p style="margin-top:12px;">That is the entire prerequisite list — nothing else stands between having those four things and a working screen.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'About that email', title: 'What actually arrives after you order', left: true })}
  ${answerBox('<p>One email carries the login your chosen player app is built to accept, sent out after an order or a trial request goes through. The contents work the same regardless of which device below ends up using them — the choice of device is entirely yours.</p>')}`,
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
  steps: [
    { title: 'Open the built-in app store on the TV', text: 'On Samsung and LG sets, an icon for it sits on the main home screen already.' },
    { title: 'Search for and install any IPTV-capable player', text: 'Multiple free listings usually turn up in the same search.' },
    { title: 'Find where the app wants a playlist or login entered', text: 'That screen is where the activation email details belong.' },
    { title: 'Save it and open a channel to confirm', text: 'A channel that plays cleanly means the entry was accepted.' },
  ],
  note: 'Some TV models restrict outside app installs entirely. If that happens, a small streaming box connected over HDMI handles the same job without running into that restriction.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV',
  title: 'Android TV & Google TV setup',
  steps: [
    { title: 'Open the Play Store', text: 'The same store appears whether the box runs plain Android TV or Google TV, regardless of manufacturer.' },
    { title: 'Choose a player app that lists IPTV login support', text: 'Read the listing description before installing to confirm this.' },
    { title: 'Enter the login', text: 'Copy it exactly as it appears in the activation email.' },
    { title: 'Play something and check for both audio and video', text: 'Both arriving together is the confirmation you need.' },
  ],
})}

${deviceSection({
  id: 'fire-tv',
  eyebrow: 'Fire TV & Firestick',
  title: 'Fire TV & Firestick setup',
  steps: [
    { title: 'Check the Amazon Appstore first', text: 'Look for a listing built around IPTV login support.' },
    { title: 'Sideload an app if nothing suitable shows up', text: 'A file-manager app lets a trusted APK be installed directly when the Appstore comes up short.' },
    { title: 'Enter the login', text: 'Taken straight from the activation email.' },
    { title: 'Confirm with a single test playback', text: 'One channel loading cleanly is all the confirmation needed.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Mobile',
  title: 'Android & iOS mobile setup',
  steps: [
    { title: 'Install an appropriate player app', text: 'Play Store covers Android, App Store covers iPhone and iPad.' },
    { title: 'Find the login field and enter the details', text: 'Usually labeled "add playlist" or plainly "login" inside the app.' },
    { title: 'Adjust playback settings as needed', text: 'Many mobile apps expose their own resolution and buffering controls.' },
  ],
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Computer',
  title: 'Windows & macOS setup',
  steps: [
    { title: 'Choose a desktop player that accepts IPTV logins', text: 'Free choices exist for both Windows and Mac.' },
    { title: 'Enter the login into the app', text: 'Some apps use a network-stream field, others a dedicated login screen.' },
    { title: 'Test playback before closing the setup screen', text: 'A quick check now saves a return trip to settings later.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'If the program guide is not showing up', left: true })}
  <p>Most player apps build the on-screen guide automatically once a login is entered. When it stays blank, look for a manual guide-address setting inside that app and paste in the corresponding value from the activation email, if one was included.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Two small changes, better playback', title: 'Habits worth adopting', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Wire it in where you can</h3><p>An Ethernet cable beats Wi-Fi for consistency, especially on a TV box that never moves.</p></div>
    <div class="card"><h3>Close background apps first</h3><p>Fewer things competing for bandwidth and memory means fewer interruptions later.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Common problems', title: 'What usually causes them', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Repeated buffering</h3><p>Almost always the connection — try a wired link or sit closer to the router.</p></div>
    <div class="card"><h3>"Invalid login" on the first try</h3><p>Check for a stray space accidentally typed into the login field.</p></div>
    <div class="card"><h3>The app crashes or won't open</h3><p>A fresh reinstall usually clears it; a recent app update occasionally breaks something temporarily.</p></div>
    <div class="card"><h3>Audio plays but video does not</h3><p>Usually a decoding quirk in that particular app — switching to a different compatible player generally fixes it.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'A sensible order to try things', title: 'Work through this before contacting support', left: true })}
  ${stepsList([
    { title: 'Test the internet connection on its own first', text: 'Open a different streaming app on the same device to isolate the problem.' },
    { title: 'Remove the login and re-enter it carefully', text: 'A small typo is behind most failed attempts.' },
    { title: 'Restart the app, then restart the whole device', text: 'This alone resolves a surprising share of issues.' },
    { title: 'Try a different compatible player app', text: 'One app misbehaving does not mean the others will too.' },
    { title: 'Contact support directly', text: 'Include the device and a precise description of what is happening.' },
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
  ${sectionHead({ eyebrow: 'Still stuck?', title: 'Get hands-on help', left: true })}
  <p>Send over the device and a precise description of what is going wrong — that is enough detail for support to properly dig in.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Put the checklist to work on the real list', lead: 'Start a 24-hour trial and run through it on your own device.' })}
`,
};
