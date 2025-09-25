import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Kpis } from '@/components/site/Kpis';
// import { OfferGrid } from '@/components/site/OfferGrid';
import { Strategy } from '@/components/site/Strategy';
import { Testimonials } from '@/components/site/Testimonials';
import { MapStatic } from '@/components/site/Map';
import { Contact } from '@/components/site/Contact';
import { BrandsSection } from '@/components/site/BrandsSection';
import { PressPreview } from '@/components/site/PressPreview';
import { supportedLocales } from '@/lib/i18n';
import { LeaderQuote } from '@/components/site/LeaderQuote';

export default async function Landing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div>
      <Hero locale={locale} />

      <About />
      <BrandsSection />
      <Kpis
        items={[
          { label: 'CA 2025 (run rate)', value: 33_000_000, suffix: '€' },
          { label: 'EBITDA 2025 (run rate)', value: 7_500_000, suffix: '€ (23 % de marge)' },
          { label: 'Établissements ouverts (février 2025)', value: 10 },
          { label: 'Ouvertures 2025 / 2026', value: 8, prefix: '+' },
          { label: 'Collaborateurs', value: 150 },
          { label: 'Marques complémentaires', value: 4 },
        ]}
      />
      {/* Offre multi-activité retirée */}
      <LeaderQuote />
      <Strategy />
      <Testimonials />
      <MapStatic />
      <PressPreview locale={locale} />
      <Contact />
    </div>
  );
}

export async function generateStaticParams() {
  return supportedLocales.map((l) => ({ locale: l }));
}

export const dynamicParams = false;
