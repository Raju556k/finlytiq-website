import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Eager load homepage (critical path)
import Home from './pages/Home';

// Lazy load all other pages for faster initial bundle
const About             = lazy(() => import('./pages/About'));
const ServicesIndex     = lazy(() => import('./pages/services/ServicesIndex'));
const ServiceDetail     = lazy(() => import('./pages/services/ServiceDetail'));
const Resources         = lazy(() => import('./pages/Resources'));
const ResourceDetail    = lazy(() => import('./pages/resources/ResourceDetail'));
const Contact           = lazy(() => import('./pages/Contact'));
const BookConsultation  = lazy(() => import('./pages/BookConsultation'));
const FAQ               = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy     = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService    = lazy(() => import('./pages/TermsOfService'));
const Disclaimer        = lazy(() => import('./pages/Disclaimer'));
const ThankYou          = lazy(() => import('./pages/ThankYou'));

// Local SEO pages
const CAHyderabad       = lazy(() => import('./pages/local/CharteredAccountantHyderabad'));
const GSTHyderabad      = lazy(() => import('./pages/local/GSTConsultantHyderabad'));
const CompanyTelangana  = lazy(() => import('./pages/local/CompanyRegistrationTelangana'));

// Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Simple page loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-3 border-brand-orange border-t-transparent rounded-full animate-spin" />
      <div className="text-sm text-gray-400 font-medium">Loading...</div>
    </div>
  </div>
);

// 404 page
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
    <div className="text-7xl font-black text-gray-100 mb-4">404</div>
    <h1 className="text-2xl font-black text-gray-900 mb-2">Page Not Found</h1>
    <p className="text-gray-500 mb-8 max-w-md">The page you're looking for doesn't exist. Let's get you back on track.</p>
    <div className="flex gap-4">
      <a href="/" className="px-6 py-3 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-orange-d transition">
        Go Home
      </a>
      <a href="/services" className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-brand-orange transition">
        Our Services
      </a>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Core pages */}
              <Route path="/"                   element={<Home />} />
              <Route path="/about"              element={<About />} />
              <Route path="/services"           element={<ServicesIndex />} />
              <Route path="/services/:slug"     element={<ServiceDetail />} />
              <Route path="/resources"          element={<Resources />} />
              <Route path="/resources/:slug"    element={<ResourceDetail />} />
              <Route path="/contact"            element={<Contact />} />
              <Route path="/book-consultation"  element={<BookConsultation />} />
              <Route path="/thank-you"          element={<ThankYou />} />
              <Route path="/faq"                element={<FAQ />} />

              {/* Local SEO pages */}
              <Route path="/chartered-accountant-hyderabad" element={<CAHyderabad />} />
              <Route path="/gst-consultant-hyderabad"       element={<GSTHyderabad />} />
              <Route path="/company-registration-telangana" element={<CompanyTelangana />} />

              {/* Legal pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms"          element={<TermsOfService />} />
              <Route path="/disclaimer"     element={<Disclaimer />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  </HelmetProvider>
);

export default App;
