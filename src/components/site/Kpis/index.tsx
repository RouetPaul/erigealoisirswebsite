import { KpiCounter } from './KpiCounter.client';

type Kpi = {
  label: string;
  value?: number;
  textValue?: string;
  prefix?: string;
  suffix?: string;
};

type InfraItem = { label: string; value: number | string };

export function Kpis({ items, infraItems = [] }: { items: Kpi[]; infraItems?: InfraItem[] }) {
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
            className="rounded-2xl border border-[#60617E] bg-[#60617E] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {/* Valeur (anis) */}
            <div className="text-[#DBDE6F]">
              {typeof k.value === 'number' ? (
                <KpiCounter value={k.value} prefix={k.prefix} suffix={k.suffix} />
              ) : k.textValue ? (
                <div className="text-3xl font-semibold">{k.textValue}</div>
              ) : null}
            </div>
            {/* Libellé: contraste sur fond violet */}
            <p className="mt-2 text-sm font-medium text-white/95">{k.label}</p>
          </div>
        ))}
      </div>

      {infraItems.length > 0 && (
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-[#60617E]">Infrastructures et activités</h3>
          {/* Grille fluide: 4/2/1 */}
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {infraItems.map((it) => (
              <div
                key={it.label}
                className="rounded-2xl border border-[#60617E] bg-[#60617E] p-6 text-center"
              >
                <div className="text-3xl font-semibold text-[#DBDE6F]">
                  {typeof it.value === 'number' ? it.value.toLocaleString() : it.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/95">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
