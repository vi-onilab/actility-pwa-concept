const router = {
	withFullUrl: (current = '') => `${window.location.origin}${current}`,
	getHomeUrl: () => '/',
	getHomePath: () => '/',
	getCategoryUrl: (category) => {
		if (!category) {
			return null;
		}

		if (category?.urlKey?.length > 0) {
			return `/${category.urlKey}`;
		}

		return `/category/${category?.id || category}`;
	},
	getCategoryPath: () => '/category/:id',
	getCompareUrl: () => '/compare',
	getComparePath: () => '/compare',
	getCartUrl: () => '/cart',
	getCartPath: () => '/cart',
	getMicrositeUrl: (id) => `/microsite${id?.toString?.().length > 0 ? `/${id}` : ''}`,
	getMicrositePath: () => '/microsite/:id',
	getProductUrl: (product) => {
		if (!product) {
			return null;
		}

		if (product?.urlRewrites?.[0]?.url) {
			return `/${product.urlRewrites[0].url}`;
		}

		return `/product/${product?.id || product}`;
	},
	getProductPath: () => '/product/:id',
	getSearchUrl: (search = null, filters = null) => `/search?${search ? `q=${search}&` : ''}${filters || ''}`,
	getSearchPath: () => '/search',
	getBlogUrl: (post) => (post ? `/blog/${post?.identifier || post}` : null),
	getBlogPath: () => '/blog/:id',
	getCmsPageUrl: (page) => {
		if (!page) {
			return null;
		}

		if (page?.urlKey || page?.identifier) {
			return page?.urlKey || page?.identifier;
		}

		return `/info/${page}`;
	},
	getCmsPagePath: () => '/info/:id',
	getMenuNodeUrl: (node) => {
		if (node?.content?.urlPath?.length > 0) {
			return {
				to: `/${node.content.urlPath}`,
			};
		}

		switch (node?.content?.type) {
		case 'cms_page_link':
			return {
				to: node?.content?.urlKey,
			};
		case 'cms_page':
			return {
				to: `/${node?.content?.urlKey || node?.content?.urlPath}`,
			};
		case 'product':
			return {
				to: `/product/${node?.content?.id}`,
			};
		case 'category':
			return {
				to: `/category/${node?.content?.id}`,
			};
		case 'custom_url':
			return {
				to: node?.content?.url,
				isExternal: !!node?.content?.isExternal,
				isTargetBlank: !!node?.content?.target,
			};
		default:
			return null;
		}
	},
	getMyAccountUrl: () => '/account',
	getMyAccountPath: () => '/account',
	getWishlistUrl: () => '/account/wishlist',
	getWishlistPath: () => '/account/wishlist',
	getMyOrdersUrl: () => '/account/orders',
	getMyOrdersPath: () => '/account/orders',
	getMyAddressesUrl: () => '/account/addresses',
	getMyAddressesPath: () => '/account/addresses',
	getMySavedCardsUrl: () => '/account/saved-cards',
	getMySavedCardsPath: () => '/account/saved-cards',
	getMyReviewsUrl: () => '/account/reviews',
	getMyReviewsPath: () => '/account/reviews',
	getMyMessagesUrl: () => '/account/messages',
	getMyMessagesPath: () => '/account/messages',
	getMyQuotationsUrl: () => '/account/quotations',
	getMyQuotationsPath: () => '/account/quotations',
	getMySubscriptionHistoryUrl: () => '/account/subscription-history',
	getMySubscriptionHistoryPath: () => '/account/subscription-history',
	getEntityUrl: (entity) => {
		switch (entity?.__typename) {
		case 'SimpleProduct':
		case 'ConfigurableProduct':
		case 'VirtualProduct':
		case 'BundleProduct':
			return router.getProductUrl(entity);
		case 'CategoryTree':
			return router.getCategoryUrl(entity);
		case 'CmsPage':
			return router.getCmsPageUrl(entity);
		default:
			return null;
		}
	},
};

const DEFAULT_ROUTER_PATHS = [
	router.getWishlistPath(),
	router.getCategoryPath(),
	router.getComparePath(),
	router.getCartPath(),
	router.getMicrositePath(),
	router.getProductPath(),
	router.getSearchPath(),
	router.getBlogPath(),
	router.getCmsPagePath(),
	router.getMyAccountPath(),
	router.getMyOrdersPath(),
	router.getMyAddressesPath(),
	router.getMySavedCardsPath(),
	router.getMyReviewsPath(),
	router.getMyMessagesPath(),
	router.getMyQuotationsPath(),
	router.getMySubscriptionHistoryPath(),
];

const useRouter = () => router;

export { useRouter, DEFAULT_ROUTER_PATHS };
