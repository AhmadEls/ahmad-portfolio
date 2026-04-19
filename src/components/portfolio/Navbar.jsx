import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Grid3x3, Cpu, User, Send } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'featured', label: 'Ziyarah', icon: Layers },
  { id: 'projects', label: 'Work', icon: Grid3x3 },
  { id: 'skills', label: 'Stack', icon: Cpu },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        if (sections[i].offsetTop <= scrollPos) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-1 glass-strong rounded-sm p-2"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group flex items-center gap-3 px-3 py-3 rounded-sm transition-all duration-300 relative overflow-hidden ${
                isActive ? 'bg-neural-teal/10' : 'hover:bg-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-neural-teal"
                />
              )}

              <Icon
                className={`w-4 h-4 flex-shrink-0 transition-colors ${
                  isActive ? 'text-neural-teal' : 'text-core-white/60 group-hover:text-core-white'
                }`}
              />

              <motion.span
                animate={{ width: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className={`font-mono text-[11px] uppercase tracking-wider overflow-hidden whitespace-nowrap ${
                  isActive ? 'text-neural-teal' : 'text-core-white/80'
                }`}
              >
                {item.label}
              </motion.span>
            </button>
          );
        })}
      </motion.nav>

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-logic-green animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/70">AES_Portfolio</span>
          </div>

          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`p-2 rounded-sm transition ${
                    isActive ? 'text-neural-teal bg-neural-teal/10' : 'text-core-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}