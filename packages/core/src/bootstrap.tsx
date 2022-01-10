import { FC, ReactElement } from 'react'
import { Module } from './types'
import render from './render'

interface CreateFnOptions {
	root?: Parameters<typeof render>[1]
}

interface CreateFn {
	(module: Module, options?: CreateFnOptions): Promise<void>
}

const create: CreateFn = async (module: Module, options = {}) => {
	const { root = document.getElementById('app') } = options

	if (module?.entry) {
		render(
			!module?.providers?.length ? module.entry : (
				module.providers.reduceRight<ReactElement>((children, Current: FC) => (
					<Current>
						{children}
					</Current>
				), module.entry)
			),
			root,
		)
	}
}

interface BootstrapEntryFunction {
	(options: { create: typeof create }): Promise<void>
}

const bootstrap = async (fn: BootstrapEntryFunction) => {
	await fn({
		create,
	})
}

export default bootstrap
