import React from 'react';

const Footer = () => (
  <footer style={{ background: '#FFF7ED', position: 'relative', zIndex: 2 }} className="text-gray-700 border-t border-[#F0F0F0] mt-12">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg rounded-2xl"
      style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)' }}>
      <div className="text-lg font-bold text-[#FF9933]">Finlytiq</div>
      <nav className="flex flex-wrap gap-6 text-base font-medium">
        <a href="#" className="hover:text-[#FF9933] transition">Home</a>
        <a href="#about" className="hover:text-[#FF9933] transition">About</a>
        <a href="#services" className="hover:text-[#FF9933] transition">Services</a>
        <a href="#contact" className="hover:text-[#FF9933] transition">Contact</a>
      </nav>
      <div className="text-sm text-gray-600 text-center md:text-right">
        <div>Email: <a href="mailto:team.finlytiq@gmail.com" className="text-[#FF9933] hover:underline">team.finlytiq@gmail.com</a></div>
        <div>Phone: <a href="tel:+919603799411" className="text-[#FF9933] hover:underline">+91 9603799411</a>, <a href="tel:+919701557017" className="text-[#FF9933] hover:underline">+91 9701557017</a></div>
        <div>Address: Plot 8/2, 4th Floor, HUDA Techni Enclave, Near Raidurg Metro, Madhapur, Hyderabad 500081</div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 py-4 border-t border-[#F0F0F0]"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(2px)' }}>
      &copy; {new Date().getFullYear()} Finlytiq LLP. All rights reserved.
    </div>
  </footer>
);

export default Footer;