import { $wishlist } from 'models';
import { useWishListAddItem, useWishListRemoveItem } from 'hooks';

export const useWishListToggleItem = () => {
	const onAddItem = useWishListAddItem();
	const onRemoveItem = useWishListRemoveItem();

	return async (product) => {
		if ($wishlist.isInWishlist(product)) {
			await onRemoveItem(product);
		} else {
			await onAddItem(product);
		}
	};
};
