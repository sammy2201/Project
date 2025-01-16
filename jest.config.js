module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!your-esm-module-name)/"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
