import {
	CmsBlockTypePolicy,
	CompareListTypePolicy,
	ProductInterfaceTypePolicy,
	ProductReviewSummaryTypePolicy,
	QueryTypePolicy,
	ReviewItemTypePolicy,
	VendorInfoTypePolicy,
} from './typePolicies';

const createTypePolicies = () => ({
	Query: QueryTypePolicy,
	CmsBlock: CmsBlockTypePolicy,
	ProductReviewSummary: ProductReviewSummaryTypePolicy,
	ReviewItem: ReviewItemTypePolicy,
	SimpleProduct: ProductInterfaceTypePolicy,
	ConfigurableProduct: ProductInterfaceTypePolicy,
	VirtualProduct: ProductInterfaceTypePolicy,
	BundleProduct: ProductInterfaceTypePolicy,
	VendorInfo: VendorInfoTypePolicy,
	CompareList: CompareListTypePolicy,
});

export { createTypePolicies };
