import { useUrlResolver } from 'hooks';
import ProductPage from 'pages/ProductPage';
import CategoryPage from 'pages/CategoryPage';
import CMSPage from 'pages/CMSPage';
import { Error404 } from 'elements/Error404';
import { UrlResolverPageSkeleton } from 'pages/UrlResolverPage/UrlResolverPage.skeleton';

const RESOLVERS = {
	PRODUCT: ProductPage,
	CATEGORY: CategoryPage,
	CMS_PAGE: CMSPage,
};

const UrlResolverPage = () => {
	const { data, loading } = useUrlResolver();

	if (loading) {
		return (
			<UrlResolverPageSkeleton />
		);
	}

	const RenderPage = RESOLVERS?.[data?.type];

	if (!RenderPage) {
		return (
			<Error404 />
		);
	}

	return (
		<RenderPage id={data?.id} />
	);
};

export default UrlResolverPage;
