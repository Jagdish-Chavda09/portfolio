"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, Network, ArrowRight } from "lucide-react";

export default function Learning() {
  const learningTopics = [
    {
      title: "Spring & REST API Dev",
      description: "Building production-ready RESTful APIs, mastering controller annotations, request mapping, error handling, DTO mapping, and JPA hibernate operations.",
      icon: <BookOpen className="text-accent-teal" size={24} />,
      status: "Active Study",
      progress: 85,
    },
    {
      title: "Spring AI & LangChain4j",
      description: "Exploring retrieval augmented generation (RAG), linking Large Language Models to Java backends, and configuring intelligent AI vector stores.",
      icon: <Cpu className="text-accent-teal" size={24} />,
      status: "Exploring",
      progress: 40,
    },
    {
      title: "Linux & VMware",
      description: "Studying systems administration, shell commands, virtual machines networking, and configuring local staging environments for backend deployments.",
      icon: <Network className="text-accent-teal" size={24} />,
      status: "Secondary Focus",
      progress: 60,
    },
  ];

  return (
    <section id="learning" className="py-24 bg-background-dark/30 border-t border-border-dark">
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
            What I&apos;m <span className="text-gradient">Learning</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card-dark border border-border-dark rounded-2xl flex flex-col justify-between hover:border-accent-teal/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent-teal-glow rounded-xl">
                    {topic.icon}
                  </div>
                  {/* Pulse Indicator */}
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-background-dark border border-border-dark text-[10px] font-bold text-text-secondary font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
                    </span>
                    {topic.status}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-text-primary mb-3 group-hover:text-accent-teal transition-colors">
                  {topic.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              {/* Progress Slider (Visual Indicator) */}
              <div className="space-y-2 mt-auto">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-text-secondary">Study Progress</span>
                  <span className="text-accent-teal font-semibold">{topic.progress}%</span>
                </div>
                <div className="h-1.5 bg-background-dark rounded-full overflow-hidden border border-border-dark/60">
                  <div
                    className="h-full bg-accent-teal rounded-full transition-all duration-1000"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
