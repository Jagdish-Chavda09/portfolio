"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, ContactInput } from "@/lib/validation";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Thank you! Your message has been sent successfully.");
        reset();
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border-dark">
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
            Get In <span className="text-gradient">Touch</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Let&apos;s build something great together!
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I am open to fresher opportunities, internships, and collaborations in backend systems 
              engineering, REST APIs creation, and database modeling. Drop a message!
            </p>

            <div className="space-y-4">
              {/* Phone item */}
              <div className="flex items-center gap-4 p-4 bg-card-dark border border-border-dark rounded-xl">
                <div className="p-3 bg-accent-teal-glow rounded-lg text-accent-teal">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Call / WhatsApp</p>
                  <a href="tel:+917874308473" className="text-sm font-bold text-text-primary hover:text-accent-teal transition-colors">
                    +91 7874308473
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-4 p-4 bg-card-dark border border-border-dark rounded-xl">
                <div className="p-3 bg-accent-teal-glow rounded-lg text-accent-teal">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Email Address</p>
                  <a href="mailto:ahirj864@gmail.com" className="text-sm font-bold text-text-primary hover:text-accent-teal transition-colors">
                    ahirj864@gmail.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 p-4 bg-card-dark border border-border-dark rounded-xl">
                <div className="p-3 bg-accent-teal-glow rounded-lg text-accent-teal">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Location</p>
                  <p className="text-sm font-bold text-text-primary">
                    Gandhinagar, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card-dark border border-border-dark rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-text-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`w-full px-4 py-3 bg-background-dark border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors ${
                    errors.name ? "border-red-500" : "border-border-dark"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-semibold text-text-primary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`w-full px-4 py-3 bg-background-dark border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors ${
                    errors.email ? "border-red-500" : "border-border-dark"
                  }`}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-text-primary">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 bg-background-dark border rounded-xl text-text-primary text-sm focus:outline-none focus:border-accent-teal transition-colors resize-none ${
                    errors.message ? "border-red-500" : "border-border-dark"
                  }`}
                  placeholder="How can I help you?"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-accent-teal hover:bg-accent-teal-hover text-text-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(13,148,136,0.3)] transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
