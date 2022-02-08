import {
    FC, useMemo, Suspense, isValidElement,
} from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { useProvide } from '../provide'
import { PROVIDE_ROUTER } from './tokens'
import { CoreRouteObject } from '../types'
import { RouteProvider } from '~core/router/Route'

const parseRoutes = (routes: CoreRouteObject[]): RouteObject[] => (
    routes
        ?.sort((a, b) => (b.path.includes('*') ? (a.path.includes('*') ? 1 : -1) : 0))
        ?.map((
            {
                fallback: Fallback,
                element: RouteElement,
                children,
                ...route
            },
        ) => {
            const fallback = ((typeof Fallback === 'function' ? <Fallback /> : Fallback) || '')

            return {
                ...route,
                children: parseRoutes(children),
                element: (
                    <Suspense fallback={fallback}>
                        <RouteProvider fallback={fallback}>
                            {(isValidElement(RouteElement) ? RouteElement : <RouteElement />)}
                        </RouteProvider>
                    </Suspense>
                ),
            }
        }) || []
)

const RouterConfig: FC = ({ children }) => {
    const provideRoutes = useProvide<CoreRouteObject[]>(PROVIDE_ROUTER, [])

    const config = useMemo<RouteObject[]>(() => ([{
        path: '/',
        element: children,
        children: parseRoutes([
            ...provideRoutes,
        ]),
    }]), [children, provideRoutes])

    return useRoutes(config)
}

export default RouterConfig
