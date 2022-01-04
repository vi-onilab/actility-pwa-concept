import { useMutation } from '@apollo/client';
import { RemoveItemFromCartMutation } from 'schemas';
import { $cart, $notifications } from 'models';

export const useCartRemoveItem = () => {
	const [removeItemFromCartMutation] = useMutation(RemoveItemFromCartMutation, { ignoreResults: true });

	return [
		async (cartItem) => {
			if (cartItem?.uid?.length > 0 && $cart.isId) {
				try {
					await removeItemFromCartMutation({
						variables: {
							input: {
								cart_id: $cart.id,
								cart_item_uid: cartItem?.uid,
							},
						},
					});
				} catch {
					$notifications.addErrorNotify({ body: 'Internal error.' });
				}
			}
		},
	];
};
