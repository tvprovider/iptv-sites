import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Latino — Fútbol, Novelas & 40,000+ Channels',
  description: 'IPTV Latino streams live fútbol, novelas, and Spanish-language channels next to the full English catalog every plan includes — nothing swapped out.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Latino',
  h1: 'Fútbol, novelas, and the English side of your household — one login',
  lead: 'Live sports from the leagues Latino households actually follow, a deep novela and Spanish-series catalog, and the same full English and international lineup every plan includes. One is not traded for the other.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['Fútbol from major Latin American & Spanish leagues', 'Novelas & Spanish series included', 'Full English catalog, untouched', 'Real 24-hour trial for $1'],
})}

${marquee(['Liga MX', 'La Liga', 'Copa Libertadores', 'Novelas', 'Noticias 24/7', 'Kids & Family', 'Hollywood & English Hits', 'Series en Español'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'How the catalog is built', title: 'Both languages, fully included — not a translated slice of one', left: true })}
  ${featureGrid([
    { title: 'Fútbol en vivo', text: 'Live coverage from major Latin American and Spanish leagues, part of the standard lineup — no separate sports add-on charged on top.' },
    { title: 'Novelas & Spanish series', text: 'A working library of novelas and Spanish-language series, refreshed the way any active on-demand catalog is.' },
    { title: 'Noticias & entretenimiento', text: 'Spanish-language news and entertainment channels sit alongside everything else, not tucked into a separate tier.' },
    { title: 'English & international, unchanged', text: 'The same English-language and international channels every plan carries — none of it removed to make room for the Spanish-language side.' },
  ], 4)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'The numbers', title: `${catalog.liveChannels} live channels. ${catalog.vods} on-demand titles.` })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M250 270 h40 M270 250 v40" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><circle cx="270" cy="270" r="30" fill="none" stroke="#ffffff" stroke-width="3.5"/>', 'Bilingual channel catalog illustration')}</div>
    <div>
      <div class="stat-block">
        <h3>Live Channels</h3>
        <div class="stat-block-number js-count" data-count="${catalog.liveChannels}">${esc(catalog.liveChannels)}</div>
        <p>Spanish-language, Latin American, and English/international feeds, all reachable from the same login.</p>
      </div>
      <div class="stat-block">
        <h3>On-Demand Library</h3>
        <div class="stat-block-number js-count" data-count="${catalog.vods}">${esc(catalog.vods)}</div>
        <p>Novelas, Spanish and English films, and series — one catalog, not two separate ones split by language.</p>
      </div>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Why this matters', title: 'What a Spanish-only IPTV service usually leaves out', left: true })}
  ${comparisonTable(
    ['', 'A Spanish-only IPTV option', 'IPTV Latino'],
    [
      ['English & international channels', 'Thin or missing entirely', 'Full catalog, included by default'],
      ['Fútbol from Latin American & Spanish leagues', 'Sometimes the whole focus, little else', 'Part of the standard lineup, not the only thing'],
      ['Novelas & Spanish series', 'Usually the main draw', 'A real working library, refreshed regularly'],
      ['Works for a mixed-language household', 'Only if everyone watches in Spanish', 'Built for households that switch between both'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Fútbol latino', title: 'The leagues households actually follow', left: true })}
  <div class="grid grid-3">
    <div class="card"><h3>Liga MX & Mexican fútbol</h3><p>Weekly fixtures from Mexico's top division, part of the base lineup.</p></div>
    <div class="card"><h3>La Liga & Spanish fútbol</h3><p>Spain's top flight, alongside the domestic cup and continental fixtures.</p></div>
    <div class="card"><h3>Copa Libertadores & South American competitions</h3><p>Continental club competitions that a general sports package usually skips.</p></div>
  </div>
  <p style="margin-top:20px;">Coverage runs on the same login as the novela and English catalogs — nothing about picking a match requires a separate sports plan.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">Full device-by-device Setup Guide →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Getting in', title: 'Four steps between deciding and watching something' })}
  ${stepsList([
    { title: 'Choose a term, or start with the trial', text: 'Testing the fútbol and novela lineup for a dollar first is completely optional, not required.' },
    { title: 'Send over an email address', text: 'That\'s the only detail needed to get the order moving.' },
    { title: 'Watch for the activation email', text: 'Login details typically show up within a few hours.' },
    { title: 'Drop it into a player app on your device', text: 'Every step is spelled out on the Setup Guide, device by device.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV Latino' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">See the full plan breakdown →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'See it before paying for it', title: trial.label, left: true })}
      <p>For $${trial.price.toFixed(2)}, ${trial.duration} on the identical bilingual catalog a paying subscriber gets — long enough to pull up a fixture, start a novela, and flip to an English channel without leaving the couch.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Both language sides of the catalog, held back on neither</li>
        <li>Up to 4K resolution wherever the original source allows it</li>
        <li>One device running for the whole trial window</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'A good fit if', title: 'Who this is actually built for' })}
  ${featureGrid([
    { title: 'Bilingual households', text: 'One login the whole family shares, whichever language ends up on the screen that night.' },
    { title: 'Fútbol families', text: 'Following a league back home shouldn\'t require a second subscription just for the matches.' },
    { title: 'Novela watchers', text: 'A catalog built to actually carry a season, not two or three titles for show.' },
    { title: 'Anyone who kept two subscriptions before', text: 'One for English content, one for Spanish — this replaces that split with a single plan.' },
  ], 4)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">Read the rest of the FAQ →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Quick facts', title: 'A few more things worth knowing' })}
  <div class="grid grid-3">
    ${[
      { title: 'Nothing on Pricing needs a signup first', text: 'All four terms and their exact cost are visible right away.', href: '/pricing/' },
      { title: 'A dollar covers the real question', text: 'Whether your specific league and your favorite novela are actually in the lineup.', href: '/trial/' },
      { title: 'Installation steps, out in the open', text: 'The whole player-app process is public before you order anything.', href: '/setup-guide/' },
      { title: 'A refund policy with no fine print', text: 'Every condition is written out, not hinted at.', href: '/refund-policy/' },
      { title: 'A plain answer on data collection', text: 'What we keep and why, stated directly on the Privacy Policy.', href: '/privacy-policy/' },
      { title: '¿Qué es IPTV Latino, exactly?', text: 'The format, and what the channel count really covers, in the Guides section.', href: '/guides/what-is-iptv/' },
    ]
      .map(
        (t) => `
    <div class="card">
      <h3><a href="${t.href}">${esc(t.title)}</a></h3>
      <p>${esc(t.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({
  title: 'See the fútbol schedule and novela lineup for yourself',
  lead: 'Line up the plans side by side, or put a dollar toward the trial and watch it running on your own screen first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
