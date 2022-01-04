import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './NavList.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	light: css.variantLight,
};

const NavList = (
	{
		children,
		className,
		variant,
	},
) => (
	<div
		className={classNames(
			css.main,
			variant && VARIANTS?.[variant],
			className,
		)}
	>
		{children}
	</div>
);

NavList.defaultProps = {
	className: null,
	variant: 'default',
	children: null,
};
NavList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'light']),
};

export { NavList };
