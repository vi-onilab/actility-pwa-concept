import { useState } from 'react';
import PropTypes from 'prop-types';
import { ProductRating, useProductContext } from 'modules/Product';
import { SplitBoxText } from 'elements/SplitBox';
import {
	ReviewCard, ReviewCardSkeleton, ReviewList, ReviewRatingProgress, ReviewRatingProgressList,
} from 'modules/Review';
import { WriteReviewButton } from 'modules/Review/elements/WriteReview';
import { useQuery } from '@apollo/client';
import { ProductDetailReviewsQuery } from 'schemas';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { InView } from 'elements/InView';

import css from './ProductSectionReviews.module.scss';

const PAGE_SIZE = 8;

const ProductSectionReviewsModal = (
	{
		isOpen,
		onDismiss,
	},
) => {
	const [page, setPage] = useState(1);
	const product = useProductContext();
	const [reviews, setReviews] = useState([]);
	const { loading } = useQuery(ProductDetailReviewsQuery, {
		variables: {
			id: product?.id,
			page,
			pageSize: PAGE_SIZE,
		},
		skip: !product?.id || !isOpen,
		onCompleted(data) {
			setReviews((prev) => [
				...prev,
				...data?.productDetail?.reviews,
			]);
		},
	});

	const count = product?.reviewSummary?.count || 0;
	const countPages = Math.floor(product?.reviewSummary?.count / PAGE_SIZE);

	return (
		<ModalPortal
			isOpen={isOpen}
			onDismiss={onDismiss}
			header={(
				<ModalHeaderBackArrow onDismiss={onDismiss}>
					{`Ratings & reviews (${count} reviews)`}
				</ModalHeaderBackArrow>
			)}
		>

			<div className={css.side}>
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
					<WriteReviewButton sku={product?.sku}>
						Write a review
					</WriteReviewButton>
				</div>
				{product?.reviewSummary?.votes?.length > 0 && (
					<ReviewRatingProgressList>
						{product?.reviewSummary?.votes?.map(({ label, value }) => (
							<ReviewRatingProgress
								item={label}
								index={label}
								key={label}
								count={value}
							/>
						))}
					</ReviewRatingProgressList>
				)}
			</div>

			<ReviewList>

				{
					reviews
						?.map((review, index) => (
							<ReviewCard
								key={review?.id || index}
								data={review}
							/>
						))
				}

				{loading && Array.from({ length: PAGE_SIZE }).map((item, index) => (
					<ReviewCardSkeleton
						key={index}
					/>
				))}

				{countPages > page && (
					<InView
						onInView={() => !loading && setPage((prev) => prev + 1)}
					>
						<ReviewCardSkeleton />
					</InView>

				)}
			</ReviewList>
		</ModalPortal>
	);
};

ProductSectionReviewsModal.propTypes = {
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
};

ProductSectionReviewsModal.defaultProps = {
	isOpen: false,
	onDismiss: null,
};

export { ProductSectionReviewsModal };
