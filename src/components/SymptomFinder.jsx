import { useState } from 'react';
import { 
  BatteryLow, 
  Heart, 
  TrendingUp, 
  Bone, 
  Droplet,
  CheckCircle2,
  FlaskConical
} from 'lucide-react';

const symptomData = {
  'fatigue': {
    title: 'Chronic Fatigue & Weakness',
    tests: ['Personalized Consultation', 'Rasayana Rejuvenation', 'Panchakarma Detox', 'Herbal Tonics']
  },
  'chest-pain': {
    title: 'Digestive Issues / IBS',
    tests: ['Deepa-Pachana (Herbal Decoctions)', 'Prakriti Analysis', 'Dietary Counseling', 'Abhyanga Massage']
  },
  'fever': {
    title: 'Stress & Anxiety',
    tests: ['Shirodhara Therapy', 'Nasyam Treatment', 'Ashwagandha Formulas', 'Yogic Breathing Guidance']
  },
  'weight-gain': {
    title: 'Weight Management',
    tests: ['Udvartana (Herbal Scrub)', 'Panchakarma Detox', 'Metabolic Herbs', 'Dietary Plan']
  },
  'joint-pain': {
    title: 'Joint & Arthritis Pain',
    tests: ['Janu/Kati Basti', 'Snehan-Swedan (Oiling & Steam)', 'Anti-inflammatory Herbs', 'Ayurvedic Massage']
  },
  'frequent-urination': {
    title: 'Skin Issues (Eczema, Psoriasis)',
    tests: ['Raktashodhana (Blood Purifier)', 'Panchakarma Detox', 'Herbal Lepas (Ointments)', 'Dietary Changes']
  }
};

const symptoms = [
  { id: 'fatigue', label: 'Fatigue', icon: BatteryLow },
  { id: 'chest-pain', label: 'Indigestion', icon: FlaskConical },
  { id: 'fever', label: 'Stress & Anxiety', icon: Heart },
  { id: 'weight-gain', label: 'Weight Gain', icon: TrendingUp },
  { id: 'joint-pain', label: 'Joint Pain', icon: Bone },
  { id: 'frequent-urination', label: 'Skin Conditions', icon: Droplet }
];

export default function SymptomFinder() {
  const [activeSymptom, setActiveSymptom] = useState('fever'); // Default to fever (Stress & Anxiety) to showcase the layout

  const handleSymptomClick = (symptomId) => {
    setActiveSymptom(activeSymptom === symptomId ? null : symptomId);
  };

  const selectedData = activeSymptom ? symptomData[activeSymptom] : null;
  const activeSymptomObj = symptoms.find(s => s.id === activeSymptom);
  const ActiveIcon = activeSymptomObj ? activeSymptomObj.icon : null;

  const testListStr = selectedData ? selectedData.tests.join(', ') : '';
  const waUrl = selectedData 
    ? `https://wa.me/918638707818?text=Hi%2C%20I%20need%20to%20consult%20Dr%20Subhrajyoti%20Biswas%20about%20${encodeURIComponent(selectedData.title)}%20and%20discuss%20therapies%3A%20${encodeURIComponent(testListStr)}`
    : 'https://wa.me/918638707818';

  return (
    <section 
      id="test-finder" 
      className="bg-white py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="finder-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (40% width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-block text-[10px] uppercase tracking-[1.5px] font-bold text-[#00B4A6] border border-[#00B4A6]/20 bg-[#00B4A6]/5 px-3.5 py-1.5 rounded-full mb-6 select-none">
              SMART SYMPTOM GUIDE
            </span>
            
            <h2 id="finder-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0A1628] tracking-tight leading-none mb-6">
              Not sure which treatment you need?
            </h2>
            
            <p className="font-body text-[14.5px] text-[#475569] leading-relaxed mb-8 max-w-md">
              Tap a symptom and we'll suggest the most relevant Ayurvedic treatments and consultations. Book your consultation on WhatsApp in a single click.
            </p>

            {/* Disclaimer Card */}
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 w-full max-w-md">
              <div className="font-body text-[9px] font-bold uppercase tracking-[1px] text-slate-400 mb-2">
                DISCLAIMER
              </div>
              <p className="font-body text-[12.5px] text-[#475569] leading-relaxed">
                Suggestions are indicative and based on common Ayurvedic protocols. Please consult Dr Subhrajyoti Biswas (Ayurvedacharya) for a complete Nadi Pariksha and personalized prescription.
              </p>
            </div>
          </div>

          {/* Right Column (60% width) */}
          <div className="lg:col-span-7 flex flex-col items-stretch">
            
            {/* Symptom pills buttons wrapper */}
            <div className="flex flex-wrap gap-3 mb-8 justify-start">
              {symptoms.map((symptom) => {
                const Icon = symptom.icon;
                const isActive = activeSymptom === symptom.id;
                return (
                  <button
                    key={symptom.id}
                    onClick={() => handleSymptomClick(symptom.id)}
                    className={`inline-flex items-center gap-2.5 font-body text-[13px] px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'border-[#00B4A6] bg-[#0A1628] text-white shadow-[0_0_0_3px_rgba(0,180,166,0.25)]' 
                        : 'border-slate-200 text-[#475569] bg-white hover:border-[#00B4A6]/60 hover:text-[#000]'
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon size={14} className={isActive ? 'text-[#00B4A6]' : 'text-slate-400'} />
                    {symptom.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Result Panel Box */}
            <div className="min-h-[260px] relative">
              {!activeSymptom ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-slate-300 border border-dashed border-slate-200 rounded-3xl bg-[#F8FAFC]/50">
                  <p className="font-body text-[14px] text-slate-400">Select a symptom above to find recommended treatments</p>
                </div>
              ) : (
                selectedData && (
                  <div 
                    className="bg-white border border-slate-200/80 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] text-left"
                    style={{ animation: 'fadeInUp 0.4s ease forwards' }}
                  >
                    
                    {/* Panel Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="text-[10px] tracking-[1.5px] font-bold text-slate-400 uppercase mb-1">
                          RECOMMENDED THERAPIES FOR
                        </div>
                        <h3 className="font-display font-semibold text-2xl text-[#0A1628]">
                          {selectedData.title}
                        </h3>
                      </div>
                      
                      {/* Active symptom icon bubble */}
                      {ActiveIcon && (
                        <div className="w-11 h-11 bg-[#0A1628] text-[#00B4A6] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(10,22,40,0.15)] select-none">
                          <ActiveIcon size={18} />
                        </div>
                      )}
                    </div>

                    {/* Grid of tests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {selectedData.tests.map((test, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200/50 px-4 py-3.5 rounded-xl text-left"
                        >
                          <CheckCircle2 size={16} className="text-[#00B4A6] flex-shrink-0" />
                          <span className="font-body text-[13px] font-medium text-[#0A1628] tracking-tight">
                            {test}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* WhatsApp booking CTA button */}
                    <a 
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-[#00B4A6] hover:bg-[#00a396] text-white font-body font-semibold text-[13px] sm:text-[13.5px] px-5 sm:px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(0,180,166,0.2)] transition-all hover:-translate-y-0.5 duration-300"
                    >
                      {/* Custom WhatsApp Logo Path */}
                      <svg className="w-4 h-4 fill-current text-white flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.062.953 11.453.953c-5.41 0-9.82 4.367-9.824 9.8.002 2.032.547 4.022 1.585 5.769l-.957 3.497 3.6-.942zm11.55-7.793c-.3-.149-1.774-.863-2.048-.962-.274-.099-.473-.149-.672.15-.199.299-.77.962-.944 1.159-.174.199-.349.224-.649.075-.3-.15-1.267-.461-2.413-1.472-.892-.787-1.493-1.759-1.668-2.056-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.523-.075-.15-.672-1.597-.922-2.196-.244-.589-.493-.51-.672-.519-.174-.008-.373-.01-.573-.01-.199 0-.523.074-.797.373-.273.3-1.045 1.022-1.045 2.493 0 1.47 1.071 2.893 1.22 3.093.149.199 2.107 3.179 5.105 4.453.714.303 1.272.484 1.708.621.718.225 1.371.194 1.888.118.577-.085 1.774-.715 2.023-1.408.249-.693.249-1.288.174-1.408-.075-.12-.274-.199-.573-.348z" />
                      </svg>
                      <span className="sm:hidden">Discuss on WhatsApp</span>
                      <span className="hidden sm:inline">Discuss treatment on WhatsApp →</span>
                    </a>

                  </div>
                )
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
