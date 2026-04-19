import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 'SYS_01',
    type: 'FLAGSHIP',
    year: '2026',
    title: 'Ziyarah — AI Trip Planner',
    description:
      'A full-stack AI travel platform for Lebanon that generates personalized multi-day itineraries using Google Gemini, real location data, secure authentication, and a polished product-grade interface.',
    stack: ['React', 'Node.js', 'Gemini API', 'Firebase', 'Google OAuth'],
    status: 'LIVE IN PRODUCTION',
    live: true,
    href: 'https://ai-senior-web-planner-vdlo.vercel.app/',
    featured: true,
    snippet: `const plan = await gemini.generate({
  prompt: buildTripPrompt(city, days),
  format: 'structured_json'
});
return parsePlan(plan.response);`,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 laser-line" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neural-teal">
            [02] PRODUCT_HIGHLIGHT
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-neural-teal/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            Flagship
            <br />
            <span className="text-outline">System.</span>
          </h2>

          <p className="text-core-white/50 max-w-sm leading-relaxed text-sm lg:text-base">
            A product-first showcase focused on one complete, shipped system built end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:gap-5">
          {PROJECTS.map((p, i) => (
            <div key={p.id}>
              <ProjectCard project={p} index={i} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}