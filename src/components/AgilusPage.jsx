import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, MapPin, Phone, Clock, CreditCard, ChevronLeft, Microscope, Check } from 'lucide-react';

const services = [
  { name: 'Blood Tests', desc: 'Complete range of blood profile analysis.' },
  { name: 'Pathology Services', desc: 'Accurate clinical pathology reporting.' },
  { name: 'Thyroid Panel', desc: 'TSH, T3, T4 hormonal examinations.' },
  { name: 'Diabetes Screen', desc: 'HbA1c, Fasting & PP blood sugar levels.' },
  { name: 'Complete Blood Count (CBC)', desc: 'Detailed red/white blood cell profile.' },
  { name: 'Liver Function Test (LFT)', desc: 'SGOT, SGPT, Bilirubin check.' },
  { name: 'Kidney Function Test (KFT)', desc: 'Urea, Creatinine, Uric Acid levels.' },
  { name: 'Urine & Stool Analysis', desc: 'Routine microscopical and chemical tests.' }
];

export default function AgilusPage() {
  return (
    <div className="bg-white text-[#0F172A] font-body selection:bg-red-200 selection:text-[#0F172A]">
      
      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[16px] border-b border-slate-200/50 shadow-[0_2px_15px_rgba(0,0,0,0.03)] h-20 flex items-center justify-between px-6 max-w-7xl mx-auto" role="navigation">
        <div className="flex items-center gap-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-red-700 transition-colors">
            <ChevronLeft size={16} />
            <span>Back to Forthlines Diagnostics</span>
          </Link>
        </div>
        <div className="flex items-baseline gap-2 select-none flex-shrink-0">
          <span className="font-display font-bold text-xl sm:text-2xl text-[#0A1628] tracking-tight">
            Agilus
          </span>
          <span className="font-body text-xs sm:text-sm font-semibold tracking-wide text-red-700">
            Diagnostics
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 relative bg-white flex items-center justify-center overflow-hidden">
        {/* Soft Red Gradient Glow */}
        <div 
          className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #B91C1C 0%, #F87171 100%)'
          }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(185, 28, 28, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(185, 28, 28, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-slate-200/80 rounded-full px-4.5 py-2 mb-6 sm:mb-8">
                <Star size={14} fill="#FBBF24" color="#FBBF24" />
                <span className="font-body text-[12px] font-semibold text-[#475569]">
                  4.9★ rated · 91 reviews on Google
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-semibold text-[#0A1628] tracking-tight leading-[1.2] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                Nationally accredited <br />
                <span className="relative inline-block pb-1">
                  diagnostic testing
                  <span className="absolute bottom-0 left-0 w-full h-[4px] bg-red-700/25 rounded"></span>
                </span>{' '}
                <span className="text-red-700">in Garia.</span>
              </h1>

              {/* Brand note / Subtext */}
              <p className="font-body text-[14px] font-semibold text-red-700/90 tracking-wide uppercase mb-3">
                Formerly SRL Diagnostics
              </p>
              
              {/* Description */}
              <p className="font-body text-base md:text-[15.5px] text-[#475569] leading-relaxed mb-8 max-w-xl">
                Agilus Diagnostics (formerly SRL Diagnostics) is a trusted, nationally affiliated diagnostic chain. Get reliable results from CAP & ISO certified laboratories, managed locally in partnership with Forthlines Diagnostics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <a 
                  href="https://wa.me/919088217695?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20Agilus%20Diagnostics%20Garia" 
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
                  View Services
                </a>
              </div>

              {/* Review quote highlight */}
              <div className="flex items-start gap-3.5 font-body text-[13.5px] text-[#475569] border-t border-slate-100 pt-6 w-full max-w-lg justify-start">
                <div className="flex gap-0.5 flex-shrink-0 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
                <blockquote className="italic text-left">
                  "Reasonable prices. Efficient technicians who meticulously maintain hygiene."
                  <span className="block text-[11px] not-italic font-bold text-slate-400 mt-1 uppercase tracking-wider">
                    — Patient Review
                  </span>
                </blockquote>
              </div>
            </div>

            {/* Right Column - Stats & Info Card */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end select-none z-20">
              <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden relative">
                
                {/* Lab Image */}
                <div className="w-full h-[210px] overflow-hidden relative border-b border-slate-100">
                  <img 
                    src="/diagnostic-lab.png" 
                    alt="Agilus Diagnostics Lab" 
                    className="w-full h-full object-cover select-none pointer-events-none filter sepia-[0.1] saturate-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-red-700 text-white font-body text-[10px] font-bold tracking-[1.5px] uppercase py-1 px-3 rounded-full shadow-md">
                    GARIA CENTER
                  </div>
                </div>

                {/* Stats Container */}
                <div className="p-7 relative">
                  
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-red-700/20 to-transparent"></div>

                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="text-left">
                      <div className="font-body text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 mb-1">
                        NATIONAL AFFILIATION
                      </div>
                      <h3 className="font-display font-medium text-lg text-[#0A1628] leading-tight">
                        Quality checks, global standards
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#0A1628] text-white font-body font-bold text-[11px] px-3 py-1 rounded-full flex-shrink-0">
                      <Star size={10} fill="#FBBF24" color="#FBBF24" />
                      <span>4.9</span>
                    </div>
                  </div>

                  {/* Info Blocks */}
                  <div className="grid grid-cols-2 gap-3.5 mb-5">
                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <ShieldCheck size={10} className="text-red-700" />
                        <span>ACCREDITED</span>
                      </div>
                      <div className="font-display font-semibold text-[15px] text-[#0A1628]">
                        CAP & ISO Certified
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <Star size={10} className="text-red-700" />
                        <span>REVIEWS</span>
                      </div>
                      <div className="font-display font-semibold text-lg text-[#0A1628]">
                        91+ Verified
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl text-left col-span-2">
                      <div className="flex items-center gap-1.5 text-slate-400 font-body text-[8.5px] font-bold tracking-[1px] uppercase mb-1.5">
                        <CreditCard size={10} className="text-red-700" />
                        <span>PAYMENTS ACCEPTED</span>
                      </div>
                      <div className="font-body font-medium text-[12.5px] text-[#475569]">
                        NFC Payments, Debit/Credit Cards
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-[#F8FAFC] border border-slate-200/50 p-3.5 rounded-xl flex items-center justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Clock size={13} className="text-red-700 flex-shrink-0" />
                      <span className="font-body text-[10px] font-bold tracking-[0.5px] uppercase text-slate-400">
                        Open hours
                      </span>
                    </div>
                    <span className="font-body text-[11.5px] font-semibold text-[#475569]">
                      Mon–Sat: until 8:30 PM
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
              <span className="text-[10px] uppercase tracking-[3px] font-bold text-red-700 mb-3 block">
                AVAILABLE DIAGNOSTICS
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
                Comprehensive testing, <br />
                uncompromised hygiene.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <p className="font-body text-[14.5px] text-[#475569] leading-relaxed">
                Offering a wide spectrum of pathology, biochemistry, and general clinical diagnostics. Every test is processed under rigid quality protocols with ISO standard accuracy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[20px] p-6 border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:border-red-700/30 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 bg-red-700/5 text-red-700 rounded-xl flex items-center justify-center mb-4">
                  <Microscope size={20} />
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

      {/* Quality & Trust Banner */}
      <section className="bg-[#0A1628] text-white py-16 relative overflow-hidden text-left">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(185, 28, 28, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(185, 28, 28, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-red-500 mb-3 block">
              NATIONAL TRUST & STANDARDS
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-4 leading-tight">
              CAP & ISO Accredited Laboratory Network
            </h2>
            <p className="font-body text-[13.5px] text-slate-400 leading-relaxed">
              Agilus Diagnostics holds the gold standard of accreditation including College of American Pathologists (CAP) certification and ISO 9001:2015. Our processing ensures unmatched accuracy for every diagnosis.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border border-white/10 rounded-2xl p-5 bg-white/5 text-center flex flex-col items-center justify-center w-32">
              <span className="font-display font-bold text-2xl text-red-400">CAP</span>
              <span className="font-body text-[9px] font-semibold tracking-wider text-slate-400 uppercase mt-1">Accredited</span>
            </div>
            <div className="border border-white/10 rounded-2xl p-5 bg-white/5 text-center flex flex-col items-center justify-center w-32">
              <span className="font-display font-bold text-2xl text-red-400">ISO</span>
              <span className="font-body text-[9px] font-semibold tracking-wider text-slate-400 uppercase mt-1">9001:2015</span>
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
              <span className="text-[10px] uppercase tracking-[3px] font-bold text-red-700 mb-3 block">
                LOCATION & BOOKING
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2] mb-6">
                Easy access in <br />
                Garia, Kolkata.
              </h2>
              <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-8 max-w-sm">
                Visit our clinic directly on Garia Main Road, or secure booking instantly through WhatsApp. Enjoy home sample collection by efficient and hygienic technicians.
              </p>

              <div className="flex flex-col gap-4 w-full">
                {/* WhatsApp booking card */}
                <a 
                  href="https://wa.me/919088217695?text=Hi%2C%20I%20want%20to%20book%20a%2520test%2520at%2520Agilus%2520Diagnostics%2520Garia"
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
                      BOOK VIA WHATSAPP
                    </div>
                    <div className="font-body text-[13.5px] font-semibold text-white">
                      +91 90882 17695 — Chat now
                    </div>
                  </div>
                </a>

                {/* Phone & Address Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="tel:+919088217695" className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm hover:border-red-700/30 transition-all duration-200">
                    <div className="w-9 h-9 bg-red-700/10 text-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                        PHONE
                      </div>
                      <div className="font-body text-[12.5px] font-semibold text-[#0A1628] mt-0.5">
                        +91 90882 17695
                      </div>
                    </div>
                  </a>
                  <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm">
                    <div className="w-9 h-9 bg-red-700/10 text-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div className="text-left">
                      <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                        OPEN HOURS
                      </div>
                      <div className="font-body text-[11px] font-medium text-[#475569] mt-0.5 leading-tight">
                        Mon–Sat: until 8:30 PM <br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-sm">
                  <div className="w-9 h-9 bg-red-700/10 text-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="text-left">
                    <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                      ADDRESS
                    </div>
                    <div className="font-body text-[12.5px] font-semibold text-[#0A1628] mt-0.5">
                      49, Garia Main Rd, Tetultala, Nazrul Pally, Mahamaya Tala, Garia, Kolkata 700084
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Illustration */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full h-[340px] rounded-[20px] overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.04)] relative flex flex-col justify-end p-5 bg-[#F8FAFC]">
                <div className="absolute inset-0 -z-10 bg-[#E8EDF5] overflow-hidden flex items-center justify-center">
                  <div className="absolute w-[220px] h-[220px] rounded-full bg-red-700/10 blur-3xl pointer-events-none"></div>
                  <svg className="w-full h-full stroke-white stroke-[3.5] opacity-80" viewBox="0 0 200 200">
                    <path d="M-20,40 C50,80 140,120 220,160" fill="none" />
                    <path d="M-20,140 C60,100 150,50 220,90" fill="none" />
                    <path d="M80,-20 C60,70 120,130 180,220" fill="none" />
                  </svg>
                  <div className="absolute w-11 h-11 bg-red-700 rounded-full flex items-center justify-center shadow-lg animate-pin-bounce">
                    <MapPin size={18} className="text-white" />
                  </div>
                </div>
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-md flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-left w-full">
                  <div>
                    <h4 className="font-display font-semibold text-[#0A1628] text-[13.5px] leading-tight mb-0.5">
                      Agilus Diagnostics (SRL)
                    </h4>
                    <p className="font-body text-[10.5px] text-[#475569]">
                      49, Garia Main Rd, Kolkata 700084
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=49,+Garia+Main+Rd,+Tetultala,+Nazrul+Pally,+Mahamaya+Tala,+Garia,+Kolkata+700084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-body font-semibold text-red-700 hover:text-red-800 transition-colors flex-shrink-0"
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
            linear-gradient(to right, rgba(185, 28, 28, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(185, 28, 28, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">
              Agilus Diagnostics Garia
            </h3>
            <p className="font-body text-xs text-slate-400 max-w-sm">
              Franchise Partner of Forthlines Diagnostics · Garia, Kolkata
            </p>
          </div>
          <Link to="/" className="font-body text-[13px] font-semibold text-red-400 hover:underline">
            Part of Forthlines Diagnostics Network
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-slate-500">
            © 2026 Agilus Diagnostics · Garia Franchise Center
          </p>
          <p className="font-body text-[11px] text-slate-500">
            Nationally Accredited Quality Pathology & Diagnostics
          </p>
        </div>
      </footer>

    </div>
  );
}
