export function Pillars() {
  const pillars = [
    {
      title: 'Loisirs-CHR',
      desc: 'Exploitation d’expériences immersives et digitales à échelle humaine.',
    },
  ];
  return (
    <section aria-labelledby="pillars-title" className="py-20 bg-[var(--pastel-2)]">
      <div className="container-site">
        <h2 id="pillars-title" className="text-2xl font-bold text-[#60617E]">
          Notre pilier
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[#60617E]/20 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/40" />
              <h3 className="mt-4 font-semibold text-[#60617E]">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-800">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
