import deepmerge from 'deepmerge'
import {
    Module, ModuleProvider, Provides, Feature,
} from './types'
import { isPrimitive } from './utils'

interface GetModulesTreeReturnType {
    provides: Provides
    providers: ModuleProvider[]
}

const getModulesTree = (rootModule: Module): GetModulesTreeReturnType => {
    const provides: Provides = new Map()
    const providers = new Set<ModuleProvider>()
    const uniqueList = new Set()
    const modules = new Map<number, Set<Module>>()
    const features = new Map<number, Set<Feature>>()

    const searchModulesAndFeatures = (instance: Partial<Module | Feature>, level: number = 0) => {
        const has = uniqueList.has(instance.id)

        if (!has) uniqueList.add(instance.id)
        if (!modules.has(level)) modules.set(level, new Set())
        if (!features.has(level)) features.set(level, new Set())

        if (!has) modules.get(level).add(instance)
        if (!has) features.get(level).add(instance)

        if ('features' in instance) {
            instance?.features?.forEach((item) => searchModulesAndFeatures(item, level + 1))
        }

        if ('modules' in instance) {
            instance?.modules?.forEach?.((item) => searchModulesAndFeatures(item, level + 1))
        }
    }

    searchModulesAndFeatures(rootModule)

    const instancesHandler = (instances: Set<Module | Feature>): void => {
        instances.forEach((instance) => {
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
        })
    }

    modules.forEach(instancesHandler)
    features.forEach(instancesHandler)

    provides.forEach((value, key) => {
        if (value?.[0] !== undefined) provides.set(key, isPrimitive(value?.[0]) ? value?.[0] : deepmerge.all(value))
    })

    return {
        providers: Array.from(providers),
        provides,
    }
}

export default getModulesTree
