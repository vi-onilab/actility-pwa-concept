import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ReviewRatingProgressList.module.scss';

const ReviewRatingProgressList = (
	{
		children,
		className,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{children}
	</div>
);

ReviewRatingProgressList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

ReviewRatingProgressList.defaultProps = {
	children: null,
	className: null,
};

export { ReviewRatingProgressList };
