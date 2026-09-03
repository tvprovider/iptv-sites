import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV?', text: 'A plain-language introduction to how IPTV works and how it differs from cable or satellite.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'The real differences in resolution and quality, and what actually affects what you see.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'The internet speed and connection quality you need for smooth 4K playback.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'What to check before subscribing to any IPTV service, ours or otherwise.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Guides & Resources | Canada IPTV',
  description: 'Educational guides on IPTV, 4K streaming quality, internet requirements, and how to choose an IPTV subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Everything worth knowing before you subscribe',
  lead: 'Plain-language explanations of IPTV, 4K streaming, and how to evaluate a subscription before you buy.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<path d="M270 252 C 254 246 244 248 240 252 L240 286 C244 282 254 280 270 286 C286 280 296 282 300 286 L300 252 C296 248 286 246 270 252 Z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="252" x2="270" y2="286" stroke="#ffffff" stroke-width="3"/>', 'IPTV guides illustration'),
})}
${section({
  html: `
  ${sectionHead({ eyebrow: 'Read next', title: 'Educational guides' })}
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
${ctaBanner({ title: 'Ready to try it yourself?', lead: 'Compare our transparent pricing or start the 24-hour trial.' })}
`,
};
