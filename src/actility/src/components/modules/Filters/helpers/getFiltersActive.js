export const getFiltersActive = (options, filters) => (
	Object
		.keys(options || {})
		.reduce(
			(summary, currentKey) => {
				const filter = filters?.find(({ type }) => type === currentKey);

				if (filter) {
					return [
						...summary,
						...(filter.makeTag?.(options?.[currentKey]) || []),
					];
				}

				return summary;
			},
			[],
		)
);
