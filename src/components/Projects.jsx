import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectData = [
  {
    title: 'Nebula Navigator',
    summary: 'A cosmic exploration microsite with volumetric stars and shader-driven nebulae.',
    tags: ['Three.js', 'GLSL', 'Vite'],
    link: '#',
    repo: '#',
    hue: 'from-fuchsia-400 to-pink-500',
  },
  {
    title: 'Holo Shop',
    summary: 'Futuristic e-commerce concept with 3D product viewers and AR previews.',
    tags: ['React', 'Three.js', 'Stripe'],
    link: '#',
    repo: '#',
    hue: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Circuit City',
    summary: 'An interactive cityscape with procedural lighting and parallax depth.',
    tags: ['WebGL', 'Postprocessing', 'GSAP'],
    link: '#',
    repo: '#',
    hue: 'from-emerald-400 to-teal-500',
  },
];

function ProjectCard({ p, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      className="relative rounded-2xl p-1 bg-white/[0.05] border border-white/10"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${p.hue} opacity-0 hover:opacity-20 blur transition pointer-events-none`} />

      <div
        className="relative rounded-[14px] overflow-hidden bg-[#0a0d16]"
        style={{ perspective: 1000 }}
      >
        <motion.div
          whileHover={{ rotateY: 10, rotateX: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="p-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.summary}</p>
            </div>
            <div className={`w-28 h-20 md:w-36 md:h-24 rounded-lg bg-gradient-to-br ${p.hue} relative shadow-[0_0_40px_rgba(168,85,247,0.25)]`}>
              <div className="absolute inset-2 rounded-md bg-black/30 backdrop-blur-sm" />
              <motion.div
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: [0, 360] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/50 rounded-md" style={{ transform: 'translateZ(24px)' }} />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white/30 rounded-md" style={{ transform: 'translateZ(-24px)' }} />
              </motion.div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <a href={p.link} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
              <ExternalLink size={16} /> Live
            </a>
            <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white transition">
              <Github size={16} /> Code
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-auto text-xs rounded-full border border-white/10 px-3 py-1.5 hover:border-white/30 text-white/70 hover:text-white transition"
            >
              {open ? 'Hide details' : 'Reveal details'}
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-white/70"
            >
              Built with performance budgets, GPU-friendly materials, and accessibility in mind. Includes SSR-friendly fallbacks.
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-fuchsia-500/10" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold"
        >
          Projects
        </motion.h2>
        <p className="mt-2 text-white/60 max-w-2xl">Interactive 3D showcases. Hover to tilt, click to reveal details.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectData.map((p, idx) => (
            <ProjectCard key={p.title} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
