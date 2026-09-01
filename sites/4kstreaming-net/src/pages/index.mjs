import {
  hero, section, sectionHead, featureGrid, deviceGrid, pricingGrid, faqAccordion,
  ctaBanner, stepsList, answerBox, trustGrid, esc, faqSchema,
} from '../lib/render.mjs';
import { plans, trial, devices, coreFaqs, site } from '../data/business.mjs';

const heroMedia = `
<svg viewBox="0 0 560 420" role="img" aria-label="4K Streaming IPTV interface preview">
  <rect width="560" height="420" rx="8" fill="#0d1b2e"/>
  <rect x="24" y="24" width="512" height="40" rx="4" fill="#16233a"/>
  <circle cx="46" cy="44" r="5" fill="#ea2261"/><circle cx="64" cy="44" r="5" fill="#9b6829"/><circle cx="82" cy="44" r="5" fill="#15be53"/>
  <rect x="24" y="84" width="164" height="312" rx="4" fill="#16233a"/>
  ${[0,1,2,3,4,5,6].map((i) => `<rect x="40" y="${104 + i*42}" width="132" height="30" rx="4" fill="${i===1 ? '#533afd' : '#1f2f4a'}"/>`).join('')}
  <rect x="204" y="84" width="332" height="200" rx="6" fill="#111f35"/>
  <polygon points="345,150 345,220 400,185" fill="#533afd"/>
  <rect x="204" y="300" width="332" height="96" rx="6" fill="#16233a"/>
  <rect x="220" y="316" width="120" height="14" rx="3" fill="#2a3c58"/>
  <rect x="220" y="340" width="280" height="10" rx="3" fill="#1f2f4a"/>
  <rect x="220" y="358" width="200" height="10" rx="3" fill="#1f2f4a"/>
  <text x="368" y="365" fill="#7c8aa5" font-family="sans-serif" font-size="11">4K</text>
</svg>`;

export default {
  slug: '',
  title: '4K Streaming IPTV — Premium 4K Live TV Subscription | 4K Streaming',
  description: 'Premium IPTV with live channels in up to 4K, transparent pricing, a $1 24-hour trial, and setup guides for every major device.',
  jsonld: [faqSchema(coreFaqs)],
  body: `
${hero({
  eyebrow: '4K Streaming IPTV',
  h1: 'Premium 4K IPTV streaming, built around clarity and control',
  lead: '4K Streaming IPTV is a subscription streaming service that delivers live channels and on-demand content over the internet in up to 4K resolution, depending on your plan, device, and source content. It replaces a satellite or cable subscription with transparent pricing, a low-cost trial, and real setup support.',
  media: heroMedia,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'The basics', title: 'What is 4K Streaming IPTV?', lead: null, left: true })}
  <div class="grid grid-2" style="align-items:start;">
    ${answerBox(`<p><strong>4K Streaming IPTV</strong> is a subscription-based streaming service that delivers live channels and on-demand content over your internet connection instead of satellite or cable. You subscribe, receive activation details, and watch through a compatible player app on the device of your choice — with support for up to 4K resolution where available.</p>`)}
    <div>
      <p>IPTV stands for Internet Protocol Television. Instead of a dedicated broadcast signal, video is delivered as data over the same connection you already use for browsing and streaming — which is what makes it flexible across so many device types.</p>
      <p>4K Streaming focuses on doing the fundamentals well: clear pricing, a real trial period, and setup documentation that actually matches the product, rather than vague marketing claims.</p>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Why us', title: 'Why choose 4K Streaming?' })}
  ${featureGrid([
    { title: 'Transparent pricing', text: 'Four plan lengths with the exact price shown up front — no hidden fees, no surprise renewals buried in fine print.' },
    { title: 'A real trial', text: `Test the service for ${trial.duration} for $${trial.price.toFixed(2)} before committing to a longer subscription.` },
    { title: 'Setup documentation', text: 'Step-by-step instructions for every supported device, not a generic one-size-fits-all PDF.' },
    { title: 'Multi-device support', text: 'One subscription, usable across Smart TVs, streaming boxes, phones, tablets, and computers.' },
    { title: 'Direct support', text: 'A contact form routed to a real support inbox for setup, billing, and trial questions.' },
    { title: 'Clear policies', text: 'Refund, privacy, and terms pages written to be read, not buried in legal boilerplate.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Streaming quality', title: 'The 4K streaming experience', left: true })}
  <div class="grid grid-2">
    <div>
      <h3>4K vs. HD</h3>
      <p>4K (Ultra HD) delivers roughly four times the pixel detail of standard 1080p HD, which is most noticeable on larger screens and with high-quality source content. Not every channel or piece of content is available in 4K — availability depends on the original broadcast source.</p>
      <h3>What affects your streaming quality</h3>
      <p>Actual picture quality depends on several factors working together: your internet speed and stability, your device's decoding capability, the quality of the original content source, and general network conditions at any given time.</p>
    </div>
    <div>
      <h3>Realistic expectations</h3>
      <p>We don't promise zero buffering or 100% uptime — no internet-delivered streaming service honestly can, since so much depends on factors outside any provider's control. What we do provide is a stable service built on transparent pricing and real support.</p>
      <h3>Recommended setup</h3>
      <p>For the best experience, we recommend a wired or strong Wi-Fi connection with at least 25 Mbps of sustained download speed, and a device released within the last few years for smoother 4K decoding.</p>
    </div>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'What you get', title: 'Features' })}
  ${featureGrid([
    { title: 'Live channel access', text: 'A broad live channel lineup accessible the moment your subscription or trial is activated.' },
    { title: 'Up to 4K resolution', text: 'Stream in up to 4K where your plan, device, and the source content all support it.' },
    { title: 'Cross-device compatibility', text: 'Use the same subscription across Smart TVs, streaming boxes, mobile devices, and computers.' },
    { title: 'Simple activation', text: 'Enter your credentials or playlist URL into a compatible player app and you are ready to watch.' },
    { title: 'Flexible plan lengths', text: 'Choose 1, 3, 6, or 12 months based on how far ahead you want to commit.' },
    { title: 'Responsive support', text: 'Reach our team through the contact form for setup help or billing questions.' },
  ])}
  `,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Compatibility', title: 'Supported devices', left: true })}
  ${deviceGrid(devices)}
  <p style="margin-top:24px;"><a href="/setup-guide/">See the full Setup Guide for device-by-device instructions →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Getting started', title: 'How it works' })}
  ${stepsList([
    { title: 'Choose a plan', text: 'Pick a subscription length on the Pricing page, or start with the 24-hour trial if you want to test first.' },
    { title: 'Submit your information', text: 'Provide your email so we can send your activation details once your order is processed.' },
    { title: 'Receive activation details', text: 'You will receive the credentials or playlist information needed to start streaming.' },
    { title: 'Configure your device', text: 'Follow our Setup Guide to install a compatible player app and enter your details.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Plans', title: 'Pricing' })}
  ${pricingGrid(plans)}
  <p class="text-center" style="margin-top:20px;"><a href="/pricing/">Compare full plan details on the Pricing page →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  <div class="grid grid-2" style="align-items:center;">
    <div>
      ${sectionHead({ eyebrow: 'Try before you subscribe', title: trial.label, left: true })}
      <p>Test streaming quality, channel availability, and device compatibility for ${trial.duration} before committing to a longer plan — for a nominal $${trial.price.toFixed(2)}.</p>
      <a class="btn btn-primary btn-lg" href="/trial/">Start 24-Hour Trial</a>
    </div>
    <div class="card">
      <h3>What's included</h3>
      <ul style="padding-left:20px;color:var(--text-soft);">
        <li>Full access to the live channel lineup for ${trial.duration}</li>
        <li>Up to 4K resolution where available</li>
        <li>Access on one device of your choice</li>
      </ul>
    </div>
  </div>`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Setup', title: 'A setup experience that respects your time', left: true })}
  <div class="grid grid-2">
    <p>Once you have your activation details, setup usually takes a few minutes: install a compatible player app, enter your credentials or playlist URL, and start watching. Our Setup Guide covers the exact steps for every supported device.</p>
    <p><a class="btn btn-ghost" href="/setup-guide/">Read the Setup Guide →</a></p>
  </div>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Who it fits', title: 'Who is 4K Streaming IPTV for?' })}
  ${featureGrid([
    { title: 'Cord-cutters', text: 'Viewers who want live channels without a traditional satellite or cable contract.' },
    { title: 'Multi-device households', text: 'People who want one subscription usable across several devices and rooms.' },
    { title: 'Streaming quality-conscious viewers', text: 'Viewers with 4K-capable displays who want higher-resolution content where available.' },
    { title: 'Renters and movers', text: 'Anyone who wants a TV solution that isn’t tied to a fixed cable installation.' },
  ], 4)}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Questions', title: 'Frequently asked questions', left: true })}
  ${faqAccordion(coreFaqs.slice(0, 4))}
  <p style="margin-top:20px;"><a href="/faq/">See the full FAQ →</a></p>`,
})}

${section({
  bg: 'quiet',
  html: `
  ${sectionHead({ eyebrow: 'Confidence', title: 'Trust & transparency' })}
  ${trustGrid([
    { title: 'Transparent pricing', text: 'Every plan price is listed in full on our Pricing page — nothing hidden until checkout.' },
    { title: 'Real support', text: 'A contact form that reaches an actual person, not an automated dead end.' },
    { title: 'Setup documentation', text: 'Public, detailed setup instructions you can read before you subscribe.' },
    { title: 'Refund Policy', text: 'Clear terms for when and how refunds apply. Read the full policy anytime.' },
    { title: 'Privacy Policy', text: 'A plain-language explanation of what information we collect and why.' },
    { title: 'Terms of Use', text: 'The rules of using the service, written to be understood, not just legally defensible.' },
  ])}`,
})}

${section({
  html: `
  ${sectionHead({ eyebrow: 'Learn more', title: 'Helpful resources', left: true })}
  ${featureGrid([
    { title: 'Setup Guide', text: 'Device-by-device instructions for getting connected.' },
    { title: 'Full FAQ', text: 'Answers to the most common questions about the service.' },
    { title: 'What Is IPTV?', text: 'A plain-language introduction to how IPTV works.' },
    { title: '4K vs HD Streaming', text: 'Understand the real differences in resolution and quality.' },
  ], 4)}`,
})}

${ctaBanner({
  title: 'Ready to start streaming in 4K?',
  lead: 'Compare plans or test the service first with a low-cost 24-hour trial.',
})}
`,
};
