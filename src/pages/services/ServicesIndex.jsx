import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import { services } from '../../data/services';

const ServicesIndex = () => (
  <>
    <SEO
      title="All CA & Financial Services"
      description="Complete list of CA services by Finlytiq LLP: GST, Income Tax, Company Registration, LLP, ROC Compliance, NRI Taxation, Virtual CFO, Accounting & Business Consulting in Hyderabad."
      canonical="/services"
    />

    {/* Hero */}
    <section className="bg-surface-muted border-b border-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs text-brand-orange font-semibold uppercase tracking-widest mb-3">Our Services</div>
        <h1 className="text-4xl md:text-6xl font-black font-display text-gray-900 tracking-tight mb-4">
          Everything Your Business Needs
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
          One firm. All your financial, compliance, and advisory requirements — handled by expert CAs.
        </p>
      </div>
    </section>

    {/* Grid */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(svc => (
            <Link key={svc.slug} to={`/services/${svc.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all overflow-hidden">
              <div className={`h-1.5 w-full bg-gradient-to-r ${svc.gradient}`} />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white mb-5" style={{ background: svc.color }}>
                  {svc.icon}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-brand-orange transition-colors">{svc.title}</h2>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{svc.tagline}</p>
                <ul className="space-y-1 mb-5">
                  {svc.keyPoints.slice(0, 3).map(kp => (
                    <li key={kp} className="flex items-start gap-2 text-xs text-gray-500">
                      <svg viewBox="0 0 20 20" fill="#00C853" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {kp}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all">
                  View Details
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-surface-muted">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
        <p className="text-gray-500 mb-8">Book a free 30-minute consultation and our team will guide you.</p>
        <Link to="/book-consultation"
          className="inline-block px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
          Book Free Consultation
        </Link>
      </div>
    </section>
  </>
);

export default ServicesIndex;
