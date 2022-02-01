import { env } from './utils'

const Platform = {
    store: env('PWA_STORE_NAME'),
    isClient: typeof window !== 'undefined' && typeof window.document !== 'undefined',
    isServer: typeof process !== 'undefined' && process.versions != null && process.versions.node != null
}

export default Platform
