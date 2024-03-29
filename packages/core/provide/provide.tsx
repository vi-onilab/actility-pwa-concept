import {
    createContext, FC, useContext, PropsWithChildren,
} from 'react'
import {
    ProvideId, Provides, ProvideToken, Module, ProvideValue,
} from '../types'

const data = new Map<symbol, Provides>()
const context = createContext<ProvideId | null>(null)

const get = (id: ProvideId | Module, token: ProvideToken): ProvideValue => (
    data.get(
        (id as Module)?.entryId || id as ProvideId,
    )?.get(token)
)

const first = (token: ProvideToken): ProvideValue => {
    let firstElement = null

    data.forEach((value) => {
        if (!firstElement && value.has(token)) firstElement = value.get(token)
    })

    return firstElement
}

const init = (id: ProvideId, values: Provides): void => {
    data.set(id, values)
}

const useProvide = <T extends unknown, T2 extends unknown = T>(
    token: ProvideToken,
    defaultValue: T = null,
    transform = (value: T): T | T2 => value,
): T | T2 | null => {
    const id = useContext(context)

    if (id) {
        return transform(get(id, token))
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
    first,
}

export {
    Provide,
    useProvide,
}

export default ProvideConstructor
