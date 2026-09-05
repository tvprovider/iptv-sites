import {
  hero, section, sectionHead, breadcrumbs, breadcrumbSchema, ctaBanner, esc, iconMedia,
} from '../../lib/render.mjs';

const guides = [
  { title: 'What Is IPTV? What "Premium" Actually Includes', text: 'Live channels, VOD, and the difference between a maintained catalog and an inflated headline number.', href: '/guides/what-is-iptv/' },
  { title: 'How to Choose an IPTV Subscription', text: 'A checkable buyer\'s checklist — support, catalog consistency, pricing — for spotting a well-run provider.', href: '/guides/how-to-choose-an-iptv-subscription/' },
  { title: '4K vs. HD Streaming', text: 'What a resolution tag on a channel listing can and can\'t actually promise you.', href: '/guides/4k-vs-hd-streaming/' },
  { title: 'Internet Requirements for Streaming', text: 'Why a fast speed test doesn\'t guarantee a smooth stream, and how to test your own connection properly.', href: '/guides/internet-requirements-for-4k-streaming/' },
];

export default {
  slug: 'guides',
  title: 'IPTV Prime Guides — Streaming & Buying Advice',
  description: 'Guides on what a premium IPTV catalog actually includes, how to choose a real IPTV subscription, and what determines streaming quality.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides' }])}
${hero({
  eyebrow: 'Guides',
  h1: 'Four pages, written to be skimmed in a few minutes each',
  lead: 'Not a blog — a small set of answers to the specific things worth checking before paying for a subscription, from what a real catalog looks like to what actually decides picture quality.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
  media: iconMedia('<path d="M270 252 C 254 246 244 248 240 252 L240 286 C244 282 254 280 270 286 C286 280 296 282 300 286 L300 252 C296 248 286 246 270 252 Z" fill="none" stroke="#ffffff" stroke-width="3"/><line x1="270" y1="252" x2="270" y2="286" stroke="#ffffff" stroke-width="3"/>', 'IPTV Prime guides illustration'),
})}
${section({
  html: `
  ${sectionHead({ eyebrow: 'Pick one', title: 'Whichever question is actually on your mind' })}
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
${ctaBanner({ title: 'Or skip the reading entirely', lead: 'A dollar and a day on the actual catalog answers most of this faster.' })}
`,
};
