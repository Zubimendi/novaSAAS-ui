"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  defaultTab?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(({
  tabs,
  defaultTab,
  className,
  ...props
}, ref) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <div className="flex p-1 rounded-lg bg-zinc-900 border border-zinc-800 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-1.5 text-sm font-medium rounded-md transition-all",
              activeTab === tab.id
                ? "bg-zinc-700 text-white shadow-sm"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 min-h-[100px]">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
});

Tabs.displayName = "Tabs";
