import React from 'react';
import { Phone, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (45% width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left select-none">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3 block">
              BOOK A TEST
            </span>
            <h2 id="contact-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2] mb-6">
              Book your test in <br />
              60 seconds.
            </h2>
            <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-8 max-w-sm">
              Skip forms and queues. WhatsApp us the test name — we'll confirm, collect your sample, and deliver the report.
            </p>

            {/* List of Contact Cards */}
            <div className="flex flex-col gap-4 w-full">
              
              {/* WhatsApp Row */}
              <a 
                href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%2520test%20at%20Forthlines%20Diagnostics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 bg-[#00B4A6] hover:bg-[#00a396] text-white p-4.5 rounded-2xl shadow-[0_4px_14px_rgba(0,180,166,0.15)] transition-all hover:-translate-y-0.5 duration-300"
              >
                <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-body text-[9px] font-bold text-white/70 uppercase tracking-[1px] mb-0.5">
                    WHATSAPP
                  </div>
                  <div className="font-body text-[13.5px] font-semibold text-white">
                    +91 87775 78862 — Chat with us
                  </div>
                </div>
              </a>

              {/* Phone + Hours Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone Card */}
                <a 
                  href="tel:+918777578862"
                  className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.015)] hover:border-[#00B4A6]/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="text-left">
                    <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                      PHONE
                    </div>
                    <div className="font-body text-[12.5px] font-semibold text-[#0A1628] mt-0.5">
                      +91 87775 78862
                    </div>
                  </div>
                </a>

                {/* Hours Card */}
                <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.015)]">
                  <div className="w-9 h-9 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div className="text-left">
                    <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                      OPEN HOURS
                    </div>
                    <div className="font-body text-[11px] font-medium text-[#475569] mt-0.5 leading-tight">
                      Mon–Sat: 8AM–9PM <br />
                      Sunday: 8AM–2PM
                    </div>
                  </div>
                </div>

              </div>

              {/* Address Card */}
              <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.015)]">
                <div className="w-9 h-9 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="text-left">
                  <div className="font-body text-[8.5px] font-bold text-slate-400 uppercase tracking-[1px]">
                    ADDRESS
                  </div>
                  <div className="font-body text-[12.5px] font-semibold text-[#0A1628] mt-0.5">
                    Block J, Baishnabghata Patuli Township, Kolkata 700094
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (55% width) - Illustrated Map Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full h-[340px] rounded-[20px] overflow-hidden border border-slate-200/80 shadow-[0_15px_40px_rgba(15,23,42,0.04)] relative flex flex-col justify-end p-5 bg-[#F8FAFC]">
              
              {/* Map Illustration Background matching screenshot */}
              <div className="absolute inset-0 -z-10 bg-[#E8EDF5] overflow-hidden flex items-center justify-center">
                {/* Custom circular grid glow */}
                <div className="absolute w-[220px] h-[220px] rounded-full bg-[#00B4A6]/12 blur-3xl pointer-events-none"></div>

                {/* Abstract Vector map roads */}
                <svg className="w-full h-full stroke-white stroke-[3.5] opacity-80" viewBox="0 0 200 200">
                  <path d="M-20,60 C40,40 160,160 220,140" fill="none" />
                  <path d="M-20,120 C80,110 120,60 220,50" fill="none" />
                  <path d="M40,-20 C35,60 170,120 160,220" fill="none" />
                </svg>

                {/* Pin element */}
                <div className="absolute w-11 h-11 bg-[#00B4A6] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,180,166,0.35)] animate-pin-bounce">
                  <MapPin size={18} className="text-white" />
                </div>
              </div>

              {/* Bottom White Overlay Box */}
              <div className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-[0_4px_25px_rgba(15,23,42,0.03)] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-left">
                <div>
                  <h4 className="font-display font-semibold text-[#0A1628] text-[13.5px] leading-tight mb-0.5">
                    Forthlines Diagnostics
                  </h4>
                  <p className="font-body text-[10.5px] text-[#475569]">
                    Patuli, Kolkata 700094
                  </p>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Baishnabghata+Patuli+Township+Kolkata+700094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-body font-semibold text-[#00B4A6] hover:text-[#00a396] transition-colors flex-shrink-0"
                >
                  <span>View on Maps</span>
                  <ExternalLink size={10} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
