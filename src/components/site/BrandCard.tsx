import Image from 'next/image';

type BrandCardProps = {
  name: string;
  onClick: () => void;
  isActive?: boolean;
  thumbnailUrl?: string;
};

export function BrandCard({ name, onClick, isActive, thumbnailUrl }: BrandCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!isActive}
      className={`w-full text-left rounded-lg border ${
        isActive ? 'border-[#60617E]' : 'border-neutral-200'
      } p-4 bg-white hover:shadow-xl hover:-translate-y-1 transition-all`}
    >
      <div className="relative aspect-[4/3] w-full bg-neutral-100 rounded-md overflow-hidden">
        <Image
          src={thumbnailUrl || '/assets/placeholders/brand.jpg'}
          alt={`Logo ${name}`}
          fill
          className="object-cover"
          unoptimized={thumbnailUrl?.includes('cdn.webindiz.fr')}
        />
      </div>
      <p className="mt-3 text-sm font-medium text-[#60617E]">{name}</p>
    </button>
  );
}
