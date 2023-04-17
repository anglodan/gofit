import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@vendure/admin-ui/core";

import { IngredientDetailComponent } from "./components/ingredient-detail/ingredient-detail.component";
import { IngredientListComponent } from "./components/ingredient-list/ingredient-list.component";
import { IngredientDataService } from "./data/providers/ingredient-data.service";
import { ingredientRoutes } from "./ingredient.routes";

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ingredientRoutes)],
  declarations: [IngredientListComponent, IngredientDetailComponent],
  providers: [IngredientDataService],
})
export class IngredientUiModule {}
