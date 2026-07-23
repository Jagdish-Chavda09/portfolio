"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const roles = ["Java Developer", "Spring Boot Developer", "Backend Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    // Wait at the end of typing
    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    }
    // Switch to next word once fully deleted
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Canvas particle background logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 15000)); // Cap particles on smaller screen sizes
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse repelling interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 212, 191, 0.4)"; // Teal shade particle
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background gradients
      ctx.fillStyle = "#0B0F19";
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Tag / Location info */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-dark/60 rounded-full border border-border-dark text-sm text-text-secondary">
            <MapPin size={14} className="text-accent-teal" />
            <span>Gandhinagar, Gujarat</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight">
            Hi, I&apos;m <span className="text-gradient">Jagdish B Chavda</span>
          </h1>

          {/* Typewriter role showcase */}
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <p className="text-lg sm:text-2xl font-mono text-text-secondary">
              I am a <span className="text-accent-teal font-semibold">{typedText}</span>
              <span className="animate-pulse text-accent-teal font-bold ml-1">|</span>
            </p>
          </div>

          {/* Now / Status Line */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-accent-teal-glow text-accent-teal px-4 py-2 rounded-full border border-accent-teal/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Currently open to Java/Spring Boot fresher roles in Ahmedabad/Gandhinagar</span>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed pt-2">
            Core Java & Spring Boot developer specializing in building scalable backend systems, 
            relational databases integrations (Oracle/MySQL), and high-performance server logic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.button
              onClick={() => window.dispatchEvent(new Event("open-resume"))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-accent-teal hover:bg-accent-teal-hover text-text-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_4px_20px_0_rgba(13,148,136,0.3)] transition-all duration-200 cursor-pointer"
            >
              View Resume
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-card-dark border border-border-dark hover:border-accent-teal text-text-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200"
            >
              Contact Me
              <ArrowRight size={16} className="text-accent-teal" />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6 pt-8">
            <motion.a
              href="https://github.com/Jagdish-Chavda09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, color: "#F3F4F6" }}
              className="p-3 bg-card-dark/60 rounded-full border border-border-dark text-text-secondary hover:border-accent-teal/50 hover:bg-card-dark transition-all duration-200"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jagdish-chavda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, color: "#F3F4F6" }}
              className="p-3 bg-card-dark/60 rounded-full border border-border-dark text-text-secondary hover:border-accent-teal/50 hover:bg-card-dark transition-all duration-200"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href="mailto:ahirj864@gmail.com"
              whileHover={{ y: -4, color: "#F3F4F6" }}
              className="p-3 bg-card-dark/60 rounded-full border border-border-dark text-text-secondary hover:border-accent-teal/50 hover:bg-card-dark transition-all duration-200"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur rings */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-accent-teal-glow blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
