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
        const response = result as (Writeable<R> & { $$configure: () => any })

        response.id ??= Symbol(fn?.name || fn.toString())
        response.type ??= MODULE_TOKEN

        if (response?.entry) {
            response.entryId ??= Symbol(result.entry?.key || result.entry.toString())
        }

        if (!Array.isArray(response?.provides) || isExtend) response.provides = []

        provideAliasesEntries.forEach(([key, value]) => {
            if (key in response) {
                if (!response.provides?.find((candidate) => candidate.use === value && candidate.value === response[key])) {
                    response.provides.push({ use: value, value: response[key] })
                }
            }
        })

        if (typeof response?.configure === 'function') {
            if (!('$$configure' in response)) (response as any).$$configure = (response as any)?.configure

            response.configure = (...args): Omit<R, 'configure'> => {
                if ('$$configure' in response) {
                    return handle({
                        ...response,
                        ...(response as any).$$configure.call(response, ...args),
                    })
                }

                return response
            }
        }

        response.extend = (fn) => {
            const { id: __, ...value } = response || {}

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
