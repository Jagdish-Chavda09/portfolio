"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: (resolvedTheme || "dark") as "dark" | "light",
    toggleTheme,
    rawTheme: theme,
    setTheme,
  };
}
