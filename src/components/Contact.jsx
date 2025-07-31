import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: 'team.finlytiq@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // You'll need to replace this with your EmailJS user ID
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16" style={{ background: '#FFF7ED' }}>
      <div className="max-w-xl mx-auto px-4">
        <div className="glass-card py-10 px-4 shadow-2xl rounded-2xl" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)' }}>
          <h3 className="text-3xl font-bold text-center mb-6">Get in Touch</h3>
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-2xl shadow-md border border-[#F0F0F0]">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-[#F0F0F0] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF9933] text-white py-3 rounded-lg font-semibold shadow hover:bg-[#e67c00] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-10 text-center">
            <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-[#FF9933] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#e67c00] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;