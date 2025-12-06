"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({
  value,
  max = 100,
  showLabel = false,
  size = "md",
  className,
  ...props
}, ref) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-zinc-100">Progress</span>
          <span className="text-sm font-medium text-zinc-400">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={cn("w-full bg-zinc-800 rounded-full overflow-hidden", heights[size])}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
});

Progress.displayName = "Progress";
