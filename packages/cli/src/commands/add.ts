import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
import { 
  fetchRegistry, 
  fetchComponentCode, 
  getProjectRoot, 
  ensureDir, 
  writeFile, 
  fileExists,
  Component 
} from "../utils.js";

export async function addCommand(
  components: string[] = [],
  options: { overwrite?: boolean; all?: boolean; path?: string }
) {
  const spinner = ora();
  
  console.log(chalk.bold("\n📦 Adding NovaSaas components\n"));
  
  // Fetch registry
  spinner.start("Fetching component registry...");
  let registry;
  try {
    registry = await fetchRegistry();
    spinner.succeed(`Found ${registry.components.length} components`);
  } catch (error) {
    spinner.fail("Failed to fetch registry");
    console.log(chalk.red("\nCouldn't connect to the component registry."));
    console.log(chalk.gray("Check your internet connection and try again.\n"));
    process.exit(1);
  }
  
  // Determine which components to add
  let componentsToAdd: Component[] = [];
  
  if (options.all) {
    componentsToAdd = registry.components;
  } else if (components.length === 0) {
    // Interactive selection
    const choices = registry.components.map(c => ({
      title: c.name,
      value: c.name,
      description: c.description,
    }));
    
    const response = await prompts({
      type: "multiselect",
      name: "selected",
      message: "Which components would you like to add?",
      choices,
      hint: "- Space to select. Return to submit",
    });
    
    if (!response.selected || response.selected.length === 0) {
      console.log(chalk.gray("\nNo components selected.\n"));
      process.exit(0);
    }
    
    componentsToAdd = registry.components.filter(c => 
      response.selected.includes(c.name)
    );
  } else {
    // Add specified components
    for (const name of components) {
      const component = registry.components.find(c => c.name === name);
      if (!component) {
        console.log(chalk.yellow(`⚠ Component "${name}" not found, skipping...`));
      } else {
        componentsToAdd.push(component);
      }
    }
  }
  
  if (componentsToAdd.length === 0) {
    console.log(chalk.yellow("\nNo valid components to add.\n"));
    process.exit(0);
  }
  
  // Determine output path
  const root = getProjectRoot();
  const useSrc = await fs.pathExists(path.join(root, "src"));
  const defaultPath = useSrc ? "./src/components/ui" : "./components/ui";
  const outputPath = options.path || defaultPath;
  const fullOutputPath = path.resolve(root, outputPath);
  
  // Create output directory
  await ensureDir(fullOutputPath);
  
  // Track dependencies
  const allDependencies = new Set<string>();
  
  // Add each component
  console.log("");
  for (const component of componentsToAdd) {
    const fileName = `${component.name}.tsx`;
    const filePath = path.join(fullOutputPath, fileName);
    
    // Check if file exists
    if ((await fileExists(filePath)) && !options.overwrite) {
      console.log(chalk.yellow(`  ⚠ ${fileName} already exists, skipping... (use --overwrite to replace)`));
      continue;
    }
    
    spinner.start(`Adding ${component.name}...`);
    
    try {
      const code = await fetchComponentCode(component.name);
      await writeFile(filePath, code);
      spinner.succeed(`Added ${chalk.cyan(fileName)}`);
      
      // Track dependencies
      component.dependencies.forEach(dep => allDependencies.add(dep));
    } catch (error) {
      spinner.fail(`Failed to add ${component.name}`);
      console.log(chalk.gray(`  ${error}`));
    }
  }
  
  // Show dependency info
  if (allDependencies.size > 0) {
    console.log(chalk.bold("\n📋 Dependencies needed:"));
    console.log(chalk.gray(`  npm install ${Array.from(allDependencies).join(" ")}\n`));
  }
  
  console.log(chalk.green("✓ Components added successfully!\n"));
  console.log(chalk.bold("Usage example:"));
  console.log(chalk.gray(`  import { Button } from "${outputPath.replace(/^\.\//, "@/").replace(/\\/g, "/")}/button";\n`));
}
