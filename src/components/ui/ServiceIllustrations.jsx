import React from 'react';

/* ── Modern 3D-style SVG illustrations for service cards ── */

const GSTIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="gst-bg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00897B" />
        <stop offset="1" stopColor="#004D40" />
      </linearGradient>
      <linearGradient id="gst-doc" x1="30" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#e0f2f1" />
      </linearGradient>
      <filter id="gst-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    {/* Background circle */}
    <circle cx="60" cy="60" r="52" fill="url(#gst-bg)" opacity="0.1" />
    {/* Document */}
    <g filter="url(#gst-shadow)">
      <rect x="30" y="18" width="48" height="62" rx="6" fill="url(#gst-doc)" />
      <rect x="32" y="20" width="44" height="58" rx="5" fill="white" stroke="#00897B" strokeWidth="1.5" />
    </g>
    {/* Tax lines */}
    <rect x="40" y="32" width="24" height="3" rx="1.5" fill="#00897B" opacity="0.6" />
    <rect x="40" y="40" width="18" height="3" rx="1.5" fill="#00897B" opacity="0.35" />
    <rect x="40" y="48" width="22" height="3" rx="1.5" fill="#00897B" opacity="0.35" />
    <rect x="40" y="56" width="16" height="3" rx="1.5" fill="#00897B" opacity="0.35" />
    {/* GST stamp */}
    <g filter="url(#gst-shadow)">
      <circle cx="80" cy="78" r="18" fill="#00897B" />
      <circle cx="80" cy="78" r="15" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="80" y="75" textAnchor="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="sans-serif">GST</text>
      <text x="80" y="84" textAnchor="middle" fill="white" fontSize="5" fontWeight="600" fontFamily="sans-serif" opacity="0.8">FILED</text>
    </g>
    {/* Checkmark */}
    <circle cx="38" cy="82" r="10" fill="#00C853" />
    <path d="M33 82l3.5 3.5L43 79" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Small floating elements */}
    <rect x="85" y="25" width="14" height="14" rx="4" fill="#00897B" opacity="0.15" transform="rotate(15 92 32)" />
    <circle cx="22" cy="50" r="5" fill="#00C853" opacity="0.12" />
  </svg>
);

const IncomeTaxIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="tax-calc" x1="20" y1="30" x2="80" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#283593" />
        <stop offset="1" stopColor="#1A237E" />
      </linearGradient>
      <filter id="tax-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.2" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#1A237E" opacity="0.06" />
    {/* Calculator body */}
    <g filter="url(#tax-shadow)">
      <rect x="22" y="24" width="50" height="72" rx="8" fill="url(#tax-calc)" />
      {/* Screen */}
      <rect x="28" y="32" width="38" height="16" rx="3" fill="#3949AB" />
      <text x="62" y="44" textAnchor="end" fill="#C5CAE9" fontSize="10" fontWeight="700" fontFamily="monospace">₹2,45,000</text>
    </g>
    {/* Buttons grid */}
    {[0,1,2].map(r => [0,1,2].map(c => (
      <rect key={`${r}${c}`} x={30 + c * 12} y={54 + r * 11} width="9" height="7" rx="2" fill="rgba(255,255,255,0.2)" />
    )))}
    <rect x="30" y="87" width="33" height="7" rx="2" fill="#FF9933" opacity="0.8" />
    {/* Coin stack */}
    <g filter="url(#tax-shadow)">
      <ellipse cx="90" cy="88" rx="14" ry="5" fill="#FFB74D" />
      <rect x="76" y="82" width="28" height="6" fill="#FFB74D" />
      <ellipse cx="90" cy="82" rx="14" ry="5" fill="#FFC107" />
      <rect x="76" y="76" width="28" height="6" fill="#FFC107" />
      <ellipse cx="90" cy="76" rx="14" ry="5" fill="#FFD54F" />
      <text x="90" y="80" textAnchor="middle" fill="#E65100" fontSize="8" fontWeight="800" fontFamily="sans-serif">₹</text>
    </g>
    {/* Savings arrow */}
    <path d="M88 65 L88 50 L82 56 M88 50 L94 56" stroke="#00C853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="40" r="4" fill="#FF9933" opacity="0.15" />
  </svg>
);

const CompanyRegIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="bldg-grad" x1="25" y1="20" x2="70" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E88E5" />
        <stop offset="1" stopColor="#0D47A1" />
      </linearGradient>
      <filter id="bldg-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#1565C0" opacity="0.06" />
    {/* Main building */}
    <g filter="url(#bldg-shadow)">
      <rect x="28" y="30" width="40" height="62" rx="4" fill="url(#bldg-grad)" />
      {/* Windows */}
      {[0,1,2,3].map(r => [0,1].map(c => (
        <rect key={`w${r}${c}`} x={35 + c * 16} y={38 + r * 13} width="10" height="8" rx="2" fill="rgba(255,255,255,0.35)" />
      )))}
      {/* Door */}
      <rect x="42" y="78" width="12" height="14" rx="2" fill="#0D47A1" />
      <circle cx="52" cy="86" r="1.5" fill="#FFD54F" />
    </g>
    {/* Side building */}
    <g filter="url(#bldg-shadow)">
      <rect x="70" y="48" width="26" height="44" rx="3" fill="#42A5F5" />
      {[0,1,2].map(r => (
        <rect key={`sw${r}`} x={76} y={54 + r * 12} width="14" height="7" rx="1.5" fill="rgba(255,255,255,0.3)" />
      ))}
    </g>
    {/* Certificate badge */}
    <g filter="url(#bldg-shadow)">
      <circle cx="86" cy="32" r="14" fill="white" />
      <circle cx="86" cy="32" r="11" fill="#1565C0" />
      <path d="M81 32l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
    {/* Floating elements */}
    <rect x="14" y="55" width="10" height="10" rx="3" fill="#1E88E5" opacity="0.12" transform="rotate(-10 19 60)" />
  </svg>
);

const ROCComplianceIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="shield-grad" x1="35" y1="15" x2="85" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B1FA2" />
        <stop offset="1" stopColor="#4A148C" />
      </linearGradient>
      <filter id="shield-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#7B1FA2" opacity="0.06" />
    {/* Shield */}
    <g filter="url(#shield-shadow)">
      <path d="M60 16 L90 30 L90 60 C90 80 75 95 60 100 C45 95 30 80 30 60 L30 30 Z" fill="url(#shield-grad)" />
      <path d="M60 22 L84 34 L84 58 C84 76 72 88 60 93 C48 88 36 76 36 58 L36 34 Z" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    </g>
    {/* Checklist on shield */}
    <rect x="44" y="40" width="32" height="38" rx="4" fill="white" opacity="0.9" />
    {[0,1,2,3].map(i => (
      <g key={`cl${i}`}>
        <rect x={49} y={46 + i * 8} width="4" height="4" rx="1" fill={i < 3 ? '#00C853' : '#E0E0E0'} />
        {i < 3 && <path d={`M${49.5} ${48 + i * 8}l1.5 1.5 2.5-2.5`} stroke="white" strokeWidth="0.8" strokeLinecap="round" />}
        <rect x={56} y={47 + i * 8} width={i === 2 ? 14 : 16} height="2.5" rx="1" fill={i < 3 ? '#7B1FA2' : '#BDBDBD'} opacity="0.5" />
      </g>
    ))}
    {/* Clock */}
    <g filter="url(#shield-shadow)">
      <circle cx="92" cy="80" r="12" fill="white" />
      <circle cx="92" cy="80" r="10" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1" />
      <line x1="92" y1="80" x2="92" y2="74" stroke="#7B1FA2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="92" y1="80" x2="97" y2="82" stroke="#7B1FA2" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="92" cy="80" r="1.5" fill="#7B1FA2" />
    </g>
  </svg>
);

const NRITaxIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="globe-grad" x1="30" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E53935" />
        <stop offset="1" stopColor="#B71C1C" />
      </linearGradient>
      <filter id="globe-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#E53935" opacity="0.06" />
    {/* Globe */}
    <g filter="url(#globe-shadow)">
      <circle cx="55" cy="55" r="30" fill="url(#globe-grad)" />
      <ellipse cx="55" cy="55" rx="12" ry="30" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <ellipse cx="55" cy="55" rx="22" ry="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="25" y1="45" x2="85" y2="45" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <line x1="25" y1="55" x2="85" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      <line x1="25" y1="65" x2="85" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
    </g>
    {/* India flag colors accent */}
    <rect x="40" y="92" width="30" height="4" rx="2" fill="#FF9933" />
    <rect x="40" y="96" width="30" height="4" rx="0" fill="white" />
    <rect x="40" y="100" width="30" height="4" rx="2" fill="#138808" />
    {/* Currency exchange */}
    <g filter="url(#globe-shadow)">
      <circle cx="88" cy="38" r="14" fill="white" />
      <text x="88" y="36" textAnchor="middle" fill="#E53935" fontSize="9" fontWeight="800" fontFamily="sans-serif">₹</text>
      <text x="88" y="46" textAnchor="middle" fill="#1A237E" fontSize="7" fontWeight="700" fontFamily="sans-serif">$</text>
      <path d="M82 38 L80 36 M82 38 L80 40" stroke="#666" strokeWidth="1" strokeLinecap="round" />
      <path d="M94 38 L96 36 M94 38 L96 40" stroke="#666" strokeWidth="1" strokeLinecap="round" />
    </g>
    {/* Plane */}
    <path d="M20 25 L30 30 L25 32 L28 37 L24 35 L20 38 L21 31 Z" fill="#FF9933" opacity="0.6" />
  </svg>
);

const AccountingIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="book-grad" x1="20" y1="30" x2="70" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00897B" />
        <stop offset="1" stopColor="#004D40" />
      </linearGradient>
      <filter id="book-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#00897B" opacity="0.06" />
    {/* Ledger book */}
    <g filter="url(#book-shadow)">
      <rect x="20" y="28" width="52" height="68" rx="4" fill="url(#book-grad)" />
      <rect x="24" y="28" width="48" height="68" rx="4" fill="#00897B" />
      {/* Spine */}
      <rect x="20" y="28" width="8" height="68" rx="4" fill="#004D40" />
      {/* Page */}
      <rect x="28" y="34" width="40" height="56" rx="2" fill="white" opacity="0.92" />
    </g>
    {/* Table lines */}
    <line x1="48" y1="34" x2="48" y2="90" stroke="#00897B" strokeWidth="0.5" opacity="0.3" />
    {[0,1,2,3,4,5].map(i => (
      <line key={`tl${i}`} x1="30" y1={42 + i * 8} x2="66" y2={42 + i * 8} stroke="#00897B" strokeWidth="0.4" opacity="0.2" />
    ))}
    {/* Numbers */}
    <text x="38" y="48" textAnchor="middle" fill="#00897B" fontSize="5" fontFamily="monospace" opacity="0.6">Dr.</text>
    <text x="58" y="48" textAnchor="middle" fill="#00897B" fontSize="5" fontFamily="monospace" opacity="0.6">Cr.</text>
    {[0,1,2,3].map(i => (
      <g key={`num${i}`}>
        <rect x={32} y={52 + i * 8} width={10 + (i % 2) * 4} height="2" rx="1" fill="#00897B" opacity="0.25" />
        <rect x={52} y={52 + i * 8} width={8 + (i % 3) * 3} height="2" rx="1" fill="#00897B" opacity="0.25" />
      </g>
    ))}
    {/* Chart floating */}
    <g filter="url(#book-shadow)">
      <rect x="72" y="50" width="34" height="30" rx="6" fill="white" />
      <rect x="78" y="68" width="5" height="8" rx="1" fill="#00C853" />
      <rect x="85" y="62" width="5" height="14" rx="1" fill="#00897B" />
      <rect x="92" y="58" width="5" height="18" rx="1" fill="#004D40" />
      {/* Trend line */}
      <path d="M80 65 L87 60 L94 55" stroke="#FF9933" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="94" cy="55" r="2" fill="#FF9933" />
    </g>
    <circle cx="90" cy="40" r="5" fill="#00C853" opacity="0.12" />
  </svg>
);

const StartupIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="rocket-grad" x1="50" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9933" />
        <stop offset="1" stopColor="#E65100" />
      </linearGradient>
      <filter id="rocket-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#FF9933" opacity="0.06" />
    {/* Growth chart */}
    <g filter="url(#rocket-shadow)">
      <rect x="18" y="45" width="50" height="42" rx="6" fill="white" />
      {/* Bars */}
      <rect x="26" y="70" width="6" height="12" rx="1.5" fill="#FFE0B2" />
      <rect x="35" y="62" width="6" height="20" rx="1.5" fill="#FFCC80" />
      <rect x="44" y="55" width="6" height="27" rx="1.5" fill="#FFB74D" />
      <rect x="53" y="50" width="6" height="32" rx="1.5" fill="#FF9933" />
    </g>
    {/* Rocket */}
    <g filter="url(#rocket-shadow)" transform="translate(70, 15) rotate(15)">
      {/* Body */}
      <path d="M12 0 C12 0 20 10 20 30 L4 30 C4 10 12 0 12 0Z" fill="url(#rocket-grad)" />
      {/* Window */}
      <circle cx="12" cy="16" r="4" fill="white" opacity="0.9" />
      <circle cx="12" cy="16" r="2.5" fill="#1A237E" opacity="0.6" />
      {/* Fins */}
      <path d="M4 24 L0 32 L4 30Z" fill="#E65100" />
      <path d="M20 24 L24 32 L20 30Z" fill="#E65100" />
      {/* Nose */}
      <circle cx="12" cy="4" r="2" fill="#FFD54F" />
      {/* Flame */}
      <path d="M8 30 L12 42 L16 30" fill="#FF5722" opacity="0.7" />
      <path d="M10 30 L12 38 L14 30" fill="#FFC107" opacity="0.9" />
    </g>
    {/* Stars */}
    <circle cx="30" cy="25" r="2" fill="#FFD54F" opacity="0.5" />
    <circle cx="60" cy="10" r="1.5" fill="#FFD54F" opacity="0.4" />
    <circle cx="100" cy="55" r="2" fill="#FF9933" opacity="0.3" />
    {/* Sparkle trail */}
    <circle cx="95" cy="45" r="1" fill="#FFB74D" opacity="0.6" />
    <circle cx="100" cy="38" r="1.5" fill="#FFB74D" opacity="0.4" />
  </svg>
);

const VirtualCFOIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="cfo-screen" x1="15" y1="20" x2="95" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A237E" />
        <stop offset="1" stopColor="#0D1642" />
      </linearGradient>
      <filter id="cfo-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.2" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#1A237E" opacity="0.06" />
    {/* Monitor */}
    <g filter="url(#cfo-shadow)">
      <rect x="15" y="18" width="75" height="52" rx="6" fill="url(#cfo-screen)" />
      <rect x="18" y="21" width="69" height="46" rx="4" fill="#1A237E" />
      {/* Stand */}
      <rect x="45" y="70" width="15" height="8" fill="#455A64" />
      <rect x="38" y="78" width="29" height="4" rx="2" fill="#546E7A" />
    </g>
    {/* Dashboard content */}
    {/* Mini line chart */}
    <path d="M26 50 L34 44 L42 46 L50 38 L58 40 L66 32 L74 28 L80 30" stroke="#00C853" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M26 50 L34 44 L42 46 L50 38 L58 40 L66 32 L74 28 L80 30 L80 58 L26 58Z" fill="#00C853" opacity="0.1" />
    {/* KPI cards on dashboard */}
    <rect x="24" y="26" width="22" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="28" y="29" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
    <rect x="28" y="33" width="14" height="3" rx="1" fill="#00C853" opacity="0.6" />
    <rect x="50" y="26" width="22" height="12" rx="2" fill="rgba(255,255,255,0.08)" />
    <rect x="54" y="29" width="10" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
    <rect x="54" y="33" width="14" height="3" rx="1" fill="#FF9933" opacity="0.6" />
    {/* AI brain floating */}
    <g filter="url(#cfo-shadow)">
      <circle cx="98" cy="30" r="14" fill="white" />
      <circle cx="98" cy="30" r="11" fill="#EDE7F6" />
      {/* Brain/AI icon */}
      <path d="M92 30 C92 26 95 24 98 24 C101 24 104 26 104 30 C104 34 101 36 98 36 C95 36 92 34 92 30" stroke="#7B1FA2" strokeWidth="1.5" fill="none" />
      <line x1="98" y1="24" x2="98" y2="36" stroke="#7B1FA2" strokeWidth="1" />
      <line x1="92" y1="30" x2="104" y2="30" stroke="#7B1FA2" strokeWidth="1" />
      <circle cx="95" cy="27" r="1.5" fill="#7B1FA2" opacity="0.5" />
      <circle cx="101" cy="27" r="1.5" fill="#7B1FA2" opacity="0.5" />
      <circle cx="95" cy="33" r="1.5" fill="#7B1FA2" opacity="0.5" />
      <circle cx="101" cy="33" r="1.5" fill="#7B1FA2" opacity="0.5" />
    </g>
    {/* Floating metrics */}
    <g filter="url(#cfo-shadow)">
      <rect x="10" y="85" width="36" height="22" rx="5" fill="white" />
      <text x="18" y="95" fill="#1A237E" fontSize="5" fontWeight="600" fontFamily="sans-serif">Revenue</text>
      <text x="18" y="103" fill="#00C853" fontSize="7" fontWeight="800" fontFamily="sans-serif">+24%</text>
      <path d="M38 99 L42 93" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

const BusinessConsultingIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="strategy-grad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D81B60" />
        <stop offset="1" stopColor="#880E4F" />
      </linearGradient>
      <filter id="strategy-shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.18" />
      </filter>
    </defs>
    <circle cx="60" cy="60" r="52" fill="#D81B60" opacity="0.06" />
    {/* Strategy board */}
    <g filter="url(#strategy-shadow)">
      <rect x="15" y="22" width="58" height="46" rx="6" fill="white" />
      {/* Pie chart */}
      <circle cx="35" cy="42" r="14" fill="#FCE4EC" />
      <path d="M35 28 A14 14 0 0 1 49 42 L35 42Z" fill="#D81B60" />
      <path d="M49 42 A14 14 0 0 1 35 56 L35 42Z" fill="#F06292" />
      <path d="M35 56 A14 14 0 0 1 21 42 L35 42Z" fill="#F8BBD0" />
      {/* Target lines */}
      <rect x="55" y="30" width="14" height="2.5" rx="1" fill="#D81B60" opacity="0.6" />
      <rect x="55" y="36" width="10" height="2.5" rx="1" fill="#F06292" opacity="0.5" />
      <rect x="55" y="42" width="12" height="2.5" rx="1" fill="#F8BBD0" opacity="0.5" />
      <rect x="55" y="50" width="14" height="6" rx="2" fill="#D81B60" opacity="0.1" />
      <text x="62" y="55" textAnchor="middle" fill="#D81B60" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">GROWTH</text>
    </g>
    {/* Target/bullseye */}
    <g filter="url(#strategy-shadow)">
      <circle cx="90" cy="55" r="18" fill="white" />
      <circle cx="90" cy="55" r="15" fill="#FCE4EC" />
      <circle cx="90" cy="55" r="11" fill="#F8BBD0" />
      <circle cx="90" cy="55" r="7" fill="#F06292" />
      <circle cx="90" cy="55" r="3" fill="#D81B60" />
      {/* Arrow */}
      <line x1="78" y1="43" x2="88" y2="53" stroke="#880E4F" strokeWidth="2" strokeLinecap="round" />
      <path d="M87 48 L89 53 L84 51" fill="#880E4F" />
    </g>
    {/* Handshake icon */}
    <g filter="url(#strategy-shadow)">
      <rect x="22" y="76" width="40" height="28" rx="6" fill="white" />
      <path d="M34 86 C34 86 38 82 42 86 C46 82 50 86 50 86" stroke="#D81B60" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M34 86 L30 90 M50 86 L54 90" stroke="#F06292" strokeWidth="1.5" strokeLinecap="round" />
      <text x="42" y="100" textAnchor="middle" fill="#880E4F" fontSize="5" fontWeight="600" fontFamily="sans-serif">PARTNER</text>
    </g>
    {/* Floating diamond */}
    <rect x="80" y="18" width="10" height="10" rx="2" fill="#D81B60" opacity="0.15" transform="rotate(45 85 23)" />
  </svg>
);

/* ── Slug → Illustration map ── */
const illustrationMap = {
  'gst-registration-filing': GSTIllustration,
  'income-tax-filing': IncomeTaxIllustration,
  'company-llp-registration': CompanyRegIllustration,
  'roc-mca-compliance': ROCComplianceIllustration,
  'nri-taxation': NRITaxIllustration,
  'accounting-bookkeeping': AccountingIllustration,
  'startup-advisory': StartupIllustration,
  'virtual-cfo': VirtualCFOIllustration,
  'business-consulting': BusinessConsultingIllustration,
};

const ServiceIllustration = ({ slug }) => {
  const Illustration = illustrationMap[slug];
  if (!Illustration) return null;
  return (
    <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
      <Illustration />
    </div>
  );
};

export default ServiceIllustration;
export { illustrationMap };
