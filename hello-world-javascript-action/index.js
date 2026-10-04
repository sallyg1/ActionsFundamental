const fs = require("fs");

const who = (process.env.INPUT_WHO || "World").trim();
const greeting = `Hello ${who} from a JavaScript action!`;
const time = new Date().toISOString();

console.log(greeting);
console.log(`Executed at ${time}`);

const outputFile = process.env.GITHUB_OUTPUT;

if (!outputFile) {
  console.error("GITHUB_OUTPUT is unavailable.");
  process.exit(1);
}

fs.appendFileSync(outputFile, `greeting=${greeting}\n`);
fs.appendFileSync(outputFile, `time=${time}\n`);
