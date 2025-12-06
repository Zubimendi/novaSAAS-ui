"use client"
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, trend }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`p-6 rounded-xl ${theme.surface} ${theme.border} border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${theme.hover}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${theme.textMuted}`}>{title}</span>
        {trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-emerald-500" />
        ) : (
          <TrendingDown className="w-4 h-4 text-rose-500" />
        )}
      </div>
      <div className={`text-3xl font-bold ${theme.text} mb-1`}>{value}</div>
      <div className="flex items-center gap-2">
        <span className={trend === "up" ? "text-emerald-500" : "text-rose-500"}>{change}</span>
        <span className={`text-sm ${theme.textMuted}`}>from last month</span>
      </div>
    </div>
  );
};
