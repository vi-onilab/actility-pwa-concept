import {
    Module,
    ModuleFn,
    Writeable,
    ExtendFn,
} from './types'
import provideAliases from './provideAliases'
import extend from './utils/extend'

const provideAliasesEntries = Object.entries(provideAliases)

type ModuleReturnType<T extends ModuleFn> = (ReturnType<T> & { extend: ExtendFn })

const module = <T extends ModuleFn = ModuleFn, R extends ModuleReturnType<T> = ModuleReturnType<T>>(fn: T): (Pick<R, 'extend' | 'configure'>) => {
    const handle = (result: Module, isExtend: boolean = false): R => {
        const { configure, ...rest } = result
        const response = rest as Writeable<R>

        response.id ??= Symbol(fn?.name || fn.toString())
        response.type ??= MODULE_TOKEN

        if (response?.entry) {
            response.entryId ??= Symbol(result.entry?.key || result.entry.toString())
        }

        if (!Array.isArray(response?.provides) || isExtend) response.provides = []

        provideAliasesEntries.forEach(([key, value]) => {
            if (key in response) {
                response.provides.push({ use: value, value: response[key] })
            }
        })

        if (typeof configure === 'function') {
            response.configure = (...args): Omit<R, 'configure'> => {
                return handle({
                    ...response,
                    ...configure.call(response, ...args),
                })
            }
        }

        response.extend = (fn) => {
            const { configure: _, id: __, ...value } = response || {}

            return handle({
                ...response,
                ...fn(value, extend),
            }, true)
        }

        return response
    }

    return handle(fn())
}

export const MODULE_TOKEN = Symbol('Module')

export default module
