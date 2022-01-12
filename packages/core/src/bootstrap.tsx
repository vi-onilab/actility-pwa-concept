import { Module } from './types'
import render from './render'
import { combineProviders } from './utils'
import providers from './providers'
import getModulesTree from './getModulesTree'
import { ProvideConstructor } from './provide'

interface CreateFnOptions {
	root?: Parameters<typeof render>[1]
}

interface CreateFn {
	(module: Module, options?: CreateFnOptions): Promise<void>
}

const create: CreateFn = async (module: Module, options = {}) => {
	const { root = document.getElementById('app') } = options

	if (module?.entry && root) {
		const tree = getModulesTree(module)
		const moduleId = Symbol('bootstrap')

		const ProvideProvider = ProvideConstructor(moduleId, tree.provides)

		render(
			(
				<ProvideProvider>
					{combineProviders(module.entry, [
						...providers,
						...tree.providers,
					])}
				</ProvideProvider>
			),
			root,
		)
	}
}

interface BootstrapEntryFn {
	(options: { create: typeof create }): Promise<void>
}

const bootstrap = async (fn: BootstrapEntryFn) => {
	await fn({
		create,
	})
}

export default bootstrap
