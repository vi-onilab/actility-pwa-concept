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

export type CategoriesQueryInput = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parent?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  banners?: Maybe<Array<Maybe<CategoryBanner>>>;
  breadcrumbs?: Maybe<Array<Maybe<CategoryBreadcrumb>>>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<CategoryImages>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Category>;
};

export type CategoryBanner = {
  __typename?: 'CategoryBanner';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<CategoryBannerImage>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryBannerImage = {
  __typename?: 'CategoryBannerImage';
  id?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Maybe<CategoryBannerImageSource>>>;
  url?: Maybe<Scalars['String']>;
};

export type CategoryBannerImageSource = {
  __typename?: 'CategoryBannerImageSource';
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CategoryBreadcrumb = {
  __typename?: 'CategoryBreadcrumb';
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryImage = {
  __typename?: 'CategoryImage';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CategoryImages = {
  __typename?: 'CategoryImages';
  main?: Maybe<CategoryImage>;
  thumbnail?: Maybe<CategoryImage>;
};

export type CategoryQueryInput = {
  id?: InputMaybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  cms?: Maybe<Cms>;
  cmsRoute?: Maybe<CmsRoute>;
};


export type QueryCategoriesArgs = {
  input?: InputMaybe<CategoriesQueryInput>;
};


export type QueryCategoryArgs = {
  input?: InputMaybe<CategoryQueryInput>;
};


export type QueryCmsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCmsRouteArgs = {
  url?: InputMaybe<Scalars['String']>;
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
  CategoriesQueryInput: CategoriesQueryInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryBanner: ResolverTypeWrapper<CategoryBanner>;
  CategoryBannerImage: ResolverTypeWrapper<CategoryBannerImage>;
  CategoryBannerImageSource: ResolverTypeWrapper<CategoryBannerImageSource>;
  CategoryBreadcrumb: ResolverTypeWrapper<CategoryBreadcrumb>;
  CategoryImage: ResolverTypeWrapper<CategoryImage>;
  CategoryImages: ResolverTypeWrapper<CategoryImages>;
  CategoryQueryInput: CategoryQueryInput;
  Cms: ResolverTypeWrapper<Cms>;
  CmsRoute: ResolverTypeWrapper<CmsRoute>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CategoriesQueryInput: CategoriesQueryInput;
  Category: Category;
  CategoryBanner: CategoryBanner;
  CategoryBannerImage: CategoryBannerImage;
  CategoryBannerImageSource: CategoryBannerImageSource;
  CategoryBreadcrumb: CategoryBreadcrumb;
  CategoryImage: CategoryImage;
  CategoryImages: CategoryImages;
  CategoryQueryInput: CategoryQueryInput;
  Cms: Cms;
  CmsRoute: CmsRoute;
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type ClientDirectiveArgs = { };

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  banners?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryBanner']>>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryBreadcrumb']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<ResolversTypes['CategoryImages']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBannerResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBanner'] = ResolversParentTypes['CategoryBanner']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['CategoryBannerImage']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBannerImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBannerImage'] = ResolversParentTypes['CategoryBannerImage']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoryBannerImageSource']>>>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBannerImageSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBannerImageSource'] = ResolversParentTypes['CategoryBannerImageSource']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryBreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryBreadcrumb'] = ResolversParentTypes['CategoryBreadcrumb']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryImage'] = ResolversParentTypes['CategoryImage']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryImages'] = ResolversParentTypes['CategoryImages']> = {
  main?: Resolver<Maybe<ResolversTypes['CategoryImage']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['CategoryImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, never>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, never>>;
  cms?: Resolver<Maybe<ResolversTypes['Cms']>, ParentType, ContextType, RequireFields<QueryCmsArgs, never>>;
  cmsRoute?: Resolver<Maybe<ResolversTypes['CmsRoute']>, ParentType, ContextType, RequireFields<QueryCmsRouteArgs, never>>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  CategoryBanner?: CategoryBannerResolvers<ContextType>;
  CategoryBannerImage?: CategoryBannerImageResolvers<ContextType>;
  CategoryBannerImageSource?: CategoryBannerImageSourceResolvers<ContextType>;
  CategoryBreadcrumb?: CategoryBreadcrumbResolvers<ContextType>;
  CategoryImage?: CategoryImageResolvers<ContextType>;
  CategoryImages?: CategoryImagesResolvers<ContextType>;
  Cms?: CmsResolvers<ContextType>;
  CmsRoute?: CmsRouteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  client?: ClientDirectiveResolver<any, any, ContextType>;
};
