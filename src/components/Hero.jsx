import React from 'react';
import { Clock, Home, MessageCircle, Check } from 'lucide-react';

export default function Hero() {
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
    <section 
      id="home" 
      className="min-h-screen pt-32 pb-20 relative bg-[#F8FAFC] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Radial Gradient Glow (teal, 4% opacity) top-right corner */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #00B4A6 0%, transparent 70%)'
        }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (60% width) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center text-[11px] uppercase tracking-[2px] font-semibold text-[#00B4A6] border border-[#00B4A6]/30 rounded-full px-4 py-1.5 mb-8 bg-[#00B4A6]/5">
              Patuli · South Kolkata
            </span>

            <h1 className="font-display font-semibold text-[#0F172A] tracking-tight leading-[1.15] mb-6 text-4xl sm:text-5xl md:text-6xl text-left">
              Diagnostics you can trust, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#00B4A6]">results you can act on.</span>
            </h1>

            <p className="font-body text-base md:text-[17px] text-[#475569] leading-relaxed mb-10 max-w-xl text-left">
              4.9★ rated by 31 patients in Patuli. Accurate pathology, blood tests, and home collection — reported to your WhatsApp the same day.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 bg-[#00B4A6] text-white font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#00d4c4] hover:shadow-[0_8px_24px_rgba(0,180,166,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Test
                <i className="ti ti-arrow-right"></i>
              </a>
              <a 
                href="#packages" 
                onClick={(e) => handleScrollTo(e, 'packages')}
                className="inline-flex items-center justify-center border border-slate-350 text-[#0F172A] font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all duration-300"
              >
                View Packages
              </a>
            </div>

            {/* Inline Trust Signals */}
            <div className="flex flex-wrap gap-6 items-center text-[#475569] font-body text-[13px] border-t border-slate-200/80 pt-6 w-full justify-start">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#00B4A6]" />
                Same-day reports
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#00B4A6]" />
                Home collection
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#00B4A6]" />
                Open 7 days
              </span>
            </div>
          </div>

          {/* Right Column (40% width) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white border border-slate-200/80 p-8 rounded-[24px] shadow-[0_15px_45px_rgba(15,23,42,0.06)] relative">
              
              {/* Highlight Line top */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#00B4A6]/30 to-transparent"></div>

              <div className="text-[#00B4A6] uppercase tracking-[2px] font-semibold text-[10px] mb-6">
                Centre Overview
              </div>

              {/* 2x2 grid of stats */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
                <div>
                  <div className="font-display font-medium text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none mb-1">
                    4.9<span className="text-[#00B4A6] text-2xl font-sans ml-0.5">★</span>
                  </div>
                  <div className="font-body text-[11px] text-[#475569] font-medium tracking-[0.5px]">Google Rating</div>
                </div>

                <div>
                  <div className="font-display font-medium text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none mb-1">
                    31<span className="text-slate-300 text-2xl font-sans ml-0.5">+</span>
                  </div>
                  <div className="font-body text-[11px] text-[#475569] font-medium tracking-[0.5px]">Patient Reviews</div>
                </div>

                <div>
                  <div className="font-display font-medium text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none mb-1">
                    15<span className="text-slate-300 text-2xl font-sans ml-0.5">+</span>
                  </div>
                  <div className="font-body text-[11px] text-[#475569] font-medium tracking-[0.5px]">Diagnostic Services</div>
                </div>

                <div>
                  <div className="font-display font-medium text-2xl sm:text-[26px] text-[#00B4A6] tracking-tight leading-none mb-1 pt-1.5">
                    Same-day
                  </div>
                  <div className="font-body text-[11px] text-[#475569] font-medium tracking-[0.5px] mt-1.5">Reports</div>
                </div>
              </div>

              {/* Thin Divider */}
              <div className="h-[1px] bg-slate-100 w-full mb-6"></div>

              {/* Info Rows */}
              <div className="flex flex-col gap-4 font-body text-[13px] text-[#0F172A]/85">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#00B4A6] flex-shrink-0" />
                  <span>Mon–Sat 8AM–9PM · Sun 8AM–2PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home size={16} className="text-[#00B4A6] flex-shrink-0" />
                  <span>Home sample collection available</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-[#00B4A6] flex-shrink-0" />
                  <span>Reports delivered on WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
