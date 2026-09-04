import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'terms-of-use',
  title: 'Terms of Use | IPTV List',
  description: 'The terms governing use of the IPTV List subscription service, including accounts, acceptable use, billing, and liability.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Terms of Use</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> This is a general-purpose template, not legal advice drafted for any one jurisdiction. Independent legal review is recommended before treating it as a binding contract.</p>', 'brand')}

    <h2>Agreeing to these terms</h2>
    <p>Using ${site.domain}, or subscribing to the ${site.brand} service, means you accept these Terms of Use. If any part of them does not sit right with you, the service is not for you.</p>

    <h2>What the service actually is</h2>
    <p>${site.brand} is an IPTV subscription: live channels and on-demand content delivered over the internet through compatible third-party player apps, with up to 4K resolution where your plan, device, and the original source all allow it.</p>

    <h2>Accounts and activation</h2>
    <p>Subscribing or starting the trial gets you activation details by email. Keeping those details confidential, and covering whatever happens under them, is on you.</p>

    <h2>Acceptable use</h2>
    <p>The service is for personal, non-commercial viewing. Specifically, do not:</p>
    <ul>
      <li>Share login credentials with anyone outside your household</li>
      <li>Resell, redistribute, or rebroadcast the service in any form</li>
      <li>Use the service in a way that breaks applicable law</li>
      <li>Try to circumvent, disrupt, or reverse-engineer the underlying infrastructure</li>
    </ul>

    <h2>Billing and plans</h2>
    <p>Prices for every plan sit on the <a href="/pricing/">Pricing page</a> as of the time you order. Nothing renews on its own unless a recurring option was explicitly chosen — picking up a new term after the current one ends is a decision you make each time.</p>

    <h2>The 24-hour trial</h2>
    <p>The trial is a one-time, low-cost window for testing the service before committing further, covered in full on the <a href="/trial/">Trial page</a>.</p>

    <h2>No promise of uninterrupted service</h2>
    <p>Uninterrupted, error-free, or 100% available service is not something we can guarantee. Streaming quality depends on factors outside our control — your internet connection, your device, general network conditions. Nothing here promises "zero buffering" or unlimited access beyond what the Pricing and Trial pages actually state.</p>

    <h2>Termination</h2>
    <p>Accounts found violating these terms — sharing credentials outside a household, attempting resale — may have access suspended or ended.</p>

    <h2>Limitation of liability</h2>
    <p>To the fullest extent the law allows, ${site.brand} carries no liability for indirect, incidental, or consequential damages tied to using, or being unable to use, the service.</p>

    <h2>Changes to these terms</h2>
    <p>These terms get updated periodically. The "last updated" date above marks the most recent revision, and continuing to use the service after a change means the updated version applies to you.</p>

    <h2>Governing law</h2>
    <p>Applicable law in the jurisdiction where the service operates governs these terms, without regard to conflict-of-law rules.</p>

    <h2>Contact</h2>
    <p>Questions about any of this go through the <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
