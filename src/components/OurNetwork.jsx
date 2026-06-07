import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Microscope, Award } from 'lucide-react';

const networkLabs = [
  {
    name: 'Forthlines Diagnostics',
    badge: 'Primary Lab',
    badgeColor: 'bg-[#00B4A6]/10 text-[#00B4A6]',
    location: 'Patuli, Kolkata',
    differentiator: 'State-of-the-art diagnostics, home collection, same-day reports.',
    icon: <Microscope className="w-5 h-5 text-[#00B4A6]" />,
    isMain: true,
    link: '#home'
  },
  {
    name: 'Agilus Diagnostics',
    badge: 'Franchise Partner',
    badgeColor: 'bg-red-50 text-[#B91C1C] border border-red-100',
    location: 'Garia, Kolkata',
    differentiator: 'Accredited chain (CAP, ISO certified), affordable pricing, formerly SRL Diagnostics.',
    icon: <ShieldCheck className="w-5 h-5 text-[#B91C1C]" />,
    isMain: false,
    link: '/agilus'
  },
  {
    name: 'Metropolis Healthcare',
    badge: 'Franchise Partner',
    badgeColor: 'bg-purple-50 text-[#7C3AED] border border-purple-100',
    location: 'Garia, Kolkata',
    differentiator: 'NABL accredited, national brand trust, comprehensive test menu.',
    icon: <Award className="w-5 h-5 text-[#7C3AED]" />,
    isMain: false,
    link: '/metropolis'
  }
];

export default function OurNetwork() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="our-network" 
      className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="network-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16 text-left">
          <div className="lg:col-span-7 select-none">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3 block">
              OUR DIAGNOSTIC NETWORK
            </span>
            <h2 id="network-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
              Expanding care, <br />
              closer to you.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed">
              Forthlines Diagnostics extends its footprint across South Kolkata. Visit our primary centre in Patuli or access our partner franchise locations in Garia for quality diagnostics.
            </p>
          </div>
        </div>

        {/* Network Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {networkLabs.map((lab, idx) => (
            <article 
              key={idx} 
              className={`package-card relative bg-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 select-none border border-slate-200/80 hover:border-[#00B4A6]/45 hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-body text-[10px] font-bold tracking-[1px] uppercase py-1 px-3 rounded-full ${lab.badgeColor}`}>
                    {lab.badge}
                  </span>
                  <div className="flex-shrink-0">
                    {lab.icon}
                  </div>
                </div>

                {/* Lab Name */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0A1628] mb-3 text-left">
                  {lab.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-500 mb-4 text-left">
                  <MapPin size={14} className="text-[#00B4A6] flex-shrink-0" />
                  <span className="font-body text-[13px] font-medium">{lab.location}</span>
                </div>

                {/* Description */}
                <p className="font-body text-[13.5px] text-slate-500 leading-relaxed mb-6 text-left">
                  {lab.differentiator}
                </p>
              </div>

              {/* Action Button */}
              {lab.isMain ? (
                <a 
                  href={lab.link}
                  onClick={handleScrollToTop}
                  className="w-full py-3 rounded-full text-[13px] font-body font-semibold flex items-center justify-center gap-1 transition-all duration-300 border bg-[#00B4A6]/5 border-[#00B4A6]/20 text-[#00B4A6] hover:bg-[#00B4A6]/10"
                >
                  <span>Primary Location (Active)</span>
                </a>
              ) : (
                <Link 
                  to={lab.link}
                  className="w-full py-3 rounded-full text-[13px] font-body font-semibold flex items-center justify-center gap-1 transition-all duration-300 border bg-white border-slate-200 text-[#0A1628] hover:bg-slate-50"
                >
                  <span>View Details</span>
                  <span className="text-base font-normal">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
