import Image from 'next/image';

const items = [
  {
    title: 'Smile World',
    desc: 'Complexes multi-activités (bowling, laser game, karaoké, arcade, restauration).',
  },
  {
    title: 'Laser World',
    desc: 'Salles de Laser Game décorées par des artistes, parfois avec karaoké et arcade.',
  },
  {
    title: 'Padel World',
    desc: 'Clubs modernes avec terrains indoor/outdoor, cours tous niveaux, fitness et lounge.',
  },
  {
    title: 'Climb World',
    desc: 'Clubs d’escalade ludiques dans des décors thématiques, pour débutants à confirmés.',
  },
];

export function OfferGrid() {
  return (
    <section id="offer" aria-labelledby="offer-title" className="container-site py-20">
      <h2 id="offer-title" className="text-2xl font-semibold">
        Offre multi-activité
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <article
            key={it.title}
            className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-neutral-100">
              <Image
                src="/assets/placeholders/brand.jpg"
                alt={`Image ${it.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
