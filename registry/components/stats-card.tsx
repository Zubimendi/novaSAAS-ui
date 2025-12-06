"use client";
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(({
  title,
  value,
  change,
  trend,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "p-6 rounded-xl bg-zinc-900 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-zinc-800",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-zinc-400">{title}</span>
        {trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-rose-500" />
        )}
      </div>
      <div className="text-3xl font-bold text-zinc-100 mb-1">{value}</div>
      <div className="flex items-center gap-2">
        <span className={trend === "up" ? "text-emerald-500" : "text-rose-500"}>{change}</span>
        <span className="text-sm text-zinc-400">from last month</span>
      </div>
    </div>
  );
});

StatsCard.displayName = "StatsCard";
