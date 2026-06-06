import React from 'react';
import { MessageSquare, Home, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'WhatsApp your test',
    desc: 'Tell us the test name or describe your symptoms. We confirm availability and price within minutes.'
  },
  {
    number: '02',
    icon: Home,
    title: 'Sample collected',
    desc: 'Visit us in Patuli or choose home collection. Our certified technician arrives on time, every time.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Report on WhatsApp',
    desc: 'Your digital report arrives on WhatsApp the same day. Download it, share it with your doctor.'
  }
];

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="bg-white py-24 border-t border-slate-100"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            PROCESS
          </span>
          <h2 id="how-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Get your reports in 3 simple steps
          </h2>
          <div className="h-[2px] bg-[#00B4A6] w-12 mt-4 rounded"></div>
        </div>

        {/* Steps Wrapper */}
        <div className="relative flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-stretch">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[1px] border-t border-dashed border-[#00B4A6]/35 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="flex-1 bg-[#F8FAFC] border border-slate-200/60 p-8 rounded-2xl relative select-none flex flex-col items-center text-center hover:bg-slate-100/50 transition-colors duration-300 z-10"
              >
                {/* Oversized Step Number behind */}
                <div className="absolute top-4 right-6 font-display font-bold text-[72px] text-[#00B4A6]/12 leading-none pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Icon wrapper */}
                <div className="w-14 h-14 bg-[#00B4A6]/10 text-[#00B4A6] border border-[#00B4A6]/25 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_8px_20px_rgba(0,180,166,0.08)]">
                  <Icon size={22} />
                </div>

                <h3 className="font-body font-bold text-[#0F172A] text-[16px] mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-body text-[13px] text-[#475569] leading-relaxed relative z-10 max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
