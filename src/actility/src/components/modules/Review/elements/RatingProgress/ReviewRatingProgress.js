import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { Icon } from 'elements/Icon';
import { RatingIcon } from 'icons';
import { Flex } from 'elements/Flex';

import css from './ReviewRatingProgress.module.scss';

const ReviewRatingProgress = (
	{
		className,
		item,
		index,
		value,
		count,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		<Flex alignItems="center" className={css.progressItem} key={item || index}>
			<div className={css.progressStars}>
				<div className={css.progressStarCount}>{index}</div>
				<Icon
					src={RatingIcon}
					className={css.progressItem}
				/>
			</div>
			<div className={css.progressRange}>
				<div
					style={{ width: `${value * 100}%` }}
					className={css.progressValue}
				/>
			</div>
			<div className={css.progressCount}>{count}</div>
		</Flex>
	</div>
);

ReviewRatingProgress.propTypes = {
	className: PropTypes.string,
	item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	value: PropTypes.number,
	count: PropTypes.number,
};

ReviewRatingProgress.defaultProps = {
	className: null,
	item: null,
	index: null,
	value: 0,
	count: 0,
};

export { ReviewRatingProgress };
