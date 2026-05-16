import React from 'react';

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '8+',   label: 'Years Experience' },
  { value: '99%',  label: 'Compliance Rate' },
  { value: '50+',  label: 'Expert Team' },
];

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050918]">

    {/* Ambient orbs */}
    <div className="orb-1 absolute top-16 left-16 w-80 h-80 bg-[#FF9933] rounded-full opacity-[0.07] blur-3xl pointer-events-none" />
    <div className="orb-2 absolute bottom-24 right-12 w-[420px] h-[420px] bg-[#1A237E] rounded-full opacity-[0.14] blur-3xl pointer-events-none" />
    <div className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[#00C853] rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

    {/* Subtle grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">

      {/* Badge */}
      <div className="fade-in-up badge-pill mx-auto mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse inline-block" />
        India's Trusted Financial Intelligence Partner
      </div>

      {/* Headline */}
      <h1 className="fade-in-up delay-1 text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
        <span className="animated-gradient-3d">FINLYTIQ</span>
      </h1>

      {/* Sub-headline */}
      <p className="fade-in-up delay-2 text-xl md:text-2xl font-light text-gray-300 mb-4 max-w-2xl mx-auto">
        Intelligence behind every financial move.
      </p>

      <p className="fade-in-up delay-3 text-base md:text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
        Modern, compliant & scalable solutions for{' '}
        <span className="text-[#FF9933] font-semibold">Income Tax</span>,{' '}
        <span className="text-[#FF9933] font-semibold">GST</span>,{' '}
        <span className="text-[#FF9933] font-semibold">VCFO</span>,{' '}
        Startup Advisory & more.
      </p>

      {/* CTAs */}
      <div className="fade-in-up delay-4 flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <a
          href="#services"
          className="px-8 py-4 bg-[#FF9933] text-white font-bold rounded-full text-base shadow-xl shadow-[#FF9933]/30 hover:bg-[#e67c00] hover:shadow-[#FF9933]/50 hover:-translate-y-0.5 transition-all duration-200"
        >
          Explore Our Services
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border-2 border-white/15 text-white font-semibold rounded-full text-base hover:bg-white/8 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
        >
          Talk to an Expert
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {stats.map(({ value, label }, i) => (
          <div
            key={label}
            className={`stat-pop delay-${i + 1} text-center p-5 rounded-2xl bg-white/[0.045] border border-white/[0.08] backdrop-blur-sm`}
          >
            <div className="text-3xl font-black text-[#FF9933] mb-1">{value}</div>
            <div className="text-xs text-gray-400 font-medium tracking-wide uppercase">{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs tracking-widest uppercase">
      <span>Scroll</span>
      <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
        <div className="scroll-dot w-1 h-2 bg-gray-500 rounded-full" />
      </div>
    </div>
  </section>
);

export default Hero;
