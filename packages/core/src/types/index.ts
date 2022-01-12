import { FC, ReactElement } from 'react'

export type ProvideToken = string | symbol
export type ProvideValue = any
export type ProvideId = symbol
export type Provides = Map<ProvideToken, ProvideValue>

export type ModuleProvider = FC

export interface ModuleProvide {
    use: ProvideToken
    value: ProvideValue
}

export interface Module {
    entry?: ReactElement
    modules?: Module[]
    provides?: ModuleProvide[]
    providers?: ModuleProvider[]
}

export interface ModuleFn {
    (): Module
}
