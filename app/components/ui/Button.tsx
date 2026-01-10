"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "solid-light" | "outline-light";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "solid",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium rounded-full transition-all duration-300 ease-out";

  const variants = {
    // Dark theme variants (for hero/dark sections)
    solid: "bg-white text-black hover:bg-white/90 hover:scale-[1.02]",
    outline:
      "border border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:scale-[1.02]",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
    // Light theme variants (for light sections)
    "solid-light":
      "bg-section-light-fg text-section-light-bg hover:bg-accent hover:scale-[1.02]",
    "outline-light":
      "border border-section-light-fg/20 text-section-light-fg hover:bg-section-light-fg/5 hover:border-section-light-fg/40 hover:scale-[1.02]",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={combinedStyles}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
