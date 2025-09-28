export function Infrastructures() {
  const items: { label: string; value: number | string; icon?: string }[] = [
    { label: 'pistes de bowling', value: 60, icon: '🎳' },
    { label: 'laser games', value: 11, icon: '🔫' },
    { label: 'karaokés', value: 20, icon: '🎤' },
    { label: 'escape game (1000 m² Prison Island)', value: 1, icon: '🧩' },
    { label: 'karting électrique indoor', value: 1, icon: '🏎️' },
    { label: 'jeux d’arcade', value: 200, icon: '🕹️' },
    { label: 'trampoline park', value: 1, icon: '🤸' },
    { label: 'salles de séminaires', value: 12, icon: '🏛️' },
    { label: 'quiz rooms', value: 3, icon: '❓' },
    { label: 'salles de concerts', value: 4, icon: '🎶' },
    { label: 'billards', value: 35, icon: '🎱' },
    { label: 'pistes de padel', value: 7, icon: '🎾' },
  ];

  return (
    <section id="infrastructures" aria-labelledby="infra-title" className="container-site py-20">
      <h2 id="infra-title" className="text-2xl font-bold text-[#60617E]">
        Infrastructures et activités
      </h2>
      {/* Grille fluide: 4 desktop, 2 tablette, 1 mobile */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-2xl border border-[#60617E]/20 bg-[var(--pastel-2)] p-6 text-center"
          >
            {it.icon ? (
              <div className="text-2xl text-[#60617E] mb-2" aria-hidden>
                {it.icon}
              </div>
            ) : null}
            <div className="text-3xl font-semibold text-[#DBDE6F]">
              {typeof it.value === 'number' ? it.value.toLocaleString() : it.value}
            </div>
            <div className="mt-2 text-sm font-medium text-[#60617E]">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
