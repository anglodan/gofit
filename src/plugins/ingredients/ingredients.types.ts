export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateIngredientInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type DateTime = {
  __typename?: 'DateTime';
};

export type Ingredient = Node & {
  __typename?: 'Ingredient';
  addedSugars: Scalars['Float'];
  calcium: Scalars['Float'];
  calories: Scalars['Float'];
  cholesterol: Scalars['Float'];
  createdAt: DateTime;
  fiber: Scalars['Float'];
  id: Scalars['ID'];
  iron: Scalars['Float'];
  potassium: Scalars['Float'];
  protein: Scalars['Float'];
  saturatedFat: Scalars['Float'];
  sodium: Scalars['Float'];
  title: Scalars['String'];
  totalCarbs: Scalars['Float'];
  totalFat: Scalars['Float'];
  totalSugars: Scalars['Float'];
  transFat: Scalars['Float'];
  updatedAt: DateTime;
  vitaminD: Scalars['Float'];
};

export type IngredientList = PaginatedList & {
  __typename?: 'IngredientList';
  items: Array<Ingredient>;
  totalItems: Scalars['Int'];
};

export type IngredientListOptions = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient?: Maybe<Ingredient>;
};


export type MutationCreateIngredientArgs = {
  input?: InputMaybe<CreateIngredientInput>;
};

export type Node = {
  id: Scalars['ID'];
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** List Ingredients */
  ingredients: IngredientList;
};


export type QueryIngredientsArgs = {
  options?: InputMaybe<IngredientListOptions>;
};
