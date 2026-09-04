import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'privacy-policy',
  title: 'Privacy Policy | IPTV Mexico',
  description: `Read the ${site.brand} privacy policy: what information is collected when you order, start a trial, or contact support, and how it is used and protected.`,
  noindex: false,
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Privacy Policy</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> This page describes our general data practices in plain terms. It is a general-purpose template, not reviewed by a lawyer for any specific jurisdiction — get independent legal review before relying on it for compliance.</p>', 'brand')}

    <h2>What we collect</h2>
    <p>Whatever you provide directly — name, email address, and similar contact details — when submitting the contact form, requesting the 24-hour trial, or placing a subscription order. We do not collect more than is reasonably needed to respond to that request or deliver the service.</p>

    <h2>How it's used</h2>
    <p>To respond to your message, send trial or subscription activation details, and provide support. We never sell personal information to third parties.</p>

    <h2>Email delivery</h2>
    <p>Contact form, trial, and order submissions route through Resend, a third-party transactional email service, to reach our support inbox and, where relevant, to deliver activation details back to you.</p>

    <h2>Payments</h2>
    <p>Payments for subscriptions and trials go through our designated payment provider. We never store full payment card details on our own systems.</p>

    <h2>Cookies and analytics</h2>
    <p>Standard analytics tools — Google Analytics and Google Search Console among them — may be used to understand site usage and improve it. These can rely on cookies or similar technology, and cookie behavior is controllable through your browser settings.</p>

    <h2>How long records are kept</h2>
    <p>Contact form and support communications are retained only as long as reasonably necessary for support purposes and accurate record-keeping.</p>

    <h2>Who sees it</h2>
    <p>Only the service providers that help operate the site and service — the email delivery and payment providers, specifically — and only to the extent their job actually requires it.</p>

    <h2>Your options</h2>
    <p>Reach out any time to ask what we hold on file about you, or to request deletion, subject to any legal or operational reason to retain particular records.</p>

    <h2>Security</h2>
    <p>We take reasonable steps to protect what you share with us, including HTTPS encryption on site submissions. No transmission or storage method is ever completely secure, and absolute security is not something anyone can guarantee.</p>

    <h2>Children</h2>
    <p>This service is not directed at children, and we do not knowingly collect personal information from them.</p>

    <h2>Changes</h2>
    <p>This policy is updated periodically. The "last updated" date above marks the most recent revision.</p>

    <h2>Questions</h2>
    <p>Send them through the <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
