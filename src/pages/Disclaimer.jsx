import React from 'react';
import SEO from '../components/ui/SEO';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
    <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">{children}</div>
  </div>
);

const Disclaimer = () => (
  <>
    <SEO
      title="Disclaimer"
      description="Important disclaimer regarding the information provided on Finlytiq LLP's website. Website content is for informational purposes only and does not constitute professional advice."
      canonical="/disclaimer"
      noIndex={true}
    />

    {/* Page hero */}
    <div className="bg-[#050918] py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">Legal</div>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Disclaimer</h1>
        <p className="text-gray-400 text-sm">Last updated: April 2025</p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Highlight box */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex gap-3">
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <p className="text-amber-800 text-sm leading-relaxed font-medium">
          The information on this website is provided for general informational purposes only. It does not constitute professional, legal, financial, or tax advice. Always consult a qualified Chartered Accountant or legal professional before making any financial or business decisions.
        </p>
      </div>

      <Section title="1. General Information Only">
        <p>The content published on this website — including articles, guides, service descriptions, FAQs, and blog posts — is for general educational and informational purposes only. It does not constitute professional accounting, tax, legal, or financial advice.</p>
        <p>Finlytiq LLP makes no representation that the information on this website is accurate, complete, or current. Tax laws, GST regulations, company law, and other applicable statutes are subject to frequent changes, and information on this website may not reflect the most recent developments.</p>
      </Section>

      <Section title="2. No Client Relationship">
        <p>Accessing this website or submitting an enquiry through this website does not create a client-CA relationship. A formal engagement relationship is established only through a signed engagement letter or service agreement between Finlytiq LLP and the Client.</p>
        <p>Any information you submit through website forms (contact forms, consultation booking) will be treated in accordance with our Privacy Policy and does not give rise to any duty of care or professional obligation until a formal engagement is agreed upon.</p>
      </Section>

      <Section title="3. Tax and Financial Guidance">
        <p>Any tax rates, due dates, limits, or thresholds mentioned on this website are indicative and based on the law as understood at the time of publication. Tax implications vary significantly based on individual facts and circumstances.</p>
        <p>Do not make financial decisions based solely on information from this website. Please contact us directly for advice specific to your situation.</p>
      </Section>

      <Section title="4. Third-Party Links">
        <p>This website may contain links to third-party websites (government portals, regulatory sites, etc.) for your convenience. Finlytiq LLP does not control, endorse, or take responsibility for the content or accuracy of information on external sites. Links are provided "as is" without warranty of any kind.</p>
      </Section>

      <Section title="5. Results and Outcomes">
        <p>References to outcomes, client results, or turnaround times on this website are illustrative examples and not guarantees. Actual results depend on factors including the completeness of client information, government processing times, changes in regulatory requirements, and individual business circumstances.</p>
      </Section>

      <Section title="6. Testimonials">
        <p>Client testimonials and reviews on this website represent individual experiences. They are not necessarily representative of all clients' experiences and are not guarantees of specific outcomes or results.</p>
      </Section>

      <Section title="7. Professional Standards">
        <p>Finlytiq LLP and its partners/CAs are registered with the Institute of Chartered Accountants of India (ICAI) and are bound by its Code of Ethics. While we strive for accuracy in all our communications, the dynamic nature of Indian tax law and business regulations means that professional advice should always be sought for specific situations.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>To the maximum extent permitted by law, Finlytiq LLP, its partners, employees, and agents shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your reliance on information published on this website</li>
          <li>Errors, omissions, or inaccuracies in website content</li>
          <li>Temporary unavailability of the website</li>
          <li>Actions taken based on website content without engaging our professional services</li>
        </ul>
      </Section>

      <Section title="9. Governing Law">
        <p>This disclaimer is governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Hyderabad, Telangana.</p>
      </Section>

      <Section title="10. Questions">
        <p>If you have questions about this disclaimer or wish to engage our professional services:</p>
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

export default Disclaimer;
