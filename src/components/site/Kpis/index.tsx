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
            className="rounded-2xl border border-[#60617E]/20 bg-[var(--pastel-2)] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-2 text-[#60617E]">
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M5 12h14M5 6h14M5 18h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <KpiCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
            </div>
            <p className="mt-2 text-sm text-gray-800">{k.label}</p>
            <p className="text-xs text-[#60617E] mt-1">
              {k.label.includes('ouverts')
                ? 'en exploitation'
                : k.label.includes('Ouvertures')
                  ? 'en développement'
                  : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
