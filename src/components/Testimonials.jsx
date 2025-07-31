import React, { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Satyanarayana',
    role: 'Prinics India Photo Printers Private Limited',
    quote:
      'Finlytiq’s VCFO services and GST registration streamlined our finances and compliance. Highly professional and reliable.'
  },
  {
    name: 'Krishna Kiran',
    role: 'Incygys Automation Private Limited',
    quote:
      'Their Audit and GST registration support was thorough and efficient. We trust Finlytiq for all our compliance needs.'
  },
  {
    name: 'Shashank',
    role: 'Mithra Industries',
    quote:
      'Accounting, Audit, and GST registration were handled seamlessly by Finlytiq. Excellent service and expertise.'
  },
  {
    name: 'Ramesh',
    role: 'Triranga Capital Private Limited',
    quote:
      'Audit and GST registration were made easy with Finlytiq’s expert team. Highly recommended!'
  },
  {
    name: 'Srikanth',
    role: 'Dharamshastra Infrastructure Private Limited',
    quote:
      'Finlytiq’s VCFO services and GST registration have been invaluable for our business growth and compliance.'
  },
];

const Testimonials = () => {
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef(null);

  return (
    <section className="py-16 section-bg relative overflow-hidden">
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
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="glass-card py-10 px-4">
          <h3 className="text-3xl font-bold text-center mb-10 tracking-tight glass-heading">Success Stories</h3>
          <div className="overflow-x-hidden">
            <div
              ref={marqueeRef}
              className={`flex gap-8 animate-testimonials-marquee${paused ? ' paused' : ''}`}
              style={{ width: 'max-content' }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {testimonials.concat(testimonials).map(({ name, role, quote }, idx) => (
                <div
                  key={name + idx}
                  className="bg-[#F0F0F0] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-[#FF9933] group min-w-[320px] max-w-xs flex-shrink-0"
                >
                  <p className="text-gray-800 text-base mb-4 italic">“{quote}”</p>
                  <div className="mt-4">
                    <div className="font-semibold group-hover:text-[#FF9933] transition-colors">{name}</div>
                    <div className="text-sm text-gray-600">{role}</div>
                  </div>
                </div>
              ))}
            </div>
            <style>{`
              @keyframes testimonials-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-testimonials-marquee {
                animation: testimonials-marquee 48s linear infinite;
              }
              .animate-testimonials-marquee.paused {
                animation-play-state: paused !important;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;