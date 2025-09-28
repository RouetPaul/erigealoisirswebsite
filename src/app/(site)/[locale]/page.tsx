import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Kpis } from '@/components/site/Kpis';
// import { OfferGrid } from '@/components/site/OfferGrid';
import { Strategy } from '@/components/site/Strategy';
import { Infrastructures } from '@/components/site/Infrastructures';
import { Testimonials } from '@/components/site/Testimonials';
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
          { label: 'clients / an', value: 950_000, icon: '👨‍👩‍👧' },
          { label: 'chiffre d’affaires', value: 14_000_000, suffix: '€', icon: '💶' },
          { label: 'centres ouverts', value: 12, icon: '🏢' },
          { label: 'centres en ouverture', value: 6, icon: '🚧' },
          { label: 'collaborateurs impliqués', value: 150, icon: '👥' },
          {
            label: 'Experts intégrés de A à Z par projet',
            textValue: 'Experts intégrés',
            icon: '👷‍♂️',
          },
        ]}
      />
      {/* Offre multi-activité retirée */}
      <LeaderQuote />
      <Strategy />
      <Infrastructures />
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
