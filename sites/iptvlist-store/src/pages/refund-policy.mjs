import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { plans, trial } from '../data/business.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'refund-policy',
  title: 'Refund Policy | IPTV List',
  description: 'Read the IPTV List refund policy covering the 24-hour trial and the 1, 3, 6, and 12-month subscription plans.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Refund Policy' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Refund Policy</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox(`<p><strong>Note:</strong> This is a general template covering standard scenarios, not reviewed by a lawyer for any specific jurisdiction. Get independent legal review, and confirm exact refund windows against your payment provider's own terms, before relying on it.</p>`, 'brand')}

    <h2>The approach here</h2>
    <p>Subscribing should feel low-risk. This page states plainly when a refund applies to the ${trial.label} and to the subscription plans (${plans.map((p) => p.label).join(', ')}).</p>

    <h2>24-hour trial</h2>
    <p>The ${trial.label} runs $${trial.price.toFixed(2)} and exists specifically as a cheap way to check the list before committing further. Given the nominal fee and short window, trial charges are generally non-refundable once activation details go out. If the trial genuinely could not be accessed due to an error on our end, contact support and it gets made right.</p>

    <h2>Subscription plans</h2>
    <p>Access unavailable due to a fault on our end — activation details never sent, an account not properly provisioned — gets resolved or refunded if support hears about it within 7 days of purchase.</p>
    <p>Requests based on general dissatisfaction with streaming quality get reviewed case by case. Since quality depends partly on your own connection and device, working with support first to rule out a setup issue is expected before a refund on this basis.</p>

    <h2>What is not covered</h2>
    <ul>
      <li>A change of mind after meaningfully using the service through a billing period</li>
      <li>Problems traced to your own internet connection, device, or third-party player app</li>
      <li>Sharing a login in a way that violates the Terms of Use</li>
    </ul>

    <h2>Requesting a refund</h2>
    <p>Reach out through the <a href="/contact/">Contact page</a> with order details and a description of the issue. Every request gets a prompt response.</p>

    <h2>Processing time</h2>
    <p>Approved refunds return to the original payment method. How long that takes depends on the payment provider, typically several business days.</p>

    <h2>Changes</h2>
    <p>This policy gets updated periodically. The "last updated" date above marks the most recent revision.</p>

    <h2>Related pages</h2>
    <p>See the <a href="/pricing/">Pricing</a> and <a href="/trial/">Trial</a> pages for current plan details, or the <a href="/terms-of-use/">Terms of Use</a> for the full terms governing a subscription.</p>
  </div>`,
})}
`,
};
