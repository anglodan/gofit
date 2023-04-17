import { Injectable } from "@angular/core";
import { DataService } from "@vendure/admin-ui/core";

import {
  CreateIngredientInput,
  CreateIngredientMutation,
  CreateIngredientMutationVariables,
  GetIngredientListQuery,
  GetIngredientListQueryVariables,
  IngredientListOptions,
  UpdateIngredientInput,
  UpdateIngredientMutation,
  UpdateIngredientMutationVariables,
} from "../../ingredient.types";
import {
  CREATE_INGREDIENT,
  GET_INGREDIENTS_LIST,
  UPDATE_INGREDIENT,
} from "../definitions/ingredient-definitions";

@Injectable()
export class IngredientDataService {
  constructor(private dataService: DataService) {}

  getIngredients(options: IngredientListOptions = { take: 10 }) {
    return this.dataService.query<
      GetIngredientListQuery,
      GetIngredientListQueryVariables
    >(GET_INGREDIENTS_LIST, {
      options,
    });
  }

  /* getIngredient(id: string) {
    return this.dataService.query<
      GetIngredient.Query,
      GetIngredient.Variables
    >(GET_INGREDIENTS_LIST, {
      options,
    });
  } */

  createIngredient(ingredient: CreateIngredientInput) {
    return this.dataService.mutate<
      CreateIngredientMutation,
      CreateIngredientMutationVariables
    >(CREATE_INGREDIENT, {
      input: ingredient,
    });
  }

  updateIngredient(ingredient: UpdateIngredientInput) {
    return this.dataService.mutate<
      UpdateIngredientMutation,
      UpdateIngredientMutationVariables
    >(UPDATE_INGREDIENT, {
      input: ingredient,
    });
  }
}
