import { bootstrap } from '@pwa-concept/core'
import { AppModule } from './AppModule'

bootstrap(async ({ create }) => {
	await create(AppModule)
})
