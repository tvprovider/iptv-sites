import { section, breadcrumbs, breadcrumbSchema, alertBox } from '../lib/render.mjs';
import { site } from '../data/business.mjs';

const updated = 'September 2, 2026';

export default {
  slug: 'disclaimer',
  title: 'Disclaimer | Canada IPTV',
  description: 'Important disclaimers regarding the use of the Canada IPTV service, content responsibility, and third-party affiliations.',
  jsonld: [breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Disclaimer' }])],
  body: `
${breadcrumbs([{ label: 'Home', href: '/' }, { label: 'Disclaimer' }])}
${section({
  html: `
  <div class="prose">
    <span class="eyebrow">Legal</span>
    <h1>Disclaimer</h1>
    <p class="small muted">Last updated: ${updated}</p>
    ${alertBox('<p><strong>Note:</strong> This disclaimer is a general template and has not been reviewed by a lawyer for your jurisdiction — we recommend independent legal review before relying on it.</p>', 'brand')}

    <h2>Your responsibility as a user</h2>
    <p>You are solely responsible for using ${site.brand} in compliance with the laws and regulations that apply to you in your location. Availability, legality, and appropriate use of IPTV services can vary by jurisdiction, and it is your responsibility to understand and follow the rules that apply where you live.</p>

    <h2>No affiliation with third parties</h2>
    <p>${site.brand} is not affiliated with, endorsed by, or sponsored by any television network, broadcaster, streaming platform, device manufacturer, or player app developer mentioned or implied on this site. Any device or app names referenced (such as Smart TV, Android TV, Fire TV, iOS, Windows, or macOS) are used only to describe compatibility and remain the property of their respective owners.</p>

    <h2>No claim of licensing or authorization</h2>
    <p>We do not claim that our service is licensed or authorized by any specific regulatory body, content owner, or broadcaster unless explicitly and verifiably stated elsewhere on this site. Nothing on this site should be interpreted as such a claim.</p>

    <h2>Content availability</h2>
    <p>Channel and content availability can change over time and is not guaranteed to remain identical to what is described on this site at any given moment.</p>

    <h2>No professional advice</h2>
    <p>Nothing on this site constitutes legal advice. If you are unsure whether using an IPTV service is appropriate in your location, consult a qualified professional.</p>

    <h2>Streaming quality disclaimer</h2>
    <p>Streaming quality, including resolution and stability, depends on factors outside our control, such as your internet connection, device capability, and general network conditions. We do not guarantee a specific streaming experience for every user in every circumstance.</p>

    <h2>Limitation of liability</h2>
    <p>To the fullest extent permitted by law, ${site.brand} disclaims liability for any direct or indirect consequences arising from your use of the service, to the extent such consequences result from factors outside our reasonable control.</p>

    <h2>Changes to this disclaimer</h2>
    <p>We may update this disclaimer from time to time. The "last updated" date at the top of this page reflects the most recent revision.</p>

    <h2>Contact</h2>
    <p>Questions about this disclaimer can be sent through our <a href="/contact/">Contact page</a>.</p>
  </div>`,
})}
`,
};
