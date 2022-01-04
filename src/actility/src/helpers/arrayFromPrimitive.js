export const arrayFromPrimitive = (input) => (
	(
		Array.isArray(input) ? input : [input]
	)
);
