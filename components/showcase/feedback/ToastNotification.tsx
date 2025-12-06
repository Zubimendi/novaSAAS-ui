import React from "react";
import { Check, X, Bell, Sparkles } from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info";
};

export const ToastNotification: React.FC<ToastProps> = ({ message, type = "success" }) => {
  const { theme } = useTheme();
  const config = {
    success: { icon: Check, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    error: { icon: X, color: "text-rose-500", bg: "bg-rose-500/10" },
    warning: { icon: Bell, color: "text-amber-500", bg: "bg-amber-500/10" },
    info: { icon: Sparkles, color: "text-sky-500", bg: "bg-sky-500/10" },
  }[type];

  const Icon = config.icon;
  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg ${theme.surface} ${theme.border} border backdrop-blur-sm`}>
      <div className={`p-2 rounded-lg ${config.bg}`}>
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>
      <div className="flex-1">
        <p className={`font-medium ${theme.text}`}>{message}</p>
        <p className={`text-sm ${theme.textMuted}`}>Just now</p>
      </div>
    </div>
  );
};
