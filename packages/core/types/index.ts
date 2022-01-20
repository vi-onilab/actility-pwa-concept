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

export interface Module extends Partial<ModuleProvideAliases> {
	entryId?: ProvideId
	entry?: ReactElement
	modules?: Partial<Module>[]
	provides?: ModuleProvide[]
	providers?: ModuleProvider[]
	configure?: ((...args: any) => Module) | unknown | undefined
}

export type ModuleFn = () => Module
