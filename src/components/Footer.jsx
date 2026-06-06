import React from 'react';

export default function Footer() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navbar = document.getElementById('navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      role="contentinfo" 
      className="bg-[#F8FAFC] border-t border-slate-200/80 py-16 text-left"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start justify-between">
          
          {/* Logo and Tagline Column */}
          <div className="flex flex-col items-start select-none">
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')}
              className="flex flex-col"
              aria-label="Forthlines Diagnostics Home"
            >
              <span className="font-display font-bold text-2xl text-[#0F172A] tracking-tight leading-none">
                Forthlines
              </span>
              <span className="font-body text-[10px] font-semibold tracking-[3px] uppercase text-[#00B4A6] mt-1 leading-none">
                Diagnostics
              </span>
            </a>
            <p className="font-body text-[13px] text-[#475569] mt-5 leading-relaxed max-w-[260px]">
              Accurate diagnostics, close to home.<br />
              Serving Patuli &amp; South Kolkata since 2020.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="flex flex-col items-start">
            <span className="font-body text-[10px] tracking-[1.5px] uppercase font-bold text-slate-400 mb-4">
              Navigation
            </span>
            <ul className="flex flex-col gap-3 font-body text-[13.5px] text-[#475569] list-none">
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
                  Test Finder
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollTo(e, 'contact')}
                  className="hover:text-[#00B4A6] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright Column */}
          <div className="flex flex-col items-start md:items-end">
            <span className="font-body text-[10px] tracking-[1.5px] uppercase font-bold text-slate-400 mb-4">
              Legal & Credits
            </span>
            <div className="font-body text-[13.5px] text-[#475569] flex flex-col md:items-end gap-3 mb-6">
              <a href="#" className="hover:text-[#00B4A6] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00B4A6] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00B4A6] transition-colors">Refund Policy</a>
            </div>
            <div style={{ marginTop: '14px' }} className="flex flex-col md:items-end">
              <p className="font-body text-[10px] tracking-[1.5px] uppercase font-bold text-slate-400 mb-3">Connect</p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <a 
                  href="https://wa.me/918777578862"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(15, 23, 42, 0.05)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569',
                    fontSize: '18px',
                    transition: 'all 0.25s ease'
                  }}
                  aria-label="WhatsApp"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37,211,102,0.15)';
                    e.currentTarget.style.color = '#25D366';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)';
                    e.currentTarget.style.color = '#475569';
                  }}
                >
                  <i className="ti ti-brand-whatsapp"></i>
                </a>
                <a 
                  href="https://maps.google.com/?q=Baishnabghata+Patuli+Township+Kolkata+700094"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(15, 23, 42, 0.05)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justify-content: 'center',
                    color: '#475569',
                    fontSize: '18px',
                    transition: 'all 0.25s ease'
                  }}
                  aria-label="Google Maps location"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0,180,166,0.15)';
                    e.currentTarget.style.color = '#00B4A6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)';
                    e.currentTarget.style.color = '#475569';
                  }}
                >
                  <i className="ti ti-map-pin"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12.5px] text-[#475569]/50">
            © 2026 Forthlines Diagnostics · Block J, Patuli, Kolkata 700094
          </p>
          <p className="font-body text-[12.5px] text-[#475569]/50">
            Website by{' '}
            <a 
              href="https://gencore.co.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00B4A6] hover:underline transition-all"
            >
              Pritam Chakroborty · gencore.co.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
