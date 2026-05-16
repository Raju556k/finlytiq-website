import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    const t2 = setTimeout(() => setTooltip(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {tooltip && (
        <div className="bg-white text-gray-800 text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap animate-fade-up">
          💬 Chat with a CA now!
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}
      <a
        href="https://wa.me/919603799411?text=Hi%20Finlytiq!%20I%20need%20help%20with%20CA%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L.058 23.486a.5.5 0 00.603.634l5.798-1.521A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.794-.527-5.367-1.44l-.385-.23-3.986 1.045 1.012-3.895-.247-.397A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
