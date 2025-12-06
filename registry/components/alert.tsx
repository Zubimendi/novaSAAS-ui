"use client";
import React from "react";
import { AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error";
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({
  title,
  description,
  variant = "default",
  className,
  ...props
}, ref) => {
  const variants = {
    default: {
      container: "bg-zinc-500/10 border-zinc-500/20",
      icon: "text-zinc-400",
      title: "text-zinc-100",
      Icon: Info,
    },
    success: {
      container: "bg-emerald-500/10 border-emerald-500/20",
      icon: "text-emerald-500",
      title: "text-emerald-500",
      Icon: CheckCircle,
    },
    warning: {
      container: "bg-amber-500/10 border-amber-500/20",
      icon: "text-amber-500",
      title: "text-amber-500",
      Icon: AlertCircle,
    },
    error: {
      container: "bg-rose-500/10 border-rose-500/20",
      icon: "text-rose-500",
      title: "text-rose-500",
      Icon: XCircle,
    },
  };

  const config = variants[variant];
  const IconComponent = config.Icon;

  return (
    <div
      ref={ref}
      className={cn(
        "p-4 rounded-lg border flex gap-3",
        config.container,
        className
      )}
      {...props}
    >
      <IconComponent className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.icon)} />
      <div>
        <h5 className={cn("font-medium mb-1", config.title)}>{title}</h5>
        {description && (
          <p className="text-sm text-zinc-400">{description}</p>
        )}
      </div>
    </div>
  );
});

Alert.displayName = "Alert";
