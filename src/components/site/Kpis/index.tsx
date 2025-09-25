import { KpiCounter } from './KpiCounter.client';

type Kpi = { label: string; value: number; prefix?: string; suffix?: string };

export function Kpis({ items }: { items: Kpi[] }) {
  return (
    <section id="kpis" aria-labelledby="kpis-title" className="container-site py-20">
      <h2 id="kpis-title" className="text-2xl font-bold text-[#60617E]">
        Chiffres clés
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((k) => (
          <div
            key={k.label}
            className="rounded-2xl border border-neutral-200 bg-[var(--pastel-2)] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <KpiCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
            <p className="mt-2 text-sm text-gray-800">{k.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
