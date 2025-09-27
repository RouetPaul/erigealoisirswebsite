export function Pillars() {
  const pillars = [
    {
      title: 'Parcs urbains de loisirs',
      desc: 'Centres multi-activités et expériences immersives à destination des familles, amis et entreprises.',
      icon: (
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-[#60617E]">
          <path
            d="M4 7h16M6 7v10m12-10v10M4 17h16M10 7v10m4-10v10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Parcs urbains de sports',
      desc: 'Installations sportives modernes en milieu urbain, accessibles toute l’année et ouvertes à tous niveaux.',
      icon: (
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-[#60617E]">
          <path
            d="M5 12a7 7 0 0 1 14 0m-7-7v14m-7 0h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Restaurants & hôtels de caractère',
      desc: 'Adresses chaleureuses et identitaires, au service d’une hospitalité attentive et durable.',
      icon: (
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 text-[#60617E]">
          <path
            d="M3 10h18M6 10v10m12-10v10M9 10V4m6 6V4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <section aria-labelledby="pillars-title" className="py-20 bg-[var(--pastel-2)]">
      <div className="container-site">
        <h2 id="pillars-title" className="text-2xl font-bold text-[#60617E]">
          Les 3 piliers du Groupe
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[#60617E]/20 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/40">
                {p.icon}
              </div>
              <h3 className="mt-4 font-semibold text-[#60617E]">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-800">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
