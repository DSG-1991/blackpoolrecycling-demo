import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Waste Collection Prices Blackpool | Job Logistics',
  description:
    'Rubbish removal prices in Blackpool. Priced by load size — agreed before we start. No hidden fees. Call 01253 963109 for a free quote.',
};

const guidePricing = [
  { size: 'Small load', desc: 'Car boot equivalent — a few bags or items', price: '£72' },
  { size: 'Medium load', desc: 'Half-van — small clearance or a few large items', price: '£145' },
  { size: 'Large load', desc: 'Full van — garage, garden or room clearance', price: '£220' },
  { size: 'Full clearance', desc: 'Maximum load — large property clearances', price: '£325' },
];

const specialistPricing = [
  { material: 'Green & garden waste', note: 'Composting disposal stream', price: '£180' },
  { material: 'Timber & wood', note: 'Clean timber only', price: '£220' },
  { material: 'Plasterboard', note: 'Specialist processing required', price: '£295' },
  { material: 'Soil & hardcore', note: 'Per tonne, weighed on disposal', price: 'From £120' },
  { material: 'Electrical / WEEE items', note: 'Ask for a quote on large volumes', price: 'POA' },
];

export default function PricesPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Waste collection pricing
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Rubbish collection prices — Blackpool
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            Priced by load size. We quote before we start and stick to it — no surprises, no
            extras on the day.
          </p>
        </div>
      </section>

      <section className="bg-surface-warm py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <Info size={20} className="text-brand-orange shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-text-primary mb-1">How our pricing works</h2>
              <p className="text-text-body text-sm leading-relaxed">
                We price by the size of load we collect. You tell us roughly what needs clearing,
                we give you a fixed quote before the team starts work. That price is what you pay —
                no surcharges for awkward access, no extra charge if the load takes longer than
                expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-6">
            Collection guide prices
          </h2>
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="bg-brand-charcoal px-5 py-3 grid grid-cols-3 text-white text-xs font-bold uppercase tracking-wide">
              <span>Load size</span>
              <span className="text-center">What it covers</span>
              <span className="text-right">Guide price</span>
            </div>
            {guidePricing.map((row, i) => (
              <div
                key={row.size}
                className={`px-5 py-4 grid grid-cols-3 items-center border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-base'}`}
              >
                <span className="font-semibold text-text-primary text-sm">{row.size}</span>
                <span className="text-text-muted text-xs text-center">{row.desc}</span>
                <span className="text-brand-charcoal font-extrabold text-right">{row.price}</span>
              </div>
            ))}
          </div>

          <h2 className="text-brand-charcoal text-2xl font-extrabold mt-10 mb-4">
            Specialist materials — priced separately
          </h2>
          <p className="text-text-muted text-sm mb-5 max-w-xl">
            Some materials require a specialist disposal route and are priced separately from your
            general load. Tell us upfront if any of these apply.
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
                className={`px-5 py-4 grid grid-cols-3 items-center border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-base'}`}
              >
                <span className="text-text-body text-sm">{row.material}</span>
                <span className="text-text-muted text-xs text-center hidden sm:block">{row.note}</span>
                <span className="text-brand-charcoal font-extrabold text-right">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-text-muted">
            * All prices are guides. Final price agreed before work begins. POA = price on enquiry.
          </p>
        </div>
      </section>

      <section className="bg-brand-charcoal py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-white text-xl font-extrabold mb-2">
              Prefer to drop your waste off yourself?
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg">
              Drive to our Job Logistics recycling centre — weighed on the weighbridge, pay on the day.
            </p>
          </div>
          <a
            href="https://www.joblogisticsltd.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Drop-off prices at Job Logistics <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <section className="bg-base py-12 text-center">
        <h2 className="text-brand-charcoal text-2xl font-extrabold mb-3">Get a free quote</h2>
        <p className="text-text-muted mb-6">Tell us what needs clearing — we price it up at no charge.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3 rounded-lg transition-colors"
          >
            Book or get a quote <ArrowRight size={16} />
          </Link>
          <a
            href="tel:01253963109"
            className="inline-flex items-center gap-2 border border-brand-charcoal/20 hover:border-brand-orange text-text-body font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Call 01253 963109
          </a>
        </div>
      </section>
    </>
  );
}
