import { 
  Droplet, 
  Microscope, 
  FlaskConical, 
  Scan, 
  HeartPulse, 
  Activity, 
  Home,
  Candy,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Droplet,
    name: 'Pulse Diagnosis (Nadi Pariksha)',
    desc: 'Traditional pulse reading to analyze body constitution (Prakriti) and deep-seated health issues.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: Microscope,
    name: 'Panchakarma Detox',
    desc: 'Deep body purification, toxin elimination, and restoration of bodily balance.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: Scan,
    name: 'Joint & Spine Care',
    desc: 'Specialized Ayurvedic therapies (Basti) for arthritis, chronic back pain, and spondylosis.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: HeartPulse,
    name: 'Stress & Anxiety Relief',
    desc: 'Shirodhara and specialized herbal oil therapies to calm the mind and restore sleep cycles.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: Candy,
    name: 'Chronic Disease Care',
    desc: 'Natural management pathways for diabetes, hypertension, and digestive issues.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: FlaskConical,
    name: 'Herbal Pharmacy',
    desc: 'Pure, authentic Ayurvedic formulations and customized herbal remedies.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: Activity,
    name: 'Rejuvenation (Rasayana)',
    desc: 'Therapies designed to boost immunity, reverse aging triggers, and optimize vitality.',
    image: '/ayurveda-clinic.png'
  },
  {
    icon: Home,
    name: 'Home Consultations',
    desc: 'Doctor home visits or online consultations for patients seeking care from home.',
    image: '/ayurveda-clinic.png'
  }
];

export default function Services() {
  // Combine services and insert marketing box structure at index 4 (5th card)
  const gridItems = [];
  services.forEach((service, index) => {
    if (index === 4) {
      gridItems.push({ isMarketing: true });
    }
    gridItems.push(service);
  });

  return (
    <section 
      id="services" 
      className="bg-white py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Two-column Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 text-left">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#00B4A6] mb-3 block">
              OUR SERVICES
            </span>
            <h2 id="services-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] leading-[1.2]">
              Comprehensive Ayurvedic therapies, <br className="hidden sm:block" />
              tailored for your health.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed">
              From traditional pulse diagnosis to customized detox therapies — authentic Ayurvedic healing by certified practitioners you can trust.
            </p>
          </div>
        </div>

        {/* Services Grid (3-column layout with reduced card sizes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-y-10 lg:gap-y-12">
          {gridItems.map((item, index) => {
            if (item.isMarketing) {
              return (
                <div 
                  key="marketing-hook"
                  className="flex flex-col items-center justify-center text-center p-6 sm:p-7 select-none min-h-[260px] h-full w-full sm:col-span-2 lg:col-span-1"
                >
                  <div className="flex flex-col items-center justify-center w-full max-w-[315px] mx-auto">
                    <span className="text-[11.5px] sm:text-[12.5px] uppercase tracking-[2.5px] font-bold text-[#00B4A6] mb-3.5 block">
                      DR. SUBHRAJYOTI BISWAS
                    </span>
                    <h3 className="font-display font-medium text-[23px] sm:text-[25px] text-[#0A1628] leading-tight mb-3.5">
                      Root-cause healing. <br />
                      Authentic therapies.
                    </h3>
                    <p className="font-body text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed mb-5.5">
                      Every diagnosis is backed by deep knowledge of classic Ayurvedic texts. Get personalized treatment plans and natural medicine advisory.
                    </p>
                    <a 
                      href="https://wa.me/918638707818?text=Hi%2C%20I%20want%20to%20book%20an%20Ayurvedic%20home%20consultation%20with%20Dr%20Subhrajyoti%20Biswas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14.5px] font-body font-semibold text-[#00B4A6] hover:text-[#00a396] transition-colors"
                    >
                      <span>Book a Home Consultation</span>
                      <span className="text-sm font-normal">→</span>
                    </a>
                  </div>
                </div>
              );
            }

            const Icon = item.icon;
            return (
              <article 
                key={index} 
                className="group flex flex-col bg-white border border-slate-200/80 hover:border-[#00B4A6]/40 rounded-[20px] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)] select-none"
              >
                {/* Card Top: Image with arrow icon overlay (height reduced to h-40) */}
                <div className="w-full h-40 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent"></div>
                  
                  {/* Diagonal Arrow in floating circular badge */}
                  <div className="absolute top-4 right-4 w-7.5 h-7.5 bg-white/90 backdrop-blur-sm text-slate-400 group-hover:text-[#00B4A6] flex items-center justify-center rounded-full shadow-sm transition-colors duration-300 z-10">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Card Bottom: Content with floating icon bubble (padding reduced to pt-8 px-6 pb-6) */}
                <div className="relative pt-8 px-6 pb-6 text-left flex-grow flex flex-col justify-between">
                  
                  {/* Floating Icon Bubble overlapping the image boundary (size reduced to w-10 h-10) */}
                  <div className="absolute -top-5 left-6 w-10 h-10 bg-white border border-slate-200/85 shadow-[0_4px_12px_rgba(15,23,42,0.04)] text-[#00B4A6] flex items-center justify-center rounded-full group-hover:bg-[#00B4A6] group-hover:text-white group-hover:border-[#00B4A6] transition-all duration-300 z-10">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-[#0A1628] text-[16.5px] mb-2 group-hover:text-[#00B4A6] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="font-body text-[13px] text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
