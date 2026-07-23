"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import ResumeModal from "@/components/ResumeModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener("open-resume", handleOpenResume);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-resume", handleOpenResume);
    };
  }, []);

  // Page scroll progress bar setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-dark/80 backdrop-blur-md border-b border-border-dark py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-accent-teal origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* Logo / Branding */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group min-h-[44px]"
          >
            <span className="text-xl font-heading font-extrabold tracking-wider text-text-primary">
              JERRY<span className="text-accent-teal font-black">.</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono bg-border-dark text-accent-teal px-2 py-0.5 rounded border border-accent-teal/20 group-hover:border-accent-teal/60 transition-colors">
              Java Dev
            </span>
          </motion.a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="text-sm font-medium text-text-secondary hover:text-accent-teal hover:shadow-glow transition-all duration-200 min-h-[44px] flex items-center"
              >
                {link.name}
              </motion.a>
            ))}
            {/* Theme Toggle Button (Desktop) */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-text-secondary hover:text-accent-teal hover:bg-card-dark transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setIsResumeOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-accent-teal text-text-primary rounded-lg text-sm font-semibold hover:bg-accent-teal-hover shadow-[0_4px_14px_0_rgba(13,148,136,0.3)] transition-all duration-200 min-h-[40px] cursor-pointer"
            >
              <FileDown size={16} />
              Resume
            </motion.button>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-text-secondary hover:text-accent-teal hover:bg-card-dark transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="w-11 h-11 flex items-center justify-center bg-accent-teal text-text-primary rounded-lg text-sm font-semibold hover:bg-accent-teal-hover shadow-md transition-all duration-200 cursor-pointer"
              aria-label="View Resume"
            >
              <FileDown size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-border-dark transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 z-50 bg-card-dark border-l border-border-dark p-6 flex flex-col space-y-6 shadow-2xl md:hidden"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-border-dark pb-4">
                <span className="text-lg font-heading font-extrabold tracking-wider text-text-primary">
                  JBC<span className="text-accent-teal font-black">.</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-border-dark transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation links inside drawer */}
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 rounded-xl text-base font-semibold text-text-secondary hover:text-accent-teal hover:bg-background-dark/50 transition-all duration-200 min-h-[44px]"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </header>
  );
}
