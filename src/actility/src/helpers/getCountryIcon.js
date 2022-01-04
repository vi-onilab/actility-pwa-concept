import { COUNTRY_ICONS } from '../constants';

/**
 * Obtaining a country icon.
 *
 * @param {string} code - key from COUNTRY_ICONS constant
 * @returns {string|null}
 */
export const getCountryIcon = (code) => (
	COUNTRY_ICONS?.[code] || null
);
