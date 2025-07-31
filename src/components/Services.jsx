import React, { useState } from 'react';

const services = [
  {
    title: 'Income Tax Filing',
    icon: '📄',
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
    icon: '🧾',
    desc: 'Seamless GST registration, monthly/quarterly returns, and compliance.',
    details: [
      { name: 'GST Registration', info: 'For businesses with turnover above threshold or voluntary registration.' },
      { name: 'GST Returns', info: 'GSTR-1, GSTR-3B, GSTR-9, and more.' },
      { name: 'GST Audit', info: 'Annual GST audit and compliance.' },
    ],
  },
  {
    title: 'Virtual CFO (VCFO)',
    icon: '👔',
    desc: 'Strategic financial leadership and reporting for your growing business.',
    details: [
      { name: 'Financial Planning', info: 'Budgeting, forecasting, and cash flow management.' },
      { name: 'MIS Reporting', info: 'Monthly/quarterly management reports.' },
      { name: 'Investor Relations', info: 'Support for fundraising and investor queries.' },
    ],
  },
  {
    title: 'Startup Advisory',
    icon: '💡',
    desc: 'Guidance on incorporation, funding, and compliance for startups.',
    details: [
      { name: 'Company Incorporation', info: 'Private Limited, LLP, OPC registration.' },
      { name: 'Pitch Decks', info: 'Investor-ready business plans and pitch decks.' },
      { name: 'Compliance', info: 'ROC, FEMA, and other regulatory compliance.' },
    ],
  },
  {
    title: 'Company Incorporation',
    icon: '🏢',
    desc: 'Private Limited, LLP, and OPC registration with end-to-end support.',
    details: [
      { name: 'Private Limited', info: 'Best for startups and growing businesses.' },
      { name: 'LLP', info: 'Limited Liability Partnership registration.' },
      { name: 'OPC', info: 'One Person Company for solo founders.' },
    ],
  },
  {
    title: 'Trademark Registration',
    icon: '™️',
    desc: 'Protect your brand with hassle-free trademark registration.',
    details: [
      { name: 'Trademark Search', info: 'Check availability and avoid conflicts.' },
      { name: 'Application Filing', info: 'End-to-end filing and documentation.' },
      { name: 'Objection Handling', info: 'Expert help for examination objections.' },
    ],
  },
  {
    title: 'Other Services',
    icon: '🛠️',
    desc: 'Additional business and compliance services for your growth.',
    details: [
      { name: 'MSME Registration', info: 'Get your business registered as MSME for government benefits.' },
      { name: 'IEC Code', info: 'Import Export Code registration for international trade.' },
      { name: 'Firm Registration', info: 'Partnership, Proprietorship, and other firm registrations.' },
      { name: 'Trust Income Tax Exemptions', info: 'Assistance with 12A, 80G, and other exemptions for trusts.' },
      { name: 'Society Registration', info: 'Register your society for legal recognition.' },
      { name: 'FSSAI Registration', info: 'Food business operator license and compliance.' },
      { name: 'Digital Signature', info: 'DSC for directors, partners, and authorized signatories.' },
    ],
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (service) => {
    setSelected(service);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <section id="services" className="py-16 alt-section-bg relative overflow-hidden">
        {/* 3D glassy background */}
        <div className="absolute inset-0 z-0" aria-hidden="true" style={{ pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '90%',
            height: '80%',
            background: 'linear-gradient(120deg, rgba(26,35,126,0.12) 0%, rgba(0,200,83,0.10) 50%, rgba(255,153,51,0.10) 100%)',
            filter: 'blur(32px)',
            borderRadius: '2rem',
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="glass-card py-10 px-4">
            <h3 className="text-3xl font-bold text-center mb-10 tracking-tight">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <button
                  key={service.title}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#F0F0F0] group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                  onClick={() => handleOpen(service)}
                  aria-label={`View details for ${service.title}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl mb-2">{service.icon}</span>
                    <h4 className="text-xl font-semibold mb-2 mt-1 group-hover:text-[#FF9933] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal for subservice details */}
      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border-4 border-[#1A237E]">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#FF9933] text-2xl font-bold hover:text-[#1A237E] focus:outline-none"
              aria-label="Close details"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-4">
              <span className="text-4xl mb-2">{selected.icon}</span>
              <h4 className="text-2xl font-bold text-[#1A237E] mb-2">{selected.title}</h4>
              <p className="text-gray-700 mb-4 text-center">{selected.desc}</p>
            </div>
            <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {selected.details.map((item) => (
                <li key={item.name} className="p-4 rounded-lg bg-[#F0F0F0] border-l-4 border-[#FF9933]">
                  <div className="font-semibold text-[#1A237E]">{item.name}</div>
                  <div className="text-gray-700 text-sm">{item.info}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;