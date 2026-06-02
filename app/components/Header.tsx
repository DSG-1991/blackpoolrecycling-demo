'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/what-we-accept', label: 'What We Accept' },
  { href: '/prices', label: 'Prices' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/book', label: 'Book' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Job Logistics Recycling Centre"
            width={200}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-body hover:text-brand-orange font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:01253963109"
          className="hidden md:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
        >
          <Phone size={14} />
          01253 963109
        </a>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:01253963109"
            className="flex items-center gap-1 text-brand-orange font-bold text-sm"
          >
            <Phone size={14} />
            Call us
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="p-2 text-brand-charcoal"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-text-body hover:text-brand-orange font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:01253963109"
              className="mt-2 flex items-center gap-2 bg-brand-orange text-white font-bold px-4 py-3 rounded-lg justify-center"
            >
              <Phone size={16} />
              Call 01253 963109
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
