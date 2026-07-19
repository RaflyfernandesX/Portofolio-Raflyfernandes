import { motion } from 'framer-motion';
import { FiMapPin, FiTarget, FiZap } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { profile } from '../data/profile';
import { fadeInUp, staggerContainer } from '../utils/animation';

const values = [
  { title: 'Problem Solver', icon: FiTarget, body: 'Approaching problems systematically through analysis, planning, and the implementation of effective and creative solutions.' },
  { title: 'UI/UX Focus', icon: FiZap, body: 'Paying close attention to design details, interface consistency, responsiveness, and creating intuitive user experiences.' },
  { title: 'Fast Learner', icon: FiMapPin, body: 'Quickly adapting to new technologies and independently learning tools and frameworks to support project development.' },
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
           Information Systems and Technology Education student at Universitas Pendidikan Indonesia with a strong interest in Front-End Development, UI/UX Design, and Information Systems. Passionate about building responsive, user-centered web applications and solving real-world problems through technology. Continuously developing technical skills through academic and personal projects while eager to learn, collaborate, and contribute to the IT industry.
           </p>
          <div className="mt-7 grid grid-cols-3 gap-3">
           
          </div>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-3 items-start">
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
