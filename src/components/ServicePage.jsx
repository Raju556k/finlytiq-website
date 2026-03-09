import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import JsonLd from './JsonLd';
import { getServiceBySlug } from '../data/servicesData';
import { setPageSEO, resetPageSEO } from '../utils/seo';
import { getServiceJsonLd } from '../utils/structuredData';

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (!service) return;
    setPageSEO({
      title: service.metaTitle || `${service.title} | Finlytiq`,
      description: service.metaDescription,
      path: `/services/${slug}`,
      keywords: service.keywords,
    });
    return resetPageSEO;
  }, [service, slug]);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h1>
          <Link to="/services" className="text-[#FF9933] hover:underline">View all services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <JsonLd data={getServiceJsonLd(service, `/services/${slug}`)} />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-12 px-4 bg-gradient-to-b from-[#FFF7ED] to-white border-b border-[#F0F0F0]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-4xl mb-4 block" aria-hidden="true">{service.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-600">{service.desc}</p>
            {service.seoIntro && (
              <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">{service.seoIntro}</p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">What we offer</h2>
            <ul className="space-y-4">
              {service.details.map((item) => (
                <li key={item.name} className="p-4 rounded-xl bg-gray-50 border-l-4 border-[#FF9933]">
                  <div className="font-semibold text-[#1A237E]">{item.name}</div>
                  <div className="text-gray-700 text-sm mt-1">{item.info}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-[#FFF7ED] border-t border-[#F0F0F0]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h2>
            <p className="text-gray-600 mb-6">We serve clients in Hyderabad, Telangana and across India.</p>
            <Link
              to="/#contact"
              className="inline-block bg-[#FF9933] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e88a2b] transition"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
