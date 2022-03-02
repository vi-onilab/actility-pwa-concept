import { FC, ReactElement } from 'react'
import { RouteObject } from 'react-router-dom'
import { DocumentNode } from 'graphql/language/ast'

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }

export interface CoreRouteObject extends RouteObject {
    children?: CoreRouteObject[]
    element: ReactElement | FC
    fallback?: FC | string
}

export type StoreFragments = DocumentNode[]
export type StorePossibleTypes<T extends string = string> = {
    [key in T]?: T[]
}

export interface ModuleProvideAliases {
    graphqlPolicies: any
    graphqlLinks: any
    routes: CoreRouteObject[]
    graphqlSchemas: any[]
    graphqlResolvers: Array<Record<string, any>>
    graphqlStoreFragments: StoreFragments
    graphqlStorePossibleTypes: StoreFragments
}

export type ProvideToken = string | symbol
export type ProvideValue = any
export type ProvideId = symbol
export type Provides = Map<ProvideToken, ProvideValue>

export type ModuleProvider = FC

export interface ModuleProvide {
    use: ProvideToken
    value: ProvideValue
}

export interface Feature extends Partial<ModuleProvideAliases> {
    provides?: ModuleProvide[]
    configure?: ((...args: any) => Feature) | unknown | undefined
}

export type FeatureFn = () => Feature

export interface Module extends Partial<ModuleProvideAliases> {
    entryId?: ProvideId
    entry?: ReactElement
    modules?: Array<Partial<Module>>
    provides?: ModuleProvide[]
    providers?: ModuleProvider[]
    features?: Feature[]
    configure?: ((...args: any) => Module) | unknown | undefined
}

export type ModuleFn = () => Module
