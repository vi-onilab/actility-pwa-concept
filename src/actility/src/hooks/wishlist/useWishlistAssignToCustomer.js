import { $auth, $wishlist } from 'models';
import { useMutation } from '@apollo/client';
import { AddProductsToWishListMutation } from 'schemas';

export const useWishlistAssignToCustomer = () => {
	const [addProductsToWishListMutation] = useMutation(AddProductsToWishListMutation, { ignoreResults: true });

	return async () => {
		if ($auth.isToken && !$wishlist.isId && $wishlist.isItems) {
			const items = $wishlist.items.map(({ product }) => ({ sku: product?.sku, quantity: 1 }));

			try {
				const { data: { addProductsToWishlist: { wishlist = null } = {} } = {} } = await addProductsToWishListMutation({
					variables: {
						id: $wishlist.id,
						items,
					},
				});
				if (wishlist?.id) {
					$wishlist.id = wishlist.id;
				}

				if (Array.isArray(wishlist?.items?.items)) {
					$wishlist.items = wishlist.items.items.map($wishlist.transformProductToItem);
				}
			} catch {
				// TODO: Handle error..
			}
		}
	};
};
