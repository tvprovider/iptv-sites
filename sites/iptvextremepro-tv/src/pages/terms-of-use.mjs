import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 2, 2026';

export default {
  slug: 'terms-of-use',
  title: 'Terms of Use | IPTV Xtream Pro',
  description: 'Read the terms governing your use of the IPTV Xtream Pro subscription service, including accounts, acceptable use, billing, and liability.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Terms of Use</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> These terms are a general template. They have not been reviewed by a lawyer for your jurisdiction — we recommend independent legal review before relying on them as a binding contract.</p>', 'brand')}

    <h2>Acceptance of terms</h2>
    <p>By using ${site.domain} or subscribing to the ${site.brand} service, you agree to these Terms of Use. If you do not agree, please do not use the service.</p>

    <h2>The service</h2>
    <p>${site.brand} provides access to an IPTV subscription, delivering live channels and on-demand content over the internet through compatible third-party player apps, with support for up to 4K resolution where your plan, device, and source content allow it.</p>

    <h2>Accounts and activation</h2>
    <p>After subscribing or starting the trial, you will receive activation details by email. You are responsible for keeping these details confidential and for all activity that occurs using your credentials.</p>

    <h2>Acceptable use</h2>
    <p>You agree to use the service only for personal, non-commercial viewing, and not to:</p>
    <ul>
      <li>Share your login credentials with people outside your household</li>
      <li>Attempt to resell, redistribute, or rebroadcast the service</li>
      <li>Use the service in any way that violates applicable law</li>
      <li>Attempt to circumvent, disrupt, or reverse-engineer the underlying technical infrastructure</li>
    </ul>

    <h2>Billing and plans</h2>
    <p>Subscription prices are listed on our <a href="/pricing/">Pricing page</a> at the time of purchase. Plans do not renew automatically unless you explicitly select a recurring option. You are responsible for choosing and paying for a new term if you wish to continue after your current term ends.</p>

    <h2>The 24-hour trial</h2>
    <p>The trial is a one-time, low-cost evaluation period intended to let you test the service, described in full on our <a href="/trial/">Trial page</a>.</p>

    <h2>No guarantee of uninterrupted service</h2>
    <p>We do not guarantee uninterrupted, error-free, or 100% available service. Streaming quality depends on factors outside our control, including your internet connection, device, and general network conditions. We do not promise "zero buffering" or "unlimited" access beyond what is stated on our Pricing and Trial pages.</p>

    <h2>Termination</h2>
    <p>We may suspend or terminate access for accounts found to violate these terms, including sharing credentials outside a household or attempting to resell the service.</p>

    <h2>Limitation of liability</h2>
    <p>To the fullest extent permitted by law, ${site.brand} is not liable for indirect, incidental, or consequential damages arising from your use of, or inability to use, the service.</p>

    <h2>Changes to these terms</h2>
    <p>We may update these terms from time to time. The "last updated" date at the top of this page reflects the most recent revision. Continued use of the service after changes constitutes acceptance of the updated terms.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by applicable law in the jurisdiction where the service is operated, without regard to conflict-of-law principles.</p>

    <h2>Contact</h2>
    <p>Questions about these terms can be sent through our <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
