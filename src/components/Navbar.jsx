import React from 'react';
import { Link } from 'react-router-dom';
import JsonLd from './JsonLd';
import { getLocalBusinessJsonLd } from '../utils/structuredData';

const Navbar = () => (
  <>
  <JsonLd data={getLocalBusinessJsonLd()} />
  <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-[#F0F0F0] shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
      <Link to="/" className="text-2xl font-extrabold tracking-tight animated-gradient-3d" style={{ fontFamily: 'Poppins, Inter, Roboto, Arial, sans-serif', letterSpacing: '0.05em' }}>FINLYTIQ</Link>
      <ul className="flex gap-6 font-medium text-gray-800">
        <li><Link to="/" className="hover:text-[#FF9933] transition">Home</Link></li>
        <li><a href="#about" className="hover:text-[#FF9933] transition">About</a></li>
        <li><Link to="/services" className="hover:text-[#FF9933] transition">Services</Link></li>
        <li><a href="#testimonials" className="hover:text-[#FF9933] transition">Success Stories</a></li>
        <li><a href="#contact" className="hover:text-[#FF9933] transition">Contact</a></li>
        <li><Link to="/calendar" className="hover:text-[#FF9933] transition">Calendar</Link></li>
      </ul>
    </div>
  </nav>
  </>
);

export default Navbar;