import React from 'react';
import { Star } from 'lucide-react';

const reviewsList = [
  {
    author: 'Sudipta M.',
    avatarLetter: 'S',
    text: '"Very well experienced doctor. He have Deep rooted ayurveda knowledge. Highly recommended for chronic ailments."'
  },
  {
    author: 'Rahul B.',
    avatarLetter: 'R',
    text: '"Best Ayurvedic clinic in Guwahati. Dr Subhrajyoti Biswas explains the root cause very clearly and the natural medicines are highly effective."'
  },
  {
    author: 'Priya D.',
    avatarLetter: 'P',
    text: '"Traditional Nadi Pariksha consultation was extremely accurate. High customer satisfaction and very clean clinical setup in Pan Bazaar."'
  }
];

export default function Reviews() {
  return (
    <section 
      id="reviews" 
      className="bg-white py-16 lg:py-24 border-t border-slate-100 relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12 lg:mb-16 text-left">
          
          {/* Left Column Heading */}
          <div className="md:col-span-8">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3 block">
              PATIENT VOICES
            </span>
            <h2 id="reviews-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
              What our patients say.
            </h2>
          </div>

          {/* Right Column Google Rating Summary Badge */}
          <div className="md:col-span-4 flex md:justify-end">
            <div className="bg-white border border-slate-200/80 rounded-xl px-5 py-3 flex items-center gap-3.5 shadow-[0_4px_12px_rgba(15,23,42,0.02)] select-none">
              
              {/* Google Circular Icon */}
              <div className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center font-display font-bold text-[13px] text-[#475569]">
                G
              </div>

              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#FBBF24" color="#FBBF24" />
                  ))}
                  <span className="font-body font-bold text-[12px] text-[#0A1628] ml-1.5 leading-none">
                    4.9
                  </span>
                </div>
                <div className="font-body text-[10px] text-slate-400 font-semibold tracking-[0.2px]">
                  Average of 107 Google reviews
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((review, idx) => (
            <article 
              key={idx} 
              className="bg-white border border-slate-200/80 hover:border-[#00B4A6]/30 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(15,23,42,0.03)] relative overflow-hidden"
            >
              {/* Quote marks background decoration */}
              <div className="absolute top-4 sm:top-6 right-6 sm:right-8 font-display text-[#00B4A6]/8 text-[40px] sm:text-[48px] select-none pointer-events-none font-bold leading-none">
                99
              </div>

              <div className="text-left">
                {/* 5 gold stars */}
                <div className="flex gap-1 mb-5" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>

                <p className="font-display text-[15px] text-[#0A1628] leading-relaxed mb-8 font-semibold">
                  {review.text}
                </p>
              </div>

              {/* Author row */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-[#0A1628] text-white font-display font-bold text-[12px] flex items-center justify-center">
                  {review.avatarLetter}
                </div>
                <div>
                  <div className="font-body font-semibold text-[13px] text-[#0A1628]">
                    {review.author}
                  </div>
                  <div className="font-body text-[10.5px] text-slate-400 font-medium">
                    Verified Google review
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
