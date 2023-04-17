import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  Allow,
  Ctx,
  ListQueryBuilder,
  Permission,
  Relations,
  RequestContext,
  Transaction,
  TransactionalConnection,
  Translated,
  UserInputError,
} from "@vendure/core";

import { Ingredient } from "../../entity/ingredient.entity";
import { IngredientService } from "../../ingredient.service";
import {
  MutationCreateIngredientArgs,
  QueryIngredientArgs,
  QueryIngredientsArgs,
} from "../../ingredient.types";

@Resolver()
export class IngredientResolver {
  constructor(private ingredientService: IngredientService) {}

  @Query()
  @Allow(Permission.ReadCatalog)
  async ingredients(
    @Ctx() ctx: RequestContext,
    @Args() args: QueryIngredientsArgs
  ) {
    return this.ingredientService.findAll(ctx, args.options || undefined);
  }

  @Query()
  @Allow(Permission.ReadCatalog)
  async ingredient(
    @Ctx() ctx: RequestContext,
    @Args() args: QueryIngredientArgs
    // @Relations({ entity: Ingredient, omit: ["variants", "assets"] })
    // relations: RelationPaths<Ingredient>
  ): Promise<Ingredient | null | undefined> {
    if (args.id) {
      const ingredient = await this.ingredientService.findOne(
        ctx,
        args.id
        // relations
      );
      if (args.slug && ingredient && ingredient.slug !== args.slug) {
        throw new UserInputError(`error.product-id-slug-mismatch`);
      }
      return ingredient;
      // } else if (args.slug) {
      //  return this.ingredientService.findOneBySlug(ctx, args.slug, relations);
    } else {
      throw new UserInputError(`error.product-id-or-slug-must-be-provided`);
    }
  }

  @Transaction()
  @Mutation()
  @Allow(Permission.CreateProduct)
  async createIngredient(
    @Ctx() ctx: RequestContext,
    @Args() args: MutationCreateIngredientArgs
  ) {
    return this.ingredientService.create(ctx, args.input);
  }
}
