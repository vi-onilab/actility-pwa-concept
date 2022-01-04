import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SplitBoxTitle.module.scss';

const SplitBoxTitle = (
	{
		children,
		className,
	},
) => (
	<h2
		className={classNames(css.wrapper, className)}
	>
		{children}
	</h2>
);

SplitBoxTitle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBoxTitle.defaultProps = {
	children: null,
	className: null,
};

export { SplitBoxTitle };
