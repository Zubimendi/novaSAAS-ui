"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default", size = "md" }) => {
  const { theme } = useTheme();

  const variants = {
    default: `bg-zinc-500/10 text-zinc-500 border-zinc-500/20`,
    success: `bg-emerald-500/10 text-emerald-500 border-emerald-500/20`,
    warning: `bg-amber-500/10 text-amber-500 border-amber-500/20`,
    error: `bg-rose-500/10 text-rose-500 border-rose-500/20`,
    info: `bg-sky-500/10 text-sky-500 border-sky-500/20`,
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-0.5 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
};
