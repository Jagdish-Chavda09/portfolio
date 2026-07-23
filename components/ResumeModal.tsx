"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown, Briefcase, GraduationCap, Award, Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-background-dark/50">
              <div className="flex items-center gap-2">
                <Award className="text-accent-teal" size={20} />
                <h2 className="text-lg font-heading font-bold text-text-primary">Interactive Resume</h2>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Jagdish_Chavda_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-teal hover:bg-accent-teal-hover text-text-primary rounded-lg text-xs font-bold transition-all duration-200"
                >
                  <FileDown size={14} />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-border-dark transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-background-dark/20 text-sm">
              {/* Profile / Contact Info */}
              <div className="text-center pb-6 border-b border-border-dark/60">
                <h1 className="text-3xl font-heading font-extrabold text-text-primary">Jagdish B Chavda</h1>
                <p className="text-accent-teal font-mono mt-1 text-sm">Java & Spring Boot Developer</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Mail size={12} className="text-accent-teal" />
                    ahirj864@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={12} className="text-accent-teal" />
                    +91 7874308473
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-accent-teal" />
                    Gandhinagar, Gujarat, India
                  </span>
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-text-primary flex items-center gap-2 border-b border-border-dark pb-2">
                  <GraduationCap className="text-accent-teal" size={18} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between font-bold text-text-primary">
                      <span>Master of Computer Applications (MCA)</span>
                      <span className="text-accent-teal font-mono font-normal">2024 - Present</span>
                    </div>
                    <div className="text-text-secondary text-xs">Kadi Sarva Vishwavidyalaya, Gandhinagar</div>
                    <p className="mt-1 text-text-secondary text-xs">CGPA: 8.7 (Sem 2 Average)</p>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between font-bold text-text-primary">
                      <span>Bachelor of Computer Applications (BCA)</span>
                      <span className="text-accent-teal font-mono font-normal">2021 - 2024</span>
                    </div>
                    <div className="text-text-secondary text-xs">Saurashtra University, Rajkot</div>
                    <p className="mt-1 text-text-secondary text-xs">Graduated with distinction</p>
                  </div>
                </div>
              </div>

              {/* Technical Expertise Section */}
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-text-primary flex items-center gap-2 border-b border-border-dark pb-2">
                  <Award className="text-accent-teal" size={18} />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-card-dark rounded-xl border border-border-dark/60">
                    <h4 className="font-bold text-text-primary mb-2 text-xs uppercase tracking-wider text-accent-teal">Languages & Core</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Java (OOPs, Collections, Multithreading, Exceptions), Kotlin (Basic), SQL, HTML5, CSS3, Javascript.
                    </p>
                  </div>
                  <div className="p-4 bg-card-dark rounded-xl border border-border-dark/60">
                    <h4 className="font-bold text-text-primary mb-2 text-xs uppercase tracking-wider text-accent-teal">Frameworks & APIs</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Spring Boot, Spring MVC, REST APIs, Servlets & JSP, JDBC, JPA / Hibernate.
                    </p>
                  </div>
                  <div className="p-4 bg-card-dark rounded-xl border border-border-dark/60">
                    <h4 className="font-bold text-text-primary mb-2 text-xs uppercase tracking-wider text-accent-teal">Databases & Storage</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Oracle Database, MySQL, SQLite, PostgreSQL (Learning).
                    </p>
                  </div>
                  <div className="p-4 bg-card-dark rounded-xl border border-border-dark/60">
                    <h4 className="font-bold text-text-primary mb-2 text-xs uppercase tracking-wider text-accent-teal">Tools & Practices</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      Git, GitHub, Eclipse, IntelliJ IDEA, RESTful API Design, MVC Architecture, Database Normalization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlighted Projects */}
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-text-primary flex items-center gap-2 border-b border-border-dark pb-2">
                  <Briefcase className="text-accent-teal" size={18} />
                  Key Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-bold text-text-primary">
                      <span>Employee Management System (Layered CRUD)</span>
                      <span className="text-text-secondary font-mono font-normal text-xs">Java, Spring Boot, Oracle DB</span>
                    </div>
                    <p className="text-text-secondary text-xs mt-1 leading-relaxed">
                      Developed a full employee directory backend mapping REST API controls with layered business-level logic. Used Oracle DB integration for transaction integrity and data durability.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between font-bold text-text-primary">
                      <span>Interactive Task Planner</span>
                      <span className="text-text-secondary font-mono font-normal text-xs">Kotlin, SQLite, Android SDK</span>
                    </div>
                    <p className="text-text-secondary text-xs mt-1 leading-relaxed">
                      Built a lightweight local planner app on Android using Kotlin. Handled custom recurring database schema updates with SQLite helper hooks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Highlights */}
              <div className="p-4 bg-accent-teal-glow border border-accent-teal/20 rounded-xl">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong className="text-accent-teal">Career Objective:</strong> Motivated Java/Spring Boot Fresher Developer striving to join an agile software team. Prepared with structured OOP principles, clean coding best practices, and solid backend foundation to build enterprise products.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border-dark bg-background-dark/50 flex justify-between items-center">
              <span className="text-xs text-text-secondary font-mono">
                 अहमदाबाद / गांधीनगर (Ahmedabad / Gandhinagar)
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-border-dark hover:border-accent-teal text-text-primary rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
