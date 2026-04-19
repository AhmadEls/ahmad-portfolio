import { motion } from 'framer-motion';
import { ArrowDown, Terminal } from 'lucide-react';
import PointCloud from './PointCloud';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020408_75%)]" />

      <div className="absolute inset-0">
        <PointCloud />
      </div>

      <div className="absolute top-6 right-6 lg:top-8 lg:right-8 font-mono text-[10px] uppercase tracking-widest text-core-white/40 hidden sm:block">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-logic-green animate-pulse" />
          SYS_ONLINE
        </div>
        <div className="mt-1 text-right">v.2.4.0</div>
      </div>

      <div className="absolute bottom-6 left-24 font-mono text-[10px] uppercase tracking-widest text-core-white/40 hidden lg:block">
        <div>LAT: 34.0° N</div>
        <div>LON: 35.8° E</div>
      </div>

      <div className="relative z-10 px-6 lg:px-24 w-full max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-neural-teal/80 mb-6 flex items-center gap-3"
        >
          <Terminal className="w-3 h-3" />
          <span>[ FULL_STACK_ENGINEER // 2025 ]</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-bold text-[14vw] md:text-[11vw] lg:text-[9vw] leading-[0.9] tracking-tighter text-core-white mb-8"
          style={{ letterSpacing: '-0.05em' }}
        >
          AHMAD
          <br />
          <span className="text-outline">EL SABEH</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-12 gap-4 items-end"
        >
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="text-lg md:text-xl lg:text-2xl text-core-white/90 font-body font-light leading-snug mb-3">
              Full Stack Engineer building <span className="text-neural-teal">real-world AI applications.</span>
            </p>
            <p className="text-sm md:text-base text-core-white/55 font-body leading-relaxed max-w-xl">
              I build polished full-stack products with clean architecture, thoughtful UX, and real AI-powered functionality.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-wrap gap-3 md:justify-end">
            <button
              onClick={() => scrollTo('featured')}
              className="group relative px-7 py-4 bg-neural-teal text-obsidian font-mono text-xs uppercase tracking-widest font-semibold overflow-hidden transition-all hover:glow-teal"
              data-magnetic
            >
              <span className="relative z-10">Explore Ziyarah →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neural-teal to-logic-green opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group relative px-7 py-4 border border-core-white/20 text-core-white font-mono text-xs uppercase tracking-widest hover:border-neural-teal hover:text-neural-teal transition-all"
              data-magnetic
            >
              Initialize Contact
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/40">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="w-3 h-3 text-neural-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}