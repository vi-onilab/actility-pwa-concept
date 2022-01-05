const CmsBlockTypePolicy = {
	keyFields: (
		(item, { typename }) => (
			item?.optionId && `${typename}:${item?.optionId}`
		)
	),
};

export { CmsBlockTypePolicy };
