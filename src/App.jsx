import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import SymptomFinder from './components/SymptomFinder';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import ReportTracker from './components/ReportTracker';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import OurNetwork from './components/OurNetwork';
import AgilusPage from './components/AgilusPage';
import MetropolisPage from './components/MetropolisPage';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  useEffect(() => {
    // Intersection Observer for scroll fade-in-up animations on section headers and elements
    const observerOptions = {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animTargets = document.querySelectorAll(
      '.fade-in-target, .service-card, .package-card, .step-card, .review-card, .contact-way'
    );
    
    animTargets.forEach((el, i) => {
      // Add initial utility classes for fade-in animations
      el.classList.add('fade-in-target');
      
      // Dynamic inline transitions for staggered loads
      el.style.transitionDelay = `${(i % 4) * 0.05}s`;
      animateOnScroll.observe(el);
    });

    return () => {
      animateOnScroll.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <SymptomFinder />
      <Packages />
      <HowItWorks />
      <Reviews />
      <ReportTracker />
      <Contact />
      <OurNetwork />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white text-[#0F172A] font-body selection:bg-[#00B4A6]/20 selection:text-[#0F172A]">
        {/* Proof banner fixed below the fixed top-0 navbar */}
        <div className="fixed top-20 left-0 right-0 bg-[#0DCCB8] text-[#0A1628] font-body font-semibold text-[12px] tracking-[0.5px] text-center py-2.5 px-4 z-40">
          Forthlines Diagnostics Partner Network — Built by{' '}
          <a 
            href="https://gencore.co.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-[#0A1628]/80 transition-all"
          >
            Pritam Chakroborty · gencore.co.in
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agilus" element={<AgilusPage />} />
          <Route path="/metropolis" element={<MetropolisPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
