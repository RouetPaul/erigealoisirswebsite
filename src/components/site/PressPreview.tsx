import Link from 'next/link';
import { listPress } from '@/lib/press';

export function PressPreview({ locale }: { locale: string }) {
  const items = listPress(locale).slice(0, 3);
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="press-title" className="container-site py-20">
      <div className="flex items-end justify-between">
        <h2 id="press-title" className="text-2xl font-bold text-[#60617E]">
          Communiqués récents
        </h2>
        <Link className="text-sm underline" href={`/${locale}/press`}>
          Tous les communiqués
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-neutral-200 bg-white p-0 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="h-1.5 w-full bg-[#60617E]" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                <Link href={`/${locale}/press/${p.slug}`}>{p.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(
                  new Date(p.datePublished)
                )}
              </p>
              <p className="mt-3 text-sm text-neutral-700 line-clamp-3">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
