import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './CounterList.module.scss';

const CounterList = (
	{
		children,
		className,
	},
) => (
	<ul
		className={classNames(css.wrapper, className)}
	>
		{children}
	</ul>
);

CounterList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CounterList.defaultProps = {
	children: null,
	className: null,
};

export { CounterList };
