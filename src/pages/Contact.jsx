import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { services } from '../data/services';

const contactItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call / WhatsApp',
    value: '+91 9603799411',
    sub: '+91 9701557017',
    href: 'tel:+919603799411',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    value: 'team.finlytiq@gmail.com',
    href: 'mailto:team.finlytiq@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office',
    value: 'Hyderabad, Telangana',
    sub: 'Serving clients pan-India',
    href: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    sub: 'WhatsApp available on Sundays',
    href: null,
  },
];

const WEB3FORMS_KEY = '46329565-fe67-42d5-b9fc-0f6f9b1c89f3';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: 'New Contact Form Submission – Finlytiq', ...formData }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us – Finlytiq LLP | CA Firm in Hyderabad"
        description="Contact Finlytiq LLP — Chartered Accountants and financial advisors in Hyderabad. Call, WhatsApp, or send a message. Free consultation for GST, Income Tax, company registration, and more."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="bg-[#050918] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">Contact Us</div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
            Let's Talk Business
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
            Get expert CA advisory for GST, Income Tax, company incorporation, and more — starting with a free consultation.
          </p>
        </div>
      </section>

      {/* Contact block */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <div>
            <h2 className="text-2xl font-black font-display text-gray-900 mb-2">Reach Out Directly</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Whether you have a quick question or need end-to-end CA services, our team responds within 24 hours. All consultations start free.
            </p>

            <div className="space-y-5 mb-10">
              {contactItems.map(({ icon, label, value, sub, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-900 font-semibold text-sm hover:text-brand-orange transition-colors">{value}</a>
                    ) : (
                      <span className="text-gray-900 font-semibold text-sm">{value}</span>
                    )}
                    {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919603799411?text=Hi%20Finlytiq%2C%20I%20need%20help%20with%20my%20tax%20%2F%20compliance."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 mb-10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* FAQ shortcut */}
            <div className="p-5 rounded-2xl bg-surface-card border border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Answers</div>
              <div className="space-y-2">
                {['How much does GST registration cost?', 'What documents are needed for company incorporation?', 'How do I file ITR as an NRI?'].map(q => (
                  <Link key={q} to="/faq" className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-orange transition-colors group">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-brand-orange flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
                    </svg>
                    {q}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center min-h-[340px] text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-6">Our team will get back to you within 24 hours.</p>
                <button className="text-sm text-brand-orange font-semibold hover:underline" onClick={() => { setStatus('idle'); setFormData({ name: '', phone: '', email: '', service: '', message: '' }); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black font-display text-gray-900 mb-5">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                    <input name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                  <input name="email" type="email" required value={formData.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition">
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition" />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or reach us directly via WhatsApp.
                  </p>
                )}
                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-3.5 bg-brand-orange text-white font-bold rounded-xl text-sm shadow-orange hover:bg-brand-orange-d transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
                <p className="text-center text-xs text-gray-400">Free consultation · No commitment · Response within 24 hrs</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section className="py-14 bg-surface-muted border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black font-display text-gray-900 mb-3">Prefer a Scheduled Call?</h2>
          <p className="text-gray-500 text-sm mb-7">Book a free 30-minute consultation at a time that works for you.</p>
          <Link to="/book-consultation" className="inline-block px-8 py-4 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;
