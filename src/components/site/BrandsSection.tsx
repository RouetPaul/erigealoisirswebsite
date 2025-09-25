'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrandCard } from './BrandCard';
import { BrandDetail } from './BrandDetail';

type Brand = {
  key: 'smile' | 'laser' | 'padel' | 'climb';
  name: string;
  description: string;
  centers: string[];
};

const BRANDS: Brand[] = [
  {
    key: 'smile',
    name: 'Smile World',
    description:
      'Smile World est le concept multi-activités phare d’Erigea Loisirs. Chaque centre rassemble dans un même lieu bowling, laser game, karaoké, arcades, mini-bowling et espaces de restauration, pour offrir une expérience complète et accessible à tous. Pensés comme de véritables destinations de loisirs, les Smile World s’adressent aussi bien aux familles qu’aux groupes d’amis et aux entreprises en quête de moments conviviaux et fédérateurs. Leur univers immersif et festif en fait un pilier de l’offre Erigea Loisirs et une référence en Île-de-France.',
    centers: [
      'Paris 15 Lecourbe',
      'Gaîté Montparnasse',
      'Montigny-le-Bretonneux',
      'Paris Porte de Châtillon',
      'Bercy 2',
      'Créteil Soleil',
      'Levallois-Perret (à venir)',
      'Montmartre (à venir)',
    ],
  },
  {
    key: 'laser',
    name: 'Laser World',
    description:
      'Avec Laser World, Erigea Loisirs réinvente le laser game à travers des univers thématiques uniques et spectaculaires. Chaque labyrinthe est décoré par des artistes, transformant le jeu en véritable expérience immersive. Certaines implantations intègrent également des karaokés et salles d’arcade, enrichissant encore l’offre de divertissement. Laser World attire un large public – adolescents, jeunes actifs, entreprises – et se distingue par sa capacité à accueillir des événements privés ou professionnels, avec des prestations sur mesure pour anniversaires et team building.',
    centers: [
      'Paris Montparnasse',
      'Arcueil La Vache Noire',
      'La Défense La Garenne',
      'Aulnay O’Parinor',
    ],
  },
  {
    key: 'padel',
    name: 'Padel World',
    description:
      'Padel World illustre la volonté d’Erigea Loisirs de diversifier son offre autour de pratiques sportives en pleine expansion. Situé à Maurepas, le premier club compte sept terrains dont six indoor, accessibles toute l’année. En complément, les membres bénéficient de cours particuliers ou collectifs, d’un espace fitness et d’un bar lounge convivial. Lieu de sport mais aussi de rencontre et de partage, Padel World s’adresse aux passionnés comme aux curieux, avec une programmation adaptée aux entreprises et aux événements privés.',
    centers: ['Maurepas'],
  },
  {
    key: 'climb',
    name: 'Climb World',
    description:
      'Climb World propose une approche ludique et colorée de l’escalade, accessible à tous les profils. Ses salles sont conçues pour éveiller la curiosité des enfants, accompagner les débutants et offrir un terrain stimulant aux grimpeurs confirmés. Plus qu’une activité sportive, Climb World se veut une expérience immersive, où chaque décor thématique transforme la grimpe en aventure. C’est une marque qui traduit la vision d’Erigea Loisirs : associer sport, loisir et immersion dans des espaces accueillants et inspirants.',
    centers: ['Gaîté Montparnasse'],
  },
];

export function BrandsSection() {
  const [active, setActive] = useState<Brand['key'] | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const onToggle = (key: Brand['key']) => setActive((cur) => (cur === key ? null : key));
  const activeBrand = BRANDS.find((b) => b.key === active) || null;

  useEffect(() => {
    if (!active) return;
    const el = detailRef.current;
    if (!el) return;
    const isMobile =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;
    if (!isMobile) return;
    const rect = el.getBoundingClientRect();
    const outOfView =
      rect.top < 0 || rect.bottom > (typeof window !== 'undefined' ? window.innerHeight : 0);
    if (outOfView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [active]);

  return (
    <section aria-labelledby="brands-title" className="container-site py-12">
      <h3 id="brands-title" className="text-xl font-semibold">
        Nos marques
      </h3>
      {/* Mobile: détail sous la carte cliquée */}
      <div className="mt-6 grid gap-6 grid-cols-1 lg:hidden">
        {BRANDS.map((b) => (
          <div key={b.key}>
            <BrandCard name={b.name} onClick={() => onToggle(b.key)} isActive={active === b.key} />
            <div
              className="mt-4"
              id={`brand-detail-${b.key}`}
              ref={active === b.key ? detailRef : null}
            >
              <AnimatePresence initial={false} mode="wait">
                {active === b.key && (
                  <BrandDetail
                    key={b.key}
                    name={b.name}
                    description={b.description}
                    centers={b.centers}
                    onClose={() => setActive(null)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: grille 2x2 + détail en dessous */}
      <div className="hidden lg:block">
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((b) => (
            <BrandCard
              key={b.key}
              name={b.name}
              onClick={() => onToggle(b.key)}
              isActive={active === b.key}
            />
          ))}
        </div>
        <div className="mt-8" id="brand-detail" ref={activeBrand ? detailRef : null}>
          <AnimatePresence initial={false} mode="wait">
            {activeBrand && (
              <BrandDetail
                key={activeBrand.key}
                name={activeBrand.name}
                description={activeBrand.description}
                centers={activeBrand.centers}
                onClose={() => setActive(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
