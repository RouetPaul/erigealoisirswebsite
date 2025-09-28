import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Kpis } from '@/components/site/Kpis';
// import { OfferGrid } from '@/components/site/OfferGrid';
import { Strategy } from '@/components/site/Strategy';
// import { Testimonials } from '@/components/site/Testimonials';
import { MapStatic } from '@/components/site/Map';
import { Contact } from '@/components/site/Contact';
import { BrandsSection } from '@/components/site/BrandsSection';
import { PressPreview } from '@/components/site/PressPreview';
import { supportedLocales } from '@/lib/i18n';
import { LeaderQuote } from '@/components/site/LeaderQuote';
import { Pillars } from '@/components/site/Pillars';

export default async function Landing({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div>
      <Hero locale={locale} />

      <About />
      <BrandsSection />
      <Pillars />
      <Kpis
        items={[
          { label: 'clients / an', value: 950_000 },
          { label: 'chiffre d’affaires', value: 14_000_000, suffix: '€' },
          { label: 'centres ouverts', value: 12 },
          { label: 'centres en ouverture', value: 6 },
          { label: 'collaborateurs impliqués', value: 150 },
          { label: 'Experts intégrés de A à Z par projet', textValue: 'Experts intégrés' },
        ]}
        infraItems={[
          { label: 'pistes de bowling', value: 60 },
          { label: 'laser games', value: 11 },
          { label: 'karaokés', value: 20 },
          { label: 'escape game (1000 m² Prison Island)', value: 1 },
          { label: 'karting électrique indoor', value: 1 },
          { label: 'jeux d’arcade', value: 200 },
          { label: 'trampoline park', value: 1 },
          { label: 'salles de séminaires', value: 12 },
          { label: 'quiz rooms', value: 3 },
          { label: 'salles de concerts', value: 4 },
          { label: 'billards', value: 35 },
          { label: 'pistes de padel', value: 7 },
        ]}
      />
      {/* Offre multi-activité retirée */}
      <LeaderQuote />
      <Strategy />
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
