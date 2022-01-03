import { makeVar, useReactiveVar } from '@apollo/client';

const STORE_KEY = '_wishlist';
const STORE_KEY_ID = '_wishlist_id';

const transformProductToItem = (item) => {
	if (item?.product) {
		return item;
	}

	return {
		id: item?.id,
		product: {
			id: item?.id,
			sku: item?.sku,
		},
	};
};

const id$ = makeVar(localStorage.getItem(STORE_KEY_ID) || 0);
const items$ = (
	makeVar(
		(JSON.parse(localStorage.getItem(STORE_KEY) || '[]') || []).map(transformProductToItem),
	)
);

export const $wishlist = {
	get id() {
		return id$();
	},

	set id(newValue) {
		if (newValue) {
			id$(newValue);
			localStorage.setItem(STORE_KEY_ID, newValue);
		} else {
			id$([]);
			localStorage.removeItem(STORE_KEY_ID);
		}
	},

	get isId() {
		return !!id$();
	},

	useId: () => [
		useReactiveVar(id$),
		(newValue) => {
			$wishlist.id = newValue;
		},
	],

	useIsId: () => !!useReactiveVar(id$),

	get items() {
		return items$() || [];
	},

	set items(newValue) {
		if (newValue?.length > 0 && Array.isArray(newValue)) {
			items$(newValue);

			if (this.isId) {
				localStorage.removeItem(STORE_KEY);
			} else {
				localStorage.setItem(
					STORE_KEY,
					JSON.stringify(
						newValue?.map(({ id, product }) => ({
							id,
							sku: product?.sku,
						})) || [],
					),
				);
			}
		} else {
			items$([]);
			localStorage.removeItem(STORE_KEY);
		}
	},

	get isItems() {
		return this?.items?.length > 0;
	},

	isInWishlist: (idOrProduct) => (
		!!items$?.()?.find?.(({ product }) => String(product?.id) === String(idOrProduct?.id || idOrProduct))
	),

	useItems: () => [
		(useReactiveVar(items$) || []),
		(newValue) => {
			$wishlist.items = newValue;
		},
	],

	transformProductToItem,

	reset() {
		this.items = null;
		this.id = null;
	},
};
