import {
	createContext, FC, useContext, PropsWithChildren,
} from 'react'
import {
	ProvideId, Provides, ProvideToken, Module,
} from '../types'

const data = new Map<symbol, Provides>()
const context = createContext<ProvideId | null>(null)

const get = (id: ProvideId | Module, token: ProvideToken) => (
	data.get(
		(id as Module)?.entryId || id as ProvideId,
	)?.get(token)
)

const init = (id: ProvideId, values: Provides) => {
	data.set(id, values)
}

const useProvide = <T extends unknown>(token: ProvideToken, defaultValue: T = null): T | null => {
	const id = useContext(context)

	if (id) {
		return get(id, token)
	}

	return defaultValue
}

const ProvideConstructor = (id: ProvideId, provides: Provides): FC => {
	init(id, provides)

	return ({ children }: PropsWithChildren<{}>) => (
		<context.Provider value={id}>
			{children}
		</context.Provider>
	)
}

const Provide = {
	get,
	use: useProvide,
}

export {
	Provide,
	useProvide,
}

export default ProvideConstructor
