import type { CodegenConfig } from "@graphql-codegen/cli";

const commonPlugins = ["typescript"];

const config: CodegenConfig = {
  generates: {
    "./src/plugins/ingredients/ingredients.types.ts": {
      plugins: commonPlugins,
      schema: [
        "./src/plugins/ingredients/**/*.graphql",
      ]
    },
  },
};
export default config;
