import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, esc, faqSchema, marquee, comparisonTable, iconMedia,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, catalog } from '../data/business.mjs';

export default {
  slug: '',
  title: 'IPTV Prime — Premium IPTV Service From $14.99',
  description: 'IPTV Prime: 40,000+ live channels, 180,000+ VOD titles, real human support, and the identical catalog on every plan. Plans from $14.99, $1 trial.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: 'IPTV Prime',
  h1: 'Premium isn’t a bigger number on the page. It’s what stays the same no matter which plan you pick.',
  lead: `${catalog.liveChannels} live channels and ${catalog.vods} VOD titles, the same fast reply from a real person when something goes wrong, and no version of the catalog that gets quietly thinner because you chose the cheaper plan. See the price, run the trial, decide for yourself.`,
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start $1 Trial', href: '/trial/' },
  dark: true,
  trustItems: ['Real replies, not a support queue', `${catalog.liveChannels} channels on every plan`, `${catalog.vods} VOD titles, no exceptions`, 'A genuine $1 trial before you pay full price'],
})}

${marquee(['Premium IPTV Service', 'Top Rated IPTV Service', 'Best IPTV Subscription', 'IPTV Prime Channels', '40,000+ Live Channels', '180,000+ VOD Titles', 'Premium IPTV Streaming', 'Real Human Support'])}

${section({
  id: 'plans',
  html: `
  ${sectionHead({ eyebrow: 'Skip to the number', title: 'Four plan lengths. One catalog, unchanged across every one of them.' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Full pricing breakdown →</a> &nbsp;·&nbsp; <a href="/trial/">Or test it for $1 first →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What "premium" is actually pointing at', title: 'Not a marketing word — three specific operating choices', left: true })}
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<path d="M252 268 l12 12 l24 -24" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>', 'Illustration representing consistent service quality across plans')}</div>
    <div>
      <p>Plenty of IPTV listings reach for "the best," "the top rated," "premium" — words that cost nothing to print and describe nothing specific. Strip that language away from this site and three concrete things are actually being claimed: a message to support gets read and answered by a person, not routed through a queue; the $14.99 plan and the $79.99 plan both open the identical channel and VOD catalog; and the price on the Pricing page is the price that gets charged, with nothing added afterward.</p>
      <ul class="check-list">
        <li>Support messages worked by a person, in the order they arrive</li>
        <li>Every plan length reaches the same ${catalog.liveChannels}-channel, ${catalog.vods}-title catalog</li>
        <li>Pricing posted in the open — see it laid out on <a href="/pricing/">Pricing</a></li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'best iptv subscription', title: 'What a vague "premium" listing tends to leave unsaid', left: true })}
  ${comparisonTable(
    ['', 'A typical IPTV reseller', 'IPTV Prime'],
    [
      ['Support', 'A ticket queue, cleared in whatever order it happens to empty', 'A person reads the message and replies — see the Contact page'],
      ['Catalog by plan length', 'Sometimes trimmed or reshuffled on the cheaper tier', `Identical ${catalog.liveChannels} channels and ${catalog.vods} VOD titles on all four plans`],
      ['Pricing', 'A number that only appears after a signup form', 'All four prices sit openly on the Pricing page, no form needed'],
      ['Proving the claims', 'Take the listing at its word', `A $${trial.price.toFixed(2)}, ${trial.duration} trial on the exact catalog a subscriber gets`],
    ]
  )}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">Full device-by-device Setup Guide →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'How this actually goes, from first click to first channel' })}
  ${stepsList([
    { title: 'Pick a plan, or test it for a dollar first', text: 'All four lengths open the identical catalog — the trial just lets you confirm that before paying for months at once.' },
    { title: 'Give it an email address', text: 'That’s the only thing either the order form or the trial form actually requires.' },
    { title: 'Watch for the activation email', text: 'Typically a matter of hours, not days, once payment or the trial request goes through.' },
    { title: 'Drop the login into a player app', text: 'Whichever device you\'ll actually be watching on, the matching walkthrough sits on the Setup Guide.' },
  ])}`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div class="basics-media">${iconMedia('<circle cx="270" cy="270" r="22" fill="none" stroke="#ffffff" stroke-width="4"/><path d="M270 256 L270 270 L282 278" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>', '24-hour trial illustration')}</div>
    <div>
      ${sectionHead({ eyebrow: 'Cheaper than guessing wrong', title: trial.label, left: true })}
      <p>For $${trial.price.toFixed(2)}, ${trial.duration} of full access — no scaled-down preview. Enough time to message support with something real and clock how quickly a genuine answer lands, well before any longer commitment is on the table.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
      <ul class="check-list">
        <li>Every channel and title a subscriber gets, nothing held back</li>
        <li>Up to 4K where the source and your setup both support it</li>
        <li>One device, running for the full window</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'A rough sketch', title: 'The kind of subscriber this tends to fit' })}
  ${featureGrid([
    { title: 'A previous provider treated the cheap plan as an afterthought', text: 'Here, the plan length only changes the invoice — the catalog behind the login never shrinks to match it.' },
    { title: 'You want an answer, not another superlative', text: 'Every claim on this site ties to something specific — a channel count, a response habit, a posted price — rather than a word like "best" left to carry the weight on its own.' },
    { title: 'You’re comparing more than one provider side by side', text: 'A $1 trial is a cheap way to test the support line and the catalog against whatever else is on your shortlist.' },
    { title: 'Something eventually needs fixing, and you want it fixed fast', text: 'Messages go to a real inbox and get worked in order — no phone tree, no chatbot loop.' },
  ], 4)}`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">Read the rest of the FAQ →</a></p>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Keep digging', title: 'A few more pages to check before committing' })}
  <div class="grid grid-3">
    ${[
      { title: 'Every plan\'s total, no email required', text: 'The four numbers sit right on the page — nothing behind a signup wall.', href: '/pricing/' },
      { title: 'Test the support line for a dollar', text: 'A real question during the trial tells you more than any page of copy could.', href: '/trial/' },
      { title: 'Named steps for every supported device', text: 'From smart TVs to phones to streaming boxes, each one gets its own section.', href: '/setup-guide/' },
      { title: 'A checklist for spotting a well-run provider', text: 'Support responsiveness, catalog consistency, honest pricing — laid out plainly.', href: '/guides/how-to-choose-an-iptv-subscription/' },
      { title: 'Refund conditions, written down first', text: 'Nothing you\'d only discover by asking support after something goes wrong.', href: '/refund-policy/' },
      { title: 'What information actually gets stored', text: 'Covered directly on the Privacy Policy, without the usual legal fog.', href: '/privacy-policy/' },
    ]
      .map(
        (t) => `
    <div class="card">
      <h3><a href="${t.href}">${esc(t.title)}</a></h3>
      <p>${esc(t.text)}</p>
    </div>`
      )
      .join('')}
  </div>`,
})}

${ctaBanner({
  title: 'See whether "premium" holds up on your own screen',
  lead: 'Compare the four plans directly, or put a dollar toward the trial and judge the catalog and the support line yourself.',
  primaryCta: { label: 'View Plans', href: '/pricing/' },
  secondaryCta: { label: 'Start 24-Hour Trial', href: '/trial/' },
})}
`,
};
