import deepmerge from 'deepmerge'
import {
    Module, ModuleProvider, Provides, Feature
} from './types'
import { isPrimitive } from './utils'

interface GetModulesTreeReturnType {
    provides: Provides
    providers: ModuleProvider[]
}

const getModulesTree = (rootModule: Module): GetModulesTreeReturnType => {
    const provides: Provides = new Map()
    const providers = new Set<ModuleProvider>()

    const search = (instance: Module | Feature): void => {
        if ('providers' in instance) {
            instance?.providers?.forEach((provider) => (
                !providers.has(provider) && providers.add(provider)
            ))
        }

        (instance?.provides || []).forEach((provide) => {
            if (provides.has(provide.use)) {
                provides.set(provide.use, [...provides.get(provide.use), provide.value])
            } else {
                provides.set(provide.use, [provide.value])
            }
        })

        if ('features' in instance) {
            instance?.features?.forEach((feature) => search(feature))
        }

        if ('modules' in instance) {
            instance?.modules?.forEach((deepModule) => search(deepModule))
        }
    }

    search(rootModule)

    provides.forEach((value, key) => {
        provides.set(key, isPrimitive(value?.[0]) ? value?.[0] : deepmerge.all(value))
    })

    return {
        providers: Array.from(providers),
        provides
    }
}

export default getModulesTree
