# NovaSAAS-UI ✨

<div align="center">

![NovaSAAS-UI Banner](https://img.shields.io/badge/NovaSAAS-UI-Premium_SaaS_UI-8b5cf6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Your premium collection of production-ready SaaS UI components**

[Live Demo](#) • [Documentation](#components) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 🎯 Overview

**NovaSAAS-UI** is a modern, interactive showcase of production-ready SaaS UI components built with Next.js 14, Tailwind CSS, and shadcn/ui. It bridges the gap between design inspiration and production-ready code, offering developers a curated collection of beautiful, accessible components that can be copied and used immediately.

### ✨ Key Features

- 🎨 **4 Stunning Theme Palettes** - Instantly switch between Midnight Purple, Ocean Breeze, Forest Green, and Sunset Amber
- 👁️ **Live Code Preview** - View the source code for any component with syntax highlighting
- 📋 **One-Click Copy** - Copy component code to your clipboard instantly
- 🎭 **Interactive Components** - See hover effects, transitions, and animations in real-time
- 📱 **Fully Responsive** - Mobile-first design that works beautifully on all devices
- ♿ **Accessibility First** - WCAG 2.1 AA compliant with keyboard navigation support
- ⚡ **Optimized Performance** - Built with Next.js 14 App Router for lightning-fast loads
- 🎪 **Micro-Animations** - Smooth transitions and hover effects that bring interfaces to life

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Basic knowledge of React and Tailwind CSS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zubimendi/novaSAAS-ui.git
   cd novasaas-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

---

## 🛠️ CLI Tool (Recommended)

The fastest way to add NovaSaas components to your project:

### Initialize

```bash
npx novasaas init
```

This sets up your project with the required utilities and folder structure.

### Add Components

```bash
# Add a single component
npx novasaas add button

# Add multiple components
npx novasaas add button card badge avatar

# Add all components at once
npx novasaas add --all
```

### List Available Components

```bash
npx novasaas list
```

### CLI Options

| Command | Description |
|---------|-------------|
| `npx novasaas init` | Initialize NovaSaas in your project |
| `npx novasaas add <component>` | Add specific components |
| `npx novasaas add --all` | Add all components |
| `npx novasaas add --overwrite` | Overwrite existing files |
| `npx novasaas add --path <dir>` | Custom output directory |
| `npx novasaas list` | List all available components |

---

### Using Components Manually

1. Browse the component showcase
2. Click the **eye icon** (👁️) to view the component code
3. Click the **copy icon** (📋) to copy the code
4. Paste into your project and customize as needed

---

## 🎨 Theme System

NovaSAAS-UI includes 4 professionally designed theme palettes:

### 🌙 Midnight Purple (Default)
- **Primary**: Violet (#8b5cf6) to Purple (#a855f7)
- **Accent**: Pink (#ec4899)
- **Best For**: Creative agencies, design tools, entertainment platforms

### 🌊 Ocean Breeze
- **Primary**: Sky Blue (#0ea5e9) to Cyan (#06b6d4)
- **Accent**: Light Blue (#38bdf8)
- **Best For**: SaaS products, productivity tools, financial apps

### 🌲 Forest Green
- **Primary**: Emerald (#10b981) to Green (#059669)
- **Accent**: Teal (#14b8a6)
- **Best For**: Health/wellness apps, sustainability platforms, education

### 🌅 Sunset Amber
- **Primary**: Amber (#f59e0b) to Orange (#f97316)
- **Accent**: Yellow (#fbbf24)
- **Best For**: E-commerce, food delivery, social platforms

Each theme includes:
- Carefully selected color combinations
- Optimized contrast ratios for accessibility
- Gradient variants for visual interest
- Consistent design language across components

---

## 🧩 Components

### Data Display

#### 📊 Stats Cards
Beautiful metric cards with trend indicators, perfect for dashboards.

**Features:**
- Trend indicators (up/down arrows)
- Gradient backgrounds
- Hover animations
- Responsive grid layout

**Use Cases:**
- Dashboard KPIs
- Analytics overview
- Performance metrics
- Financial reports

---

#### 📋 Data Table
Clean, responsive table with hover effects and status badges.

**Features:**
- Sortable columns
- Status badges with color coding
- Hover row highlighting
- Responsive scrolling

**Use Cases:**
- User management
- Transaction history
- Order tracking
- Content management

#### 👤 Avatars
User profile images with status indicators.

**Features:**
- Image support with fallback text
- Status indicators (online, busy, away, offline)
- Multiple sizes
- Ring borders

**Use Cases:**
- User profiles
- Team lists
- Comment sections
- Chat interfaces

#### 🏷️ Badges
Status indicators for labels and states.

**Features:**
- Multiple color variants (success, warning, error, info)
- Pill shape
- Subtle background styles

**Use Cases:**
- Status indicators
- Category tags
- Notification counts

---

### Inputs & Actions

#### 🔘 Buttons
Versatile button component with multiple variants and states.

**Features:**
- Primary, secondary, outline, ghost, danger variants
- Loading state with spinner
- Icon support (left/right)
- Disabled state

**Use Cases:**
- Form submission
- Navigation
- Destructive actions
- Toolbar actions

#### 🎚️ Switches
Toggle controls for boolean options.

**Features:**
- Smooth transitions
- Custom colors
- Disabled state
- Focus rings

**Use Cases:**
- Settings toggles
- Feature activation
- Dark mode switch
- Notifications

---

### Layout & Containers

#### 🃏 Content Cards
Flexible containers for grouping related content.

**Features:**
- Header with title and description
- Content area
- Optional footer
- Hover effects

**Use Cases:**
- Project summaries
- User profiles
- Dashboard widgets
- Feature highlights

---

### Forms & Authentication

#### 🔐 Login Form
Modern authentication form with gradient buttons and focus states.

**Features:**
- Input validation states
- Password visibility toggle
- Remember me checkbox
- Forgot password link
- Gradient submit button

**Use Cases:**
- User authentication
- Admin panels
- Member portals
- Gated content

---

<!--
### Pricing & Marketing

#### 💰 Pricing Cards
Conversion-focused pricing tables with "Most Popular" highlighting.

**Features:**
- 3-tier pricing layout
- Popular plan highlighting
- Feature lists with checkmarks
- CTA buttons
- Hover scale effects

**Use Cases:**
- SaaS pricing pages
- Membership tiers
- Subscription plans
- Service packages
-->

---

### Feedback & Notifications

#### 🔔 Toast Notifications
Elegant notification toasts for user feedback with multiple variants.

**Features:**
- Success, error, warning, info types
- Icon indicators
- Timestamp display
- Auto-dismiss (configurable)
- Smooth animations

**Use Cases:**
- Form submissions
- Action confirmations
- Error messages
- System notifications

#### ⚠️ Alerts
Static feedback messages for user attention.

**Features:**
- Success, warning, error, info variants
- Icon integration
- Title and description support
- Accessible colors

**Use Cases:**
- Form validation errors
- System status messages
- Important announcements
- Tips and information

#### 📊 Progress Bars
Visual indicators for task completion.

**Features:**
- Animated filling
- Gradient colors
- Label support
- Multiple sizes

**Use Cases:**
- File uploads
- Profile completion
- Loading states
- Goal tracking

---

### Navigation

#### 🧭 Navigation Bar
Sticky navigation with theme switcher and mobile responsiveness.

**Features:**
- Sticky positioning
- Theme dropdown menu
- Dark/light mode toggle
- Mobile hamburger menu
- Backdrop blur effect

**Use Cases:**
- Website headers
- Dashboard navigation
- App chrome
- Admin interfaces

#### 📑 Tabs
Smooth tab navigation for switching between content sections.

**Features:**
- Smooth transitions
- Active state styling
- Keyboard accessible

**Use Cases:**
- Account settings
- Profile management
- Content filtering

#### 🗄️ Sidebar
Vertical navigation sidebar for dashboard layouts.

**Features:**
- Collapsible menu items
- Active state indicators
- User profile section
- Sign out button

**Use Cases:**
- Admin dashboards
- Application layouts
- File explorers

---

### Feedback & Overlays

#### 🪟 Modal Dialog
Accessible modal dialog for focused tasks and critical information.

**Features:**
- Backdrop blur
- Animation entry/exit
- Focus trapping
- Close on outside click

**Use Cases:**
- Confirmation dialogs
- Edit forms
- Detailed views
- Onboarding steps

---

## 💻 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.x | React framework with App Router |
| **React** | 18.x | UI component library |
| **Tailwind CSS** | 3.4.x | Utility-first CSS framework |
| **TypeScript** | 5.x | Type safety (optional) |

### UI Libraries

- **shadcn/ui** - Base accessible components
- **Lucide React** - Beautiful icon set
- **Radix UI** - Unstyled accessible primitives (via shadcn/ui)

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
component-vault/
├── app/
│   ├── page.tsx              # Main showcase page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── showcase/             # Showcase components
│       ├── stats-card.tsx
│       ├── login-form.tsx
│       ├── data-table.tsx
│       ├── pricing-card.tsx
│       └── toast.tsx
├── lib/
│   ├── themes.ts             # Theme configurations
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── styles/                   # Additional styles
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🎨 Design Philosophy

### Visual Principles

1. **Dark-First Design**
   - Optimized for dark interfaces
   - Reduced eye strain
   - Modern aesthetic
   - Strategic light accents

2. **Gradient Mastery**
   - Subtle depth addition
   - Brand differentiation
   - Visual hierarchy
   - Call-to-action emphasis

3. **Micro-Interactions**
   - Hover scale effects
   - Smooth transitions
   - Button press feedback
   - Loading states

4. **Glassmorphism**
   - Backdrop blur effects
   - Layered interfaces
   - Premium feel
   - Modern design language

### Technical Principles

1. **Component Composition**
   - Reusable building blocks
   - Props-based customization
   - Single responsibility
   - DRY (Don't Repeat Yourself)

2. **Performance First**
   - Lazy loading
   - Optimized images
   - Minimal bundle size
   - Fast initial load

3. **Accessibility**
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support
   - Color contrast compliance

4. **Mobile-First**
   - Responsive by default
   - Touch-friendly targets
   - Progressive enhancement
   - Adaptive layouts

---

## 🛠️ Customization

### Adding Your Own Theme

1. Open `lib/themes.ts`
2. Add your theme configuration:

```typescript
export const themes = {
  // ... existing themes
  
  yourTheme: {
    name: 'Your Theme Name',
    primary: 'from-blue-600 to-indigo-600',
    primarySolid: 'bg-blue-600',
    accent: 'bg-blue-500',
    bg: 'bg-gray-950',
    surface: 'bg-gray-900',
    border: 'border-gray-800',
    text: 'text-gray-100',
    textMuted: 'text-gray-400',
    hover: 'hover:bg-gray-800',
    ring: 'ring-blue-500',
    gradient: 'bg-gradient-to-br from-blue-600/20 to-indigo-600/20'
  }
}
```

### Creating New Components

1. Create component file in `components/showcase/`
2. Follow existing component patterns
3. Use theme props for styling
4. Add to showcase grid
5. Include code example

Example template:

```tsx
import { useTheme } from '@/context/theme-context';

export function YourComponent() {
  const { theme } = useTheme();
  
  return (
    <div className={`${theme.surface} ${theme.border} border rounded-xl p-6`}>
      {/* Your component content */}
    </div>
  );
}
```

### Tailwind Configuration

Customize Tailwind in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
      animation: {
        // Add custom animations
      }
    }
  }
}
```

---

## 📸 Screenshots

<div align="center">

### 🌙 Midnight Purple Theme
![Midnight Purple Theme](#)

### 🌊 Ocean Breeze Theme
![Ocean Breeze Theme](#)

### 🌲 Forest Green Theme
![Forest Green Theme](#)

### 🌅 Sunset Amber Theme
![Sunset Amber Theme](#)

</div>

---

## 🗺️ Roadmap

### ✅ Phase 1 - MVP (Completed)
- [x] Core theme system
- [x] 8 essential components
- [x] Code preview functionality
- [x] Copy-to-clipboard
- [x] Responsive design
- [x] Dark mode support

### 🚧 Phase 2 - Enhancement (In Progress)
- [ ] Component playground with live editing
- [ ] Additional component categories
- [ ] Search and filter functionality
- [ ] Component variants (sizes, styles)
- [ ] Animation showcase
- [ ] Export to CodeSandbox

### 🔮 Phase 3 - Advanced (Planned)
- [ ] CLI tool for component installation
- [ ] User authentication
- [ ] Community contributions
- [ ] Component rating system
- [ ] Figma plugin integration
- [ ] VS Code extension
- [ ] Custom theme generator
- [ ] Component builder tool

### 💡 Phase 4 - Ecosystem (Future)
- [ ] Template marketplace
- [ ] Page builder
- [ ] Design system generator
- [ ] Component documentation generator
- [ ] Storybook integration
- [ ] Testing utilities

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### Ways to Contribute

1. **Add New Components**
   - Design and code new UI components
   - Follow existing patterns
   - Include documentation

2. **Improve Existing Components**
   - Add variants
   - Fix bugs
   - Enhance accessibility

3. **Add New Themes**
   - Create beautiful color palettes
   - Ensure proper contrast ratios
   - Test across all components

4. **Improve Documentation**
   - Fix typos
   - Add examples
   - Clarify instructions

5. **Report Bugs**
   - Use GitHub Issues
   - Provide reproduction steps
   - Include screenshots

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-component
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: Amazing new component with hover effects"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-component
   ```
7. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex logic
- Ensure accessibility compliance
- Test on multiple screen sizes

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**What this means:**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❗ License and copyright notice required

---

## 🙏 Acknowledgments

### Inspiration
- [shadcn/ui](https://ui.shadcn.com/) - For the excellent component foundation
- [Tailwind UI](https://tailwindui.com/) - For design inspiration
- [Vercel](https://vercel.com/) - For hosting and deployment
- [Dribbble](https://dribbble.com/) & [Behance](https://behance.net/) - For design trends

### Technologies
Special thanks to the creators and maintainers of:
- Next.js
- React
- Tailwind CSS
- Radix UI
- Lucide Icons

### Community
Thank you to all contributors who help make NovaSAAS-UI better!

---

## 📞 Contact & Support

### Get in Touch

- **Twitter/X**: [@El_Francisco4](#)
- **LinkedIn**: [Francis Offiong](#)
- **Email**: offiongfrancis14@gmail.com
- **Website**: [yourportfolio.com](#)

### Get Help

- 📖 **Documentation**: Read the docs above
- 💬 **Discussions**: [GitHub Discussions](#)
- 🐛 **Bug Reports**: [GitHub Issues](#)
- 💡 **Feature Requests**: [GitHub Issues](#)

### Show Your Support

If you find NovaSAAS-UI helpful:

⭐ **Star this repository** on GitHub
🐦 **Share on Twitter** with #NovaSAAS-UI
💼 **Add to your portfolio** with proper attribution
📝 **Write a blog post** about your experience
🎨 **Create a showcase** of what you've built

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Zubimendi/novasaas-ui?style=social)
![GitHub forks](https://img.shields.io/github/forks/Zubimendi/novasaas-ui?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Zubimendi/novasaas-ui?style=social)

![GitHub issues](https://img.shields.io/github/issues/Zubimendi/novasaas-ui)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Zubimendi/novasaas-ui)
![GitHub last commit](https://img.shields.io/github/last-commit/Zubimendi/novasaas-ui)

---

## 🎓 Learning Resources

Want to learn more about the technologies used in NovaSAAS-UI?

### Next.js
- [Official Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [Learn Next.js (Interactive Tutorial)](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [Tailwind UI Components](https://tailwindui.com/)

### React
- [React Documentation](https://react.dev/)
- [React Hooks Reference](https://react.dev/reference/react)
- [React Design Patterns](https://react.dev/learn/thinking-in-react)

### shadcn/ui
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Component Architecture Guide](https://ui.shadcn.com/docs/components)

---

## 🔥 Fun Facts

- 🎨 Over **1,000 lines** of carefully crafted Tailwind classes
- ⚡ Built in **5 days** as part of a weekly shipping challenge
- 🎭 **4 themes** × **8 components** = 32 unique visual variations
- 🚀 Loads in under **2 seconds** on 3G connections
- ♿ **100% keyboard navigable** - try it with just your keyboard!
- 🎯 **Zero external images** - everything is code and SVG
- 💜 Made with **coffee** ☕ and **late nights** 🌙

---

<div align="center">

### Built with ❤️ by [Your Name]

**NovaSAAS-UI** - Ship Beautiful SaaS Interfaces Faster

[⬆ Back to Top](#NovaSAAS-UI-)

---

*If NovaSAAS-UI helped you ship faster, consider giving it a ⭐ on GitHub!*

</div>