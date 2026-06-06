import React from 'react';
import { Check } from 'lucide-react';

const packageList = [
  {
    name: 'Basic Wellness',
    priceCrossed: '₹1,200',
    priceActual: '₹799',
    popular: false,
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Thyroid (TSH)',
      'Urine Routine Analysis'
    ],
    waMessage: 'Hi, I want to book the Basic Wellness Package (₹799) at Forthlines Diagnostics.'
  },
  {
    name: 'Full Body Checkup',
    priceCrossed: '₹2,500',
    priceActual: '₹1,499',
    popular: true,
    tests: [
      'CBC + LFT + KFT',
      'Lipid Profile',
      'Thyroid Profile (TSH)',
      'Blood Sugar + Urine',
      'Vitamin B12 & D3'
    ],
    waMessage: 'Hi, I want to book the Full Body Checkup Package (₹1,499) at Forthlines Diagnostics.'
  },
  {
    name: 'Diabetes Care',
    priceCrossed: '₹1,600',
    priceActual: '₹999',
    popular: false,
    tests: [
      'HbA1c',
      'Fasting Glucose',
      'Post-meal Glucose',
      'Insulin Level',
      'Urine Microalbumin'
    ],
    waMessage: 'Hi, I want to book the Diabetes Care Package (₹999) at Forthlines Diagnostics.'
  },
  {
    name: 'Cardiac Screen',
    priceCrossed: '₹2,000',
    priceActual: '₹1,299',
    popular: false,
    tests: [
      'Lipid Profile',
      'ECG (Resting)',
      'CRP (C-Reactive Protein)',
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
      className="bg-[#F8FAFC] py-24 border-t border-slate-100"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            HEALTH PACKAGES
          </span>
          <h2 id="packages-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Preventive Health Packages
          </h2>
          <div className="h-[2px] bg-[#00B4A6] w-12 mt-4 rounded"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packageList.map((pkg, idx) => (
            <article 
              key={idx} 
              className={`package-card relative bg-white rounded-[20px] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 select-none ${
                pkg.popular 
                  ? 'border border-[#00B4A6] shadow-[0_12px_36px_rgba(0,180,166,0.08)] ring-2 ring-[#00B4A6]/10' 
                  : 'border border-slate-200/80 hover:border-[#00B4A6]/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00B4A6] to-[#00d4c4] text-white font-body text-[10px] font-bold tracking-[1.5px] uppercase py-1 px-4 rounded-full whitespace-nowrap shadow-[0_4px_10px_rgba(0,180,166,0.2)]">
                  ⭐ Most Popular
                </div>
              )}

              <div>
                <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#00B4A6] mb-4">
                  {pkg.name}
                </div>

                <div className="flex items-baseline gap-2.5 mb-6">
                  <span className="font-display font-medium text-4xl text-[#0F172A] tracking-tight">
                    {pkg.priceActual}
                  </span>
                  <span className="text-[13px] text-slate-400 line-through">
                    {pkg.priceCrossed}
                  </span>
                </div>

                <ul className="flex flex-col mb-8 list-none text-[#475569]">
                  {pkg.tests.map((test, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2.5 text-[12px] font-body py-2.5 border-b border-slate-100 last:border-b-0"
                    >
                      <Check size={13} className="text-[#00B4A6] flex-shrink-0" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`https://wa.me/918777578862?text=${encodeURIComponent(pkg.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg text-[13px] font-body font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-[#00B4A6] text-white hover:bg-[#00d4c4] shadow-[0_4px_12px_rgba(0,180,166,0.15)]'
                    : 'bg-slate-50 border border-slate-200 text-[#00B4A6] hover:bg-[#00B4A6] hover:text-white'
                }`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
                </svg>
                Book Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
