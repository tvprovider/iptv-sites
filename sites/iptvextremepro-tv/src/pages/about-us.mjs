import {
  hero, section, sectionHead, ctaBanner, breadcrumbs, breadcrumbSchema, esc, comparisonTable,
} from '../lib/render.mjs';

const trustMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="Abstract illustration representing transparency and trust">
  <rect width="560" height="420" rx="8" fill="#fff8f3"/>
  <rect x="60" y="60" width="220" height="220" rx="12" fill="none" stroke="#ffe0c2" stroke-width="2"/>
  <rect x="110" y="110" width="220" height="220" rx="12" fill="#ffffff" stroke="#ffb98a" stroke-width="2"/>
  <rect x="160" y="160" width="220" height="220" rx="12" fill="#fff1e6" opacity="0.7"/>
  <circle cx="270" cy="270" r="46" fill="#ea580c"/>
  <path d="M250 270 L264 285 L294 253" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default {
  slug: 'about-us',
  title: 'About Us — IPTV Xtream Pro',
  description: 'IPTV Xtream Pro is built around the Xtream Codes login format, with redundant server infrastructure, transparent pricing, and support that understands it.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'About Us' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'About Us' }])}
${hero({
  eyebrow: 'About us',
  h1: 'Started because login-format questions kept going unanswered',
  lead: '"Enter your Xtream Codes details" is where most competitors\' instructions stop. We built the whole site — setup pages, support inbox, FAQ — around actually finishing that sentence.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Contact Us', href: '/contact/' },
  media: trustMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The service, plainly', title: 'What you\'re actually buying', left: true })}
  <p>A login — either Xtream Codes-style (username, password, server URL) or a plain M3U link — that unlocks the same live channel and on-demand catalog for every subscriber, entered into a compatible third-party player app you choose and install yourself. Resolution scales up to 4K depending on your plan, device, and what the source content was actually filmed in.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2">
    <div>
      ${sectionHead({ eyebrow: 'What we own', title: 'The parts under our control', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The login credentials and the server infrastructure behind them</li>
        <li>Uptime monitoring and routing around a failed access point</li>
        <li>Support that can read a connection error and say what it means</li>
      </ul>
    </div>
    <div>
      ${sectionHead({ eyebrow: 'What we don\'t own', title: 'The parts we don\'t control', left: true })}
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>The player app itself — that's a third-party install, our login just feeds it</li>
        <li>Your own internet connection's speed and stability</li>
        <li>Whether a specific app stays available in whatever store you got it from</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where the name comes from', title: 'Xtream Codes, taken seriously instead of glossed over', left: true })}
  <p>Xtream Codes is a login format — not a brand, not a specific app. It means a player pulls your channel list and program guide live from a server using a username, password, and server address, instead of reading a static playlist file. Most IPTV sites mention it in one line and assume you already know where each field goes. This one doesn't.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'A comparison worth being honest about', title: 'Us next to the generic pitch', left: true })}
  ${comparisonTable(
    ['', 'The typical IPTV site', 'IPTV Xtream Pro'],
    [
      ['Login format explanation', 'One vague sentence', 'Field-by-field, in the Setup Guide'],
      ['Server reliability', 'Rarely mentioned at all', 'Multiple access points, monitored'],
      ['Support for login errors', 'Generic "reinstall the app" advice', 'Diagnoses typos vs. real server issues'],
      ['What "up to 4K" means', 'Left as a marketing phrase', 'Explained in the guides, honestly'],
    ]
  )}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'On uptime', title: 'What we\'ll actually commit to', left: true })}
  <p>Nobody streaming over the open internet can honestly promise zero downtime — your own connection is half the equation, and no amount of server redundancy changes that. What we do commit to: routing traffic through more than one access point so a single node failing doesn't take everything down with it, watching for problems instead of waiting for a support ticket to surface one, and telling you the truth when something is actually broken on our end.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'If you\'re new to this', title: 'M3U works fine too', left: true })}
  <p>Not everyone wants the Xtream Codes format, and that's fine — every plan supports a standard M3U playlist link as well, at no cost difference. The site leans into Xtream Codes because it's the format that gets the least honest explanation anywhere else, not because it's the only option.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Reaching a person', title: 'Support, and what it can actually fix', left: true })}
  <p>The <a href="/contact/">Contact page</a> goes to a real inbox. Login errors, billing questions, and trial issues all land there — and because the person answering understands the Xtream Codes format specifically, a "connection refused" error gets diagnosed instead of met with a generic "try reinstalling" reply.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Boundaries', title: 'What we won\'t say or do', left: true })}
  <ul style="padding-left:20px;color:var(--text-soft);">
    <li>Claim a feature exists that isn't actually part of the service</li>
    <li>Promise a specific uptime percentage — infrastructure claims that specific are rarely honest</li>
    <li>Bury the login format explanation somewhere you have to dig for it</li>
  </ul>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Data collected', title: 'Nothing beyond running the service', left: true })}
  <p>Whatever's needed to deliver the login and respond to a support message — no more than that. The exact list is in the <a href="/privacy-policy/">Privacy Policy</a>, written to actually be read rather than skimmed past.</p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Your responsibility', title: 'The line between what we run and how you use it', left: true })}
  <p>We provide the login and the infrastructure. Following the laws that apply in your own location is on you as the subscriber — the <a href="/terms-of-use/">Terms of Use</a> spells out the full arrangement.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Where to go next', title: 'If you want more before deciding', left: true })}
  <div class="grid grid-3">
    ${[
      { title: 'Setup Guide', text: 'The login fields, explained one at a time.', href: '/setup-guide/' },
      { title: 'FAQ', text: 'What people actually ask before subscribing.', href: '/faq/' },
      { title: 'Pricing', text: 'Every plan length and the trial, laid out.', href: '/pricing/' },
    ]
      .map(
        (r) => `
    <div class="card">
      <h3><a href="${r.href}">${esc(r.title)}</a></h3>
      <p>${esc(r.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({ title: 'See the login working on your own connection', lead: 'A dollar and 24 hours answers most of the remaining questions.' })}
`,
};
