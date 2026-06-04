import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blackpoolrecycling.uk'),
  title: {
    default: 'Rubbish Collection Blackpool | We Come to You | Job Logistics Ltd',
    template: '%s | Job Logistics Ltd',
  },
  description:
    'Rubbish removal and waste collection in Blackpool and the Fylde Coast. We come to your property, load everything and take it away. Call 01253 963109.',
  openGraph: {
    siteName: 'Job Logistics Ltd',
    locale: 'en_GB',
    type: 'website',
  },
};

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/what-we-collect', label: 'What We Collect' },
  { href: '/prices', label: 'Prices' },
  { href: '/find-us', label: 'Service Area' },
  { href: '/book', label: 'Book a Collection' },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col font-nunito antialiased">
        <Header />
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-brand-charcoal text-text-on-dark">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NAP */}
            <div>
              <h3 className="text-brand-orange font-bold text-lg mb-4">
                Job Logistics Ltd
              </h3>
              <address className="not-italic space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-brand-orange shrink-0 mt-0.5" />
                  <span>
                    Covering Blackpool &amp; the Fylde Coast<br />
                    Lytham · Bispham · Fleetwood · Thornton<br />
                    Poulton · Kirkham and surrounding areas
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
                    Mon–Fri: 8:00am – 6:00pm<br />
                    Saturday: 8:00am – 4:00pm<br />
                    Sunday: By arrangement
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

            {/* Drop-off callout */}
            <div>
              <h3 className="text-brand-orange font-bold text-lg mb-4">Want to drop it off yourself?</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                If you have a van or trailer and want to drive your waste directly to our facility,
                use Job Logistics Ltd — drive in, get weighed, pay on the day.
              </p>
              <a
                href="https://www.joblogisticsltd.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Job Logistics Drop-Off →
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
