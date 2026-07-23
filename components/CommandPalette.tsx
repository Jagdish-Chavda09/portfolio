"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, ShieldAlert, FileDown, Sun, Moon, ArrowRight, CornerDownLeft } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface CommandItem {
  icon: React.ReactNode;
  label: string;
  category: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      icon: <Compass size={16} />,
      label: "Go to Home",
      category: "Navigation",
      action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Compass size={16} />,
      label: "Go to About",
      category: "Navigation",
      action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Compass size={16} />,
      label: "Go to Technical Skills",
      category: "Navigation",
      action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Compass size={16} />,
      label: "Go to Projects",
      category: "Navigation",
      action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Compass size={16} />,
      label: "Go to Education",
      category: "Navigation",
      action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Compass size={16} />,
      label: "Go to Contact",
      category: "Navigation",
      action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <FileDown size={16} />,
      label: "View Interactive Resume",
      category: "Utility",
      action: () => window.dispatchEvent(new Event("open-resume")),
    },
    {
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Utility",
      action: toggleTheme,
    },
  ];

  // Filter commands by search query
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Monitor toggle keystroke (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
      setSearch("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Navigate options using Keyboard Arrows
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-card-dark border border-border-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            onKeyDown={handleKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-border-dark bg-background-dark/30">
              <Search className="text-text-secondary shrink-0 mr-3" size={18} />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-text-primary text-sm focus:outline-none placeholder-text-secondary/60"
              />
              <span className="hidden sm:inline-block text-[10px] font-mono bg-background-dark text-text-secondary border border-border-dark px-1.5 py-0.5 rounded shadow">
                ESC
              </span>
            </div>

            {/* List of Results */}
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isActive
                          ? "bg-accent-teal text-text-primary"
                          : "text-text-secondary hover:bg-background-dark/50 hover:text-text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isActive ? "text-text-primary" : "text-accent-teal"}>
                          {cmd.icon}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="text-xs font-semibold">{cmd.label}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider ${
                            isActive 
                              ? "bg-text-primary/20 text-text-primary" 
                              : "bg-background-dark text-text-secondary/80 border border-border-dark"
                          }`}>
                            {cmd.category}
                          </span>
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[10px] flex items-center gap-0.5 font-mono text-text-primary/80 opacity-70">
                          enter <CornerDownLeft size={10} />
                        </span>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-xs text-text-secondary flex flex-col items-center justify-center gap-2">
                  <ShieldAlert size={20} className="text-accent-teal opacity-60 animate-bounce" />
                  No commands matched your query.
                </div>
              )}
            </div>

            {/* Hint Footer */}
            <div className="px-4 py-2 bg-background-dark/50 border-t border-border-dark flex items-center justify-between text-[10px] text-text-secondary">
              <div className="flex gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <span className="font-mono">Ctrl+K or ⌘+K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
