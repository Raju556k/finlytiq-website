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
      </Routes>
    </Router>
  );
}

export default App;
