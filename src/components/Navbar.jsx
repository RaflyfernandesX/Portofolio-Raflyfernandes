import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import ThemeToggle from './ui/ThemeToggle';
import profilePhoto from '../assets/profile.jpg';

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition(20);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      isActive
        ? 'bg-primary text-white shadow-glow'
        : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200 bg-slate-50/82 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-background/78 dark:shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
  src={profilePhoto}
  alt="Rafly Fernandes"
  className="h-10 w-10 rounded-2xl object-cover shadow-glow"
/>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 dark:text-text">rafly fernandes</span>
        </NavLink>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1 shadow-sm dark:border-white/10 dark:bg-white/[0.04] lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <a
          href="mailto:raflyfernandes@gmail.com"
          className="hidden rounded-full border border-primary/50 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-primary hover:text-white dark:text-text md:inline-flex"
        >
          Hire Me
        </a>

        <div className="hidden md:block">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white/70 text-2xl text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-white lg:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-4 mb-4 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-card/95 lg:hidden">
          <div className="mb-2 flex justify-end md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
