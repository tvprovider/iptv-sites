import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Mexico — Liga MX, Selección & Novelas',
  description: 'Watch Liga MX live, Selección Mexicana, and Mexican novelas from anywhere, plus 40,000+ channels and 180,000+ VOD titles. Plans from $14.99.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Mexico',
  h1: 'Liga MX. Selección Mexicana. Novelas. Wherever you actually live.',
  lead: 'Moving away from Mexico usually means losing the channels that mattered — matchday, the national team, the shows your family still watches together. This puts all of it back on your screen, in the US or anywhere else, next to the full English and international lineup every plan already includes.',
  primaryCta: { label: 'See the Plans', href: '/pricing/' },
  secondaryCta: { label: 'Try It for $1', href: '/trial/' },
  dark: true,
  trustItems: ['Liga MX matches, live', 'Selección Mexicana coverage included', 'Novelas & Mexican entertainment', 'A real $1 trial before you commit'],
})}

${marquee(['Liga MX en Vivo', 'Selección Mexicana', 'Novelas', 'Noticias de México', 'Torneo Apertura & Clausura', 'Kids & Family', 'English & International', '40,000+ Channels'])}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Built around Mexico, not around "Latino" in general', title: 'The Mexican lineup is the point, not a footnote', left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M252 268 l12 12 l24 -24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>', 'Liga MX and Mexican channel coverage illustration')}</div>
    <div>
      <p>A lot of Spanish-language IPTV listings spread themselves across every league and every country in Latin America at once. This one does not try to be everything for everyone — it is built specifically around Mexican television: Liga MX by name, Selección Mexicana by name, Mexican regional channels, news, and novelas, carried alongside the same ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles every plan includes.</p>
      <ul class="check-list">
        <li>Liga MX league matches, part of the standard lineup</li>
        <li>Selección Mexicana national-team coverage, not a separate add-on</li>
        <li>Mexican regional, news, and entertainment channels, named individually on the <a href="/setup-guide/">Setup Guide</a></li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'canales mexicanos iptv', title: 'What a general Spanish-language package leaves out', left: true })}
  ${comparisonTable(
    ['', 'A general Latin American package', 'IPTV Mexico'],
    [
      ['Liga MX', 'One league among many, easy to lose in the schedule', 'Named directly, part of the base channel lineup'],
      ['Selección Mexicana', 'Rarely called out specifically', 'Covered as its own line item'],
      ['Mexican regional & entertainment channels', 'Thin, or folded into a broader "Latino" catalog', 'Listed by name on the Setup Guide'],
      ['Watching from the US', 'An afterthought', 'A stated use case — see below'],
    ]
  )}
  <p style="margin-top:16px;">None of that comes at the expense of the English-language and international catalog — it sits alongside it, on the same login, on every plan.</p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'iptv para mexicanos en usa', title: 'For households and fans watching from outside Mexico', left: true })}
  <div class="grid grid-2">
    <div>
      <p>A meaningful share of the people who actually need this live in the United States, not in Mexico — a household that moved north and kept paying for cable back home just to see novelas over a shaky phone call, or a fan who missed the last three Selección qualifiers because nothing local carried them. None of that requires a Mexican address or a Mexican cable box; it requires an internet connection and a login.</p>
      <p>The <a href="/guides/how-to-choose-an-iptv-subscription/">guide on watching from outside Mexico</a> walks through what changes versus a Mexican cable subscription and how to plan around US kickoff times for a Liga MX matchday.</p>
    </div>
    <div class="card">
      <h3>What stays the same, watching from the US</h3>
      <p>Liga MX, Selección Mexicana, novelas, and Mexican news play on the identical login whether the household is in Guadalajara or in Houston. The only real variable is the kickoff time on your own clock, not what is actually reachable on the lineup.</p>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">Full device-by-device Setup Guide →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting in', title: 'From reading this page to watching Liga MX' })}
  ${stepsList([
    { title: 'Pick a plan length, or start with the trial', text: 'Every plan reaches the same Mexican and international lineup — the trial is there specifically to check that before committing to months of it.' },
    { title: 'Send over an email address', text: 'That is the only detail needed to get things moving.' },
    { title: 'Watch for the activation email', text: 'Login details typically arrive within a few hours.' },
    { title: 'Load it into a player app and find the Liga MX schedule', text: 'The Setup Guide covers getting the login working on whatever device you actually watch on.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Subscribe to IPTV Mexico' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">See the full plan breakdown →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Check it before a full plan', title: trial.label, left: true })}
      <p>For $${trial.price.toFixed(2)}, ${trial.duration} on the same lineup a paying subscriber gets — long enough to pull up a Liga MX match, start a novela, and confirm a Mexican news channel is genuinely there before paying for a longer term.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>The full Mexican and international lineup, nothing held back</li>
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
    { title: 'You grew up on Liga MX and Selección matchdays', text: 'Missing a torneo because nothing local carries it stops being the default once the login is set up.' },
    { title: 'You moved abroad but your family still watches novelas together', text: 'A shared login means the same shows stay part of the household, wherever everyone actually lives now.' },
    { title: 'A previous provider buried Mexican channels in a generic "Latino" tier', text: 'This one names Liga MX, Selección, and the Mexican channel lineup directly instead of folding them into a broader label.' },
    { title: 'You still want the English catalog too', text: 'Nothing here trades one for the other — both sit on the same login.' },
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
  ${sectionHead({ eyebrow: 'Before you decide', title: 'A few more pages worth a look' })}
  <div class="grid grid-3">
    ${[
      { title: 'Every plan, one price each', text: 'Four terms, visible now, no signup required to see them.', href: '/pricing/' },
      { title: 'A dollar settles it faster than reading', text: 'Check the Liga MX and novela lineup against your own list first.', href: '/trial/' },
      { title: 'Setup steps for every device', text: 'Smart TV, phone, streaming box — each gets its own walkthrough.', href: '/setup-guide/' },
      { title: 'Refund terms, posted in advance', text: 'Every condition written out, not assembled after a complaint.', href: '/refund-policy/' },
      { title: 'What actually gets collected, and why', text: 'A plain answer on data handling, on the Privacy Policy.', href: '/privacy-policy/' },
      { title: 'What "40,000+ channels" is actually made of', text: 'The Mexican lineup broken down by category, not left as one number.', href: '/guides/what-is-iptv/' },
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
  title: 'See the Liga MX and novela lineup for yourself',
  lead: 'Line up the plans side by side, or put a dollar toward the trial and check it on your own screen first.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
