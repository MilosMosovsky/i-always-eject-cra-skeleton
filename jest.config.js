module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
};
