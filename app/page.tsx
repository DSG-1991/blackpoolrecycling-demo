import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Star,
  Truck,
  Leaf,
  Sofa,
  Hammer,
  MonitorSmartphone,
  Mountain,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  ThumbsUp,
  ArrowRight,
  X,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recycling Centre Blackpool | Household & Garden Waste Drop-Off',
  description:
    'Licensed recycling centre in Blackpool. Drop off household, garden & bulky waste. Weight-based pricing. Open Mon–Sat 9–4. Unit 1 Dickies Lane South FY4 5LG.',
};

const wasteTypes = [
  {
    icon: Truck,
    label: 'Household Waste',
    desc: 'General household rubbish and mixed waste — clear it all in one visit.',
  },
  {
    icon: Leaf,
    label: 'Garden & Green Waste',
    desc: 'Grass cuttings, branches, soil, hedge trimmings — the lot.',
  },
  {
    icon: Sofa,
    label: 'Furniture & Bulky Items',
    desc: 'Sofas, mattresses, white goods, large items the bin men won\'t touch.',
  },
  {
    icon: Hammer,
    label: 'DIY & Renovation Waste',
    desc: 'Plasterboard, timber, tiles, rubble from home improvement projects.',
  },
  {
    icon: MonitorSmartphone,
    label: 'Electrical & Electronics',
    desc: 'TVs, laptops, fridges, washing machines — responsibly recycled.',
  },
  {
    icon: Mountain,
    label: 'Soil & Hardcore',
    desc: 'Soil, bricks, concrete and stone — weighed and priced fairly.',
  },
];

const intentCards = [
  { label: 'Household clearance', sub: 'Decluttering, moving or general clear-out' },
  { label: 'Garden waste', sub: 'Grass, branches, soil and green waste' },
  { label: 'Bulky items', sub: 'Furniture, mattresses and white goods' },
  { label: 'DIY & renovation', sub: 'Timber, plaster, tiles, rubble' },
];

const reviews = [
  {
    name: 'Paul T.',
    location: 'Blackpool',
    date: 'March 2026',
    text: 'Brilliant service. Drove in with a full van, was weighed in and out in under 20 minutes. No fuss, no booking, fair price. Will be back.',
  },
  {
    name: 'Sarah M.',
    location: 'Lytham St Annes',
    date: 'January 2026',
    text: 'Cleared out my late mum\'s house and these lads were great. Took absolutely everything, friendly staff. Would recommend to anyone in the area.',
  },
  {
    name: 'Dave H.',
    location: 'Bispham',
    date: 'February 2026',
    text: 'Way better than messing around at the council tip. These take everything, pricing is dead straightforward. Saved me two trips.',
  },
];

const faqs = [
  {
    q: 'Do I need to book in advance?',
    a: 'No booking is needed. Just drive in during opening hours — Monday to Saturday, 9am to 4pm. If you have a particularly large load, a quick call beforehand is helpful but not required.',
  },
  {
    q: 'What waste can\'t you accept?',
    a: 'We cannot accept hazardous liquids (oils, solvents, paints in bulk), asbestos, or clinical waste. For trade and commercial volumes, please use our sister site at Job Logistics Ltd. Everything else — just ask when you arrive.',
  },
  {
    q: 'How does the pricing work?',
    a: 'All waste is weighed on arrival. You pay based on the weight and type of material. Pricing is clearly listed on our Prices page. No hidden charges, no surprises — the final figure is agreed before you leave.',
  },
  {
    q: 'Can I bring trade or commercial waste?',
    a: 'This recycling centre is set up for domestic and small-volume DIY waste. For builders, contractors, landlords and commercial customers, our partner site Job Logistics Ltd handles trade volumes — visit joblogisticsltd.co.uk for details.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open Monday to Saturday, 9:00am to 4:00pm. We are closed on Sundays and Bank Holidays. Call ahead on 01253 963109 if you\'re unsure.',
  },
];

const councilCannotTake = [
  'Commercial & trade waste',
  'Landlord clearance waste',
  'Large builders rubble loads',
  'Residents from outside Blackpool',
  'Loads without prior permit',
  'Tyres and vehicle parts',
];

const weAccept = [
  'All Blackpool & Fylde residents',
  'Household & garden clearances',
  'DIY and renovation waste',
  'Furniture and white goods',
  'Soil, hardcore and rubble',
  'Electronics and appliances',
];

// JSON-LD schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RecyclingCenter',
  name: 'Job Logistics Recycling Centre',
  url: 'https://blackpoolrecycling.uk',
  telephone: '+441253963109',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 1, Dickies Lane South',
    addressLocality: 'Blackpool',
    postalCode: 'FY4 5LG',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.7808,
    longitude: -3.0209,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '381',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── Steps 1-3: Recognition → Pain → Desire (PAS) */}
      <section className="bg-brand-charcoal relative overflow-hidden">
        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F6A500 0, #F6A500 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-5">
            Licensed Recycling Centre · Blackpool FY4 5LG
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-5 max-w-3xl">
            Got waste to shift in Blackpool?
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            The council tip won&apos;t take your builders rubble, your landlord clearance, or a full
            van of garden waste. <strong className="text-white">We will.</strong> Drive in, get
            weighed, pay and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/what-we-accept"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-4 rounded-lg transition-colors text-base"
            >
              See what we accept <ArrowRight size={18} />
            </Link>
            <Link
              href="/find-us"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-7 py-4 rounded-lg transition-colors text-base"
            >
              <MapPin size={16} /> Find us &amp; opening hours
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── Step 4: Trust */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: Star, label: '381 Google reviews' },
              { icon: ShieldCheck, label: 'Licensed waste carrier' },
              { icon: Clock, label: 'Open Mon–Sat, 9am–4pm' },
              { icon: ThumbsUp, label: '100% recommend on Facebook' },
              { icon: CheckCircle, label: 'Digital waste tracking' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-semibold text-text-body">
                <Icon size={16} className="text-brand-orange" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INTENT ROUTING ── Step 1 reinforcement: Recognition */}
      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-2 text-center">
            What are you dropping off today?
          </h2>
          <p className="text-text-muted text-center mb-10">
            Drive in during opening hours — no booking needed for any of these.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {intentCards.map(card => (
              <Link
                key={card.label}
                href="/what-we-accept"
                className="group bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-brand-orange transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center mb-3 group-hover:bg-brand-orange/20 transition-colors">
                  <CheckCircle size={16} className="text-brand-orange" />
                </div>
                <p className="font-bold text-text-primary text-sm mb-1">{card.label}</p>
                <p className="text-text-muted text-xs leading-relaxed">{card.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WASTE TYPES ── Step 5: Belief */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2 text-center">
            What we accept
          </p>
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3 text-center">
            Everything accepted at our Blackpool centre
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-xl mx-auto">
            Weighed, receipted, and responsibly recycled. One centre — no running around.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {wasteTypes.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-base rounded-xl p-5 border border-border hover:border-brand-orange/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center mb-3">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-text-primary mb-1">{label}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/what-we-accept"
              className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline"
            >
              Full list of accepted waste <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── Step 6: Safety */}
      <section className="bg-surface-warm py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2 text-center">
            How it works
          </p>
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3 text-center">
            No fuss. No booking needed.
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-lg mx-auto">
            Three steps, in and out. The whole thing typically takes under 20 minutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Drive in',
                desc: 'Pull up at the entrance. No appointment, no wait. Our team will direct you to the right bay.',
              },
              {
                step: '02',
                title: 'Get weighed',
                desc: 'We weigh your vehicle in and out. You only pay for the actual weight of waste you leave behind.',
              },
              {
                step: '03',
                title: 'Pay & go',
                desc: 'Simple payment on the day — card or cash. You get a digital receipt. Job done.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-6xl font-extrabold text-brand-orange/15 leading-none mb-2 select-none">
                  {step}
                </div>
                <h3 className="font-extrabold text-xl text-brand-charcoal mb-2">{title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COUNCIL TIP COMPARISON ── Steps 5-6: Belief + Safety */}
      <section className="bg-brand-charcoal py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2 text-center">
            Why choose us
          </p>
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3 text-center">
            We take what the council tip won&apos;t
          </h2>
          <p className="text-zinc-400 text-center mb-10 max-w-xl mx-auto">
            Blackpool&apos;s council HWRC on Bristol Avenue can&apos;t accept a lot of what
            households and DIYers actually need to shift.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Council tip */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-zinc-400 font-bold text-sm mb-4 uppercase tracking-wide">
                Council tip — won&apos;t take
              </p>
              <ul className="space-y-2">
                {councilCannotTake.map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <X size={14} className="text-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Us */}
            <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-6">
              <p className="text-brand-orange font-bold text-sm mb-4 uppercase tracking-wide">
                Job Logistics Recycling — we accept
              </p>
              <ul className="space-y-2">
                {weAccept.map(item => (
                  <li key={item} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle size={14} className="text-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. REVIEWS ── Steps 4-5: Trust + Belief */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2 text-center">
            Google reviews
          </p>
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-2 text-center">
            What Blackpool says about us
          </h2>
          <p className="text-text-muted text-center mb-10">
            381 reviews · 100% recommend on Facebook
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map(r => (
              <div
                key={r.name}
                className="bg-base border border-border rounded-xl p-5"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
                <p className="text-text-body text-sm leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span className="font-semibold text-text-primary">{r.name}, {r.location}</span>
                  <span>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-text-muted">
            Reviews sourced from Google. Original source of each review is Google.
          </p>
        </div>
      </section>

      {/* ── 8. PRICING TEASER ── Step 8: Logic */}
      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2 text-center">
            Pricing
          </p>
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3 text-center">
            Simple, transparent, weight-based
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-lg mx-auto">
            No hidden charges. You pay for the exact weight of waste you leave. Prices confirmed
            before you pay.
          </p>
          <div className="max-w-xl mx-auto bg-white border border-border rounded-xl overflow-hidden">
            <div className="bg-brand-charcoal px-5 py-3">
              <p className="text-white font-bold text-sm">Load size guide (approximate)</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Small car boot load', '~15 minutes', '£72'],
                  ['Half-van / transit load', '~30 minutes', '£145'],
                  ['Full-van load', '~45 minutes', '£220'],
                  ['Full load (up to 60 min)', '~60 minutes', '£325'],
                  ['Soil & hardcore (per tonne)', '—', 'From £120'],
                  ['Plasterboard (specialist)', '—', '£295'],
                ].map(([size, time, price], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-base'}>
                    <td className="px-5 py-3 text-text-body">{size}</td>
                    <td className="px-3 py-3 text-text-muted">{time}</td>
                    <td className="px-5 py-3 font-bold text-brand-charcoal text-right">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-3 border-t border-border">
              <Link
                href="/prices"
                className="text-brand-orange font-bold text-sm hover:underline inline-flex items-center gap-1"
              >
                Full pricing page <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <p className="text-center mt-4 text-xs text-text-muted">
            * Prices are a guide. Final cost is based on exact weight at the weighbridge.
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ── Steps 6-8: Safety → Logic */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-2">
            {faqs.map(faq => (
              <details
                key={faq.q}
                className="group bg-base border border-border rounded-xl"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-bold text-text-primary text-sm list-none">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="text-brand-orange shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-4 text-text-body text-sm leading-relaxed border-t border-border pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── Step 9: Decision */}
      <section className="bg-brand-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to drop off your waste?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            No booking needed. Just turn up Monday to Saturday, 9am–4pm. Or book ahead if you
            prefer — either way, we&apos;ll sort it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Book a drop-off <ArrowRight size={18} />
            </Link>
            <a
              href="tel:01253963109"
              className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              <Phone size={16} /> 01253 963109
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            Unit 1, Dickies Lane South, Blackpool FY4 5LG · Mon–Sat 9am–4pm
          </p>
        </div>
      </section>
    </>
  );
}
