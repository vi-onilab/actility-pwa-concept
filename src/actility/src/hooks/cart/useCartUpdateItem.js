import { useMutation } from '@apollo/client';
import { UpdateCartItemsMutation } from 'schemas';
import { $cart } from 'models';

export const useCartUpdateItem = () => {
	const [updateCartItemsMutation] = useMutation(UpdateCartItemsMutation, { ignoreResults: true });

	return [
		async (cartItem, quantity = 1) => {
			if (cartItem?.uid?.length > 0 && $cart.isId) {
				await updateCartItemsMutation({
					variables: {
						input: {
							cart_id: $cart.id,
							cart_items: [
								{
									cart_item_id: cartItem.id,
									cart_item_uid: cartItem.uid,
									quantity,
								},
							],
						},
					},
				});
			}
		},
	];
};
