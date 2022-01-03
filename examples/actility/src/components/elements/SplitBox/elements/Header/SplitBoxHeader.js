import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SplitBoxHeader.module.scss';

const SplitBoxHeader = (
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

SplitBoxHeader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBoxHeader.defaultProps = {
	children: null,
	className: null,
};

export { SplitBoxHeader };
