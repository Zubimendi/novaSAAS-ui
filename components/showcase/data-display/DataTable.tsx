import React from "react";
import { useTheme } from "../../theme/ThemeContext";

export const DataTable: React.FC = () => {
  const { theme } = useTheme();
  const data = [
    { id: 1, name: "Olivia Martin", email: "olivia@example.com", status: "Active", amount: "$1,234" },
    { id: 2, name: "Jackson Lee", email: "jackson@example.com", status: "Pending", amount: "$892" },
    { id: 3, name: "Isabella Nguyen", email: "isabella@example.com", status: "Active", amount: "$2,100" },
    { id: 4, name: "William Kim", email: "william@example.com", status: "Inactive", amount: "$450" },
  ];

  return (
    <div className={`rounded-xl ${theme.surface} ${theme.border} border backdrop-blur-sm overflow-hidden`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={theme.bg}>
            <tr className={`${theme.border} border-b`}>
              <th className={`text-left py-3 px-4 text-sm font-medium ${theme.text}`}>Name</th>
              <th className={`text-left py-3 px-4 text-sm font-medium ${theme.text}`}>Email</th>
              <th className={`text-left py-3 px-4 text-sm font-medium ${theme.text}`}>Status</th>
              <th className={`text-left py-3 px-4 text-sm font-medium ${theme.text}`}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className={`${theme.border} border-b last:border-0 ${theme.hover} transition-colors`}>
                <td className={`py-3 px-4 ${theme.text}`}>{row.name}</td>
                <td className={`py-3 px-4 ${theme.textMuted}`}>{row.email}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-500"
                      : row.status === "Pending"
                      ? "bg-amber-500/10 text-amber-500"
                      : "bg-zinc-500/10 text-zinc-500"
                  }`}>{row.status}</span>
                </td>
                <td className={`py-3 px-4 font-medium ${theme.text}`}>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
