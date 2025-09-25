import Link from 'next/link';

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="border-t border-neutral-200 mt-20">
      <div className="container-site py-8 text-sm text-neutral-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Erigea Loisirs</p>
        <div className="flex gap-4">
          <Link href={`/${locale}/press`}>Presse</Link>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
