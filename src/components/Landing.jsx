import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

export default function Landing() {
  return (
    <section id="home" className="relative w-full h-[82vh] md:h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#05060a]/20 to-[#05060a]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="block text-white/90">Hi, I’m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                Your Name — Creative Developer
              </span>
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl">
              I build immersive, interactive 3D web experiences that blend performance, design, and storytelling.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#projects"
                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600/80 to-cyan-500/80 hover:from-fuchsia-500 hover:to-cyan-400 text-white px-5 py-2.5 shadow-[0_0_24px_rgba(168,85,247,0.35)] transition"
              >
                Explore Work
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-5 py-2.5 transition">
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.a
          href="#tools"
          className="pointer-events-auto inline-flex items-center gap-2 text-white/60 hover:text-white"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
