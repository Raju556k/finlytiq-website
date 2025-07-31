import React from 'react';
import { FaRegFileAlt, FaCalculator, FaUserTie, FaLightbulb, FaBuilding, FaTrademark } from 'react-icons/fa';

const services = [
  {
    title: 'Income Tax Filing',
    icon: <FaRegFileAlt className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Expert ITR filing (ITR-1 to ITR-7) for individuals, businesses, and startups.'
  },
  {
    title: 'GST Registration & Returns',
    icon: <FaCalculator className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Seamless GST registration, monthly/quarterly returns, and compliance.'
  },
  {
    title: 'Virtual CFO (VCFO)',
    icon: <FaUserTie className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Strategic financial leadership and reporting for your growing business.'
  },
  {
    title: 'Startup Advisory',
    icon: <FaLightbulb className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Guidance on incorporation, funding, and compliance for startups.'
  },
  {
    title: 'Company Incorporation',
    icon: <FaBuilding className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Private Limited, LLP, and OPC registration with end-to-end support.'
  },
  {
    title: 'Trademark Registration',
    icon: <FaTrademark className="text-[#FF9933] text-3xl mb-2" />,
    desc: 'Protect your brand with hassle-free trademark registration.'
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-[#F0F0F0]">
    <h3 className="text-3xl font-bold text-center text-[#FF9933] mb-10 tracking-tight">Our Services</h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {services.map(({ title, icon, desc }) => (
        <div
          key={title}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#F0F0F0] group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center">
            {icon}
            <h4 className="text-xl font-semibold text-gray-900 mb-2 mt-1 group-hover:text-[#FF9933] transition-colors">
              {title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;