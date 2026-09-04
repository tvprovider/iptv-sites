import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV?', text: 'Streaming TV over the internet, explained without the technical detour.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'The four factors that decide whether 4K actually looks different from HD.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'What sustained bandwidth 4K really demands, beyond the headline number.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'The five things worth checking before trusting any provider with a subscription.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'Canada IPTV — Guides & Resources',
  description: 'How IPTV actually works, what 4K really requires, and how to evaluate a subscription — four straightforward guides.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Everything worth knowing before you subscribe',
  lead: 'Four straightforward guides on how streaming actually works and what to look for in a provider before you commit.',
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
