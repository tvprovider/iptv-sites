import {
  hero, section, sectionHead, faqAccordion, ctaBanner, breadcrumbs,
  breadcrumbSchema, faqSchema, howToSchema, deviceGrid, stepsList, answerBox, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { devices } from '../data/business.mjs';

const xtreamCodesSteps = [
  { title: 'Install a player app that lists Xtream Codes support', text: 'Check the app\'s description or login screen for "Xtream Codes," "Xtream API," or "portal login" before installing.' },
  { title: 'Open the login screen and select the Xtream Codes option', text: 'Most apps show a separate tab or button for Xtream Codes versus a plain M3U link — pick Xtream Codes.' },
  { title: 'Enter your username in the username field', text: 'Exactly as sent in your activation email — no extra spaces before or after.' },
  { title: 'Enter your password in the password field', text: 'Case-sensitive — copy and paste it rather than retyping if your device allows it.' },
  { title: 'Enter the server URL in the server field', text: 'This is the piece people most often put in the wrong box — it goes in a field labeled "server," "server URL," or "portal URL," never the username or password field.' },
  { title: 'Save and confirm playback', text: 'The channel list and program guide load automatically once the three fields are saved correctly — open a channel to confirm video and audio work.' },
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

const setupFaqs = [
  { q: 'My player app only shows one login field, not three — what do I do?', a: 'Some apps combine the Xtream Codes fields into a single "portal" screen with labeled boxes, or accept a combined URL format instead. Check the app\'s own help text for its specific input style — the three pieces of data are the same regardless of how the app collects them.' },
  { q: 'Is there a way to enter this as one link instead of three fields?', a: 'Some player apps accept a single combined Xtream Codes URL (server, username, and password concatenated in one string) as an alternative to three separate fields — check whether your app supports this before assuming you need M3U instead.' },
  { q: 'What is EPG and does it need separate setup?', a: 'EPG (Electronic Program Guide) is the on-screen channel schedule. With an Xtream Codes login, most apps pull this automatically once the login succeeds — no separate URL needed in most cases.' },
  { q: 'Can I use the same Xtream Codes login on two devices at once?', a: 'Each plan is intended for one device at a time. Running the same credentials simultaneously on two devices can cause playback problems on both.' },
];

export default {
  slug: 'setup-guide',
  title: 'IPTV Xtream Pro Setup Guide — Xtream Codes Login',
  description: 'How to enter an Xtream Codes login field by field on any supported device, plus the M3U alternative and a troubleshooting checklist.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }]),
    faqSchema(setupFaqs),
    howToSchema({ name: 'How to enter an Xtream Codes login', description: 'Install a compatible player app and enter your username, password, and server URL to start watching.', steps: xtreamCodesSteps }),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Setup Guide' }])}
${hero({
  eyebrow: 'Setup Guide',
  h1: 'Entering an Xtream Codes login, field by field',
  lead: 'The exact fields, in order, for the login format this site is built around — plus the M3U alternative and setup for every other supported device.',
  primaryCta: { label: 'Jump to the login steps', href: '#xtream-codes-entry' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<rect x="248" y="252" width="44" height="30" rx="3" fill="none" stroke="#ffffff" stroke-width="4"/><line x1="262" y1="288" x2="278" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><line x1="270" y1="282" x2="270" y2="288" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>', 'Xtream Codes login setup illustration'),
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Before you begin', title: 'What activation actually gives you', left: true })}
  ${answerBox('<p>After ordering or starting the trial, you receive an Xtream Codes login — a username, password, and server URL — by email. This is the primary format this service is built around. An M3U playlist link is also available if your player app prefers that format instead. Either way, the same catalog loads once entered correctly.</p>')}`,
})}

${deviceSection({
  id: 'xtream-codes-entry',
  eyebrow: 'The main event',
  title: 'Entering the Xtream Codes login',
  steps: xtreamCodesSteps,
  note: 'This exact sequence — username, password, server URL, in that order — applies across nearly every player app that supports the format, regardless of device.',
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The alternative', title: 'Prefer M3U instead?', left: true })}
  ${comparisonTable(
    ['', 'Xtream Codes login', 'M3U playlist'],
    [
      ['What you enter', 'Username, password, server URL', 'One playlist link'],
      ['Where it goes', 'Three separate labeled fields', 'A single "add playlist" field'],
      ['Program guide', 'Usually pulled automatically', 'Depends on the app'],
      ['Available on request', 'Default format for every plan', 'Yes — contact support if you\'d rather use this'],
    ]
  )}
  <p style="margin-top:20px;">Both formats reach the identical channel and VOD catalog — this is purely about which one your player app is built to read. If you would rather use an M3U link, mention it when you subscribe or contact support afterward.</p>`,
})}

${section({
  id: 'devices',
  html: `
  ${sectionHead({ eyebrow: 'Also supported', title: 'Setup for other devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;color:var(--text-subdued);">The username/password/server sequence above applies to all of these — the difference is just which app you're entering it into.</p>`,
})}

${deviceSection({
  id: 'smart-tv',
  eyebrow: 'Smart TV',
  title: 'Smart TV setup',
  steps: [
    { title: 'Open your TV\'s built-in app store', text: 'Samsung, LG, and similar Smart TVs each have their own store.' },
    { title: 'Install a player app that lists Xtream Codes support', text: 'Confirm it before installing — not every Smart TV app supports the format.' },
    { title: 'Enter the username, password, and server URL', text: 'Same field order as the main steps above.' },
  ],
  note: 'If the TV does not support third-party app installs, pairing an Android TV box or Fire TV Stick to it is the simpler route.',
})}

${deviceSection({
  id: 'android-tv',
  eyebrow: 'Android TV & Fire TV',
  title: 'Android TV, Google TV, Fire TV & Firestick setup',
  steps: [
    { title: 'Open the Play Store or Amazon Appstore', text: 'Whichever matches your box.' },
    { title: 'Install a player app with Xtream Codes support', text: 'Sideloading an APK is also an option if nothing suitable is listed.' },
    { title: 'Enter the login and confirm playback', text: 'Same three fields, then open a channel to check video and audio.' },
  ],
})}

${deviceSection({
  id: 'mobile',
  eyebrow: 'Android & iOS',
  title: 'Phone & tablet setup',
  steps: [
    { title: 'Install a compatible app from your device\'s store', text: 'Google Play for Android, the App Store for iPhone and iPad.' },
    { title: 'Enter the Xtream Codes login', text: 'Username, password, server URL — same order as any other device.' },
    { title: 'Adjust quality settings if needed', text: 'Most mobile apps let you cap resolution or buffering manually.' },
  ],
})}

${deviceSection({
  id: 'apple-tv',
  eyebrow: 'Apple TV',
  title: 'Apple TV setup',
  steps: [
    { title: 'Install a compatible player from the App Store', text: 'Look for one that explicitly lists Xtream Codes support.' },
    { title: 'Enter the login using the Siri Remote', text: 'The on-screen keyboard is slower — double-check for accidental spaces before saving.' },
    { title: 'Confirm playback', text: 'Open a channel to verify video and audio.' },
  ],
  note: 'If nothing compatible is currently listed in the App Store, sideloading through Xcode is the fallback — search support for the specifics if you need it.',
})}

${deviceSection({
  id: 'computer',
  eyebrow: 'Windows & macOS',
  title: 'Computer setup',
  steps: [
    { title: 'Install a desktop player with Xtream Codes support', text: 'Several free options handle the format directly on both platforms.' },
    { title: 'Enter the login in the app\'s Xtream Codes screen', text: 'Same three fields as every other device.' },
    { title: 'Confirm playback before closing setup', text: 'Select a channel to make sure it is actually working.' },
  ],
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Optional', title: 'Setting up the program guide (EPG)', left: true })}
  <p>Most player apps build the on-screen guide automatically the moment an Xtream Codes login succeeds. If yours does not, check its settings for a manual "EPG URL" field.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Best results', title: 'Getting smooth, stable playback', left: true })}
  <div class="grid grid-2">
    <div class="card"><h3>Ethernet over Wi-Fi where possible</h3><p>A wired connection is more consistent for 4K, especially on Smart TVs and streaming boxes.</p></div>
    <div class="card"><h3>Give the login a minute after saving</h3><p>The channel list can take a few seconds to populate fully the first time — a blank screen immediately after saving is not necessarily an error.</p></div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'When things go wrong', title: 'Common login problems' })}
  <div class="grid grid-2">
    <div class="card"><h3>"Invalid login" on first attempt</h3><p>Almost always a stray space in the username, password, or server URL field — recheck each one individually.</p></div>
    <div class="card"><h3>Server URL rejected</h3><p>Confirm it went into the field labeled "server" and not accidentally into the username field — an easy mix-up on smaller on-screen keyboards.</p></div>
    <div class="card"><h3>Buffering or freezing</h3><p>Usually the connection, not the login — try wired Ethernet or move closer to the router.</p></div>
    <div class="card"><h3>No picture, audio only</h3><p>Usually a decoding issue in that specific app — try a different compatible player.</p></div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Step by step', title: 'Troubleshooting checklist', left: true })}
  ${stepsList([
    { title: 'Confirm the internet connection itself works', text: 'Open a different streaming app on the same device to isolate the issue.' },
    { title: 'Remove and re-enter the login from scratch', text: 'A typo is the most common cause of login failures — do not just edit the existing entry.' },
    { title: 'Double-check field order', text: 'Username, password, and server URL each in their own field — never combined into one.' },
    { title: 'Try a different compatible player app', text: 'If one app is misbehaving, a second one with Xtream Codes support often just works.' },
    { title: 'Contact support', text: 'Include your username (never your password) and the exact error message shown.' },
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
  <p>If none of this resolves it, contact support with your username, the player app you're using, and exactly what is happening — that is specific enough to actually help.</p>
  <a class="btn btn-primary" href="/contact/">Contact Support</a>`,
})}

${ctaBanner({ title: 'Ready to test a real login yourself?', lead: 'Start a 24-hour trial and follow this guide end to end.' })}
`,
};
