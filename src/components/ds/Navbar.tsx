'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  const links = (
    <>
      <Link href={`/${locale}#about`} className="hover:underline" onClick={close}>
        À propos
      </Link>
      <Link href={`/${locale}#kpis`} className="hover:underline" onClick={close}>
        Chiffres clés
      </Link>
      <Link href={`/${locale}/press`} className="hover:underline" onClick={close}>
        Presse
      </Link>
      <Link href={`/${locale}#contact`} className="hover:underline" onClick={close}>
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200 relative">
      <div className="container-site flex items-center justify-between h-14">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2"
          aria-label="Accueil Erigea Loisirs"
        >
          <Image
            src="https://cdn.webindiz.fr/6717c9d7-7cef-474b-9277-4e0998d47d9c.png"
            alt="Erigea Loisirs"
            width={132}
            height={28}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-6">
          {links}
        </nav>
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={toggle}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute inset-x-0 top-full bg-white border-b border-neutral-200 shadow-sm"
          >
            <div className="container-site py-3 flex flex-col gap-3">{links}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
