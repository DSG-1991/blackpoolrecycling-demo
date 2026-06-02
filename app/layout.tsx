import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blackpoolrecycling.uk'),
  title: {
    default: 'Recycling Centre Blackpool | Household & Garden Waste Drop-Off',
    template: '%s | Blackpool Recycling Centre',
  },
  description:
    'Licensed recycling centre in Blackpool. Drop off household, garden & bulky waste. Weight-based pricing. Open Mon–Sat 9–4. Unit 1 Dickies Lane South FY4 5LG.',
  openGraph: {
    siteName: 'Job Logistics Recycling Centre',
    locale: 'en_GB',
    type: 'website',
  },
};

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/what-we-accept', label: 'What We Accept' },
  { href: '/prices', label: 'Prices' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/book', label: 'Book a Drop-Off' },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col font-barlow antialiased">
        <Header />
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-brand-charcoal text-text-on-dark">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NAP */}
            <div>
              <h3 className="text-brand-orange font-bold text-lg mb-4">
                Job Logistics Recycling Centre
              </h3>
              <address className="not-italic space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <span>
                    Unit 1, Dickies Lane South<br />
                    Blackpool<br />
                    FY4 5LG
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-brand-orange shrink-0" />
                  <a href="tel:01253963109" className="hover:text-brand-orange transition-colors">
                    01253 963109
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <span>
                    Monday – Saturday: 9:00am – 4:00pm<br />
                    Sunday: Closed
                  </span>
                </div>
              </address>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-brand-orange font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-300 hover:text-brand-orange text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://www.joblogisticsltd.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-brand-orange text-sm transition-colors"
                  >
                    Trade & Commercial Waste →
                  </a>
                </li>
              </ul>
            </div>

            {/* Trade callout */}
            <div>
              <h3 className="text-brand-orange font-bold text-lg mb-4">Builder or Contractor?</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Our sister service at Job Logistics handles all trade, commercial and landlord
                waste — the loads the council tip turns away.
              </p>
              <a
                href="https://www.joblogisticsltd.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Job Logistics Trade Site →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
              <p>© 2026 Job Logistics Ltd · Registered in England & Wales</p>
              <p>Licensed Waste Carrier · Environment Agency Registered</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
