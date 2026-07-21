"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background-dark border-t border-border-dark py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-text-secondary">
              &copy; {currentYear} <span className="text-text-primary font-semibold">Jagdish B Chavda</span>. All rights reserved.
            </p>
            <p className="text-xs text-text-secondary/70 mt-1">
              Built with Next.js, React, Tailwind CSS, &amp; Framer Motion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Jagdish-Chavda09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card-dark border border-border-dark rounded-lg text-text-secondary hover:text-accent-teal hover:border-accent-teal/40 transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jagdish-chavda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card-dark border border-border-dark rounded-lg text-text-secondary hover:text-accent-teal hover:border-accent-teal/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ahirj864@gmail.com"
              className="p-2 bg-card-dark border border-border-dark rounded-lg text-text-secondary hover:text-accent-teal hover:border-accent-teal/40 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={handleScrollToTop}
              className="p-2 bg-accent-teal text-text-primary rounded-lg hover:bg-accent-teal-hover shadow-md transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
