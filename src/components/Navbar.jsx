import React from 'react';

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-[#F0F0F0] shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
      <a href="#" className="text-2xl font-extrabold tracking-tight animated-gradient-3d" style={{ fontFamily: 'Poppins, Inter, Roboto, Arial, sans-serif', letterSpacing: '0.05em' }}>FINLYTIQ</a>
      <ul className="flex gap-6 font-medium text-gray-800">
        <li><a href="#" className="hover:text-[#FF9933] transition">Home</a></li>
        <li><a href="#about" className="hover:text-[#FF9933] transition">About</a></li>
        <li><a href="#services" className="hover:text-[#FF9933] transition">Services</a></li>
        <li><a href="#testimonials" className="hover:text-[#FF9933] transition">Success Stories</a></li>
        <li><a href="#contact" className="hover:text-[#FF9933] transition">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;