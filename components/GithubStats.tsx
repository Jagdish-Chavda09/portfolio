"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Eye } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export default function GithubStats() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statsTheme = theme === "dark" ? "radical" : "default";

  return (
    <div className="mt-20 border-t border-border-dark pt-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-heading font-bold text-text-primary flex items-center justify-center gap-2">
          <Github className="text-accent-teal" size={24} />
          GitHub Development Activity
        </h3>
        <p className="text-xs text-text-secondary mt-2 max-w-md mx-auto">
          Live statistics showing repository metrics and language contributions on GitHub.
        </p>
      </div>

      {mounted && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Card 1: Main Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-card-dark border border-border-dark rounded-2xl flex justify-center shadow-md overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=Jagdish-Chavda09&show_icons=true&theme=${statsTheme}&border_radius=12&bg_color=${theme === "dark" ? "161D30" : "FFFFFF"}`}
              alt="Jagdish B Chavda's GitHub Stats"
              className="w-full max-w-md h-auto object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Card 2: Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-4 bg-card-dark border border-border-dark rounded-2xl flex justify-center shadow-md overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Jagdish-Chavda09&layout=compact&theme=${statsTheme}&border_radius=12&bg_color=${theme === "dark" ? "161D30" : "FFFFFF"}`}
              alt="Jagdish B Chavda's Top Languages"
              className="w-full max-w-md h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      )}

      {/* Profile CTA */}
      <div className="text-center mt-8">
        <motion.a
          href="https://github.com/Jagdish-Chavda09"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-card-dark border border-border-dark hover:border-accent-teal text-text-primary rounded-xl text-xs font-bold transition-all duration-200"
        >
          <Github size={14} className="text-accent-teal" />
          Visit My GitHub Profile
        </motion.a>
      </div>
    </div>
  );
}
