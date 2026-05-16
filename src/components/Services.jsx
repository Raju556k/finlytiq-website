import React, { useState } from 'react';

const services = [
  {
    title: 'Income Tax Filing',
    color: '#1A237E',
    gradient: 'from-blue-900 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0119 9.414V19a2 2 0 01-2 2z" />
      </svg>
    ),
    desc: 'Expert ITR filing (ITR-1 to ITR-7) for individuals, businesses, and startups.',
    details: [
      { name: 'ITR-1', info: 'For salaried individuals with income up to ₹50 lakh.' },
      { name: 'ITR-2', info: 'For individuals & HUFs not having income from business or profession.' },
      { name: 'ITR-3', info: 'For individuals & HUFs having income from business or profession.' },
      { name: 'ITR-4', info: 'For presumptive income from business & profession.' },
      { name: 'ITR-5/6/7', info: 'For firms, companies, trusts, etc.' },
    ],
  },
  {
    title: 'GST Registration & Returns',
    color: '#00695C',
    gradient: 'from-teal-900 to-teal-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    desc: 'Seamless GST registration, monthly/quarterly returns, and compliance.',
    details: [
      { name: 'GST Registration', info: 'For businesses with turnover above threshold or voluntary registration.' },
      { name: 'GST Returns', info: 'GSTR-1, GSTR-3B, GSTR-9, and more.' },
      { name: 'GST Audit', info: 'Annual GST audit and compliance.' },
    ],
  },
  {
    title: 'Virtual CFO (VCFO)',
    color: '#FF9933',
    gradient: 'from-orange-600 to-orange-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    desc: 'Strategic financial leadership and reporting for your growing business.',
    details: [
      { name: 'Financial Planning', info: 'Budgeting, forecasting, and cash flow management.' },
      { name: 'MIS Reporting', info: 'Monthly/quarterly management reports.' },
      { name: 'Investor Relations', info: 'Support for fundraising and investor queries.' },
    ],
  },
  {
    title: 'Startup Advisory',
    color: '#6A1B9A',
    gradient: 'from-purple-900 to-purple-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    desc: 'Guidance on incorporation, funding, and compliance for startups.',
    details: [
      { name: 'Company Incorporation', info: 'Private Limited, LLP, OPC registration.' },
      { name: 'Pitch Decks', info: 'Investor-ready business plans and pitch decks.' },
      { name: 'Compliance', info: 'ROC, FEMA, and other regulatory compliance.' },
    ],
  },
  {
    title: 'Company Incorporation',
    color: '#1565C0',
    gradient: 'from-blue-800 to-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    desc: 'Private Limited, LLP, and OPC registration with end-to-end support.',
    details: [
      { name: 'Private Limited', info: 'Best for startups and growing businesses.' },
      { name: 'LLP', info: 'Limited Liability Partnership registration.' },
      { name: 'OPC', info: 'One Person Company for solo founders.' },
    ],
  },
  {
    title: 'Trademark Registration',
    color: '#C62828',
    gradient: 'from-red-900 to-red-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    desc: 'Protect your brand with hassle-free trademark registration.',
    details: [
      { name: 'Trademark Search', info: 'Check availability and avoid conflicts.' },
      { name: 'Application Filing', info: 'End-to-end filing and documentation.' },
      { name: 'Objection Handling', info: 'Expert help for examination objections.' },
    ],
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">

      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF9933] opacity-[0.04] rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A237E] opacity-[0.05] rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-500 max-w-md mx-auto text-base">
            Comprehensive financial solutions crafted for startups, SMEs, and enterprises.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <button
              key={service.title}
              className="service-card group text-left bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50"
              onClick={() => setSelected(service)}
              aria-label={`View details for ${service.title}`}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`} />

              <div className="p-7">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ background: service.color }}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF9933] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{service.desc}</p>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF9933]">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className={`bg-gradient-to-r ${selected.gradient} p-6 text-white relative`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Close"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                {selected.icon}
              </div>
              <h3 className="text-xl font-bold">{selected.title}</h3>
              <p className="text-white/75 text-sm mt-1">{selected.desc}</p>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-3">
              {selected.details.map(item => (
                <div key={item.name} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-1.5 rounded-full flex-shrink-0 mt-1" style={{ background: selected.color, minHeight: '1rem' }} />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{item.info}</div>
                  </div>
                </div>
              ))}

              <a
                href="#contact"
                className="block mt-2 w-full text-center py-3 rounded-xl font-semibold text-white text-sm transition hover:opacity-90"
                style={{ background: selected.color }}
                onClick={() => setSelected(null)}
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
