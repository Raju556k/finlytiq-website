import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16 bg-[#F0F0F0]">
    <div className="max-w-xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center text-[#FF9933] mb-6">Get in Touch</h3>
      <form className="space-y-4 bg-white p-8 rounded-2xl shadow-md border border-[#F0F0F0]">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-[#F0F0F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-[#F0F0F0] rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#FF9933] text-white py-3 rounded-lg font-semibold shadow hover:bg-[#e67c00] transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-center">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Subscribe to our Newsletter</h4>
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
  </section>
);

export default Contact;