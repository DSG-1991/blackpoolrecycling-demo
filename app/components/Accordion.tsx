'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-base border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-text-primary text-sm cursor-pointer hover:text-brand-orange transition-colors duration-150"
            >
              <span>{item.q}</span>
              <ChevronDown
                size={18}
                className={`text-brand-orange shrink-0 accordion-chevron ${isOpen ? 'open' : ''}`}
              />
            </button>
            <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
              <div className="accordion-inner">
                <div className="px-5 pb-4 pt-3 text-text-body text-sm leading-relaxed border-t border-border">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
