import { Award, BookOpen, HeartHandshake, MapPin } from 'lucide-react';

export default function AboutDoctor() {
  return (
    <section 
      id="about-doctor" 
      className="bg-white py-16 lg:py-24 border-t border-slate-100 relative overflow-hidden"
      aria-labelledby="about-doctor-heading"
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-[0.06] -z-10"
        style={{
          background: 'radial-gradient(circle, #00B4A6 0%, #3B82F6 100%)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (5/12 cols) - The Authentic Clinic Photo */}
          <div className="lg:col-span-5 w-full flex justify-center select-none fade-in-target">
            <div className="w-full max-w-[400px] bg-[#F8FAFC] border border-slate-200/80 p-4.5 rounded-3xl shadow-[0_12px_40px_rgba(15,23,42,0.03)] flex flex-col items-center">
              
              {/* Photo Frame */}
              <div className="w-full h-[320px] sm:h-[460px] overflow-hidden rounded-2xl relative border border-slate-200/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                <img 
                  src="/dr-biswas-clinic.png" 
                  alt="Dr Subhrajyoti Biswas in clinic at Pan Bazaar, Guwahati" 
                  className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"></div>
                
                {/* Photo Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
                  <MapPin size={13} className="text-[#00B4A6] flex-shrink-0" />
                  <span className="font-body text-[11px] font-semibold text-[#0A1628] leading-none text-left">
                    At Pan Bazaar Clinic, Guwahati
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7/12 cols) - Doctor Biography & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left fade-in-target">
            <span className="inline-block text-[10px] uppercase tracking-[1.5px] font-bold text-[#00B4A6] border border-[#00B4A6]/20 bg-[#00B4A6]/5 px-3.5 py-1.5 rounded-full mb-6 select-none">
              MEET THE AYURVEDACHARYA
            </span>
            
            <h2 id="about-doctor-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] tracking-tight leading-[1.2] mb-6">
              Empowering your health through <br className="hidden sm:block" />
              <span className="text-[#00B4A6]">traditional Ayurvedic wisdom.</span>
            </h2>

            <h3 className="font-body font-bold text-xl text-[#0A1628] mb-4">
              Dr Subhrajyoti Biswas <span className="font-medium text-[14.5px] text-[#475569] block sm:inline sm:ml-2">(Ayurvedacharya)</span>
            </h3>

            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed mb-8 max-w-2xl">
              Dr Subhrajyoti Biswas is a certified Ayurvedic practitioner with a deep passion for holistic, root-cause healing. Located in the heart of Pan Bazaar, Guwahati, his clinic serves as a trusted local space for natural healthcare solutions.
              By applying traditional pulse diagnosis (Nadi Pariksha) alongside time-tested herbal treatments, Dr Biswas provides highly personalized consultation and care programs tailored to individual health constitutions (Prakriti).
            </p>

            {/* Grid of Key Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-8">
              
              {/* Strength 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-body font-bold text-[14px] text-[#0A1628] mb-1">
                    Certified Ayurvedacharya
                  </h4>
                  <p className="font-body text-[12px] text-[#475569] leading-relaxed">
                    Formally trained and certified in classical Ayurvedic medicine systems.
                  </p>
                </div>
              </div>

              {/* Strength 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-body font-bold text-[14px] text-[#0A1628] mb-1">
                    Authentic Nadi Pariksha
                  </h4>
                  <p className="font-body text-[12px] text-[#475569] leading-relaxed">
                    Specialized in traditional radial pulse reading to detect root imbalances.
                  </p>
                </div>
              </div>

              {/* Strength 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h4 className="font-body font-bold text-[14px] text-[#0A1628] mb-1">
                    Patient-First Approach
                  </h4>
                  <p className="font-body text-[12px] text-[#475569] leading-relaxed">
                    Highly rated (4.9★) locally for detailed explanations and friendly care.
                  </p>
                </div>
              </div>

              {/* Strength 4 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#00B4A6]/10 text-[#00B4A6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-body font-bold text-[14px] text-[#0A1628] mb-1">
                    Guwahati Centered Care
                  </h4>
                  <p className="font-body text-[12px] text-[#475569] leading-relaxed">
                    Easily accessible clinic located on Motilal Nehru Road in Pan Bazaar.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full border-t border-slate-100 pt-7">
              <a 
                href="https://wa.me/918638707818?text=Hi%2C%20I%20want%20to%20book%20an%20Ayurvedic%20consultation%20with%20Dr%20Subhrajyoti%20Biswas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#0A1628] hover:bg-slate-800 text-white font-body font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(10,22,40,0.15)]"
              >
                Discuss Your Imbalances
                <span className="text-base font-normal ml-0.5">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
