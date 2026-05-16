import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank you!</h1>
        <p className="text-gray-600 mb-8">
          We’ve received your message. Our team will get back to you shortly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/calendar"
            className="inline-block bg-[#FF9933] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e88a2b] transition"
          >
            Book a consultation
          </Link>
          <Link to="/" className="text-[#FF9933] font-semibold hover:underline">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

