const ReviewItemTypePolicy = {
	keyFields: (
		(item, { typename }) => {
			const id = item?.review_id || item?.reviewId;

			if (id) {
				return `${typename}:${id}`;
			}

			return false;
		}
	),
	fields: {
		summary: {
			read(existing, { readField }) {
				if (existing) {
					return existing;
				}

				const votes = readField('rating_votes');
				if (votes?.length > 0) {
					return (
						readField('rating_votes')?.reduce((result, { value }) => (
							result + value
						), 0) / votes.length
					);
				}

				return 0;
			},
		},
	},
};

export { ReviewItemTypePolicy };
