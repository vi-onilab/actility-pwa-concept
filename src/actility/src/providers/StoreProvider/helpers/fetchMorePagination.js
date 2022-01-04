export const fetchMorePagination = (
	{
		keyArgs = false,
		pageFieldName = 'pageInfo',
		itemsFieldName = 'items',
		currentPageVariableName = 'currentPage',
		validator = () => true,
	},
) => ({
	keyArgs,
	read(existing) {
		return existing;
	},

	merge(existing, incoming, { args, variables }) {
		if ((validator && !validator?.()) || (variables?.[currentPageVariableName] === 1 || args?.[currentPageVariableName] === 1)) {
			return incoming;
		}

		return {
			...existing,
			...incoming,
			[itemsFieldName]: [
				...(existing?.[itemsFieldName] || []),
				...(incoming?.[itemsFieldName] || []),
			],
			[pageFieldName]: (incoming?.[pageFieldName] || existing?.[pageFieldName] || {}),
		};
	},
});
