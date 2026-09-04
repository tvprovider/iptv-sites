import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'privacy-policy',
  title: 'Privacy Policy | IPTV Latino',
  description: 'Read the IPTV Latino privacy policy covering what information is collected, why it is collected, and how it is used and protected.',
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
    ${alertBox('<p><strong>Note:</strong> This policy describes our general data practices in plain language. It is a general template and has not been reviewed by a lawyer for your specific jurisdiction — independent legal review is recommended before relying on it for compliance purposes.</p>', 'brand')}

    <h2>What we collect</h2>
    <p>We collect the information you provide directly, such as your name and email address, when you submit the contact form, request the 24-hour trial, or place a subscription order. We don't collect anything beyond what's reasonably needed to respond to your request or deliver the service.</p>

    <h2>How it gets used</h2>
    <p>Information you share is used to respond to your message, send trial or subscription activation details, and provide support. We do not sell your personal information to third parties.</p>

    <h2>Email delivery</h2>
    <p>Contact form, trial, and order submissions are processed through Resend, a third-party transactional email service, to deliver messages to our support inbox and, where applicable, activation details to you.</p>

    <h2>Payments</h2>
    <p>Payments for subscriptions and trials are handled by our designated payment provider. We do not store your full payment card details on our own systems.</p>

    <h2>Cookies and analytics</h2>
    <p>Standard web analytics tools, such as Google Analytics and Google Search Console, may be used to understand site usage and improve the site. These tools may rely on cookies or similar technologies, and cookie behavior can be controlled through your browser settings.</p>

    <h2>How long we keep it</h2>
    <p>Contact form and support communications are retained only as long as reasonably necessary to provide support and maintain accurate records.</p>

    <h2>Who we share it with</h2>
    <p>Information is shared only with service providers who help operate the site and service — our email delivery and payment providers, for example — and only to the extent needed for them to do that job.</p>

    <h2>Your options</h2>
    <p>You can contact us at any time to ask what information we hold about you, or to request that it be deleted, subject to any legal or operational requirements to retain certain records.</p>

    <h2>Security</h2>
    <p>We take reasonable steps to protect what you share with us, including HTTPS encryption on data submitted through the site. No method of transmission or storage is completely secure, and we can't guarantee absolute security.</p>

    <h2>Children</h2>
    <p>Our service isn't directed at children, and we don't knowingly collect personal information from them.</p>

    <h2>Changes</h2>
    <p>This policy may be updated from time to time. The "last updated" date above reflects the most recent revision.</p>

    <h2>Questions</h2>
    <p>Send them through our <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
