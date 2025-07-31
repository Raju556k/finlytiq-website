import React from 'react';

const announcements = [
  'ITR FY 2024-25 Due date for Individuals is September 2025.',
  'GST Return (GSTR-3B) due date is 20th of every month.',
  'TDS payment due date is 7th of every month.',
  'Advance Tax 1st installment due on June 15, 2024.',
  'File your ITR early to avoid last-minute rush!'
];

const AnnouncementsTicker = () => (
  <div className="w-full bg-[#FF9933] text-white font-medium py-2 px-4 overflow-hidden relative">
    <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
      {announcements.map((msg, idx) => (
        <span key={idx} className="inline-block">
          <span className="font-bold mr-2">Announcement:</span> {msg}
        </span>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        display: inline-block;
        min-width: 100%;
        animation: marquee 44s linear infinite;
      }
    `}</style>
  </div>
);

export default AnnouncementsTicker; 