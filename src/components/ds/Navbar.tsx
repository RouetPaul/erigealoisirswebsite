import Link from 'next/link';

export function Navbar({ locale }: { locale: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="container-site flex items-center justify-between h-14">
        <Link href={`/${locale}`} className="font-semibold">
          Erigea Loisirs
        </Link>
        <nav aria-label="Navigation principale" className="flex items-center gap-6">
          <Link href={`/${locale}#about`} className="hover:underline">
            À propos
          </Link>
          <Link href={`/${locale}#kpis`} className="hover:underline">
            Chiffres clés
          </Link>
          <Link href={`/${locale}#offer`} className="hover:underline">
            Offre
          </Link>
          <Link href={`/${locale}/press`} className="hover:underline">
            Presse
          </Link>
          <Link href={`/${locale}#contact`} className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
