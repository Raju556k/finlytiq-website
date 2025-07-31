import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedCursor from './AnimatedCursor';
import Testimonials from './components/Testimonials';
import AnnouncementsTicker from './components/AnnouncementsTicker';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <>
      <div id="global-bg"></div>
      <AnimatedCursor />
      <Navbar />
      <AnnouncementsTicker />
      <Hero />
      <Services />
      <Testimonials />
      <BlogSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
