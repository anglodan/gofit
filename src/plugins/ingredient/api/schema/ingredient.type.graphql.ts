import gql from 'graphql-tag';

export const ingredientTypeSchema = gql`
  type Ingredient implements Node {
    id: ID!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!

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
`;
