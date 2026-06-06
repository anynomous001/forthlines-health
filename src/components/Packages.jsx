import React from 'react';
import { Check, Percent } from 'lucide-react';

const packageList = [
  {
    name: 'Basic Wellness',
    label: 'STARTER',
    priceCrossed: '₹1,299',
    priceActual: '₹799',
    saveText: 'You save ₹500',
    popular: false,
    tests: [
      'CBC',
      'Blood Sugar (Fasting)',
      'Thyroid (TSH)',
      'Urine Routine'
    ],
    waMessage: 'Hi, I want to book the Basic Wellness Package (₹799) at Forthlines Diagnostics.'
  },
  {
    name: 'Full Body Checkup',
    label: 'COMPREHENSIVE',
    priceCrossed: '₹2,599',
    priceActual: '₹1,499',
    saveText: 'You save ₹1,100',
    popular: true,
    tests: [
      'CBC',
      'LFT',
      'KFT',
      'Lipid Profile',
      'Thyroid Profile',
      'Blood Sugar',
      'Urine Routine'
    ],
    waMessage: 'Hi, I want to book the Full Body Checkup Package (₹1,499) at Forthlines Diagnostics.'
  },
  {
    name: 'Diabetes Care',
    label: 'FOCUSED',
    priceCrossed: '₹1,699',
    priceActual: '₹999',
    saveText: 'You save ₹700',
    popular: false,
    tests: [
      'HbA1c',
      'Fasting Glucose',
      'Post-meal Glucose',
      'Insulin',
      'Urine Microalbumin'
    ],
    waMessage: 'Hi, I want to book the Diabetes Care Package (₹999) at Forthlines Diagnostics.'
  },
  {
    name: 'Cardiac Screen',
    label: 'HEART HEALTH',
    priceCrossed: '₹2,199',
    priceActual: '₹1,299',
    saveText: 'You save ₹900',
    popular: false,
    tests: [
      'Lipid Profile',
      'ECG',
      'CRP',
      'Homocysteine',
      'CBC'
    ],
    waMessage: 'Hi, I want to book the Cardiac Screen Package (₹1,299) at Forthlines Diagnostics.'
  }
];

export default function Packages() {
  return (
    <section 
      id="packages" 
      className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Two-column Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16 text-left">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3 block">
              PREVENTIVE HEALTH PACKAGES
            </span>
            <h2 id="packages-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
              Smart packages, <br />
              transparent pricing.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed">
              Hand-picked test bundles at bundled prices. Every package includes free home sample collection within Patuli and nearby areas.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packageList.map((pkg, idx) => (
            <article 
              key={idx} 
              className={`package-card relative bg-white rounded-[20px] p-5 sm:p-7 flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 select-none ${
                pkg.popular 
                  ? 'border border-[#00B4A6] shadow-[0_12px_36px_rgba(0,180,166,0.08)] ring-2 ring-[#00B4A6]/10' 
                  : 'border border-slate-200/80 hover:border-[#00B4A6]/45 hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00B4A6] text-white font-body text-[10px] font-bold tracking-[1.5px] uppercase py-1 px-4.5 rounded-full whitespace-nowrap shadow-[0_4px_10px_rgba(0,180,166,0.2)] flex items-center gap-1.5">
                  <Percent size={11} strokeWidth={3} />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Category Label */}
                <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 mb-2 text-left">
                  {pkg.label}
                </div>

                {/* Package Name */}
                <h3 className="font-display font-bold text-xl text-[#0A1628] mb-3 text-left">
                  {pkg.name}
                </h3>

                {/* Pricing row */}
                <div className="flex items-baseline gap-2 mb-1 text-left">
                  <span className="font-display font-medium text-3xl text-[#0A1628] tracking-tight">
                    {pkg.priceActual}
                  </span>
                  <span className="text-[13px] text-slate-400 line-through">
                    {pkg.priceCrossed}
                  </span>
                </div>

                {/* Save Pill */}
                <div className="inline-flex text-[#00B4A6] font-body text-[10.5px] font-semibold mb-6 select-none bg-[#00B4A6]/5 px-2.5 py-0.5 rounded-md">
                  {pkg.saveText}
                </div>

                {/* Test bullet points */}
                <ul className="flex flex-col mb-8 list-none text-[#475569] text-left">
                  {pkg.tests.map((test, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2.5 text-[12.5px] font-body py-2 border-b border-slate-100 last:border-b-0"
                    >
                      <Check size={13} className="text-[#00B4A6] flex-shrink-0" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Button */}
              <a 
                href={`https://wa.me/918777578862?text=${encodeURIComponent(pkg.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-[13px] font-body font-semibold flex items-center justify-center gap-1 transition-all duration-300 border ${
                  pkg.popular 
                    ? 'bg-[#0A1628] border-[#0A1628] text-white hover:bg-slate-800 hover:border-slate-800 shadow-[0_4px_12px_rgba(10,22,40,0.15)]'
                    : 'bg-white border-slate-200 text-[#0A1628] hover:bg-slate-50'
                }`}
              >
                <span>Book Now</span>
                <span className="text-base font-normal">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
