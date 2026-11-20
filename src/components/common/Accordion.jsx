import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-[#234E78]/30 bg-white shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-[#17344E] gap-4"
            >
              <span className="text-base sm:text-lg font-semibold">{item.question || item.title}</span>
              <span className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                isOpen ? 'rotate-180 bg-[#234E78] text-white' : 'bg-[#F1F3F0] text-[#646B73]'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm sm:text-base text-[#646B73] leading-relaxed border-t border-gray-100 pt-4">
                {item.answer || item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
