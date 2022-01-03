const priceTransform = (value, digits = 2) => ({
	value: value || 0,
	label: `€${Number(value || '0')
		.toFixed(digits)
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`,
});

export { priceTransform };
