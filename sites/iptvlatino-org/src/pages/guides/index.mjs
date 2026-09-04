import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV Latino?', text: 'Breaking down what a big channel total is actually made of for Spanish-language and Latin American coverage.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'Why the same "4K" label can describe two noticeably different pictures.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'What a connection needs to hold through a full 90-minute match without dropping.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'A checklist for spotting whether both languages are genuinely covered, not just one.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Latino Guides & Resources',
  description: 'Plain explanations of how IPTV works, what a channel count really covers for Spanish-language content, streaming quality, and internet requirements.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Background reading for households watching in two languages',
  lead: 'How IPTV actually works, what a channel count really tells you about Spanish-language coverage, and what determines picture quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<path d="M270 252 C 254 246 244 248 240 252 L240 286 C244 282 254 280 270 286 C286 280 296 282 300 286 L300 252 C296 248 286 246 270 252 Z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="252" x2="270" y2="286" stroke="#ffffff" stroke-width="3"/>', 'IPTV guides illustration'),
})}
${section({
  html: `
  ${sectionHead({ eyebrow: 'Start here', title: 'Four guides worth a few minutes each' })}
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
${ctaBanner({ title: 'Or skip straight to the lineup', lead: 'A dollar and a day settles most of what\'s left.' })}
`,
};
