import { KpiCounter } from './KpiCounter.client';

type Kpi = {
  label: string;
  icon?: string; // emoji ou équivalent
  value?: number; // nombre animé si présent
  textValue?: string; // alternative non numérique
  prefix?: string;
  suffix?: string;
};

export function Kpis({ items }: { items: Kpi[] }) {
  return (
    <section id="kpis" aria-labelledby="kpis-title" className="container-site py-20">
      <h2 id="kpis-title" className="text-2xl font-bold text-[#60617E]">
        Chiffres clés
      </h2>
      {/* 2 lignes: 3 colonnes desktop, 2 tablettes */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((k) => (
          <div
            key={k.label}
            className="rounded-2xl border border-[#60617E]/20 bg-[var(--pastel-2)] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {/* Icône */}
            {k.icon ? (
              <div className="text-2xl text-[#60617E] mb-2" aria-hidden>
                {k.icon}
              </div>
            ) : null}
            {/* Valeur (anis) */}
            <div className="text-[#DBDE6F]">
              {typeof k.value === 'number' ? (
                <KpiCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
              ) : k.textValue ? (
                <div className="text-3xl font-semibold">{k.textValue}</div>
              ) : null}
            </div>
            {/* Libellé (violet) */}
            <p className="mt-2 text-sm font-medium text-[#60617E]">{k.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
