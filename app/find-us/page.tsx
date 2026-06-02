import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Area | Rubbish Collection Blackpool & Fylde Coast',
  description:
    'We collect waste across Blackpool, Lytham St Annes, Bispham, Fleetwood, Thornton and the Fylde Coast. Call 01253 963109 to check your area.',
};

const areas = [
  'Blackpool (all areas)',
  'Lytham St Annes',
  'Bispham',
  'Fleetwood',
  'Thornton-Cleveleys',
  'Poulton-le-Fylde',
  'Kirkham',
  'Freckleton',
  'Warton',
  'Wesham & Treales',
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Where we collect
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Service area — Blackpool &amp; Fylde Coast
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            We cover Blackpool and the surrounding Fylde Coast area. Not sure if we reach you?
            Call us on 01253 963109 and we&apos;ll confirm.
          </p>
        </div>
      </section>

      <section className="bg-base py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              title="Job Logistics collection service area"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79270.0!2d-3.0503!3d53.8142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b3dbb9a1e8175%3A0x3b72c0b985b25b8a!2sBlackpool!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Areas covered */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-text-primary mb-3">Areas we cover</h2>
                  <div className="grid grid-cols-2 gap-1.5">
                    {areas.map(area => (
                      <div key={area} className="flex items-center gap-2 text-sm text-text-body">
                        <CheckCircle size={12} className="text-brand-orange shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted mt-3">
                    Not on this list? Call us — we may still be able to help.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <div>
                  <h2 className="font-bold text-text-primary mb-1">Call to book or enquire</h2>
                  <a
                    href="tel:01253963109"
                    className="text-brand-orange font-bold text-lg hover:underline"
                  >
                    01253 963109
                  </a>
                  <p className="text-text-muted text-xs mt-1">
                    We can usually quote and book in one call
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-text-primary mb-2">Collection hours</h2>
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ['Monday – Friday', '8:00am – 6:00pm'],
                        ['Saturday', '8:00am – 4:00pm'],
                        ['Sunday', 'By arrangement'],
                      ].map(([day, time]) => (
                        <tr key={day} className="border-b border-border/50 last:border-0">
                          <td className="py-1.5 font-medium text-text-body">{day}</td>
                          <td className="py-1.5 text-right text-text-primary font-semibold">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-charcoal py-12 text-center">
        <h2 className="text-white text-2xl font-extrabold mb-3">Ready to book a collection?</h2>
        <p className="text-zinc-400 mb-6">Same-day and next-day available across the Fylde Coast.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3 rounded-lg transition-colors"
          >
            Book a collection <ArrowRight size={16} />
          </Link>
          <a
            href="tel:01253963109"
            className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            <Phone size={16} /> 01253 963109
          </a>
        </div>
      </section>
    </>
  );
}
