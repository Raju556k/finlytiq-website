import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import { services } from '../../data/services';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.finlytiq.com/chartered-accountant-hyderabad",
  "name": "Finlytiq LLP – Chartered Accountants &amp; Financial Advisory, Hyderabad",
  "description": "Multi-disciplinary financial advisory firm in Hyderabad offering GST, Income Tax, Company Registration, Virtual CFO, and Startup Advisory services.",
  "url": "https://www.finlytiq.com/chartered-accountant-hyderabad",
  "telephone": ["+91-9603799411", "+91-9701557017"],
  "email": "team.finlytiq@gmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": "17.3850", "longitude": "78.4867" },
  "openingHours": "Mo-Sa 09:00-19:00",
  "priceRange": "₹₹",
  "areaServed": ["Hyderabad", "Secunderabad", "Cyberabad", "Telangana"]
};

const CharteredAccountantHyderabad = () => (
  <>
    <SEO
      title="Chartered Accountant in Hyderabad – CA Firm | Finlytiq LLP"
      description="Looking for the best Chartered Accountant in Hyderabad? Finlytiq LLP offers GST, Income Tax, Company Registration, Virtual CFO & NRI Taxation services. Call +91 9603799411."
      canonical="/chartered-accountant-hyderabad"
      schema={schema}
    />

    <section className="bg-surface-muted border-b border-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-brand-orange">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Chartered Accountant Hyderabad</span>
        </div>
        <div className="text-xs text-brand-orange font-semibold uppercase tracking-widest mb-3">Hyderabad, Telangana</div>
        <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">
          Top Chartered Accountants in Hyderabad
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
          Finlytiq LLP is a multi-disciplinary financial advisory firm in Hyderabad — with expert CAs, Company Secretaries, Cost Accountants, and Legal Experts providing comprehensive financial, tax, and compliance services to startups, SMEs, and enterprises across Hyderabad, Secunderabad, and Cyberabad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/book-consultation" className="px-7 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
            Book Free Consultation
          </Link>
          <a href="tel:+919603799411" className="px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand-orange transition-all flex items-center gap-2">
            📞 +91 9603799411
          </a>
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-8 text-center">CA Services in Hyderabad</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(svc => (
            <Link key={svc.slug} to={`/services/${svc.slug}`}
              className="group p-6 bg-surface-card rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <span className="text-2xl mb-3 block">{svc.icon}</span>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">{svc.title}</h3>
              <p className="text-xs text-gray-500">{svc.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-surface-muted">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-6">Why Choose Finlytiq as Your Financial Advisors in Hyderabad?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Hyderabad is one of India's fastest-growing business hubs, home to thousands of startups, IT companies, manufacturing firms, and SMEs. With this rapid growth comes complex financial and regulatory challenges — and that's where Finlytiq LLP steps in.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            As a Hyderabad-based multi-disciplinary advisory firm, we understand the local business environment, state-specific tax regulations in Telangana, and the unique needs of businesses operating in the city's key sectors — IT/ITeS, pharma, manufacturing, and services.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Areas We Serve in Hyderabad</h3>
          <p className="text-gray-600 leading-relaxed">
            We serve clients across all major Hyderabad locations including Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, Kondapur, Kukatpally, Ameerpet, Secunderabad, Begumpet, Somajiguda, and across the Cyberabad development corridor.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Sectors We Specialize In</h3>
          <ul className="text-gray-600 space-y-1">
            <li>✅ IT & Software companies</li>
            <li>✅ Pharmaceutical & Healthcare</li>
            <li>✅ Real Estate & Construction</li>
            <li>✅ Manufacturing & Trading</li>
            <li>✅ E-commerce & Retail</li>
            <li>✅ Startups & VC-funded companies</li>
            <li>✅ NRIs with Indian assets or income</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-12 bg-brand-orange text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-black font-display mb-3">Need a Chartered Accountant in Hyderabad?</h2>
        <p className="mb-6 text-white/80">Call us now or book a free consultation — same-day response guaranteed.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919603799411" className="px-7 py-3 bg-white text-brand-orange font-bold rounded-full hover:bg-gray-50 transition">
            📞 Call Now
          </a>
          <Link to="/book-consultation" className="px-7 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition">
            Book Free Consult
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default CharteredAccountantHyderabad;
