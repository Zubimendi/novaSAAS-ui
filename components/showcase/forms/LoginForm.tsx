
"use client";
import React from "react";
import { useTheme } from "../../theme/ThemeContext";

export const LoginForm: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div>
        <label className={`block text-sm font-medium ${theme.text} mb-2`}>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className={`w-full px-4 py-2.5 rounded-lg ${theme.surface} ${theme.border} border ${theme.text} placeholder-zinc-500 focus:outline-none focus:ring-2 ${theme.ring} transition-all`}
        />
      </div>
      <div>
        <label className={`block text-sm font-medium ${theme.text} mb-2`}>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className={`w-full px-4 py-2.5 rounded-lg ${theme.surface} ${theme.border} border ${theme.text} placeholder-zinc-500 focus:outline-none focus:ring-2 ${theme.ring} transition-all`}
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className={`rounded ${theme.accent}`} />
          <span className={`text-sm ${theme.textMuted}`}>Remember me</span>
        </label>
        <button className={`text-sm bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent hover:opacity-80`}>Forgot password?</button>
      </div>
      <button
        type="button"
        className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${theme.primary} text-white font-medium hover:opacity-90 transition-all transform hover:scale-[1.02]`}
      >
        Sign in
      </button>
    </div>
  );
};
