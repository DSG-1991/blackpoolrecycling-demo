import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle, Star, Truck, Leaf, Sofa, Hammer,
  MonitorSmartphone, Mountain, Phone, Clock, Calendar,
  ShieldCheck, ThumbsUp, ArrowRight, X, MapPin,
} from 'lucide-react';
import AnimateIn from '@/app/components/AnimateIn';
import CountUp from '@/app/components/CountUp';
import Accordion from '@/app/components/Accordion';

export const metadata: Metadata = {
  title: 'Rubbish Collection Blackpool | We Come to You | Job Logistics',
  description: 'Rubbish removal and waste collection in Blackpool. We come to your property, load everything and take it away. No van needed. Call 01253 963109.',
};

const collectTypes = [
  { icon: Truck, label: 'Household Waste', desc: 'General household rubbish cleared from inside your property — we do all the loading.', featured: true },
  { icon: Leaf, label: 'Garden & Green Waste', desc: 'Grass cuttings, branches, soil, hedge trimmings — collected from your garden directly.' },
  { icon: Sofa, label: 'Furniture & Bulky Items', desc: 'Sofas, mattresses, white goods — we carry them out so you don\'t have to.' },
  { icon: Hammer, label: 'DIY & Renovation Waste', desc: 'Timber, plasterboard, tiles, rubble from home projects — we clear it all in one go.' },
  { icon: MonitorSmartphone, label: 'Electrical & Appliances', desc: 'TVs, washing machines, fridges — collected and responsibly recycled.' },
  { icon: Mountain, label: 'Full Property Clearances', desc: 'Moving out, bereavement clearance, rental void — full or partial, we handle it.' },
];

const intentCards = [
  { label: 'House clearance', sub: 'Partial or full property — we load and remove everything', featured: true },
  { label: 'Garden waste', sub: 'Seasonal clearances, grass, branches, soil' },
  { label: 'Furniture & bulky items', sub: 'Sofas, mattresses, white goods removed from inside' },
  { label: 'DIY & renovation', sub: 'Timber, rubble, tiles — cleared after your project' },
];

const reviews = [
  { name: 'Paul T.', location: 'Blackpool', date: 'March 2026', text: 'Brilliant service. Called at 9am, they were with me by midday. Cleared a full garage in under an hour. No fuss, fair price. Will definitely use again.' },
  { name: 'Sarah M.', location: 'Lytham St Annes', date: 'January 2026', text: 'Used them to clear my late mum\'s house. The team were respectful and worked quickly. Took everything away in one visit. Would highly recommend.' },
  { name: 'Dave H.', location: 'Bispham', date: 'February 2026', text: 'Way easier than hiring a skip. They came next day, loaded everything themselves, gone in 45 minutes. Straightforward pricing too.' },
];

const faqs = [
  { q: 'Do I need to put the waste outside first?', a: 'No — our team can collect from inside your property, from the garden, from a garage or loft. There\'s no need to move anything yourself before we arrive. Just show us what needs to go.' },
  { q: 'How quickly can you come?', a: 'We offer same-day and next-day collection for most jobs in Blackpool and the Fylde Coast. For larger clearances we may schedule for the following day. Call us on 01253 963109 for availability.' },
  { q: 'How is the price worked out?', a: 'Our collection pricing is based on how long the job takes and how much of our vehicle space your waste fills. We give you a firm price before we start — no surprises at the end. See our Prices page for guide rates.' },
  { q: 'Can you take everything in one visit?', a: 'For most household clearances, yes. We bring a large vehicle and an experienced team. If a job is exceptionally large we\'ll tell you upfront. We aim to complete every job in a single visit.' },
  { q: 'Do I need to be home while you work?', a: 'You or another adult should be present when we arrive and when we finish so we can confirm what\'s been taken and take payment. For most jobs the team can work while you get on with other things.' },
];

const skipProblems = [
  'You still have to load it yourself', 'Permit required on most roads (£50–£100)',
  'Sits outside for days or weeks', 'Can\'t take certain waste types',
  'Charged even if you don\'t fill it', 'Extra charge if collected late',
];
const ourAdvantages = [
  'We do all the loading — you do nothing', 'No permit needed — no council paperwork',
  'In and out in one visit, waste gone the same day', 'All waste types accepted',
  'You only pay for what we take', 'Fixed price agreed before we start',
];

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Job Logistics Waste Collection', url: 'https://blackpoolrecycling.uk',
  telephone: '+441253963109',
  address: { '@type': 'PostalAddress', addressLocality: 'Blackpool', addressRegion: 'Lancashire', addressCountry: 'GB' },
  areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 53.8142, longitude: -3.0503 }, geoRadius: '15000' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '381' },
};
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO — mount animations, staggered */}
      <section className="bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0" style={{ opacity: 0.08, backgroundImage: 'repeating-linear-gradient(45deg, #F6A500 0, #F6A500 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <AnimateIn type="slide-left" className="inline-block mb-5">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase">
              Waste collection · Blackpool &amp; Fylde Coast
            </p>
          </AnimateIn>
          <AnimateIn delay={100} className="block">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-5 max-w-3xl">
              Got a pile of waste you need gone — without the skip, the permit or the van?
            </h1>
          </AnimateIn>
          <AnimateIn delay={250} className="block mb-8">
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              We come to your property, carry everything out ourselves, and take it away in one visit.
              <strong className="text-brand-orange"> No van. No heavy lifting. No rubbish sat on your drive for two weeks.</strong>
            </p>
          </AnimateIn>
          <AnimateIn delay={400} className="flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="pulse-cta inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-7 py-4 rounded-lg transition-colors duration-200 text-base">
              Book a collection <ArrowRight size={18} />
            </Link>
            <a href="tel:01253963109" className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200 text-base">
              <Phone size={16} /> Call 01253 963109
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── TRUST BAR — scroll stagger */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: Star, label: null, countTarget: 381, countSuffix: ' Google reviews' },
              { icon: ShieldCheck, label: 'Licensed waste carrier' },
              { icon: Calendar, label: 'Same-day & next-day available' },
              { icon: ThumbsUp, label: '100% recommend on Facebook' },
              { icon: CheckCircle, label: 'All waste responsibly recycled' },
            ].map(({ icon: Icon, label, countTarget, countSuffix }, i) => (
              <AnimateIn key={label ?? 'reviews'} delay={i * 80} className="flex items-center gap-2 text-sm font-semibold text-text-body">
                <Icon size={16} className="text-brand-orange" />
                {countTarget
                  ? <><CountUp target={countTarget} duration={1500} />{countSuffix}</>
                  : label}
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTENT ROUTING — stagger cards */}
      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-2">What needs clearing?</h2>
            <p className="text-text-muted">Point us to it — inside the house, in the garden, up in the loft. We handle the rest.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {intentCards.map((card, i) => (
              <AnimateIn key={card.label} delay={i * 100}>
                <Link href="/what-we-collect"
                  className={`group block bg-white border border-border rounded-xl card-lift hover:border-brand-orange ${card.featured ? 'p-6' : 'p-5'}`}>
                  <div className={`rounded-full bg-brand-orange/10 flex items-center justify-center mb-3 group-hover:bg-brand-orange/20 transition-colors duration-200 ${card.featured ? 'w-10 h-10' : 'w-8 h-8'}`}>
                    <CheckCircle size={card.featured ? 18 : 15} className="text-brand-orange" />
                  </div>
                  <p className={`font-bold text-text-primary mb-1 ${card.featured ? 'text-base' : 'text-sm'}`}>{card.label}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{card.sub}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE COLLECT — broken bento grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2">What we collect</p>
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3">Almost anything — from almost anywhere on your property</h2>
            <p className="text-text-muted max-w-xl mx-auto">Our team handles the carrying, the loading and the disposal. You just show us what needs to go.</p>
          </AnimateIn>
          {/* Bento: first card spans 2 cols, breaks uniform grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {collectTypes.map(({ icon: Icon, label, desc, featured }, i) => (
              <AnimateIn key={label} delay={i * 80} className={featured ? 'lg:col-span-2' : 'lg:col-span-1'}>
                <div className="h-full bg-base rounded-xl p-5 border border-border card-lift hover:border-brand-orange/40">
                  <div className={`rounded-lg bg-brand-orange flex items-center justify-center mb-3 ${featured ? 'w-12 h-12' : 'w-10 h-10'}`}>
                    <Icon size={featured ? 24 : 20} className="text-white" />
                  </div>
                  <h3 className={`font-bold text-text-primary mb-1 ${featured ? 'text-lg' : 'text-base'}`}>{label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/what-we-collect" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline">
              Full list of what we collect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — stagger steps */}
      <section className="bg-surface-warm py-16 border-l-4 border-brand-orange/20">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-12">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2">How it works</p>
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3">Three steps. You do nothing after the call.</h2>
            <p className="text-text-muted max-w-lg mx-auto">Most jobs booked, collected and cleared within 24 hours. Same-day available.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Book or call', desc: 'Tell us what you need collected and where. We give you a firm price and a time slot — same day or next day for most jobs.' },
              { step: '02', title: 'We arrive & load', desc: 'Our team turns up on time, collects from wherever the waste is — inside, outside, garage, loft — and loads it all into our vehicle.' },
              { step: '03', title: 'Waste gone, job done', desc: 'We take everything away and dispose of it responsibly. You pay on completion — card or cash. No paperwork, no permit, no skip sat on your drive.' },
            ].map(({ step, title, desc }, i) => (
              <AnimateIn key={step} delay={i * 120}>
                <div className="text-[4rem] font-extrabold leading-none mb-2 select-none" style={{ color: 'rgba(246,165,0,0.25)' }}>{step}</div>
                <h3 className="font-extrabold text-xl text-brand-charcoal mb-2">{title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{desc}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VS SKIP HIRE — charcoal contrast section */}
      <section className="bg-brand-charcoal py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2">Why not a skip?</p>
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3">A skip still makes you do the work. We don&apos;t.</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">You pay for a skip, fill it yourself, wait days for collection, and hope the council doesn&apos;t fine you for the permit. Or call us and it&apos;s gone by tomorrow.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <AnimateIn>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-zinc-400 font-bold text-sm mb-4 uppercase tracking-wide">Skip hire — the problems</p>
                <ul className="space-y-2">
                  {skipProblems.map(item => (
                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm"><X size={14} className="text-red-400 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-6">
                <p className="text-brand-orange font-bold text-sm mb-4 uppercase tracking-wide">Job Logistics collection — the difference</p>
                <ul className="space-y-2">
                  {ourAdvantages.map(item => (
                    <li key={item} className="flex items-center gap-2 text-white text-sm"><CheckCircle size={14} className="text-brand-orange shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — stagger */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2">Google reviews</p>
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-2">What Blackpool says about us</h2>
            <p className="text-text-muted">381 reviews · 100% recommend on Facebook</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <AnimateIn key={r.name} delay={i * 150}>
                <div className="h-full bg-base border border-border rounded-xl p-5 card-lift">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-brand-orange fill-brand-orange" />)}
                  </div>
                  <p className="text-text-body text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="font-semibold text-text-primary">{r.name}, {r.location}</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-text-muted">Reviews sourced from Google. Original source of each review is Google.</p>
        </div>
      </section>

      {/* ── PRICING — table fades as unit */}
      <section className="bg-base py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <p className="text-brand-orange text-xs font-bold tracking-[0.15em] uppercase mb-2">Pricing</p>
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold mb-3">Priced by load — agreed before we start</h2>
            <p className="text-text-muted max-w-lg mx-auto">No hidden charges. No paying for space you don&apos;t use. We quote before we begin and stick to it.</p>
          </AnimateIn>
          <AnimateIn className="max-w-xl mx-auto bg-white border border-border rounded-xl overflow-hidden">
            <div className="bg-brand-charcoal px-5 py-3">
              <p className="text-white font-bold text-sm">Guide prices — collection from your property</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Small load', 'Car boot equivalent', '£72'],
                  ['Medium load', 'Half-van equivalent', '£145'],
                  ['Large load', 'Full-van equivalent', '£220'],
                  ['Full clearance', 'Maximum load', '£325'],
                ].map(([size, desc, price], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-base'}>
                    <td className="px-5 py-3 font-semibold text-text-primary">{size}</td>
                    <td className="px-3 py-3 text-text-muted">{desc}</td>
                    <td className="px-5 py-3 font-bold text-brand-charcoal text-right">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-3 border-t border-border">
              <Link href="/prices" className="text-brand-orange font-bold text-sm hover:underline inline-flex items-center gap-1">
                Full pricing details <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>
          <p className="text-center mt-4 text-xs text-text-muted">* Guide prices. Final quote given before work begins.</p>
        </div>
      </section>

      {/* ── FAQ — animated accordion */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <AnimateIn className="text-center mb-10">
            <h2 className="text-brand-charcoal text-2xl sm:text-3xl font-extrabold">Common questions</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <Accordion items={faqs} />
          </AnimateIn>
        </div>
      </section>

      {/* ── DROP-OFF CROSS-LINK */}
      <section className="bg-base py-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateIn>
            <div className="bg-white border border-border rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 justify-between card-lift">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Prefer to drop your waste off yourself?</h3>
                  <p className="text-text-body text-sm">Our recycling centre at Job Logistics accepts household and commercial waste drop-offs — drive in, get weighed, pay and go.</p>
                </div>
              </div>
              <a href="https://www.joblogisticsltd.co.uk" target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-brand-charcoal hover:bg-black text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 text-sm">
                Job Logistics Drop-Off Site →
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA */}
      <section className="bg-brand-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-3">Every day you wait, the pile doesn&apos;t shrink itself.</h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">One call and it&apos;s sorted. Same-day and next-day collection across Blackpool and the Fylde Coast — no van, no permit, no heavy lifting.</p>
          </AnimateIn>
          <AnimateIn delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-base">
              Book a collection <ArrowRight size={18} />
            </Link>
            <a href="tel:01253963109" className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base">
              <Phone size={16} /> 01253 963109
            </a>
          </AnimateIn>
          <AnimateIn delay={300}>
            <p className="mt-6 text-xs text-zinc-500">Covering Blackpool · Lytham St Annes · Bispham · Fleetwood · Thornton · Poulton</p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
