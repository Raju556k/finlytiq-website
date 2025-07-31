import React from 'react';

const Hero = () => (
  <section
    className="relative section-bg py-32 text-center overflow-hidden flex items-center justify-center min-h-[60vh]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.92),rgba(255,255,255,0.92)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-3xl mx-auto px-4 relative z-10 glass-card py-12">
      <div className="text-lg md:text-xl font-semibold text-[#1A237E] mb-2 tracking-wide uppercase glass-heading">Welcome to</div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wide glass-heading">
        <span className="animated-gradient-3d">FINLYTIQ</span>
      </h1>
      <div className="text-xl md:text-2xl font-semibold text-[#1A237E] mb-6 glass-heading">
        Intelligence behind every financial move.
      </div>
      <p className="text-lg md:text-xl mb-8 font-medium text-gray-700">
        Modern, compliant, and scalable solutions for <span className="text-[#FF9933] font-semibold">Income Tax</span>, <span className="text-[#FF9933] font-semibold">GST</span>, <span className="text-[#FF9933] font-semibold">VCFO</span>, Startup Advisory & more.
      </p>
      <a
        href="#services"
        className="inline-block px-8 py-3 rounded-full bg-[#FF9933] text-white font-semibold text-lg shadow-md hover:bg-[#e67c00] transition"
      >
        Explore Our Services
      </a>
  </div>
  </section>
);

export default Hero;