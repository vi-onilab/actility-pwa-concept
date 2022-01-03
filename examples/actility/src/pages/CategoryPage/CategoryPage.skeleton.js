import { Container } from 'elements/Container';
import { Flex } from 'elements/Flex';
import { ProductCardSkeleton } from 'modules/Product';
import { BreadcrumbsSkeleton } from 'elements/Breadcrumbs';
import { CategoryBannerSkeleton } from 'modules/Category/Banner';
import { CategoryLayoutSkeleton } from 'modules/Category/Layout';
import { FilterSkeleton } from 'modules/Filters';
import { FilterContentProductListSkeleton } from 'modules/Filters/elements/Content/ProductList/FilterContentProductList.skeleton';
import { PaginationProgressSkeleton } from 'modules/Pagination';
import { SeoBoxSkeleton } from 'modules/Seo/Box/SeoBox.skeleton';
import { MediaBreakpointUp } from 'providers';
import css from './CategoryPage.module.scss';

const CategoryPageSkeleton = () => (
	<>
		<MediaBreakpointUp name="lg">
			<Container>
				<BreadcrumbsSkeleton />
			</Container>
		</MediaBreakpointUp>
		<Container variant="wide">
			<CategoryBannerSkeleton className={css.banner} />
			<CategoryLayoutSkeleton />
			<Flex flex="auto" direction="row">
				<FilterSkeleton className={css.filter} />
				<Flex flex="auto" direction="column" wrap="wrap">
					<Flex flex="auto">
						<FilterContentProductListSkeleton className={css.filterContentProductList} />
					</Flex>
					<Flex flex="auto" wrap="wrap" className={css.productListWrapper}>
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
						<ProductCardSkeleton variant="grid" />
					</Flex>
					<Flex alignItems="center" justifyContent="center">
						<PaginationProgressSkeleton />
					</Flex>
				</Flex>
			</Flex>
			<SeoBoxSkeleton className={css.seoBlock} />
		</Container>
	</>
);

export { CategoryPageSkeleton };
