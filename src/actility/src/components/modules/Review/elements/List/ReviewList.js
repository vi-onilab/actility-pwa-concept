import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ReviewList.module.scss';

const ReviewList = (
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

ReviewList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

ReviewList.defaultProps = {
	children: null,
	className: null,
};

export { ReviewList };
