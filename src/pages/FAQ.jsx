import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';

const faqCategories = [
  {
    cat: 'GST & Indirect Tax',
    items: [
      { q: 'Who needs GST registration?', a: 'Any business with annual turnover above ₹40 lakh (goods) or ₹20 lakh (services) is required to register. E-commerce sellers, businesses making inter-state supplies, and those liable to pay under reverse charge must register regardless of turnover.' },
      { q: 'What is the penalty for late GST return filing?', a: 'Late fees are ₹50 per day (₹20 for nil returns) per return, capped at ₹10,000. Additionally, interest at 18% per annum applies on the outstanding tax amount.' },
      { q: 'Can I claim Input Tax Credit on all purchases?', a: 'ITC is available on most business purchases used for taxable supplies. However, it is blocked on personal expenses, motor vehicles (with exceptions), food/beverages, and certain other categories under Section 17(5).' },
    ],
  },
  {
    cat: 'Income Tax',
    items: [
      { q: 'What is the deadline for ITR filing?', a: 'For individuals (non-audit): July 31. For businesses requiring audit: October 31. For transfer pricing cases: November 30. Belated returns can be filed by December 31 of the assessment year with a late fee.' },
      { q: 'Can I revise my filed ITR?', a: 'Yes. A revised return can be filed up to December 31 of the assessment year, or before assessment is completed, whichever is earlier.' },
      { q: 'What deductions can a salaried individual claim?', a: 'Standard deduction of ₹50,000, Section 80C (PPF, ELSS, LIC, home loan principal) up to ₹1.5L, HRA, LTA, Section 80D (health insurance), 80TTA (savings interest), NPS (80CCD), and more.' },
      { q: 'Is TDS the same as income tax?', a: 'TDS (Tax Deducted at Source) is an advance tax mechanism. It is deducted by the payer and deposited with the government on your behalf. It gets credited against your final income tax liability when you file your ITR.' },
    ],
  },
  {
    cat: 'Company & LLP Registration',
    items: [
      { q: 'What is the difference between Private Limited and LLP?', a: 'A Private Limited Company offers better fundraising potential, formal structure, and credibility with investors. An LLP has simpler compliance, lower costs, and is preferred for professional firms and partnerships. We help you choose based on your goals.' },
      { q: 'How many directors are required for a Private Limited Company?', a: 'Minimum 2 directors and 2 shareholders are required. Maximum 15 directors and 200 shareholders. At least one director must be a resident Indian (staying ≥182 days in India).' },
      { q: 'Is a registered office address required?', a: 'Yes. A valid address in India is required for MCA registration. We can provide a registered office address service if needed.' },
    ],
  },
  {
    cat: 'NRI Taxation',
    items: [
      { q: 'Do NRIs pay tax on foreign income?', a: 'No. NRIs are taxed only on income sourced in India — rent, capital gains on Indian investments, interest on NRO accounts, and business income from India. Foreign income is not taxable in India for NRIs.' },
      { q: 'What is the difference between NRO and NRE accounts?', a: 'NRO accounts hold Indian-sourced income and interest is taxable. NRE accounts hold foreign remittances and both principal and interest are fully tax-free and repatriable.' },
      { q: 'Can NRIs invest in Indian stocks and mutual funds?', a: 'Yes, under the Portfolio Investment Scheme (PIS) via NRE/NRO accounts. Capital gains are taxable in India, but DTAA may reduce or eliminate double taxation.' },
    ],
  },
  {
    cat: 'Virtual CFO & Accounting',
    items: [
      { q: 'How is a Virtual CFO different from a bookkeeper?', a: 'A bookkeeper records transactions. A Virtual CFO provides strategic financial leadership — budgeting, forecasting, fundraising support, investor presentations, and KPI-driven decision making.' },
      { q: 'What software do you use for bookkeeping?', a: 'We work with Tally ERP, QuickBooks Online, Zoho Books, and MS Excel. We adapt to your existing system or recommend the best fit for your business.' },
      { q: 'How often do I receive financial reports?', a: 'Under our VCFO package, you receive a monthly MIS report by the 10th of each month, a quarterly review call, and an annual financial analysis presentation.' },
    ],
  },
  {
    cat: 'Pricing & Process',
    items: [
      { q: 'Do you have fixed pricing?', a: 'Yes. We quote fixed fees upfront for all standard services. Complex matters (tax litigation, M&A advisory) are quoted based on scope. No hidden charges, ever.' },
      { q: 'Do I need to visit your office?', a: 'No. Our entire process is digital. You can share documents via WhatsApp, email, or a shared cloud folder. We\'re available for video calls at your convenience.' },
      { q: 'How quickly do you respond to queries?', a: 'We guarantee a response within 48 business hours for all queries. Urgent matters (deadline-driven) are handled on priority — typically within a few hours.' },
    ],
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);
  const [activecat, setActivecat] = useState(faqCategories[0].cat);

  const filtered = faqCategories.find(c => c.cat === activecat)?.items || [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(c => c.items.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    })))
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions – GST, Tax, Company Registration"
        description="Answers to common questions about GST registration, income tax filing, company incorporation, NRI taxation, Virtual CFO, and ROC compliance in India."
        canonical="/faq"
        schema={schema}
      />

      <section className="bg-surface-muted border-b border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs text-brand-orange font-semibold uppercase tracking-widest mb-3">FAQ</div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">Clear answers to the questions we hear most from our clients.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-4 gap-10">
          {/* Category sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-1">
              {faqCategories.map(({ cat }) => (
                <button
                  key={cat}
                  onClick={() => { setActivecat(cat); setOpenItem(null); }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${activecat === cat ? 'bg-brand-orange text-white' : 'text-gray-600 hover:bg-surface-muted'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{activecat}</div>
            {filtered.map(({ q, a }, i) => (
              <div key={i} className="bg-surface-card rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex justify-between items-start px-6 py-5 text-left font-semibold text-gray-900 text-sm hover:text-brand-orange transition-colors gap-4"
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                >
                  <span>{q}</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${openItem === i ? 'rotate-180' : ''}`}>
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openItem === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface-muted border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4 font-medium">Still have questions? Talk to a CA directly — it's free.</p>
          <Link to="/book-consultation" className="inline-block px-7 py-3.5 bg-brand-orange text-white font-bold rounded-full shadow-orange hover:bg-brand-orange-d transition-all">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;
