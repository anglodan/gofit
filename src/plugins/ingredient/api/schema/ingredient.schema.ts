import { gql } from 'graphql-tag';

import { ingredientApiSchema } from './ingredient.api.graphql';
import { ingredientTypeSchema } from './ingredient.type.graphql';

export const ingredientSchemaAdmin = gql`
  ${ingredientApiSchema}
  ${ingredientTypeSchema}
`;
