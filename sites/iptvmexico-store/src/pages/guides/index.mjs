import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV Mexico? What\'s Actually Included', text: 'Liga MX, Selección Mexicana, regional channels, and novelas, broken down category by category.', href: '/guides/what-is-iptv/' },
  { title: 'Watching Liga MX & Mexican TV From Outside Mexico', text: 'What changes vs. a Mexican cable subscription, kickoff-time planning, and how to pick a real provider.', href: '/guides/how-to-choose-an-iptv-subscription/' },
  { title: '4K vs. HD Streaming', text: 'Two channels can share a "4K" label and still look nothing alike — here\'s why.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for Streaming', text: 'A plain speed floor for each resolution, and how to test your own connection honestly.', href: '/guides/internet-requirements-for-4k-streaming/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Mexico Guides — Liga MX & Streaming',
  description: 'Guides on what Mexican-channel IPTV actually includes, watching Liga MX and Mexican TV from outside Mexico, and what determines streaming quality.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'A few things worth understanding before you subscribe',
  lead: 'What actually sits behind a Mexican-channel lineup, what changes once you\'re watching from north of the border, and what decides picture quality once you\'re logged in.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<path d="M270 252 C 254 246 244 248 240 252 L240 286 C244 282 254 280 270 286 C286 280 296 282 300 286 L300 252 C296 248 286 246 270 252 Z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="252" x2="270" y2="286" stroke="#ffffff" stroke-width="3"/>', 'IPTV Mexico guides illustration'),
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
${ctaBanner({ title: 'Or skip the reading and just watch', lead: 'One dollar and 24 hours answers most of what these guides cover.' })}
`,
};
