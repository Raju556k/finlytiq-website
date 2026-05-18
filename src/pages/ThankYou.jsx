import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const ThankYou = () => {
  // Fire lead-tracking event when this page loads
  useEffect(() => {
    if (window.gtag) {
      // GA4 lead conversion (active — measured in Google Analytics)
      window.gtag('event', 'generate_lead', {
        currency: 'INR',
        value: 1000,
        event_category: 'lead',
        event_label: 'consultation_form_submit',
      });

      /* Google Ads conversion — DISABLED until a real Ads account exists.
         To enable: replace AW-CONVERSION_ID/CONVERSION_LABEL with the real
         value from Google Ads, then uncomment the block below.
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        event_category: 'lead',
        event_label: 'consultation_form_submit',
      });
      */
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Thank You – We'll Be In Touch | Finlytiq LLP"
        description="Thank you for reaching out to Finlytiq LLP. Our advisory team will contact you within 2 hours."
        canonical="/thank-you"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-premium-dark overflow-hidden px-6">
        {/* Ambient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-[0.06] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy-l rounded-full opacity-[0.15] blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

        {/* Floating glass shapes */}
        <div className="glass-shape-dark w-48 h-48 top-[10%] right-[5%] orb-1" />
        <div className="glass-shape-dark w-32 h-32 bottom-[15%] left-[8%] orb-3" style={{ borderRadius: '50%' }} />

        <div className="relative z-10 max-w-2xl w-full text-center">
          {/* Success checkmark */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border border-brand-green/20 animate-ping" />
            </div>
          </div>

          {/* Heading */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Request Received
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight mb-4 leading-tight">
            Thank You! <br />
            <span className="text-brand-green">We're On It.</span>
          </h1>

          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Your consultation request has been submitted successfully. A senior advisor from Finlytiq will personally reach out within <span className="text-white font-semibold">2 business hours</span>.
          </p>

          {/* What happens next */}
          <div className="glass-panel-dark rounded-3xl p-8 mb-10 text-left">
            <h3 className="text-white font-bold text-lg mb-6 text-center">What Happens Next?</h3>
            <div className="space-y-5">
              {[
                { step: '01', title: 'Review Your Request', desc: 'Our team reviews your service requirement and assigns the right expert.', time: 'Within 30 mins' },
                { step: '02', title: 'We Call You', desc: 'A senior CA, CS, or advisor calls you on the number you provided.', time: 'Within 2 hours' },
                { step: '03', title: 'Free 30-min Consultation', desc: 'We understand your needs, explain the process, and give you a clear quote.', time: 'Same day / next day' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-orange text-xs font-black">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <span className="text-brand-green text-xs font-medium bg-brand-green/10 px-2 py-0.5 rounded-full">{item.time}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent CTA — WhatsApp for faster response */}
          <div className="mb-6">
            <p className="text-gray-500 text-sm mb-4">Need faster? Chat directly on WhatsApp:</p>
            <a
              href="https://wa.me/919603799411?text=Hi%2C%20I%20just%20submitted%20the%20consultation%20form%20on%20your%20website.%20I%20need%20help%20with%20financial%20advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300"
              onClick={() => window.gtag && window.gtag('event', 'whatsapp_click', { event_category: 'engagement', event_label: 'thank_you_page' })}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Back home */}
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
