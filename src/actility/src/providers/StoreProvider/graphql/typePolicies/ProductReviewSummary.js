const ProductReviewSummaryTypePolicy = {
	fields: {
		votes: {
			read(existing) {
				if (existing) {
					return existing;
				}

				return (
					Array
						.from({ length: 5 })
						.map((_, index) => ({
							label: index + 1,
							value: 0,
						}))
						.reverse()
				);
			},
		},
	},
};

export { ProductReviewSummaryTypePolicy };
