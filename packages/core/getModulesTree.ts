import deepmerge from 'deepmerge'
import {
    Module, ModuleProvider, Provides, Feature,
} from './types'
import { isPrimitive } from './utils'
import { FEATURE_TOKEN } from '@pwa-concept/core/feature'
import { MODULE_TOKEN } from '@pwa-concept/core/module'

interface GetModulesTreeReturnType {
    provides: Provides
    providers: ModuleProvider[]
}

const getModulesTree = (rootModule: Module): GetModulesTreeReturnType => {
    const provides: Provides = new Map()
    const providers = new Set<ModuleProvider>()
    const injectedNodes = new Set()
    const modules = new Map<number, Set<Module>>()
    const features = new Map<number, Set<Feature>>()

    const treeShaking = (instance: Partial<Module | Feature>, level: number = 0) => {
        const has = injectedNodes.has(instance.id)

        if (!has) injectedNodes.add(instance.id)

        switch (instance?.type) {
            case FEATURE_TOKEN:
                if (!features.has(level)) features.set(level, new Set())
                if (!has) features.get(level).add(instance)
                break

            case MODULE_TOKEN:
                if (!modules.has(level)) modules.set(level, new Set())
                if (!has) modules.get(level).add(instance)
                break

            default:
                break
        }

        if ('features' in instance) {
            instance?.features?.forEach((item) => treeShaking(item, level + 1))
        }

        if ('modules' in instance) {
            instance?.modules?.forEach?.((item) => treeShaking(item, level + 1))
        }
    }

    const treeSearch = (instances: Set<Module | Feature>): void => {
        instances.forEach((instance) => {
            if ('providers' in instance) {
                instance?.providers?.forEach((provider) => (
                    !providers.has(provider) && providers.add(provider)
                ))
            }

            (instance?.provides || []).forEach((provide) => {
                if (provide.value !== undefined || (Array.isArray(provide.value) && provide.value.length > 0)) {
                    if (provides.has(provide.use)) {
                        provides.set(provide.use, [...provides.get(provide.use), provide.value])
                    } else {
                        provides.set(provide.use, [provide.value])
                    }
                }
            })
        })
    }

    treeShaking(rootModule)

    modules.forEach(treeSearch)
    features.forEach(treeSearch)

    provides.forEach((value, key) => {
        if (value?.[0] !== undefined) provides.set(key, isPrimitive(value?.[0]) ? value?.[0] : deepmerge.all(value))
    })

    return {
        providers: Array.from(providers),
        provides,
    }
}

export default getModulesTree
