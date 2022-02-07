import { $auth } from '@pwa-concept/core/models'

export const $clean = {
	logout() {
		$auth.reset()
	},
}
