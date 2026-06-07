import React, { useState } from 'react';
import { 
  Search, 
  Info,
  Check,
  FlaskConical,
  Activity,
  FileCheck
} from 'lucide-react';

export default function ReportTracker() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [currentStep, setCurrentStep] = useState(-1); // -1 = awaiting input, 0 = sample collected, 1 = processing, 2 = report ready

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

    // Animate step progress vertically
    setCurrentStep(0); // Sample Collected
    setTimeout(() => {
      setCurrentStep(1); // Processing
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleTrack();
  };

  return (
    <section 
      id="report-tracker" 
      className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-slate-100"
      aria-labelledby="tracker-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Container Box */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-[0_15px_50px_rgba(15,23,42,0.03)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (45% width) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left select-none">
              
              {/* Badge */}
              <span className="inline-block text-[9px] uppercase tracking-[1.5px] font-bold text-white bg-[#0A1628] px-4 py-1.5 rounded-full mb-6">
                TRACK YOUR CONSULTATION STATUS
              </span>

              {/* Title */}
              <h2 id="tracker-heading" className="font-display font-semibold text-3xl sm:text-[40px] text-[#0A1628] tracking-tight leading-none mb-6">
                Where is my treatment plan?
              </h2>

              {/* Description */}
              <p className="font-body text-[14px] text-[#475569] leading-relaxed mb-8 max-w-sm">
                Enter the mobile number you booked with to see your live consultation status and treatment schedule.
              </p>

              {/* Form Input Row (Rounded-full as in screenshot) */}
              <div className="flex w-full items-center max-w-sm gap-2 bg-[#F8FAFC] border border-slate-200 rounded-full px-4 py-1.5 mb-6 focus-within:border-[#00B4A6] transition-all">
                <Search size={16} className="text-slate-400 flex-shrink-0" />
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  maxLength="10"
                  inputMode="numeric"
                  placeholder="Mobile number"
                  className={`w-full bg-transparent border-0 text-[#0A1628] font-body text-[13px] py-1.5 focus:outline-none focus:ring-0 ${
                    error ? 'placeholder-[#EF4444]' : 'placeholder-slate-400'
                  }`}
                  aria-label="Enter your mobile number"
                />
                <button
                  onClick={handleTrack}
                  className="bg-[#0A1628] hover:bg-slate-800 text-white font-body font-semibold text-[12px] px-6 py-2.5 rounded-full transition-colors flex-shrink-0 shadow-sm"
                >
                  Track
                </button>
              </div>

              {/* Note */}
              <div className="flex items-center gap-2 font-body text-[11px] text-[#475569]/60">
                <Info size={13} className="text-[#475569]/50" />
                <span>Available after booking. This is a preview — full tracking coming soon.</span>
              </div>
            </div>

            {/* Right Column (55% width) - Vertical Stepper Card */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.02)] text-left">
                
                {/* Stepper Header */}
                <div className="mb-8 border-b border-slate-100 pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 mb-1">
                    CONSULTATION
                  </div>
                  <h3 className="font-display font-semibold text-[19px] text-[#0A1628] leading-tight">
                    {currentStep >= 0 
                      ? `Ref #AB-2026-${refCode}` 
                      : 'Awaiting input'
                    }
                  </h3>
                </div>

                {/* Vertical Stepper list */}
                <div className="flex flex-col gap-8 relative select-none pl-2">
                  
                  {/* Vertical connector line */}
                  <div className="absolute top-[18px] bottom-[18px] left-[17px] w-[1px] bg-slate-200 z-0"></div>

                  {/* Step 1: Booking Confirmed */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep >= 0 
                        ? 'bg-[#00B4A6] border-[#00B4A6] text-white shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-300'
                    }`}>
                      {currentStep >= 0 ? <Check size={14} strokeWidth={3} /> : <Info size={14} />}
                    </div>
                    <div>
                      <div className={`font-body font-bold text-[13px] leading-tight ${currentStep >= 0 ? 'text-[#0A1628]' : 'text-slate-400'}`}>
                        Booking Confirmed
                      </div>
                      <div className="font-body text-[11px] text-[#475569] mt-0.5">
                        {currentStep >= 0 ? 'Completed' : 'Pending'}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Nadi Pariksha */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep > 1 
                        ? 'bg-[#00B4A6] border-[#00B4A6] text-white' 
                        : currentStep === 1 
                        ? 'bg-transparent border-[#00B4A6] text-[#00B4A6] shadow-[0_0_10px_rgba(0,180,166,0.15)] animate-status-pulse' 
                        : 'bg-white border-slate-200 text-slate-300'
                    }`}>
                      {currentStep > 1 ? <Check size={14} strokeWidth={3} /> : <Activity size={14} />}
                    </div>
                    <div>
                      <div className={`font-body font-bold text-[13px] leading-tight ${currentStep >= 1 ? 'text-[#0A1628]' : 'text-slate-400'}`}>
                        Nadi Pariksha / Pulse Analysis
                      </div>
                      <div className="font-body text-[11px] text-[#475569] mt-0.5">
                        {currentStep > 1 ? 'Completed' : currentStep === 1 ? 'Active' : 'Pending'}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Treatment Plan Ready */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep === 2 
                        ? 'bg-[#00B4A6] border-[#00B4A6] text-white' 
                        : 'bg-white border-slate-200 text-slate-300'
                    }`}>
                      <FileCheck size={14} />
                    </div>
                    <div>
                      <div className={`font-body font-bold text-[13px] leading-tight ${currentStep === 2 ? 'text-[#0A1628]' : 'text-slate-400'}`}>
                        Treatment Plan Ready
                      </div>
                      <div className="font-body text-[11px] text-[#475569] mt-0.5">
                        {currentStep === 2 ? 'Ready' : 'Pending'}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
