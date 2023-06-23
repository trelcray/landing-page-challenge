/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 80,
  trailingComma: "es5",
  proseWrap: "always",
  quoteProps: "as-needed",
  singleQuote: false,
  tabWidth: 2,
  importOrder: [
    "^react(.*)",
    "antd/(.*)",
    "<THIRD_PARTY_MODULES>",
    "@/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
