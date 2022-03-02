import {
    FeatureFn,
    Feature,
    Writeable,
    ExtendFn,
} from './types'
import provideAliases from './provideAliases'

const provideAliasesEntries = Object.entries(provideAliases)

type FeatureReturnType<T extends FeatureFn> = (ReturnType<T> & { extend: ExtendFn })

const feature = <T extends FeatureFn = FeatureFn, R extends FeatureReturnType<T> = FeatureReturnType<T>>(fn: T): Pick<R, 'extend' | 'configure'> => {
    const handle = (result: Feature): R => {
        const { configure, ...rest } = result
        const response = rest as Writeable<R>

        response.id = Symbol(fn.toString())

        if (!Array.isArray(response?.provides)) response.provides = []

        provideAliasesEntries.forEach(([key, value]) => {
            if (key in response) {
                response.provides.push({ use: value, value: response[key] })
            }
        })

        if (typeof configure === 'function') {
            response.configure = (...args): Omit<R, 'configure' | 'id'> => {
                const { configure: _, id: __, ...value } = {
                    ...response,
                    ...handle(configure.call(response, ...args)),
                }

                return value
            }
        }

        response.extend = (fn) => {
            const { configure: _, id: __, ...value } = response

            return fn(value)
        }

        return response
    }

    return handle(fn())
}

export default feature
