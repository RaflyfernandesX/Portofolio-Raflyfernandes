import { motion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile.jpg';
import { profile } from '../data/profile';
import { useTypingText } from '../hooks/useTypingText';
import { fadeInUp, staggerContainer } from '../utils/animation';

export default function Home() {
  const typedText = useTypingText([
    'Frontend Developer',
    'React Learner',
    'IT Internship Candidate',
  ]);

  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
      <div className="pointer-events-none absolute inset-x-4 top-8 -z-10 h-72 rounded-[3rem] bg-gradient-to-r from-primary/20 via-cyan-400/10 to-emerald-400/10 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary"
        >
          Available for Internship
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-balance text-4xl font-extrabold leading-tight text-slate-950 dark:text-text sm:text-5xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 min-h-10 text-2xl font-bold text-primary sm:text-3xl"
        >
          {typedText}
          <span className="ml-1 animate-pulse text-slate-950 dark:text-white">|</span>
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
        >
          {profile.summary}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Lihat Project <FiArrowUpRight />
          </Link>

          <a
            href="#"
            aria-label="Download CV"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-950 transition hover:border-primary hover:bg-white/70 dark:border-white/15 dark:text-text dark:hover:bg-white/10"
          >
            Download CV <FiDownload />
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-3xl p-4">
              <p className="text-2xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass-panel mx-auto w-full max-w-md rounded-[2rem] p-5"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/60 p-5 dark:border-white/10 dark:bg-slate-950/50">
          <div className="absolute inset-x-8 top-8 h-44 rounded-full bg-primary/25 blur-3xl" />

          <div className="relative mx-auto aspect-square max-w-[17rem] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-primary via-sky-400 to-slate-900 p-1 shadow-glow">
            <img
              src={profilePhoto}
              alt="Foto profil"
              className="h-full w-full rounded-[1.7rem] object-cover"
            />
          </div>

          <div className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-white/60 p-5 font-mono text-sm dark:border-white/10 dark:bg-slate-900/80">
            <p>
              <span className="text-primary">const</span> candidate = &#123;
            </p>
            <p className="pl-4 text-slate-700 dark:text-slate-300">
              role:{' '}
              <span className="text-emerald-500 dark:text-emerald-300">
                &apos;{profile.role}&apos;
              </span>
              ,
            </p>
            <p className="pl-4 text-slate-700 dark:text-slate-300">
              focus:{' '}
              <span className="text-emerald-500 dark:text-emerald-300">
                &apos; Modern UI Development&apos;
              </span>
              ,
            </p>
            <p className="pl-4 text-slate-700 dark:text-slate-300">
              stack:{' '}
              <span className="text-emerald-500 dark:text-emerald-300">
                &apos; Next.js|React|TypeScript&apos;
              </span>
              ,
            </p>
            <p>&#125;;</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
