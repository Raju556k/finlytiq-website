import React, { useState } from 'react';

const contactInfo = [
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 9603799411 / 9701557017',
    href: 'tel:+919603799411',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat, 9:00 AM – 7:00 PM',
    href: null,
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF9933] opacity-[0.04] rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#1A237E]/8 text-[#1A237E] text-xs font-semibold tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">Get in Touch</h2>
          <p className="text-gray-500 max-w-md mx-auto text-base">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left: info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Talk</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Whether you're a startup or an established enterprise, our experts are ready to provide
              tailored financial guidance. Reach out and get your first consultation free.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-[#FF9933]/10 text-[#FF9933] flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-gray-800 font-semibold text-sm hover:text-[#FF9933] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-800 font-semibold text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-10 p-6 rounded-2xl bg-[#050918] text-white">
              <h4 className="font-bold mb-1 text-sm">Stay Informed</h4>
              <p className="text-gray-400 text-xs mb-4">Get tax tips and compliance updates in your inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FF9933] text-white font-semibold rounded-xl text-sm hover:bg-[#e67c00] transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-gray-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="2" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                <button
                  className="mt-6 text-sm text-[#FF9933] font-semibold hover:underline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Rajan Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] transition">
                    <option value="">Select a service</option>
                    <option>Income Tax Filing</option>
                    <option>GST Registration & Returns</option>
                    <option>Virtual CFO (VCFO)</option>
                    <option>Startup Advisory</option>
                    <option>Company Incorporation</option>
                    <option>Trademark Registration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#FF9933]/40 focus:border-[#FF9933] transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FF9933] text-white font-bold rounded-xl text-sm shadow-lg shadow-[#FF9933]/25 hover:bg-[#e67c00] hover:shadow-[#FF9933]/40 transition-all"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-gray-400">
                  Free consultation · No commitment · Reply within 24 hrs
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
