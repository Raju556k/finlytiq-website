import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../../components/ui/SEO';
import { getGuideBySlug, guides } from '../../data/resources';

/* ── Content block renderers ── */
const Heading = ({ text }) => (
  <h2 className="text-2xl font-black font-display text-gray-900 mt-10 mb-4 tracking-tight">{text}</h2>
);

const Paragraph = ({ text }) => (
  <p className="text-gray-600 leading-relaxed mb-4">{text}</p>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2 mb-6 ml-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-gray-600 text-[15px] leading-relaxed">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Steps = ({ items }) => (
  <div className="space-y-5 mb-6">
    {items.map(({ title, desc }, i) => (
      <div key={i} className="flex gap-4">
        <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
          {String(i + 1).padStart(2, '0')}
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-1">{title}</div>
          <div className="text-gray-600 text-[15px] leading-relaxed">{desc}</div>
        </div>
      </div>
    ))}
  </div>
);

const Comparison = ({ items, headers = ['Option A', 'Option B'] }) => (
  <div className="overflow-x-auto mb-6 rounded-2xl border border-gray-100">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-surface-muted">
          <th className="text-left px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Feature</th>
          <th className="text-left px-5 py-3 font-semibold text-brand-orange text-xs uppercase tracking-wider">{headers[0]}</th>
          <th className="text-left px-5 py-3 font-semibold text-brand-navy-l text-xs uppercase tracking-wider">{headers[1]}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ feature, llp, pvt }, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
            <td className="px-5 py-3 font-medium text-gray-900">{feature}</td>
            <td className="px-5 py-3 text-gray-600">{llp}</td>
            <td className="px-5 py-3 text-gray-600">{pvt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Callout = ({ text }) => (
  <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 my-8 flex gap-4">
    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
      <span className="text-brand-orange text-lg font-bold">!</span>
    </div>
    <div>
      <div className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1.5">From Finlytiq</div>
      <div className="text-gray-700 text-[15px] leading-relaxed">{text}</div>
    </div>
  </div>
);

const ContentBlock = ({ block }) => {
  switch (block.type) {
    case 'h2':         return <Heading text={block.text} />;
    case 'p':          return <Paragraph text={block.text} />;
    case 'list':       return <BulletList items={block.items} />;
    case 'steps':      return <Steps items={block.items} />;
    case 'comparison': return <Comparison items={block.items} headers={block.headers} />;
    case 'callout':    return <Callout text={block.text} />;
    default:           return null;
  }
};

/* ── Related guides ── */
const RelatedGuides = ({ currentSlug, currentCategory }) => {
  const related = guides
    .filter(g => g.slug !== currentSlug)
    .sort((a, b) => (a.category === currentCategory ? -1 : 1) - (b.category === currentCategory ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="mt-12 pt-10 border-t border-gray-100">
      <h3 className="text-xl font-black font-display text-gray-900 mb-6">Related Guides</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map(g => (
          <Link key={g.slug} to={`/resources/${g.slug}`}
            className="group p-5 rounded-2xl border border-gray-100 bg-surface-card hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white inline-block mb-3" style={{ background: g.categoryColor }}>{g.category}</span>
            <div className="font-bold text-gray-900 text-sm leading-snug group-hover:text-brand-orange transition-colors mb-1.5">{g.title}</div>
            <div className="text-xs text-gray-400">{g.readTime}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

/* ── Page component ── */
const ResourceDetail = () => {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) return <Navigate to="/resources" replace />;

  return (
    <>
      <SEO
        title={guide.title}
        description={guide.desc}
        canonical={`/resources/${guide.slug}`}
      />

      {/* Hero */}
      <section className="bg-[#050918] py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-brand-orange transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-gray-400 truncate">{guide.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: guide.categoryColor }}>{guide.category}</span>
            <span className="text-xs text-gray-500">{guide.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight mb-4 leading-tight">
            {guide.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">{guide.desc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
            {guide.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">{tag}</span>
            ))}
          </div>

          {/* Article body */}
          <article className="article-body">
            {guide.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>

          {/* Bottom CTA */}
          <div className="mt-12 bg-premium-dark rounded-2xl p-8 text-center">
            <h3 className="text-xl font-black font-display text-white mb-2">Need Help With This?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Our team of CAs, Company Secretaries, and legal experts can handle this end-to-end for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/book-consultation" className="px-6 py-3 bg-brand-orange text-white font-bold rounded-full text-sm shadow-orange hover:bg-brand-orange-d transition-all">
                Book Free Consultation
              </Link>
              <a href="https://wa.me/919603799411" target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Talk on WhatsApp
              </a>
            </div>
          </div>

          <RelatedGuides currentSlug={guide.slug} currentCategory={guide.category} />
        </div>
      </section>
    </>
  );
};

export default ResourceDetail;
