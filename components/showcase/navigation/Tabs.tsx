"use client";
import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeContext";

export const Tabs = () => {
  const { theme, isDark } = useTheme();
  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    { id: "account", label: "Account" },
    { id: "password", label: "Password" },
    { id: "notifications", label: "Notifications" },
  ];

  return (
    <div className="w-full max-w-md">
      <div className={`flex p-1 rounded-lg ${theme.surface} ${theme.border} border mb-4`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? isDark 
                  ? `bg-zinc-700 text-white shadow-sm` 
                  : `bg-gray-200 text-gray-900 shadow-sm`
                : `${theme.textMuted} ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`p-4 rounded-lg ${theme.surface} ${theme.border} border min-h-[100px]`}>
        {activeTab === "account" && (
          <div className="space-y-2">
            <h3 className={`font-medium ${theme.text}`}>Account Settings</h3>
            <p className={`text-sm ${theme.textMuted}`}>Manage your account details and preferences.</p>
          </div>
        )}
        {activeTab === "password" && (
          <div className="space-y-2">
            <h3 className={`font-medium ${theme.text}`}>Password</h3>
            <p className={`text-sm ${theme.textMuted}`}>Change your password and security settings.</p>
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="space-y-2">
            <h3 className={`font-medium ${theme.text}`}>Notifications</h3>
            <p className={`text-sm ${theme.textMuted}`}>Configure how you receive alerts.</p>
          </div>
        )}
      </div>
    </div>
  );
};
