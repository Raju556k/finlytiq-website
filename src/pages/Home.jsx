import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import ServiceIllustration from '../components/ui/ServiceIllustrations';
import { services } from '../data/services';

/* ── HERO ── */
const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-premium-dark">
    {/* Ambient orbs — larger + more dramatic */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-navy-l rounded-full opacity-[0.20] blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-orange rounded-full opacity-[0.08] blur-[100px] pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />
    {/* Floating glass shapes (3D depth) */}
    <div className="glass-shape-dark w-64 h-64 top-[15%] right-[8%] orb-1" />
    <div className="glass-shape-dark w-40 h-40 bottom-[20%] left-[5%] orb-2" style={{ borderRadius: '32px', transform: 'rotate(25deg)' }} />
    <div className="glass-shape-dark w-28 h-28 top-[60%] right-[25%] orb-3" style={{ borderRadius: '50%' }} />
    {/* Subtle grid */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.030]"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
    {/* Centre spotlight */}
    <div className="spotlight" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-gray-300 text-xs font-medium tracking-wider uppercase mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
        Hyderabad's Premier Financial Advisory Firm
      </div>

      {/* Hollow text (swatweb style) */}
      <div className="text-stroke text-6xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter leading-none mb-2 select-none" aria-hidden="true">
        FINLYTIQ
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-4 leading-[1.08]">
        Strategic Financial, Tax<br className="hidden md:block" />
        &amp; Compliance Solutions<br className="hidden md:block" />
        <span className="animated-gradient-3d">for Growing Businesses.</span>
      </h1>

      {/* Tagline */}
      <p className="text-brand-orange/70 font-semibold text-xs tracking-[0.25em] uppercase mb-6 font-display">
        Intelligence behind every financial move
      </p>

      <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
        From registrations to advanced advisory — structured, reliable, and practical business solutions backed by CAs, Company Secretaries, Cost Accountants, and Legal Experts.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-22">
        <Link to="/book-consultation"
          className="btn-premium px-9 py-4 bg-brand-orange text-white font-bold rounded-full text-base shadow-orange hover:shadow-orange-lg hover:bg-brand-orange-d">
          Book Free Consultation
        </Link>
        <a href="https://wa.me/919603799411" target="_blank" rel="noopener noreferrer"
          className="btn-premium px-9 py-4 border border-white/15 text-white font-semibold rounded-full text-base hover:border-green-400/40 hover:bg-white/[0.04] flex items-center justify-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Talk to an Expert
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {[
          { v: '500+', l: 'Clients Served' },
          { v: '8+', l: 'Years Experience' },
          { v: '99%', l: 'Compliance Rate' },
          { v: '₹0', l: 'Hidden Charges' },
        ].map(({ v, l }) => (
          <div key={l} className="glass-panel-dark p-6 rounded-2xl hover:border-white/[0.12] transition-all duration-300">
            <div className="text-3xl md:text-4xl font-black text-brand-orange mb-1 text-glow-orange">{v}</div>
            <div className="text-[11px] text-gray-500 font-medium tracking-widest uppercase">{l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 text-[10px] tracking-[0.2em] uppercase">
      <span>Scroll</span>
      <div className="w-5 h-8 rounded-full border border-gray-700 flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-gray-600 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
);

/* ── SCROLLING MARQUEE BAND (swatweb inspired) ── */
const MarqueeBand = () => {
  const items = ['GST Registration', 'Income Tax Filing', 'Company Incorporation', 'Virtual CFO', 'ROC Compliance', 'NRI Taxation', 'Startup Advisory', 'Business Consulting', 'Accounting'];
  return (
    <div className="marquee-band bg-[#003580] py-4 select-none">
      <div className="marquee-band-inner">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-band-item text-white">
            {item}
            <span className="w-2 h-2 rounded-full bg-white/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── TRUST BAR ── */
const TrustBar = () => (
  <div className="bg-white py-6">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-gray-500 font-medium">
        {[
          { icon: '✅', text: 'ICAI Registered' },
          { icon: '✅', text: 'MCA Approved' },
          { icon: '✅', text: 'GST Council Listed' },
          { icon: '✅', text: 'DPIIT Startup India Partner' },
          { icon: '✅', text: 'CA · CS · CMA · Legal Experts' },
          { icon: '✅', text: '100% Digital Process' },
        ].map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-1.5">
            <span>{icon}</span>{text}
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── SERVICES GRID ── */
const ServicesSection = () => (
  <section className="py-28 bg-premium-light relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">Comprehensive Financial<br className="hidden sm:block" />&amp; Advisory Services</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base">Expert professionals across disciplines — delivering end-to-end execution, not just advice.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(svc => (
          <Link key={svc.slug} to={`/services/${svc.slug}`}
            className="premium-card gradient-border group glass-panel p-7 rounded-3xl overflow-hidden relative">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${svc.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
            {/* 3D Illustration */}
            <div className="flex justify-center mb-4">
              <ServiceIllustration slug={svc.slug} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors text-[17px]">{svc.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.tagline}</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange">
              Learn more
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300">
                <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline">
          View all services &amp; pricing details →
        </Link>
      </div>
    </div>
  </section>
);

/* ── CLIENTS / TRUSTED BY ── */
const industries = [
  { icon: '💻', name: 'IT & SaaS Startups' },
  { icon: '🏗️', name: 'Real Estate & Construction' },
  { icon: '📦', name: 'Trading & Distribution' },
  { icon: '💊', name: 'Pharma & Healthcare' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🛒', name: 'E-commerce & D2C' },
  { icon: '⚖️', name: 'Professional Services' },
  { icon: '🌏', name: 'NRI Investors' },
];

const TrustedBy = () => (
  <section className="py-28 bg-premium-white relative">
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">Our Clients</span>
        <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">
          Trusted by 500+ Businesses
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Across industries including startups, real estate, trading, and professional services
        </p>
      </div>

      {/* Industry grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {industries.map(({ icon, name }) => (
          <div key={name} className="premium-card flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-card group cursor-default">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-brand-orange transition-colors leading-tight">{name}</span>
          </div>
        ))}
      </div>

      {/* Client logo placeholder grid */}
      <div className="border border-gray-200/60 rounded-3xl p-10 bg-white/50">
        <p className="text-[11px] text-gray-400 text-center uppercase tracking-[0.2em] mb-8 font-medium">Some of our clients</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-items-center">
          {[
            { sector: 'IT', color: '#1A237E' },
            { sector: 'Food', color: '#00695C' },
            { sector: 'Tech', color: '#FF9933' },
            { sector: 'Legal', color: '#6A1B9A' },
            { sector: 'Infra', color: '#0D47A1' },
            { sector: 'Export', color: '#B71C1C' },
          ].map(({ sector, color }) => (
            <div key={sector}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xs font-black shadow-sm grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 cursor-default"
              style={{ background: color }}>
              {sector}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-8">
          Want to add your logo here?{' '}
          <Link to="/contact" className="text-brand-orange hover:underline font-medium">Become a client →</Link>
        </p>
      </div>
    </div>
  </section>
);

/* ── WHY US ── */
const WhyUs = () => (
  <section className="py-28 bg-premium-muted relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy-l/10 text-brand-navy-l text-xs font-semibold tracking-widest uppercase mb-5">Why Finlytiq</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Advisory-Led.<br />Technology-Powered.
          </h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            We bring together Chartered Accountants, Company Secretaries, Cost Accountants, and Legal Experts — delivering multi-disciplinary precision with a digital-first approach.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            No back-and-forth, no paperwork nightmares — just structured, expert-driven execution from a team that genuinely understands your business.
          </p>
          <div className="space-y-5 mb-10">
            {[
              { title: '100% Digital Process', desc: 'Share documents via WhatsApp or email. No office visits required.' },
              { title: 'Dedicated Relationship Manager', desc: 'One point of contact who knows your business inside-out.' },
              { title: 'Proactive Compliance Calendar', desc: 'We remind you before every deadline — never a late filing again.' },
              { title: 'Transparent, Fixed Pricing', desc: 'Fees quoted upfront. No hidden charges, no billing surprises.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 20 20" fill="#00C853" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-0.5">{title}</div>
                  <div className="text-gray-500 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-premium inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy-l text-white font-semibold rounded-full text-sm shadow-navy">
            Meet the Team →
          </Link>
        </div>

        {/* Right: metrics */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { v: '500+', l: 'Businesses Served', sub: 'Across Hyderabad & India', color: 'bg-brand-orange' },
            { v: '8+', l: 'Years of Expertise', sub: 'Senior advisory team', color: 'bg-brand-navy-l' },
            { v: '< 48h', l: 'Average Response', sub: 'To all queries', color: 'bg-brand-teal' },
            { v: '99%', l: 'Client Retention', sub: 'Long-term relationships', color: 'bg-gray-800' },
          ].map(({ v, l, sub, color }) => (
            <div key={l} className={`${color} text-white p-8 rounded-3xl premium-card`}>
              <div className="text-4xl font-black mb-1.5">{v}</div>
              <div className="font-semibold text-sm mb-0.5">{l}</div>
              <div className="text-xs opacity-60">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── PROCESS ── */
const Process = () => (
  <section className="py-28 bg-premium-white relative">
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">How It Works</span>
      <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">Get Started in 4 Simple Steps</h2>
      <p className="text-gray-500 max-w-lg mx-auto mb-14">We handle the complexity. You focus on growth.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { n: '01', title: 'Book a Free Call', desc: 'Schedule a 30-minute consultation with a senior advisor — no obligation.' },
          { n: '02', title: 'Share Documents', desc: 'Send documents via WhatsApp or email — we set up a secure shared folder.' },
          { n: '03', title: 'We Handle It', desc: 'Our team completes filings, registrations, or reports with zero hassle.' },
          { n: '04', title: 'Stay Compliant', desc: 'Get proactive reminders, monthly reports, and ongoing support.' },
        ].map(({ n, title, desc }, i) => (
          <div key={n} className="premium-card relative glass-panel p-8 rounded-3xl text-left">
            {i < 3 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-gray-300">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className="text-5xl font-black text-brand-orange/15 mb-4 font-display leading-none">{n}</div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Link to="/book-consultation"
          className="btn-premium inline-flex items-center gap-2 px-9 py-4 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:shadow-orange-lg">
          Start Now — It's Free
        </Link>
      </div>
    </div>
  </section>
);

/* ── TESTIMONIALS ── */
const testimonials = [
  { role: 'Founder, IT Startup – Hyderabad', quote: 'Finlytiq handled our GST registration, ITR filing, and company incorporation. Their VCFO service is a game changer for early-stage startups.', stars: 5 },
  { role: 'Director, Professional Services Firm', quote: 'Professional, prompt, and reliable. The team helped us incorporate our LLP and stay ROC-compliant effortlessly.', stars: 5 },
  { role: 'CFO, Food & Beverage Company', quote: 'Their Virtual CFO service transformed our financial reporting. We now have real-time MIS dashboards and quarterly board presentations.', stars: 5 },
  { role: 'NRI Client, Pune', quote: 'Managing Indian tax filings was a nightmare. Finlytiq made it completely painless — and claimed DTAA benefits I didn\'t know I had.', stars: 5 },
  { role: 'CEO, Technology Solutions Company', quote: 'Exceptional! Trademark + company registration + GST all sorted within 2 weeks. Most professional advisory firm I\'ve worked with.', stars: 5 },
];

const Testimonials = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section className="py-28 bg-premium-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-navy-l opacity-[0.15] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange opacity-[0.06] blur-[80px]" />
      </div>
      {/* Floating glass shapes */}
      <div className="glass-shape-dark w-52 h-52 top-[10%] left-[5%] orb-1" />
      <div className="glass-shape-dark w-36 h-36 bottom-[15%] right-[8%] orb-3" style={{ borderRadius: '50%' }} />
      <div className="section-divider-dark absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">Client Reviews</span>
          <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-3">What Clients Say</h2>
          <p className="text-gray-500 mb-3">Trusted by 500+ businesses across Hyderabad &amp; India</p>
          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => <span key={i} className="text-brand-orange text-xl">★</span>)}
            <span className="ml-2 text-gray-500 text-sm font-medium self-center">4.9/5 across 300+ reviews</span>
          </div>
        </div>

        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className={`flex gap-5 w-max ${paused ? '' : 'animate-marquee'}`}>
            {[...testimonials, ...testimonials].map(({ role, quote, stars }, i) => (
              <div key={i} className="w-[340px] flex-shrink-0 bg-white/[0.05] backdrop-blur-sm p-8 rounded-3xl border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(stars)].map((_, s) => <span key={s} className="text-brand-orange text-sm">★</span>)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 opacity-70">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-gray-400 italic">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── FAQ SNIPPET ── */
const faqItems = [
  { q: 'How quickly can you register my company?', a: 'Private Limited Company and LLP registrations are typically completed within 7–10 working days from receipt of complete documents.' },
  { q: 'Do I need to visit your office?', a: 'No. Our entire process is digital. Share documents via WhatsApp or email, and we handle everything remotely.' },
  { q: 'Do you work with startups?', a: 'Absolutely. We specialize in end-to-end startup support — from incorporation and DPIIT registration to Virtual CFO and fundraising advisory.' },
  { q: 'What are your fees?', a: 'We offer fixed, transparent pricing with no hidden charges. Fees vary by service — contact us for a custom quote.' },
];

const FAQSnippet = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-28 bg-premium-muted relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">FAQ</span>
          <h2 className="text-4xl font-black font-display text-gray-900 tracking-tight">Common Questions</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map(({ q, a }, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
              <button
                className="w-full flex justify-between items-center px-7 py-6 text-left font-semibold text-gray-900 hover:text-brand-orange transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {open === i && <div className="px-7 pb-6 text-gray-600 text-sm leading-relaxed">{a}</div>}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/faq" className="text-sm font-semibold text-brand-orange hover:underline">View all FAQs →</Link>
        </div>
      </div>
    </section>
  );
};

/* ── FINAL CTA ── */
const FinalCTA = () => (
  <section className="py-34 bg-premium-dark relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-orange opacity-[0.08] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-navy-l opacity-[0.12] rounded-full blur-[120px]" />
    </div>
    {/* Floating glass shapes */}
    <div className="glass-shape-dark w-44 h-44 top-[20%] right-[10%] orb-2" />
    <div className="glass-shape-dark w-60 h-60 bottom-[10%] left-[3%] orb-1" style={{ borderRadius: '50%' }} />
    <div className="section-divider-dark absolute top-0 left-0 right-0" />
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] text-brand-orange text-xs font-semibold mb-8 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
        Limited consultation slots available this month
      </div>

      {/* Hollow text accent */}
      <div className="text-stroke-orange text-5xl md:text-7xl font-black font-display tracking-tighter leading-none mb-3 select-none" aria-hidden="true">
        LET'S GROW
      </div>

      <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight mb-3">
        Ready to Make Every<br />
        <span className="animated-gradient-3d">Financial Move Count?</span>
      </h2>
      <p className="text-brand-orange/60 text-xs font-semibold tracking-[0.25em] uppercase mb-6 font-display">
        Intelligence behind every financial move
      </p>
      <p className="text-gray-400 mb-10 text-lg font-light max-w-xl mx-auto">
        Join 500+ businesses who trust Finlytiq for end-to-end financial, tax, compliance, and strategic advisory.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/book-consultation"
          className="btn-premium px-9 py-4 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:shadow-orange-lg">
          Book Free Consultation
        </Link>
        <a href="https://wa.me/919603799411" target="_blank" rel="noopener noreferrer"
          className="btn-premium px-9 py-4 border border-white/15 text-white font-semibold rounded-full hover:border-white/30 hover:bg-white/[0.04] flex items-center justify-center gap-2.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Talk on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

/* ── PAGE ── */
const Home = () => (
  <>
    <SEO
      title="Financial &amp; Business Advisory – Hyderabad"
      description="Finlytiq LLP – multi-disciplinary financial and business advisory firm in Hyderabad. Expert CAs, Company Secretaries, Cost Accountants &amp; Legal Experts for GST, Income Tax, Company Registration, Virtual CFO, NRI Taxation &amp; more."
      canonical="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Finlytiq LLP – Home",
        "url": "https://finlytiqllp.com/"
      }}
    />
    <Hero />
    <MarqueeBand />
    <TrustBar />
    <ServicesSection />
    <TrustedBy />
    <WhyUs />
    <Process />
    <Testimonials />
    <FAQSnippet />
    <FinalCTA />
  </>
);

export default Home;
