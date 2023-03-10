import { gql } from "apollo-server-core";

export const commonApiSchema = gql`
  type Ingredient implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!

    title: String!
    calories: Float!
    totalFat: Float!
    saturatedFat: Float!
    transFat: Float!
    cholesterol: Float!
    sodium: Float!
    totalCarbs: Float!
    fiber: Float!
    totalSugars: Float!
    addedSugars: Float!
    protein: Float!
    vitaminD: Float!
    potassium: Float!
    calcium: Float!
    iron: Float!
  }
  type IngredientList implements PaginatedList {
    items: [Ingredient!]!
    totalItems: Int!
  }

  type ProductIngredient implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!

    product: Product!
    productVariant: ProductVariant
    ingredient: Ingredient!
    quantity: Float!
    quantityUnit: String!
  }
  type ProductIngredientList implements PaginatedList {
    items: [ProductIngredient!]!
    totalItems: Int!
  }

  extend type Product {
    ingredients(options: ProductIngredientListOptions): ProductIngredientList!
  }
  # Auto-generated at runtime
  #input IngredientListOptions
  #input ProductIngredientListOptions

  input IngredientListOptions {
    skip: Int
    take: Int
  }

  input ProductIngredientListOptions {
    skip: Int
    take: Int
  }
`;

export const adminApiSchema = gql`
  ${commonApiSchema}
  extend type Query {
    ingredient(id: ID!): Ingredient
    ingredients(options: IngredientListOptions): IngredientList!
    productIngredients(
      options: ProductIngredientListOptions
    ): ProductIngredientList!
  }
  extend type Mutation {
    createIngredient(input: CreateIngredientInput): Ingredient
  }

  input CreateIngredientInput {
    name: String
  }
`;

export const shopApiSchema = gql`
  ${commonApiSchema}
`;
