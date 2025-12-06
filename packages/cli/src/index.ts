#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { addCommand } from "./commands/add.js";
import { initCommand } from "./commands/init.js";
import { listCommand } from "./commands/list.js";

const program = new Command();

program
  .name("novasaas")
  .description("Add NovaSaas UI components to your project")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize NovaSaas in your project")
  .option("-y, --yes", "Skip confirmation prompt")
  .action(initCommand);

program
  .command("add [components...]")
  .description("Add components to your project")
  .option("-o, --overwrite", "Overwrite existing files")
  .option("-a, --all", "Add all available components")
  .option("-p, --path <path>", "Custom path for components", "./components/ui")
  .action(addCommand);

program
  .command("list")
  .description("List all available components")
  .action(listCommand);

program.parse();
