import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { plans, trial, site } from '../data/business.mjs';

const updated = 'September 5, 2026';

export default {
  slug: 'refund-policy',
  title: 'Refund Policy | IPTV Poland',
  description: `Read the ${site.brand} refund policy, covering the 24-hour trial and the 1, 3, 6, and 12-month subscription plans, and what is and isn't covered.`,
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

    <h2>Our approach to refunds</h2>
    <p>Trying this out shouldn't feel risky. This page sets out plainly when a refund applies to the ${trial.label} and to the subscription plans (${plans.map((p) => p.label).join(', ')}).</p>

    <h2>24-hour trial</h2>
    <p>The ${trial.label} costs $${trial.price.toFixed(2)} and exists specifically as a low-cost way to check the Polish and international lineup before committing further. Given the nominal fee and short window, trial charges are generally non-refundable once activation details have gone out. If the trial genuinely couldn't be accessed because of an error on our end, contact support and it will be made right.</p>

    <h2>Subscription plans</h2>
    <p>Access that's unavailable due to a fault on our end — activation details never sent, an account not properly provisioned — will be resolved or refunded if support hears about it within 7 days of purchase.</p>
    <p>Requests based on general dissatisfaction with streaming quality are reviewed case by case. Because quality depends partly on your own connection and device, we ask that you work with support first to rule out a setup issue before pursuing a refund on this basis.</p>

    <h2>What isn't covered</h2>
    <ul>
      <li>A change of mind after meaningfully using the service through a billing period</li>
      <li>Problems traced to your own internet connection, device, or third-party player app</li>
      <li>Sharing a login in a way that violates the Terms of Use</li>
    </ul>

    <h2>How to request a refund</h2>
    <p>Reach out through the <a href="/contact/">Contact page</a> with your order details and a description of the issue. Every request gets a prompt response.</p>

    <h2>Processing time</h2>
    <p>Approved refunds return to the original payment method. How long that takes depends on the payment provider, typically several business days.</p>

    <h2>Changes to this policy</h2>
    <p>This policy is updated periodically. The "last updated" date above marks the most recent revision.</p>

    <h2>Related pages</h2>
    <p>See the <a href="/pricing/">Pricing</a> and <a href="/trial/">Trial</a> pages for current plan details, or the <a href="/terms-of-use/">Terms of Use</a> for the full terms governing a subscription.</p>
  </div>`,
})}
`,
};
