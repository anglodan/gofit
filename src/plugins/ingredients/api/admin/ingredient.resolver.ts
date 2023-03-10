import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  Allow,
  Ctx,
  ListQueryBuilder,
  Permission,
  RequestContext,
  TransactionalConnection,
} from "@vendure/core";

import { Ingredient } from "../../ingredient.entity";
import { MutationCreateIngredientArgs, QueryIngredientsArgs } from "../../ingredients.types";

@Resolver()
export class IngredientResolver {
  constructor(
    private listQueryBuilder: ListQueryBuilder
  ) {}

  @Query()
  @Allow(Permission.ReadCatalog)
  async ingredients(
    @Ctx() ctx: RequestContext,
    @Args() args: QueryIngredientsArgs
  ) {
    return this.listQueryBuilder
      .build(Ingredient, args.options || undefined, {
        relations: [],
        ctx,
      })
      .getManyAndCount()
      .then(([items, totalItems]) => ({
        items,
        totalItems,
      }));
  }

  @Mutation()
  @Allow(Permission.CreateProduct)
  async createIngredient(
    @Ctx() ctx: RequestContext,
    @Args() args: MutationCreateIngredientArgs
  ) {
    return 
  }
}
