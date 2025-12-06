import React from "react";
import { Check } from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

export const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, popular = false }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`relative p-8 rounded-xl ${theme.surface} ${theme.border} border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
        popular ? theme.gradient : ""
      }`}
    >
      {popular && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${theme.primary} text-white text-xs font-medium`}
        >
          Most Popular
        </div>
      )}
      <h3 className={`text-xl font-bold ${theme.text} mb-2`}>{name}</h3>
      <div className="mb-6">
        <span className={`text-4xl font-bold ${theme.text}`}>{price}</span>
        <span className={`${theme.textMuted}`}>/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className={`flex items-center gap-2 ${theme.text}`}>
            <Check className={`w-4 h-4 ${popular ? "text-emerald-500" : theme.textMuted}`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2.5 rounded-lg ${
          popular ? `bg-gradient-to-r ${theme.primary}` : `${theme.border} border`
        } text-white font-medium hover:opacity-90 transition-all`}
      >
        Get Started
      </button>
    </div>
  );
};
