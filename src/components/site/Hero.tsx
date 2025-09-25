import Image from 'next/image';
import { Button } from '@/components/ds/Button';

export function Hero({ locale }: { locale: string }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,_rgba(96,97,126,0.25),_transparent_60%),_radial-gradient(1000px_500px_at_100%_20%,_rgba(219,222,111,0.25),_transparent_60%)]"
      />
      <div className="container-site py-24 lg:py-32 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 id="hero-title" className="text-4xl/tight sm:text-5xl/tight font-bold text-[#60617E]">
            Erigea Loisirs – Le leader du loisir indoor multi-activité en Île-de-France
          </h1>
          <p className="mt-4 text-gray-800 max-w-prose">
            Plus de 1,7 million de visiteurs en 2024 – Une expérience immersive et premium pour
            familles, amis et entreprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-secondary)] px-4 py-2 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]"
              href={`/${locale}#brands-title`}
            >
              Découvrir nos activités
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-[var(--color-secondary)] hover:bg-[var(--pastel-1)] hover:shadow"
              href={`/${locale}/press`}
            >
              Voir nos communiqués de presse
            </a>
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-[var(--pastel-1)]">
          <Image
            src="/assets/placeholders/hero.jpg"
            alt="Illustration placeholder"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
