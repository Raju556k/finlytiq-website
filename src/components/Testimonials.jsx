import React, { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Founder, TechStart',
    initials: 'AS',
    color: '#1A237E',
    quote: 'Finlytiq made our Income Tax and GST compliance seamless. Their VCFO service is a game changer for startups!',
  },
  {
    name: 'Priya Verma',
    role: 'Director, Verma & Co.',
    initials: 'PV',
    color: '#00695C',
    quote: 'Professional, prompt, and reliable. The Startup Advisory team helped us incorporate and scale with confidence.',
  },
  {
    name: 'Rahul Mehta',
    role: 'CFO, GreenLeaf',
    initials: 'RM',
    color: '#FF9933',
    quote: 'Their expertise in tax and financial planning is unmatched. Highly recommended for any growing business.',
  },
  {
    name: 'Sneha Patel',
    role: 'Entrepreneur',
    initials: 'SP',
    color: '#6A1B9A',
    quote: 'The VCFO and GST services from Finlytiq have been invaluable for my business growth and compliance.',
  },
  {
    name: 'Vikram Nair',
    role: 'CEO, NovaTech',
    initials: 'VN',
    color: '#C62828',
    quote: 'Exceptional service! Finlytiq handled our company incorporation and trademark seamlessly. Highly professional team.',
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" fill="#FF9933" className="w-4 h-4">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF9933] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1A237E] opacity-[0.05] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-xs font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Success Stories
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base">
            Trusted by 500+ clients across India. Here's what they say.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex gap-6 animate-testimonials-marquee${paused ? ' paused' : ''}`}
            style={{ width: 'max-content' }}
          >
            {[...testimonials, ...testimonials].map(({ name, role, initials, color, quote }, idx) => (
              <div
                key={name + idx}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 min-w-[320px] max-w-[340px] flex-shrink-0 hover:shadow-md transition-shadow"
              >
                <Stars />
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: color }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-xs text-gray-400">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
          {['Multi-Disciplinary Experts', 'Confidential & Secure', 'Transparent Pricing', 'Pan-India Service'].map(badge => (
            <div key={badge} className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" fill="#00C853" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
