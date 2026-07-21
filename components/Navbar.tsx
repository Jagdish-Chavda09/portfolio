"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to adjust navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-heading font-extrabold tracking-wider text-text-primary">
              JBC<span className="text-accent-teal font-black">.</span>
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
                className="text-sm font-medium text-text-secondary hover:text-accent-teal hover:shadow-glow transition-all duration-200"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download="Jagdish_Chavda_Resume.pdf"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-accent-teal text-text-primary rounded-lg text-sm font-semibold hover:bg-accent-teal-hover shadow-[0_4px_14px_0_rgba(13,148,136,0.3)] transition-all duration-200"
            >
              <FileDown size={16} />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="/resume.pdf"
              download="Jagdish_Chavda_Resume.pdf"
              className="p-2 bg-accent-teal text-text-primary rounded-lg text-sm font-semibold hover:bg-accent-teal-hover shadow-md transition-all duration-200"
            >
              <FileDown size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-border-dark transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background-dark/95 backdrop-blur-lg border-b border-border-dark px-4 pt-2 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-card-dark transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
