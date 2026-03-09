import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';

const Services = () => (
    <>
      <section id="services" className="py-16 alt-section-bg relative overflow-hidden">
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
            <h3 className="text-3xl font-bold text-center mb-10 tracking-tight">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#F0F0F0] group block text-left focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                  aria-label={`View ${service.title} – dedicated page`}
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-3xl mb-2">{service.icon}</span>
                    <h4 className="text-xl font-semibold mb-2 mt-1 group-hover:text-[#FF9933] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );

export default Services;