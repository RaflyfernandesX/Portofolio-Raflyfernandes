import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { certificates } from '../data/certificates';
import { fadeInUp, staggerContainer } from '../utils/animation';

export default function Certificates() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Certificates"
        title="Professional certifications that showcase continuous learning."
        
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-4xl gap-4">
        {certificates.map((certificate) => (
          <motion.article key={certificate.title} variants={fadeInUp} className="glass-panel flex flex-col gap-5 rounded-[2rem] p-6 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-2xl text-primary">
              <FiAward />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-slate-950 dark:text-white">{certificate.title}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{certificate.issuer}</p>
            </div>
            <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
              {certificate.year}
            </span>
          </motion.article>
        ))}
      </motion.div>
    </PageShell>
  );
}
