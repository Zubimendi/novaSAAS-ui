"use client";
import React from "react";
import { Home, BarChart2, Users, Settings, LogOut } from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

export const Sidebar = () => {
  const { theme, isDark } = useTheme();
  
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart2, label: "Analytics", active: false },
    { icon: Users, label: "Customers", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className={`w-64 h-[400px] rounded-xl ${theme.surface} ${theme.border} border flex flex-col overflow-hidden`}>
      <div className="p-6">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.primary} flex items-center justify-center text-white`}>
            V
          </div>
          <span className={theme.text}>Vault</span>
        </div>
      </div>

      <div className="flex-1 px-3 py-2 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? isDark 
                  ? `bg-zinc-700 ${theme.text}` 
                  : `bg-gray-200 ${theme.text}`
                : `${theme.textMuted} ${isDark ? 'hover:text-zinc-100 hover:bg-zinc-800/50' : 'hover:text-gray-900 hover:bg-gray-100'}`
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>

      <div className={`p-4 border-t ${theme.border}`}>
        <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${theme.textMuted} hover:text-red-500 hover:bg-red-500/10 transition-colors`}>
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
};
