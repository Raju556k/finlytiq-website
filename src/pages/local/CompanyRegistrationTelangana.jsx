import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Finlytiq LLP – Company Registration Telangana",
  "description": "Private Limited Company and LLP registration in Telangana and Hyderabad by experienced CAs and Company Secretaries.",
  "url": "https://finlytiqllp.com/company-registration-telangana",
  "telephone": "+91-9603799411",
  "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "addressCountry": "IN" }
};

const CompanyRegistrationTelangana = () => (
  <>
    <SEO
      title="Company Registration in Telangana & Hyderabad | Finlytiq LLP"
      description="Register your Private Limited Company, LLP, or OPC in Telangana and Hyderabad. Fast incorporation with DSC, DIN, MOA, AOA, PAN, TAN in 7–10 working days. Call +91 9603799411."
      canonical="/company-registration-telangana"
      schema={schema}
    />

    <section className="bg-surface-muted border-b border-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs text-gray-500 flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-brand-orange">Home</Link><span>/</span>
          <span className="text-gray-900">Company Registration Telangana</span>
        </div>
        <div className="text-xs text-blue-700 font-semibold uppercase tracking-widest mb-3">Company Registration · Telangana</div>
        <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">
          Company Registration in Telangana &amp; Hyderabad
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
          Register your Private Limited Company, LLP, or OPC in Telangana in as little as 7–10 working days. End-to-end support from a team of qualified CAs and Company Secretaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation" className="px-7 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">Start Registration</Link>
          <a href="tel:+919603799411" className="px-7 py-3.5 border-2 border-gray-200 font-semibold rounded-full hover:border-brand-orange transition-all">📞 +91 9603799411</a>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-8">Business Structures We Register</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { type: 'Private Limited Company', best: 'Startups seeking funding', pros: ['Separate legal entity', 'Easier fundraising', 'Maximum credibility', 'Up to 200 shareholders'], color: '#1565C0' },
            { type: 'Limited Liability Partnership', best: 'Professional firms & partnerships', pros: ['Simpler compliance', 'Lower annual costs', 'Flexible management', 'Tax-efficient structure'], color: '#00695C' },
            { type: 'One Person Company (OPC)', best: 'Solo entrepreneurs', pros: ['Single founder', 'Limited liability', 'Professional structure', 'Easier banking'], color: '#FF9933' },
          ].map(({ type, best, pros, color }) => (
            <div key={type} className="bg-surface-card rounded-2xl border border-gray-100 overflow-hidden">
              <div className="h-1.5 w-full" style={{ background: color }} />
              <div className="p-6">
                <h3 className="font-black text-gray-900 mb-1">{type}</h3>
                <div className="text-xs font-medium mb-4" style={{ color }}>Best for: {best}</div>
                <ul className="space-y-1.5">
                  {pros.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg viewBox="0 0 16 16" fill="currentColor" style={{ color }} className="w-3.5 h-3.5 flex-shrink-0">
                        <path fillRule="evenodd" d="M12.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L7 8.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/services/company-llp-registration" className="block mt-5 text-center py-2.5 text-sm font-semibold rounded-xl border-2 transition hover:text-white"
                  style={{ borderColor: color, color }}
                  onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = color; }}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-surface-muted">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-5">Company Registration in Telangana — Why Us?</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>Telangana and Hyderabad have emerged as one of India's top startup destinations, with the state government actively promoting entrepreneurship through TS-iPASS, T-Hub, and WE Hub initiatives.</p>
          <p>Finlytiq LLP combines MCA expertise with deep knowledge of Telangana's business ecosystem. Our Company Secretaries and CAs guide you through the entire incorporation process — from name reservation to GST registration and bank account opening — with no confusion and no delays.</p>
          <p>We've helped <strong>100+ businesses incorporate</strong> in Hyderabad and Telangana, including IT companies, pharma startups, e-commerce ventures, and manufacturing firms.</p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-brand-navy-l text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black font-display mb-3">Ready to Register Your Company in Telangana?</h2>
        <p className="mb-6 text-white/70">Get started in minutes. Our team handles everything — you focus on your business.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book-consultation" className="px-7 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-d transition">Start Now — Free Consult</Link>
          <Link to="/services/company-llp-registration" className="px-7 py-3 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition">View Full Details</Link>
        </div>
      </div>
    </section>
  </>
);

export default CompanyRegistrationTelangana;
