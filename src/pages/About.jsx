import { motion } from 'framer-motion';
import { FiMapPin, FiTarget, FiZap } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { profile } from '../data/profile';
import { fadeInUp, staggerContainer } from '../utils/animation';

const values = [
  { title: 'Problem Solver', icon: FiTarget, body: 'Memecahkan masalah secara sistematis melalui analisis, perencanaan, dan implementasi solusi yang efektif.' },
  { title: 'UI/UX Focus', icon: FiZap, body: 'Memperhatikan detail desain, konsistensi antarmuka, responsivitas, dan pengalaman pengguna yang intuitif.' },
  { title: 'Fast Learner', icon: FiMapPin, body: 'Cepat beradaptasi dengan teknologi baru, mampu mempelajari tools dan framework secara mandiri untuk mendukung pengembangan proyek.' },
];

export default function About() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="About"
        title="Get To Know Me"
        description="I'm a Computer Science student passionate about front-end development, continuously learning modern web technologies and creating responsive, user-centered applications."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel rounded-[2rem] p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">{profile.location}</p>
          <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">Muhammad Rafly Juliawan Fernandes</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Mahasiswa Pendidikan Sistem dan Teknologi Informasi di Universitas Pendidikan Indonesia dengan minat yang kuat pada Pengembangan Front-End, Desain UI/UX, dan Sistem Informasi. Bersemangat dalam menciptakan aplikasi web responsif yang berpusat pada pengguna dan memecahkan masalah dunia nyata melalui teknologi. Terus meningkatkan keterampilan teknis melalui proyek akademik dan pribadi sambil bersemangat untuk belajar, berkolaborasi, dan berkontribusi dalam industri TI.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white/60 p-4 dark:border-white/10 dark:bg-slate-950/35">
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={fadeInUp} className="glass-panel rounded-[2rem] p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-2xl text-primary">
                  <Icon />
                </div>
                <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel mt-6 rounded-[2rem] p-7">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white">Education Timeline</h2>
        <div className="mt-6 grid gap-5">
          {profile.education.map((item) => (
            <article key={item.period} className="relative border-l border-primary/35 pl-6">
              <span className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-primary shadow-glow" />
              <p className="text-sm font-semibold text-primary">{item.period}</p>
              <h3 className="mt-2 font-bold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.place}</p>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </PageShell>
  );
}
