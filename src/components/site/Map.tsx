const opened = [
  'Montigny-le-Bretonneux',
  'Bercy 2',
  'Cergy',
  'Porte de Châtillon',
  'Gaîté Montparnasse',
  'Arcueil',
  'La Défense',
  'Aulnay',
  'Maurepas',
];

const nextOpenings = ['Créteil Soleil', 'Montparnasse', 'Montmartre', 'Lecourbe', 'La Varenne'];

export function MapStatic() {
  return (
    <section aria-labelledby="map-title" className="container-site py-20">
      <h2 id="map-title" className="text-2xl font-bold text-[#60617E]">
        Carte des implantations
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="aspect-[16/10] rounded-xl bg-[var(--pastel-1)] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 grid place-items-center text-[#60617E]/40">
            Carte statique (placeholder)
          </div>
        </div>
        <div className="grid gap-6">
          <div>
            <h3 className="font-semibold text-[#60617E]">Centres ouverts</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-800">
              {opened.map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#60617E]">Prochaines ouvertures</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-800">
              {nextOpenings.map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
