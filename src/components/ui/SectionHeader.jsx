import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animation';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h1 className="text-balance text-3xl font-bold text-slate-950 dark:text-text sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
