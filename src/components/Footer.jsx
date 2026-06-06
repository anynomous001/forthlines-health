import React from 'react';
import { MapPin } from 'lucide-react';

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
      className="bg-[#0A1628] text-white py-20 text-left relative overflow-hidden border-t border-white/5"
    >
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(13, 204, 184, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(13, 204, 184, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Soft Gradient Glow */}
      <div 
        className="absolute -bottom-20 right-0 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-[0.07] z-0"
        style={{
          background: 'radial-gradient(circle, #00B4A6 0%, #3B82F6 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Logo, Tagline, WhatsApp CTA (5/12 cols) */}
          <div className="md:col-span-5 flex flex-col items-start select-none">
            {/* Logo Row */}
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, 'home')}
              className="flex items-baseline gap-2 mb-6"
              aria-label="Forthlines Diagnostics Home"
            >
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Forthlines
              </span>
              <span className="font-body text-sm font-semibold tracking-wide text-[#00B4A6]">
                Diagnostics
              </span>
            </a>

            {/* Accurate Diagnostics Header */}
            <h3 className="font-display font-semibold text-2xl text-white mb-4 leading-snug max-w-sm">
              Accurate diagnostics, close to home.
            </h3>

            {/* Description */}
            <p className="font-body text-[13px] text-slate-400 leading-relaxed mb-6 max-w-md">
              A neighbourhood diagnostic centre in Patuli, trusted by patients across South Kolkata for accurate reports and warm service.
            </p>

            {/* Chat on WhatsApp Button */}
            <a 
              href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%2520test%20at%20Forthlines%20Diagnostics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B4A6] hover:bg-[#00a396] text-white font-body font-semibold text-[13px] px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,180,166,0.2)]"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Column 2: Explore (2/12 cols) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-body text-[10px] tracking-[1.5px] font-bold text-slate-400 uppercase mb-5 select-none">
              Explore
            </span>
            <ul className="flex flex-col gap-3 font-body text-[13.5px] text-slate-300 list-none p-0 m-0">
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
                  Packages
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
              <li>
                <a 
                  href="#privacy" 
                  className="hover:text-[#00B4A6] transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit Us (2/12 cols) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <span className="font-body text-[10px] tracking-[1.5px] font-bold text-slate-400 uppercase mb-5 select-none">
              Visit Us
            </span>
            <div className="flex items-start gap-2.5 text-slate-300 font-body text-[13px] leading-relaxed">
              <MapPin size={16} className="text-[#00B4A6] flex-shrink-0 mt-0.5" />
              <address className="not-italic text-left">
                Block J,<br />
                Baishnabghata<br />
                Patuli Township,<br />
                Kolkata 700094
              </address>
            </div>
          </div>

          {/* Column 4: Built By (3/12 cols) */}
          <div className="md:col-span-3 flex flex-col items-start w-full">
            <span className="font-body text-[10px] tracking-[1.5px] font-bold text-slate-400 uppercase mb-5 select-none">
              Built By
            </span>
            
            {/* Custom Card matching screenshot */}
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
              <h4 className="font-body font-bold text-sm text-white">
                Pritam Chakroborty
              </h4>
              <a 
                href="https://gencore.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-body text-[12.5px] font-semibold text-[#00B4A6] hover:underline mt-1 block"
              >
                gencore.co.in
              </a>
              <p className="font-body text-[11px] text-slate-400 mt-2.5 leading-relaxed">
                Crafted with care for local healthcare brands across Kolkata.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-slate-400/80">
            © 2026 Forthlines Diagnostics · Patuli, Kolkata
          </p>
          <p className="font-body text-[12px] text-slate-400/80">
            All reports verified by certified pathologists.
          </p>
        </div>
      </div>
    </footer>
  );
}
