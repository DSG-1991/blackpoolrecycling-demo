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
  Home,
  Building,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'What We Collect | Rubbish Removal Blackpool | Job Logistics',
  description:
    'Full list of waste we collect from Blackpool properties — household, garden, furniture, appliances, DIY waste and full clearances. We do all the loading.',
};

const collected = [
  {
    icon: Truck,
    label: 'Household Waste',
    items: [
      'General mixed household rubbish',
      'Black bin bag waste in bulk',
      'Kitchen and bathroom items',
      'Clothing, textiles and soft furnishings',
      'Cardboard and paper in large volumes',
    ],
  },
  {
    icon: Leaf,
    label: 'Garden & Green Waste',
    items: [
      'Grass cuttings and turf',
      'Tree branches and logs',
      'Hedge trimmings and shrubs',
      'Soil and compost bags',
      'Leaves and plant matter',
    ],
  },
  {
    icon: Sofa,
    label: 'Furniture & Bulky Items',
    items: [
      'Sofas and armchairs',
      'Mattresses and beds',
      'Wardrobes, drawers and shelving',
      'White goods (fridges, washing machines)',
      'Carpets, rugs and underlay',
    ],
  },
  {
    icon: Hammer,
    label: 'DIY & Renovation Waste',
    items: [
      'Timber and wood offcuts',
      'Plasterboard (general quantities)',
      'Ceramic and floor tiles',
      'Rubble and broken brickwork',
      'Insulation materials',
    ],
  },
  {
    icon: MonitorSmartphone,
    label: 'Electrical & Electronics',
    items: [
      'Televisions and monitors',
      'Laptops, PCs and tablets',
      'Kitchen appliances',
      'Power tools and equipment',
      'Small electronics and cables',
    ],
  },
  {
    icon: Mountain,
    label: 'Soil, Rubble & Hardcore',
    items: [
      'Topsoil and subsoil',
      'Concrete and brick',
      'Stone and aggregate',
      'Sand and gravel',
      'Mixed hardcore from works',
    ],
  },
  {
    icon: Home,
    label: 'Full House Clearances',
    items: [
      'End-of-tenancy clearances',
      'Bereavement property clearances',
      'House moves and downsizes',
      'Partial clearances (one room or type)',
      'Rental void clearances for landlords',
    ],
  },
  {
    icon: Building,
    label: 'Garage, Loft & Outbuildings',
    items: [
      'Garage clearances — tools, boxes, old furniture',
      'Loft clearances — full or partial',
      'Garden shed contents',
      'Storage unit contents',
      'Mixed junk and accumulated items',
    ],
  },
];

const notCollected = [
  'Hazardous chemicals — solvents, paints in bulk, oils',
  'Asbestos or asbestos-containing materials',
  'Clinical or medical waste',
  'Radioactive materials',
  'Explosives or highly flammable substances',
];

export default function WhatWeCollectPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-14">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Blackpool waste collection
          </p>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            What we collect from your property
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl">
            We collect from inside your home, your garden, your garage or your loft. No need to
            move anything beforehand — our team does all the loading.
          </p>
        </div>
      </section>

      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-8">
            Items &amp; waste types we collect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {collected.map(({ icon: Icon, label, items }) => (
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

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl font-extrabold mb-6">
            What we cannot collect
          </h2>
          <div className="bg-base border border-border rounded-xl p-6 max-w-2xl">
            <ul className="space-y-3">
              {notCollected.map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-body">
                  <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-text-muted max-w-xl">
            Not sure? Call us on{' '}
            <a href="tel:01253963109" className="text-brand-orange font-semibold">01253 963109</a>
            {' '}before booking.
          </p>
        </div>
      </section>

      <section className="bg-brand-charcoal py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div>
            <h2 className="text-white text-xl font-extrabold mb-2">
              Got a van and want to drop it off yourself?
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg">
              Our Job Logistics site accepts waste drop-offs — drive in, get weighed, pay on the day.
            </p>
          </div>
          <a
            href="https://www.joblogisticsltd.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Job Logistics Drop-Off <ExternalLink size={14} />
          </a>
        </div>
      </section>

      <section className="bg-base py-12 text-center">
        <h2 className="text-brand-charcoal text-2xl font-extrabold mb-3">Ready to book?</h2>
        <p className="text-text-muted mb-6">Same-day and next-day collection available.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-3 rounded-lg transition-colors"
          >
            Book a collection <ArrowRight size={16} />
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
