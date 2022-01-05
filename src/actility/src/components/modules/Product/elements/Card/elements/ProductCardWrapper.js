import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from '../ProductCard.module.scss';

const VARIANTS = {
	list: css.variantList,
	grid: css.variantGrid,
	large: css.variantLarge,
	medium: css.variantMedium,
	small: css.variantSmall,
	compare: css.variantCompare,
	microsite: css.variantMicrosite,
};

const ProductCardWrapper = (
	{
		as, variant, className, children,
	},
) => (
	createElement(
		as,
		{
			className: classNames(css.card, variant && VARIANTS?.[variant], className),
		},
		<div className={css.cardWrapper}>{children}</div>,
	)
);

ProductCardWrapper.defaultProps = {
	as: 'div',
	className: null,
	variant: 'medium',
	children: null,
};

ProductCardWrapper.propTypes = {
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['small', 'medium', 'large', 'list', 'grid', 'compare', 'microsite']),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

export { ProductCardWrapper };
