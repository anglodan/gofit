import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { IngredientResolver } from "./api/admin/ingredient.resolver";

import { Ingredient } from "./ingredient.entity";

import { adminApiSchema, shopApiSchema } from "./ingredients.api";

@VendurePlugin({
  imports: [PluginCommonModule],
  entities: [Ingredient],
  adminApiExtensions: {
    schema: adminApiSchema,
    resolvers: [IngredientResolver],
  },
  shopApiExtensions: {
    schema: shopApiSchema,
  },
})
export class IngredientPlugin {}
