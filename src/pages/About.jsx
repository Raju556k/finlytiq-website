import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const team = [
  { label: 'CA', role: 'Founding Partner & Tax Head', exp: '12+ years in direct & indirect taxation, Big 4 background.', color: '#1A237E' },
  { label: 'CA', role: 'Partner – Audit & Assurance', exp: '10+ years in statutory audit, financial reporting, IFRS.', color: '#00695C' },
  { label: 'CA', role: 'Head – Virtual CFO & Advisory', exp: '9+ years in financial strategy, fundraising, and MIS.', color: '#FF9933' },
  { label: 'CS', role: 'Company Secretary & MCA Lead', exp: '8+ years in ROC compliance, incorporation, and FEMA.', color: '#6A1B9A' },
];

const disciplines = [
  { icon: '📊', title: 'Chartered Accountants', desc: 'Tax planning, GST, financial reporting, audit, and advisory.' },
  { icon: '🏛️', title: 'Company Secretaries', desc: 'Corporate governance, ROC compliance, FEMA, and MCA filings.' },
  { icon: '📐', title: 'Cost Accountants', desc: 'Cost audits, management accounting, and process efficiency.' },
  { icon: '⚖️', title: 'Legal Experts', desc: 'Contract drafting, regulatory advisory, and dispute resolution.' },
];

const About = () => (
  <>
    <SEO
      title="About Us – Multi-Disciplinary Financial Advisory Firm, Hyderabad"
      description="Finlytiq LLP is a multi-disciplinary financial and business advisory firm in Hyderabad — with a team of Chartered Accountants, Company Secretaries, Cost Accountants, and Legal Experts serving 500+ businesses."
      canonical="/about"
    />

    {/* Hero */}
    <section className="bg-[#050918] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">About Us</div>
        <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-4">
          Built by Professionals<br />Who Understand Business
        </h1>
        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-3">
          We're not just compliance processors. We're strategic partners who deliver intelligence behind every financial move.
        </p>
        <p className="text-brand-orange/70 text-xs font-semibold tracking-widest uppercase font-display">
          Intelligence behind every financial move
        </p>
      </div>
    </section>

    {/* Disciplines */}
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Our Multi-Disciplinary Team</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disciplines.map(({ icon, title, desc }) => (
            <div key={title} className="text-center p-6 rounded-2xl bg-surface-card border border-gray-100 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              <div className="text-3xl mb-3">{icon}</div>
              <div className="font-bold text-gray-900 text-sm mb-1.5">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-black font-display text-gray-900 mb-5">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finlytiq LLP was founded with a clear conviction: businesses deserve financial services that are fast, transparent, and genuinely useful — not just compliant.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our founders — CAs, Company Secretaries, Cost Accountants, and legal professionals from Big 4 and mid-tier backgrounds — saw a clear gap: small and mid-size businesses in India were either paying enterprise prices or settling for low-quality compliance factories. No firm offered premium, multi-disciplinary expertise at accessible prices with a technology-first approach.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            So we built one. Finlytiq today serves 500+ businesses across Hyderabad, Telangana, and India — from first-time entrepreneurs to established SMEs and NRIs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '500+', l: 'Clients' },
              { v: '8+', l: 'Years' },
              { v: '99%', l: 'Retention' },
              { v: '4.9★', l: 'Rating' },
            ].map(({ v, l }) => (
              <div key={l} className="bg-surface-card p-5 rounded-xl border border-gray-100 text-center">
                <div className="text-3xl font-black text-brand-orange">{v}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Our Mission', desc: 'To make world-class financial and advisory services accessible to every Indian business, regardless of size.' },
            { title: 'Our Vision', desc: 'To be the most trusted financial intelligence partner for SMEs and startups across India by 2030.' },
            { title: 'Our Values', desc: 'Transparency, accuracy, client-first thinking, and zero tolerance for hidden fees or compliance shortcuts.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 bg-surface-card rounded-2xl border border-gray-100 hover:shadow-card transition-shadow">
              <div className="font-bold text-brand-orange mb-1.5">{title}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black font-display text-gray-900 mb-3">Meet the Team</h2>
          <p className="text-gray-500 max-w-md mx-auto">Experienced professionals across CA, CS, CMA, and legal — with Big 4 and mid-tier firm backgrounds.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ label, role, exp, color }, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-card text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-sm font-black tracking-wide" style={{ background: color }}>
                {label}
              </div>
              <div className="text-xs font-semibold mb-2" style={{ color }}>{role}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{exp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-black font-display text-gray-900 mb-4">Ready to Work Together?</h2>
        <p className="text-gray-500 mb-8">Book a free consultation and see why 500+ businesses trust Finlytiq for end-to-end financial and advisory services.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book-consultation" className="inline-block px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
            Book Free Consultation
          </Link>
          <a href="https://wa.me/919603799411" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-green-500 hover:text-green-600 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  </>
);

export default About;
