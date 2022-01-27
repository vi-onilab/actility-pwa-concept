import { FC, ReactElement } from 'react'
import { RouteObject } from 'react-router-dom'

export interface CoreRouteObject extends RouteObject {
	children?: CoreRouteObject[]
	element: ReactElement | FC
	fallback?: FC | string
}

export interface ModuleProvideAliases {
	graphqlPolicies: any
	graphqlLinks: any
	routes: CoreRouteObject[]
	graphqlSchemas: any[]
	graphqlResolvers: Record<string, any>[]
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
	modules?: Partial<Module>[]
	provides?: ModuleProvide[]
	providers?: ModuleProvider[]
	features?: Feature[]
	configure?: ((...args: any) => Module) | unknown | undefined
}

export type ModuleFn = () => Module
