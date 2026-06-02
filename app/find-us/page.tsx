import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, Car, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find Blackpool Recycling Centre | FY4 5LG | Opening Hours',
  description:
    'Unit 1, Dickies Lane South, Blackpool FY4 5LG. Open Mon–Sat 9am–4pm. Map, directions and opening hours for Job Logistics recycling centre.',
};

const hours = [
  { day: 'Monday', time: '9:00am – 4:00pm', open: true },
  { day: 'Tuesday', time: '9:00am – 4:00pm', open: true },
  { day: 'Wednesday', time: '9:00am – 4:00pm', open: true },
  { day: 'Thursday', time: '9:00am – 4:00pm', open: true },
  { day: 'Friday', time: '9:00am – 4:00pm', open: true },
  { day: 'Saturday', time: '9:00am – 4:00pm', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

export default function FindUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Location & Hours
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Find Blackpool Recycling Centre
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            Easy to reach, off the M55. Open six days a week with no booking required.
          </p>
        </div>
      </section>

      {/* Map + info */}
      <section className="bg-base py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              title="Job Logistics Recycling Centre map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.25!2d-3.0209!3d53.7808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b41c2ea3a1d51%3A0x9d0e0e3b8a5c2b0!2sDickies%20Lane%20South%2C%20Blackpool%20FY4%205LG!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-text-primary mb-1">Address</h2>
                  <address className="not-italic text-text-body text-sm leading-relaxed">
                    Job Logistics Recycling Centre<br />
                    Unit 1, Dickies Lane South<br />
                    Blackpool<br />
                    Lancashire<br />
                    FY4 5LG
                  </address>
                  <a
                    href="https://maps.google.com/?q=Dickies+Lane+South+Blackpool+FY4+5LG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-brand-orange font-semibold text-sm hover:underline"
                  >
                    Get directions in Google Maps <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-brand-orange shrink-0" />
                <div>
                  <h2 className="font-bold text-text-primary mb-1">Phone</h2>
                  <a
                    href="tel:01253963109"
                    className="text-brand-orange font-bold text-lg hover:underline"
                  >
                    01253 963109
                  </a>
                  <p className="text-text-muted text-xs mt-1">
                    Call ahead for large loads or any questions
                  </p>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-white border border-border rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h2 className="font-bold text-text-primary mb-3">Opening hours</h2>
                  <table className="w-full text-sm">
                    <tbody>
                      {hours.map(({ day, time, open }) => (
                        <tr key={day} className="border-b border-border/50 last:border-0">
                          <td className="py-1.5 font-medium text-text-body">{day}</td>
                          <td
                            className={`py-1.5 text-right font-semibold ${
                              open ? 'text-text-primary' : 'text-text-muted'
                            }`}
                          >
                            {time}
                          </td>
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

      {/* Directions */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <Car size={20} className="text-brand-orange shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-text-primary text-xl mb-3">Getting here</h2>
              <div className="space-y-2 text-text-body text-sm leading-relaxed">
                <p>
                  <strong>From the M55:</strong> Leave at Junction 4 (Marton/Airport junction). Head
                  towards Blackpool on the A5230. At the roundabout take the exit towards Squires
                  Gate Lane, then follow signs for Blackpool Airport Business Park. Dickies Lane
                  South is off the Squires Gate Lane industrial area.
                </p>
                <p>
                  <strong>Postcode for sat nav:</strong>{' '}
                  <span className="font-mono font-bold text-brand-charcoal">FY4 5LG</span>
                </p>
                <p>
                  <strong>Parking:</strong> Drive-in site with space for vans, trailers and
                  vehicles of all sizes. Follow the signs from the entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal py-12 text-center">
        <h2 className="text-white text-2xl font-extrabold mb-3">
          Ready to drop off?
        </h2>
        <p className="text-zinc-400 mb-6">No booking needed. Turn up Monday to Saturday, 9am–4pm.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3 rounded-lg transition-colors"
          >
            Book ahead if preferred <ArrowRight size={16} />
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
