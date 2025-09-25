import Image from 'next/image';
import { Button } from '@/components/ds/Button';
import { motion } from 'framer-motion';

type BrandDetailProps = {
  name: string;
  description: string;
  centers?: string[];
  onClose: () => void;
};

export function BrandDetail({ name, description, centers = [], onClose }: BrandDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-neutral-200 bg-white p-6"
      role="region"
      aria-label={`Détails ${name}`}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="mt-3 text-neutral-700 whitespace-pre-line">{description}</p>
          {centers.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {centers.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
          <div className="mt-6">
            <Button variant="secondary" onClick={onClose}>
              Fermer
            </Button>
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-neutral-100">
          <Image
            src="/assets/placeholders/brand.jpg"
            alt={`Visuel ${name}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
