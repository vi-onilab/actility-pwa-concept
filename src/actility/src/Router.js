import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from 'modules/Header';
import { Footer } from 'modules/Footer';
import { ScrollToTop } from 'modules/ScrollToTop';
import { useRouter } from 'hooks';
import UrlResolverPage from 'pages/UrlResolverPage';
import { CustomerVerificationBanner } from 'modules/Customer';
import { MediaBreakpointUp } from 'providers';
import { CategoryPageSkeleton } from 'pages/CategoryPage/CategoryPage.skeleton';
import { SearchPageSkeleton } from 'pages/SearchPage/SearchPage.skeleton';
import { ProductPageSkeleton } from 'pages/ProductPage/ProductPage.skeleton';
import { MicrositePageSkeleton } from 'pages/MicrositePage/MicrositePage.skeleton';
import { HomePageSkeleton } from 'pages/HomePage/HomePage.skeleton';
import { ComparePageSkeleton } from 'pages/ComparePage/ComparePage.skeleton';

const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MicrositePage = lazy(() => import('./pages/MicrositePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CMSPage = lazy(() => import('./pages/CMSPage'));
const MyAccountPage = lazy(() => import('./pages/MyAccountPage'));

const Router = () => {
	const {
		getHomePath,
		getCategoryPath,
		getSearchPath,
		getMicrositePath,
		getProductPath,
		getComparePath,
		getCmsPagePath,
		getCartPath,
		getMyAccountPath,
	} = useRouter();

	return (
		<>
			<MediaBreakpointUp name="lg">
				<CustomerVerificationBanner />
			</MediaBreakpointUp>
			<Header />
			<Switch>
				<Route exact path={getHomePath()}>
					<Suspense fallback={<HomePageSkeleton />}>
						<HomePage />
					</Suspense>
				</Route>
				<Route exact path={getCategoryPath()}>
					<Suspense fallback={<CategoryPageSkeleton />}>
						<CategoryPage />
					</Suspense>
				</Route>
				<Route exact path={getSearchPath()}>
					<Suspense fallback={<SearchPageSkeleton />}>
						<SearchPage />
					</Suspense>
				</Route>
				<Route exact path={getMicrositePath()}>
					<Suspense fallback={<MicrositePageSkeleton />}>
						<MicrositePage />
					</Suspense>
				</Route>
				<Route exact path={getProductPath()}>
					<Suspense fallback={<ProductPageSkeleton />}>
						<ProductPage />
					</Suspense>
				</Route>
				<Route exact path={getComparePath()}>
					<Suspense fallback={<ComparePageSkeleton />}>
						<ComparePage />
					</Suspense>
				</Route>
				<Route exact path={getCmsPagePath()}>
					<Suspense fallback="Loading...">
						<CMSPage />
					</Suspense>
				</Route>
				<Route exact path={getCartPath()}>
					<Suspense fallback="Loading...">
						<CartPage />
					</Suspense>
				</Route>
				<Route path={getMyAccountPath()}>
					<Suspense fallback="Loading...">
						<MyAccountPage />
					</Suspense>
				</Route>
				<Route>
					<UrlResolverPage />
				</Route>
			</Switch>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export { Router };
