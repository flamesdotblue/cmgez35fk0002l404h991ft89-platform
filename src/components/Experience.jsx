import { motion } from 'framer-motion';

const items = [
  {
    role: 'Senior Creative Developer',
    company: 'Cyberwave Studio',
    period: '2023 — Present',
    desc: 'Leading development of immersive brand experiences and web apps with 3D and motion.',
    hue: 'from-fuchsia-400 to-cyan-400',
  },
  {
    role: 'Frontend Engineer',
    company: 'Neon Labs',
    period: '2021 — 2023',
    desc: 'Built component libraries and high-performance interfaces for SaaS platforms.',
    hue: 'from-violet-400 to-indigo-400',
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    period: '2019 — 2021',
    desc: 'Launched bespoke sites for startups with emphasis on design systems and DX.',
    hue: 'from-emerald-400 to-teal-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold"
        >
          Experience
        </motion.h2>
        <p className="mt-2 text-white/60 max-w-2xl">A 3D-inspired journey through roles and responsibilities.</p>

        <div className="relative mt-12">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0" />

          <div className="space-y-10">
            {items.map((it, i) => {
              const isLeft = i % 2 === 0; // Alternate sides on md+
              const sideClass = isLeft ? 'md:col-start-1' : 'md:col-start-2';
              const alignClass = isLeft ? 'md:pr-8' : 'md:pl-8';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24, rotateX: -6 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Dot on the center line */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-white/20 border border-white/30 shadow-[0_0_24px_rgba(255,255,255,0.35)]" />

                  {/* Spacer on opposite column for md+ to preserve the zig-zag */}
                  <div className={isLeft ? 'hidden md:block' : 'hidden md:block'} />

                  {/* Card */}
                  <div className={`relative ${sideClass} ${alignClass}`} style={{ perspective: 1000 }}>
                    <motion.div
                      whileHover={{ rotateX: 4, rotateY: isLeft ? -6 : 6, translateZ: 6 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      className="rounded-xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-md"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${it.hue} opacity-0 hover:opacity-20 blur transition pointer-events-none`} />
                      <div className="relative">
                        <div className="text-sm text-white/60">{it.period}</div>
                        <div className="mt-1 text-lg font-semibold">
                          {it.role} · <span className="text-white/80">{it.company}</span>
                        </div>
                        <p className="mt-2 text-white/70">{it.desc}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
