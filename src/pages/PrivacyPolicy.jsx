import React from 'react';
import SEO from '../components/ui/SEO';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy"
      description="Finlytiq LLP's privacy policy explains how we collect, use, and protect your personal information when you use our CA and financial advisory services."
      canonical="/privacy-policy"
      noIndex={true}
    />

    {/* Page hero */}
    <div className="bg-[#050918] py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">Legal</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: April 2026</p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-16">

      <Section title="1. Information We Collect">
        <p>We collect information you provide directly to us when you:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fill out our contact or consultation booking forms</li>
          <li>Subscribe to our newsletter or download resources</li>
          <li>Communicate with us via phone, email, or WhatsApp</li>
          <li>Engage our professional services</li>
        </ul>
        <p>This may include your name, email address, phone number, business name, GSTIN, PAN number, and any other details necessary to provide our services.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your enquiries and fulfill service requests</li>
          <li>Send transactional communications and service-related updates</li>
          <li>Comply with legal obligations under the Income Tax Act, GST law, and other applicable statutes</li>
          <li>Send occasional newsletters or educational content (you may opt out at any time)</li>
        </ul>
      </Section>

      <Section title="3. Information Sharing">
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Regulatory authorities:</strong> As required by law (MCA, Income Tax Department, GST Network, etc.)</li>
          <li><strong>Service providers:</strong> Trusted partners who assist in delivering our services (e.g., secure email platforms, cloud storage), bound by confidentiality obligations</li>
          <li><strong>Legal proceedings:</strong> When required by court order or legal process</li>
        </ul>
      </Section>

      <Section title="4. Client Confidentiality">
        <p>We adhere to strict professional confidentiality standards. All financial documents, tax returns, business information, and personal data shared with us are treated as strictly confidential and protected accordingly.</p>
      </Section>

      <Section title="5. Data Security">
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Encrypted file storage and transmission</li>
          <li>Access controls limited to authorized personnel</li>
          <li>Regular security reviews</li>
        </ul>
      </Section>

      <Section title="6. Cookies, Advertising, and Website Analytics">
        <p>Our website uses cookies and similar technologies to enhance user experience, gather anonymized analytics (e.g., page visits, traffic sources), and serve relevant advertisements.</p>
        <p><strong>Essential cookies:</strong> Required for the website to function properly (e.g., session management, form submissions).</p>
        <p><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
        <p><strong>Advertising cookies:</strong> We use Google AdSense to display advertisements on our website. Google and its advertising partners may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing activity. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">aboutads.info</a>.</p>
        <p>You can manage or disable cookies in your browser settings at any time. Please note that disabling certain cookies may affect the functionality of the website.</p>
      </Section>

      <Section title="7. Data Retention">
        <p>We retain client data for the period required by applicable law (typically 8 years for tax and financial records as mandated by Indian tax laws) or longer if required for ongoing legal matters. Personal data collected through the website (e.g., enquiry forms) is retained for up to 2 years.</p>
      </Section>

      <Section title="8. Your Rights">
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of data (subject to legal retention requirements)</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:team.finlytiq@gmail.com" className="text-brand-orange hover:underline">team.finlytiq@gmail.com</a>.</p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
      </Section>

      <Section title="10. Contact Us">
        <p>For any privacy-related questions or concerns:</p>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 mt-3">
          <p className="font-semibold text-gray-800">Finlytiq LLP</p>
          <p>Hyderabad, Telangana, India</p>
          <p>Email: <a href="mailto:team.finlytiq@gmail.com" className="text-brand-orange hover:underline">team.finlytiq@gmail.com</a></p>
          <p>Phone: <a href="tel:+919603799411" className="text-brand-orange hover:underline">+91 9603799411</a></p>
        </div>
      </Section>

    </div>
  </>
);

export default PrivacyPolicy;
