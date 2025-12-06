"use client"
import React, { useState } from "react";
import { Check, Eye, Copy } from "lucide-react";
import { useCopyToClipboard } from "../theme/useCopyToClipboard";
import { useTheme } from "../theme/ThemeContext";

interface ComponentCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ title, description, children, code }) => {
  const { copied, copy } = useCopyToClipboard();
  const [showCode, setShowCode] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`rounded-xl ${theme.surface} ${theme.border} border backdrop-blur-sm overflow-hidden`}>
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className={`text-lg font-semibold ${theme.text} mb-1`}>{title}</h3>
            <p className={`text-sm ${theme.textMuted}`}>{description}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowCode(!showCode)} className={`p-2 rounded-lg ${theme.hover} transition-colors`} title="View code">
              <Eye className={`w-4 h-4 ${theme.text}`} />
            </button>
            <button onClick={() => copy(code)} className={`p-2 rounded-lg ${theme.hover} transition-colors`} title="Copy code">
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className={`w-4 h-4 ${theme.text}`} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`p-6 ${theme.bg}`}>
        <div className="flex items-center justify-center min-h-[200px]">{children}</div>
      </div>
      {showCode && (
        <div className={`p-4 ${theme.bg} border-t ${theme.border}`}>
          <pre className={`text-xs ${theme.textMuted} overflow-x-auto`}><code>{code}</code></pre>
        </div>
      )}
    </div>
  );
};
