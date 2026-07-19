import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { projects } from '../data/projects';
import { fadeInUp, staggerContainer } from '../utils/animation';

export default function Projects() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Projects"
        title="Projects showcasing my skills and practical experience."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            className="glass-panel flex min-h-[23rem] flex-col rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-primary/45"
          >
            <div
              className="mb-6 grid h-40 place-items-end overflow-hidden rounded-[1.5rem] border border-slate-200 p-4 dark:border-white/10"
              style={{ background: project.image }}
              role="img"
              aria-label={`Screenshot preview ${project.title}`}
            >
              <div className="h-20 w-full rounded-2xl border border-white/25 bg-white/30 backdrop-blur-md" />
            </div>

            <p className="text-sm font-semibold text-primary">
              {project.type}
            </p>

            <h2 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">
              {project.title}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-200"
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Live Demo
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageShell>
  );
}