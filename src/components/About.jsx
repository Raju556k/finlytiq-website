import React from 'react';

const About = () => (
  <section id="about" className="py-16" style={{ background: '#FFF7ED' }}>
    <div className="max-w-4xl mx-auto px-4 text-center shadow-lg rounded-2xl" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(2px)', padding: '2rem' }}>
      <h3 className="text-3xl font-bold text-blue-900 mb-4">About Us</h3>
      <p className="text-gray-700">
        Finlytiq LLP is a professional firm providing smart, compliant, and scalable financial services
        tailored for startups, SMEs, and enterprises. Our team is dedicated to simplifying tax, finance,
        and compliance processes for businesses.
      </p>
    </div>
  </section>
);
export default About;