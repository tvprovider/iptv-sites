import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, comparisonTable, answerBox, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const activationSteps = [
  { title: 'Install any app built to read an IPTV login', text: 'The right choice depends on the device, not on this subscription — the table below names a starting option per platform.' },
  { title: 'Paste in the credentials from the activation email', text: 'That single email is the only thing every device on this page actually needs.' },
  { title: 'Open something and watch it play', text: 'Once picture and sound both show up cleanly, the device is done — everything past this point is optional troubleshooting.' },
];

const setupFaqs = [
  { q: 'Is one particular app required for this to work?', a: 'No single app name is mandatory. Anything designed to read an IPTV login will accept this one — the table below just names a reasonable starting point per device rather than the only option.' },
  { q: 'The on-screen guide has no program data right after activating — is that a problem?', a: 'Usually not. It tends to fill in within a few minutes on its own; a manual guide-address field buried in most apps\' settings clears it up if it doesn\'t.' },
  { q: 'Can the same login run on two screens in the same house at once?', a: 'The login supports one active stream. A second device joining mid-session tends to degrade both rather than being blocked outright, so it\'s worth avoiding for anything you don\'t want interrupted.' },
  { q: 'Does a "4K" tag on a channel mean every device will actually show 4K?', a: 'No — it\'s a ceiling that depends on the device decoding it and the connection sustaining it, not a guarantee. See the 4K vs HD guide for the full explanation.' },
];

export default {
  slug: 'setup-guide',
  title: 'IPTV Prime Setup Guide — Every Device',
  description: 'Device-by-device activation steps for IPTV Prime: what to gather first, a quick-reference table by platform, and how to fix common playback issues.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to activate an IPTV Prime subscription on any supported device', description: 'Install a compatible player app and enter your login to start watching on any listed device.', steps: activationSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'The same login. Seven different sets of buttons to press.',
  lead: 'Nothing about activation changes device to device — an app reads a login, a login unlocks the catalog. What actually differs is where that app lives on each platform, so this page covers that part once per device instead of assuming you\'ll figure it out.',
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
  ${sectionHead({ eyebrow: 'Have these ready first', title: 'Nothing here takes long to gather', left: true })}
  ${comparisonTable(
    ['Item', 'Why it matters'],
    [
      ['A device from the list above', 'Everything below assumes you\'ve already settled on one'],
      ['A connection holding roughly 25 Mbps', 'Only matters if 4K is the goal — lower resolutions need far less'],
      ['A free player app on that device', 'The table further down names one worth starting with per platform'],
      ['The activation email', 'Sent once an order or trial request clears — this is where the login itself lives'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'One login, every platform', title: 'What actually lands in your inbox', left: true })}
  ${answerBox('<p>A single email, containing a single login. It doesn\'t change based on which device ends up using it, and it doesn\'t expire between one device and the next — try it on a phone first, then move to a TV later, and it behaves identically both times.</p>')}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Quick reference', title: 'Where the app lives, by platform', left: true })}
  ${comparisonTable(
    ['Device', 'Where to find a player app', 'One thing to watch for'],
    [
      ['Samsung / LG Smart TV', 'The TV\'s own built-in app store', 'Some models block outside app installs entirely — a small HDMI streaming box sidesteps that'],
      ['Android TV / Google TV', 'Play Store, same as on a phone', 'Confirm the app description explicitly mentions IPTV or M3U support before installing'],
      ['Fire TV / Firestick', 'Amazon Appstore first, sideloading as a backup', 'A file-manager app makes sideloading an APK straightforward if nothing fits in the Appstore'],
      ['Android phone / tablet', 'Play Store', 'Cap the resolution manually in the app\'s settings if you\'re on mobile data'],
      ['iPhone / iPad', 'App Store', 'One app generally covers both, so the login only needs entering once per device'],
      ['Apple TV', 'App Store, or a sideloaded build', 'Reaches the identical catalog every other device on this page gets'],
      ['Windows / macOS', 'Any desktop IPTV player', 'Some use a network-stream URL field rather than a login screen — functionally the same thing'],
    ]
  )}
  <p style="margin-top:16px;">Whichever row applies: install the app, paste the login from the activation email into whatever field it asks for, then open one channel or title to confirm sound and picture both showed up.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Two habits worth keeping', title: 'Small things that head off bigger problems', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Cable over Wi-Fi where it\'s realistic</h3><p>Especially on a box that never moves from its spot — the consistency gain is worth the extra cable run.</p></div>
    <div class="card"><h3>Close what else is running first</h3><p>A background download or an app mid-update on the same network eats into the bandwidth a stream actually needs.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Empty program guide?', title: 'The fix, in one line', left: true })}
  <p>Give it a few minutes to populate on its own. Still blank after that? Look for a manual EPG or guide-address field in the app\'s settings and drop in the value from the activation email, if one was included.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'What symptoms usually mean', title: 'Reading the actual problem correctly', left: true })}
  ${comparisonTable(
    ['What you\'re seeing', 'What it usually points to'],
    [
      ['Constant buffering', 'The network, almost always — try a cable or move closer to the router'],
      ['Login rejected on the first attempt', 'A stray space or mistyped character, before assuming anything deeper is wrong'],
      ['The app crashes or won\'t open', 'Worth a reinstall first — a recent app update is occasionally the culprit'],
      ['Sound plays but no picture shows', 'Usually that specific app\'s decoder — a different compatible player generally clears it'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before writing to support', title: 'A short list worth working through first', left: true })}
  <ul class="check-list">
    <li>Open a different streaming app on the same device to rule out the network itself</li>
    <li>Delete the login and paste it back in fresh — this alone clears a surprising share of activation issues</li>
    <li>Restart the app, then the device, in that order</li>
    <li>Try a second compatible player if the first one keeps misbehaving</li>
  </ul>
  <p style="margin-top:12px;">Still stuck after that? That\'s exactly the point where a message to support, naming the device and describing exactly what\'s on screen, gets it solved fastest.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Setup FAQ', left: true })}
  ${faqAccordion(setupFaqs)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Still not working?', title: 'Get a specific answer from a specific person', left: true })}
  <p>Name the device and describe exactly what\'s happening on screen — that combination is what actually lets support dig in.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Test activation before you commit to a plan', lead: 'A 24-hour trial is enough to confirm your own device cooperates.' })}
`,
};
