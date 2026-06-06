import React from 'react';
import { MessageSquare, Home, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'WhatsApp us the test name',
    desc: "Send us the test or package you'd like to book. We confirm in minutes."
  },
  {
    number: '02',
    icon: Home,
    title: 'We collect at home or you visit us',
    desc: 'Choose doorstep collection or walk into our Patuli centre — your call.'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Get report on WhatsApp same day',
    desc: 'Most reports delivered the same day. Soft copy + printed copy available.'
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
          <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3">
            HOW IT WORKS
          </span>
          <h2 id="how-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0A1628] tracking-tight">
            Three steps. Zero hassle.
          </h2>
          <div className="h-[2px] bg-[#00B4A6] w-12 mt-4 rounded"></div>
        </div>

        {/* Steps Wrapper */}
        <div className="relative flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-stretch">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-slate-200 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="flex-1 flex flex-col items-center text-center relative z-10 select-none group"
              >
                {/* Icon box (rounded square) */}
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-[16px] flex items-center justify-center mb-6 relative z-10 shadow-[0_4px_12px_rgba(15,23,42,0.035)] group-hover:border-[#00B4A6]/40 transition-colors duration-300">
                  <Icon size={20} className="text-[#00B4A6]" />
                </div>

                {/* Step Number */}
                <div className="font-body font-bold text-[32px] text-slate-200/80 leading-none mb-2 select-none tracking-tight">
                  {step.number}
                </div>

                <h3 className="font-display font-bold text-[#0A1628] text-[17px] mb-3 leading-tight max-w-[220px]">
                  {step.title}
                </h3>
                <p className="font-body text-[12.5px] text-[#475569] leading-relaxed max-w-[280px]">
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
