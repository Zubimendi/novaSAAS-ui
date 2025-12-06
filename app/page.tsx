"use client";
import React, { useState } from "react";
import {
  Copy,
  Check,
  Moon,
  Sun,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  Search,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Eye,
  Download,
  Star,
} from "lucide-react";

import { ThemeProvider, useTheme } from "../components/theme/ThemeContext";
import { themes } from "../components/theme/themes";

// Import showcase components
import { StatsCard } from "../components/showcase/data-display/StatsCard";
import { LoginForm } from "../components/showcase/forms/LoginForm";
import { DataTable } from "../components/showcase/data-display/DataTable";
// import { PricingCard } from "../components/showcase/layout/PricingCard";
import { ToastNotification } from "../components/showcase/feedback/ToastNotification";
import { ComponentCard } from "../components/showcase/ComponentCard";
import { Tabs } from "../components/showcase/navigation/Tabs";
import { Modal } from "../components/showcase/feedback/Modal";
import { Sidebar } from "../components/showcase/layout/Sidebar";
import { Badge } from "../components/showcase/data-display/Badge";
import { Button } from "../components/showcase/inputs/Button";
import { Card } from "../components/showcase/layout/Card";
import { Alert } from "../components/showcase/feedback/Alert";
import { Avatar } from "../components/showcase/data-display/Avatar";
import { Switch } from "../components/showcase/inputs/Switch";
import { Progress } from "../components/showcase/feedback/Progress";
import { ArrowRight, Mail, Github } from "lucide-react";

// Component code examples (used for copy functionality)
const componentCode = {
  statsCard: `<div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm text-zinc-400">Total Revenue</span>
    <TrendingUp className="w-4 h-4 text-emerald-500" />
  </div>
  <div className="text-3xl font-bold text-white mb-1">$45,231</div>
  <p className="text-sm text-emerald-500">+20.1% from last month</p>
</div>`,

  loginForm: `<div className="space-y-4 w-full max-w-sm">
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input type="email" className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800" placeholder="you@example.com" />
  </div>
  <button className="w-full py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600">Sign In</button>
</div>`,

  dataTable: `<table className="w-full">
  <thead>
    <tr className="border-b border-zinc-800">
      <th className="text-left py-3 px-4">Name</th>
      <th className="text-left py-3 px-4">Status</th>
      <th className="text-left py-3 px-4">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-zinc-800 hover:bg-zinc-900">
      <td className="py-3 px-4">John Doe</td>
      <td className="py-3 px-4"><span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">Active</span></td>
      <td className="py-3 px-4">$1,234</td>
    </tr>
  </tbody>
</table>`,

  toast: `const Toast = ({ message, type = 'success' }) => (
  <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
    <Check className="w-5 h-5 text-emerald-500" />
    <span className="text-white">{message}</span>
  </div>
);`,

  tabs: `const Tabs = () => {
  const [activeTab, setActiveTab] = useState("account");
  return (
    <div className="w-full max-w-md">
      <div className="flex p-1 rounded-lg bg-zinc-900 border border-zinc-800 mb-4">
        {['Account', 'Password', 'Notifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={\`flex-1 py-1.5 text-sm font-medium rounded-md transition-all \${
              activeTab === tab.toLowerCase() ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
            }\`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
    </div>
  );
};`,

  modal: `const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
        <h3 className="text-lg font-semibold mb-2 text-white">Edit Profile</h3>
        {/* Modal Content */}
      </div>
    </div>
  );
};`,

  sidebar: `const Sidebar = () => (
  <div className="w-64 h-full rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col">
    <div className="p-6 font-bold text-xl text-white">Vault</div>
    <div className="flex-1 px-3 space-y-1">
      {menuItems.map((item) => (
        <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50">
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
    </div>
  </div>
);`,

  badge: `<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
  Success
</span>`,

  button: `<button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all">
  <Mail className="w-4 h-4 mr-2" />
  Subscribe
</button>`,

  card: `<div className="rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm p-6">
  <h3 className="text-lg font-semibold text-white mb-1">Project Alpha</h3>
  <p className="text-sm text-zinc-400 mb-4">A next-generation SaaS platform built for scale.</p>
  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
    <span className="text-sm text-zinc-500">Last updated 2h ago</span>
    <button className="text-sm text-violet-500 hover:text-violet-400">View Details</button>
  </div>
</div>`,

  alert: `<div className="p-4 rounded-lg border flex gap-3 bg-amber-500/10 border-amber-500/20">
  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
  <div>
    <h5 className="font-medium text-amber-500 mb-1">Payment Required</h5>
    <p className="text-sm text-zinc-400">Your subscription has expired. Please renew to continue.</p>
  </div>
</div>`,

  avatar: `<div className="relative inline-block">
  <div className="relative flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 w-10 h-10 ring-2 ring-white/10">
    <img src="/avatar.jpg" alt="User" className="h-full w-full object-cover" />
  </div>
  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-zinc-950 bg-emerald-500" />
</div>`,

  switch: `<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-950 bg-gradient-to-r from-violet-600 to-purple-600">
  <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out translate-x-5" />
</button>`,

  progress: `<div className="w-full">
  <div className="flex justify-between mb-1">
    <span className="text-sm font-medium text-white">Progress</span>
    <span className="text-sm font-medium text-zinc-400">75%</span>
  </div>
  <div className="w-full bg-zinc-800 rounded-full overflow-hidden h-2">
    <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 ease-out" style={{ width: '75%' }} />
  </div>
</div>`,
};

// Simple copy‑to‑clipboard hook (kept here for brevity)
const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return { copied, copy };
};

// Inner component that consumes the theme context
function NovaSaasInner() {
  const { theme, currentTheme, setCurrentTheme, isDark, setIsDark } =
    useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 ${theme.surface} ${theme.border} border-b backdrop-blur-lg bg-opacity-90`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${theme.primary}`}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">NovaSaas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${theme.hover} transition-colors`}
                >
                  <span className="text-sm font-medium">{theme.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showThemeMenu && (
                  <div
                    className={`absolute top-full right-0 mt-2 w-48 p-2 rounded-lg ${theme.surface} ${theme.border} border shadow-xl`}
                  >
                    {Object.entries(themes).map(([key, t]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentTheme(key as any);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg ${theme.hover} transition-colors flex items-center justify-between`}
                      >
                        <span className="text-sm">{t.name}</span>
                        {currentTheme === key && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${theme.hover} transition-colors`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
            isDark ? "to-zinc-950" : "to-gray-50"
          } pointer-events-none`}
        />
        <div
          className={`absolute inset-0 ${theme.gradient} opacity-30 blur-3xl`}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            } backdrop-blur-sm border mb-6`}
          >
            <Star className="w-4 h-4 text-amber-500" />
            <span className="text-sm">Premium SaaS Components</span>
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
          >
            NovaSaas
          </h1>
          <p className={`text-xl ${theme.textMuted} mb-8 max-w-2xl mx-auto`}>
            Beautiful, production-ready SaaS UI components built with Tailwind
            CSS and shadcn/ui. Copy, paste, and ship faster.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("showcase")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`px-6 py-3 rounded-lg bg-gradient-to-r ${theme.primary} text-white font-medium hover:opacity-90 transition-all transform hover:scale-105`}
            >
              Browse Components
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/Zubimendi/novaSAAS-ui",
                  "_blank"
                )
              }
              className={`px-6 py-3 rounded-lg ${theme.surface} ${
                theme.border
              } border ${
                isDark ? "hover:bg-white/5" : "hover:bg-black/5"
              } transition-all`}
            >
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard title="Total Revenue" value="$0" change="+0%" trend="up" />
          <StatsCard title="Active Users" value="0" change="+0%" trend="up" />
          <StatsCard title="Components" value="15" change="+15" trend="up" />
          <StatsCard title="Themes" value="4" change="+4" trend="up" />
        </div>
      </section>

      {/* Component Showcase */}
      <section id="showcase" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className={`text-3xl font-bold mb-8 ${theme.text}`}>
          Component Showcase
        </h2>
        <div className="space-y-8">
          <ComponentCard
            title="Stats Cards"
            description="Eye‑catching metric cards with trend indicators"
            code={componentCode.statsCard}
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              <StatsCard
                title="Total Revenue"
                value="$45,231"
                change="+20.1%"
                trend="up"
              />
              <StatsCard
                title="Active Users"
                value="2,345"
                change="+12.5%"
                trend="up"
              />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Login Form"
            description="Modern authentication with gradient buttons"
            code={componentCode.loginForm}
          >
            <LoginForm />
          </ComponentCard>

          <ComponentCard
            title="Data Table"
            description="Clean, responsive table with hover effects"
            code={componentCode.dataTable}
          >
            <DataTable />
          </ComponentCard>

          {/* <ComponentCard title="Pricing Cards" description="Conversion‑focused pricing tables" code="// See pricing card implementation">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <PricingCard name="Starter" price="$19" features={["10 Projects", "5GB Storage", "Basic Support"]} />
              <PricingCard name="Pro" price="$49" features={["Unlimited Projects", "50GB Storage", "Priority Support", "Advanced Analytics"]} popular />
              <PricingCard name="Enterprise" price="$99" features={["Unlimited Everything", "500GB Storage", "24/7 Support", "Custom Integration"]} />
            </div>
          </ComponentCard> */}

          <ComponentCard
            title="Toast Notifications"
            description="Elegant notification toasts for user feedback"
            code={componentCode.toast}
          >
            <div className="space-y-3 w-full max-w-md">
              <ToastNotification
                message="Order completed successfully"
                type="success"
              />
              <ToastNotification
                message="Payment processing failed"
                type="error"
              />
              <ToastNotification message="New updates available" type="info" />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Navigation Tabs"
            description="Smooth switching between content sections"
            code={componentCode.tabs}
          >
            <Tabs />
          </ComponentCard>

          <ComponentCard
            title="Modal Dialog"
            description="Overlay for focused tasks and feedback"
            code={componentCode.modal}
          >
            <Modal />
          </ComponentCard>

          <ComponentCard
            title="Sidebar Navigation"
            description="Vertical navigation for dashboard layouts"
            code={componentCode.sidebar}
          >
            <Sidebar />
          </ComponentCard>

          <ComponentCard
            title="Buttons"
            description="Interactive elements with multiple variants"
            code={componentCode.button}
          >
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" leftIcon={<Mail className="w-4 h-4" />}>
                Subscribe
              </Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="outline">View Details</Button>
              <Button variant="ghost">Skip</Button>
              <Button variant="danger">Delete</Button>
              <Button variant="primary" isLoading>
                Loading
              </Button>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Badges"
            description="Status indicators for labels and states"
            code={componentCode.badge}
          >
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Content Cards"
            description="Flexible containers for grouping content"
            code={componentCode.card}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <Card
                title="Project Alpha"
                description="A next-generation SaaS platform built for scale."
                footer={
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm opacity-60">
                      Last updated 2h ago
                    </span>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                }
              >
                <div
                  className={`h-24 rounded-lg ${
                    isDark
                      ? "bg-zinc-500/10 border-zinc-500/10"
                      : "bg-gray-500/10 border-gray-500/10"
                  } border flex items-center justify-center`}
                >
                  <span className="text-sm opacity-50">
                    Content Placeholder
                  </span>
                </div>
              </Card>
              <Card
                title="Team Settings"
                description="Manage your team members and permissions."
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-500 text-xs font-bold">
                        JD
                      </div>
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                    <Badge variant="success">Admin</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-xs font-bold">
                        JS
                      </div>
                      <span className="text-sm font-medium">Jane Smith</span>
                    </div>
                    <Badge variant="default">Editor</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Alerts"
            description="Static feedback messages for user attention"
            code={componentCode.alert}
          >
            <div className="space-y-4 w-full max-w-2xl">
              <Alert
                title="Payment Required"
                description="Your subscription has expired. Please renew to continue."
                variant="warning"
              />
              <Alert
                title="Success!"
                description="Your changes have been saved successfully."
                variant="success"
              />
              <Alert
                title="System Error"
                description="Something went wrong. Please try again later."
                variant="error"
              />
              <Alert
                title="Note"
                description="Scheduled maintenance will occur tonight at 2 AM."
                variant="default"
              />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Avatars"
            description="User profile images with status indicators"
            code={componentCode.avatar}
          >
            <div className="flex items-center gap-6">
              <Avatar fallback="JD" status="online" size="lg" />
              <Avatar fallback="AB" status="busy" size="md" />
              <Avatar fallback="CK" status="away" size="md" />
              <Avatar fallback="Guest" status="offline" size="sm" />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Switches"
            description="Toggle controls for boolean options"
            code={componentCode.switch}
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Switch checked={true} onCheckedChange={() => {}} />
                <span className="text-sm font-medium">Notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={false} onCheckedChange={() => {}} />
                <span className="text-sm font-medium">Dark Mode</span>
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={true} onCheckedChange={() => {}} disabled />
                <span className="text-sm font-medium opacity-50">Disabled</span>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            title="Progress Bars"
            description="Visual indicators for task completion"
            code={componentCode.progress}
          >
            <div className="space-y-6 w-full max-w-md">
              <Progress value={75} showLabel />
              <Progress value={45} size="sm" />
              <Progress value={90} size="lg" />
            </div>
          </ComponentCard>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.surface} ${theme.border} border-t mt-24`}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${theme.primary}`}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">NovaSaas</span>
            </div>
            <p className={theme.textMuted}>
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function NovaSaas() {
  return (
    <ThemeProvider>
      <NovaSaasInner />
    </ThemeProvider>
  );
}
