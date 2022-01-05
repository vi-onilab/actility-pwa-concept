import { Icon } from 'elements/Icon';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { RatingIcon } from 'icons';

import css from './Rating.module.scss';

const VARIANTS = {
	single: css.variantSingle,
	singleLarge: css.variantSingleLarge,
	singleLargeQuickView: css.variantSingleLargeQuickView,
	list: css.variantList,
	listVertical: css.variantListVertical,
};

const Rating = (
	{
		value,
		count,
		className,
		variant,
	},
) => {
	const countText = count >= 0 ? `Reviews: ${count || 0}` : null;
	const valueNumber = +(value || 0);
	const outputValue = (valueNumber > 5 ? (valueNumber / 20) : valueNumber).toFixed(1);

	switch (variant) {
	case 'list':
	case 'listVertical':
		return (
			<div className={classNames(css.cardHeaderRating, className, variant && VARIANTS?.[variant])}>
				<div className={css.cardHeaderRatingWrapper}>
					{Array.from({ length: 5 }).map((item, index) => (
						<Icon
							key={item || index}
							src={RatingIcon}
							className={classNames(
								css.cardHeaderRatingStarsIcon,
								outputValue >= (index + 1) && css.isActive,
							)}
						/>
					))}
				</div>
				{countText && (
					<p className={css.cardHeaderRatingText}>

						<span>{countText}</span>
					</p>
				)}
			</div>
		);
	default:
		return (
			<div
				title={countText}
				className={classNames(
					css.rating,
					className,
					variant && VARIANTS?.[variant],
					valueNumber === 0 && css.isEmpty,
				)}
			>
				<Icon src={RatingIcon} className={css.ratingIcon} />
				<span className={css.ratingValue}>{outputValue}</span>
			</div>
		);
	}
};

Rating.propTypes = {
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['single', 'singleLarge', 'list', 'listVertical', 'singleLargeQuickView']),
};

Rating.defaultProps = {
	value: null,
	count: null,
	className: null,
	variant: null,
};

export { Rating };
