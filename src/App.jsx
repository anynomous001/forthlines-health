import React, { useEffect } from 'react';
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

function App() {
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
    <div className="bg-white text-[#0F172A] font-body selection:bg-[#00B4A6]/20 selection:text-[#0F172A]">
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
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
