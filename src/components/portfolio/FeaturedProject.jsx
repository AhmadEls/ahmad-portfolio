import { motion } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Zap,
  Layers,
  Cpu,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import ZiyarahDemo from './ZiyarahDemo';

const ARCH = [
  {
    num: '01',
    label: 'Frontend System',
    icon: Layers,
    lines: ['React + Tailwind + Framer Motion', 'Dynamic UI rendering', 'State-driven trip flows'],
  },
  {
    num: '02',
    label: 'Backend API',
    icon: Zap,
    lines: ['Node.js + Express', 'RESTful architecture', 'Request handling & orchestration'],
  },
  {
    num: '03',
    label: 'AI Engine',
    icon: Cpu,
    highlight: true,
    lines: ['Google Gemini API', 'Prompt engineering for structured output', 'Response parsing & formatting'],
  },
  {
    num: '04',
    label: 'Auth & Data',
    icon: Shield,
    lines: ['Firebase + Google OAuth', 'Firestore user trip storage', 'Secure user-based data flow'],
  },
];

const FEATURES = [
  'AI-generated multi-day itineraries in seconds',
  'Real location-based trip planning (Google Places integration)',
  'Secure authentication with Google OAuth',
  'Dynamic trip management & progress tracking',
  'Clean, responsive UI designed for real usage',
];

const ENGINEERING = [
  'Modular architecture separating frontend, API, and AI layers',
  'Structured prompt system for consistent, parseable AI output',
  'Async request handling with error management throughout',
  'Optimized flow: input → AI generation → trip visualization',
];

export default function FeaturedProject() {
  return (
    <section id="featured" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 laser-line" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neural-teal">[01] FEATURED_SYSTEM</div>
          <div className="h-px flex-1 bg-gradient-to-r from-neural-teal/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-start mb-20">
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-logic-green/40 bg-logic-green/5 rounded-sm">
                  <Sparkles className="w-3 h-3 text-logic-green" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-logic-green">
                    Production-Ready System
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/10 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-logic-green animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/50">Live</span>
                </div>
              </div>

              <h2 className="font-display font-bold text-6xl md:text-7xl leading-[0.9] mb-3 tracking-tight">
                Ziyarah
              </h2>

              <p className="text-base text-neural-teal font-mono uppercase tracking-wider mb-5">
                AI Travel Planning Platform
              </p>

              <p className="text-core-white/60 text-sm leading-relaxed mb-6 border-l-2 border-neural-teal/30 pl-4">
                Full-stack system integrating AI, real-time location data, authentication, and dynamic UI rendering — designed and shipped end-to-end.
              </p>

              <div className="space-y-2.5 mb-8">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-neural-teal flex-shrink-0 mt-0.5" />
                    <span className="text-core-white/70 text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {['React', 'Node.js', 'Gemini API', 'Firebase', 'Google OAuth', 'Firestore'].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1.5 border border-white/10 text-core-white/60 rounded-sm hover:border-neural-teal/40 hover:text-neural-teal transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://ai-senior-web-planner-vdlo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-neural-teal text-obsidian font-mono text-[10px] uppercase tracking-widest font-semibold hover:opacity-90 transition-all group rounded-sm"
                >
                  View Live Product
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/AhmadEls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 text-core-white/70 font-mono text-[10px] uppercase tracking-widest hover:border-white/30 hover:text-core-white transition-all rounded-sm"
                >
                  View Source
                </a>
              </div>

              <p className="font-mono text-[9px] text-core-white/35 italic">
                Full platform includes authenticated user flows and persistent trip data.
              </p>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-neural-teal/12 via-transparent to-logic-green/6 blur-3xl opacity-70 pointer-events-none" />
              <ZiyarahDemo />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/40">System Architecture</span>
            <div className="h-px flex-1 bg-white/8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ARCH.map((a, i) => {
              const Icon = a.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative glass rounded-sm p-5 overflow-hidden border ${
                    a.highlight ? 'border-logic-green/25' : 'border-white/5'
                  }`}
                >
                  {a.highlight && (
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-logic-green animate-pulse" />
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-3.5 h-3.5 ${a.highlight ? 'text-logic-green' : 'text-neural-teal'}`} />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-core-white/50">{a.num}</span>
                  </div>

                  <div className="font-display font-semibold text-sm text-core-white mb-3">{a.label}</div>

                  <div className="space-y-1">
                    {a.lines.map((l, li) => (
                      <div key={li} className="font-mono text-[9px] text-core-white/45 leading-relaxed">
                        · {l}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-sm p-6 lg:p-8 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-4 h-4 text-neural-teal" />
            <span className="font-display font-semibold text-base text-core-white">Engineering Focus</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {ENGINEERING.map((e, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-px h-4 bg-neural-teal/40 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-core-white/65 leading-relaxed">{e}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}