import {
  section, sectionHead, breadcrumbs, breadcrumbSchema, articleSchema, answerBox,
  faqAccordion, faqSchema, ctaBanner, iconMedia,
} from '../../lib/render.mjs';

const faqs = [
  { q: 'Is streaming IPTV legal to use?', a: 'IPTV itself is just a delivery method — nothing about the technology is illegal. Whether a specific stream is legal comes down to licensing of that content, which varies by provider and region, so it\'s worth understanding the rules where you live.' },
  { q: 'Do I need to buy any special hardware?', a: 'No. Any device already capable of running an app — a Smart TV, a streaming box, a phone, or a laptop — is enough, as long as it has an internet connection.' },
];

export default {
  slug: 'guides/what-is-iptv',
  title: 'What Is IPTV? A Plain-Language Guide',
  description: 'IPTV explained simply: what it is, how the technology actually works, and how it differs from cable or satellite TV.',
  jsonld: [
    breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }]),
    articleSchema({ headline: 'What Is IPTV?', description: 'A plain-language guide to IPTV.', path: '/guides/what-is-iptv/', datePublished: '2026-09-02' }),
    faqSchema(faqs),
  ],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Guides', href: '/guides/' }, { label: 'What Is IPTV?' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Educational guide</span>
    <h1>IPTV, explained without the jargon</h1>
    <div class="guide-illustration">${iconMedia('<circle cx="270" cy="270" r="20" fill="none" stroke="#ffffff" stroke-width="3"/><polygon points="263,258 263,282 285,270" fill="#ffffff"/>', 'What is IPTV illustration')}</div>
    ${answerBox('<p><strong>IPTV</strong> stands for Internet Protocol Television — it just means TV content arriving as ordinary internet data instead of through a satellite dish, a cable line, or an antenna. A player app on your device turns that data back into a picture, the same basic idea as any streaming app you already use.</p>')}

    <h2>What's actually happening under the hood</h2>
    <p>Cable and satellite push a dedicated signal down a wire or through the air to a fixed box. IPTV skips that entirely — it breaks the video into packets and routes them over the same internet connection that handles your email or a video call. A player app on your end requests those packets and reassembles them into a live picture.</p>

    <h2>Why that distinction actually matters</h2>
    <p>Cutting out the dedicated signal is what makes IPTV flexible. There's no set-top box wired to a specific address — as long as a device has internet access, it can run the player app and pick up the same subscription, whether that's at home, at a second property, or traveling.</p>

    <h2>What you actually need to get started</h2>
    <ul>
      <li>An internet connection with reasonable, stable speed</li>
      <li>Any device that runs apps — Smart TV, streaming box, phone, or computer</li>
      <li>A player app built to read M3U playlists or Xtream Codes-style logins</li>
      <li>Login details from whichever IPTV provider you're using</li>
    </ul>

    <h2>Live TV and on-demand aren't the same thing</h2>
    <p>A live channel runs on a fixed schedule, exactly like broadcast TV always has. On-demand content sits there until you choose to start it. Most IPTV plans offer both — the balance between the two depends entirely on the specific provider.</p>

    <h2>Does IPTV mean automatic 4K?</h2>
    <p>Not on its own — resolution tracks the original source material, your plan, and what your device can decode, not the delivery method itself. The <a href="/guides/4k-vs-hd-streaming/">4K vs. HD streaming guide</a> goes deeper into that distinction.</p>

    <h2>Trying it yourself</h2>
    <p>The <a href="/trial/">24-hour trial</a> is the cheapest way to see real streaming quality on your own device before paying for a full plan. Once you're ready, the <a href="/setup-guide/">Setup Guide</a> walks through activation for whatever device you're using.</p>
  </div>`,
})}
${section({ bg: 'quiet', html: `${sectionHead({ eyebrow: 'Questions', title: 'Related questions', left: true })}${faqAccordion(faqs)}` })}
${ctaBanner({ title: 'See it running on your own device', lead: 'Start the 24-hour trial, or skip ahead and compare subscription plans.' })}
`,
};
