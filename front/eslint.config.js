import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.node },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    settings: {
      react: {
        version: "detect",
      },

      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],

      "import/no-unresolved": [
        "error",
        {
          ignore: ["\\.svg\\?react$", "@geodatin/datin-ui/icons"],
        },
      ],

      "import/no-named-as-default": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],

      "import/named": "off",

      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: ["module", "/^@shared/", ["parent", "sibling", "index"]],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
    },
  },
]);
