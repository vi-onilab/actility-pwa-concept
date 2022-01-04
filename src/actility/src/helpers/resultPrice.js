export const resultPrice = (product) => {
	const maximumPrice = product?.priceRange?.maximumPrice;
	const minimumPrice = product?.priceRange?.minimumPrice;
	const isRange = minimumPrice?.finalPrice?.value !== maximumPrice?.finalPrice?.value;

	const value = minimumPrice?.finalPrice?.value || 0;
	const oldValue = minimumPrice?.regularPrice?.value || 0;

	const isDifferencePrice = oldValue !== value;

	const labelType = (isDifferencePrice ? 'discount' : null);
	const labelValue = (isDifferencePrice ? `${-minimumPrice?.discount?.percentOff}%` : null);

	return {
		value: value.toFixed(2),
		oldValue: oldValue.toFixed(2),
		isRange,
		label: {
			type: labelType,
			value: labelValue,
		},
	};
};
