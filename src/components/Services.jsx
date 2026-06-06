import React from 'react';
import { 
  Droplet, 
  Microscope, 
  FlaskConical, 
  Scan, 
  HeartPulse, 
  Activity, 
  Home,
  Candy 
} from 'lucide-react';

const services = [
  {
    icon: Droplet,
    name: 'Blood Tests',
    desc: 'CBC, LFT, KFT, lipid panels, HbA1c and more'
  },
  {
    icon: Microscope,
    name: 'Pathology',
    desc: 'Biopsy, histopathology, cytology panels'
  },
  {
    icon: FlaskConical,
    name: 'Urine & Stool',
    desc: 'Routine and microscopy, culture testing'
  },
  {
    icon: Scan,
    name: 'X-Ray & Imaging',
    desc: 'Digital X-ray, chest and skeletal imaging'
  },
  {
    icon: HeartPulse,
    name: 'ECG',
    desc: 'Resting ECG and cardiac monitoring'
  },
  {
    icon: Candy,
    name: 'Diabetes Panel',
    desc: 'HbA1c, fasting glucose, insulin, post-meal'
  },
  {
    icon: Activity,
    name: 'Thyroid Profile',
    desc: 'TSH, T3, T4 complete function panel'
  },
  {
    icon: Home,
    name: 'Home Collection',
    desc: 'Doorstep sample pickup, book via WhatsApp'
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="bg-[#F8FAFC] py-24 border-t border-slate-100"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            WHAT WE OFFER
          </span>
          <h2 id="services-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Our Diagnostic Services
          </h2>
          <div className="h-[2px] bg-[#00B4A6] w-12 mt-4 rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article 
                key={index} 
                className="group relative bg-white border border-slate-200/80 hover:border-[#00B4A6]/40 p-8 rounded-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.05)] select-none overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-[#00B4A6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[16px]"></div>

                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-[#00B4A6]/10 text-[#00B4A6] flex items-center justify-center rounded-[12px] mb-6 group-hover:bg-[#00B4A6] group-hover:text-white transition-colors duration-300">
                  <Icon size={20} />
                </div>

                <h3 className="font-body font-semibold text-[#0F172A] text-[15px] mb-3 group-hover:text-[#00B4A6] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="font-body text-[13px] text-[#475569] leading-relaxed">
                  {service.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
