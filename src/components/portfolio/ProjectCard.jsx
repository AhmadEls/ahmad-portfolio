import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index, featured }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group relative glass rounded-sm overflow-hidden transition-all duration-500 cursor-pointer
        ${hover ? 'border-neural-teal/40 shadow-[0_0_60px_rgba(0,245,255,0.07)]' : 'border-white/6'}
        ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-2.5">
          <motion.div
            animate={{ opacity: hover ? 1 : 0.45, scale: hover ? 1.1 : 1 }}
            className="w-1.5 h-1.5 rounded-full bg-neural-teal"
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-core-white/45">
            {project.id} · {project.type}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {project.live && (
            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-logic-green">
              <span className="w-1 h-1 rounded-full bg-logic-green animate-pulse" />
              Live
            </span>
          )}
          <span className="font-mono text-[9px] text-core-white/35">{project.year}</span>
        </div>
      </div>

      <div className={`relative p-6 lg:p-8 flex flex-col ${featured ? 'lg:flex-row lg:gap-10' : ''}`}>
        <motion.pre
          animate={{ opacity: hover ? 0.1 : 0, y: hover ? 0 : 8 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-4 right-4 font-mono text-[9px] leading-relaxed text-neural-teal max-w-[55%] text-right pointer-events-none whitespace-pre hidden md:block"
          aria-hidden
        >
          {project.snippet}
        </motion.pre>

        <div className={`flex flex-col ${featured ? 'lg:flex-1' : ''}`}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3
              className={`font-display font-bold tracking-tight text-core-white relative z-10 ${
                featured ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'
              }`}
            >
              {project.title}
            </h3>

            <motion.div
              animate={{
                x: hover ? 4 : 0,
                y: hover ? -4 : 0,
                backgroundColor: hover ? 'rgba(0,245,255,0.1)' : 'transparent',
                borderColor: hover ? 'rgba(0,245,255,0.5)' : 'rgba(255,255,255,0.1)',
              }}
              className="w-10 h-10 rounded-sm border flex-shrink-0 flex items-center justify-center"
            >
              <ArrowUpRight className={`w-4 h-4 transition-colors ${hover ? 'text-neural-teal' : 'text-core-white/50'}`} />
            </motion.div>
          </div>

          <p className="text-core-white/65 text-sm leading-relaxed mb-6 relative z-10 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1.5 border border-white/10 text-core-white/60 rounded-sm bg-white/2 group-hover:border-white/20 transition-all"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10 mt-auto">
            <span className="font-mono text-[10px] uppercase tracking-widest text-core-white/35">
              {project.status}
            </span>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-neural-teal/70 hover:text-neural-teal transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                View Product
              </a>
            )}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(0,245,255,0.07), transparent 55%)',
        }}
      />
    </motion.article>
  );
}