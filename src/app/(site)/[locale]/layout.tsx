import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ds/Navbar';
import { Footer } from '@/components/ds/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Erigea Loisirs — Corporate',
    template: '%s — Erigea Loisirs',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
      >
        Aller au contenu
      </a>
      <Navbar locale={locale} />
      <main id="content" className="min-h-dvh">
        {children}
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Erigea Loisirs',
            url: 'https://www.erigea-loisirs.example',
            sameAs: [],
            logo: 'https://www.erigea-loisirs.example/assets/placeholders/brand.jpg',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Erigea Loisirs',
            url: 'https://www.erigea-loisirs.example',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.erigea-loisirs.example/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
}
