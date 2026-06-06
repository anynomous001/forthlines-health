import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Droplet, 
  Activity, 
  FileCheck, 
  Check,
  Info
} from 'lucide-react';

const steps = [
  { id: 0, label: 'Booked', icon: ClipboardCheck },
  { id: 1, label: 'Sample Collected', icon: Droplet },
  { id: 2, label: 'Processing', icon: Activity },
  { id: 3, label: 'Report Ready', icon: FileCheck }
];

export default function ReportTracker() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [currentStep, setCurrentStep] = useState(-1); // -1 = not started

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setMobileNumber(value);
      setError(false);
    }
  };

  const handleTrack = () => {
    if (mobileNumber.length < 10) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setError(false);
    
    // Generate pseudo-random code
    const lastDigits = mobileNumber.slice(-4);
    const ref = (parseInt(lastDigits, 10) * 7) % 9999 + 1000;
    setRefCode(String(ref).padStart(4, '0'));

    // Animate step loading
    setCurrentStep(0);
    setTimeout(() => {
      setCurrentStep(1);
      setTimeout(() => {
        setCurrentStep(2); // Keep processing as the active, pulsing step
      }, 450);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleTrack();
  };

  return (
    <section 
      id="report-tracker" 
      className="bg-white py-24 border-t border-slate-100"
      aria-labelledby="tracker-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 fade-in-target">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold text-[#00B4A6] mb-3">
            REPORT STATUS
          </span>
          <h2 id="tracker-heading" className="font-display font-semibold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Track Your <span className="italic font-normal text-[#00B4A6]">Report</span>
          </h2>
          <p className="font-body text-[14px] text-[#475569] max-w-md mt-4 leading-relaxed">
            Enter your registered mobile number to check report status
          </p>
        </div>

        {/* Input widget */}
        <div className="bg-[#F8FAFC] border border-slate-200/60 p-8 rounded-2xl mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="tel"
              value={mobileNumber}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              maxLength="10"
              inputMode="numeric"
              placeholder="Enter mobile number"
              className={`flex-1 bg-white border ${
                error ? 'border-[#EF4444]' : 'border-slate-200'
              } text-[#0F172A] font-body text-sm px-6 py-3.5 rounded-lg focus:outline-none focus:border-[#00B4A6] focus:ring-1 focus:ring-[#00B4A6] transition-all`}
              aria-label="Enter your mobile number"
            />
            <button
              onClick={handleTrack}
              className="bg-[#00B4A6] text-white font-body font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-[#00d4c4] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Track Status
            </button>
          </div>

          {/* Stepper display */}
          {currentStep >= 0 && (
            <div className="pt-6 border-t border-slate-200">
              
              <div className="font-body text-[11px] font-semibold tracking-[1px] uppercase text-[#475569] text-center mb-10">
                Sample Ref #FD-2026-{refCode || '----'}
              </div>

              {/* Stepper Steps */}
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 relative select-none">
                
                {/* Connecting lines desktop */}
                <div className="hidden sm:block absolute top-[18px] left-[12%] right-[12%] h-[2px] bg-slate-200 -z-0"></div>

                {steps.map((step) => {
                  const Icon = step.icon;
                  const isDone = currentStep > step.id;
                  const isActive = currentStep === step.id;
                  
                  return (
                    <div 
                      key={step.id}
                      className="flex-1 flex flex-col items-center text-center relative z-10 w-full"
                    >
                      {/* Connector Line overlay for done items */}
                      {step.id > 0 && isDone && (
                        <div className="hidden sm:block absolute top-[18px] right-[50%] left-[-50%] h-[2px] bg-[#00B4A6] -z-10"></div>
                      )}

                      {/* Icon bubble */}
                      <div 
                        className={`w-9.5 h-9.5 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          isDone 
                            ? 'bg-[#00B4A6] border-[#00B4A6] text-white' 
                            : isActive 
                            ? 'bg-transparent border-[#00B4A6] text-[#00B4A6] shadow-[0_0_12px_rgba(0,180,166,0.2)] animate-status-pulse' 
                            : 'bg-white border-slate-200 text-slate-300'
                        }`}
                      >
                        {isDone ? (
                          <Check size={14} strokeWidth={3} />
                        ) : (
                          <Icon size={14} />
                        )}
                      </div>

                      <span 
                        className={`font-body text-[12px] font-semibold mt-3 ${
                          isDone || isActive ? 'text-[#00B4A6]' : 'text-slate-400'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>

        {/* Info text */}
        <div className="flex items-center gap-2 justify-center font-body text-[12px] text-[#475569]/60">
          <Info size={14} className="text-[#475569]/50" />
          <span>
            {currentStep >= 0 
              ? 'Your report is currently processing in the lab. Expected turnaround: 4 hours.'
              : 'Available after booking. Reports ready within 4–6 hours of collection.'
            }
          </span>
        </div>

      </div>
    </section>
  );
}
