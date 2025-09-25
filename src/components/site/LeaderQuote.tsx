import { Quote } from '@/components/ds/Quote';
import { motion } from 'framer-motion';

export function LeaderQuote() {
  return (
    <section aria-labelledby="leader-quote-title" className="container-site py-20">
      <h2 id="leader-quote-title" className="text-2xl font-semibold">
        Mot du dirigeant, Louis Dary
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.25 }}
        className="mt-6"
      >
        <Quote author="Louis Dary" source="Président, Erigea Loisirs">
          “Nous construisons des lieux de vie immersifs et accessibles, pensés pour rassembler
          familles, amis et entreprises autour d’expériences positives et mémorables.”
        </Quote>
      </motion.div>
    </section>
  );
}
