import { readFileSync } from "node:fs";

const files = ["index.html", "src/app.js", "src/styles.css", "README.md"];

for (const file of files) {
  const content = readFileSync(file, "utf8");
  if (!content.trim()) {
    throw new Error(`${file} is empty`);
  }
}

await import("../src/app.js").catch((error) => {
  if (!String(error).includes("document is not defined")) {
    throw error;
  }
});

console.log("Static project files are present. Open index.html or run npm start.");
