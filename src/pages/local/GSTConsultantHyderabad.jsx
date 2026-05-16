import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Finlytiq LLP – GST Consultant Hyderabad",
  "description": "Expert GST registration and return filing services in Hyderabad. GSTR-1, GSTR-3B, GSTR-9, GST audit and compliance by qualified CAs.",
  "url": "https://finlytiqllp.com/gst-consultant-hyderabad",
  "telephone": "+91-9603799411",
  "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "addressCountry": "IN" },
  "openingHours": "Mo-Sa 09:00-19:00"
};

const GSTConsultantHyderabad = () => (
  <>
    <SEO
      title="GST Consultant in Hyderabad – Registration & Filing | Finlytiq LLP"
      description="Expert GST consultant in Hyderabad. GST registration, GSTR-1, GSTR-3B, GSTR-9 filing, ITC reconciliation, GST audit & notices handled by experienced CAs. Call +91 9603799411."
      canonical="/gst-consultant-hyderabad"
      schema={schema}
    />

    <section className="bg-surface-muted border-b border-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs text-gray-500 flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-brand-orange">Home</Link><span>/</span>
          <span className="text-gray-900">GST Consultant Hyderabad</span>
        </div>
        <div className="text-xs text-brand-teal font-semibold uppercase tracking-widest mb-3">GST Services · Hyderabad</div>
        <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">
          #1 GST Consultant in Hyderabad
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
          Expert GST registration, filing, and compliance services for businesses in Hyderabad. From first-time registration to annual GST audit — we handle it all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation" className="px-7 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">Book Free GST Consultation</Link>
          <a href="tel:+919603799411" className="px-7 py-3.5 border-2 border-gray-200 font-semibold rounded-full hover:border-brand-orange transition-all">📞 +91 9603799411</a>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-8">GST Services We Offer in Hyderabad</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'GST Registration', desc: 'New GST registration for businesses crossing threshold or voluntarily registering. Done in 5–7 working days.' },
            { title: 'GSTR-1 Filing', desc: 'Monthly/quarterly outward supply return (GSTR-1) filed accurately and on time.' },
            { title: 'GSTR-3B Filing', desc: 'Monthly summary return with net tax payable, filed before the 20th of each month.' },
            { title: 'GSTR-9 Annual Return', desc: 'Comprehensive annual GST return with reconciliation of all monthly filings.' },
            { title: 'ITC Reconciliation', desc: 'Match purchase register with GSTR-2B to maximize Input Tax Credit claims.' },
            { title: 'GST Notice Response', desc: 'Expert handling of GST show cause notices, assessments, and demands.' },
            { title: 'LUT Filing for Exporters', desc: 'Letter of Undertaking for zero-rated exports without payment of IGST.' },
            { title: 'GST Cancellation', desc: 'Voluntary GST cancellation or revocation assistance.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-5 bg-surface-card rounded-xl border border-gray-100">
              <div className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="#00695C" className="w-4 h-4 flex-shrink-0">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {title}
              </div>
              <div className="text-sm text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-surface-muted">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-5">GST Compliance in Hyderabad — What You Need to Know</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>Businesses in Hyderabad must comply with the <strong>Goods and Services Tax (GST)</strong> framework as applicable across India. However, state-specific nuances, industry-specific rates, and Telangana commercial tax regulations require local expertise.</p>
          <p>Finlytiq LLP has helped <strong>200+ Hyderabad businesses</strong> register for GST and maintain ongoing compliance. Our team of GST consultants in Hyderabad includes qualified CAs, tax practitioners, and former GST department consultants who bring practical expertise to every engagement.</p>
          <p>Whether you're a new business needing registration, an e-commerce seller needing multi-state compliance, or an exporter looking to maximize IGST refunds — we have the right expertise for you.</p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-brand-teal text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black font-display mb-3">Need a GST Consultant in Hyderabad?</h2>
        <p className="mb-6 text-white/80">Get your GST registration done in 5–7 days. Free consultation, no commitment.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book-consultation" className="px-7 py-3 bg-white text-brand-teal font-bold rounded-full hover:bg-gray-50 transition">Book Free Consult</Link>
          <Link to="/services/gst-registration-filing" className="px-7 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">View GST Services</Link>
        </div>
      </div>
    </section>
  </>
);

export default GSTConsultantHyderabad;
