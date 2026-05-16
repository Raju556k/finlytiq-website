import React from 'react';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Compliance-First',
    desc: 'Every solution is built around 100% regulatory compliance — no shortcuts, no surprises.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Speed & Precision',
    desc: 'Rapid turnarounds backed by a meticulous team that never compromises on accuracy.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Client-Centric',
    desc: 'Dedicated relationship managers who understand your business and grow with you.',
  },
];

const About = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">

    {/* Decorative accent */}
    <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#FF9933] to-transparent" />

    <div className="max-w-6xl mx-auto px-6">

      {/* Label */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-[#1A237E]/8 text-[#1A237E] text-xs font-semibold tracking-widest uppercase mb-4">
          Who We Are
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">About Finlytiq</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
          Finlytiq LLP is a professional firm providing smart, compliant, and scalable financial services
          tailored for startups, SMEs, and enterprises across India.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-16">

        {/* Left: story */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Simplifying Finance &<br />
            <span className="text-[#FF9933]">Empowering Businesses</span>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-5">
            Founded by seasoned finance professionals, Finlytiq was built with a single mission —
            to make world-class financial expertise accessible to every business, regardless of size.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From a first-time entrepreneur filing their ITR to a scaling startup seeking a Virtual CFO,
            we bring precision, speed, and deep regulatory knowledge to every engagement.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A237E] text-white font-semibold rounded-full text-sm hover:bg-[#0e1660] transition-colors shadow-md shadow-[#1A237E]/20"
          >
            Work With Us
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>

        {/* Right: pillar cards */}
        <div className="space-y-4">
          {pillars.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#FF9933]/30 hover:bg-orange-50/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF9933]/10 flex items-center justify-center text-[#FF9933] flex-shrink-0">
                {icon}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1">{title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '500+', label: 'Clients Served', color: '#FF9933' },
          { value: '8+',   label: 'Years of Expertise', color: '#1A237E' },
          { value: '99%',  label: 'Compliance Rate', color: '#00C853' },
          { value: '50+',  label: 'Team Experts', color: '#FF9933' },
        ].map(({ value, label, color }) => (
          <div
            key={label}
            className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
          >
            <div className="text-4xl font-black mb-1" style={{ color }}>{value}</div>
            <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
