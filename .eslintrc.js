/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:vue-scoped-css/vue3-recommended",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "vue/max-len": [
      "error",
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreHTMLAttributeValues: true,
      },
    ],
    "vue-scoped-css/enforce-style-type": 0,
    "no-console": [1, { allow: ["warn", "error"] }],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true,
        allowedNames: ["selfContext"], // Allow `const selfContext= this`;
      },
    ],
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: false,
    },
  },
}
