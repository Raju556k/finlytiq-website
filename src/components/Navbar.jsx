import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { services } from '../data/services';

const mainLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navBase = 'relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-200 hover:after:w-full';
  const activeClass = 'text-brand-orange after:w-full';
  const inactiveClass = 'text-gray-600 hover:text-gray-900';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'} border-b border-gray-100`}>

      {/* Announcement bar */}
      <div className="bg-brand-navy text-white text-xs py-1.5 text-center font-medium tracking-wide">
        <span className="hidden sm:inline">📌 Filing deadlines approaching — </span>
        <Link to="/book-consultation" className="underline hover:text-brand-orange transition-colors">
          Book a free consultation today →
        </Link>
      </div>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3.5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl md:text-2xl font-black animated-gradient-3d tracking-widest">FINLYTIQ</span>
          <span className="hidden sm:block text-[10px] text-gray-400 font-medium leading-tight pt-1 tracking-wide uppercase">
            LLP<br/>Financial Advisors
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {mainLinks.map(({ to, label, hasDropdown }) =>
            hasDropdown ? (
              <li key={label} className="relative" ref={dropdownRef}>
                <button
                  className={`${navBase} ${inactiveClass} flex items-center gap-1`}
                  onClick={() => setServicesOpen(v => !v)}
                  aria-expanded={servicesOpen}
                >
                  {label}
                  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Mega-dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 grid grid-cols-3 gap-2">
                    <div className="col-span-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 px-2">Our Services</div>
                    {services.map(svc => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-gray-50 group transition-colors"
                      >
                        <span className="text-lg flex-shrink-0">{svc.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-gray-800 group-hover:text-brand-orange transition-colors leading-tight">{svc.shortTitle}</div>
                          <div className="text-xs text-gray-400 leading-tight mt-0.5">{svc.tagline}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-3 mt-2 pt-3 border-t border-gray-100 flex justify-between items-center px-1">
                      <Link to="/services" className="text-xs font-semibold text-brand-orange hover:underline">View all services →</Link>
                      <Link to="/book-consultation" className="text-xs px-3 py-1.5 bg-brand-orange text-white font-semibold rounded-full hover:bg-brand-orange-d transition">Free Consultation</Link>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={label}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `${navBase} ${isActive ? activeClass : inactiveClass}`}
                >
                  {label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919603799411"
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-orange transition-colors font-medium"
            onClick={() => window.gtag && window.gtag('event', 'phone_call_click', { event_category: 'engagement', event_label: 'navbar_desktop' })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 9603799411
          </a>
          <Link
            to="/book-consultation"
            className="px-4 py-2.5 bg-brand-orange text-white text-sm font-bold rounded-full shadow-orange hover:bg-brand-orange-d hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Free Consult
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-gray-100 overflow-y-auto`}>
        <div className="px-5 py-4 space-y-1">
          {mainLinks.filter(l => !l.hasDropdown).map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium ${isActive ? 'text-brand-orange' : 'text-gray-700'} transition-colors`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile services expand */}
          <div>
            <button
              className="flex items-center gap-1 py-2.5 text-sm font-medium text-gray-700 w-full"
              onClick={() => setServicesOpen(v => !v)}
            >
              Services
              <svg viewBox="0 0 20 20" fill="currentColor" className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2 space-y-1 border-l-2 border-brand-orange/20 ml-2">
                {services.map(svc => (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-brand-orange transition-colors"
                  >
                    <span>{svc.icon}</span>{svc.shortTitle}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a href="tel:+919603799411" className="block text-center py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors"
              onClick={() => window.gtag && window.gtag('event', 'phone_call_click', { event_category: 'engagement', event_label: 'navbar_mobile' })}>
              📞 +91 9603799411
            </a>
            <Link
              to="/book-consultation"
              className="block text-center py-2.5 bg-brand-orange text-white text-sm font-bold rounded-full hover:bg-brand-orange-d transition"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
