"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award } from "lucide-react";
import Image from "next/image";

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
          {/* Left Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-teal to-teal-500 rounded-2xl opacity-35 blur-md group-hover:opacity-70 transition duration-500" />
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-[220px] h-[220px] sm:w-[340px] sm:h-[340px] rounded-2xl overflow-hidden bg-card-dark border border-border-dark shadow-2xl flex items-center justify-center"
              >
                <Image
                  src="/profile.png"
                  alt="Jagdish B Chavda - Java & Spring Boot Developer"
                  fill
                  sizes="(max-width: 640px) 220px, 340px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
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
