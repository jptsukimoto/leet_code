const { exec } = require("child_process");
const path = require("path");

const challengeName = process.argv[2];

if (!challengeName) {
  console.error("❌ Please provide the challenge folder name.");
  process.exit(1);
}

const tsFilePath = path.join("src", "challenges", challengeName, "index.ts");

exec(`npx tsc ${tsFilePath} --outDir dist/ &&
  node dist/challenges/${challengeName}/index.js`, (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});


