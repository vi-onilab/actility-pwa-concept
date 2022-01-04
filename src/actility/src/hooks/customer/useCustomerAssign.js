import { useCartAssignToCustomer, useCompareAssignToCustomer, useWishlistAssignToCustomer } from 'hooks';
import { $auth } from 'models';

export const useCustomerAssign = () => {
	const assignCompareToCustomer = useCompareAssignToCustomer();
	const assignCartToCustomer = useCartAssignToCustomer();
	const assignWishlistToCustomer = useWishlistAssignToCustomer();

	return async () => {
		if ($auth.isToken) {
			try {
				await assignCompareToCustomer();
				await assignCartToCustomer();
				await assignWishlistToCustomer();
			} catch {
				// TODO: Handle error...
			}
		}
	};
};
