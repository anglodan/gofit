import { gql } from "apollo-angular";

export const INGREDIENT_FRAGMENT = gql`
  fragment Ingredient on Ingredient {
    id
    createdAt
    updatedAt
    name
  }
`;

export const GET_INGREDIENTS_LIST = gql`
  query GetIngredientList($options: IngredientListOptions) {
    ingredients(options: $options) {
      items {
        ...Ingredient
      }
      totalItems
    }
  }
  ${INGREDIENT_FRAGMENT}
`;

export const GET_INGREDIENT = gql`
  query GetIngredient($id: ID!) {
    ingredient(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_INGREDIENT = gql`
  mutation CreateIngredient($input: CreateIngredientInput!) {
    createIngredient(input: $input) {
      ...Ingredient
    }
  }
`;

export const UPDATE_INGREDIENT = gql`
  mutation UpdateIngredient($input: UpdateIngredientInput!) {
    updateIngredient(input: $input) {
      ...Ingredient
    }
  }
`;
