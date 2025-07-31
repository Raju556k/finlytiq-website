import React from 'react';

const About = () => (
  <section id="about" style={{ 
    padding: '64px 0', 
    background: '#FFF7ED',
    filter: 'none',
    backdropFilter: 'none'
  }}>
    <div style={{ 
      maxWidth: '1152px', 
      margin: '0 auto', 
      padding: '0 16px',
      filter: 'none',
      backdropFilter: 'none'
    }}>
      {/* Main Heading */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '36px', 
          fontWeight: 'bold', 
          color: '#1e3a8a', 
          marginBottom: '16px',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          About Finlytiq
        </h2>
        <p style={{ 
          fontSize: '20px', 
          color: '#6b7280', 
          maxWidth: '768px', 
          margin: '0 auto',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          Your trusted partner for comprehensive financial compliance and business growth
        </p>
      </div>

      {/* Company Overview */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '32px', 
        marginBottom: '48px' 
      }}>
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '32px', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1e3a8a', 
            marginBottom: '16px',
            filter: 'none',
            backdropFilter: 'none'
          }}>
            Who We Are
          </h3>
          <p style={{ 
            color: '#374151', 
            marginBottom: '16px',
            lineHeight: '1.6',
            filter: 'none',
            backdropFilter: 'none'
          }}>
            Finlytiq LLP is a professional firm providing smart, compliant, and scalable financial services
            tailored for startups, SMEs, and enterprises. Our team is dedicated to simplifying tax, finance,
            and compliance processes for businesses.
          </p>
          <p style={{ 
            color: '#374151', 
            marginBottom: '16px',
            lineHeight: '1.6',
            filter: 'none',
            backdropFilter: 'none'
          }}>
            Founded with a vision to bridge the gap between complex financial regulations and business growth,
            we combine deep industry expertise with innovative technology solutions to deliver exceptional results.
          </p>
          <p style={{ 
            color: '#374151',
            lineHeight: '1.6',
            filter: 'none',
            backdropFilter: 'none'
          }}>
            Our mission is to empower businesses with financial clarity, ensuring they can focus on what they do best
            while we handle their compliance and financial needs with precision and care.
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '32px', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1e3a8a', 
            marginBottom: '16px',
            filter: 'none',
            backdropFilter: 'none'
          }}>
            Why Choose Us
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#f97316', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                marginTop: '4px' 
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ffffff', borderRadius: '50%' }}></div>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>Expert Team</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Certified professionals with 10+ years of experience in tax, finance, and compliance</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#f97316', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                marginTop: '4px' 
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ffffff', borderRadius: '50%' }}></div>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>Technology-Driven</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Modern tools and automation for efficient, accurate, and timely service delivery</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#f97316', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                marginTop: '4px' 
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ffffff', borderRadius: '50%' }}></div>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>Personalized Approach</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Tailored solutions that understand your unique business needs and challenges</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                backgroundColor: '#f97316', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                marginTop: '4px' 
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ffffff', borderRadius: '50%' }}></div>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>Proactive Support</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>We don't just react to problems - we prevent them with strategic planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '16px', 
        padding: '32px', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
        marginBottom: '48px',
        filter: 'none',
        backdropFilter: 'none'
      }}>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#1e3a8a', 
          marginBottom: '24px', 
          textAlign: 'center',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          Our Expertise
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{ textAlign: 'center', padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: '#dbeafe', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 16px' 
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Tax Compliance</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Comprehensive tax planning, filing, and compliance services for individuals and businesses
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: '#dcfce7', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 16px' 
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Financial Advisory</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Strategic financial planning, budgeting, and advisory services to drive business growth
            </p>
          </div>
          <div style={{ textAlign: 'center', padding: '24px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              backgroundColor: '#f3e8ff', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 16px' 
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#9333ea' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Regulatory Compliance</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Ensuring your business meets all regulatory requirements and stays compliant with changing laws
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div style={{ 
        background: 'linear-gradient(to right, #eff6ff, #fef3c7)', 
        borderRadius: '16px', 
        padding: '32px', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
        marginBottom: '48px',
        filter: 'none',
        backdropFilter: 'none'
      }}>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#1e3a8a', 
          marginBottom: '24px', 
          textAlign: 'center',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          Our Core Values
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#3b82f6', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 12px' 
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Integrity</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Honest, transparent, and ethical in all our dealings</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#22c55e', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 12px' 
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Excellence</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Striving for the highest quality in every service we provide</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#f97316', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 12px' 
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Partnership</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Building long-term relationships based on trust and mutual success</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#a855f7', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 12px' 
            }}>
              <svg style={{ width: '24px', height: '24px', color: '#ffffff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>Innovation</h4>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Embracing new technologies and methods to deliver better results</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center', 
        backgroundColor: '#ffffff', 
        borderRadius: '16px', 
        padding: '32px', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        filter: 'none',
        backdropFilter: 'none'
      }}>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#1e3a8a', 
          marginBottom: '16px',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          Ready to Work With Us?
        </h3>
        <p style={{ 
          color: '#6b7280', 
          marginBottom: '24px', 
          maxWidth: '672px', 
          margin: '0 auto 24px',
          filter: 'none',
          backdropFilter: 'none'
        }}>
          Join hundreds of businesses that trust Finlytiq for their financial compliance and growth needs. 
          Let's discuss how we can help your business thrive in today's complex financial landscape.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a 
            href="#contact" 
            style={{
              backgroundColor: '#f97316',
              color: '#ffffff',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Get Started Today
          </a>
          <a 
            href="#services" 
            style={{
              border: '2px solid #3b82f6',
              color: '#3b82f6',
              padding: '12px 32px',
              borderRadius: '8px',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;