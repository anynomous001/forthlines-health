import React from 'react';
import { Clock, Home, MessageCircle, ShieldCheck, Calendar } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    { icon: Clock, text: 'Same-day Reports' },
    { icon: Home, text: 'Home Collection' },
    { icon: MessageCircle, text: 'WhatsApp Reports' },
    { icon: ShieldCheck, text: 'Certified Technicians' },
    { icon: Calendar, text: 'Open 7 Days' }
  ];

  return (
    <div 
      id="trust-strip" 
      className="bg-[#00B4A6] py-4 overflow-x-auto whitespace-nowrap shadow-[0_4px_20px_rgba(0,180,166,0.15)] scrollbar-none"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-start md:justify-center gap-12 font-body font-semibold text-[13px] text-[#0A1628]">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2">
              <Icon size={16} className="text-[#0A1628] flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
