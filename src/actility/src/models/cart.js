import { makeVar, useReactiveVar } from '@apollo/client';

const STORAGE_KEY = 'cartId';

const cartIdModel = makeVar(localStorage.getItem(STORAGE_KEY));

export const $cart = {
	get id() {
		return cartIdModel();
	},
	get isId() {
		return $cart.id?.length > 0;
	},
	set id(newValue) {
		if (newValue) {
			cartIdModel(newValue);
			localStorage.setItem(STORAGE_KEY, newValue);
		} else {
			cartIdModel(null);
			localStorage.removeItem(STORAGE_KEY);
		}
	},
	useId: () => [
		useReactiveVar(cartIdModel),
		(newValue) => {
			$cart.id = newValue;
		},
	],

	reset() {
		this.id = null;
	},
};
