import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-300/70 bg-white/70 text-lg text-slate-700 shadow-sm transition hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
