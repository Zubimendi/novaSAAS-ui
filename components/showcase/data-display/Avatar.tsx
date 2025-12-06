"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

type AvatarProps = {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy" | "away";
};

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  fallback, 
  size = "md",
  status 
}) => {
  const { theme, isDark } = useTheme();

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: isDark ? "bg-zinc-500" : "bg-gray-400",
    busy: "bg-rose-500",
    away: "bg-amber-500",
  };

  return (
    <div className="relative inline-block">
      <div className={`relative flex items-center justify-center overflow-hidden rounded-full ${isDark ? 'bg-zinc-800' : 'bg-gray-200'} ${sizes[size]} ${isDark ? 'ring-2 ring-white/10' : 'ring-2 ring-black/5'}`}>
        {src ? (
          <img
            src={src}
            alt={alt || fallback}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className={`font-medium ${theme.text}`}>{fallback}</span>
        )}
      </div>
      {status && (
        <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ${isDark ? 'ring-2 ring-zinc-950' : 'ring-2 ring-white'} ${statusColors[status]}`} />
      )}
    </div>
  );
};
