export function Strategy() {
  const items = [
    {
      title: 'Marché en forte croissance',
      desc: '+12 % TCAM 2022-2024, >12 Mds€ de dépenses en loisirs en France.',
    },
    {
      title: 'Modèle rentable et duplicable',
      desc: 'Billetterie, restauration, privatisations et merchandising.',
    },
    {
      title: 'Expérience client premium et digitale',
      desc: 'Réservation en ligne, CRM, fidélisation.',
    },
    {
      title: 'Ambition de maillage',
      desc: 'D’abord régional puis national.',
    },
  ];
  return (
    <section aria-labelledby="strategy-title" className="container-site py-20">
      <h2 id="strategy-title" className="text-2xl font-semibold">
        Stratégie & Positionnement
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
