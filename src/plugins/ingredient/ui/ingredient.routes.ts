import { Route } from "@angular/router";
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";

import { IngredientDetailComponent } from "./components/ingredient-detail/ingredient-detail.component";
import { IngredientListComponent } from "./components/ingredient-list/ingredient-list.component";

export const ingredientRoutes: Route[] = [
  {
    path: "",
    component: IngredientListComponent,
    data: {
      breadcrumb: "Ingredients", // todo: i18n
    },
  },
  {
    path: "create",
    component: IngredientDetailComponent,
    data: {
      breadcrumb: "Ingredients", // todo: i18n
    },
  },
  /*{
    path: "products/:id",
    component: ProductDetailComponent,
    resolve: createResolveData(ProductResolver),
    canDeactivate: [CanDeactivateDetailGuard],
    data: {
      breadcrumb: productBreadcrumb,
    },
  },*/
];
