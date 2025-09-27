import Image from 'next/image';
import { Button } from '@/components/ds/Button';

export function Hero({ locale }: { locale: string }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div className="container-site py-24 lg:py-32 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 id="hero-title" className="text-4xl/tight sm:text-5xl/tight font-bold text-[#60617E]">
            Erigea Loisirs – Le leader du loisir indoor multi-activité en Île-de-France
          </h1>
          <p className="mt-4 text-gray-800 max-w-prose">
            Promotion | Patrimoine | Loisirs-CHR. Groupe multi-activités ancré en Île-de-France,
            structuré et résolument orienté client.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-secondary)] px-5 py-3 text-sm font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]"
              href={`/${locale}#about`}
            >
              Découvrir le Groupe
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-[var(--color-secondary)] hover:bg-[var(--pastel-1)] hover:shadow"
              href={`/${locale}/press`}
            >
              Communiqués de presse
            </a>
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-[var(--pastel-1)]">
          <Image
            src="https://cdn.prod.website-files.com/6814c438f30142dd9c692fa2/68825470074376fd66ed869b_6878d972e61dc98d823024fe_LECOURBE-3.avif"
            alt="Smile World — multi-activités immersives"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#60617E]/50" aria-hidden />
        </div>
      </div>
    </section>
  );
}
