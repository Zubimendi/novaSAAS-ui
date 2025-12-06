import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";

const REGISTRY_URL = "https://raw.githubusercontent.com/Zubimendi/novaSAAS-ui/main/registry";

export interface Component {
  name: string;
  category: string;
  description: string;
  dependencies: string[];
  files: string[];
  registryDependencies: string[];
}

export interface Registry {
  name: string;
  version: string;
  components: Component[];
}

export async function fetchRegistry(): Promise<Registry> {
  // First try local registry (for development)
  const possiblePaths = [
    path.join(process.cwd(), "registry", "index.json"),
    path.join(process.cwd(), "..", "..", "registry", "index.json"), // When running from packages/cli
    path.join(__dirname, "..", "..", "..", "registry", "index.json"),
  ];
  
  for (const localPath of possiblePaths) {
    if (await fs.pathExists(localPath)) {
      return fs.readJson(localPath);
    }
  }
  
  // Try remote registry
  try {
    const response = await fetch(`${REGISTRY_URL}/index.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.statusText}`);
    }
    return await response.json() as Registry;
  } catch (error) {
    throw new Error("Could not find registry locally or remotely");
  }
}

export async function fetchComponentCode(componentName: string): Promise<string> {
  // First try local registry (for development)
  const possiblePaths = [
    path.join(process.cwd(), "registry", "components", `${componentName}.tsx`),
    path.join(process.cwd(), "..", "..", "registry", "components", `${componentName}.tsx`),
    path.join(__dirname, "..", "..", "..", "registry", "components", `${componentName}.tsx`),
  ];
  
  for (const localPath of possiblePaths) {
    if (await fs.pathExists(localPath)) {
      return fs.readFile(localPath, "utf-8");
    }
  }
  
  // Try remote registry
  try {
    const response = await fetch(`${REGISTRY_URL}/components/${componentName}.tsx`);
    if (!response.ok) {
      throw new Error(`Failed to fetch component: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Could not find component ${componentName}`);
  }
}

export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  await fs.writeFile(filePath, content, "utf-8");
}

export async function fileExists(filePath: string): Promise<boolean> {
  return fs.pathExists(filePath);
}

export function getProjectRoot(): string {
  return process.cwd();
}

export async function hasPackageJson(): Promise<boolean> {
  return fileExists(path.join(getProjectRoot(), "package.json"));
}

export async function hasTailwindConfig(): Promise<boolean> {
  const root = getProjectRoot();
  const configs = [
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.config.mjs",
    "tailwind.config.cjs",
  ];
  
  for (const config of configs) {
    if (await fileExists(path.join(root, config))) {
      return true;
    }
  }
  return false;
}

export async function hasUtilsFile(): Promise<boolean> {
  const root = getProjectRoot();
  const utilsPaths = [
    "lib/utils.ts",
    "lib/utils.js",
    "src/lib/utils.ts",
    "src/lib/utils.js",
  ];
  
  for (const utilsPath of utilsPaths) {
    if (await fileExists(path.join(root, utilsPath))) {
      return true;
    }
  }
  return false;
}
