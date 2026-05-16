import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import { getServiceBySlug, services } from '../../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const svc = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!svc) return <Navigate to="/services" replace />;

  // Other services (exclude current)
  const others = services.filter(s => s.slug !== slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": svc.title,
    "description": svc.overview,
    "provider": {
      "@type": "AccountingService",
      "name": "Finlytiq LLP",
      "url": "https://finlytiqllp.com"
    },
    "areaServed": { "@type": "State", "name": "Telangana" },
    "url": `https://finlytiqllp.com/services/${svc.slug}`
  };

  return (
    <>
      <SEO
        title={svc.metaTitle.replace(' | Finlytiq LLP', '')}
        description={svc.metaDesc}
        canonical={`/services/${svc.slug}`}
        schema={schema}
      />

      {/* Breadcrumb */}
      <div className="bg-surface-muted border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-6 text-xs text-gray-500 flex items-center gap-2 font-medium">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-brand-orange transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gray-900">{svc.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050918] py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: svc.color }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange rounded-full blur-3xl opacity-5" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-white/60 text-xs font-medium mb-6">
            <span className="text-base">{svc.icon}</span>
            Financial Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-4">
            {svc.title}
          </h1>
          <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl">{svc.overview}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book-consultation"
              className="px-7 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
              Get Free Consultation
            </Link>
            <a href="https://wa.me/919603799411?text=Hi, I need help with: {svc.title}" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 border-2 border-white/15 text-white font-semibold rounded-full hover:border-white/30 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* Left: main content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Key Points */}
          <div>
            <h2 className="text-2xl font-black font-display text-gray-900 mb-6">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {svc.keyPoints.map(point => (
                <div key={point} className="flex gap-3 p-4 bg-surface-card rounded-xl border border-gray-100">
                  <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 20 20" fill="#00C853" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-black font-display text-gray-900 mb-6">Our Process</h2>
            <div className="space-y-4">
              {svc.process.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 p-5 bg-surface-card rounded-xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full text-white font-black text-sm flex items-center justify-center flex-shrink-0" style={{ background: svc.color }}>
                    {step}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-0.5">{title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-black font-display text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {svc.faq.map(({ q, a }, i) => (
                <div key={i} className="bg-surface-card rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-gray-900 text-sm hover:text-brand-orange transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {q}
                    <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">{a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: sticky sidebar */}
        <div className="space-y-5">
          {/* CTA card */}
          <div className="sticky top-24 space-y-5">
            <div className="bg-[#050918] text-white p-7 rounded-2xl">
              <div className="text-lg font-bold mb-1">Get Started Today</div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">Free 30-minute consultation with a senior CA. No commitment required.</p>
              <Link to="/book-consultation"
                className="block w-full text-center py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-brand-orange-d transition mb-3">
                Book Free Consultation
              </Link>
              <a href="tel:+919603799411"
                className="block w-full text-center py-3 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 transition text-sm">
                📞 +91 9603799411
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-xs">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-brand-green">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% confidential &amp; free
              </div>
            </div>

            {/* Other services */}
            <div className="bg-surface-card p-5 rounded-2xl border border-gray-100">
              <div className="text-sm font-bold text-gray-900 mb-3">Other Services</div>
              <div className="space-y-2">
                {others.map(o => (
                  <Link key={o.slug} to={`/services/${o.slug}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group">
                    <span className="text-base">{o.icon}</span>
                    <span className="text-sm text-gray-700 group-hover:text-brand-orange transition-colors font-medium">{o.shortTitle}</span>
                  </Link>
                ))}
              </div>
              <Link to="/services" className="block text-center mt-3 text-xs font-semibold text-brand-orange hover:underline">
                View all services →
              </Link>
            </div>

            {/* Trust */}
            <div className="bg-surface-card p-5 rounded-2xl border border-gray-100 space-y-2">
              {['ICAI Registered CAs', 'Transparent Fixed Pricing', '48-Hour Response Guarantee', '500+ Businesses Served', 'Hyderabad-Based Team'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg viewBox="0 0 20 20" fill="#00C853" className="w-4 h-4 flex-shrink-0">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related services */}
      <section className="bg-surface-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-black font-display text-gray-900 mb-8">You Might Also Need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map(o => (
              <Link key={o.slug} to={`/services/${o.slug}`}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white mb-4" style={{ background: o.color }}>{o.icon}</div>
                <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-brand-orange transition-colors">{o.title}</div>
                <div className="text-xs text-gray-400">{o.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
