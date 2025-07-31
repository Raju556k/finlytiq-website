import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from './AnimatedCursor';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <AnimatedCursor />
      <div className="bg-white text-gray-900">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
