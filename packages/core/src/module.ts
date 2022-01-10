import { FC } from 'react'
import { Module, ModuleFn } from './types'

const findDeepProviders = (module: Module): FC[] => ([
	...(module.providers || []),
	...(module?.modules?.map((deepModule) => findDeepProviders(deepModule)) || []).flat(),
])

const module = (fn: ModuleFn): Module => {
	const result = fn() || {}

	const providers = Array.from(new Set(findDeepProviders(result) || []))

	return {
		...result,
		providers,
	}
}

export default module
