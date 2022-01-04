import { $auth } from './auth';
import { $compare } from './compare';
import { $cart } from './cart';
import { $wishlist } from './wishlist';
import { $customer } from './customer';

export const $clean = {
	logout() {
		$auth.reset();
		$customer.reset();
		$compare.reset();
		$cart.reset();
		$wishlist.reset();
	},
};
