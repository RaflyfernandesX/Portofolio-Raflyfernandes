import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTheme } from '../hooks/useTheme';

export default function AppLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-background dark:text-text">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="relative overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-[-12rem] top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-40 left-[-10rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
