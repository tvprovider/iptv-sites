import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const updated = 'September 2, 2026';

export default {
  slug: 'refund-policy',
  title: 'Refund Policy | IPTV Xtream Pro',
  description: 'Read the IPTV Xtream Pro refund policy covering the 24-hour trial and 1, 3, 6, and 12-month subscription plans.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Refund Policy</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> This policy is a general template covering standard scenarios. It has not been reviewed by a lawyer for your jurisdiction — we recommend independent legal review, and recommend confirming exact refund windows against your payment provider\'s own terms before launch.</p>', 'brand')}

    <h2>Our approach to refunds</h2>
    <p>We want subscribing to feel low-risk. This policy explains when a refund is available for the ${trial.label} and our subscription plans (${plans.map((p) => p.label).join(', ')}).</p>

    <h2>24-hour trial</h2>
    <p>The ${trial.label} costs $${trial.price.toFixed(2)} and is intended purely as a low-cost way to test the service. Because the fee is nominal and the access window is short, trial charges are generally non-refundable once activation details have been sent to you. If you were unable to access the trial at all due to an error on our part, contact support and we will make it right.</p>

    <h2>Subscription plans</h2>
    <p>If you are unable to access the service due to a fault on our end — for example, activation details were never sent, or the account was not properly provisioned — contact support within 7 days of your purchase and we will either resolve the issue or provide a refund.</p>
    <p>Refund requests based on general dissatisfaction with streaming quality will be reviewed case by case. Because streaming quality depends partly on your own internet connection and device, we ask that you first work with our support team to rule out setup issues before requesting a refund on this basis.</p>

    <h2>What isn't covered</h2>
    <ul>
      <li>Change of mind after successfully using the service for a meaningful portion of your billing period</li>
      <li>Issues caused by your own internet connection, device, or third-party player app</li>
      <li>Sharing your login with others in a way that violates our Terms of Use</li>
    </ul>

    <h2>How to request a refund</h2>
    <p>Contact us through our <a href="/contact/">Contact page</a> with your order details and a description of the issue. We aim to respond to every refund request promptly.</p>

    <h2>Processing time</h2>
    <p>Approved refunds are returned to your original payment method. Processing time depends on your payment provider and can typically take several business days to appear.</p>

    <h2>Changes to this policy</h2>
    <p>We may update this policy from time to time. The "last updated" date at the top of this page reflects the most recent revision.</p>

    <h2>Related pages</h2>
    <p>See our <a href="/pricing/">Pricing</a> and <a href="/trial/">Trial</a> pages for current plan details, or our <a href="/terms-of-use/">Terms of Use</a> for the full terms governing your subscription.</p>
  </div>`,
})}
`,
};
