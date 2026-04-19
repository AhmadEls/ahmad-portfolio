import { useState } from 'react';
import { motion } from 'framer-motion';

const GROUPS = [
  {
    label: 'FRONTEND',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'BACKEND',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    label: 'DATA / LOGIC',
    skills: ['SQL', 'Data Modeling', 'Problem Solving'],
  },
  {
    label: 'TOOLS',
    skills: ['Git', 'Firebase', 'APIs'],
  },
];

const NODES = [
  { id: 'react', x: 20, y: 30, label: 'React' },
  { id: 'js', x: 35, y: 15, label: 'JavaScript' },
  { id: 'css', x: 10, y: 55, label: 'CSS' },
  { id: 'node', x: 55, y: 25, label: 'Node.js' },
  { id: 'api', x: 50, y: 55, label: 'REST API' },
  { id: 'sql', x: 80, y: 45, label: 'SQL' },
  { id: 'firebase', x: 75, y: 75, label: 'Firebase' },
  { id: 'git', x: 30, y: 80, label: 'Git' },
];

const EDGES = [
  ['react', 'js'],
  ['react', 'css'],
  ['react', 'api'],
  ['node', 'api'],
  ['api', 'sql'],
  ['api', 'firebase'],
  ['js', 'node'],
  ['git', 'react'],
  ['git', 'node'],
];

export default function Skills() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="skills" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 laser-line" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neural-teal">[03] SYSTEM_STACK</div>
          <div className="h-px flex-1 bg-gradient-to-r from-neural-teal/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-16"
        >
          Stack
          <br />
          <span className="text-outline">Architecture.</span>
        </motion.h2>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="relative aspect-square lg:aspect-[4/3] glass rounded-sm overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-30" />

              <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-core-white/40">
                SYSTEM_GRAPH.svg
              </div>

              <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest text-logic-green flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-logic-green animate-pulse" />
                8 NODES · {EDGES.length} EDGES
              </div>

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {EDGES.map(([a, b], i) => {
                  const na = NODES.find((n) => n.id === a);
                  const nb = NODES.find((n) => n.id === b);
                  const active = activeNode && (activeNode === a || activeNode === b);

                  return (
                    <line
                      key={i}
                      x1={na.x}
                      y1={na.y}
                      x2={nb.x}
                      y2={nb.y}
                      stroke={active ? '#00F5FF' : 'rgba(248, 250, 252, 0.15)'}
                      strokeWidth="0.15"
                      vectorEffect="non-scaling-stroke"
                      style={{ transition: 'stroke 0.3s' }}
                    />
                  );
                })}
              </svg>

              {NODES.map((n, i) => {
                const isActive = activeNode === n.id;

                return (
                  <motion.button
                    key={n.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onMouseEnter={() => setActiveNode(n.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${n.x}%`, top: `${n.y}%` }}
                  >
                    <div
                      className={`relative w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all ${
                        isActive ? 'bg-neural-teal scale-150' : 'bg-neural-teal/70'
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-neural-teal transition-opacity ${
                          isActive ? 'opacity-50 animate-ping' : 'opacity-0'
                        }`}
                      />
                    </div>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 font-mono text-[10px] uppercase tracking-wider whitespace-nowrap transition-all ${
                        isActive ? 'text-neural-teal' : 'text-core-white/60'
                      }`}
                    >
                      {n.label}
                    </div>
                  </motion.button>
                );
              })}

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-core-white/40 uppercase">
                <span>Hover to trace connections</span>
                <span>∞</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-3">
            {GROUPS.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-sm p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 rounded-full bg-neural-teal" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-core-white/60">{g.label}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 border border-white/10 rounded-sm text-sm text-core-white/85 hover:border-neural-teal/50 hover:text-neural-teal transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}