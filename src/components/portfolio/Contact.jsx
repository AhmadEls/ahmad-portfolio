import { motion } from 'framer-motion';

const CHANNELS = [
  {
    label: 'Email',
    value: 'ahmadels.dev@gmail.com',
    href: 'mailto:ahmadels.dev@gmail.com',
    meta: 'DIRECT',
    symbol: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmadelsabeh',
    href: 'https://www.linkedin.com/in/ahmadelsabeh/',
    meta: 'PROFESSIONAL',
    symbol: '↗',
  },
  {
    label: 'GitHub',
    value: 'github.com/AhmadEls',
    href: 'https://github.com/AhmadEls',
    meta: 'CODE',
    symbol: '⌘',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 laser-line" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neural-teal/5 blur-3xl" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neural-teal">[05] ESTABLISH_CONNECTION</div>
          <div className="h-px flex-1 bg-gradient-to-r from-neural-teal/40 to-transparent" />
        </motion.div>

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-6xl md:text-7xl lg:text-[8rem] tracking-tighter leading-[0.9] mb-6"
          >
            Let’s
            <br />
            <span className="bg-gradient-to-r from-neural-teal via-neural-teal to-logic-green bg-clip-text text-transparent glow-text">
              build systems.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-core-white/55 max-w-xl mx-auto leading-relaxed"
          >
            Open to full-stack roles, product-focused teams, and serious engineering conversations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 max-w-5xl mx-auto">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              href={c.href}
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group relative glass rounded-sm p-6 lg:p-7 hover:border-neural-teal/40 transition-all duration-500 overflow-hidden"
              data-magnetic
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neural-teal/0 via-neural-teal/0 to-neural-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center group-hover:border-neural-teal group-hover:bg-neural-teal/10 transition-all duration-500">
                    <span className="text-core-white/70 group-hover:text-neural-teal transition-colors text-sm">
                      {c.symbol}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-core-white/40">{c.meta}</span>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-widest text-core-white/40 mb-1">
                  {c.label}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-core-white text-sm lg:text-base font-medium truncate pr-2">
                    {c.value}
                  </span>
                  <span className="text-core-white/30 group-hover:text-neural-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}