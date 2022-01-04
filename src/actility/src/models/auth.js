import { makeVar, useReactiveVar } from '@apollo/client';

const STORAGE_TOKEN_NAME = 'token';

const token = makeVar(localStorage.getItem(STORAGE_TOKEN_NAME));

const getToken = () => localStorage.getItem(STORAGE_TOKEN_NAME) ?? token();

const setToken = (newValue) => {
	token(newValue);
	if (newValue) {
		localStorage.setItem(STORAGE_TOKEN_NAME, newValue);
	} else {
		localStorage.removeItem(STORAGE_TOKEN_NAME);
	}
};

export const $auth = {
	get isToken() {
		return token()?.length > 0;
	},
	useIsToken: () => useReactiveVar(token)?.length > 0,
	useToken: () => [
		useReactiveVar(token),
		setToken,
	],
	getToken,
	setToken,

	reset() {
		setToken(null);
	},
};
