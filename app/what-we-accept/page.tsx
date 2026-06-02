import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  X,
  Truck,
  Leaf,
  Sofa,
  Hammer,
  MonitorSmartphone,
  Mountain,
  Flower2,
  Package,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Waste We Accept | Blackpool Recycling Centre',
  description:
    'Full list of waste we accept at our Blackpool recycling centre — household, garden, furniture, DIY, electronics, soil & hardcore. No booking needed.',
};

const accepted = [
  {
    icon: Truck,
    label: 'Household Waste',
    items: [
      'General mixed household rubbish',
      'Black bin bag waste',
      'Kitchen and bathroom items',
      'Cleaning products (non-hazardous)',
      'Cardboard and paper in bulk',
    ],
  },
  {
    icon: Leaf,
    label: 'Garden & Green Waste',
    items: [
      'Grass cuttings and turf',
      'Tree branches and logs',
      'Hedge trimmings',
      'Soil and compost',
      'Leaves and plant matter',
    ],
  },
  {
    icon: Sofa,
    label: 'Furniture & Bulky Items',
    items: [
      'Sofas and chairs',
      'Mattresses and beds',
      'Wardrobes and drawers',
      'White goods (fridges, washing machines)',
      'Carpets and underlay',
    ],
  },
  {
    icon: Hammer,
    label: 'DIY & Renovation Waste',
    items: [
      'Timber and wood offcuts',
      'Plasterboard (general quantities)',
      'Ceramic tiles',
      'Rubble and brickwork',
      'Insulation materials',
    ],
  },
  {
    icon: MonitorSmartphone,
    label: 'Electrical & Electronics (WEEE)',
    items: [
      'Televisions and monitors',
      'Laptops, PCs and tablets',
      'Kitchen appliances',
      'Power tools',
      'Small electronics and cables',
    ],
  },
  {
    icon: Mountain,
    label: 'Soil & Hardcore',
    items: [
      'Topsoil and subsoil',
      'Concrete and brick',
      'Stone and aggregate',
      'Sand and gravel',
      'Mixed hardcore',
    ],
  },
  {
    icon: Flower2,
    label: 'Metal & Scrap',
    items: [
      'Scrap steel and iron',
      'Aluminium',
      'Copper and brass',
      'Metal doors and frames',
      'Garden tools and equipment',
    ],
  },
  {
    icon: Package,
    label: 'Packaging & Commercial Light',
    items: [
      'Cardboard in large volumes',
      'Plastic packaging (sorted)',
      'Polystyrene',
      'Wooden pallets',
      'Shrink wrap',
    ],
  },
];

const notAccepted = [
  'Hazardous liquids — oils, solvents, paints in bulk',
  'Asbestos or asbestos-containing materials',
  'Clinical or medical waste',
  'Radioactive materials',
  'Explosive or flammable substances',
  'Trade/commercial quantities (see Job Logistics)',
];

export default function WhatWeAcceptPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Blackpool Recycling Centre
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            What waste do we accept?
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            Most household, garden, bulky and DIY waste — weighed and receipted. No booking
            required. Open Monday to Saturday, 9am–4pm.
          </p>
        </div>
      </section>

      {/* Accepted waste grid */}
      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-8">
            Accepted waste types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {accepted.map(({ icon: Icon, label, items }) => (
              <div key={label} className="bg-white border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center mb-3">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-text-primary mb-3">{label}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-body">
                      <CheckCircle size={12} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not accepted */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-6">
            What we cannot accept
          </h2>
          <div className="bg-base border border-border rounded-xl p-6 max-w-2xl">
            <ul className="space-y-3">
              {notAccepted.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-body">
                  <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-text-muted max-w-xl">
            Not sure if we can take something? Give us a call on{' '}
            <a href="tel:01253963109" className="text-brand-orange font-semibold">
              01253 963109
            </a>{' '}
            and we&apos;ll advise before your trip.
          </p>
        </div>
      </section>

      {/* Trade callout */}
      <section className="bg-brand-charcoal py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h2 className="text-white text-xl font-extrabold mb-2">
                Builder, contractor or landlord?
              </h2>
              <p className="text-zinc-400 text-sm max-w-lg">
                This recycling centre is designed for domestic and small-volume DIY waste. For trade
                loads, skip hire, commercial clearances and large builder&apos;s volumes, visit our
                partner site Job Logistics Ltd — they handle it all.
              </p>
            </div>
            <a
              href="https://www.joblogisticsltd.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Job Logistics Trade Site <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-base py-12 text-center">
        <h2 className="text-brand-charcoal text-2xl font-extrabold mb-3">
          Ready to drop off?
        </h2>
        <p className="text-text-muted mb-6">No booking needed. Just turn up Mon–Sat, 9am–4pm.</p>
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
            Find us &amp; get directions
          </Link>
        </div>
      </section>
    </>
  );
}
