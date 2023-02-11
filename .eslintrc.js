/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: [
        //
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        //
        "@typescript-eslint",
        "react",
    ],
    settings: { react: { version: "detect" } },
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
    ignorePatterns: [
        //
        "/build/",
        "/dist/",
        "/node_modules/",
        "/out/",
        "src/server/types.ts",
        "src/graphql/types.ts",
    ],
};
