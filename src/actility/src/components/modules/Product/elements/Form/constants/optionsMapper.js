import {
	ProductFormOptionsCheckbox, ProductFormOptionsRadio, ProductFormOptionsRfRegion,
	ProductFormOptionsSubscription, ProductFormOptionsVariantRadio,
} from '../elements';

const PRODUCT_OPTIONS_MAPPER = {
	rfRegion: ProductFormOptionsRfRegion,
	variantRadio: ProductFormOptionsVariantRadio,
	checkbox: ProductFormOptionsCheckbox,
	radio: ProductFormOptionsRadio,
	subscription: ProductFormOptionsSubscription,
};

export { PRODUCT_OPTIONS_MAPPER };
