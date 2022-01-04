import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SplitBoxMain.module.scss';

const SplitBoxMain = (
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

SplitBoxMain.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBoxMain.defaultProps = {
	children: null,
	className: null,
};

export { SplitBoxMain };
