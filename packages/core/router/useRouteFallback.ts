import useRoute from '@pwa-concept/corerouter/Route'

const useRouteFallback = (): ReturnType<typeof useRoute>['fallback'] => useRoute()?.fallback

export default useRouteFallback
