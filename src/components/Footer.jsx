import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Footer = () => (
  <footer className="bg-[#050918] text-gray-400">

    {/* CTA strip */}
    <div className="border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-white font-bold text-lg mb-0.5">Ready to get started?</div>
          <div className="text-gray-400 text-sm">Free consultation · No commitment · Expert CAs ready</div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/book-consultation" className="px-6 py-2.5 bg-brand-orange text-white font-bold rounded-full text-sm hover:bg-brand-orange-d transition shadow-orange">
            Book Free Consult
          </Link>
          <a href="tel:+919603799411" className="px-6 py-2.5 border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 transition">
            📞 Call Now
          </a>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* Brand — 2 cols */}
      <div className="lg:col-span-2">
        <Link to="/" className="inline-block text-2xl font-black animated-gradient-3d tracking-widest mb-2">FINLYTIQ</Link>
        <div className="text-xs text-gray-500 font-medium mb-1 tracking-wide uppercase">LLP · Financial Advisors</div>
        <div className="text-[11px] text-brand-orange/60 font-semibold tracking-widest uppercase mb-4 font-display">
          Intelligence behind every financial move
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
          Multi-disciplinary advisory firm — CAs, Company Secretaries, Cost Accountants &amp; Legal Experts. Serving 500+ businesses across Hyderabad &amp; India.
        </p>
        {/* Social links */}
        <div className="flex gap-2.5 mb-6">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/company/finlytiq', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
            { label: 'Twitter', href: 'https://twitter.com/finlytiq', svg: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /> },
            { label: 'Instagram', href: 'https://instagram.com/finlytiq', svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
          ].map(({ label, href, svg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/40 hover:text-brand-orange transition-all">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">{svg}</svg>
            </a>
          ))}
        </div>
        {/* Contact quick */}
        <div className="space-y-2 text-sm">
          <a href="tel:+919603799411" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand-orange">📞</span> +91 9603799411
          </a>
          <a href="mailto:team.finlytiq@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="text-brand-orange">📧</span> team.finlytiq@gmail.com
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Services</h4>
        <ul className="space-y-2.5">
          {services.map(s => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}`} className="text-sm hover:text-brand-orange transition-colors">{s.shortTitle}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Company</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { to: '/about', label: 'About Us' },
            { to: '/services', label: 'All Services' },
            { to: '/resources', label: 'Resources & Guides' },
            { to: '/faq', label: 'FAQ' },
            { to: '/contact', label: 'Contact Us' },
            { to: '/book-consultation', label: 'Book Consultation' },
          ].map(({ to, label }) => (
            <li key={label}><Link to={to} className="hover:text-brand-orange transition-colors">{label}</Link></li>
          ))}
        </ul>
      </div>

      {/* Local SEO */}
      <div>
        <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Hyderabad</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { to: '/chartered-accountant-hyderabad', label: 'CA in Hyderabad' },
            { to: '/gst-consultant-hyderabad', label: 'GST Consultant' },
            { to: '/company-registration-telangana', label: 'Company Registration' },
            { to: '/services/income-tax-filing', label: 'Tax Filing' },
            { to: '/services/virtual-cfo', label: 'Virtual CFO' },
            { to: '/services/nri-taxation', label: 'NRI Tax Services' },
          ].map(({ to, label }) => (
            <li key={label}><Link to={to} className="hover:text-brand-orange transition-colors">{label}</Link></li>
          ))}
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>&copy; {new Date().getFullYear()} Finlytiq LLP. All rights reserved. ICAI Registered.</span>
        <div className="flex gap-5">
          <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-gray-400 transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
