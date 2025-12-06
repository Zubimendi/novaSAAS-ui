"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

type ProgressProps = {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
};

export const Progress: React.FC<ProgressProps> = ({ 
  value, 
  max = 100, 
  showLabel = false,
  size = "md" 
}) => {
  const { theme, isDark } = useTheme();
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${theme.text}`}>Progress</span>
          <span className={`text-sm font-medium ${theme.textMuted}`}>{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full ${isDark ? 'bg-zinc-800' : 'bg-gray-200'} rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${theme.primary} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
