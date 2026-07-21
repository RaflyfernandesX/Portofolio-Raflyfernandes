import { motion } from 'framer-motion';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { skillGroups, tools } from '../data/skills';
import { fadeInUp, staggerContainer } from '../utils/animation';

export default function Skills() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Skills"
        title="Technical Skills"
        description="A collection of technologies, programming languages, and development tools I use to build modern, responsive, and user-friendly web applications. "
      />
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.section key={group.title} variants={fadeInUp} className="glass-panel rounded-[2rem] p-6">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">{group.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article key={skill.name} className="rounded-3xl border border-slate-200 bg-white/60 p-4 transition hover:-translate-y-1 hover:border-primary/50 dark:border-white/10 dark:bg-slate-950/35">
                    <div className="flex items-center gap-3">
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-xl text-primary"
                      >
                        <Icon aria-hidden="true" />
                      </motion.span>
                      <div>
                        <h3 className="font-semibold text-slate-950 dark:text-slate-100">{skill.name}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{skill.level}% proficiency</p>
                      </div>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.section>
        ))}
      </motion.div>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="mb-8 text-center text-xl font-bold text-slate-950 dark:text-white">
          Tools I Use
        </h2>
        <div className="space-y-6">
          <div className="marquee-row">
            <div className="marquee-track animate-scroll-left gap-6 py-2">
              {[...tools, ...tools].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`${tool.name}-a-${index}`}
                    className="glass-panel flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-primary/50"
                  >
                    <Icon aria-hidden="true" className="text-3xl text-primary" />
                    <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="marquee-row">
            <div className="marquee-track animate-scroll-right gap-6 py-2">
              {[...tools, ...tools].reverse().map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`${tool.name}-b-${index}`}
                    className="glass-panel flex h-24 w-24 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-2xl transition-transform duration-300 hover:-translate-y-1.5 hover:scale-110 hover:border-primary/50"
                  >
                    <Icon aria-hidden="true" className="text-3xl text-primary" />
                    <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </PageShell>
  );
}