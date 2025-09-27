const opened = [
  { name: 'Montigny-le-Bretonneux', lat: 48.771, lng: 2.036 },
  { name: 'Bercy 2', lat: 48.818, lng: 2.394 },
  { name: 'Cergy', lat: 49.039, lng: 2.074 },
  { name: 'Porte de Châtillon', lat: 48.82, lng: 2.314 },
  { name: 'Gaîté Montparnasse', lat: 48.841, lng: 2.323 },
  { name: 'Arcueil', lat: 48.8, lng: 2.332 },
  { name: 'La Défense', lat: 48.891, lng: 2.241 },
  { name: 'Aulnay', lat: 48.953, lng: 2.489 },
  { name: 'Maurepas', lat: 48.763, lng: 1.918 },
];

const nextOpenings = [
  { name: 'Créteil Soleil', lat: 48.777, lng: 2.455 },
  { name: 'Montparnasse', lat: 48.843, lng: 2.322 },
  { name: 'Montmartre', lat: 48.886, lng: 2.343 },
  { name: 'Lecourbe', lat: 48.841, lng: 2.296 },
  { name: 'La Varenne', lat: 48.792, lng: 2.499 },
];
import dynamic from 'next/dynamic';
const InteractiveMap = dynamic(() => import('./Map.client').then((m) => m.InteractiveMap), {
  ssr: false,
});

export function MapStatic() {
  return (
    <section aria-labelledby="map-title" className="container-site py-20">
      <h2 id="map-title" className="text-2xl font-bold text-[#60617E]">
        Carte des implantations
      </h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="aspect-[16/10] rounded-xl overflow-hidden">
          <InteractiveMap
            places={[
              ...opened.map((o) => ({ ...o, status: 'open' as const })),
              ...nextOpenings.map((n) => ({ ...n, status: 'soon' as const })),
            ]}
          />
        </div>
        <div className="grid gap-6">
          <div>
            <h3 className="font-semibold text-[#60617E]">Centres ouverts</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-800">
              {opened.map((n) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                  {n.name}
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
                  {n.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
