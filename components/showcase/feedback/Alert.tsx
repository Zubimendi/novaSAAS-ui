"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

type AlertProps = {
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error";
};

export const Alert: React.FC<AlertProps> = ({ title, description, variant = "default" }) => {
  const { theme } = useTheme();

  const variants = {
    default: {
      container: "bg-zinc-500/10 border-zinc-500/20",
      icon: <Info className="w-5 h-5 text-zinc-500" />,
      title: "text-zinc-500",
    },
    success: {
      container: "bg-emerald-500/10 border-emerald-500/20",
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      title: "text-emerald-500",
    },
    warning: {
      container: "bg-amber-500/10 border-amber-500/20",
      icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
      title: "text-amber-500",
    },
    error: {
      container: "bg-rose-500/10 border-rose-500/20",
      icon: <XCircle className="w-5 h-5 text-rose-500" />,
      title: "text-rose-500",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={`p-4 rounded-lg border flex gap-3 ${currentVariant.container}`}>
      <div className="flex-shrink-0 mt-0.5">{currentVariant.icon}</div>
      <div>
        <h5 className={`font-medium mb-1 ${currentVariant.title}`}>{title}</h5>
        {description && <p className={`text-sm ${theme.textMuted} opacity-90`}>{description}</p>}
      </div>
    </div>
  );
};
