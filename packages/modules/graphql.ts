/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cms = {
  __typename?: 'Cms';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CmsRoute = {
  __typename?: 'CmsRoute';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CreateCustomerOutput = {
  __typename?: 'CreateCustomerOutput';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type CustomerCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type GetAccessToken = {
  __typename?: 'GetAccessToken';
  accessToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer?: Maybe<CreateCustomerOutput>;
  getAccessToken?: Maybe<GetAccessToken>;
  recoverByEmail?: Maybe<Scalars['String']>;
  renewAccessToken?: Maybe<RenewAccessToken>;
};


export type MutationCreateCustomerArgs = {
  input?: InputMaybe<CustomerCreateInput>;
};


export type MutationGetAccessTokenArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRecoverByEmailArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRenewAccessTokenArgs = {
  code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  cms?: Maybe<Cms>;
  cmsRoute?: Maybe<CmsRoute>;
};


export type QueryCmsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCmsRouteArgs = {
  url?: InputMaybe<Scalars['String']>;
};

export type RenewAccessToken = {
  __typename?: 'RenewAccessToken';
  token?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cms: ResolverTypeWrapper<Cms>;
  CmsRoute: ResolverTypeWrapper<CmsRoute>;
  CreateCustomerOutput: ResolverTypeWrapper<CreateCustomerOutput>;
  CustomerCreateInput: CustomerCreateInput;
  GetAccessToken: ResolverTypeWrapper<GetAccessToken>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RenewAccessToken: ResolverTypeWrapper<RenewAccessToken>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Cms: Cms;
  CmsRoute: CmsRoute;
  CreateCustomerOutput: CreateCustomerOutput;
  CustomerCreateInput: CustomerCreateInput;
  GetAccessToken: GetAccessToken;
  Mutation: {};
  Query: {};
  RenewAccessToken: RenewAccessToken;
  String: Scalars['String'];
};

export type ClientDirectiveArgs = { };

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CmsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cms'] = ResolversParentTypes['Cms']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaKeywords?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CmsRouteResolvers<ContextType = any, ParentType extends ResolversParentTypes['CmsRoute'] = ResolversParentTypes['CmsRoute']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCustomerOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCustomerOutput'] = ResolversParentTypes['CreateCustomerOutput']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAccessToken'] = ResolversParentTypes['GetAccessToken']> = {
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: Resolver<Maybe<ResolversTypes['CreateCustomerOutput']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, never>>;
  getAccessToken?: Resolver<Maybe<ResolversTypes['GetAccessToken']>, ParentType, ContextType, RequireFields<MutationGetAccessTokenArgs, never>>;
  recoverByEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationRecoverByEmailArgs, never>>;
  renewAccessToken?: Resolver<Maybe<ResolversTypes['RenewAccessToken']>, ParentType, ContextType, RequireFields<MutationRenewAccessTokenArgs, never>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cms?: Resolver<Maybe<ResolversTypes['Cms']>, ParentType, ContextType, RequireFields<QueryCmsArgs, never>>;
  cmsRoute?: Resolver<Maybe<ResolversTypes['CmsRoute']>, ParentType, ContextType, RequireFields<QueryCmsRouteArgs, never>>;
};

export type RenewAccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['RenewAccessToken'] = ResolversParentTypes['RenewAccessToken']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cms?: CmsResolvers<ContextType>;
  CmsRoute?: CmsRouteResolvers<ContextType>;
  CreateCustomerOutput?: CreateCustomerOutputResolvers<ContextType>;
  GetAccessToken?: GetAccessTokenResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RenewAccessToken?: RenewAccessTokenResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  client?: ClientDirectiveResolver<any, any, ContextType>;
};
