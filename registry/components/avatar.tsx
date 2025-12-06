"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy" | "away";
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
  src,
  alt,
  fallback,
  size = "md",
  status,
  className,
  ...props
}, ref) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-zinc-500",
    busy: "bg-rose-500",
    away: "bg-amber-500",
  };

  return (
    <div ref={ref} className={cn("relative inline-block", className)} {...props}>
      <div className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 ring-2 ring-white/10",
        sizes[size]
      )}>
        {src ? (
          <img
            src={src}
            alt={alt || fallback}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-medium text-zinc-100">{fallback}</span>
        )}
      </div>
      {status && (
        <span className={cn(
          "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-zinc-950",
          statusColors[status]
        )} />
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
