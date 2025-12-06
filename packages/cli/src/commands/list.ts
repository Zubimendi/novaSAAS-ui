import chalk from "chalk";
import ora from "ora";
import { fetchRegistry } from "../utils.js";

export async function listCommand() {
  const spinner = ora();
  
  console.log(chalk.bold("\n📋 NovaSaas UI Components\n"));
  
  spinner.start("Fetching component list...");
  
  try {
    const registry = await fetchRegistry();
    spinner.stop();
    
    // Group by category
    const categories: Record<string, typeof registry.components> = {};
    
    for (const component of registry.components) {
      if (!categories[component.category]) {
        categories[component.category] = [];
      }
      categories[component.category].push(component);
    }
    
    // Display by category
    for (const [category, components] of Object.entries(categories)) {
      console.log(chalk.bold.cyan(`  ${category.toUpperCase()}`));
      
      for (const component of components) {
        console.log(`    ${chalk.green("•")} ${chalk.white(component.name.padEnd(15))} ${chalk.gray(component.description)}`);
      }
      console.log("");
    }
    
    console.log(chalk.gray(`  Total: ${registry.components.length} components available\n`));
    console.log(chalk.bold("Usage:"));
    console.log(chalk.gray("  npx novasaas add button      # Add a single component"));
    console.log(chalk.gray("  npx novasaas add button card # Add multiple components"));
    console.log(chalk.gray("  npx novasaas add --all       # Add all components\n"));
    
  } catch (error) {
    spinner.fail("Failed to fetch component list");
    console.log(chalk.red("\nCouldn't connect to the component registry."));
    console.log(chalk.gray("Check your internet connection and try again.\n"));
    process.exit(1);
  }
}
