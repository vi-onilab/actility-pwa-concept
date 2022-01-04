import { makeVar, useReactiveVar } from '@apollo/client';
import cookies from 'js-cookie';

const CURRENT_STORAGE_KEY = '_currency';
const COOKIE_STORAGE_KEY = '_currency_cookie';

const currentCurrency$ = makeVar(localStorage.getItem(CURRENT_STORAGE_KEY) || null);
const cookieName$ = makeVar(localStorage.getItem(COOKIE_STORAGE_KEY) || null);

export const $currency = {
	get cookieName() {
		return cookieName$();
	},
	set cookieName(newValue) {
		if (newValue) {
			cookieName$(newValue);
			localStorage.setItem(COOKIE_STORAGE_KEY, newValue);
		} else {
			cookieName$(null);
			localStorage.removeItem(COOKIE_STORAGE_KEY);
		}
	},
	get isCookieName() {
		return this.cookieName?.length > 0;
	},

	get current() {
		return currentCurrency$();
	},
	set current(newValue) {
		if (newValue) {
			currentCurrency$(newValue);
			localStorage.setItem(CURRENT_STORAGE_KEY, newValue);

			if ($currency.isCookieName) {
				cookies?.set?.($currency.cookieName, newValue, { expires: 365 });
			}
		}
	},
	get isCurrent() {
		return this.current?.length > 0;
	},
	useCurrent: () => [
		useReactiveVar(currentCurrency$),
		(newValue) => {
			$currency.current = newValue;
		},
	],

	fillFromCurrencyQuery(next) {
		if (!$currency.isCurrent) {
			$currency.current = next?.base_currency_code;
		}
	},

	fillFromCurrencySwitcherQuery(next) {
		if (!$currency.isCookieName && next?.currency_cookie_name) {
			$currency.cookieName = next?.currency_cookie_name;
		}
	},
};
