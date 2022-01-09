import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SplitBoxSide.module.scss';

const SplitBoxSide = (
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

SplitBoxSide.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBoxSide.defaultProps = {
	children: null,
	className: null,
};

export { SplitBoxSide };