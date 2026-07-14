import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

const socials = [
  { label: 'GitHub', icon: FaGithub, href: profile.github },
  { label: 'LinkedIn', icon: FaLinkedin, href: profile.linkedin },
  { label: 'Instagram', icon: FaInstagram, href: profile.instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/50 dark:border-white/10 dark:bg-slate-950/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 dark:text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 {profile.name}. Front-End Developer Portfolio.</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-lg text-slate-700 transition hover:border-primary hover:bg-primary hover:text-white dark:border-white/10 dark:text-slate-300"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
