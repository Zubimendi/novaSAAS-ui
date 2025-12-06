"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  footer,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl ${theme.surface} ${theme.border} border shadow-sm ${className}`}>
      {(title || description) && (
        <div className="p-6 pb-4">
          {title && <h3 className={`text-lg font-semibold ${theme.text}`}>{title}</h3>}
          {description && <p className={`text-sm ${theme.textMuted} mt-1`}>{description}</p>}
        </div>
      )}
      <div className="p-6 pt-0">{children}</div>
      {footer && (
        <div className={`p-6 pt-0 flex items-center ${theme.border} border-t pt-4 mt-4`}>
          {footer}
        </div>
      )}
    </div>
  );
};
