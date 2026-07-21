import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiAward, FiX, FiZoomIn } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { certificates } from '../data/certificates';
import { fadeInUp, staggerContainer } from '../utils/animation';

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Certificates"
        title="Professional certifications that showcase continuous learning."
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto grid max-w-4xl gap-4">
        {certificates.map((certificate) => (
          <motion.article
            key={certificate.title}
            variants={fadeInUp}
            className="glass-panel flex flex-col gap-5 rounded-[2rem] p-6 sm:flex-row sm:items-center"
          >
            {certificate.image ? (
              <button
                type="button"
                onClick={() => setSelected(certificate)}
                className="group relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
              >
                <img
                  src={certificate.image}
                  alt={`Sertifikat ${certificate.issuer}`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-slate-950/0 text-white opacity-0 transition group-hover:bg-slate-950/40 group-hover:opacity-100">
                  <FiZoomIn className="text-xl" />
                </span>
              </button>
            ) : (
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/15 text-2xl text-primary">
                <FiAward />
              </div>
            )}
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

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[1.5rem] bg-white dark:bg-slate-900"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/60 text-white transition hover:bg-slate-950/80"
                aria-label="Tutup"
              >
                <FiX />
              </button>
              <img
                src={selected.image}
                alt={`Sertifikat ${selected.issuer}`}
                className="max-h-[75vh] w-full object-contain"
              />
              <div className="p-5">
                <h3 className="font-semibold text-slate-950 dark:text-white">{selected.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {selected.issuer} · {selected.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </PageShell>
  );
}