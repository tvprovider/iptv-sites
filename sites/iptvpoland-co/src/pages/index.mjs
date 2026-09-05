import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Poland — Ekstraklasa Live & Polish TV, $14.99',
  description: 'Ekstraklasa live, Polish news, and Polish TV anywhere you live, plus 40,000+ channels and 180,000+ VOD titles. Plans from $14.99, $1 trial.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Poland',
  h1: 'Ekstraklasa live. Polish news. Polish TV. Wherever you actually live.',
  lead: `40,000+ live channels, ${catalog.vods} on-demand titles, and every Ekstraklasa matchday, streamed straight to whatever screen you already own — the full English and international catalog rides along on the same login. See the price, start the trial, done.`,
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start $1 Trial', href: '/trial/' },
  dark: true,
  trustItems: ['Ekstraklasa, every matchday', '40,000+ live channels', `${catalog.vods} VOD titles`, 'A real $1 trial before you commit'],
})}

${marquee(['Ekstraklasa na Żywo', 'Polska Telewizja', 'Kanały Polskie', 'Polish News', 'Polish Entertainment', 'English & International', '40,000+ Channels', '180,000+ VOD'])}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Skip to the number', title: 'Four terms, the same Ekstraklasa and Polish lineup on every one' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Full plan breakdown →</a> &nbsp;·&nbsp; <a href="/trial/">Or try it for $1 first →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'polska telewizja iptv', title: 'Built around Poland specifically, not folded into "Eastern Europe"', left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M252 268 l12 12 l24 -24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>', 'Ekstraklasa and Polish channel coverage illustration')}</div>
    <div>
      <p>Search for Polish IPTV and a lot of what comes back is a regional bundle — a scattering of Central and Eastern European channels with Poland as one line among many, football described only as "European sports." This site is built the other way around: Ekstraklasa named directly, Polish news and regional channels named directly, sitting next to the same ${catalog.liveChannels} live channels and ${catalog.vods} VOD titles every plan already includes.</p>
      <ul class="check-list">
        <li>Ekstraklasa matches, part of the standard channel lineup</li>
        <li>Polish news and regional stations, not a vague "local" tier</li>
        <li>Polish entertainment and on-demand titles, named on the <a href="/setup-guide/">Setup Guide</a></li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'najlepsze iptv polska', title: 'What a vague "Eastern European" package leaves out', left: true })}
  ${comparisonTable(
    ['', 'A generic regional package', 'IPTV Poland'],
    [
      ['Ekstraklasa', 'Buried under "European football," easy to miss', 'Named directly, standard on every plan'],
      ['Polish news & regional stations', 'Thin, or lumped into one "local" tier', 'Listed individually on the Setup Guide'],
      ['Watching outside Poland', 'Rarely addressed', 'A stated use case — see below'],
      ['English & international catalog', 'Sometimes trimmed to make room', 'Full catalog, same login, no trade-off'],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'iptv dla polaków za granicą', title: 'For Polish households and fans watching from outside Poland', left: true })}
  <div class="grid grid-2">
    <div>
      <p>A large part of who actually searches for this lives in the UK, the US, Germany, Ireland, or the Netherlands — not in Poland. A household that moved abroad and let the Polish cable subscription lapse, or a fan who's missed three Ekstraklasa matchdays in a row because nothing local carries them. None of that needs a Polish address or a Polish set-top box, and it doesn't need a VPN either — the channels stream directly to your login, wherever you are.</p>
      <p>The <a href="/guides/how-to-choose-an-iptv-subscription/">guide on watching from outside Poland</a> covers exactly what changes versus Polish cable, why a VPN isn't part of the picture here, and how kickoff times actually line up once you're abroad.</p>
    </div>
    <div class="card">
      <h3>Same login, different clock (sometimes not even that)</h3>
      <p>Ekstraklasa, Polish news, and Polish entertainment play identically whether the device is in Kraków or in Manchester. Germany and the Netherlands even share Poland's own time zone — the only variable that shifts at all is the kickoff time shown on your own clock, not what's actually reachable on the lineup.</p>
    </div>
  </div>`,
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
  ${sectionHead({ eyebrow: 'Getting in', title: 'How this actually goes, start to finish' })}
  ${stepsList([
    { title: 'Choose a term, or test it first for a dollar', text: 'All four plans open the same door — the trial just lets you look through it before paying for months at once.' },
    { title: 'Give it an email address', text: 'Nothing more is required to set either the order form or the trial form in motion.' },
    { title: 'Wait for the login to land', text: 'It\'s usually a matter of hours, not days.' },
    { title: 'Drop the login into a player app and pull up Ekstraklasa', text: 'The Setup Guide has the exact steps for whichever device you\'re actually going to watch on.' },
  ])}`,
})}

${section({
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Cheaper than guessing wrong', title: trial.label, left: true })}
      <p>$${trial.price.toFixed(2)} gets you ${trial.duration} inside the identical catalog a paying subscriber logs into — long enough to pull up an actual Ekstraklasa fixture and a Polish news channel and judge for yourself before any longer commitment.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Every channel a subscriber gets, nothing held in reserve</li>
        <li>4K where the source and your setup both support it</li>
        <li>One device, running continuously for the full window</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'This is probably for you if', title: 'Who actually ends up subscribing here' })}
  ${featureGrid([
    { title: 'Saturdays used to revolve around Ekstraklasa', text: 'Once the login\'s in, a fixture not being carried locally stops being something you have to work around.' },
    { title: 'You\'re abroad but Polish TV never stopped mattering', text: 'One login puts it back within reach, regardless of which country the household lives in now.' },
    { title: 'A past provider treated Poland as an afterthought', text: 'This one puts Ekstraklasa and the Polish lineup front and center instead of folding them into a wider regional label.' },
    { title: 'The English-language side still needs to be there too', text: 'It is — the same login covers both, no trade-off required.' },
  ], 4)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">Read the rest of the FAQ →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Before you decide', title: 'A handful of other pages worth a glance' })}
  <div class="grid grid-3">
    ${[
      { title: 'Four plans, laid out with real numbers', text: 'No form to fill in first — every price is already sitting on the page.', href: '/pricing/' },
      { title: 'Cheaper to test than to keep reading', text: 'A dollar against your own checklist beats another paragraph about the lineup.', href: '/trial/' },
      { title: 'A walkthrough for every device on the list', text: 'Smart TV, phone, streaming box — none of them get skipped.', href: '/setup-guide/' },
      { title: 'The refund terms, posted before you need them', text: 'Every condition spelled out ahead of time, not improvised after a complaint.', href: '/refund-policy/' },
      { title: 'What gets collected, and why', text: 'Data handling explained plainly on the Privacy Policy page.', href: '/privacy-policy/' },
      { title: 'The 40,000+ figure, actually broken down', text: 'The Polish side split into categories instead of left as one round number.', href: '/guides/what-is-iptv/' },
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
  title: 'Put the Ekstraklasa lineup in front of your own eyes',
  lead: 'Compare the four plans directly, or spend a dollar on the trial and settle it on your own screen.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
