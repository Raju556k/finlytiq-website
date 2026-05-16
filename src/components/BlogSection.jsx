import React, { useState } from 'react';
// Removed: import ReactMarkdown from 'react-markdown';

const blogs = [
  {
    title: 'Compliance Calendar 2024-25: MCA, Income Tax, GST Due Dates',
    summary: 'Stay compliant with this comprehensive calendar for MCA, Income Tax (FY 2024-25), and GST (FY 2025-26) filings.',
    content: `
**MCA (Ministry of Corporate Affairs) Due Dates:**
- DIR-3 KYC (Directors): 30th September 2024
- DPT-3 (Return of Deposits): 30th June 2024
- MSME-1 (Half Yearly): 30th April 2024, 31st October 2024
- AOC-4 (Financial Statements): 30th October 2024
- MGT-7 (Annual Return): 29th November 2024

**Income Tax (FY 2024-25) Due Dates:**
- TDS Payment: 7th of every month
- Advance Tax Installments: 15th June, 15th September, 15th December 2024, 15th March 2025
- ITR Filing (Individuals): 30th September 2025
- ITR Filing (Audit Cases): 31st October 2025
- Tax Audit Report: 30th September 2025

**GST (FY 2025-26) Due Dates:**
- GSTR-1 (Monthly): 11th of next month
- GSTR-3B (Monthly): 20th of next month
- GSTR-9 (Annual Return): 31st December 2025
- GST Payment: 20th of every month

*Note: Always check for government notifications for any changes or extensions.*
`,
    link: '#',
  },
  {
    title: 'How to File Your Income Tax Return Online',
    summary: 'A step-by-step guide to filing your ITR for FY 2023-24, including required documents and common mistakes to avoid.',
    content: 'Full blog content for How to File Your Income Tax Return Online. This would include detailed steps, screenshots, and tips for users.',
    link: '#',
  },
  {
    title: 'GST Compliance Checklist for Small Businesses',
    summary: 'Ensure your business stays compliant with this essential GST checklist, covering registration, returns, and audits.',
    content: 'Full blog content for GST Compliance Checklist. Detailed compliance steps, forms, and deadlines.',
    link: '#',
  },
  {
    title: 'Benefits of Hiring a Virtual CFO',
    summary: 'Discover how a Virtual CFO can help your business with financial planning, reporting, and strategic growth.',
    content: 'Full blog content for Benefits of Hiring a Virtual CFO. Explains the value, cost savings, and strategic advantages.',
    link: '#',
  },
  {
    title: 'Startup Advisory: Incorporation to Fundraising',
    summary: 'Key steps and expert tips for startups, from company registration to preparing for your first funding round.',
    content: 'Full blog content for Startup Advisory. Covers incorporation, compliance, and funding tips.',
    link: '#',
  },
  {
    title: 'Tax Planning Tips for FY 2024-25',
    summary: 'Maximize your savings with these actionable tax planning strategies for the new financial year.',
    content: 'Full blog content for Tax Planning Tips. Includes deductions, investments, and compliance reminders.',
    link: '#',
  },
  {
    title: 'Understanding GST Audits',
    summary: 'What to expect during a GST audit and how to prepare your business for a smooth process.',
    content: 'Full blog content for Understanding GST Audits. Audit process, documentation, and best practices.',
    link: '#',
  },
  {
    title: 'Startup Funding: What Investors Look For',
    summary: 'Insights into what VCs and angel investors seek in early-stage startups.',
    content: 'Full blog content for Startup Funding. Investor criteria, pitch tips, and common mistakes.',
    link: '#',
  },
  {
    title: 'Compliance Calendar 2024-25',
    summary: 'Never miss a deadline with our comprehensive compliance calendar for businesses and startups.',
    content: 'Full blog content for Compliance Calendar. All major due dates and reminders.',
    link: '#',
  },
];

const BlogSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (blog) => {
    setSelected(blog);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="py-16 section-bg relative overflow-hidden">
      {/* 3D glassy background */}
      <div className="absolute inset-0 z-0" aria-hidden="true" style={{ pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '90%',
          height: '80%',
          background: 'linear-gradient(120deg, rgba(26,35,126,0.12) 0%, rgba(0,200,83,0.10) 50%, rgba(255,153,51,0.10) 100%)',
          filter: 'blur(32px)',
          borderRadius: '2rem',
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="glass-card py-10 px-4">
          <h3 className="text-3xl font-bold text-center mb-10 tracking-tight glass-heading">Latest Blogs & Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#FF9933]/60 scrollbar-track-transparent" style={{ WebkitOverflowScrolling: 'touch' }}>
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between border border-[#F0F0F0] min-w-[260px]">
                <div>
                  <h4 className="text-xl font-semibold text-[#1A237E] mb-2">{blog.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{blog.summary}</p>
                </div>
                <button onClick={() => handleOpen(blog)} className="mt-auto text-[#FF9933] font-semibold hover:underline text-left">Read More &rarr;</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog modal */}
      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] p-8 relative border-4 border-[#1A237E] overflow-y-auto">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#FF9933] text-2xl font-bold hover:text-[#1A237E] focus:outline-none"
              aria-label="Close blog"
            >
              &times;
            </button>
            <h4 className="text-2xl font-bold text-[#1A237E] mb-4">{selected.title}</h4>
            <div className="text-gray-700 mb-4 text-base prose max-w-none">
              {selected.content}
            </div>
            <a href={selected.link} className="text-[#FF9933] font-semibold hover:underline">Go to full blog &rarr;</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection; 