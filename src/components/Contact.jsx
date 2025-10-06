import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 w-72 h-72 rounded-full blur-3xl bg-fuchsia-500/20" />
        <div className="absolute -bottom-24 left-10 w-72 h-72 rounded-full blur-3xl bg-cyan-500/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold"
        >
          Contact
        </motion.h2>
        <p className="mt-2 text-white/60 max-w-2xl">Have a project in mind or want to collaborate? Let’s build something futuristic.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-400 to-cyan-400 opacity-0 hover:opacity-20 blur pointer-events-none transition" />
            <div className="relative">
              <div className="text-white/70">Connect</div>
              <div className="mt-2 flex gap-3">
                <a aria-label="GitHub" href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition">
                  <Github size={18} />
                </a>
                <a aria-label="LinkedIn" href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition">
                  <Linkedin size={18} />
                </a>
                <a aria-label="Twitter" href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition">
                  <Twitter size={18} />
                </a>
              </div>
              <div className="mt-6 text-sm text-white/60">
                Or email: <a href="mailto:you@example.com" className="text-white hover:underline">you@example.com</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input
                type="text"
                placeholder="Astronaut Ada"
                className="mt-2 w-full rounded-lg bg-white/[0.03] border border-white/10 focus:border-fuchsia-400/60 focus:outline-none px-4 py-3 text-white placeholder:text-white/40"
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                placeholder="ada@cosmos.dev"
                className="mt-2 w-full rounded-lg bg-white/[0.03] border border-white/10 focus:border-cyan-400/60 focus:outline-none px-4 py-3 text-white placeholder:text-white/40"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-white/70">Project details</label>
              <textarea
                rows={5}
                placeholder="Tell me about your idea, timeline, and goals."
                className="mt-2 w-full rounded-lg bg-white/[0.03] border border-white/10 focus:border-fuchsia-400/60 focus:outline-none px-4 py-3 text-white placeholder:text-white/40"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600/80 to-cyan-500/80 hover:from-fuchsia-500 hover:to-cyan-400 text-white px-6 py-2.5 shadow-[0_0_24px_rgba(168,85,247,0.35)] transition">
                Send Message
              </button>
              <span className="text-xs text-white/50">This form is a demo. Wire it to your favorite email/CRM service.</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
