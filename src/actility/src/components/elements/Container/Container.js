import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Container.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	none: css.variantNone,
	wide: css.variantWide,
	small: css.variantSmall,
	stretch: css.variantStretch,
};

const Container = (
	{
		as,
		children,
		className,
		variant,
	},
) => (
	createElement(
		as,
		{
			className: classNames(
				css.container,
				variant && VARIANTS?.[variant],
				className,
			),
		},
		children,
	)
);

Container.defaultProps = {
	children: null,
	className: null,
	variant: 'default',
	as: 'div',
};

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'none', 'wide', 'small']),
	as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export { Container };
