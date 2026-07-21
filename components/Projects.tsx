"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { Github, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-background-dark/30 border-t border-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between p-6 bg-card-dark border border-border-dark rounded-2xl transition-all duration-300 hover:border-accent-teal/40 hover:shadow-[0_10px_30px_-15px_rgba(13,148,136,0.3)] group"
            >
              <div>
                {/* Header Icon + Action Links */}
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-accent-teal-glow rounded-xl">
                    <Folder className="text-accent-teal" size={24} />
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 hover:text-accent-teal hover:bg-background-dark rounded-lg transition-all duration-200"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveDemoLink && project.liveDemoLink !== "#" && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 hover:text-accent-teal hover:bg-background-dark rounded-lg transition-all duration-200"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Descriptions */}
                <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-accent-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.longDescription && (
                  <p className="text-xs text-text-secondary/70 italic mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techBadges.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2.5 py-1 bg-background-dark border border-border-dark text-xs text-accent-teal rounded-md font-mono"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
