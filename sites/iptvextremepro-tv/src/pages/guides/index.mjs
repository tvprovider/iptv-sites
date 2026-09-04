import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV?', text: 'A real technical breakdown of M3U versus Xtream Codes, not just a definition.', href: '/guides/what-is-iptv/' },
  { title: '4K vs. HD Streaming', text: 'What actually determines picture quality — hint: it is not your login format.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for 4K Streaming', text: 'The sustained speed a stable stream actually needs, and what quietly eats it.', href: '/guides/internet-requirements-for-4k-streaming/' },
  { title: 'How to Choose an IPTV Subscription', text: 'The server-reliability and login-format checks most comparison guides skip.', href: '/guides/how-to-choose-an-iptv-subscription/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Guides & Resources | IPTV Xtream Pro',
  description: 'Technical guides on IPTV, the Xtream Codes login format, streaming quality, internet requirements, and choosing a reliable IPTV subscription.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'The technical detail other IPTV sites skip',
  lead: 'Real explanations of the login format, streaming quality, and what separates a reliable provider from a risky one.',
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
${ctaBanner({ title: 'Enough reading — see the login in action', lead: 'A dollar and 24 hours settles most of what\'s left to know.' })}
`,
};
