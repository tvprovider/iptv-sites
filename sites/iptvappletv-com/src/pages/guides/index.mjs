import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV?', text: 'Why Apple TV needs a player app at all instead of a built-in channel, in plain terms.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'What actually determines whether Apple TV 4K shows a real 4K picture.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'The sustained speed Apple TV 4K needs for playback that doesn\'t stutter.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'What separates a provider worth trusting on Apple TV from a risky one.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Guides & Resources | IPTV Apple TV',
  description: 'Educational guides on IPTV, 4K streaming on Apple TV, internet requirements, and how to choose an IPTV subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Background reading before you commit to anything',
  lead: 'Plain-language explanations of IPTV, 4K on Apple TV specifically, and how to evaluate a subscription before you buy.',
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
