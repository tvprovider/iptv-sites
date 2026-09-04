import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV?', text: 'How streaming TV over the internet actually differs from cable or satellite, in plain terms.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'What genuinely separates the two resolutions, and the four things that decide what you see.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'The real sustained speed 4K needs, not just a marketing minimum.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'The checklist worth running before trusting any provider, America IPTV included.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'America IPTV — Guides & Resources',
  description: 'How IPTV works, what 4K actually needs, and how to evaluate a subscription before paying for one — four plain-language guides.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'The background info worth having first',
  lead: 'Four guides on how streaming actually works, what resolution genuinely depends on, and what separates a trustworthy provider from a risky one.',
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
