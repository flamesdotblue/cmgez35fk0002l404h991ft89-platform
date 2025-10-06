import { useEffect } from 'react';
import Landing from './components/Landing';
import TechTools from './components/TechTools';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Set a dark, neon-friendly background for the app root
    document.body.classList.add('bg-[#05060a]', 'text-white', 'antialiased');
    return () => {
      document.body.classList.remove('bg-[#05060a]', 'text-white', 'antialiased');
    };
  }, []);

  return (
    <div className="min-h-screen w-full scroll-smooth bg-gradient-to-b from-[#05060a] via-[#0a0b11] to-[#0b0d14]">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white/90 hover:text-white transition">neon.folio</a>
          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <a href="#tools" className="hover:text-white transition">Tech</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="md:hidden text-sm text-white/80 hover:text-white">Contact</a>
        </div>
      </header>

      <main className="relative">
        <Landing />
        <TechTools />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Your Name. Crafted with React, Tailwind, and Spline.
      </footer>
    </div>
  );
}
