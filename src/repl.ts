import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(/\s+/);
}

export function startREPL(): void {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", (line: string) => {
    if (line.trim() === "") {
      rl.prompt();
      return;
    } else {
      const result = cleanInput(line);
      console.log("Your command was: " + result[0]);
    }

    rl.prompt();
  });

  rl.prompt();
}
