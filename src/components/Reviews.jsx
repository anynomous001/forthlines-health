import React from 'react';
import { Star } from 'lucide-react';

const reviewsList = [
  {
    author: 'Sudipta M.',
    text: '"Very professional staff and reports came on time. The technician was polite and hygienic. Highly recommend."'
  },
  {
    author: 'Rahul B.',
    text: '"Best diagnostic centre in Patuli. Fair prices and excellent service quality. Got my full body report the same afternoon."'
  },
  {
    author: 'Priya D.',
    text: '"Home collection is very convenient. Technician arrived on time and handled everything hygienically. Report on WhatsApp within hours."'
  }
];

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="bg-[#F8FAFC] py-24 border-t border-slate-100 relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#00B4A6]/5 to-transparent blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            PATIENT STORIES
          </span>
          <h2 id="reviews-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            What our patients say
          </h2>
          <div className="h-[2px] bg-[#00B4A6] w-12 mt-4 rounded"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviewsList.map((review, idx) => (
            <article 
              key={idx} 
              className="bg-white border border-slate-200/80 hover:border-[#00B4A6]/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.03)] relative"
            >
              <div>
                {/* 5 gold stars */}
                <div className="flex gap-1 mb-5" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>

                <p className="font-display italic text-[15px] text-[#0F172A] leading-relaxed mb-6 font-medium">
                  {review.text}
                </p>
              </div>

              {/* Author row */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#00B4A6] text-white font-display font-bold text-[14px] flex items-center justify-center">
                  {review.author[0]}
                </div>
                <div>
                  <div className="font-body font-semibold text-[13px] text-[#0F172A]">
                    {review.author}
                  </div>
                  <div className="font-body text-[11px] text-[#475569]">
                    Google Review
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col items-center text-center pt-8 border-t border-slate-200">
          <div className="inline-flex items-center justify-center bg-white border border-slate-250 text-[#0F172A] font-display font-bold text-5xl md:text-6xl px-8 py-3 rounded-full mb-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] leading-none select-none">
            4.9
          </div>
          
          <div className="flex gap-1 mb-2">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />
            ))}
            {/* Half Star */}
            <div className="relative overflow-hidden w-[18px] h-[18px]">
              <Star size={18} color="#94A3B8" className="absolute top-0 left-0" />
              <div className="w-1/2 overflow-hidden absolute top-0 left-0 h-full">
                <Star size={18} fill="#FBBF24" color="#FBBF24" />
              </div>
            </div>
          </div>

          <p className="font-body text-[13px] text-[#475569] font-medium tracking-[0.5px]">
            Based on 31 Google reviews · Patuli, Kolkata
          </p>
        </div>

      </div>
    </section>
  );
}
