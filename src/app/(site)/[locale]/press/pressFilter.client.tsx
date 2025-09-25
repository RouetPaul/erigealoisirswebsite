'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { PressFrontmatter } from '@/lib/press';

export default function ClientFilter({
  items,
  locale,
}: {
  items: PressFrontmatter[];
  locale: string;
}) {
  const [tag, setTag] = useState<string>('all');
  const tags = useMemo(() => Array.from(new Set(items.flatMap((i) => i.tags ?? []))), [items]);
  const filtered = useMemo(
    () => (tag === 'all' ? items : items.filter((i) => i.tags?.includes(tag))),
    [items, tag]
  );

  return (
    <div className="mt-6">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setTag('all')}
          className={`px-3 py-1 rounded border ${tag === 'all' ? 'bg-black text-white' : 'bg-white'}`}
        >
          Tous
        </button>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-3 py-1 rounded border ${tag === t ? 'bg-black text-white' : 'bg-white'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.slug} className="rounded-xl border border-neutral-200 bg-white p-4">
            <h2 className="text-lg font-semibold">
              <Link href={`/${locale}/press/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              {new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(
                new Date(p.datePublished)
              )}
            </p>
            <p className="mt-3 text-sm text-neutral-700 line-clamp-3">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
