module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "eslint-config-prettier",
    "next/core-web-vitals",
    "plugin:vitest/recommended",
    "next",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: ["@typescript-eslint", "prettier", "tailwindcss", "vitest"],
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.cjs",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "error",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "linebreak-style": ["error", "unix"],
    camelcase: "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
