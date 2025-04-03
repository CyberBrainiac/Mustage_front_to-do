module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier", "react-refresh"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",

  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "prettier/prettier": "warn",
    "react/react-in-jsx-scope": "off",
  },

  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
      { property: "forbidExtraProps", exact: true },
    ],
    componentWrapperFunctions: [
      "observer",
      { property: "styled" },
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" },
    ],
    formComponents: ["CustomForm", { name: "Form", formAttribute: "endpoint" }],
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
};
