import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
	SplitBox, SplitBoxMain, SplitBoxSide, SplitBoxText,
} from 'elements/SplitBox';
import { Rating } from 'elements/Rating';
import { WriteReviewButton } from 'modules/Review/elements/WriteReview';
import {
	ReviewCard, ReviewCardSkeleton, ReviewList, ReviewRatingProgress, ReviewRatingProgressList,
} from 'modules/Review';
import { ShowMore } from 'elements/ShowMore';
import { Container } from 'elements/Container';
import { useMediaBreakpoint } from 'providers';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { PaginationArrows } from 'modules/Pagination';

import css from './MicrositeSectionReview.module.scss';

const PAGE_SIZE = 4;
const COLLAPSED_PAGE_SIZE = 2;

const MicrositeSectionReview = (
	forwardRef((
		{
			vendor,
		},
		ref,
	) => {
		const { isBreakpointDown } = useMediaBreakpoint();
		const isMediaLg = isBreakpointDown('lg');
		const [isMoreReviews, setMoreReviews] = useState(false);
		const [page, setPage] = useState(1);
		const reviews = [];
		const loading = false;

		const count = vendor?.reviewSummary?.count || 0;
		const countPages = Math.ceil(vendor?.reviewSummary?.count / PAGE_SIZE);

		const currentOutputPageSize = (!isMediaLg && isMoreReviews ? PAGE_SIZE : COLLAPSED_PAGE_SIZE);
		const jsxHeader = (
			<div className={css.sideHeader}>
				<div className={css.sideCounters}>
					<Rating variant="singleLarge" value="5" />
					<SplitBoxText>
						243 reviews
					</SplitBoxText>
				</div>
				<WriteReviewButton>
					Write a review
				</WriteReviewButton>
			</div>
		);

		return (
			<MicrositeSectionLayout
				ref={ref}
				id="rating"
				variant="largePaddingTop"
				className={!isMediaLg && css.paddingBottom}
			>
				<Container variant="small">
					<div className={css.containerHeader}>
						<h2 className={css.containerHeaderTitle}>Ratings & reviews</h2>
					</div>
					<SplitBox>
						{vendor?.isExistReviews && (
							<SplitBoxSide>
								<div className={css.side}>
									{jsxHeader}

									{vendor?.reviewSummary?.votes?.length > 0 && (
										<ReviewRatingProgressList>
											{vendor?.reviewSummary?.votes?.map(({ label, value }) => (
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
							</SplitBoxSide>
						)}
						<SplitBoxMain>
							{vendor?.isExistReviews ? (
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
									{jsxHeader}
								</div>
							)}
						</SplitBoxMain>
					</SplitBox>
				</Container>
			</MicrositeSectionLayout>
		);
	}));

MicrositeSectionReview.propTypes = {
	vendor: PropTypes.oneOfType([PropTypes.object]),
};

MicrositeSectionReview.defaultProps = {
	vendor: null,
};

export { MicrositeSectionReview };
