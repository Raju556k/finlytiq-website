import React from 'react';
import SEO from '../components/ui/SEO';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">{children}</div>
  </div>
);

const TermsOfService = () => (
  <>
    <SEO
      title="Terms of Service"
      description="Read the terms and conditions governing the use of Finlytiq LLP's website and professional CA and financial advisory services."
      canonical="/terms"
      noIndex={true}
    />

    {/* Page hero */}
    <div className="bg-[#050918] py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">Legal</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Terms of Service</h1>
        <p className="text-gray-400 text-sm">Last updated: April 2025</p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-16">

      <Section title="1. Acceptance of Terms">
        <p>By accessing this website or engaging Finlytiq LLP ("we", "us", "the Firm") for any professional service, you ("Client", "user") agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
      </Section>

      <Section title="2. Services Offered">
        <p>Finlytiq LLP provides professional Chartered Accountancy and business advisory services including, but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>GST registration, filing, and compliance</li>
          <li>Income tax planning and filing (individuals, HUFs, firms, companies)</li>
          <li>Company incorporation and LLP registration</li>
          <li>ROC/MCA annual compliance and secretarial services</li>
          <li>NRI taxation and FEMA advisory</li>
          <li>Accounting, bookkeeping, and financial reporting</li>
          <li>Virtual CFO and business consulting services</li>
        </ul>
        <p>The scope of services for each engagement is defined in a separate engagement letter or service agreement signed with the Client.</p>
      </Section>

      <Section title="3. Client Responsibilities">
        <p>The Client agrees to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate, complete, and timely information and documents required for service delivery</li>
          <li>Notify the Firm promptly of any changes in business structure, ownership, or regulatory status</li>
          <li>Pay fees as agreed in the engagement letter or invoice</li>
          <li>Not use the Firm's services for any unlawful purpose</li>
        </ul>
        <p>The Firm's ability to deliver timely and accurate services is dependent on the Client fulfilling these responsibilities. Delays caused by the Client's failure to provide required information are not the Firm's responsibility.</p>
      </Section>

      <Section title="4. Fees and Payment">
        <p>Service fees are as agreed in the engagement letter or communicated separately. Invoices are payable within the period specified therein. Late payments may attract interest as per applicable law. The Firm reserves the right to suspend services for overdue accounts.</p>
      </Section>

      <Section title="5. Professional Standards and Limitations">
        <p>All services are rendered in accordance with the ICAI Code of Ethics and applicable professional standards. However:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Our advice is based on laws and regulations in force at the time and may need to be revisited if laws change</li>
          <li>Tax and regulatory outcomes depend on facts specific to each client and cannot be guaranteed</li>
          <li>Government processing timelines (GST registrations, company incorporations, etc.) are outside our control</li>
        </ul>
      </Section>

      <Section title="6. Confidentiality">
        <p>Both parties agree to maintain strict confidentiality of all information exchanged during the engagement. This obligation survives the termination of the engagement. Please refer to our Privacy Policy for details on how we handle personal data.</p>
      </Section>

      <Section title="7. Intellectual Property">
        <p>All content on this website — including text, graphics, logos, service descriptions, and design — is the intellectual property of Finlytiq LLP and is protected under Indian copyright law. You may not reproduce or redistribute any content without prior written permission.</p>
        <p>Reports, analysis, and documents prepared by the Firm for a Client are for that Client's exclusive use and may not be shared with third parties without the Firm's consent.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the fullest extent permitted by law, Finlytiq LLP's liability arising from any engagement shall be limited to the professional fees paid by the Client for that specific engagement. The Firm shall not be liable for indirect, consequential, or punitive damages.</p>
        <p>The Firm is not responsible for penalties, interest, or losses arising from: (a) inaccurate information provided by the Client, (b) the Client's failure to follow professional advice, or (c) changes in law after advice was rendered.</p>
      </Section>

      <Section title="9. Termination">
        <p>Either party may terminate the engagement with written notice as specified in the engagement letter. Upon termination, the Client shall pay for all services rendered up to the date of termination. The Firm will return Client documents upon settlement of outstanding dues.</p>
      </Section>

      <Section title="10. Governing Law">
        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>
      </Section>

      <Section title="11. Website Use">
        <p>This website is provided for informational purposes only. The information on this website does not constitute professional advice and should not be relied upon as such. Always engage a qualified CA for specific advice tailored to your situation.</p>
      </Section>

      <Section title="12. Contact">
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

export default TermsOfService;
