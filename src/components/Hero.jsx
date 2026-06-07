import React from 'react';
import { Star, Clipboard, Activity, Clock, Calendar } from 'lucide-react';

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
      className="pt-36 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 relative bg-white flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Soft Teal/Blue Gradient Glow behind the card on the right */}
      <div 
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #00B4A6 0%, #3B82F6 100%)'
        }}
      ></div>

      {/* Grid Pattern Overlay matching the screenshot */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 180, 166, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 180, 166, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (60% width) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-slate-200/80 rounded-full px-4.5 py-2 mb-8">
              <Star size={14} fill="#FBBF24" color="#FBBF24" />
              <span className="font-body text-[12px] font-semibold text-[#475569]">
                4.9★ rated by 107 patients on Google
              </span>
            </div>
 
            {/* Headline matching screenshot layout */}
            <h1 className="font-display font-semibold text-[#0A1628] tracking-tight leading-[1.2] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Guwahati's most trusted <br />
              <span className="relative inline-block pb-1">
                Ayurvedic clinic
                {/* Custom Teal Underline */}
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#00B4A6]/30 rounded"></span>
              </span>{' '}
              <span className="text-[#00B4A6]">in Pan Bazaar.</span>
            </h1>
 
            {/* Description Paragraph */}
            <p className="font-body text-base md:text-[15.5px] text-[#475569] leading-relaxed mb-8 max-w-xl">
              Authentic Ayurvedic healthcare services by Dr Subhrajyoti Biswas (Ayurvedacharya). High customer satisfaction, traditional treatments, and natural healing. From personalized consultation (Nadi Pariksha) to full Panchakarma detox.
            </p>
 
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-[0_4px_12px_rgba(10,22,40,0.15)]"
              >
                Book a Consultation
                <span className="text-base font-normal ml-0.5">→</span>
              </a>
              <a 
                href="#packages" 
                onClick={(e) => handleScrollTo(e, 'packages')}
                className="inline-flex items-center justify-center border border-slate-200 bg-white text-[#0A1628] font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all duration-300"
              >
                View Wellness Packages
              </a>
            </div>
 
            {/* Testimonial snippet underneath */}
            <div className="flex items-center gap-3 font-body text-[13px] text-[#475569] border-t border-slate-100 pt-6 w-full max-w-md justify-start">
              <div className="flex gap-0.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <span>
                "Deep-rooted Ayurvedic knowledge and excellent diagnosis" — Amit D.
              </span>
            </div>
          </div>
 
          {/* Right Column (40% width) - Unified Lab Image & Stats Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end select-none z-20">
            <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden relative">
              
              {/* Doctor Image at the top of the card */}
              <div className="w-full h-[240px] overflow-hidden relative border-b border-slate-100">
                <img 
                  src="/dr-biswas-writing.png" 
                  alt="Dr Subhrajyoti Biswas (Ayurvedacharya)" 
                  className="w-full h-full object-cover object-[center_68%] select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
              </div>
 
              {/* Stats & Info Container */}
              <div className="p-7 relative">
                
                {/* Top highlight bar */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#00B4A6]/20 to-transparent"></div>
 
                {/* Card Header Row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="text-left">
                    <div className="font-body text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 mb-1">
                      PAN BAZAAR, GUWAHATI
                    </div>
                    <h3 className="font-display font-medium text-lg text-[#0A1628] leading-tight">
                      Trusted by the community
                    </h3>
                  </div>
                  {/* star pill */}
                  <div className="inline-flex items-center gap-1.5 bg-[#0A1628] text-white font-body font-bold text-[11px] px-3 py-1 rounded-full flex-shrink-0 select-none">
                    <Star size={10} fill="#FBBF24" color="#FBBF24" />
                    <span>4.9</span>
                  </div>
                </div>
 
                {/* 2x2 grid of stats inside the card */}
                <div className="grid grid-cols-2 gap-3.5 mb-5">
                  
                  {/* Block 1 */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                    <div className="flex items-center gap-2 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                      <Star size={10} className="text-[#00B4A6]" />
                      <span>GOOGLE RATING</span>
                    </div>
                    <div className="font-display font-semibold text-lg text-[#0A1628]">
                      4.9★
                    </div>
                  </div>
 
                  {/* Block 2 */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                    <div className="flex items-center gap-2 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                      <Clipboard size={10} className="text-[#00B4A6]" />
                      <span>PATIENT REVIEWS</span>
                    </div>
                    <div className="font-display font-semibold text-lg text-[#0A1628]">
                      107+
                    </div>
                  </div>
 
                  {/* Block 3 */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                    <div className="flex items-center gap-2 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                      <Activity size={10} className="text-[#00B4A6]" />
                      <span>SERVICES</span>
                    </div>
                    <div className="font-display font-semibold text-lg text-[#0A1628]">
                      12+
                    </div>
                  </div>
 
                  {/* Block 4 */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                    <div className="flex items-center gap-2 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                      <Clock size={10} className="text-[#00B4A6]" />
                      <span>CLINIC HOURS</span>
                    </div>
                    <div className="font-display font-semibold text-sm sm:text-base text-[#0A1628]">
                      10AM - 8PM
                    </div>
                  </div>
 
                </div>
 
                {/* Bottom full-width info box */}
                <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl flex items-center justify-between text-left">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-[#00B4A6] flex-shrink-0" />
                    <span className="font-body text-[10px] font-bold tracking-[0.5px] uppercase text-slate-400">
                      Open today
                    </span>
                  </div>
                  <span className="font-body text-[11.5px] font-semibold text-[#475569]">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
 
              </div>
 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
