import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPressBySlug, listPress } from '@/lib/press';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

export async function generateStaticParams() {
  const items = listPress();
  return items.map((p) => ({ slug: p.slug, locale: p.lang ?? 'fr' }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const doc = getPressBySlug(slug);
  if (!doc) return {};
  const fm = doc.frontmatter;
  const title = fm.title;
  const description = fm.excerpt;
  const ogUrl = new URL('/api/og', 'https://www.erigea-loisirs.example');
  ogUrl.searchParams.set('title', title);
  ogUrl.searchParams.set('date', fm.datePublished);
  const canonical = `https://www.erigea-loisirs.example/${locale}/press/${fm.slug}`;
  return {
    title: `${title}`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogUrl.toString(), width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function PressDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const doc = getPressBySlug(slug);
  if (!doc) return notFound();
  const processed = await remark().use(html).process(doc.content);
  const contentHtml = processed.toString();
  const fm = doc.frontmatter;
  return (
    <article className="container-site py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold">{fm.title}</h1>
        <p className="mt-2 text-sm text-neutral-600">
          {new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
            new Date(fm.datePublished)
          )}
        </p>
      </header>
      {fm.hero && (
        <div className="relative mt-8 aspect-[16/9] rounded-xl overflow-hidden bg-neutral-100">
          <Image src={fm.hero} alt="Image de couverture" fill className="object-cover" />
        </div>
      )}
      <div className="prose prose-neutral mt-8" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: fm.title,
            datePublished: fm.datePublished,
            dateModified: fm.datePublished,
            image: fm.hero ? [fm.hero] : undefined,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.erigea-loisirs.example/${locale}/press/${fm.slug}`,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Erigea Loisirs',
            },
          }),
        }}
      />
      {fm.attachment && (
        <p className="mt-6">
          <a className="underline" href={fm.attachment}>
            Télécharger la pièce jointe
          </a>
        </p>
      )}
    </article>
  );
}
