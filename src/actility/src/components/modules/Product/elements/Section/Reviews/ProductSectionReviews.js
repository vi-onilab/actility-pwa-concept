import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ProductRating, ProductSection, useProductContext } from 'modules/Product';
import { ShowMore } from 'elements/ShowMore';
import {
	SplitBox,
	SplitBoxHeader,
	SplitBoxMain,
	SplitBoxSide,
	SplitBoxText,
	SplitBoxTitle,
} from 'elements/SplitBox';
import {
	ReviewCard, ReviewCardSkeleton, ReviewList, ReviewRatingProgress, ReviewRatingProgressList,
} from 'modules/Review';
import { Container } from 'elements/Container';
import { WriteReviewButton } from 'modules/Review/elements/WriteReview';
import { useQuery } from '@apollo/client';
import { ProductDetailReviewsQuery } from 'schemas';
import { PaginationArrows } from 'modules/Pagination';
import { MediaBreakpointDown, MediaBreakpointUp, useMediaBreakpoint } from 'providers';

import { ProductSectionReviewsModal } from './ProductSectionReviewsModal';
import css from './ProductSectionReviews.module.scss';

const PAGE_SIZE = 4;
const COLLAPSED_PAGE_SIZE = 2;

const ProductSectionReviews = (
	forwardRef(
		(
			{
				className,
			},
			ref,
		) => {
			const { isBreakpointDown } = useMediaBreakpoint();
			const isMediaLg = isBreakpointDown('lg');
			const [isMoreReviews, setMoreReviews] = useState(false);
			const [page, setPage] = useState(1);
			const product = useProductContext();
			const { data, loading } = useQuery(ProductDetailReviewsQuery, {
				variables: {
					id: product?.id,
					page,
					pageSize: PAGE_SIZE,
				},
				skip: !product?.id,
			});
			const reviews = data?.productDetail?.reviews || [];

			const count = product?.reviewSummary?.count || 0;
			const countPages = Math.ceil(product?.reviewSummary?.count / PAGE_SIZE);

			const currentOutputPageSize = (!isMediaLg && isMoreReviews ? PAGE_SIZE : COLLAPSED_PAGE_SIZE);

			const jsxSideHeader = (
				<div className={css.sideHeader}>
					<div className={css.sideCounters}>
						<ProductRating
							data={product}
							variant="singleLarge"
						/>
						<SplitBoxText>
							{`${count} reviews`}
						</SplitBoxText>
					</div>
					{!product?.isExistReviews && (
						<p className={css.sideInfo}>
							<MediaBreakpointDown name="lg">
								No reviews yet
							</MediaBreakpointDown>
							<MediaBreakpointUp name="lg">
								Be the first who write a review
							</MediaBreakpointUp>
						</p>
					)}
					<WriteReviewButton sku={product?.sku}>
						Write a review
					</WriteReviewButton>
				</div>
			);

			return (
				<ProductSection
					id="reviews"
					ref={ref}
				>
					<Container>
						<SplitBox
							className={classNames(css.wrapper, className)}
						>
							<SplitBoxSide>
								<SplitBoxHeader>
									<SplitBoxTitle>
										Ratings & reviews
									</SplitBoxTitle>
								</SplitBoxHeader>

								{product?.isExistReviews && (
									<div className={css.side}>
										{jsxSideHeader}

										{!isMediaLg && product?.reviewSummary?.votes?.length > 0 && (
											<ReviewRatingProgressList>
												{product?.reviewSummary?.votes?.map(({ label, value }) => (
													<ReviewRatingProgress
														item={label}
														value={count > 0 ? value / count : 0}
														index={label}
														key={label}
														count={value}
													/>
												))}
											</ReviewRatingProgressList>
										)}
									</div>
								)}
							</SplitBoxSide>
							<SplitBoxMain className={css.main}>
								{product?.isExistReviews ? (
									<>
										<div className={css.space} />
										<ReviewList>
											{loading ? (
												Array.from({ length: currentOutputPageSize }).map((item, index) => (
													<ReviewCardSkeleton
														key={index}
													/>
												))
											) : (
												reviews
													?.slice(0, currentOutputPageSize)
													?.map((review, index) => (
														<ReviewCard
															key={review?.id || index}
															data={review}
														/>
													))
											)}

											{!isMediaLg && isMoreReviews && countPages > 1 && (
												<PaginationArrows
													current={page}
													count={countPages}
													onNext={() => (
														setPage((prev) => Math.min(countPages, prev + 1))
													)}
													onPrev={() => (
														setPage((prev) => Math.max(1, prev - 1))
													)}
												/>
											)}

											{((isMediaLg || !isMoreReviews) && count > currentOutputPageSize) && (
												<ShowMore
													onClick={() => setMoreReviews(true)}
												>
													{`See all ${count} reviews`}
												</ShowMore>
											)}
										</ReviewList>
									</>
								) : (
									<div className={css.empty}>
										{jsxSideHeader}
									</div>
								)}
							</SplitBoxMain>
						</SplitBox>
					</Container>

					<ProductSectionReviewsModal
						isOpen={isMediaLg && isMoreReviews}
						onDismiss={() => setMoreReviews(false)}
					/>
				</ProductSection>
			);
		},
	)
);

ProductSectionReviews.propTypes = {
	className: PropTypes.string,
};

ProductSectionReviews.defaultProps = {
	className: null,
};

export { ProductSectionReviews };
