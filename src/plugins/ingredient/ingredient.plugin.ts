import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { AdminUiExtension } from "@vendure/ui-devkit/compiler";
import path from "path";

import { IngredientResolver } from "./api/admin/ingredient.resolver";
import { ingredientSchemaAdmin } from "./api/schema/ingredient.schema";
import { Ingredient } from "./entity/ingredient.entity";
import { IngredientService } from "./ingredient.service";

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [IngredientService],
  entities: [Ingredient],
  adminApiExtensions: {
    schema: ingredientSchemaAdmin,
    resolvers: [IngredientResolver],
  },
  // shopApiExtensions: {
  //  schema: shopApiSchema,
  // },
})
export class IngredientPlugin {
  static uiExtensions: AdminUiExtension = {
    extensionPath: path.join(__dirname, "ui"),
    ngModules: [
      {
        type: "shared" as const,
        ngModuleFileName: "ingredient-shared.module.ts",
        ngModuleName: "IngredientSharedUiModule",
      },
      {
        type: "lazy" as const,
        route: "ingredients",
        ngModuleFileName: "ingredient.module.ts",
        ngModuleName: "IngredientUiModule",
      },
    ],
  };
}
