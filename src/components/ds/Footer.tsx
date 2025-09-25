import Link from 'next/link';

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="mt-20 bg-[#60617E] text-white">
      <div className="container-site py-8 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} Erigea Loisirs</p>
        <div className="flex gap-4">
          <Link
            className="underline decoration-[var(--color-primary)] decoration-2 underline-offset-4"
            href={`/${locale}/press`}
          >
            Presse
          </Link>
          <a
            className="underline decoration-[var(--color-primary)] decoration-2 underline-offset-4"
            href="#"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
