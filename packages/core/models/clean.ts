import { $auth, $customer } from '@pwa-concept/core/models'

export const $clean = {
	logout() {
		$auth.reset(),
		$customer.reset();
	},
}
