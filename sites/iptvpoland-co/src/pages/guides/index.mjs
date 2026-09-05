import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV Poland? What\'s Actually Included', text: 'A category-by-category answer, not a channel-count headline — Ekstraklasa, news, regional stations, entertainment.', href: '/guides/what-is-iptv/' },
  { title: 'Watching Ekstraklasa & Polish TV From Outside Poland', text: 'The VPN question settled, kickoff times by country, and a checklist for spotting a provider that\'s just guessing.', href: '/guides/how-to-choose-an-iptv-subscription/' },
  { title: '4K vs. HD Streaming', text: 'Why a resolution label on a channel listing tells you less than it sounds like it does.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for Streaming', text: 'The bandwidth floor that actually matters, and a way to test your own line that isn\'t just marketing.', href: '/guides/internet-requirements-for-4k-streaming/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Poland Guides — Ekstraklasa & Streaming',
  description: 'Guides on what Polish-channel IPTV actually includes, watching Ekstraklasa and Polish TV from outside Poland, and what determines streaming quality.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'The background reading, kept short on purpose',
  lead: 'Four short answers to the questions that come up right before someone subscribes — what the Polish lineup is actually made of, life abroad without Polish cable, and what really governs picture quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<path d="M270 252 C 254 246 244 248 240 252 L240 286 C244 282 254 280 270 286 C286 280 296 282 300 286 L300 252 C296 248 286 246 270 252 Z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="252" x2="270" y2="286" stroke="#ffffff" stroke-width="3"/>', 'IPTV Poland guides illustration'),
})}
${section({
  html: `
  ${sectionHead({ eyebrow: 'Start here', title: 'Four short reads, pick whichever applies' })}
  <div class="grid grid-2">
    ${guides
      .map(
        (g) => `
    <div class="card">
      <h3><a href="${g.href}">${esc(g.title)}</a></h3>
      <p>${esc(g.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}
${ctaBanner({ title: 'Or just go watch it', lead: 'A dollar and a day settles most of what these guides are trying to explain.' })}
`,
};
