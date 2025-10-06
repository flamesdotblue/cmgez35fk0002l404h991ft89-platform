import { motion } from 'framer-motion';
import { Cpu, Code, Database, GitBranch, Cloud, Terminal, Layers, Box } from 'lucide-react';

const tools = [
  { name: 'React', icon: Code, color: 'from-cyan-400 to-blue-500' },
  { name: 'Three.js', icon: Box, color: 'from-violet-400 to-fuchsia-500' },
  { name: 'Node.js', icon: Cpu, color: 'from-emerald-400 to-teal-500' },
  { name: 'Databases', icon: Database, color: 'from-amber-400 to-orange-500' },
  { name: 'Git', icon: GitBranch, color: 'from-rose-400 to-pink-500' },
  { name: 'Cloud', icon: Cloud, color: 'from-sky-400 to-cyan-500' },
  { name: 'CLI', icon: Terminal, color: 'from-slate-300 to-slate-500' },
  { name: 'Design Systems', icon: Layers, color: 'from-purple-400 to-indigo-500' },
];

export default function TechTools() {
  return (
    <section id="tools" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-cyan-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold"
        >
          Tech Toolkit
        </motion.h2>
        <p className="mt-2 text-white/60 max-w-2xl">A selection of technologies I use to craft performant, rich interactive experiences.</p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
              className="group relative rounded-xl p-5 bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
              style={{ perspective: 800 }}
            >
              <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-20 blur transition`} />
              <div className="relative z-10 flex items-center gap-4">
                <div className={`grid place-items-center w-11 h-11 rounded-lg bg-gradient-to-br ${t.color} text-black/80 shadow-[0_0_24px_rgba(168,85,247,0.35)]`}>
                  <t.icon size={22} />
                </div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-white/60">Interactive 3D-ready</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
