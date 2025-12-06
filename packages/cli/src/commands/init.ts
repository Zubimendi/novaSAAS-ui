import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
import { getProjectRoot, hasPackageJson, hasTailwindConfig, hasUtilsFile, ensureDir, writeFile } from "../utils.js";

const UTILS_CONTENT = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

export async function initCommand(options: { yes?: boolean }) {
  const spinner = ora();
  
  console.log(chalk.bold("\n🚀 Initializing NovaSaas UI\n"));
  
  // Check for package.json
  if (!(await hasPackageJson())) {
    console.log(chalk.red("✗ No package.json found. Please run this command in a project directory."));
    process.exit(1);
  }
  
  // Check for Tailwind
  if (!(await hasTailwindConfig())) {
    console.log(chalk.yellow("⚠ No Tailwind CSS config found. NovaSaas components require Tailwind CSS."));
    console.log(chalk.gray("  Run: npm install -D tailwindcss postcss autoprefixer"));
    console.log(chalk.gray("  Then: npx tailwindcss init -p\n"));
  }
  
  const root = getProjectRoot();
  
  // Determine if using src directory
  const useSrc = await fs.pathExists(path.join(root, "src"));
  const libPath = useSrc ? path.join(root, "src", "lib") : path.join(root, "lib");
  const componentsPath = useSrc ? path.join(root, "src", "components", "ui") : path.join(root, "components", "ui");
  
  if (!options.yes) {
    const response = await prompts({
      type: "confirm",
      name: "proceed",
      message: `This will create:\n  - ${chalk.cyan(path.relative(root, libPath) + "/utils.ts")}\n  - ${chalk.cyan(path.relative(root, componentsPath))} directory\n\nContinue?`,
      initial: true,
    });
    
    if (!response.proceed) {
      console.log(chalk.gray("\nAborted."));
      process.exit(0);
    }
  }
  
  // Create lib/utils.ts
  spinner.start("Creating utils file...");
  await ensureDir(libPath);
  const utilsPath = path.join(libPath, "utils.ts");
  
  if (await fs.pathExists(utilsPath)) {
    spinner.info("utils.ts already exists, skipping...");
  } else {
    await writeFile(utilsPath, UTILS_CONTENT);
    spinner.succeed("Created lib/utils.ts");
  }
  
  // Create components/ui directory
  spinner.start("Creating components directory...");
  await ensureDir(componentsPath);
  spinner.succeed(`Created ${path.relative(root, componentsPath)}`);
  
  // Check for clsx and tailwind-merge
  spinner.start("Checking dependencies...");
  const packageJson = await fs.readJson(path.join(root, "package.json"));
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const missingDeps: string[] = [];
  
  if (!deps["clsx"]) missingDeps.push("clsx");
  if (!deps["tailwind-merge"]) missingDeps.push("tailwind-merge");
  if (!deps["lucide-react"]) missingDeps.push("lucide-react");
  
  if (missingDeps.length > 0) {
    spinner.warn(`Missing dependencies: ${missingDeps.join(", ")}`);
    console.log(chalk.gray(`  Run: npm install ${missingDeps.join(" ")}\n`));
  } else {
    spinner.succeed("All dependencies installed");
  }
  
  console.log(chalk.green("\n✓ NovaSaas initialized successfully!\n"));
  console.log(chalk.bold("Next steps:"));
  console.log(chalk.gray("  1. Install missing dependencies (if any)"));
  console.log(chalk.gray("  2. Add components: npx novasaas add button"));
  console.log(chalk.gray("  3. List all components: npx novasaas list\n"));
}
