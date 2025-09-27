export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 bg-[var(--pastel-3)]">
      <div className="container-site">
        <h2 id="testimonials-title" className="text-2xl font-bold text-[#60617E]">
          Témoignages & Presse
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <figure className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
            <blockquote className="text-lg">“Super endroit, pleins de choses à faire !”</blockquote>
            <figcaption className="mt-2 text-sm text-neutral-600">
              Google Reviews — Moyenne 4,7/5 (4 000+ avis)
            </figcaption>
          </figure>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-600">Logos médias (placeholders)</p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 bg-neutral-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
