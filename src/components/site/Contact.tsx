export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-site py-20">
      <h2 id="contact-title" className="text-2xl font-semibold">
        Contact corporate
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="font-semibold">Presse</h3>
          <p className="mt-2 text-sm text-neutral-700">
            <a className="underline" href="mailto:presse@erigea.fr">
              presse@erigea.fr
            </a>
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="font-semibold">Investisseurs</h3>
          <p className="mt-2 text-sm text-neutral-700">
            <a className="underline" href="mailto:corporate@erigea.fr">
              corporate@erigea.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
