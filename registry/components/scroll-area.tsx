"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both";
  scrollBarColor?: string;
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(({
  children,
  className,
  orientation = "vertical",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-auto",
        // Custom scrollbar styling
        "scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-600",
        orientation === "vertical" && "h-full w-full",
        orientation === "horizontal" && "w-full overflow-x-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ScrollArea.displayName = "ScrollArea";
