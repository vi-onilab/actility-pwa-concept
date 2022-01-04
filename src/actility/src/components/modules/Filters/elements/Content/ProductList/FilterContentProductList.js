import {
	memo, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { BurgerIcon, GridViewIcon } from 'icons';
import { PaginationCombineProgressWithFloat } from 'modules/Pagination';
import { ChooseView, ChooseViewButton } from 'elements/ChooseView';
import { ProductList } from 'modules/Product';
import {
	MediaBreakpoint, MediaBreakpointDown, MediaBreakpointUp,
} from 'providers';
import { classNames } from 'helpers';

import css from './FilterContentProductList.module.scss';

const FilterContentProductList = memo((
	{
		header,
		query,
	},
) => {
	const [isGrid, setGrid] = useState(true);

	const emptyElement = useRef(null);
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting);
			},
		);
		if (emptyElement.current) {
			observer.observe(emptyElement.current);
		}
		return () => {
			if (emptyElement.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(emptyElement.current);
			}
		};
	}, [emptyElement]);

	const choseViewJsx = (
		<ChooseView className={css.chose}>
			<ChooseViewButton
				isActive={isGrid}
				onClick={() => setGrid(true)}
			>
				<Icon src={GridViewIcon} />
			</ChooseViewButton>
			<ChooseViewButton
				isActive={!isGrid}
				onClick={() => setGrid(false)}
			>
				<Icon src={BurgerIcon} />
			</ChooseViewButton>
		</ChooseView>
	);

	const totalCountJsx = (
		<span className={css.controlCount}>
			{`${query?.data?.products?.totalCount || 0} items`}
		</span>
	);

	return (
		<>
			<div className={css.categoryPageContent}>
				<MediaBreakpointDown name="lg">
					<div className={css.hiddenBlock} ref={emptyElement} />
					<div className={classNames(css.control, !isIntersecting && css.controlSticky)}>
						<div className={css.headerMain}>
							{header}
						</div>
						{choseViewJsx}
						{totalCountJsx}
					</div>
				</MediaBreakpointDown>
				<MediaBreakpointUp name="lg">
					<div className={css.control}>
						<div className={css.headerMain}>
							{header}
						</div>
						{choseViewJsx}
						{totalCountJsx}
					</div>
				</MediaBreakpointUp>

				<MediaBreakpoint>
					{({ isBreakpointDown }) => (
						<ProductList
							variant={isGrid ? 'grid' : 'list'}
							products={isBreakpointDown('lg') && query?.loading ? [] : query?.data?.products?.items}
							skeletonCount={query?.loading ? 20 : 0}
						/>
					)}
				</MediaBreakpoint>

				{query?.data?.products?.pageInfo?.totalPages > 1 && query?.data?.products?.pageInfo?.currentPage < query?.data?.products?.pageInfo?.totalPages && (
					<PaginationCombineProgressWithFloat
						onLoadPage={(currentPage, { isFloat, isNextFloat }) => {
							query?.fetchMore({
								variables: {
									currentPage,
								},
								updateQuery: (
									(isFloat || isNextFloat) ? (
										(_, { fetchMoreResult }) => fetchMoreResult
									) : null
								),
							});
							emptyElement.current?.scrollIntoView?.({
								behavior: 'smooth',
								block: 'center',
								inline: 'start',
							});
						}}
						pageInfo={query?.data?.products?.pageInfo}
						total={query?.data?.products?.totalCount}
					/>
				)}
			</div>
		</>
	);
});

FilterContentProductList.propTypes = {
	header: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
		PropTypes.string,
	]),
	query: PropTypes.oneOfType([PropTypes.object]),
};

FilterContentProductList.defaultProps = {
	header: null,
	query: null,
};

export { FilterContentProductList };
