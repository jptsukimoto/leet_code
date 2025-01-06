module.exports = {
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testMatch: ["**/dist/**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };
  