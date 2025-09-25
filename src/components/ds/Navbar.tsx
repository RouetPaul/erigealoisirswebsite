'use client';
import Link from 'next/link';
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
      <Link href={`/${locale}#offer`} className="hover:underline" onClick={close}>
        Offre
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
        <Link href={`/${locale}`} className="font-semibold">
          Erigea Loisirs
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
          {/* Hamburger icon */}
          <span aria-hidden className="block h-0.5 w-5 bg-neutral-800" />
          <span aria-hidden className="block h-0.5 w-5 bg-neutral-800 mt-1" />
          <span aria-hidden className="block h-0.5 w-5 bg-neutral-800 mt-1" />
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
