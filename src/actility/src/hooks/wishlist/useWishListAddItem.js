import { useMutation } from '@apollo/client';
import { AddProductsToWishListMutation } from 'schemas';
import { $auth, $notifications, $wishlist } from 'models';

export const useWishListAddItem = () => {
	const [addProductsToWishListMutation] = useMutation(AddProductsToWishListMutation, { ignoreResults: true });

	return async (product) => {
		const { sku, id } = product;
		if (id?.toString?.()?.length > 0 && sku?.toString?.()?.length > 0) {
			if ($auth.isToken) {
				try {
					const { data: { addProductsToWishlist: { wishlist } = {} } = {} } = await addProductsToWishListMutation({
						variables: {
							id: $wishlist.id,
							items: [{ sku, quantity: 1 }],
						},
					});
					if (wishlist?.id) {
						$wishlist.id = wishlist.id;
					}

					if (Array.isArray(wishlist?.items?.items)) {
						$wishlist.items = wishlist.items.items.map($wishlist.transformProductToItem);
					}

					$notifications.addSuccessNotify({
						body: 'The product was added to wishlist!',
					});
				} catch {
					// TODO: Handle error...
				}
			} else if (!$wishlist.isInWishlist(product)) {
				$wishlist.items = [
					...$wishlist.items,
					$wishlist.transformProductToItem(product),
				];

				$notifications.addSuccessNotify({
					body: 'The product was added to wishlist!',
				});
			}
		}
	};
};
