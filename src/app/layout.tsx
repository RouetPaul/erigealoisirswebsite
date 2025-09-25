import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ConsentBanner } from '@/components/site/Consent.client';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Erigea Loisirs — Corporate',
    template: '%s — Erigea Loisirs',
  },
  description: 'Site institutionnel Erigea Loisirs. Offres multi-activités, chiffres clés, presse.',
  metadataBase: new URL('https://www.erigea-loisirs.example'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Erigea Loisirs — Corporate',
    description: 'Offres multi-activités, chiffres clés, presse.',
    url: 'https://www.erigea-loisirs.example/',
    siteName: 'Erigea Loisirs',
    images: [
      {
        url: 'https://www.erigea-loisirs.example/api/og?title=Erigea%20Loisirs',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erigea Loisirs — Corporate',
    description: 'Offres multi-activités, chiffres clés, presse.',
    images: ['https://www.erigea-loisirs.example/api/og?title=Erigea%20Loisirs'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
