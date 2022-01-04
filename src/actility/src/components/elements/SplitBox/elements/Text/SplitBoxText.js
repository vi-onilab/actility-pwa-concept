import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SplitBoxText.module.scss';

const SplitBoxText = (
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

SplitBoxText.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBoxText.defaultProps = {
	children: null,
	className: null,
};

export { SplitBoxText };
