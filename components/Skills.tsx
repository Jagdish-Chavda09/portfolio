"use client";

import { motion, Variants } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Terminal, Shield, Database, Layout, Wrench } from "lucide-react";

export default function Skills() {
  // Map icons to categories
  const getCategoryIcon = (title: string) => {
    const cleanTitle = title.toLowerCase();
    if (cleanTitle.includes("languages")) {
      return <Terminal className="text-accent-teal" size={20} />;
    } else if (cleanTitle.includes("frameworks")) {
      return <Layout className="text-accent-teal" size={20} />;
    } else if (cleanTitle.includes("database")) {
      return <Database className="text-accent-teal" size={20} />;
    } else if (cleanTitle.includes("concepts")) {
      return <Shield className="text-accent-teal" size={20} />;
    } else {
      // Default / tools
      return <Wrench className="text-accent-teal" size={20} />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 border-t border-border-dark">
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="p-6 bg-card-dark border border-border-dark rounded-2xl hover:border-accent-teal/40 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-accent-teal-glow rounded-xl">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-lg font-heading font-bold text-text-primary group-hover:text-accent-teal transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List inside Category */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-text-primary">{skill.name}</span>
                      <span className="text-text-secondary text-xs">{skill.level}</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 bg-background-dark rounded-full overflow-hidden border border-border-dark/60">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-accent-teal rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
