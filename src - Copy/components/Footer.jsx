import React from 'react';

const Footer = () => (
  <footer className="bg-[#FFF7F0] text-gray-700 border-t border-[#F0F0F0] mt-12">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-[#FF9933]">Finlytiq</div>
      <nav className="flex flex-wrap gap-6 text-base font-medium">
        <a href="#" className="hover:text-[#FF9933] transition">Home</a>
        <a href="#about" className="hover:text-[#FF9933] transition">About</a>
        <a href="#services" className="hover:text-[#FF9933] transition">Services</a>
        <a href="#contact" className="hover:text-[#FF9933] transition">Contact</a>
      </nav>
      <div className="text-sm text-gray-500 text-center md:text-right">
        <div>Email: <a href="mailto:info@finlytiq.com" className="text-[#FF9933] hover:underline">info@finlytiq.com</a></div>
        <div>Phone: <a href="tel:+911234567890" className="text-[#FF9933] hover:underline">+91 12345 67890</a></div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 py-4 border-t border-[#F0F0F0]">
      &copy; {new Date().getFullYear()} Finlytiq LLP. All rights reserved.
    </div>
  </footer>
);

export default Footer;