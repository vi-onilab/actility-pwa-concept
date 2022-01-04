import { Container } from 'elements/Container';
import { Flex } from 'elements/Flex';
import { ProductCardSkeleton } from 'modules/Product';
import { BreadcrumbsSkeleton } from 'elements/Breadcrumbs';
import { FilterSkeleton } from 'modules/Filters';
import { FilterContentProductListSkeleton } from 'modules/Filters/elements/Content/ProductList/FilterContentProductList.skeleton';
import { PaginationProgressSkeleton } from 'modules/Pagination';
import { SeoBoxSkeleton } from 'modules/Seo/Box/SeoBox.skeleton';
import { MediaBreakpointUp } from 'providers';
import { FilterSearchHeaderSkeleton } from 'modules/Filters/elements/SearchHeader/FilterSearchHeader.skeleton';

import css from './SearchPage.module.scss';

const SearchPageSkeleton = () => (
	<>
		<MediaBreakpointUp name="lg">
			<Container>
				<BreadcrumbsSkeleton />
			</Container>
		</MediaBreakpointUp>
		<Container variant="wide">
			<FilterSearchHeaderSkeleton />
		</Container>
		<Container variant="wide">
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

export { SearchPageSkeleton };
