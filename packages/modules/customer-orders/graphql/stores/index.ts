import { Platform } from '@pwa-concept/core'

export default require(`./${Platform.store}`)?.default
