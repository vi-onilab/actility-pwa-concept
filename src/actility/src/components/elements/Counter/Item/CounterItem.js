import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './CounterItem.module.scss';

const CounterItem = (
	{
		children,
		className,
		count,
	},
) => (
	<li
		className={classNames(css.wrapper, className)}
	>
		{count && <div className={css.counter}>{count}</div>}
		<div className={css.content}>
			{children}
		</div>
	</li>
);

CounterItem.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	count: PropTypes.number,
};

CounterItem.defaultProps = {
	children: null,
	className: null,
	count: null,
};

export { CounterItem };
