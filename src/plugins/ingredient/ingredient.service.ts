import { Injectable } from "@nestjs/common";
import {
  assertFound,
  ID,
  ListQueryBuilder,
  ListQueryOptions,
  RelationPaths,
  RequestContext,
  TransactionalConnection,
} from "@vendure/core";

import { Ingredient } from "./entity/ingredient.entity";
import {
  CreateIngredientInput,
  IngredientListOptions,
} from "./ingredient.types";

@Injectable()
export class IngredientService {
  constructor(
    private connection: TransactionalConnection,
    private listQueryBuilder: ListQueryBuilder
  ) {}

  async findAll(ctx: RequestContext, options?: IngredientListOptions) {
    return this.listQueryBuilder
      .build(Ingredient, options, {
        relations: [],
        ctx,
      })
      .getManyAndCount()
      .then(([items, totalItems]) => ({
        items,
        totalItems,
      }));
  }

  async findOne(
    ctx: RequestContext,
    id: ID,
    relations?: RelationPaths<Ingredient>
  ): Promise<Ingredient | null | undefined> {
    return await this.connection.getRepository(ctx, Ingredient).findOne({
      where: { id },
      relations: relations ?? [],
    });
  }

  async create(
    ctx: RequestContext,
    input: CreateIngredientInput
  ): Promise<Ingredient | null> {
    const ingredient = new Ingredient({
      name: input.name,
      calories: input.calories,
      totalFat: input.totalFat,
      saturatedFat: input.saturatedFat,
      transFat: input.transFat,
      cholesterol: input.cholesterol,
      sodium: input.sodium,
      totalCarbs: input.totalCarbs,
      fiber: input.fiber,
      totalSugars: input.totalSugars,
      addedSugars: input.addedSugars,
      protein: input.protein,
      vitaminD: input.vitaminD,
      potassium: input.potassium,
      calcium: input.calcium,
      iron: input.iron,
    });

    const newIngredient = await this.connection
      .getRepository(ctx, Ingredient)
      .save(ingredient);

    return assertFound(this.findOne(ctx, newIngredient.id));
  }
}
