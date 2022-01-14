import { $auth } from './auth'

export const $clean = {
	logout() {
		$auth.reset()
	},
}
