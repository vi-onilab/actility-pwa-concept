import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './AuthLayout.module.scss';

const AuthLayout = (
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

AuthLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

AuthLayout.defaultProps = {
	children: null,
	className: null,
};

export { AuthLayout };
