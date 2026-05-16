import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { services } from '../data/services';

/* ─────────────────────────────────────────────────────────────
   WEB3FORMS CONFIG  ←  Single access key powers both forms
   Step 1: Go to https://web3forms.com
   Step 2: Enter team.finlytiq@gmail.com → copy the access key
   Step 3: Replace the value below (also update Contact.jsx)
   No email template setup required. Emails arrive instantly.
   ───────────────────────────────────────────────────────────── */
const WEB3FORMS_KEY = '46329565-fe67-42d5-b9fc-0f6f9b1c89f3';

const BookConsultation = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Build payload from form fields
    const data = new FormData(formRef.current);
    const payload = {
      access_key        : WEB3FORMS_KEY,
      subject           : `New Consultation Booking – ${data.get('full_name')} – Finlytiq`,
      from_name         : 'Finlytiq Website – Book Consultation',
      full_name         : data.get('full_name'),
      email             : data.get('email'),
      phone             : data.get('phone'),
      service           : data.get('service'),
      business_type     : data.get('business_type') || 'Not specified',
      consultation_mode : data.get('consultation_mode') || 'Not specified',
      message           : data.get('message') || 'No message provided',
      submitted_at      : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body   : JSON.stringify(payload),
      });
      const result = await res.json();

      if (!result.success) throw new Error(result.message || 'Submission failed');

      // Fire GA4 lead event
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          currency      : 'INR',
          value         : 1000,
          event_category: 'lead',
          event_label   : payload.service,
        });
      }

      // Redirect to Thank-You page (triggers Google Ads conversion)
      navigate('/thank-you');
    } catch (err) {
      console.error('Web3Forms error:', err);
      setError('Something went wrong. Please WhatsApp us directly at +91 96037 99411 or call us.');
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Book a Free Consultation – Financial Advisory Hyderabad | Finlytiq"
        description="Book a free 30-minute consultation with our senior advisors at Finlytiq LLP. GST, Tax, Company Registration, Virtual CFO & more. No commitment required."
        canonical="/book-consultation"
      />

      {/* Dark Hero */}
      <section className="relative bg-[#050918] py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy-l opacity-[0.15] rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Free · No Commitment · 30 Minutes
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Speak directly with a senior CA, CS, or advisor about your needs. We'll guide you on the best way forward — completely free.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-surface-muted">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Benefits sidebar */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-black font-display text-gray-900 mb-5">What You Get</h2>
            {[
              { icon: '👨‍💼', title: '1-on-1 with Senior Advisor', desc: 'Qualified CA, CS or Legal Expert — not an intern.' },
              { icon: '📋', title: 'Tailored Advice', desc: 'Specific guidance based on your business and goals.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Get a clear quote with no hidden charges.' },
              { icon: '⚡', title: 'Instant Clarity', desc: 'Walk away knowing exactly what to do next.' },
              { icon: '🔒', title: '100% Confidential', desc: 'All information is completely private and secure.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}

            {/* Trust block */}
            <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-xl p-4 mt-6">
              <div className="text-sm font-bold text-gray-900 mb-2">Trusted by 500+ Businesses</div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-brand-orange">★</span>)}
                <span className="text-xs text-gray-500 ml-1 self-center">4.9/5</span>
              </div>
              <p className="text-xs text-gray-500 italic">"Best advisory team in Hyderabad. They got our GST + company registration done in under 2 weeks!" – Vikram N., Startup Founder</p>
            </div>

            {/* WhatsApp direct */}
            <a
              href="https://wa.me/919603799411?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20with%20Finlytiq."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/15 transition-colors group"
              onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'book_page_sidebar' })}
            >
              <svg className="w-8 h-8 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <div className="text-sm font-bold text-gray-800 group-hover:text-[#128C7E]">Prefer WhatsApp?</div>
                <div className="text-xs text-gray-500">Chat directly — instant reply</div>
              </div>
            </a>
          </div>

          {/* Booking form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                <h2 className="text-xl font-black font-display text-gray-900 mb-1">Tell Us About Your Needs</h2>
                <p className="text-gray-500 text-sm mb-5">All fields marked * are required</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                    <input name="full_name" type="text" required placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone / WhatsApp *</label>
                    <input name="phone" type="tel" required placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                  <input name="email" type="email" required placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Primary Service Needed *</label>
                  <select name="service" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition">
                    <option value="">Select service</option>
                    {services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Multiple Services / Not Sure">Multiple Services / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Business Type</label>
                  <select name="business_type"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition">
                    <option value="">Select type</option>
                    <option>Startup / New Business</option>
                    <option>SME / Established Business</option>
                    <option>Individual / Freelancer</option>
                    <option>NRI / Foreign National</option>
                    <option>Large Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">Preferred Consultation Mode</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Phone Call', 'Video Call', 'WhatsApp'].map(mode => (
                      <label key={mode} className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-brand-orange/50 transition text-sm font-medium text-gray-700">
                        <input type="radio" name="consultation_mode" value={mode} className="accent-brand-orange" />
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Brief Description</label>
                  <textarea name="message" rows={3} placeholder="Tell us a bit about your situation (optional but helpful)..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition" />
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-brand-orange text-white font-black rounded-xl text-base shadow-orange hover:bg-brand-orange-d transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending your request…
                    </>
                  ) : 'Book My Free Consultation →'}
                </button>
                <p className="text-center text-xs text-gray-400">We'll contact you within 2 business hours · 100% free · No commitment</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookConsultation;
