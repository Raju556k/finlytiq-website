import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AnnouncementsTicker from './components/AnnouncementsTicker';
import BlogSection from './components/BlogSection';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
import Calendar from './components/Calendar';
import ServicesIndex from './components/ServicesIndex';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <Router>
      <div id="global-bg"></div>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
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
        } />
        
        {/* Blog List Page */}
        <Route path="/blog" element={<BlogList />} />
        
        {/* Individual Blog Page */}
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* Calendar Page */}
        <Route path="/calendar" element={<>
          <Navbar />
          <AnnouncementsTicker />
          <Calendar />
          <Footer />
        </>} />

        {/* Services index – all services with links to landing pages (for Google Ads / SEO) */}
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
