import { makeVar, useReactiveVar } from '@apollo/client';
import cookies from 'js-cookie';

const CURRENT_STORAGE_KEY = '_country';
const COOKIE_STORAGE_KEY = '_country_cookie';

const currentCountry$ = makeVar(localStorage.getItem(CURRENT_STORAGE_KEY) || null);
const cookieName$ = makeVar(localStorage.getItem(COOKIE_STORAGE_KEY) || null);

export const $country = {
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
		return currentCountry$();
	},
	set current(newValue) {
		if (newValue) {
			currentCountry$(newValue);
			localStorage.setItem(CURRENT_STORAGE_KEY, newValue);

			if ($country.isCookieName) {
				cookies?.set?.($country.cookieName, newValue, { expires: 365 });
			}
		} else {
			currentCountry$(null);
			localStorage.removeItem(CURRENT_STORAGE_KEY);
		}
	},
	get isCurrent() {
		return this.current?.length > 0;
	},
	useCurrent: () => [
		useReactiveVar(currentCountry$),
		(newValue) => {
			$country.current = newValue;
		},
	],

	fillFromCurrencySwitcherQuery(next) {
		if (!$country.isCookieName && next?.country_cookie_name) {
			$country.cookieName = next?.country_cookie_name;
		}

		if (next?.current_country_code !== $country.current) {
			$country.current = next.current_country_code;
		}
	},
};
