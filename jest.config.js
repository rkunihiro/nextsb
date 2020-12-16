module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    // globals: {
    //     // we must specify a custom tsconfig for tests because we need the typescript transform
    //     // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    //     // can see this setting in tsconfig.jest.json -> "jsx": "react"
    //     "ts-jest": {
    //         tsConfig: "<rootDir>/test/tsconfig.json",
    //     }
    // }
};
