import { Injectable } from "@nestjs/common";
import { RequestContext } from "@vendure/core";

@Injectable()
export class IngredientService {
  async create(
    ctx: RequestContext,
    input: CreateIngredientInput
  ): Promise<Ingredient>> {
    await this.slugValidator.validateSlugs(ctx, input, ProductTranslation);
    const product = await this.translatableSaver.create({
      ctx,
      input,
      entityType: Product,
      translationType: ProductTranslation,
      beforeSave: async (p) => {
        await this.channelService.assignToCurrentChannel(p, ctx);
        if (input.facetValueIds) {
          p.facetValues = await this.facetValueService.findByIds(
            ctx,
            input.facetValueIds
          );
        }
        await this.assetService.updateFeaturedAsset(ctx, p, input);
      },
    });
    await this.customFieldRelationService.updateRelations(
      ctx,
      Product,
      input,
      product
    );
    await this.assetService.updateEntityAssets(ctx, product, input);
    this.eventBus.publish(new ProductEvent(ctx, product, "created", input));
    return assertFound(this.findOne(ctx, product.id));
  }
}
