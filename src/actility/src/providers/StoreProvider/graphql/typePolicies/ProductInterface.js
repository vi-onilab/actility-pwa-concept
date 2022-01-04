import { $compare, $wishlist } from 'models';
import { priceTransform } from 'helpers';
import { REGEX_NO_PHOTO } from 'constants';
import NoPhotoImage from 'images/noPhoto.svg';

const ProductInterfaceTypePolicy = {
	fields: {
		addToCartLabel: {
			read(existing) {
				return existing || 'Add to cart';
			},
		},
		// Resolve field with real name from API
		get add_to_cart_label() {
			return this.addToCartLabel;
		},

		mediaGallery: {
			merge(existing, incoming) {
				if (incoming?.length < 1) {
					return [
						{
							url: NoPhotoImage,
							label: '',
							position: 0,
							disabled: false,
						},
					];
				}
				return incoming?.map((item) => ({
					...item,
					url: item.url.match(REGEX_NO_PHOTO) ? NoPhotoImage : item.url,
				}));
			},
		},
		get media_gallery() {
			return this.mediaGallery;
		},

		isVatIncluded: {
			read() {
				return false;
			},
		},

		isExistSubscription: {
			read(_, { readField }) {
				return readField('subscriptionsList')?.length > 0;
			},
		},
		isSimpleProduct: {
			read(_, { readField }) {
				return readField('__typename') === 'SimpleProduct';
			},
		},
		isExistReviews: {
			read(_, { readField }) {
				return readField('review_summary')?.review_count > 0;
			},
		},
		isExistCustomization: {
			read(_, { readField }) {
				return readField('customizeOptions')?.length > 0;
			},
		},
		isInCompare: {
			read(_, { readField }) {
				return $compare.isInCompare(readField('id'));
			},
		},
		isInCart: {
			read() {
				return false;
			},
		},
		isInWishlist: {
			read(_, { readField }) {
				return $wishlist.isInWishlist(readField('id'));
			},
		},
		priceBadges: {
			read() {
				return [];
			},
		},
		calculatedPrice: {
			read(existing, { readField }) {
				if (existing) {
					return existing;
				}

				const priceRange = readField('price_range');

				const maximumPrice = priceRange?.maximum_price;
				const minimumPrice = priceRange?.minimum_price;
				const isRange = minimumPrice?.final_price?.value !== maximumPrice?.final_price?.value;

				const value = minimumPrice?.final_price?.value || 0;
				const oldValue = minimumPrice?.final_price?.value || 0;

				return {
					current: priceTransform(value),
					initial: priceTransform(oldValue),
					isRange,
				};
			},
		},
		subscriptionsList: {
			read() {
				return [
					{
						id: 1,
						label: 'Quarterly',
						text: '€170.00',
						content: {
							label: 'Subscription Fee',
							currentValue: '€170.00/mo.',
						},
					},
					{
						id: 2,
						label: 'Monthly',
						text: '€159.00',
						content: {
							label: 'Subscription Fee',
							currentValue: '€159.00/mo.',
						},
					},
					{
						id: 3,
						label: 'Yearly',
						text: '€139.00',
						badge: '€240.00 saved',
						content: {
							label: 'Subscription Fee',
							currentValue: 'First 15 days for FREE*',
							initialValue: '€139.00/mo.',
							description: '*Your subscription will be changed after 15 days automatically.',
						},
					},
				];
			},
		},
		customizeOptions: {
			read(existing, { readField }) {
				if (existing) {
					return existing;
				}

				const options = readField('options');
				const customizeOptions = readField('configurable_options');

				const OPTION_TYPE_BY_MODEL = {
					CustomizableCheckboxOption: 'checkbox',
					CustomizableRadioOption: 'radio',
				};

				return [
					readField('isExistSubscription') && ({
						type: 'subscription',
						code: 'subscription',
						label: 'Subscription period',
						required: true,
					}),
					...customizeOptions?.map(({ attribute_code: attributeCode, label, values }) => ({
						type: attributeCode === 'rf_region' ? 'rfRegion' : 'variantRadio',
						code: attributeCode,
						label,
						variant: true,
						required: true,
						values: (
							values?.map?.((item) => ({
								value: item?.uid,
								label: item?.label,
								currentPrice: priceTransform(0),
							})) || []
						),
					})) || [],
					...options?.map?.((
						{
							__typename: type, uid, title, value, required,
						},
					) => ({
						type: OPTION_TYPE_BY_MODEL?.[type],
						code: uid,
						label: title,
						variant: false,
						required,
						values: (
							value
								?.filter(({ price_type: priceType }) => priceType?.toLowerCase() === 'fixed')
								?.map((item) => ({
									value: item?.uid,
									label: item?.title,
									currentPrice: priceTransform(item?.price || 0),
								}))
						),
					})) || [],
				].filter(Boolean);
			},
		},
		specifications: {
			read(existing) {
				if (existing) {
					return existing;
				}

				return [
					{
						options: [
							{ label: 'Seller', value: 'Actility' },
							{ label: 'Seller conditions', value: 'Actility' },
							{ label: 'SKU', value: 'Smart Agriculture, Smart Industries' },
							{ label: 'Is available for sale', value: 'Yes' },
						],
					},
					{
						options: [
							{ label: 'Other protocol', value: 'Bluetooth Low' },
							{ label: 'Solution Represented', value: 'Smart Agriculture' },
							{ label: 'Power supply', value: 'Replaceable battery' },
							{ label: 'Battery type', value: 'Lithium metal' },
							{ label: 'Antenna', value: 'Integrated' },
						],
					},
					{
						options: [
							{ label: 'Other protocol', value: 'Bluetooth Low' },
							{ label: 'Solution Represented', value: 'Smart Agriculture' },
							{ label: 'Power supply', value: 'Replaceable battery' },
							{ label: 'Battery type', value: 'Lithium metal' },
							{ label: 'Antenna', value: 'Integrated' },
						],
					},
				];
			},
		},
	},
};

export { ProductInterfaceTypePolicy };
