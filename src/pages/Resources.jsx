import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { guides } from '../data/resources';

const featuredGuides = guides.filter(g => g.featured);
const otherGuides    = guides.filter(g => !g.featured);

const GuideCard = ({ slug, title, category, categoryColor, readTime, desc, tags }) => (
  <Link to={`/resources/${slug}`}
    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 flex flex-col">
    <div className="h-1.5 w-full" style={{ background: categoryColor }} />
    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: categoryColor }}>{category}</span>
        <span className="text-xs text-gray-400">{readTime}</span>
      </div>
      <h2 className="font-bold text-gray-900 mb-2 leading-snug text-base group-hover:text-brand-orange transition-colors">{title}</h2>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">{tag}</span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all">
        Read Guide
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
          <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
        </svg>
      </span>
    </div>
  </Link>
);

const Resources = () => (
  <>
    <SEO
      title="Resources AY 2026-27 & Tax Year 2026-27 — Tax, GST, IT Act 2025 Guides"
      description="Free expert guides on AY 2026-27 filing, Tax Year 2026-27 (FY 2026-27), Income Tax Act 2025 vs 1961, TDS rate chart, GST, company incorporation, and more — by Finlytiq LLP, Hyderabad CA firm."
      canonical="/resources"
    />

    {/* Hero */}
    <section className="bg-premium-dark py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">Resources</div>
        <h1 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-4">
          Free Guides &amp; Insights
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">Expert-written content to help you navigate GST, taxes, compliance, and business growth — all for free.</p>
      </div>
    </section>

    {/* ── Tax Year 2026-27 Featured Section ── */}
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block animate-pulse" />
            AY 2026-27 · Tax Year 2026-27
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-gray-900 mb-2">AY 2026-27, Tax Year 2026-27 &amp; the New Income Tax Act 2025</h2>
          <p className="text-gray-500 text-sm max-w-3xl leading-relaxed">
            Two years, one playbook. <strong className="text-gray-700">AY 2026-27</strong> is the current ITR filing season for FY 2025-26.
            <strong className="text-gray-700"> Tax Year 2026-27</strong> is the new IT Act 2025 name for FY 2026-27 — the year that just began on April 1, 2026.
            Get the full calendar, the Act 2025 vs 1961 comparison, and the official TDS Rate Chart with Section 392 / 393(1) mappings.
          </p>
        </div>

        {/* Featured guide cards — horizontal on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGuides.map(({ slug, title, category, categoryColor, readTime, desc, tags }) => (
            <Link key={slug} to={`/resources/${slug}`}
              className="group relative bg-[#050918] rounded-2xl overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all duration-200 hover:-translate-y-1 flex flex-col">
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: categoryColor }} />
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.06] blur-2xl pointer-events-none" style={{ background: categoryColor }} />
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ background: categoryColor }}>{category}</span>
                  <span className="text-xs text-gray-500">{readTime}</span>
                </div>
                <h3 className="font-bold text-white mb-2 leading-snug text-sm group-hover:text-brand-orange transition-colors flex-1">{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5 line-clamp-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400 font-medium">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all mt-auto">
                  Read Guide
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M8.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L8.293 3.707a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Guide grid */}
    <section className="py-20 bg-premium-light noise-overlay relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">All Expert Guides</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherGuides.map(guide => (
            <GuideCard key={guide.slug} {...guide} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-premium-dark rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-orange opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-brand-navy-l opacity-[0.10] rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black font-display text-white mb-2">Get Guides Straight to Your Inbox</h2>
            <p className="text-gray-400 mb-8 text-sm max-w-md mx-auto">Tax tips, compliance reminders, and expert insights. Free, monthly. No spam.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-shadow" />
              <button type="submit" className="px-6 py-3.5 bg-brand-orange text-white font-bold rounded-xl text-sm hover:bg-brand-orange-d transition shadow-orange whitespace-nowrap">
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Resources;
