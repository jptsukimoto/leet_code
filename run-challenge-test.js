const { execSync } = require("child_process");
const path = require("path");


const challengeName = process.argv[2];

if (!challengeName) {
  console.error("❌ Please provide the challenge folder name.");
  process.exit(1);
}

const tsFilePath = path.join("src", "challenges", challengeName, `index.ts`);
const tsTestFilePath = path.join("src", "challenges", challengeName, "index.test.ts");

execSync(`npx tsc ${tsFilePath} --outDir dist/challenges/${challengeName} && 
  npx tsc ${tsTestFilePath} --outDir dist/challenges/${challengeName}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error during building: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});

execSync(`npx jest ./dist/challenges/${challengeName}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error during testing: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
  

