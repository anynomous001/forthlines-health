import React from 'react';
import { MapPin, Clock, Home, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-[#F8FAFC] py-24 border-t border-slate-100"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col items-start select-none">
            <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
              GET IN TOUCH
            </span>
            <h2 id="contact-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none mb-6">
              Book your test in <span className="italic font-normal text-[#00B4A6]">60 seconds</span>
            </h2>
            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed mb-10 max-w-lg">
              No lengthy forms. Just message us on WhatsApp and we'll handle the rest — from scheduling to home collection.
            </p>

            {/* WhatsApp CTA Button */}
            <a 
              href="https://wa.me/918777578862?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20Forthlines%20Diagnostics"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BE5A] text-white font-body font-bold text-[15px] px-8 py-4 rounded-xl shadow-[0_6px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all hover:-translate-y-0.5 duration-300 mb-10"
            >
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
              </svg>
              Chat on WhatsApp: +91 87775 78862
            </a>

            {/* List Details */}
            <div className="flex flex-col gap-5 w-full text-[#0F172A]">
              <div className="flex items-start gap-4 py-1.5">
                <MapPin size={18} className="text-[#00B4A6] flex-shrink-0 mt-0.5" />
                <p className="font-body text-[14px] leading-relaxed text-[#475569]">
                  Block J, Baishnabghata Patuli Township, Kolkata 700094, West Bengal
                </p>
              </div>

              <div className="flex items-start gap-4 py-1.5">
                <Clock size={18} className="text-[#00B4A6] flex-shrink-0 mt-0.5" />
                <p className="font-body text-[14px] leading-relaxed text-[#475569]">
                  Mon – Sat: 8:00 AM – 9:00 PM <br />
                  Sunday: 8:00 AM – 2:00 PM
                </p>
              </div>

              <div className="flex items-start gap-4 py-1.5">
                <Home size={18} className="text-[#00B4A6] flex-shrink-0 mt-0.5" />
                <p className="font-body text-[14px] leading-relaxed text-[#475569]">
                  Home collection: available, book via WhatsApp
                </p>
              </div>

              <div className="flex items-start gap-4 py-1.5">
                <FileText size={18} className="text-[#00B4A6] flex-shrink-0 mt-0.5" />
                <p className="font-body text-[14px] leading-relaxed text-[#475569]">
                  Reports: delivered on WhatsApp same day
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Map Placeholder) */}
          <div className="relative">
            <div className="w-full h-[340px] rounded-[20px] overflow-hidden border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.04)] relative flex flex-col justify-between p-6 bg-[#F8FAFC]">
              
              {/* CSS Street Map Illustration Background */}
              <div className="absolute inset-0 map-placeholder-streets -z-10">
                {/* Horizontal grid lines representing streets */}
                <div className="absolute top-[30%] left-0 right-0 h-2 bg-white/70 border-y border-slate-200/40"></div>
                <div className="absolute top-[60%] left-0 right-0 h-2 bg-white/70 border-y border-slate-200/40"></div>
                {/* Vertical grid lines */}
                <div className="absolute left-[35%] top-0 bottom-0 w-2 bg-white/70 border-x border-slate-200/40"></div>
                <div className="absolute left-[70%] top-0 bottom-0 w-2 bg-white/70 border-x border-slate-200/40"></div>
                
                {/* Visual blocks */}
                <div className="absolute top-[8%] left-[5%] w-[25%] h-[18%] bg-white/40 border border-slate-200/40 rounded"></div>
                <div className="absolute top-[8%] left-[42%] w-[23%] h-[18%] bg-[#00B4A6]/5 border border-[#00B4A6]/10 rounded"></div>
                <div className="absolute top-[38%] left-[5%] w-[25%] h-[18%] bg-[#00B4A6]/5 border border-[#00B4A6]/10 rounded"></div>
                <div className="absolute top-[68%] left-[42%] w-[23%] h-[20%] bg-white/40 border border-slate-200/40 rounded"></div>
                <div className="absolute top-[38%] left-[75%] w-[20%] h-[40%] bg-white/40 border border-slate-200/40 rounded"></div>
              </div>

              {/* Pin Center */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-[#00B4A6] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,180,166,0.35)] animate-pin-bounce">
                  <MapPin size={22} className="text-white" />
                </div>
                <div className="mt-4 bg-white border border-slate-200 px-5 py-2.5 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.05)] text-center max-w-[280px]">
                  <strong className="block font-body text-[13px] text-[#0F172A] font-bold">
                    Forthlines Diagnostics
                  </strong>
                  <span className="font-body text-[10px] text-[#475569]">
                    Block J, Patuli, Kolkata
                  </span>
                </div>
              </div>

              {/* Overlay Open Maps Button */}
              <div className="flex justify-end">
                <a 
                  href="https://maps.google.com/?q=Baishnabghata+Patuli+Township+Kolkata+700094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#00B4A6] hover:text-white text-[#00B4A6] border border-[#00B4A6]/30 font-body font-semibold text-[12px] px-5 py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  <MapPin size={13} />
                  Open in Google Maps
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
