import Image from 'next/image';

type BrandCardProps = {
  name: string;
  onClick: () => void;
  isActive?: boolean;
};

export function BrandCard({ name, onClick, isActive }: BrandCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!isActive}
      className={`text-left rounded-lg border ${
        isActive ? 'border-black' : 'border-neutral-200'
      } p-4 bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black transition-shadow`}
    >
      <div className="relative mx-auto aspect-[4/3] w-full max-w-[200px] bg-neutral-100 rounded-md overflow-hidden">
        <Image
          src="/assets/placeholders/brand.jpg"
          alt={`Logo ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-sm font-medium">{name}</p>
    </button>
  );
}
