import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 'SYS_01',
    type: 'AI_PRODUCT',
    year: '2026',
    title: 'Ziyarah — AI Travel Planner',
    description:
      'AI-powered travel planning platform for Lebanon with Google authentication, Gemini-generated itineraries, Google Places integration, trip history, and saved user journeys.',
    stack: ['React', 'Vite', 'Firebase', 'Firestore', 'Gemini API', 'Google Places'],
    status: 'LIVE DEMO',
    live: true,
    href: 'https://ai-senior-web-planner-vdlo.vercel.app/',
    snippet: `const trip = await gemini.generateContent({
  destination,
  days,
  budget,
  travelers
});

await saveTrip(userId, trip);`,
  },
  {
    id: 'SYS_02',
    type: 'FULL_STACK',
    year: '2026',
    title: 'Bugless — Engineering Issue Tracker',
    description:
      'Full-stack issue tracking dashboard built for realistic debugging workflows. Supports issue creation, status transitions, investigation logs, root-cause analysis, resolution notes, activity timelines, dashboard metrics, and filtering.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    status: 'LOCAL DEMO / SOURCE AVAILABLE',
    live: false,
    href: 'https://github.com/AhmadEls/bugless',
    snippet: `await issue.updateStatus('IN_PROGRESS');

activityLog.push({
  type: 'STATUS_CHANGE',
  message: 'Issue moved to investigation'
});`,
  },
  {
    id: 'SYS_03',
    type: 'IN_PROGRESS',
    year: '2026',
    title: 'VerifyHub Lite — Compliance Dashboard',
    description:
      'KYC-inspired verification review dashboard concept for managing identity sessions, reviewer decisions, risk scores, verification status, and audit-style activity logs.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Auth', 'REST API'],
    status: 'IN PROGRESS',
    live: false,
    href: '',
    snippet: `const riskScore = calculateRisk(checks);

auditLog.create({
  action: 'SESSION_REVIEWED'
});`,
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
            [02] SELECTED_SYSTEMS
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
            Selected
            <br />
            <span className="text-outline">Work.</span>
          </h2>

          <p className="text-core-white/50 max-w-md leading-relaxed text-sm lg:text-base">
            A focused collection of full-stack, AI, and dashboard systems built around real product workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}