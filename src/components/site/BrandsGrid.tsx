import Image from 'next/image';

const brands = ['Smile World', 'Laser World', 'Padel World', 'Climb World'];

export function BrandsGrid() {
  return (
    <section aria-labelledby="brands-title" className="container-site py-12">
      <h3 id="brands-title" className="text-xl font-semibold">
        Nos marques
      </h3>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {brands.map((name) => (
          <div key={name} className="rounded-lg border border-neutral-200 p-4 text-center bg-white">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[160px] bg-neutral-100 rounded-md overflow-hidden">
              <Image
                src="/assets/placeholders/brand.jpg"
                alt={`Logo placeholder ${name}`}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
