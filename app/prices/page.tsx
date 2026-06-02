import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Waste Disposal Prices | Blackpool | Weight-Based',
  description:
    'Clear weight-based prices for waste disposal at our Blackpool recycling centre. No hidden fees, no booking needed. Pay on the day.',
};

const generalPricing = [
  { size: 'Small car boot / estate load', approxTime: '~15 min', price: '£72' },
  { size: 'Half-van / transit (part load)', approxTime: '~30 min', price: '£145' },
  { size: 'Full-van load', approxTime: '~45 min', price: '£220' },
  { size: 'Large load (up to 60 min unload)', approxTime: '~60 min', price: '£325' },
];

const specialistPricing = [
  { material: 'Soil & hardcore (per tonne)', note: 'Weighed at weighbridge', price: 'From £120' },
  { material: 'Plasterboard', note: 'Specialist processing', price: '£295' },
  { material: 'Wood / timber (separate)', note: 'Clean timber only', price: '£220' },
  { material: 'Green / garden waste (separate)', note: 'Composting stream', price: '£180' },
  { material: 'Electrical / WEEE items', note: 'Per item, ask on arrival', price: 'POA' },
];

export default function PricesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Blackpool Recycling Centre
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Waste disposal prices
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            Weight-based, transparent pricing. You pay for what you leave — nothing more. All prices
            confirmed before payment.
          </p>
        </div>
      </section>

      {/* How pricing works */}
      <section className="bg-surface-warm py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <Info size={20} className="text-brand-orange shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-text-primary mb-1">How our pricing works</h2>
              <p className="text-text-body text-sm leading-relaxed">
                Your vehicle is weighed when you arrive and again when you leave. You only pay for
                the actual weight of waste deposited. The table below shows approximate guide prices
                based on typical load sizes — your final price is based on the weighbridge reading,
                agreed with you before payment is taken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General pricing */}
      <section className="bg-base py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-6">
            General waste — guide prices
          </h2>
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="bg-brand-charcoal px-5 py-3 grid grid-cols-3 text-white text-xs font-bold uppercase tracking-wide">
              <span>Load size</span>
              <span className="text-center">Approx. unload time</span>
              <span className="text-right">Guide price</span>
            </div>
            {generalPricing.map((row, i) => (
              <div
                key={row.size}
                className={`px-5 py-4 grid grid-cols-3 items-center border-b border-border last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-base'
                }`}
              >
                <span className="text-text-body text-sm">{row.size}</span>
                <span className="text-text-muted text-sm text-center">{row.approxTime}</span>
                <span className="text-brand-charcoal font-extrabold text-right">{row.price}</span>
              </div>
            ))}
          </div>

          {/* Specialist pricing */}
          <h2 className="text-brand-charcoal text-2xl font-extrabold mt-10 mb-6">
            Specialist materials — separate pricing
          </h2>
          <p className="text-text-muted text-sm mb-5 max-w-xl">
            Certain materials require specialist processing and are priced separately from your
            general load. These must be kept separate in your vehicle.
          </p>
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="bg-brand-charcoal px-5 py-3 grid grid-cols-3 text-white text-xs font-bold uppercase tracking-wide">
              <span>Material</span>
              <span className="text-center hidden sm:block">Notes</span>
              <span className="text-right">Price</span>
            </div>
            {specialistPricing.map((row, i) => (
              <div
                key={row.material}
                className={`px-5 py-4 grid grid-cols-3 items-center border-b border-border last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-base'
                }`}
              >
                <span className="text-text-body text-sm">{row.material}</span>
                <span className="text-text-muted text-xs text-center hidden sm:block">
                  {row.note}
                </span>
                <span className="text-brand-charcoal font-extrabold text-right">{row.price}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-text-muted">
            * All prices are a guide. Final costs are based on exact weighbridge readings. POA =
            price on arrival.
          </p>
        </div>
      </section>

      {/* Trade callout */}
      <section className="bg-brand-charcoal py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-white text-xl font-extrabold mb-2">
              Need trade or commercial pricing?
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg">
              Larger contractor loads, skip hire and commercial collections are handled by our
              partner site Job Logistics Ltd with dedicated trade pricing.
            </p>
          </div>
          <a
            href="https://www.joblogisticsltd.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Trade pricing at Job Logistics <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base py-12 text-center">
        <h2 className="text-brand-charcoal text-2xl font-extrabold mb-3">
          Ready to drop off?
        </h2>
        <p className="text-text-muted mb-6">Open Monday to Saturday, 9am–4pm. No booking needed.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3 rounded-lg transition-colors"
          >
            Book a drop-off <ArrowRight size={16} />
          </Link>
          <Link
            href="/find-us"
            className="inline-flex items-center gap-2 border border-brand-charcoal/20 hover:border-brand-orange text-text-body font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Find us &amp; opening hours
          </Link>
        </div>
      </section>
    </>
  );
}
