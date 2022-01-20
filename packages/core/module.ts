import {
	Module, ModuleFn,
} from './types'
import provideAliases from './provideAliases'

const provideAliasesEntries = Object.entries(provideAliases)

const module = <T extends ModuleFn = ModuleFn, R extends ReturnType<T> = ReturnType<T>>(fn: T): Pick<R, 'configure'> => {
	const handle = (result: Module): R => {
		const { configure, ...rest } = result
		const response = rest as R

		if (response?.entry) {
			response.entryId ??= Symbol(result.entry.toString())
		}

		if (!Array.isArray(response?.provides)) {
			response.provides = []
		}

		provideAliasesEntries.forEach(([key, value]) => {
			if (key in response) {
				response.provides.push({ use: value, value: response[key] })
			}
		})

		if (typeof configure === 'function') {
			response.configure = (...args) => {
				const { configure: _, ...value } = {
					...response,
					...handle(configure.call(response, ...args)),
				}

				return value
			}
		}

		return response
	}

	return handle(fn())
}

export default module
