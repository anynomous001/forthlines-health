import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, MapPin, Phone, Clock, CreditCard, ChevronLeft, Award, Check } from 'lucide-react';

const services = [
  { name: 'Blood Tests', desc: 'Routine biochemistry, hematology, and specialized assays.' },
  { name: 'Imaging Services', desc: 'Partner-coordinated basic and advanced diagnostic imaging.' },
  { name: 'Molecular Diagnostics', desc: 'DNA, RNA and PCR molecular level path testing.' },
  { name: 'Preventive Health Packages', desc: 'Tailored health wellness profiles for families.' },
  { name: 'Home Sample Collection', desc: 'Convenient blood draws at your doorstep.' },
  { name: 'Hormonal Profiles', desc: 'Thyroid, fertility, growth, and metabolic assays.' },
  { name: 'Oncology Markers', desc: 'Cancer screening tests and specialized tumor markers.' },
  { name: 'Infection Panels', desc: 'Rapid PCR tests for viral, bacterial, and fungal agents.' }
];

export default function MetropolisPage() {
  return (
    <div className="bg-white text-[#0F172A] font-body selection:bg-purple-200 selection:text-[#0F172A]">
      
      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[16px] border-b border-slate-200/50 shadow-[0_2px_15px_rgba(0,0,0,0.03)] h-20 flex items-center justify-between px-6 max-w-7xl mx-auto" role="navigation">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-[#7C3AED] transition-colors">
            <ChevronLeft size={16} />
            <span>Back to Forthlines Diagnostics</span>
          </Link>
        </div>
        <div className="flex items-baseline gap-2 select-none flex-shrink-0">
          <span className="font-display font-bold text-xl sm:text-2xl text-[#0A1628] tracking-tight">
            Metropolis
          </span>
          <span className="font-body text-xs sm:text-sm font-semibold tracking-wide text-[#7C3AED]">
            Healthcare
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 relative bg-white flex items-center justify-center overflow-hidden">
        {/* Soft Purple Gradient Glow */}
        <div 
          className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, #A78BFA 100%)'
          }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Google Rating / Brand Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-slate-200/80 rounded-full px-4.5 py-2 mb-6 sm:mb-8">
                <Award size={14} className="text-[#7C3AED]" />
                <span className="font-body text-[12px] font-semibold text-[#475569]">
                  Nationally trusted diagnostic brand
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-semibold text-[#0A1628] tracking-tight leading-[1.2] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                National brand trust, <br />
                <span className="relative inline-block pb-1">
                  locally operated
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#7C3AED]/25 rounded"></span>
                </span>{' '}
                <span className="text-[#7C3AED]">in Garia.</span>
              </h1>

              {/* Position Note */}
              <p className="font-body text-[14.5px] text-[#475569] leading-relaxed mb-8 max-w-xl">
                Metropolis Healthcare is one of India's leading diagnostic networks, operated locally under the Forthlines network. Access our extensive menu of NABL-accredited health tests with the convenience of neighborhood support.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <a 
                  href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20Metropolis%20Diagnostics%20Garia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-[0_4px_12px_rgba(10,22,40,0.15)]"
                >
                  Book via WhatsApp
                  <span className="text-base font-normal ml-0.5">→</span>
                </a>
                <a 
                  href="#services-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center border border-slate-200 bg-white text-[#0A1628] font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all duration-300"
                >
                  View Test Menu
                </a>
              </div>

              {/* Trust signals snippet */}
              <div className="flex items-center gap-3 font-body text-[13.5px] text-[#475569] border-t border-slate-100 pt-6 w-full max-w-md justify-start">
                <ShieldCheck size={18} className="text-[#7C3AED] flex-shrink-0" />
                <span>
                  Part of a <strong>4,000+</strong> collection centre network across India
                </span>
              </div>
            </div>

            {/* Right Column - Stats & Info Card */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end select-none z-20">
              <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden relative">
                
                {/* Lab Image */}
                <div className="w-full h-[210px] overflow-hidden relative border-b border-slate-100">
                  <img 
                    src="/diagnostic-lab.png" 
                    alt="Metropolis Diagnostics Lab" 
                    className="w-full h-full object-cover select-none pointer-events-none filter hue-rotate-[90deg] saturate-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#7C3AED] text-white font-body text-[10px] font-bold tracking-[1.5px] uppercase py-1 px-3 rounded-full shadow-md">
                    FRANCHISE OUTLET
                  </div>
                </div>

                {/* Stats Container */}
                <div className="p-7 relative">
                  
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent"></div>

                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="text-left">
                      <div className="font-body text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 mb-1">
                        ACCRAEDITATION
                      </div>
                      <h3 className="font-display font-medium text-lg text-[#0A1628] leading-tight">
                        Quality-first pathology
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#0A1628] text-white font-body font-bold text-[11px] px-3 py-1 rounded-full flex-shrink-0">
                      <span>NABL</span>
                    </div>
                  </div>

                  {/* Info Blocks */}
                  <div className="grid grid-cols-2 gap-3.5 mb-5">
                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <Award size={10} className="text-[#7C3AED]" />
                        <span>STANDARDS</span>
                      </div>
                      <div className="font-display font-semibold text-[15px] text-[#0A1628]">
                        NABL Certified
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <ShieldCheck size={10} className="text-[#7C3AED]" />
                        <span>LOCATIONS</span>
                      </div>
                      <div className="font-display font-semibold text-[15px] text-[#0A1628]">
                        4000+ India-wide
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left col-span-2">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <MapPin size={10} className="text-[#7C3AED]" />
                        <span>GARIA LINKAGE</span>
                      </div>
                      <div className="font-body font-medium text-[12.5px] text-[#475569]">
                        Locally managed by Forthlines Network
                      </div>
                    </div>
                  </div>

                  {/* Home Collection Badge */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl flex items-center justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Check size={13} className="text-[#7C3AED] flex-shrink-0" />
                      <span className="font-body text-[10px] font-bold tracking-[0.5px] uppercase text-slate-400">
                        Home Sample Collection
                      </span>
                    </div>
                    <span className="font-body text-[11.5px] font-semibold text-[#475569]">
                      Available
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16 text-left">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#7C3AED] mb-3 block">
                COMPREHENSIVE TEST MENU
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
                Wide clinical spectrum, <br />
                highly precise pathology.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <p className="font-body text-[14.5px] text-[#475569] leading-relaxed">
                Unlock an exhaustive menu of specialized diagnostics. From routine checkups to molecular testing, we guarantee accurate reporting using the latest laboratory technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[20px] p-6 border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:border-[#7C3AED]/30 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 bg-[#7C3AED]/5 text-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
                  <Award size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#0A1628] mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-[13px] text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="bg-[#0A1628] text-white py-16 relative overflow-hidden text-left">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(124, 58, 237, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-purple-400 mb-3 block">
              NABL CERTIFICATION
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-4 leading-tight">
              Quality Assurance at National Scale
            </h2>
            <p className="font-body text-[13.5px] text-slate-400 leading-relaxed">
              Metropolis Healthcare maintains rigorous standards that are fully certified by the National Accreditation Board for Testing and Calibration Laboratories (NABL). Our checks are trusted by doctors and medical institutions nationwide.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border border-white/10 rounded-2xl p-5 bg-white/5 text-center flex flex-col items-center justify-center w-36">
              <span className="font-display font-bold text-2xl text-purple-400">NABL</span>
              <span className="font-body text-[9px] font-semibold tracking-wider text-slate-400 uppercase mt-1">Accredited</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#7C3AED] mb-3 block">
                LOCATION & BOOKING
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2] mb-6">
                Accurate reports in <br />
                Garia, Kolkata.
              </h2>
              <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-8 max-w-sm">
                Get tests done locally in Garia. Booking is made simple through Forthlines Diagnostics' dedicated WhatsApp desk. Pathologists verify every diagnostic report before delivery.
              </p>

              <div className="flex flex-col gap-4 w-full">
                {/* WhatsApp booking card */}
                <a 
                  href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%2520test%2520at%2520Metropolis%2520Diagnostics%2520Garia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 bg-[#0A1628] hover:bg-slate-800 text-white p-4.5 rounded-2xl shadow-lg transition-all hover:-translate-y-0.5 duration-300"
                >
                  <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-body text-[9px] font-bold text-white/70 uppercase tracking-[1px] mb-0.5">
                      BOOK VIA WHATSAPP (FORTHLINES)
                    </div>
                    <div className="font-body text-[13.5px] font-semibold text-white">
                      +91 87775 78862 — Chat now
                    </div>
                  </div>
                </a>

                {/* Phone & Location Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm">
                    <div className="w-9 h-9 bg-purple-700/10 text-[#7C3AED] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                        PHONE
                      </div>
                      <div className="font-body text-[12px] font-semibold text-[#0A1628] mt-0.5">
                        [Contact for details]
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm">
                    <div className="w-9 h-9 bg-purple-700/10 text-[#7C3AED] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                        SERVICE STATUS
                      </div>
                      <div className="font-body text-[11px] font-medium text-[#475569] mt-0.5 leading-tight">
                        Mon–Sat: Active <br />
                        Home Collection open
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm">
                  <div className="w-9 h-9 bg-purple-700/10 text-[#7C3AED] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="text-left">
                    <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                      ADDRESS
                    </div>
                    <div className="font-body text-[12.5px] font-semibold text-[#0A1628] mt-0.5">
                      Garia, Kolkata (Managed under Forthlines Network)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Illustration */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full h-[340px] rounded-[20px] overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.04)] relative flex flex-col justify-end p-5 bg-[#F8FAFC]">
                <div className="absolute inset-0 -z-10 bg-[#E8EDF5] overflow-hidden flex items-center justify-center">
                  <div className="absolute w-[220px] h-[220px] rounded-full bg-purple-700/10 blur-3xl pointer-events-none"></div>
                  <svg className="w-full h-full stroke-white stroke-[3.5] opacity-80" viewBox="0 0 200 200">
                    <path d="M-20,30 C30,90 120,110 220,170" fill="none" />
                    <path d="M-20,130 C70,120 160,40 220,80" fill="none" />
                    <path d="M90,-20 C50,80 130,120 190,220" fill="none" />
                  </svg>
                  <div className="absolute w-11 h-11 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-lg animate-pin-bounce">
                    <MapPin size={18} className="text-white" />
                  </div>
                </div>
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-left w-full">
                  <div>
                    <h4 className="font-display font-semibold text-[#0A1628] text-[13.5px] leading-tight mb-0.5">
                      Metropolis Healthcare Outlet
                    </h4>
                    <p className="font-body text-[10.5px] text-[#475569]">
                      Garia, Kolkata
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Garia,+Kolkata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-body font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors flex-shrink-0"
                  >
                    <span>View on Maps</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="bg-[#0A1628] text-white py-12 text-left relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">
              Metropolis Healthcare Garia
            </h3>
            <p className="font-body text-xs text-slate-400 max-w-sm">
              Franchise Partner of Forthlines Diagnostics · Garia, Kolkata
            </p>
          </div>
          <Link to="/" className="font-body text-[13px] font-semibold text-purple-400 hover:underline">
            Part of Forthlines Diagnostics Network
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-slate-500">
            © 2026 Metropolis Healthcare · Garia Franchise Center
          </p>
          <p className="font-body text-[11px] text-slate-500">
            NABL Accredited Quality Diagnostics across India
          </p>
        </div>
      </footer>

    </div>
  );
}
