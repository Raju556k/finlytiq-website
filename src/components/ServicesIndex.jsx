import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { services } from '../data/servicesData';
import { setPageSEO, resetPageSEO } from '../utils/seo';

export default function ServicesIndex() {
  useEffect(() => {
    setPageSEO({
      title: 'Our Services | Finlytiq – Tax, GST, Compliance in Hyderabad',
      description: 'Income Tax, GST, Company Incorporation, Trademark, VCFO & more. Expert CA services in Hyderabad, Telangana. Finlytiq LLP.',
      path: '/services',
      keywords: 'CA services Hyderabad, tax consultant Telangana, GST filing, company registration, trademark registration, VCFO, Finlytiq',
    });
    return resetPageSEO;
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Services</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Tax, GST, compliance, and advisory services in Hyderabad. Each service has its own page so you can share or use it as a landing page.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block p-6 rounded-2xl border border-[#F0F0F0] bg-white hover:shadow-lg hover:border-[#FF9933]/40 transition text-left"
                >
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <span className="inline-block mt-3 text-[#FF9933] font-medium text-sm">View details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
