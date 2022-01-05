export const PRODUCT_AGGREGATIONS_RESOLVERS = {
	ALL: ({ aggregation }) => ({
		type: aggregation?.attributeCode,
		label: aggregation?.label,
		payload: aggregation?.options,
		makeTag: (options) => (
			aggregation?.options
				?.filter(({ value }) => options?.includes?.(value))
				?.map(({ label, value }) => ({
					label,
					value,
					name: aggregation?.attributeCode,
				}))
		),
	}),

	price: ({ payload, aggregation }) => ({
		type: 'price',
		payload: [
			payload?.minPrice,
			payload?.maxPrice,
		],
		onRemove: (prev) => ({
			...prev,
			price: [payload?.minPrice, payload?.maxPrice],
		}),
		makeTag: (options) => (
			(payload?.minPrice !== options?.[0] || payload?.maxPrice !== options?.[1]) ? (
				[
					{
						label: `€${options?.[0]}-€${options?.[1]}`,
						name: 'price',
					},
				]
			) : []
		),
		toQuery: ({ data }) => ({
			[aggregation.attributeCode]: {
				from: Math.max(data?.[0], payload?.minPrice),
				to: Math.min(data?.[1], payload?.maxPrice),
			},
		}),
	}),
};
