import { Module, ModuleFn } from './types'

const module = (fn: ModuleFn): Module => {
	const result = fn()

	if (result?.entry) {
		result.entryId ??= Symbol(result.entry.toString())
	}

	return result
}

export default module
