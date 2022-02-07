import {
    FeatureFn,
    Feature
} from './types'
import provideAliases from './provideAliases'

const provideAliasesEntries = Object.entries(provideAliases)

const feature = <T extends FeatureFn = FeatureFn, R extends ReturnType<T> = ReturnType<T>>(fn: T): Pick<R, 'configure'> => {
    const handle = (result: Feature): R => {
        const { configure, ...rest } = result
        const response = rest as R

        if (!Array.isArray(response?.provides)) {
            response.provides = []
        }

        provideAliasesEntries.forEach(([key, value]) => {
            if (key in response) {
                response.provides.push({ use: value, value: response[key] })
            }
        })

        if (typeof configure === 'function') {
            response.configure = (...args): Omit<R, 'configure'> => {
                const { configure: _, ...value } = {
                    ...response,
                    ...handle(configure.call(response, ...args))
                }

                return value
            }
        }

        return response
    }

    return handle(fn())
}

export default feature
