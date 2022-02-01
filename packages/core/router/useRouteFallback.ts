import useRoute from '~core/router/Route'

const useRouteFallback = (): ReturnType<typeof useRoute>['fallback'] => useRoute()?.fallback

export default useRouteFallback
