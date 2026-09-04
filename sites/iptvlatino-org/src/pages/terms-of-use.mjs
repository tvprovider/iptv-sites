import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 4, 2026';

export default {
  slug: 'terms-of-use',
  title: 'Terms of Use | IPTV Latino',
  description: 'The terms governing use of the IPTV Latino subscription service, including accounts, acceptable use, billing, and liability.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Terms of Use' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Terms of Use</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> These terms are a general template. They have not been reviewed by a lawyer for your jurisdiction — independent legal review is recommended before relying on them as a binding contract.</p>', 'brand')}

    <h2>Agreeing to these terms</h2>
    <p>By using ${site.domain} or subscribing to the ${site.brand} service, you agree to these Terms of Use. If you don't agree, please don't use the service.</p>

    <h2>What the service is</h2>
    <p>${site.brand} provides an IPTV subscription delivering live channels and on-demand content over the internet through compatible third-party player apps, with support for up to 4K resolution where your plan, device, and source content allow it.</p>

    <h2>Accounts and activation</h2>
    <p>After subscribing or starting the trial, you'll receive activation details by email. You're responsible for keeping them confidential and for all activity that occurs using your credentials.</p>

    <h2>Acceptable use</h2>
    <p>You agree to use the service only for personal, non-commercial viewing, and not to:</p>
    <ul>
      <li>Share your login credentials with people outside your household</li>
      <li>Attempt to resell, redistribute, or rebroadcast the service</li>
      <li>Use the service in any way that violates applicable law</li>
      <li>Attempt to circumvent, disrupt, or reverse-engineer the underlying technical infrastructure</li>
    </ul>

    <h2>Billing and plans</h2>
    <p>Subscription prices are listed on our <a href="/pricing/">Pricing page</a> at the time of purchase. Plans don't renew automatically unless a recurring option is explicitly selected. You're responsible for choosing and paying for a new term if you want to continue after your current one ends.</p>

    <h2>The 24-hour trial</h2>
    <p>The trial is a one-time, low-cost evaluation period intended to let you test the service, described in full on our <a href="/trial/">Trial page</a>.</p>

    <h2>No guarantee of uninterrupted service</h2>
    <p>We don't guarantee uninterrupted, error-free, or 100% available service. Streaming quality depends on factors outside our control, including your internet connection, device, and general network conditions. We don't promise "zero buffering" or "unlimited" access beyond what's stated on our Pricing and Trial pages.</p>

    <h2>Termination</h2>
    <p>We may suspend or terminate access for accounts found to violate these terms, including sharing credentials outside a household or attempting to resell the service.</p>

    <h2>Limitation of liability</h2>
    <p>To the fullest extent permitted by law, ${site.brand} is not liable for indirect, incidental, or consequential damages arising from your use of, or inability to use, the service.</p>

    <h2>Changes to these terms</h2>
    <p>These terms may be updated from time to time. The "last updated" date above reflects the most recent revision. Continued use of the service after a change means you accept the updated terms.</p>

    <h2>Governing law</h2>
    <p>These terms are governed by applicable law in the jurisdiction where the service is operated, without regard to conflict-of-law principles.</p>

    <h2>Contact</h2>
    <p>Questions about these terms can be sent through our <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
