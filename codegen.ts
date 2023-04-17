import type { CodegenConfig } from "@graphql-codegen/cli";

const disableTsLintPlugin = { add: { content: "// tslint:disable" } };

const commonPlugins = [
  "typescript",
  disableTsLintPlugin,
  {
    add: {
      content: "/* eslint-disable */",
    },
  },
];

const clientPlugins = [
  ...commonPlugins,
  "typescript-operations",
  "typescript-compatibility",
];

const baseConfig = {
  namingConvention: {
    enumValues: "keep",
  },
  strict: true,
  scalars: {
    Money: "number",
  },
};

const config: CodegenConfig = {
  config: {
    ...baseConfig,
  },
  generates: {
    "./src/plugins/ingredient/ingredient.types.ts": {
      plugins: commonPlugins,
      schema: "http://localhost:3000/admin-api",
      config: {
        ...baseConfig,
        maybeValue: "T",
      },
    },
    "./src/plugins/ingredient/ui/ingredient.types.ts": {
      plugins: clientPlugins,
      documents: "./src/plugins/ingredient/ui/data/definitions/*.ts",
      schema: "http://localhost:3000/admin-api",
      config: {
        ...baseConfig,
        skipTypeNameForRoot: true,
      },
    },
  },
};
export default config;
