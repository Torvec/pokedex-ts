import { createInterface } from "readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown Command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt;
      return;
    }

    try {
      cmd.callback(commands);
    } catch (err) {
      console.log(err);
    }

    rl.prompt();
  });
}
