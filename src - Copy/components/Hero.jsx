import React from 'react';

const Hero = () => (
  <section className="relative bg-gradient-to-br from-[#FFF] via-[#F0F0F0] to-[#FFF7F0] py-24 text-center overflow-hidden">
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        <span className="text-[#FF9933]">Finlytiq</span> — Your Virtual CFO & Tax Partner
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
        Modern, compliant, and scalable solutions for <span className="text-[#FF9933] font-semibold">Income Tax</span>, <span className="text-[#FF9933] font-semibold">GST</span>, <span className="text-[#FF9933] font-semibold">VCFO</span>, Startup Advisory & more.
      </p>
      <a
        href="#services"
        className="inline-block px-8 py-3 rounded-full bg-[#FF9933] text-white font-semibold text-lg shadow-md hover:bg-[#e67c00] transition"
      >
        Explore Our Services
      </a>
    </div>
    {/* Decorative circles for fintech feel */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF9933] opacity-10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F0F0F0] opacity-60 rounded-full blur-2xl"></div>
  </section>
);

export default Hero;