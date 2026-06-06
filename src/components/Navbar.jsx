import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const navbar = document.getElementById('navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-[16px] border-b border-slate-200/50 shadow-[0_2px_15px_rgba(0,0,0,0.03)]' 
          : 'bg-white/90 backdrop-blur-[12px] border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (same line as shown in image) */}
        <a
          href="#home"
          className="flex items-baseline gap-2 select-none"
          onClick={(e) => handleScrollTo(e, 'home')}
          aria-label="Forthlines Diagnostics Home"
        >
          <span className="font-display font-bold text-2xl text-[#0A1628] tracking-tight">
            Forthlines
          </span>
          <span className="font-body text-sm font-semibold tracking-wide text-[#00B4A6]">
            Diagnostics
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 font-body text-[13px] font-medium text-[#475569] list-none">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, 'home')}
                className="hover:text-[#00B4A6] transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="hover:text-[#00B4A6] transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#packages"
                onClick={(e) => handleScrollTo(e, 'packages')}
                className="hover:text-[#00B4A6] transition-colors"
              >
                Health Packages
              </a>
            </li>
            <li>
              <a
                href="#test-finder"
                onClick={(e) => handleScrollTo(e, 'test-finder')}
                className="hover:text-[#00B4A6] transition-colors"
              >
                Book a Test
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="hover:text-[#00B4A6] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* WhatsApp Button (Teal background as in image) */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20Forthlines%20Diagnostics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B4A6] text-white font-body font-semibold text-[13px] px-6 py-2.5 rounded-full hover:bg-[#00a396] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,180,166,0.2)]"
          >
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
            </svg>
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden text-[#0F172A] hover:text-[#00B4A6] transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out bg-white border-b border-black/5 ${
          isMenuOpen ? 'max-h-[380px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col px-8 gap-4">
          <a href="#home" className="font-body font-medium text-base text-[#475569] hover:text-[#00B4A6] py-2 border-b border-black/5" onClick={(e) => handleScrollTo(e, 'home')}>Home</a>
          <a href="#services" className="font-body font-medium text-base text-[#475569] hover:text-[#00B4A6] py-2 border-b border-black/5" onClick={(e) => handleScrollTo(e, 'services')}>Services</a>
          <a href="#packages" className="font-body font-medium text-base text-[#475569] hover:text-[#00B4A6] py-2 border-b border-black/5" onClick={(e) => handleScrollTo(e, 'packages')}>Health Packages</a>
          <a href="#test-finder" className="font-body font-medium text-base text-[#475569] hover:text-[#00B4A6] py-2 border-b border-black/5" onClick={(e) => handleScrollTo(e, 'test-finder')}>Book a Test</a>
          <a href="#contact" className="font-body font-medium text-base text-[#475569] hover:text-[#00B4A6] py-2 border-b border-black/5" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a>
          <a
            href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20Forthlines%20Diagnostics"
            className="inline-flex items-center justify-center gap-2 bg-[#00B4A6] text-white font-body font-bold text-sm py-3 rounded-full mt-2 hover:bg-[#00a396] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
            </svg>
            Book on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
