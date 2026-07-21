"use client";

import { motion } from "framer-motion";
import { User, BookOpen, GraduationCap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <BookOpen className="text-accent-teal" size={24} />, name: "Education", value: "MCA (Ongoing)" },
    { icon: <GraduationCap className="text-accent-teal" size={24} />, name: "Academic Average", value: "87% (Sem 2)" },
    { icon: <Award className="text-accent-teal" size={24} />, name: "Key Skills", value: "Java, Spring Boot" },
  ];

  return (
    <section id="about" className="py-24 bg-background-dark/50 border-t border-border-dark">
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-accent-teal mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Image Mock / Card Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative back glows */}
              <div className="absolute inset-0 bg-accent-teal rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-card-dark border border-border-dark flex flex-col items-center justify-center p-6 text-center shadow-lg transition-all duration-300 group-hover:border-accent-teal/50">
                <div className="p-4 bg-accent-teal-glow rounded-full mb-4">
                  <User className="text-accent-teal" size={60} />
                </div>
                <h3 className="text-xl font-bold text-text-primary">Jagdish B Chavda</h3>
                <p className="text-sm text-text-secondary mt-2">Java & Spring Boot Developer</p>
                <div className="w-full h-px bg-border-dark my-4" />
                <p className="text-xs text-text-secondary italic">
                  &quot;Striving to build robust, structured, and performant backend solutions.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Details & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary">
              Aspiring Backend Developer & MCA Student
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              I am currently pursuing my Master of Computer Applications (MCA) at Kadi Sarva 
              Vishwavidyalaya (KSV) in Gandhinagar, Gujarat. I have built a solid foundation in 
              Core Java, relational databases, and enterprise concepts like OOP, Java Collections, 
              and Multithreading.
            </p>

            <p className="text-text-secondary leading-relaxed">
              My hands-on academic training includes developing layered architectures, performing 
              CRUD operations using Spring Boot, Servlets, JSP, JDBC, and Oracle DB integration. 
              I also have basic Android application development experience using Kotlin and SQLite. 
              My focus is on writing clean, scalable code that bridges business needs with technical excellence.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 bg-card-dark border border-border-dark rounded-xl flex items-center gap-3 transition-colors hover:border-accent-teal/30 hover:bg-card-dark/70"
                >
                  <div className="p-2 bg-accent-teal-glow rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">{stat.name}</p>
                    <p className="text-sm font-bold text-text-primary">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
