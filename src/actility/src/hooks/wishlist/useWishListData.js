import { $auth, $wishlist } from 'models';
import { useQuery } from '@apollo/client';
import { CustomerWishlistsQuery, ProductsQuery } from 'schemas';

export const useWishListData = () => {
	const isWishlistId = $wishlist.useIsId();
	const isToken = $auth.useIsToken();
	const [wishlistItems] = $wishlist.useItems();

	const {
		data: {
			customer: {
				wishlists = null,
			} = {},
		} = {},
		loading: wishlistLoading,
	} = useQuery(CustomerWishlistsQuery, {
		variables: {
			id: $wishlist.id,
		},
		skip: !isToken,
		onCompleted({ customer }) {
			if (customer?.wishlists?.[0]) {
				$wishlist.id = customer.wishlists[0]?.id;
				$wishlist.items = customer.wishlists[0]?.items?.items?.map($wishlist.transformProductToItem);
			}
		},
	});

	const {
		data: {
			products: {
				items = [],
			} = {},
		} = {},
		loading: productsLoading,
	} = useQuery(ProductsQuery, {
		variables: {
			filter: {
				entity_id: {
					in: wishlistItems?.map(({ id }) => String(id)),
				},
			},
		},
		skip: isWishlistId || isToken || !wishlistItems?.length,
	});

	return {
		data: {
			items: (isToken ? (wishlists?.[0]?.items?.items ?? items) : items),
		},
		loading: wishlistLoading || productsLoading,
		error: null,
	};
};
