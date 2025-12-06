"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

export const Modal = () => {
  const { theme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.primary} text-white font-medium hover:opacity-90 transition-all`}
      >
        Open Dialog
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className={`relative w-full max-w-md p-6 rounded-xl ${theme.surface} ${theme.border} border shadow-2xl animate-in zoom-in-95 duration-200`}>
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute top-4 right-4 p-1 rounded-lg ${theme.hover} ${theme.textMuted} ${isDark ? 'hover:text-white' : 'hover:text-gray-900'} transition-colors`}
            >
              <X className="w-4 h-4" />
            </button>
            
            <h3 className={`text-lg font-semibold mb-2 ${theme.text}`}>Edit Profile</h3>
            <p className={`text-sm ${theme.textMuted} mb-6`}>
              Make changes to your profile here. Click save when you're done.
            </p>

            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme.text}`}>Name</label>
                <input
                  type="text"
                  defaultValue="Pedro Duarte"
                  className={`w-full px-3 py-2 rounded-lg ${isDark ? 'bg-zinc-950/50' : 'bg-gray-100'} ${theme.border} border ${theme.text} focus:outline-none focus:ring-2 focus:ring-violet-500/50`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme.text}`}>Username</label>
                <input
                  type="text"
                  defaultValue="@peduarte"
                  className={`w-full px-3 py-2 rounded-lg ${isDark ? 'bg-zinc-950/50' : 'bg-gray-100'} ${theme.border} border ${theme.text} focus:outline-none focus:ring-2 focus:ring-violet-500/50`}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg ${theme.hover} ${theme.text} border ${theme.border} transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg bg-gradient-to-r ${theme.primary} text-white font-medium hover:opacity-90 transition-all`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
