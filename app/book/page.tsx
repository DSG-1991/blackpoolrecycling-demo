'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Clock, MapPin } from 'lucide-react';

const wasteTypes = [
  'Household waste',
  'Garden & green waste',
  'Furniture & bulky items',
  'DIY & renovation waste',
  'Electrical / WEEE',
  'Soil & hardcore',
  'Mixed / multiple types',
  'Other',
];

const loadSizes = [
  'Small car boot load',
  'Half-van / estate load',
  'Full van load',
  'Large / full load (60+ mins)',
  "I'm not sure — I'll ask on arrival",
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Book a collection
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Book a waste collection
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            Fill in the form below and we&apos;ll confirm your slot. Or just turn up — no booking
            needed Monday to Saturday, 9am–4pm.
          </p>
        </div>
      </section>

      <section className="bg-base py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-brand-orange" />
                </div>
                <h2 className="text-brand-charcoal text-xl font-extrabold mb-2">
                  Got it — we&apos;ll be in touch
                </h2>
                <p className="text-text-body text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                  We aim to confirm within a few hours during opening hours. You&apos;re also
                  welcome to just drive in Monday to Saturday, 9am–4pm — no confirmation needed.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/find-us"
                    className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-lg text-sm"
                  >
                    <MapPin size={14} /> Get directions
                  </Link>
                  <Link
                    href="/"
                    className="text-text-muted text-sm hover:text-brand-orange transition-colors"
                  >
                    Back to home
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border rounded-xl p-6 space-y-5"
              >

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-orange"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-text-primary mb-1.5">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-orange"
                      placeholder="07..."
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-1.5">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-orange"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                {/* Waste type */}
                <div>
                  <label htmlFor="waste-type" className="block text-sm font-bold text-text-primary mb-1.5">
                    Main type of waste <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="waste-type"
                    name="waste-type"
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-body focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option value="">Select waste type...</option>
                    {wasteTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Load size */}
                <div>
                  <label htmlFor="load-size" className="block text-sm font-bold text-text-primary mb-1.5">
                    Approximate load size
                  </label>
                  <select
                    id="load-size"
                    name="load-size"
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-body focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option value="">Select load size...</option>
                    {loadSizes.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred date */}
                  <div>
                    <label htmlFor="preferred-date" className="block text-sm font-bold text-text-primary mb-1.5">
                      Preferred date
                    </label>
                    <input
                      id="preferred-date"
                      name="preferred-date"
                      type="date"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-body focus:outline-none focus:border-brand-orange"
                    />
                    <p className="text-xs text-text-muted mt-1">Optional — or just turn up any Mon–Sat</p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-1.5">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-body focus:outline-none focus:border-brand-orange resize-none"
                    placeholder="e.g. unusual materials, very large load, accessibility needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 rounded-lg transition-colors text-base"
                >
                  Send booking request
                </button>
                <p className="text-xs text-text-muted text-center">
                  We&apos;ll reply within a few hours during opening hours. No payment taken here.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-xl p-5">
              <h2 className="font-bold text-text-primary mb-3">Or just turn up</h2>
              <p className="text-text-body text-sm leading-relaxed mb-4">
                Tell us what you need cleared and where you are and we&apos;ll sort you out
                on the day — no appointment, no wait.
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-2">
                  <Clock size={15} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-text-body">Mon–Sat: 9:00am – 4:00pm</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-brand-orange shrink-0 mt-0.5" />
                  <span className="text-text-body">
                    Unit 1, Dickies Lane South<br />Blackpool, FY4 5LG
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-brand-orange shrink-0" />
                  <a href="tel:01253963109" className="text-brand-orange font-bold hover:underline">
                    01253 963109
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-surface-warm border border-brand-orange/20 rounded-xl p-5">
              <h3 className="font-bold text-text-primary text-sm mb-2">
                Builder or contractor?
              </h3>
              <p className="text-text-body text-xs leading-relaxed mb-3">
                This site handles domestic and small DIY waste. For trade volumes, skip hire and
                commercial clearances:
              </p>
              <a
                href="https://www.joblogisticsltd.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange font-bold text-xs hover:underline"
              >
                Visit Job Logistics Ltd →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
