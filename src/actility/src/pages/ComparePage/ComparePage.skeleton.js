import { Container } from 'elements/Container';
import { BreadcrumbsSkeleton } from 'elements/Breadcrumbs';
import { Skeleton, SkeletonText } from 'elements/Skeleton';
import { Flex } from 'elements/Flex';
import { ProductCardSkeleton } from 'modules/Product';
import { MediaBreakpointUp } from 'providers';

import css from './ComparePage.module.scss';

const ComparePageSkeleton = () => (
	<Container>
		<MediaBreakpointUp name="lg">
			<BreadcrumbsSkeleton />
			<Skeleton className={css.comparePageSectionSkeleton} />
		</MediaBreakpointUp>
		<Flex direction="row" className={css.comparePageScrollWrapper}>
			<Flex direction="column" justifyContent="spaceBetween" className={css.comparePageCellSkeleton}>
				<MediaBreakpointUp name="lg">
					<Skeleton className={css.comparePageCellBtnSkeleton} />
				</MediaBreakpointUp>
				<Skeleton className={css.comparePageCellBtnSkeleton} />
			</Flex>
			<Flex direction="column" justifyContent="spaceBetween" className={css.comparePageCellSkeleton}>
				<ProductCardSkeleton variant="compare" />
			</Flex>
			<Flex direction="column" justifyContent="spaceBetween" className={css.comparePageCellSkeleton}>
				<ProductCardSkeleton variant="compare" />
			</Flex>
			<Flex direction="column" justifyContent="spaceBetween" className={css.comparePageCellSkeleton}>
				<ProductCardSkeleton variant="compare" />
			</Flex>
			<Flex direction="column" justifyContent="spaceBetween" className={css.comparePageCellSkeleton}>
				<ProductCardSkeleton variant="compare" />
			</Flex>
		</Flex>
		<SkeletonText repeat="10" containerClassName={css.comparePageParamsSkeleton} />
	</Container>
);

export { ComparePageSkeleton };
