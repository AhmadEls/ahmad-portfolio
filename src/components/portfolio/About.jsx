import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const PARAGRAPHS = [
  "I'm a Computer Science graduate who builds real, working products — not just polished interfaces.",
  "My focus is connecting frontend, backend, and AI into systems that feel intentional, usable, and production-ready.",
  "I think like an engineer: structured, analytical, and obsessed with how the pieces fit together from user flow to system architecture.",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [typed, setTyped] = useState(['', '', '']);

  useEffect(() => {
    if (!inView) return;

    PARAGRAPHS.forEach((text, idx) => {
      let i = 0;
      const delay = idx * 350;

      setTimeout(() => {
        const interval = setInterval(() => {
          i += 1;
          setTyped((prev) => {
            const next = [...prev];
            next[idx] = text.slice(0, i);
            return next;
          });

          if (i >= text.length) clearInterval(interval);
        }, 11);
      }, delay);
    });
  }, [inView]);

  return (
    <section id="about" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 laser-line" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neural-teal">[04] PROFILE_LOG</div>
          <div className="h-px flex-1 bg-gradient-to-r from-neural-teal/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-core-white/40 mb-3">// about</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[0.95]">
              Profile
              <br />
              <span className="text-outline">Log.</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-9 lg:pl-12">
            <div className="glass-strong rounded-sm p-7 lg:p-10 relative">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-logic-green animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/50">
                  aes@profile ~ $ cat about.md
                </span>
              </div>

              <div className="space-y-6">
                {typed.map((text, i) => (
                  <p
                    key={i}
                    className="text-lg md:text-xl lg:text-2xl text-core-white/85 font-body font-light leading-relaxed"
                  >
                    {i === 0 && text && (
                      <span className="font-mono text-neural-teal text-sm mr-2">→</span>
                    )}
                    {text}
                    {text.length < PARAGRAPHS[i].length && inView && (
                      <span className="inline-block w-[2px] h-5 bg-neural-teal ml-0.5 animate-pulse" />
                    )}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
                {[
                  { label: 'Degree', value: 'CS Grad' },
                  { label: 'Focus', value: 'Full-Stack' },
                  { label: 'Status', value: 'Shipping' },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-core-white/40 mb-1">
                      {m.label}
                    </div>
                    <div className="font-display font-semibold text-lg lg:text-xl text-core-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}