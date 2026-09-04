import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'refund-policy',
  title: 'Refund Policy | IPTV Latino',
  description: 'Read the IPTV Latino refund policy covering the 24-hour trial and the 1, 3, 6, and 12-month subscription plans.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Refund Policy</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> This policy is a general template covering standard scenarios. It has not been reviewed by a lawyer for your jurisdiction — independent legal review is recommended, along with confirming exact refund windows against your payment provider\'s own terms before launch.</p>', 'brand')}

    <h2>Our approach</h2>
    <p>Subscribing should feel low-risk. This page explains when a refund is available for the ${trial.label} and for our subscription plans (${plans.map((p) => p.label).join(', ')}).</p>

    <h2>24-hour trial</h2>
    <p>The ${trial.label} costs $${trial.price.toFixed(2)} and exists purely as a low-cost way to check the catalog before committing. Because the fee is nominal and the access window is short, trial charges are generally non-refundable once activation details have been sent. If the trial couldn't be accessed at all due to an error on our part, contact support and we'll make it right.</p>

    <h2>Subscription plans</h2>
    <p>If access is unavailable due to a fault on our end — activation details never sent, or an account not properly provisioned — contact support within 7 days of purchase and we'll either resolve the issue or provide a refund.</p>
    <p>Refund requests based on general dissatisfaction with streaming quality are reviewed case by case. Since streaming quality depends partly on your own internet connection and device, we ask that you work with support first to rule out a setup issue before requesting a refund on this basis.</p>

    <h2>What isn't covered</h2>
    <ul>
      <li>Change of mind after successfully using the service for a meaningful portion of your billing period</li>
      <li>Issues caused by your own internet connection, device, or third-party player app</li>
      <li>Sharing your login in a way that violates our Terms of Use</li>
    </ul>

    <h2>Requesting a refund</h2>
    <p>Reach out through our <a href="/contact/">Contact page</a> with your order details and a description of the issue. We aim to respond to every request promptly.</p>

    <h2>Processing time</h2>
    <p>Approved refunds return to your original payment method. Processing time depends on your payment provider and can typically take several business days to appear.</p>

    <h2>Changes</h2>
    <p>This policy may be updated from time to time. The "last updated" date above reflects the most recent revision.</p>

    <h2>Related pages</h2>
    <p>See our <a href="/pricing/">Pricing</a> and <a href="/trial/">Trial</a> pages for current plan details, or our <a href="/terms-of-use/">Terms of Use</a> for the full terms governing your subscription.</p>
  </div>`,
})}
`,
};
