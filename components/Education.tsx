"use client";

import { motion, Variants } from "framer-motion";
import { educationTimeline } from "@/data/education";
import { Calendar, Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-24 border-t border-border-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-extrabold"
          >
            Academic <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-border-dark max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {educationTimeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline node dot */}
                <span className="absolute -left-[35px] sm:-left-[51px] top-1 p-2 bg-background-dark border-2 border-border-dark group-hover:border-accent-teal rounded-full text-accent-teal transition-all duration-300 z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <GraduationCap size={16} />
                </span>

                {/* Timeline content card */}
                <div className="p-6 bg-card-dark border border-border-dark rounded-2xl group-hover:border-accent-teal/30 hover:shadow-lg transition-all duration-300">
                  {/* Title & Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-accent-teal transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-text-secondary text-sm font-semibold">{item.institution}</p>
                    </div>

                    {/* Timeline Node Details (Date & Grade) */}
                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1.5 mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-text-secondary font-mono">
                        <Calendar size={12} className="text-accent-teal" />
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-accent-teal-glow text-accent-teal text-xs font-bold rounded-full border border-accent-teal/20">
                        <Award size={12} />
                        {item.grade}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-border-dark my-4" />

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-accent-teal shrink-0 mt-0.5 opacity-80" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
