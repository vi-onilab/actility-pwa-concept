/**
 * Get environment variable
 *
 * @param {string} name
 */
export const env = (name) => (
	process.env[`${name}_${process.env.STORE?.toUpperCase?.()}`] || process.env[name]
);
