module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'sanity', '**/micrio.d.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    "import",
    "prefer-arrow",
    "@typescript-eslint",
    "no-relative-import-paths",
    "react-refresh",
    "unused-imports"
  ],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  "settings": {
    "import/resolver": {
      "typescript": {
      }, // this loads <rootdir>/tsconfig.json to eslint
    }
  },
  rules: {
    "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      },
      {
        "selector": "enumMember",
        "format": ["PascalCase", "UPPER_CASE"]
      },
      // Enforce that boolean variables are prefixed with an allowed verb (see docs/code-style.md)
      {
        "selector": "variable",
        "types": ["boolean"],
        "prefix": ["is", "should", "has", "can", "did", "will", "prev", "allow", "has", "was", "hide", "show"],
        "format": ["PascalCase"]
      }
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      {
        "allowSameFolder": true
      }
    ],

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  },
}