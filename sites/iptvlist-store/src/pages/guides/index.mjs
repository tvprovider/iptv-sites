import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV? Channel List, Explained', text: 'What an itemized iptv channel list is actually built from, category by category.', href: '/guides/what-is-iptv/' },
  { title: 'How to Verify a Channel List', text: 'A skeptical checklist for confirming a claimed channel count before paying.', href: '/guides/how-to-choose-an-iptv-subscription/' },
  { title: '4K vs. HD Streaming', text: 'Why the same "4K" label on a listing can describe two very different pictures.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for Streaming', text: 'The connection speed a live list actually needs to hold up, by resolution.', href: '/guides/internet-requirements-for-4k-streaming/' },
];

export default {
  slug: 'guides',
  title: 'IPTV List Guides & Resources',
  description: 'Plain explanations of how IPTV works, how to verify a channel list before paying, and what actually determines streaming quality.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Background reading for anyone who checks before they commit',
  lead: 'How IPTV actually works, what a channel count is genuinely made of, and how to tell a real list from a padded one.',
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
${ctaBanner({ title: 'Or skip straight to the list', lead: 'A dollar and a day settles most of what is left to check.' })}
`,
};
