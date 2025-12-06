# NovaSaas CLI

Add beautiful, production-ready UI components to your project with a single command.

## Installation

```bash
npx novasaas init
```

## Usage

### Initialize your project

```bash
npx novasaas init
```

This will:
- Create a `lib/utils.ts` file with the `cn()` helper function
- Create a `components/ui` directory for your components
- Check for required dependencies

### Add components

```bash
# Add a single component
npx novasaas add button

# Add multiple components
npx novasaas add button card badge

# Add all components
npx novasaas add --all

# Overwrite existing files
npx novasaas add button --overwrite

# Custom output path
npx novasaas add button --path ./src/components/custom
```

### List available components

```bash
npx novasaas list
```

## Available Components

| Category | Components |
|----------|-----------|
| **Inputs** | Button, Switch |
| **Data Display** | Badge, Avatar, StatsCard, DataTable |
| **Layout** | Card, Sidebar |
| **Feedback** | Alert, Progress, Modal, Toast |
| **Navigation** | Tabs |
| **Forms** | LoginForm |

## Requirements

- React 18+
- Tailwind CSS
- TypeScript (recommended)

## Dependencies

The CLI will prompt you to install these if missing:

```bash
npm install clsx tailwind-merge lucide-react
```

## License

MIT
