import Link from 'next/link';
import { listPress } from '@/lib/press';
import ClientFilter from './pressFilter.client';

export default async function PressList({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const items = listPress(locale);
  return (
    <section className="container-site py-16">
      <h1 className="text-3xl font-semibold">Communiqués de presse</h1>
      <ClientFilter items={items} locale={locale} />
    </section>
  );
}
