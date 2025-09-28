export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 bg-[var(--pastel-1)]">
      <div className="container-site">
        <h2 id="about-title" className="text-2xl font-bold text-[#60617E]">
          Qui sommes-nous
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 items-start">
          <p className="text-gray-800 max-w-prose">
            <b>Un groupe solide et à échelle humaine</b>, fondé sur <b>trois piliers</b> :{' '}
            <b>Promotion</b>, <b>Patrimoine</b> et <b>Loisirs-CHR</b>.
            <br />
            <br />
            Le <b>Groupe Erigea Loisirs</b> est un acteur <b>innovant</b> et aujourd’hui{' '}
            <b>majeur du loisir indoor urbain</b>, à la croisée entre <b>divertissement familial</b>
            , <b>loisirs digitaux</b> et <b>expériences immersives</b>.
            <br />
            <br />
            Créé en <b>2017</b>, il regroupe aujourd’hui <b>12 centres</b> en <b>Île-de-France</b>,
            avec plus de <b>950 000 visiteurs en 2024</b> et une{' '}
            <b>dynamique de croissance exceptionnelle (+400 % entre 2024 et 2025)</b>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'https://cdn.webindiz.fr/109daf06-d025-4913-803d-d3d83a27011b.png',
              'https://cdn.webindiz.fr/1fa2744a-edb2-447a-b6ef-c4a11a46cf32.png',
              'https://cdn.webindiz.fr/43d87af3-021e-4b0e-ab58-a779e5d2f33a.png',
              'https://cdn.webindiz.fr/687a479e-2829-473a-8f56-8ddaa63d05fc.png',
              'https://cdn.webindiz.fr/87968bd5-608e-453f-a7fa-fa453af8f0b6.png',
              'https://cdn.webindiz.fr/aa185b85-eda0-45ed-9ef3-90aa2e10ed7a.png',
              'https://cdn.webindiz.fr/c3e8b193-dd3b-4026-b29d-4c08c8acc7e7.png',
              'https://cdn.webindiz.fr/eb1abc6d-fa75-4bbc-a7f0-ada2c6119e2b.png',
            ].map((src) => (
              <div key={src} className="relative aspect-[3/2] bg-white rounded-md overflow-hidden">
                <img
                  src={src}
                  alt="Logo partenaire"
                  className="h-full w-full object-contain saturate-0 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
