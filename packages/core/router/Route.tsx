import {
    createContext,
    ReactElement,
    FC,
    PropsWithChildren,
    useContext,
} from 'react'

interface RouteProps {
    fallback: ReactElement | FC | null | string
}

const ctx = createContext<RouteProps>({ fallback: null })

const RouteProvider = ({ children, ...ctxData }: PropsWithChildren<RouteProps>): ReactElement => (
    <ctx.Provider value={ctxData}>
        {children}
    </ctx.Provider>
)

const useRoute = (): RouteProps => useContext(ctx)

export {
    RouteProvider,
}

export default useRoute
