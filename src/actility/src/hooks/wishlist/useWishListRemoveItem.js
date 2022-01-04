import { useMutation } from '@apollo/client';
import { RemoveProductsFromWishListMutation } from 'schemas';
import { $auth, $notifications, $wishlist } from 'models';

export const useWishListRemoveItem = () => {
	const [removeProductsFromWishListMutation] = useMutation(RemoveProductsFromWishListMutation, { ignoreResults: true });

	return async (wishlistItem) => {
		if (wishlistItem?.id?.toString?.()?.length > 0 && $wishlist.isItems) {
			const itemsIds = [
				wishlistItem?.id,
			];
			if ($auth.isToken) {
				try {
					const { data: { removeProductsFromWishlist: { wishlist } = {} } = {} } = await removeProductsFromWishListMutation({
						variables: {
							id: $wishlist.id,
							itemsIds: (
								itemsIds.map(
									(id) => (
										$wishlist.items.find(
											({ product }) => product?.id === id,
										)?.id
									),
								)
							),
						},
					});
					if (wishlist?.id) {
						$wishlist.id = wishlist.id;
					}
					if (Array.isArray(wishlist?.items?.items)) {
						$wishlist.items = wishlist.items.items.map($wishlist.transformProductToItem);
					}

					$notifications.addSuccessNotify({
						body: 'The product has been removed from wishlist!',
					});
				} catch {
					// TODO: Handle error...
				}
			} else {
				$wishlist.items = $wishlist.items?.filter?.(({ id }) => !itemsIds.includes(id)) || [];

				$notifications.addSuccessNotify({
					body: 'The product has been removed from wishlist!',
				});
			}
		}
	};
};
