import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Counter.module.scss';

const Counter = (
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

Counter.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

Counter.defaultProps = {
	children: null,
	className: null,
};

export { Counter };
