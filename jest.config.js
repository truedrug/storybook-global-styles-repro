/** @type {import ("jest").Config} */
module.exports = {
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  setupFiles: ["./jest.setup.js"],
  preset: "ts-jest",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  // collect coverage from src/YA**/*.tsx and not from src/YA**/*.stories.tsx and src/YASlider/*.tsx
  collectCoverageFrom: [
    "<rootDir>/src/YA*/*.tsx",
    "<rootDir>/src/Typography/index.tsx",
    "<rootDir>/src/ColorPicker/index.tsx",
    "!<rootDir>/src/**/*.stories.tsx",
    "!<rootDir>/src/YASlider/*.tsx",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      statements: 80,
      functions: 80,
      lines: 80,
    },
  },
};
