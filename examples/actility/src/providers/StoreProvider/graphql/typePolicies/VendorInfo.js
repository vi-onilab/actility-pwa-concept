const VendorInfoTypePolicy = {
	fields: {
		storeName: {
			read: (_, { readField }) => readField('info')?.general?.store_information?.name?.[0],
		},
		image: {
			read: (_, { readField }) => readField('info')?.general?.store_information?.logo,
		},
		workHours: {
			read: (_, { readField }) => readField('info')?.general?.store_information?.hours?.[0],
		},
		description: {
			read: (_, { readField }) => readField('info')?.page?.general?.description,
		},
		country: {
			read: (_, { readField }) => readField('info')?.general?.store_information?.vendor_country,
		},
		address: {
			read: (_, { readField }) => readField('info')?.general?.store_information?.vendor_address,
		},
		banner: {
			read(_, { readField }) {
				const info = readField('info');

				return {
					image: info?.page?.general?.banner,
					slider: {
						title: info?.page?.general?.banner_slider?.title,
						delay: Number(info?.page?.general?.banner_slider?.delay || 0),
						isHidePagination: info?.page?.general?.banner_slider?.hide_pagination === '1',
						speed: Number(info?.page?.general?.banner_slider?.speed || 0),
						typePagination: info?.page?.general?.banner_slider?.type_pagination,
						items: info?.page?.general?.banner_slider?.items?.map?.(({ url }) => ({ url })) || [],
					},
					type: info?.page?.general?.banner_type,
				};
			},
		},
		social: {
			read(_, { readField }) {
				const info = readField('info');

				return {
					facebook: info?.page?.social?.facebook,
					googlePlus: info?.page?.social?.google_plus,
					instagram: info?.page?.social?.instagram,
					pinterest: info?.page?.social?.pinterest,
					twitter: info?.page?.social?.twitter,
					vimeo: info?.page?.social?.vimeo,
					website: info?.page?.social?.website,
					youtube: info?.page?.social?.youtube,
				};
			},
		},
		businessProfile: {
			read: (_, { readField }) => ({
				items: readField('info')?.page?.business?.profile?.map?.(({ label, value }) => ({ label, value })) || [],
			}),
		},
		problems: {
			read: (_, { readField }) => ({
				items: readField('info')?.page?.problems?.faq?.map?.(({ question, answer }) => ({ question, answer })) || [],
			}),
		},
		certifications: {
			read: (_, { readField }) => ({
				items: (
					readField('info')?.page?.certifications?.data?.map?.(({ label, img, description }) => ({
						label: label?.replace(/<[^>]+>/g, ''),
						image: img?.replace(/.*src=['"]([^'"]+)['"].*/igm, '$1'),
						description,
					})) || []
				),
			}),
		},
		info: {
			merge: (_, incoming) => JSON.parse(incoming),
		},
		isExistReviews: {
			read() {
				return false;
			},
		},
	},
};

export { VendorInfoTypePolicy };
