import deepmerge from 'deepmerge'
import { Module, ModuleProvider, Provides } from './types'
import { isPrimitive } from './utils'

const getModulesTree = (rootModule: Module) => {
	const provides: Provides = new Map()
	const providers = new Set<ModuleProvider>()

	const search = (module: Module) => {
		const moduleProvides = module?.provides || []

		module?.providers?.forEach((provider) => (
			!providers.has(provider) && providers.add(provider)
		))

		moduleProvides.forEach((provide) => {
			if (provides.has(provide.use)) {
				provides.set(provide.use, [...provides.get(provide.use), provide.value])
			} else {
				provides.set(provide.use, [provide.value])
			}
		})

		module?.modules?.forEach((deepModule) => search(deepModule))
	}

	search(rootModule)

	provides.forEach((value, key) => {
		provides.set(key, isPrimitive(value?.[0]) ? value?.[0] : deepmerge.all(value))
	})

	return {
		providers: Array.from(providers),
		provides,
	}
}

export default getModulesTree
