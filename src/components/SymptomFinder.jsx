import React, { useState } from 'react';
import { 
  BatteryLow, 
  Heart, 
  Thermometer, 
  TrendingUp, 
  Bone, 
  Droplet,
  MessageCircle
} from 'lucide-react';

const symptomData = {
  'fatigue': {
    label: 'RECOMMENDED TESTS FOR: Fatigue',
    tests: ['CBC', 'Thyroid Profile (TSH T3 T4)', 'Vitamin B12', 'Iron Studies', 'Vitamin D', 'Blood Sugar'],
    note: 'Fatigue can be caused by anemia, thyroid issues, or nutritional deficiencies. These tests cover the most common root causes.'
  },
  'chest-pain': {
    label: 'RECOMMENDED TESTS FOR: Chest Pain',
    tests: ['ECG', 'Lipid Profile', 'CRP', 'Troponin I', 'CBC'],
    note: 'Chest pain is a critical symptom. These cardiac-related blood tests and ECG monitor risk factors.'
  },
  'fever': {
    label: 'RECOMMENDED TESTS FOR: Fever',
    tests: ['CBC with Differential', 'Malaria Antigen', 'Dengue NS1', 'Typhoid Widal', 'Blood Culture', 'CRP'],
    note: 'For ongoing fever, these tests scan for common bacterial and viral infectious profiles.'
  },
  'weight-gain': {
    label: 'RECOMMENDED TESTS FOR: Unexplained Weight Gain',
    tests: ['Thyroid Profile', 'Fasting Insulin', 'HbA1c', 'Lipid Profile', 'Cortisol', 'CBC'],
    note: 'Unexplained weight gain is often linked to metabolic rates, insulin resistance, or thyroid function.'
  },
  'joint-pain': {
    label: 'RECOMMENDED TESTS FOR: Joint Pain',
    tests: ['Uric Acid', 'Rheumatoid Factor', 'Anti-CCP', 'ESR', 'CRP', 'Vitamin D'],
    note: 'Joint pain tests scan for inflammatory indicators, arthritis profiles, and bone density factors.'
  },
  'frequent-urination': {
    label: 'RECOMMENDED TESTS FOR: Frequent Urination',
    tests: ['Urine Routine', 'Urine Culture', 'Blood Sugar Fasting & PP', 'HbA1c', 'KFT'],
    note: 'Frequent urination commonly maps to urinary tract infections (UTI) or blood sugar indicators.'
  }
};

const symptoms = [
  { id: 'fatigue', label: 'Fatigue', icon: BatteryLow },
  { id: 'chest-pain', label: 'Chest Pain', icon: Heart },
  { id: 'fever', label: 'Fever', icon: Thermometer },
  { id: 'weight-gain', label: 'Weight Gain', icon: TrendingUp },
  { id: 'joint-pain', label: 'Joint Pain', icon: Bone },
  { id: 'frequent-urination', label: 'Frequent Urination', icon: Droplet }
];

export default function SymptomFinder() {
  const [activeSymptom, setActiveSymptom] = useState(null);

  const handleSymptomClick = (symptomId) => {
    setActiveSymptom(activeSymptom === symptomId ? null : symptomId);
  };

  const selectedData = activeSymptom ? symptomData[activeSymptom] : null;
  const testListStr = selectedData ? selectedData.tests.join(', ') : '';
  const waUrl = selectedData 
    ? `https://wa.me/918777578862?text=Hi%2C%20I%20need%20to%20book%20the%20following%20tests%20for%20${activeSymptom}%3A%20${encodeURIComponent(testListStr)}`
    : 'https://wa.me/918777578862';

  return (
    <section 
      id="test-finder" 
      className="bg-white py-24 border-t border-slate-100"
      aria-labelledby="finder-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Bold typographic moment */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            SMART TEST FINDER
          </span>
          <h2 id="finder-heading" className="font-display font-semibold text-3xl sm:text-5xl text-[#0F172A] tracking-tight leading-none mb-6">
            Not sure which <span className="italic font-normal text-[#00B4A6]">test</span> you need?
          </h2>
          <p className="font-body text-[15px] text-[#475569] max-w-xl leading-relaxed">
            Select your symptom below — we'll tell you which tests are right for you.
          </p>
        </div>

        {/* Symptoms pills row */}
        <div className="flex flex-wrap gap-3.5 justify-center mb-12">
          {symptoms.map((symptom) => {
            const Icon = symptom.icon;
            const isActive = activeSymptom === symptom.id;
            return (
              <button
                key={symptom.id}
                onClick={() => handleSymptomClick(symptom.id)}
                className={`inline-flex items-center gap-2.5 font-body text-[13px] px-6 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'border-[#00B4A6] bg-[#00B4A6]/10 text-[#00B4A6] scale-[1.02] shadow-[0_4px_20px_rgba(0,180,166,0.1)]' 
                    : 'border-slate-200 text-[#475569] bg-transparent hover:border-[#00B4A6]/60 hover:text-[#00B4A6]'
                }`}
                aria-pressed={isActive}
              >
                <Icon size={16} className={isActive ? 'text-[#00B4A6]' : 'text-slate-400'} />
                {symptom.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic results panel */}
        <div className="min-h-[140px] relative">
          {!activeSymptom ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-slate-300 border border-dashed border-slate-200 rounded-2xl">
              <i className="ti ti-pointer text-2xl mb-2 text-slate-300"></i>
              <p className="font-body text-[14px]">Select a symptom above to find recommended tests</p>
            </div>
          ) : (
            selectedData && (
              <div 
                className="bg-[#00B4A6]/[0.02] border border-[#00B4A6]/20 p-8 rounded-2xl animate-fade-in-target duration-300 shadow-[0_10px_30px_rgba(0,180,166,0.02)]"
                style={{ animation: 'fadeInUp 0.4s ease forwards' }}
              >
                <div className="text-[10px] tracking-[2px] font-semibold text-[#00B4A6] uppercase mb-4">
                  {selectedData.label}
                </div>

                {/* Tests tags chips */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {selectedData.tests.map((test, index) => (
                    <span 
                      key={index}
                      className="font-body font-medium text-[12px] border border-[#00B4A6]/15 bg-[#00B4A6]/5 text-[#0F172A] px-4 py-1.5 rounded-full"
                    >
                      {test}
                    </span>
                  ))}
                </div>

                <p className="font-body text-[13.5px] text-[#475569] leading-relaxed mb-6">
                  {selectedData.note}
                </p>

                {/* WhatsApp booking CTA */}
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BE5A] text-white font-body font-semibold text-[13.5px] px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all hover:-translate-y-0.5 duration-300"
                >
                  <MessageCircle size={16} />
                  Book these tests → +91 87775 78862
                </a>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
