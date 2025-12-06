"use client";
import React from "react";
import { Check, X, Bell, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  timestamp?: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(({
  message,
  type = "success",
  timestamp = "Just now",
  className,
  ...props
}, ref) => {
  const config = {
    success: { icon: Check, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    error: { icon: X, color: "text-rose-500", bg: "bg-rose-500/10" },
    warning: { icon: Bell, color: "text-amber-500", bg: "bg-amber-500/10" },
    info: { icon: Sparkles, color: "text-sky-500", bg: "bg-sky-500/10" },
  }[type];

  const Icon = config.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <div className={cn("p-2 rounded-lg", config.bg)}>
        <Icon className={cn("w-5 h-5", config.color)} />
      </div>
      <div className="flex-1">
        <p className="font-medium text-zinc-100">{message}</p>
        <p className="text-sm text-zinc-400">{timestamp}</p>
      </div>
    </div>
  );
});

Toast.displayName = "Toast";
