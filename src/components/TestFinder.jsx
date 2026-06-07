import { useState } from 'react';

const symptomData = {
  'fatigue': {
    label: 'RECOMMENDED TESTS FOR: Fatigue',
    tests: ['CBC (Complete Blood Count)', 'Thyroid Profile (TSH, T3, T4)', 'Vitamin B12', 'Iron Studies (Serum Ferritin)', 'Vitamin D3', 'Blood Sugar (Fasting)'],
    note: 'Fatigue can be caused by anaemia, thyroid disorders, nutritional deficiencies, or blood sugar imbalances. These tests cover the most common causes.'
  },
  'chest-pain': {
    label: 'RECOMMENDED TESTS FOR: Chest Pain',
    tests: ['ECG (Resting)', 'Lipid Profile', 'CRP (C-Reactive Protein)', 'Troponin I', 'CBC', 'Blood Sugar'],
    note: 'Chest pain can indicate cardiac issues. We strongly recommend consulting a doctor alongside getting these tests done.'
  },
  'fever': {
    label: 'RECOMMENDED TESTS FOR: Fever',
    tests: ['CBC (with Differential)', 'Malaria Antigen Test', 'Dengue NS1 + IgM/IgG', 'Typhoid (Widal Test)', 'Urine Routine & Culture', 'CRP'],
    note: 'Persistent fever (>3 days) requires investigation. These tests help identify the most common infectious causes in Kolkata.'
  },
  'weight-gain': {
    label: 'RECOMMENDED TESTS FOR: Unexplained Weight Gain',
    tests: ['Thyroid Profile (TSH, T3, T4)', 'Fasting Insulin', 'Blood Sugar (HbA1c)', 'Cortisol (Morning)', 'Lipid Profile', 'LFT (Liver Function)'],
    note: 'Unexplained weight gain is often linked to thyroid dysfunction, insulin resistance, or hormonal imbalances.'
  },
  'joint-pain': {
    label: 'RECOMMENDED TESTS FOR: Joint Pain',
    tests: ['RA Factor (Rheumatoid)', 'Anti-CCP Antibodies', 'Uric Acid', 'ESR & CRP', 'CBC', 'Vitamin D3'],
    note: 'Joint pain may be due to rheumatoid arthritis, gout, or vitamin deficiencies. These tests help pinpoint the cause.'
  },
  'frequent-urination': {
    label: 'RECOMMENDED TESTS FOR: Frequent Urination',
    tests: ['Blood Sugar (Fasting + Post Meal)', 'HbA1c', 'Urine Routine & Microscopy', 'Urine Culture & Sensitivity', 'KFT (Kidney Function)', 'PSA (for men above 40)'],
    note: 'Frequent urination can signal diabetes, urinary tract infection, or kidney issues. Early detection leads to better outcomes.'
  }
};

const symptoms = [
  { id: 'fatigue', label: 'Fatigue', icon: 'ti-battery-low' },
  { id: 'chest-pain', label: 'Chest Pain', icon: 'ti-heart' },
  { id: 'fever', label: 'Fever', icon: 'ti-thermometer' },
  { id: 'weight-gain', label: 'Weight Gain', icon: 'ti-scale' },
  { id: 'joint-pain', label: 'Joint Pain', icon: 'ti-bone' },
  { id: 'frequent-urination', label: 'Frequent Urination', icon: 'ti-droplet' }
];

export default function TestFinder() {
  const [activeSymptom, setActiveSymptom] = useState(null);

  const handleSymptomClick = (symptomId) => {
    if (activeSymptom === symptomId) {
      setActiveSymptom(null);
    } else {
      setActiveSymptom(symptomId);
    }
  };

  const selectedData = activeSymptom ? symptomData[activeSymptom] : null;
  const testListStr = selectedData ? selectedData.tests.join(', ') : '';
  const waUrl = selectedData 
    ? `https://wa.me/919800000000?text=Hi%2C%20I%20need%20the%20following%20tests%20at%20Forthlines%20Diagnostics%3A%20${encodeURIComponent(testListStr)}`
    : 'https://wa.me/919800000000';

  return (
    <section id="test-finder" aria-labelledby="finder-heading">
      <div className="container">
        <div className="finder-wrapper">
          <div className="finder-header">
            <div className="section-label center" style={{ color: 'var(--teal)' }}>Smart Test Finder</div>
            <h2 className="section-title" id="finder-heading">Not sure which test you need?</h2>
            <p className="section-subtitle center">
              Select your symptom and we'll suggest the right tests for you.
            </p>
          </div>

          <div className="symptom-buttons" role="group" aria-label="Select a symptom">
            {symptoms.map((symptom) => (
              <button
                key={symptom.id}
                className={`symptom-btn ${activeSymptom === symptom.id ? 'active' : ''}`}
                onClick={() => handleSymptomClick(symptom.id)}
                aria-pressed={activeSymptom === symptom.id}
              >
                <i className={`ti ${symptom.icon}`}></i> {symptom.label}
              </button>
            ))}
          </div>

          <div className="finder-results" id="finderResults" role="region" aria-live="polite" aria-label="Recommended tests">
            {!activeSymptom && (
              <div className="finder-placeholder" id="finderPlaceholder">
                <i className="ti ti-pointer" style={{ fontSize: '20px' }}></i>
                Select a symptom above to see recommended tests
              </div>
            )}
            
            {activeSymptom && selectedData && (
              <div className="finder-results-inner visible" id="finderResultsInner">
                <p className="result-label" id="resultLabel">{selectedData.label}</p>
                <div className="result-tests" id="resultTests">
                  {selectedData.tests.map((test, index) => (
                    <span key={index} className="result-test-tag">{test}</span>
                  ))}
                </div>
                <p className="result-note" id="resultNote">{selectedData.note}</p>
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="finder-wa-btn"
                  style={{ display: 'inline-flex' }}
                >
                  <i className="ti ti-brand-whatsapp"></i>
                  Book these tests on WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
