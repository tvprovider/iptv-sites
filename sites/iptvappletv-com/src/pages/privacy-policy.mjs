import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 2, 2026';

export default {
  slug: 'privacy-policy',
  title: 'Privacy Policy | Apple TV IPTV',
  description: 'Read the Apple TV IPTV privacy policy to understand what information we collect, why we collect it, and how it is used and protected.',
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
    ${alertBox('<p><strong>Note:</strong> This policy describes our general data practices in plain language. It is a general template and has not been reviewed by a lawyer for your specific jurisdiction — we recommend independent legal review before relying on it for compliance purposes.</p>', 'brand')}

    <h2>Information we collect</h2>
    <p>We collect information you provide directly to us, such as your name and email address when you use our contact form, request the 24-hour trial, or subscribe to a plan. We do not collect information from you beyond what is reasonably necessary to respond to your request or provide the service.</p>

    <h2>How we use your information</h2>
    <p>We use the information you provide to respond to inquiries, send trial or subscription activation details, and provide customer support. We do not sell your personal information to third parties.</p>

    <h2>Email communications</h2>
    <p>Contact form and trial submissions are processed using Resend, a third-party transactional email service, to deliver messages to our support inbox and, where applicable, activation details to you.</p>

    <h2>Payment information</h2>
    <p>Payments for subscriptions and trials are processed by our designated payment provider. We do not store your full payment card details on our own systems.</p>

    <h2>Cookies and analytics</h2>
    <p>We may use standard web analytics tools, such as Google Analytics and Google Search Console, to understand site usage and improve the website. These tools may use cookies or similar technologies. You can control cookie behavior through your browser settings.</p>

    <h2>Data retention</h2>
    <p>We retain contact form and support communications for as long as reasonably necessary to provide support and maintain accurate records, and no longer than necessary for that purpose.</p>

    <h2>Data sharing</h2>
    <p>We share information only with service providers who help us operate the site and service (such as our email delivery and payment providers), and only to the extent necessary for them to perform those functions.</p>

    <h2>Your choices</h2>
    <p>You may contact us at any time to ask what information we hold about you or to request that it be deleted, subject to any legal or operational requirements to retain certain records.</p>

    <h2>Security</h2>
    <p>We take reasonable steps to protect the information you share with us, including using HTTPS encryption for data submitted through our site. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

    <h2>Children's privacy</h2>
    <p>Our service is not directed to children, and we do not knowingly collect personal information from children.</p>

    <h2>Changes to this policy</h2>
    <p>We may update this policy from time to time. The "last updated" date at the top of this page reflects the most recent revision.</p>

    <h2>Contact us</h2>
    <p>Questions about this policy can be sent through our <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
