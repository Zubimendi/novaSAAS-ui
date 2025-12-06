"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  children,
  title,
  description,
  footer,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden transition-all hover:border-zinc-700",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="p-4 border-b border-zinc-800">
          {title && <h3 className="font-semibold text-zinc-100">{title}</h3>}
          {description && <p className="text-sm text-zinc-400 mt-1">{description}</p>}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="p-4 border-t border-zinc-800 bg-zinc-950/50">
          {footer}
        </div>
      )}
    </div>
  );
});

Card.displayName = "Card";
