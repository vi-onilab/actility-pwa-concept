export const CompareListTypePolicy = {
	keyFields: ['uid'],
	merge(existing, incoming, { isReference, readField, mergeObjects }) {
		const items = incoming?.items || readField('items', incoming) || [];
		const attributes = (isReference(incoming) ? readField('attributes', incoming) : incoming?.attributes) || [];

		const filteredItems = (
			items.map((item) => ({
				...item,
				attributes: (
					item.attributes?.filter(({ value }) => value !== 'N/A')
				),
			}))
		);

		const existAttributes = (
			filteredItems.reduce((result, current) => {
				const currentAttributes = (isReference(current) ? readField('attributes', current) : current.attributes) || [];

				currentAttributes.forEach(({ code }) => {
					result[code] = true;
				});

				return result;
			}, {})
		);

		return mergeObjects(
			mergeObjects(existing, incoming),
			{
				items: filteredItems,
				attributes: (
					attributes.filter(({ code }) => (code in existAttributes))
				),
			},
		);
	},
};
